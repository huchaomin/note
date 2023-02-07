import path from 'path';
import fs from 'fs';
import * as url from 'url';
import { Readable } from 'stream';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const leftTree = require('../src/constant/leftTree.json');

// eslint-disable-next-line no-underscore-dangle
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const resolvePath = (p) => path.resolve(__dirname, p);

const links = [];
function handleLeftTree(pPath, arr) {
  arr.forEach((item) => {
    if (!item.redirect) {
      links.push({
        url: `#${pPath === '/' ? '' : pPath}/${encodeURIComponent(item.path)}`,
        changefreq: EnumChangefreq.MONTHLY,
        lastmod: item.meta.lastUpdate,
      });
    }
    if (item.children) {
      handleLeftTree(item.path, item.children);
    }
  });
}

handleLeftTree('/', leftTree);

const stream = new SitemapStream({
  hostname: process.env.DOC_LOCATION,
});

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync(resolvePath('../public/sitemap.xml'), data.toString());
});
