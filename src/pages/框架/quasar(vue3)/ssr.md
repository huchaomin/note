---
title: ssr
---

## quasar-lang-pack

[链接](https://quasar.dev/options/quasar-language-packs#dynamical-ssr-)

## Platform Detection

[链接](https://quasar.dev/options/platform-detection#note-about-ssr)

## boot redirect

The redirect() method accepts a String (full URL) or a Vue Router location String or Object.
 On SSR it can receive a second parameter which should be a Number for any of the HTTP STATUS codes that redirect the browser (3xx ones).

## cross-request state pollution

```javascript
import { boot } from 'quasar/wrappers';
import axios from 'axios';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' }); // 移到里面去，防止交叉请求状态污染

export default boot(({ app }) => {});

export { api }; // 如果移到里面去就不能在这里导出了

```

## prefetch Pinia on SSR

```javascript
// App.vue - handling Pinia stores
// example with a store named "myStore"
// placed in /src/stores/myStore.js|ts

import { useMyStore } from 'stores/myStore'

export default {
  // ...
  preFetch ({ store }) {
    const myStore = useMyStore(store)
    // do something with myStore
  }
}
```

## others

```javascript
/*
 * If not building with SSR mode, you can
 * directly export the Router/Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router/Store instance.
 */
```
