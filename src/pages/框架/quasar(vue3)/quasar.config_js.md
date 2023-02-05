---
title: quasar.config.js
---

## 一览

```javascript
return {
  preFetch: true, // 是否使用预取hook, 默认为false
  eslint: {
    warnings: true,
    errors: true,
    // fix: true,
    // rawOptions: {}, // Raw options to send to ESLint
    // include?: string[], // Files to include
    // exclude?: string[], // Files to exclude
  },
  boot: [
    'i18n',
    'axios',
    'quasar-lang-pack',
    {
      path: 'others-boot', // references /src/boot/<others-boot>.js
      server: false,
      client: false,
    },
  ],
  css: [
    'app.scss',
  ],
  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [ // QuasarIconSets | QuasarFonts | Animate.css
    // 'ionicons-v4',
    // 'mdi-v5',
    // 'fontawesome-v6',
    // 'eva-icons',
    // 'themify',
    // 'line-awesome',
    // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

    'roboto-font', // 非常好看的英文字体，体积不大（23kb,开发环境，无gzip），可以加上
    'material-icons', // quasar 内部组件自带的字体文件(webfont)(130kb,开发环境，无gzip),不加上的话一些自带组件就不会显示图标
  ],
  devServer: { // https://vitejs.dev/config/#server-options
    // https: true,
    // port: 9000,
    open: true, // opens browser window automatically

    // opens Google Chrome and automatically deals with cross-platform issues:
    // const open = require('open')
    // open: {
    //   app: { name: open.apps.chrome }
    // }

    // vueDevtools: true
  },
  framework: {
    // iconSet: 'material-icons', // quasar 自带的组件使用的图标，默认为material-icons webfont (Quasar icon set)
    // lang: 'en-US', // 默认为 'en-US'，如果语言不是动态的，可在此写死。动态则参考 quasar-lang-pack
    // cssAddon: false, // 是否使用css插件 (https://quasar.dev/style/spacing#flex-addons)
    // autoImportComponentCase?: "kebab" | "pascal" | "combined"; // Format in which you will write your Vue templates when using Quasar components.
    // components: ['QAvatar', 'QChip'], // quasar 组件和指令是自动引入的，这里引入防止一些组件在特殊情况下没有引入(like plain .js or .ts files)
    // directives: [],
    plugins: [
      'Loading',
      'LoadingBar',
      'LocalStorage',
      'SessionStorage',
      'Meta',
      'Notify',
    ],
    config: {
      brand: {
        primary: '#ff0000',
        // ... 定义brand的颜色
      },
      screen: {
        bodyClasses: true,
      },
      dark: 'auto' // or Boolean true/false
      loading: {
        // 配置loading
      },
      loadingBar: {
        // 配置loadingBar
        skipHijack: true, // which turns off listening to Ajax traffic
        hijackFilter (url) {
          // example (only https://my-service.com/* should trigger)
          return /^https:\/\/my-service\.com/.test(url)
        }
      },
      notify: {
        // 配置notify
      },
    },
  },
  animations: [ // 要使用的动画，可以选all
    'fadeIn',
    'fadeOut',
  ],
  // import { UserConfig as ViteUserConfig } from "vite";
  // import { Options as VuePluginOptions } from "@vitejs/plugin-vue"
  build: {
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
      node: 'node16',
    },

    // Extend Vite config,不需要返回任何东西
    // extendViteConf (viteConf, { isClient, isServer }) {
    //   viteConf.css.modules = ...
    //   viteConf.css.postcss = ...
    //   viteConf.css.preprocessorOptions
    // }
    // extendViteConf(viteConf) {
    //   viteConf.css = {
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: '@use "src/css/_mixin.scss" as *;',
    //       },
    //     },
    //   };
    // },
    // extendViteConf?: (
    //   config: ViteUserConfig,
    //   invokeParams: InvokeParams
    // ) => void;
    // 也可以在这里使用vite的插件,但是一般用在ssr,判断哪些用在服务器端，哪些用在客户端
    // extendViteConf (viteConf, { isClient, isServer }) {
    //   viteConf.plugins.push(
    //     require('<plugin1-name>')({ /* plugin1 options */ }),
    //     require('<plugin2-name>')({ /* plugin2 options */ })
    //   )
    // }

    // viteVuePluginOptions?: VuePluginOptions; // Options for @vitejs/plugin-vue

    /**
     * Vite plugins
     *
     * @example
     *   [
     *     [ 'package-name', { ..options.. } ],
     *     [ require('some-plugin'), { ...options... } ]
     *   ]
     *
     * vitePlugins: [
     *   ['@intlify/vite-plugin-vue-i18n', {
     *     compositionOnly: true,
     *     include: path.resolve(__dirname, './src/i18n/**'),
     *   }],
     * ],
     */
    // vitePlugins?: object[];

    /**
     * @example setting an alias for a custom folder
     *    {
     *       locales: path.join(__dirname, 'src/locales')
     *    }
     */
    // alias?: object[];

    // publicPath?: string; // default: '/'

    // vueRouterMode: 'history', // available values: 'hash', 'history', 默认 'hash'
    // vueRouterBase, // Sets Vue Router base
    // vueOptionsAPI: false, // 不使用vue2的options api，默认true
    // rebuildCache: false, // rebuilds Vite/linter/etc cache on startup,false情况下使用缓存
    // analyze: true, // 是否开启打包分析 默认false
    // distDir, // 打包后的文件放在哪

    // Add properties to `process.env`
    // env: {
    //  API: ctx.dev
    //           ? 'https://dev.api.com'
    //           : 'https://prod.api.com'
    // },

    /**
     * Defines constants that get replaced in your app.
     *
     * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
     */
    // rawDefine: {},

    // polyfillModulePreload: false, // 是否添加preload polyfill，已经根据 build.target 自动决定是否添加
    // ignorePublicFolder: false, // 是否忽略public文件夹
    // minify: 'esbuild', // 是否压缩代码，默认esbuild
    // sourcemap?: boolean | 'inline' | 'hidden'; // 是否生成sourcemap，默认false
    // devQuasarTreeshaking?: boolean; // 是否开启开发环境下的tree shaking，默认false

    // 构建钩子函数 https://quasar.dev/quasar-cli-vite/quasar-config-js#build
    // beforeDev,
    // afterDev,
    // beforeBuild,
    // afterBuild,
    // onPublish,
  },

  /**
   * Use this property to change the default names of some files of your website/app if you have to.
   * All paths must be relative to the root folder of your project.
   *
   * @default
   * {
   *  rootComponent: 'src/App.vue',
   *  router: 'src/router/index',
   *  store: 'src/stores/index', // for Pinia
   *  // store: 'src/store/index' // for Vuex
   *  pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
   *  pwaServiceWorker: 'src-pwa/custom-service-worker',
   *  pwaManifestFile: 'src-pwa/manifest.json',
   *  electronMain: 'src-electron/electron-main',
   *  electronPreload: 'src-electron/electron-preload'
   * }
   */
  // sourceFiles: {},

  // 传入/index.html模板的参数
  // htmlVariables: {
  //   myVar: 'some-content'
  // }

  // supportTS: Boolean/Object, // Add support for TypeScript.
  // vendor: Object, // Add/remove files/3rd party libraries to/from vendor chunk: { add: […], remove: […] }.
}
```

## ctx

```javascript
  {
  dev: true,
  prod: false,
  mode: { spa: true },
  modeName: 'spa',
  target: {},
  targetName: undefined,
  arch: {},
  archName: undefined,
  debug: undefined
}
```

## 也可以返回一个promise

```javascript
module.exports = async function (ctx) {
  const data = await someAsyncFunction()
  return {
    // ... use "data"
  }
}

// or:
module.exports = function (ctx) {
  return new Promise(resolve => {
    // some async work then:
    // resolve() with the quasar config
    resolve({
      //
    })
  })
}
```
