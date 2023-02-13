import{r as t,o as i,c as a,f as d,g as n,aa as o,v as l}from"./vendor-90615676.js";const r=o("h2",{id:"1-\u5B89\u88C5",class:"doc-heading"},"\u5B89\u88C5",-1),u=o("h2",{id:"2-\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6",class:"doc-heading"},"\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6",-1),p=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"\u63A5\u4E0B\u6765\u4F1A\u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u5B89\u88C5\u5982\u679C\u5931\u8D25\u7684\u8BDD\uFF0C\u91CD\u65B0\u5B89\u88C5\u4E00\u6B21")],-1),h=o("h2",{id:"3-\u6700\u7EC8\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6-eslintrc-js",class:"doc-heading"},[l("\u6700\u7EC8\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6"),o("code",{class:"doc-token"},".eslintrc.js")],-1),g=o("h2",{id:"4-\u6700\u7EC8\u5B89\u88C5\u7684\u5F00\u53D1\u4F9D\u8D56\u5305",class:"doc-heading"},"\u6700\u7EC8\u5B89\u88C5\u7684\u5F00\u53D1\u4F9D\u8D56\u5305",-1),v={__name:"\u5B89\u88C5",setup(_){const s=[{id:"doc-title",title:"eslint \u5B89\u88C5"},{id:"1-\u5B89\u88C5",title:"1. \u5B89\u88C5"},{id:"2-\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6",title:"2. \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6"},{id:"3-\u6700\u7EC8\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6-eslintrc-js",title:"3. \u6700\u7EC8\u751F\u6210\u7684\u914D\u7F6E\u6587\u4EF6.eslintrc.js"},{id:"4-\u6700\u7EC8\u5B89\u88C5\u7684\u5F00\u53D1\u4F9D\u8D56\u5305",title:"4. \u6700\u7EC8\u5B89\u88C5\u7684\u5F00\u53D1\u4F9D\u8D56\u5305"}];return(y,m)=>{const e=t("doc-code"),c=t("doc-page");return i(),a(c,{desc:"eslint \u624B\u52A8\u5B89\u88C5",toc:s},{default:d(()=>[r,n(e,{code:`yarn add eslint --dev
`,lang:"sh"}),u,n(e,{code:`yarn run eslint --init
`,lang:"sh"}),n(e,{code:`? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style
`,lang:"sh"}),n(e,{code:`? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
`,lang:"sh"}),n(e,{code:`? Which framework does your project use? ...
  React
> Vue.js
  None of these
`,lang:"sh"}),n(e,{code:`? Does your project use TypeScript? \xBB No / Yes
`,lang:"sh"}),n(e,{code:`? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
\u221A Browser
  Node
`,lang:"sh"}),n(e,{code:`? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
`,lang:"sh"}),n(e,{code:`? Which style guide do you want to follow? ...
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo
`,lang:"sh"}),n(e,{code:`? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
`,lang:"sh"}),p,h,n(e,{code:`module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'standard',
  ],
  'parserOptions': {
    'ecmaVersion': 6, // \u8FD9\u91CC\u4E0D\u77E5\u9053\u4E3A\u5565\u751F\u621013\u4E86\uFF0C\u6211\u4EEC\u624B\u52A8\u6539\u62106
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {},
}
`,lang:"javascript"}),g,n(e,{code:`"devDependencies": {
  "eslint": "^7.32.0",
  "eslint-config-standard": "^16.0.3",
  "eslint-plugin-import": "^2.25.4",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^5.2.0",
  "eslint-plugin-vue": "^8.2.0"
}
`,lang:"json"})]),_:1})}}};export{v as default};
