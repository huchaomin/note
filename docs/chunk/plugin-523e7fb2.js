import{r as c,o as s,c as p,f as l,g as o,a8 as e,v as a}from"./vendor-5a734afa.js";const r=e("h2",{id:"1-\u672C\u8D28",class:"doc-heading"},"\u672C\u8D28",-1),d=e("p",null,[a("\u662F\u4E00\u4E2A\u5177\u6709 apply \u65B9\u6CD5\u7684 JavaScript \u5BF9\u8C61"),e("br"),a(" apply \u65B9\u6CD5\u4F1A\u88AB webpack compiler \u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8BBF\u95EE compiler \u5BF9\u8C61")],-1),u=e("h2",{id:"2-\u7528\u6CD5",class:"doc-heading"},"\u7528\u6CD5",-1),g=e("h2",{id:"3-\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",class:"doc-heading"},"\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",-1),_=e("h2",{id:"4-node-api-\u65B9\u5F0F",class:"doc-heading"},"Node API \u65B9\u5F0F",-1),k=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"\u5982\u679C\u63D2\u4EF6\u4E2D\u4F7F\u7528\u4E86 webpack-sources \u7684 package\uFF0C\u8BF7\u4F7F\u7528 require(\u2018webpack\u2019).sources \u66FF\u4EE3 require(\u2018webpack-sources\u2019)\uFF0C\u4EE5\u907F\u514D\u6301\u4E45\u7F13\u5B58\u7684\u7248\u672C\u51B2\u7A81")],-1),P={__name:"plugin",setup(m){const i=[{id:"doc-title",title:"webpack plugin"},{id:"1-\u672C\u8D28",title:"1. \u672C\u8D28"},{id:"2-\u7528\u6CD5",title:"2. \u7528\u6CD5"},{id:"3-\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",title:"3. \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6"},{id:"4-node-api-\u65B9\u5F0F",title:"4. Node API \u65B9\u5F0F"}];return(b,w)=>{const n=c("doc-code"),t=c("doc-page");return s(),p(t,{desc:"webpack plugin \u8BE6\u89E3",toc:i},{default:l(()=>[r,d,o(n,{code:`const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack \u6784\u5EFA\u8FC7\u7A0B\u5F00\u59CB')
    });
  }
}
module.exports = ConsoleLogOnBuildWebpackPlugin
// compiler hook \u7684 tap \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E94\u8BE5\u662F\u9A7C\u5CF0\u5F0F\u547D\u540D\u7684\u63D2\u4EF6\u540D\u79F0\u3002
// \u5EFA\u8BAE\u4E3A\u6B64\u4F7F\u7528\u4E00\u4E2A\u5E38\u91CF\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u5728\u6240\u6709 hook \u4E2D\u91CD\u590D\u4F7F\u7528
`,lang:"javascript"}),u,o(n,{code:`const HtmlWebpackPlugin = require('html-webpack-plugin')
//  ...
plugins: [
  new HtmlWebpackPlugin({template: './src/index.html'})
]
`,lang:"javascript"}),g,o(n,{code:`const webpack = require('webpack')
// ...
plugins: [
  new webpack.ProgressPlugin()
]
`,lang:"javascript"}),_,o(n,{code:`const webpack = require('webpack') // \u8BBF\u95EE webpack \u8FD0\u884C\u65F6(runtime)
const configuration = require('./webpack.config.js')

let compiler = webpack(configuration)
new webpack.ProgressPlugin().apply(compiler)
compiler.run(function(err, stats) {
  // ...
})
`,lang:"javascript"}),k]),_:1})}}};export{P as default};
