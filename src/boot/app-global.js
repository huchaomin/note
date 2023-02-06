import { getFileNameFromUrl } from 'utils/other.js';
import { Platform, Cookies } from 'quasar';

const componentVue = import.meta.globEager('components/**/*.vue');
const componentJs = import.meta.globEager('components/**/*.js');

export default ({ app, ssrContext }) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries({ ...componentVue, ...componentJs })) {
    app.component(getFileNameFromUrl(key), value.default);
  }
  const platform = process.env.SERVER
    ? Platform.parseSSR(ssrContext)
    : Platform;

  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies;
  app.provide('platform', platform);
  app.provide('cookies', cookies);
};
