module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  env: {
    node: true,
    es2021: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    'airbnb-base', // 不包括 react
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // 更为严格一点
    './.eslintrc-auto-import.json',
  ],

  // required to lint *.vue files
  plugins: [
    'vue',
    'quasar',
  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    __QUASAR_SSR__: true,
    __QUASAR_SSR_SERVER__: true,
    __QUASAR_SSR_CLIENT__: true,
    __QUASAR_SSR_PWA__: true,
    provideDocStore: true,
    useDocStore: true,
    $vImg: true,
    $loading: true,
  },

  // add your custom rules here
  rules: {
    // 使用一致的换行风格
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'max-len': ['error', { code: 150 }],
    'no-plusplus': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-void': 'off',
    'no-continue': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
    // 以下为初始化的
    'prefer-const': 2,
    'quasar/check-valid-props': 'warn',
  },
};
