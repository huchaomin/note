const mdParse = require('./md-parse');

const mdRE = /.md$/;

module.exports = {
  name: 'docs-md',
  enforce: 'pre',

  transform(code, id) {
    if (mdRE.test(id) === false) return;
    try {
      // eslint-disable-next-line consistent-return
      return mdParse(code); // 最终的编译结果就是一个vue文件
    } catch (err) {
      this.error(err);
    }
  },
};

// this
// TransformContext {
//   meta: { rollupVersion: '2.77.3', watchMode: true },

// code
// 原文件内容

// id
// C:/Users/..../components.js
