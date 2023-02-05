/* eslint-disable no-param-reassign */
/**
 * Converts table to QMarkupTable
 */

module.exports = (md) => {
  // const token = tokens[idx];
  // token.tag = 'q-markup-table';
  // token.attrSet(':flat', 'true');
  // token.attrSet(':bordered', 'true');
  // return self.renderToken(tokens, idx, options);
  md.renderer.rules.table_open = (tokens, idx, options, env, self) => `
    <c-scroll-area fit-content-height class="q-mt-md q-mb-sm" :content-style="{ paddingBottom: '10px' }">
      <q-markup-table flat bordered dense>
  `;

  md.renderer.rules.table_close = (tokens, idx, options, env, self) => '</q-markup-table></c-scroll-area>';
  md.renderer.rules.th_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.attrSet('class', 'text-left');
    return self.renderToken(tokens, idx, options);
  };
};
