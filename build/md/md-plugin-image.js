/* eslint-disable no-param-reassign */
/**
 * images
 */

module.exports = (md) => {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex('src')][1];
    const alt = token.attrs[token.attrIndex('alt')][1];
    return `
      <doc-img src="${src}" alt="${alt || token.content}"></doc-img>
    `;
  };
};
