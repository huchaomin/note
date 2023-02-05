/* eslint-disable no-param-reassign */
/**
 * Converts links to DocLink
 */

module.exports = (md) => {
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');
    if (hrefIndex >= 0) {
      const link = token.attrs[hrefIndex];
      link[0] = 'to'; // 传给 doc-link 的属性
      link[1] = decodeURI(link[1]); // to 属性的值
      token.tag = 'doc-link'; // 替换为 doc-link
    }
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.tag = 'doc-link';
    return self.renderToken(tokens, idx, options);
  };
};
