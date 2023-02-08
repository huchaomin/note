import{r as t,o as n,c as r,f as d,g as _,a9 as e,v as o}from"./vendor-585b19a3.js";const i=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[o("\u7531\u4E8E Vue CLI 3 \u4E0D\u518D\u4F7F\u7528\u4F20\u7EDF\u7684 webpack \u914D\u7F6E\u6587\u4EF6\uFF0C\u6545 webstorm \u65E0\u6CD5\u8BC6\u522B\u522B\u540D"),e("br"),o(" \u672C\u6587\u4EF6\u5BF9\u9879\u76EE\u65E0\u4EFB\u4F55\u4F5C\u7528\uFF0C\u4EC5\u4F5C\u4E3A webstorm \u8BC6\u522B\u522B\u540D\u7528"),e("br"),o(" \u8FDB\u5165 webstorm preferences -> Language & Framework -> JavaScript -> Webpack\uFF0C\u9009\u62E9\u8FD9\u4E2A\u6587\u4EF6\u5373\u53EF")])],-1),v={__name:"alias.config_js",setup(p){const c=[{id:"doc-title",title:"\u8DEF\u5F84\u522B\u540D\u8BBE\u7F6E"}];return(l,m)=>{const s=t("doc-code"),a=t("doc-page");return n(),r(a,{desc:"",toc:c},{default:d(()=>[i,_(s,{code:`const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('./src')
    }
  }
}
`,lang:"javascript"})]),_:1})}}};export{v as default};
