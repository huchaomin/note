/* eslint-disable no-param-reassign */
/**
 * Adds class 'doc-note' to blockquotes, md 原生的 blockquote
 * > blockquotes
 */

module.exports = (md) => {
  md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.attrSet('class', 'doc-note');
    return self.renderToken(tokens, idx, options);
  };
};
