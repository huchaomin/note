/* eslint-disable no-param-reassign */
/**
 * Manages headings
 */

const { slugify } = require('../utils');

const titleRE = /<\/?[^>]+(>|$)/g;
// const apiRE = /^<doc-api /;
// const apiNameRE = /file="([^"]+)"/;
// const installationRE = /^<doc-installation /;

function parseContent(str) {
  const title = String(str)
    .replace(titleRE, '')
    .trim();

  return {
    id: slugify(title),
    title,
  };
}

module.exports = (md) => {
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const content = tokens[idx + 1]
      .children
      .reduce((acc, t) => acc + t.content, '');
    const { id, title } = parseContent(content);
    const uniqueId = `${md.$data.toc.length}-${id}`;
    if (['h2', 'h3'].includes(token.tag)) {
      token.attrSet('id', uniqueId);
    }
    token.attrSet('class', 'doc-heading');
    if (token.tag === 'h2') {
      md.$data.toc.push({ id: uniqueId, title });
    } else if (token.tag === 'h3') {
      md.$data.toc.push({ id: uniqueId, title, sub: true });
    }
    return self.renderToken(tokens, idx, options);
  };

  // md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
  //   const token = tokens[idx];
  //   return self.renderToken(tokens, idx, options);
  // };

  // 一些自定义的html标签
  // md.renderer.rules.html_block = (tokens, idx /* , options, env */) => {
  //   const token = tokens[idx];

  //   if (apiRE.test(token.content) === true) {
  //     const match = apiNameRE.exec(token.content);
  //     if (match !== null) {
  //       const title = `${match[1]} API`;
  //       md.$data.toc.push({ id: slugify(title), title, deep: true });
  //     }
  //   } else if (installationRE.test(token.content) === true) {
  //     md.$data.toc.push({ id: 'installation', title: 'Installation', deep: true });
  //   }

  //   return tokens[idx].content;
  // };
};
