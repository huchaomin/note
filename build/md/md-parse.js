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
  md.$toc = data.toc;
  const mdPageContent = md.render(content);
  md.$toc = null; // free up memory

  return getVueComponent(data, mdPageContent);
};