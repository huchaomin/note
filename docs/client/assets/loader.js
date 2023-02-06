import{r as o,o as c,c as l,f as t,g as a,ac as d}from"./vendor.js";const s=d("h2",{id:"1-\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684-loader",class:"doc-heading"},"\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 Loader",-1),i=d("h2",{id:"2-\u66FF\u6362\u4E00\u4E2A\u89C4\u5219\u91CC\u7684-loader",class:"doc-heading"},"\u66FF\u6362\u4E00\u4E2A\u89C4\u5219\u91CC\u7684 Loader",-1),h={__name:"loader",setup(g){const n=[{id:"doc-title",title:"vue.config.js loader"},{id:"1-\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684-loader",title:"1. \u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 Loader"},{id:"2-\u66FF\u6362\u4E00\u4E2A\u89C4\u5219\u91CC\u7684-loader",title:"2. \u66FF\u6362\u4E00\u4E2A\u89C4\u5219\u91CC\u7684 Loader"}];return(p,u)=>{const e=o("doc-code"),r=o("doc-page");return c(),l(r,{desc:"vue.config.js loader \u5904\u7406",toc:n},{default:t(()=>[s,a(e,{code:`module.exports = {
  chainWebpack: config => {
    config.module // GraphQL Loader
      .rule('graphql')
      .test(/\\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
      // \u4F60\u8FD8\u53EF\u4EE5\u518D\u6DFB\u52A0\u4E00\u4E2A loader
      .use('other-loader')
      .loader('other-loader')
      .end()
  }
}
`,lang:"javascript"}),i,a(e,{code:`chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  // \u6E05\u9664\u5DF2\u6709\u7684\u6240\u6709 loader\u3002
  // \u5982\u679C\u4F60\u4E0D\u8FD9\u6837\u505A\uFF0C\u63A5\u4E0B\u6765\u7684 loader \u4F1A\u9644\u52A0\u5728\u8BE5\u89C4\u5219\u73B0\u6709\u7684 loader \u4E4B\u540E\u3002
  svgRule.uses.clear()
  // \u6DFB\u52A0\u8981\u66FF\u6362\u7684 loader
  svgRule
    .use('vue-svg-loader')
    .loader('vue-svg-loader')
}
`,lang:"javascript"})]),_:1})}}};export{h as default};
