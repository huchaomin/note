/* eslint-disable no-param-reassign */
const path = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it');
const algoliasearch = require('algoliasearch');
const { parseFrontMatter } = require('./md/md-parse-utils');

const resolvePath = (p) => path.resolve(__dirname, p);
const md = markdownIt().use(require('./md/md-plugin-heading'));

const client = algoliasearch('C9LSIOZAYC', '1172d6fa70c5b4fd88e3b3908d0e2ee1');
const index = client.initIndex('mulinzi_note');
const recordArr = [];
module.exports = (code, routeName) => {
  const { data, content } = parseFrontMatter(code);

  const toc = [];
  if (data.title) {
    toc.push({
      id: 'doc-title',
      title: data.title,
    });
  }
  md.$toc = toc;
  md.render(content);
  recordArr.push(...toc);
  toc.forEach((item) => {
    delete item.sub;
    item.routeName = routeName;
  });
  index.saveObjects(recordArr, {
    autoGenerateObjectIDIfNotExist: true,
  }).then((res) => {
    console.log(res);
  }).catch((e) => {
    console.log(e);
  });
  fs.writeFileSync(resolvePath('../src/constant/algoliaRecords.json'), JSON.stringify(recordArr, null, 2));

  md.$toc = null; // free up memory
};
