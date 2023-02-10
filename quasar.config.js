/* eslint-disable no-param-reassign */
const path = require('path');
const { configure } = require('quasar/wrappers'); // better IDE autocomplete experience (through Typescript):
const AutoImport = require('unplugin-auto-import/vite');
const { dirResolver, DirResolverHelper, AutoGenerateImports } = require('vite-auto-import-resolvers');
const { createSvgIconsPlugin } = require('vite-plugin-svg-icons');
const prismjs = require('vite-plugin-prismjs');
const env = require('dotenv').config().parsed;
const mdPlugin = require('./build/md');
const examplesPlugin = require('./build/examples');
const { manualChunks, chunkFileNames } = require('./build/chunks');
const { productName, description } = require('./package.json');

const resolvePath = (p) => path.resolve(__dirname, p);
// eslint-disable-next-line arrow-body-style
module.exports = configure((ctx) => {
  return {
    // eslint: {
    //   warnings: true,
    //   errors: true,
    // },
    boot: [
      'initial',
      'app-global',
    ],
    css: [
      'app.scss',
    ],
    extras: [
      'material-icons',
    ],
    build: {
      alias: {
        composables: resolvePath('src/composables'),
        constant: resolvePath('src/constant'),
        img: resolvePath('src/assets/img'),
        utils: resolvePath('src/utils'),
      },
      vueRouterMode: ctx.mode.spa ? 'hash' : 'history',
      distDir: 'docs',
      // useFilenameHashes: false, // TODO
      analyze: true,
      env: {
        DOC_NAME: productName,
        DOC_DESCRIPTION: description,
        ...env,
      },

      viteVuePluginOptions: { // Options for @vitejs/plugin-vue // TODO
        include: [/\.(vue|md)$/],
      },

      vitePlugins: [
        mdPlugin,
        examplesPlugin(ctx.prod),
        DirResolverHelper(),
        AutoImport(
          {
            vueTemplate: true, // Auto import inside Vue template
            imports: [
              ...AutoGenerateImports(),
              {
                'composables/doc-store.js': ['provideDocStore', 'useDocStore'],
              },
            ],
            resolvers: [
            // dirResolver(), // src/composables 下模块的默认导出将在项目中自动按需引入
              dirResolver({
                target: 'src/composables',
                prefix: '$',
              }),
            ],
            eslintrc: {
              enabled: true,
              globalsPropValue: 'readonly',
            },
          },
        ),
        createSvgIconsPlugin({
          iconDirs: [resolvePath('src/assets/svg')],
          symbolId: 'icon-[dir]-[name]',
        }),
        prismjs.default({
          languages: ['bash', 'html', 'css', 'ejs', 'git', 'nginx', 'json', 'js-templates', 'http',
            'markdown', 'yaml', 'uri', 'typescript', 'toml', 'scss', 'jsx', 'tsx'],
          plugins: ['line-numbers'], // TODO
          // theme: 'solarizedlight',
          // css: true,
        }),
      ],

      extendViteConf(config, { isClient }) {
        if (ctx.prod && isClient) {
          config.build.chunkSizeWarningLimit = 650;
          config.build.rollupOptions = {
            output: {
              manualChunks,
              chunkFileNames,
            },
          };
        }
      },
    },

    devServer: {
      port: 9090,
      open: {
        app: { name: 'google chrome' },
      },
    },

    framework: {
      iconSet: 'material-icons',

      components: [
        'QBadge',
        'QMarkupTable',
      ],

      plugins: [
        'AddressbarColor',
        'BottomSheet',
        'LoadingBar',
        'Cookies',
        'Dark',
        'Dialog',
        'Meta',
        'Screen',
      ],
    },

    animations: ['fadeIn', 'fadeOut'],

    ssr: {
      pwa: ctx.prod,
      prodPort: 3111,
      middlewares: [
        'render',
      ],
    },

    pwa: {
      injectPwaMetaTags: false,
      swFilename: 'service-worker.js',

      extendWorkboxGenerateSWOptions(cfg) {
        Object.assign(cfg, {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/cdn/,
              handler: 'StaleWhileRevalidate',
            },
          ],
        });
      },
    },
  };
});
