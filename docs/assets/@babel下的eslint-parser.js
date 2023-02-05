import{r as n,o as l,c as i,f as c,g as r,a8 as e,v as t}from"./vendor.js";const p=e("h2",{id:"1-eslint-\u9ED8\u8BA4-parser",class:"doc-heading"},"eslint \u9ED8\u8BA4 parser",-1),d=e("p",null,[t("\u53EA\u8F6C\u6362 js\uFF0C\u9ED8\u8BA4\u652F\u6301 ES5 \u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5236\u5B9A parserOptions \u7ED9 Espree \u4F20\u9012\u5982\u4E0B\u9009\u9879"),e("br"),t(" ESLint \u5B98\u65B9\u6587\u6863\u4E2D\u7684 parserOptions \u53EA\u9002\u7528 Espree \u89E3\u6790\u5668")],-1),b=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[t("ecmaVersion \u53EF\u4EE5\u5F00\u542F\u66F4\u9AD8 ES \u7248\u672C\u7684\u6821\u9A8C\uFF08\u5DF2\u52A0\u5165ES\u6807\u51C6\u7684\u8BED\u6CD5\uFF0C\u4E0D\u5305\u62EC\u5B9E\u9A8C\u6027\u7684\u8BED\u6CD5\uFF09"),e("br"),t(" \u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E00\u4E9B\u65B0\u6807\u51C6\u4E2D\u7684\u8BED\u6CD5\u5BF9 ESLint \u7684\u7248\u672C\u4E5F\u6709\u8981\u6C42\uFF0C\u5982\u679C\u53D1\u73B0ESLint \u4E0D\u652F\u6301\u6821\u9A8C\uFF0C\u53EF\u80FD\u9700\u8981\u5347\u7EA7 ESLint \u7248\u672C")])],-1),_=e("h2",{id:"2-@babel-eslint-parser",class:"doc-heading"},"@babel/eslint-parser",-1),u=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[t("ESLint\u7684\u9ED8\u8BA4\u89E3\u6790\u5668\u548C\u6838\u5FC3\u89C4\u5219\u4EC5\u652F\u6301\u6700\u65B0\u7684\u6700\u7EC8 ECMAScript \u6807\u51C6\uFF0C"),e("br"),t(" \u4E0D\u652F\u6301 Babel \u63D0\u4F9B\u7684\u5B9E\u9A8C\u6027\uFF08\u4F8B\u5982\u65B0\u529F\u80FD\uFF09\u548C\u975E\u6807\u51C6\uFF08\u4F8B\u5982Flow\u6216TypeScript\u7C7B\u578B\uFF09\u8BED\u6CD5\u3002"),e("br"),t(" @babel/eslint-parser \u662F\u5141\u8BB8 ESLint \u5728\u7531 Babel \u8F6C\u6362\u7684\u6E90\u4EE3\u7801\u4E0A\u8FD0\u884C\u7684\u89E3\u6790\u5668")])],-1),m=e("ul",null,[e("li",null,"\u8BE5 parser \u5141\u8BB8\u4F60\u4F7F\u7528 ESLint \u6821\u9A8C\u6240\u6709 babel code"),e("li",null,"\u5982\u679C\u4F60\u4F7F\u7528\u8BE5\u89E3\u6790\u5668\uFF0C\u8FD8\u8981\u4F7F\u7528 babel"),e("li",null,"\u5F53\u4F60\u4F7F\u7528 babel \u65F6\uFF0Cbabel \u7684\u89E3\u6790\u5668\u4F1A\u628A\u4F60\u7684 code \u8F6C\u6362\u4E3A AST\uFF0C\u8BE5\u89E3\u6790\u5668\u4F1A\u5C06\u5176\u8F6C\u6362\u4E3A ESLint \u80FD\u61C2\u7684 ESTree"),e("li",null,"\u8BE5 praser \u7684 parserOptions \u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B")],-1),f={__name:"@babel\u4E0B\u7684eslint-parser",setup(E){const o=[{id:"doc-title",title:"babel\u4E0B\u7684eslint-parser"},{id:"1-eslint-\u9ED8\u8BA4-parser",title:"1. eslint \u9ED8\u8BA4 parser"},{id:"2-@babel-eslint-parser",title:"2. @babel/eslint-parser"}];return(S,h)=>{const s=n("doc-code"),a=n("doc-page");return l(),i(a,{desc:"babel\u4E0B\u7684eslint-parser \u7C97\u89E3",toc:o},{default:c(()=>[p,d,r(s,{code:`"parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
      "jsx": true
    }
}
`,lang:"javascript"}),b,_,u,m,r(s,{code:`module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: true, // \u662F\u5426\u9700\u8981 babel \u914D\u7F6E\u6587\u4EF6
    sourceType: "module", // script \u6216\u8005 module
    allowImportExportEverywhere: false, // \u8BBE\u7F6E\u4E3A true\uFF0Cimport \u548C export \u58F0\u660E \u53EF\u4EE5\u51FA\u73B0\u5728\u6587\u4EF6\u7684\u4EFB\u52A1\u4F4D\u7F6E\uFF0C\u5426\u5219\u53EA\u80FD\u51FA\u73B0\u5728\u9876\u90E8
    ecmaFeatures: {
      globalReturn: false, // \u8BBE\u7F6E\u4E3A true\uFF0C\u5F53 sourceType \u4E3A script \u65F6\uFF0C\u5141\u8BB8\u5168\u5C40 return
    },
    babelOptions: {
      configFile: "path/to/config.js", // babel \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4E0D\u4F20
    },
  },
}
`,lang:"javascript"})]),_:1})}}};export{f as default};
