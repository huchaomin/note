import{r as n,o as t,c as s,f as p,g as o,a9 as c}from"./vendor-585b19a3.js";const d=c("h2",{id:"1-configurewebpack-\u65B9\u5F0F",class:"doc-heading"},"configureWebpack \u65B9\u5F0F",-1),r=c("ol",null,[c("li",null,"\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1A\u548C webpack \u672C\u8EAB\u914D\u7F6E\u65B9\u5F0F\u662F\u4E00\u81F4\uFF0C\u8BE5\u5BF9\u8C61\u5C06\u4F1A\u88AB webpack-merge \u5408\u5E76\u5165\u6700\u7EC8\u7684 webpack \u914D\u7F6E")],-1),l=c("ol",{start:"2"},[c("li",null,"\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570")],-1),g=c("h2",{id:"2-chainwebpack-\u65B9\u5F0F",class:"doc-heading"},"chainWebpack \u65B9\u5F0F",-1),b={__name:"\u65B0\u589Ewebpack\u914D\u7F6E",setup(_){const a=[{id:"doc-title",title:"\u65B0\u589Evue.config.js\u914D\u7F6E"},{id:"1-configurewebpack-\u65B9\u5F0F",title:"1. configureWebpack \u65B9\u5F0F"},{id:"2-chainwebpack-\u65B9\u5F0F",title:"2. chainWebpack \u65B9\u5F0F"}];return(u,k)=>{const e=n("doc-code"),i=n("doc-page");return t(),s(i,{desc:"vue-cli vue.config.js \u4F7F\u7528configureWebpack/chainWebpack\u65B0\u589E\u914D\u7F6E",toc:a},{default:p(()=>[d,r,o(e,{code:`configureWebpack: {
  rules: [],
  plugins:  []
}
`,lang:"javascript"}),l,o(e,{code:`configureWebpack: (config) => {
  // \u4F8B\u5982\uFF0C\u901A\u8FC7\u5224\u65AD\u8FD0\u884C\u73AF\u5883\uFF0C\u8BBE\u7F6Emode
  config.mode = 'production'
}
`,lang:"javascript"}),g,o(e,{code:`chainWebpack: (config) => {
  config.mode = 'production'
}
`,lang:"javascript"})]),_:1})}}};export{b as default};
