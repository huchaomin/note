const path = require('path');
const fs = require('fs');
const { Readable } = require('stream');
const { SitemapStream, streamToPromise, EnumChangefreq } = require('sitemap');

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

module.exports = (leftTree) => {
  handleLeftTree('/', leftTree);
  const stream = new SitemapStream({
    hostname: 'https://www.mulinzi.cn',
  });
  streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    fs.writeFileSync(resolvePath('../public/sitemap.xml'), data.toString());
    console.log('sitemap.xml generated');
  });
};
