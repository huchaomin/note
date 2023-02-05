import { getFileNameFromUrl } from 'utils/other.js';

const componentVue = import.meta.globEager('components/**/*.vue');
const componentJs = import.meta.globEager('components/**/*.js');

export default ({ app }) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries({ ...componentVue, ...componentJs })) {
    app.component(getFileNameFromUrl(key), value.default);
  }
};
