import{r as n,o as t,c as d,f as r,g as a,a8 as c}from"./vendor.js";const s=c("h2",{id:"1-\u5B89\u88C5",class:"doc-heading"},"\u5B89\u88C5",-1),i=c("h2",{id:"2-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),g={__name:"loader\u4E4Bwebpack-bundle-analyzer",setup(p){const o=[{id:"doc-title",title:"webpack webpack-bundle-analyzer"},{id:"1-\u5B89\u88C5",title:"1. \u5B89\u88C5"},{id:"2-\u4F7F\u7528",title:"2. \u4F7F\u7528"}];return(u,_)=>{const e=n("doc-code"),l=n("doc-page");return t(),d(l,{desc:"webpack webpack-bundle-analyzer \u6253\u5305\u5206\u6790\u5DE5\u5177\u7684\u4F7F\u7528",toc:o},{default:r(()=>[s,a(e,{code:`yarn add -D webpack-bundle-analyzer
`,lang:"shell"}),i,a(e,{code:`const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// chainWebpack
if (({}).REPORT) {
  config.plugin('analyze').use(BundleAnalyzerPlugin, [{ analyzerPort: 8899 }])
}
// package.json
"report": "cross-env REPORT=TRUE npm run build"
`,lang:"javascript"})]),_:1})}}};export{g as default};
