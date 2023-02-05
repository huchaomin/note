const md = require('./md');
const { getVueComponent, parseFrontMatter } = require('./md-parse-utils');

module.exports = (code) => {
  const { data, content } = parseFrontMatter(code);

  data.toc = [];
  if (data.title) {
    data.toc.push({
      id: 'doc-title',
      title: data.title,
    });
  }
  data.components = new Set(data.components || []);
  md.$data = data;
  const mdPageContent = md.render(content);
  md.$data = null; // free up memory

  return getVueComponent(data, mdPageContent);
};
