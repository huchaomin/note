/* eslint-disable no-param-reassign */
module.exports = (md) => {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx];
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
    return `
      <doc-code code="${escape(token.content)}" lang="${info.split(/(\s+)/g)[0] || 'markup'}"></doc-code>
    `;
  };
};
