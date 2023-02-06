import{r as s,o as i,c as a,f as l,g as e,ac as o}from"./vendor.js";const c=o("h2",{id:"1-\u4E00\u89C8",class:"doc-heading"},"\u4E00\u89C8",-1),u=o("h2",{id:"2-ctx",class:"doc-heading"},"ctx",-1),p=o("h2",{id:"3-\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2Apromise",class:"doc-heading"},"\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2Apromise",-1),v={__name:"quasar.config_js",setup(d){const t=[{id:"doc-title",title:"quasar.config.js"},{id:"1-\u4E00\u89C8",title:"1. \u4E00\u89C8"},{id:"2-ctx",title:"2. ctx"},{id:"3-\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2Apromise",title:"3. \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2Apromise"}];return(f,m)=>{const n=s("doc-code"),r=s("doc-page");return i(),a(r,{desc:"",toc:t},{default:l(()=>[c,e(n,{code:`return {
  preFetch: true, // \u662F\u5426\u4F7F\u7528\u9884\u53D6hook, \u9ED8\u8BA4\u4E3Afalse
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

    'roboto-font', // \u975E\u5E38\u597D\u770B\u7684\u82F1\u6587\u5B57\u4F53\uFF0C\u4F53\u79EF\u4E0D\u5927\uFF0823kb,\u5F00\u53D1\u73AF\u5883\uFF0C\u65E0gzip\uFF09\uFF0C\u53EF\u4EE5\u52A0\u4E0A
    'material-icons', // quasar \u5185\u90E8\u7EC4\u4EF6\u81EA\u5E26\u7684\u5B57\u4F53\u6587\u4EF6(webfont)(130kb,\u5F00\u53D1\u73AF\u5883\uFF0C\u65E0gzip),\u4E0D\u52A0\u4E0A\u7684\u8BDD\u4E00\u4E9B\u81EA\u5E26\u7EC4\u4EF6\u5C31\u4E0D\u4F1A\u663E\u793A\u56FE\u6807
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
    // iconSet: 'material-icons', // quasar \u81EA\u5E26\u7684\u7EC4\u4EF6\u4F7F\u7528\u7684\u56FE\u6807\uFF0C\u9ED8\u8BA4\u4E3Amaterial-icons webfont (Quasar icon set)
    // lang: 'en-US', // \u9ED8\u8BA4\u4E3A 'en-US'\uFF0C\u5982\u679C\u8BED\u8A00\u4E0D\u662F\u52A8\u6001\u7684\uFF0C\u53EF\u5728\u6B64\u5199\u6B7B\u3002\u52A8\u6001\u5219\u53C2\u8003 quasar-lang-pack
    // cssAddon: false, // \u662F\u5426\u4F7F\u7528css\u63D2\u4EF6 (https://quasar.dev/style/spacing#flex-addons)
    // autoImportComponentCase?: "kebab" | "pascal" | "combined"; // Format in which you will write your Vue templates when using Quasar components.
    // components: ['QAvatar', 'QChip'], // quasar \u7EC4\u4EF6\u548C\u6307\u4EE4\u662F\u81EA\u52A8\u5F15\u5165\u7684\uFF0C\u8FD9\u91CC\u5F15\u5165\u9632\u6B62\u4E00\u4E9B\u7EC4\u4EF6\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u6CA1\u6709\u5F15\u5165(like plain .js or .ts files)
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
        // ... \u5B9A\u4E49brand\u7684\u989C\u8272
      },
      screen: {
        bodyClasses: true,
      },
      dark: 'auto' // or Boolean true/false
      loading: {
        // \u914D\u7F6Eloading
      },
      loadingBar: {
        // \u914D\u7F6EloadingBar
        skipHijack: true, // which turns off listening to Ajax traffic
        hijackFilter (url) {
          // example (only https://my-service.com/* should trigger)
          return /^https:\\/\\/my-service\\.com/.test(url)
        }
      },
      notify: {
        // \u914D\u7F6Enotify
      },
    },
  },
  animations: [ // \u8981\u4F7F\u7528\u7684\u52A8\u753B\uFF0C\u53EF\u4EE5\u9009all
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

    // Extend Vite config,\u4E0D\u9700\u8981\u8FD4\u56DE\u4EFB\u4F55\u4E1C\u897F
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
    // \u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F7F\u7528vite\u7684\u63D2\u4EF6,\u4F46\u662F\u4E00\u822C\u7528\u5728ssr,\u5224\u65AD\u54EA\u4E9B\u7528\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u54EA\u4E9B\u7528\u5728\u5BA2\u6237\u7AEF
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

    // vueRouterMode: 'history', // available values: 'hash', 'history', \u9ED8\u8BA4 'hash'
    // vueRouterBase, // Sets Vue Router base
    // vueOptionsAPI: false, // \u4E0D\u4F7F\u7528vue2\u7684options api\uFF0C\u9ED8\u8BA4true
    // rebuildCache: false, // rebuilds Vite/linter/etc cache on startup,false\u60C5\u51B5\u4E0B\u4F7F\u7528\u7F13\u5B58
    // analyze: true, // \u662F\u5426\u5F00\u542F\u6253\u5305\u5206\u6790 \u9ED8\u8BA4false
    // distDir, // \u6253\u5305\u540E\u7684\u6587\u4EF6\u653E\u5728\u54EA

    // Add properties to \`process.env\`
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

    // polyfillModulePreload: false, // \u662F\u5426\u6DFB\u52A0preload polyfill\uFF0C\u5DF2\u7ECF\u6839\u636E build.target \u81EA\u52A8\u51B3\u5B9A\u662F\u5426\u6DFB\u52A0
    // ignorePublicFolder: false, // \u662F\u5426\u5FFD\u7565public\u6587\u4EF6\u5939
    // minify: 'esbuild', // \u662F\u5426\u538B\u7F29\u4EE3\u7801\uFF0C\u9ED8\u8BA4esbuild
    // sourcemap?: boolean | 'inline' | 'hidden'; // \u662F\u5426\u751F\u6210sourcemap\uFF0C\u9ED8\u8BA4false
    // devQuasarTreeshaking?: boolean; // \u662F\u5426\u5F00\u542F\u5F00\u53D1\u73AF\u5883\u4E0B\u7684tree shaking\uFF0C\u9ED8\u8BA4false

    // \u6784\u5EFA\u94A9\u5B50\u51FD\u6570 https://quasar.dev/quasar-cli-vite/quasar-config-js#build
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

  // \u4F20\u5165/index.html\u6A21\u677F\u7684\u53C2\u6570
  // htmlVariables: {
  //   myVar: 'some-content'
  // }

  // supportTS: Boolean/Object, // Add support for TypeScript.
  // vendor: Object, // Add/remove files/3rd party libraries to/from vendor chunk: { add: [\u2026], remove: [\u2026] }.
}
`,lang:"javascript"}),u,e(n,{code:`  {
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
`,lang:"javascript"}),p,e(n,{code:`module.exports = async function (ctx) {
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
`,lang:"javascript"})]),_:1})}}};export{v as default};
