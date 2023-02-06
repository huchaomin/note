/* eslint-disable no-param-reassign */
const path = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it');
const { parseFrontMatter } = require('./md/md-parse-utils');

const resolvePath = (p) => path.resolve(__dirname, p);
const md = markdownIt().use(require('./md/md-plugin-heading'));

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
  fs.writeFileSync(resolvePath('../src/constant/algoliaRecords.json'), JSON.stringify(recordArr, null, 2));

  md.$toc = null; // free up memory
};
