---
title: quasar tips
---

## tip

- In Quasar, all Boolean properties have `false` as the default value.
As a result, you don’t have to explictly assign them the `false` value.
- Quasar uses `eval-cheap-module-source-map` by default.
- Quasar uses the `en-US` Language Pack by default
- QBtn component will use the CSS `text-transform: uppercase` (no-caps?)
- Quasar uses `Material Icons` webfont as the icon set for its components
- Roboto comes with 5 different font weights you can use: 100, 300, 400, 500, 70
- [有'$'符号的文件才会自动引入 Quasar Sass/SCSS variables](https://quasar.dev/style/sass-scss-variables#caveat)
- q-gutter 和 q-col-gutter 区别是子元素用的是margin或者padding
- [类似砖石结构布局](https://quasar.dev/layout/grid/flexbox-patterns#masonry-like-layout)
- QLayout QPageContainer, QHeader, QFooter and QLayoutDrawer 使用margin会影响定位，使用padding没问题
- [QLayout 也可以作为里层元素，The breakpoint does not refer to the window width, but to the actual width of the QLayout](https://quasar.dev/layout/layout#containerized-qlayout)
- stores for pinia, store for vuex
- LoadingBar active when runs the preFetch hooks
- [查看quasar.config.js的配置](https://quasar.dev/quasar-cli-vite/handling-vite#inspecting-vite-config)
- console.log(process.env) 过程变量不能打印出来

## app flow

- Quasar is initialized (components, directives, plugins, Quasar i18n, Quasar icon sets)
- Quasar Extras get imported (Roboto font – if used, icons, animations, …)
- Quasar CSS & your app’s global CSS are imported
- App.vue is loaded (not yet being used)
- Store is imported (if using Pinia in src/stores or Vuex in src/store)
- Pinia (if using) is injected into the Vue app instance
- Router is imported (in src/router)
- Boot files are imported
- Router default export function executed
- Boot files get their default export function executed
- (if on Electron mode) Electron is imported and injected into Vue prototype
- (if on Cordova mode) Listening for “deviceready” event and only then continuing with following steps
- Instantiating Vue with root component and attaching to DOM

## env

quasar

| process.env.name | type | meaning |
| --- | --- | --- |
| DEV | Boolean | Code runs in development mode |
| PROD | Boolean | Code runs in production mode |
| DEBUGGING | Boolean | Code runs in development mode or --debug flag was set for production mode |
| CLIENT | Boolean | Code runs on client (not on server) |
| SERVER | Boolean | Code runs on server (not on client) |
| MODE | String | Quasar CLI mode (spa, pwa, …) |
| NODE_ENV | String | Has two possible values: production or development |

vite
[官方文档](https://vitejs.dev/guide/env-and-mode.html)

## accessing-the-router-in-pinia-stores

```javascript
import { defineStore } from 'pinia'

export const useWhateverStore = defineStore('whatever', {
  // ...
  actions: {
    whateverAction () {
      this.router.push('...') // TODO 让我试试
    }
  }
}
```
