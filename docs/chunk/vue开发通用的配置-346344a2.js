import{r as s,o as c,c as u,f as r,aa as n,v as e,g as t}from"./vendor-90615676.js";const p=n("h2",{id:"1-vue-\u5982\u4F55\u914D\u7F6E-eslint",class:"doc-heading"},"vue \u5982\u4F55\u914D\u7F6E ESLint",-1),d=n("br",null,null,-1),m=n("br",null,null,-1),w=n("blockquote",{class:"doc-note"},[n("p",null,"\u5982\u679C\u60F3\u4E3A vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684 script \u90E8\u5206\u4F7F\u7528\u5355\u72EC\u7684 parser \u53EF\u4EE5\u5C06 parserOptions.parser \u6307\u5B9A\u4E3A\u60F3\u4F7F\u7528\u7684 parser \u5373\u53EF")],-1),f=n("h2",{id:"2-vue-\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",class:"doc-heading"},"vue \u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",-1),g={__name:"vue\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",setup(b){const a=[{id:"doc-title",title:"eslint vue\u5F00\u53D1"},{id:"1-vue-\u5982\u4F55\u914D\u7F6E-eslint",title:"1. vue \u5982\u4F55\u914D\u7F6E ESLint"},{id:"2-vue-\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",title:"2. vue \u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E"}];return(v,_)=>{const o=s("doc-link"),l=s("doc-code"),i=s("doc-page");return c(),u(i,{desc:"eslint vue\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",toc:a},{default:r(()=>[p,n("p",null,[e("vue \u5B98\u65B9\u63D0\u4F9B\u4E86\u4E00\u4E2A ESLint \u63D2\u4EF6 "),t(o,{to:"https://eslint.vuejs.org/user-guide/#installation"},{default:r(()=>[e("eslint-plugin-vue")]),_:1}),e("\uFF0C"),d,e(" \u5B83\u63D0\u4F9B\u4E86 parser \u548C rules\u3002parser \u4E3A "),t(o,{to:"https://github.com/vuejs/vue-eslint-parser#readme"},{default:r(()=>[e("vue-eslint-parser")]),_:1}),e("\uFF0C"),m,e(" rules \u4E3A "),t(o,{to:"https://eslint.vuejs.org/rules/"},{default:r(()=>[e("https://eslint.vuejs.org/rules/")]),_:1}),e("\u3002")]),w,f,t(l,{code:`module.exports = {
 root: true, // \u6307\u5B9A\u5F53\u524D\u914D\u7F6E\u4E3A\u6839\u914D\u7F6E
 extends: ["plugin:vue/essential", "@vue/standard"],
 parserOptions: {
  parser: "@babel/eslint-parser", // \uFF1F\u4E0D\u77E5\u9053vue-cli\u9ED8\u8BA4\u751F\u6210\u7684\u914D\u7F6E\u662F\u4E0D\u662F\u7528\u8FD9\u4E2A\u89E3\u6790\u5668
  ecmaVersion: 6, // \u5BF9\u4E8E ES6 \u8BED\u6CD5
  sourceType: "module", // \u8BBE\u7F6E\u4E3A \u201Dscript\u201D (\u9ED8\u8BA4) \u6216 \u201Dmodule\u201D\uFF08\u5982\u679C\u4F60\u7684\u4EE3\u7801\u662F ECMAScript \u6A21\u5757)
  ecmaFeatures: {
   globalReturn: false, // \u5141\u8BB8\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u4F7F\u7528 return \u8BED\u53E5
   impliedStrict: true, // \u542F\u7528\u5168\u5C40 strict mode (\u5982\u679C ecmaVersion \u662F 5 \u6216\u66F4\u9AD8)
   jsx: true, //  \u542F\u7528 JSX
  },
  allowImportExportEverywhere: false, // \u4EC5\u5141\u8BB8 import export \u8BED\u53E5\u51FA\u73B0\u5728\u6A21\u5757\u7684\u9876\u5C42
  requireConfigFile: false, // \u5373\u4F7F\u6CA1\u6709 babelrc \u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u4F7F\u7528 babel-eslint \u6765\u89E3\u6790
 },
 env: {
  // \u4E00\u7EC4\u9884\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF
  browser: true, // \u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u7684\u5168\u5C40\u53D8\u91CF
  node: true, // Node.js \u5168\u5C40\u53D8\u91CF\u548C Node.js \u4F5C\u7528\u57DF
  commonjs: true,
  es6: true, // \u65B0\u7684 ES6 \u5168\u5C40\u53D8\u91CF
 },
 rules: {
  // \u7F29\u8FDB
  "indent": ["warn", 2, { SwitchCase: 1 }],
  // \u53CC\u5F15\u53F7
  "quotes": ["error", "double"],
  // \u672B\u5C3E\u5206\u53F7
  "semi": ["error", "always"],
  // \u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u98CE\u683C
  "linebreak-style": "off",
  // \u8981\u6C42\u6216\u7981\u6B62\u6587\u4EF6\u672B\u5C3E\u5B58\u5728\u7A7A\u884C
  "eol-last": ["warn", "always"],
  // \u5F3A\u5236\u5728\u9017\u53F7\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C
  "comma-spacing": [
   "error",
   {
    before: false,
    after: true,
   },
  ],
  // \u4F7F\u7528\u62D6\u5C3E\u9017\u53F7
  "comma-dangle": ["warn", "always-multiline"],
  // \u5192\u53F7\u4E4B\u524D\u6709\uFF0C\u4E4B\u540E\u6CA1\u6709
  "key-spacing": [
   "error",
   {
    beforeColon: false,
    afterColon: true,
    mode: "strict",
   },
  ],
  // \u5F3A\u5236\u5728\u4EE3\u7801\u5757\u4E2D\u5F00\u62EC\u53F7\u524D\u548C\u95ED\u62EC\u53F7\u540E\u6709\u7A7A\u683C
  "block-spacing": ["error", "always"],
  // \u5F3A\u5236\u5728\u4EE3\u7801\u5757\u4E2D\u4F7F\u7528\u4E00\u81F4\u7684\u5927\u62EC\u53F7\u98CE\u683C
  "brace-style": ["error", "1tbs", { allowSingleLine: true }],
  // \u5BF9\u6BCF\u4E2A\u62EC\u53F7\u8981\u6C42\u4F7F\u7528\u4E00\u81F4\u7684\u6362\u884C\u7B26\u3002\u5982\u679C\u4E00\u4E2A\u62EC\u53F7\u6709\u6362\u884C\u7B26\uFF0C\u53E6\u4E00\u4E2A\u6CA1\u6709\uFF0C\u5219\u4F1A\u62A5\u9519
  "array-bracket-newline": ["error", "consistent"],
  // \u5F3A\u5236\u6570\u7EC4\u65B9\u62EC\u53F7\u4E2D\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C
  "array-bracket-spacing": ["error", "never"],
  // \u5F3A\u5236\u6570\u7EC4\u5143\u7D20\u95F4\u51FA\u73B0\u6362\u884C
  "array-element-newline": ["off", { multiline: true, minItems: 3 }],
  // \u5224\u65AD\u76F8\u7B49\u65F6\u4F7F\u7528 === \u548C !== \uFF0C\u800C\u4E0D\u662F == \u548C !=
  "eqeqeq": "warn",
  // \u7981\u7528 console
  "no-console": "warn",
  // \u8D85\u957F\u4EE3\u7801\u9700\u8981\u88AB\u6362\u884C\uFF0C\u6BCF\u884C\u4EE3\u7801\u5E94\u8BE5\u5C11\u4E8E160\u4E2A\u5B57\u7B26\uFF08\u4EE5\u6B64\u4E3A\u51C6\uFF09
  "max-len": ["warn", { code: 160 }],
  // \u65B9\u6CD5\u7684\u53C2\u6570\u5C3D\u91CF\u5728\u4E00\u884C\u663E\u793A
  "function-paren-newline": ["warn", "multiline"],
  // \u5F3A\u5236\u5C06\u5BF9\u8C61\u7684\u5C5E\u6027\u653E\u5728\u4E0D\u540C\u7684\u884C\u4E0A
  "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
  // \u94FE\u5F0F\u8C03\u7528\u5BF9\u8C61\u65B9\u6CD5\u65F6\uFF0C\u4E00\u884C\u6700\u591A\u8C03\u75284\u6B21\uFF0C\u5426\u5219\u9700\u8981\u6362\u884C
  "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
  // \u63A7\u5236\u6587\u4EF6\u7684\u957F\u5EA6\uFF0C\u6700\u597D\u4E0D\u8981\u8D85\u8FC72000\u884C
  "max-lines": ["error", 800],
  // \u65B9\u6CD5\u8BBE\u8BA1\u5E94\u9075\u5FAA\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF08SRP\uFF09\uFF0C\u4E00\u4E2A\u65B9\u6CD5\u4EC5\u5B8C\u6210\u4E00\u4E2A\u529F\u80FD\uFF0C\u6700\u591A50\u884C
  "max-lines-per-function": ["error", 50],
  // \u8981\u6C42\u5BF9\u8C61\u5B57\u9762\u91CF\u5C5E\u6027\u540D\u79F0\u4F7F\u7528\u5F15\u53F7
  "quote-props": ["error", "consistent-as-needed"],
  // \u5708\u590D\u6742\u5EA6\u4E0D\u8D85\u8FC720\uFF0C\u8F6F\u4EF6\u5B66\u9662\u7EDF\u4E00\u8981\u6C42\u662F\uFF1A10
  "complexity": ["warn", 10],
  // \u5757\u8BED\u53E5\u7684\u6700\u5927\u53EF\u5D4C\u5957\u6DF1\u5EA6\u4E0D\u8981\u8D85\u8FC74\u5C42
  "max-depth": ["warn", 4],
  // \u56DE\u8C03\u51FD\u6570\u5D4C\u5957\u7684\u5C42\u6570\u4E0D\u8D85\u8FC74\u5C42
  "max-nested-callbacks": ["error", 4],
  // \u7981\u6B62\u8FDE\u7EED\u8D4B\u503C
  "no-multi-assign": "error",
  // \u53D8\u91CF\u4E0D\u9700\u8981\u7528undefined\u521D\u59CB\u5316
  "no-undef-init": "warn",
  // \u5757\u5185\u53D8\u91CF\u4E0D\u80FD\u4E0E\u51FD\u6570\u5185\u7684\u5176\u4ED6\u53D8\u91CF\u540C\u540D\uFF0C\u5757\u5185\u51FD\u6570\u5E94\u8BE5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u58F0\u660E
  "no-shadow": "error",
  // \u65B9\u6CD5\u7684\u53C2\u6570\u4E2A\u6570\u4E0D\u5B9C\u8D85\u8FC75\u4E2A
  "max-params": ["warn", 5],
  // \u4E0D\u8981\u628A\u65B9\u6CD5\u7684\u5165\u53C2\u5F53\u4F5C\u5DE5\u4F5C\u53D8\u91CF/\u4E34\u65F6\u53D8\u91CF
  "no-param-reassign": "error",
  // \u4E0D\u8981\u4F7F\u7528 arguments\uFF0C\u53EF\u4EE5\u9009\u62E9 rest \u8BED\u6CD5\u66FF\u4EE3
  "prefer-rest-params": "error",
  // function \u58F0\u660E\u6216\u8868\u8FBE\u5F0F\u7684\u4E00\u81F4\u6027
  "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
  // \u7528\u5230\u533F\u540D\u51FD\u6570\u65F6\u4F18\u5148\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF08\u6216 Function#bind\uFF09\uFF0C\u522B\u4FDD\u5B58 this \u7684\u5F15\u7528
  "prefer-arrow-callback": "error",
  // \u7BAD\u5934\u51FD\u6570\u7684\u7B80\u5199
  "arrow-body-style": ["warn", "as-needed"],
  // \u8981\u6C42\u4F7F\u7528\u4E00\u81F4\u7684 return \u8BED\u53E5
  "consistent-return": "error",
  // \u5728\u6784\u9020\u51FD\u6570\u4E2D\u7981\u6B62\u5728\u8C03\u7528super()\u4E4B\u524D\u4F7F\u7528this\u6216super
  "no-this-before-super": "error",
  // \u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\uFF08\`\uFF09\u5B9E\u73B0\u5B57\u7B26\u4E32\u62FC\u63A5
  "prefer-template": "error",
  // \u4E0D\u8981\u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u884C\u8FDE\u7EED\u7B26\u53F7
  "no-multi-str": "warn",
  // \u63A8\u8350\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u4F7F\u7528\u5C5E\u6027\u7B80\u5199
  "object-shorthand": "warn",
  // \u4F7F\u7528\u70B9\u53F7\u6765\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u53EA\u6709\u5C5E\u6027\u662F\u52A8\u6001\u7684\u65F6\u5019\u4F7F\u7528 []
  "dot-notation": "error",
  // getter\u548Csetter\u5E94\u8BE5\u6210\u5BF9\u51FA\u73B0\u5728\u5BF9\u8C61\u4E2D
  "accessor-pairs": "error",
  // \u7981\u6B62\u5728\u5BF9\u8C61\u5B9E\u4F8B\u4E0A\u76F4\u63A5\u4F7F\u7528 Object.prototypes \u7684\u5185\u7F6E\u5C5E\u6027
  "no-prototype-builtins": "error",
  // \u9700\u8981\u7EA6\u675F for-in
  "guard-for-in": "error",
  // \u4E0D\u8981\u4F7F\u7528\u5426\u5B9A\u8868\u8FBE\u5F0F
  "no-negated-condition": "warn",
  // \u6BCF\u4E2Aswitch\u8BED\u53E5\u90FD\u5305\u542B\u4E00\u4E2Adefault\u8BED\u53E5\uFF0C\u5373\u4F7F\u5B83\u4E0D\u5305\u542B\u4EFB\u4F55\u4EE3\u7801
  "default-case": "error",
  // \u7981\u6B62\u4F7F\u7528eval()
  "no-eval": "error",
  // \u7981\u6B62\u4F7F\u7528\u8F83\u77ED\u7684\u7B26\u53F7\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362
  "no-implicit-coercion": ["error", { allow: ["!!"] }],
  // \u53EF\u4EE5\u4F7F\u7528\u7A7A\u7684Promise.reject()
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
 },
 globals: {
  $: "readonly", // jquery \u5168\u5C40\u53D8\u91CF
 },
};
`,lang:"javascript"})]),_:1})}}};export{g as default};
