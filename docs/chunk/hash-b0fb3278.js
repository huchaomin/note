import{r as o,o as d,c as u,f as a,g as s,a9 as n,v as e}from"./vendor-585b19a3.js";const p=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"hash\u901A\u5E38\u88AB\u4F5C\u4E3A\u524D\u7AEF\u9759\u6001\u8D44\u6E90\u5B9E\u73B0\u589E\u91CF\u66F4\u65B0\u7684\u65B9\u6848\uFF0C\u901A\u8FC7\u5728\u6587\u4EF6\u540D\u4E2D\u5E26\u4E0A\u4E00\u4E32hash\u5B57\u7B26\u4E32\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u8BE5\u6587\u4EF6\u662F\u5426\u53D1\u751F\u66F4\u65B0\uFF0C\u4ECE\u800C\u51B3\u5B9A\u662F\u5426\u8981\u4F7F\u7528\u7F13\u5B58\u673A\u5236\u3002")],-1),r=n("p",null,"webpack\u6253\u5305\u65F6\u7684hash\u6709\u4E09\u79CD",-1),_=n("ul",null,[n("li",null,"fullhash (webpack4.x\u7248\u672C\u53CA\u4E4B\u524D\u4E3A hash\uFF0Cwebpack5.x\u4E2D\u4F7F\u7528 fullhash \u548C hash \u5747\u53EF)"),n("li",null,"chunkhash"),n("li",null,"contenthash")],-1),b=n("h2",{id:"1-\u51C6\u5907",class:"doc-heading"},"\u51C6\u5907",-1),g=n("p",null,"\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2Ademo\u67E5\u770B\u4ED6\u4EEC\u7684\u533A\u522B",-1),k=n("h3",{id:"2-\u9879\u76EE\u7ED3\u6784",class:"doc-heading"},"\u9879\u76EE\u7ED3\u6784",-1),m=n("h3",{id:"3-webpack-config-js",class:"doc-heading"},"webpack.config.js",-1),f=n("h3",{id:"4-index-js",class:"doc-heading"},"index.js",-1),j=n("h3",{id:"5-add-js",class:"doc-heading"},"add.js",-1),x=n("h3",{id:"6-sub-js",class:"doc-heading"},"sub.js",-1),w=n("h3",{id:"7-index-css",class:"doc-heading"},"index.css",-1),v=n("h2",{id:"8-\u6253\u5305\u7ED3\u679C",class:"doc-heading"},"\u6253\u5305\u7ED3\u679C",-1),P=n("h3",{id:"9-fullhash",class:"doc-heading"},"fullhash",-1),R=n("br",null,null,-1),C=n("li",null,"\u53EA\u8981\u9879\u76EE\u4E2D\u6709\u4EFB\u4F55\u4E00\u4E2A\u7684\u6587\u4EF6\u5185\u5BB9\u53D1\u751F\u53D8\u52A8\uFF0C\u6253\u5305\u540E\u6240\u6709\u6587\u4EF6\u7684hash\u503C\u90FD\u4F1A\u53D1\u751F\u6539\u53D8",-1),E=n("li",null,"\u6700\u4E0A\u9762\u7684486\u662Flodash",-1),T=n("h3",{id:"10-chunkhash",class:"doc-heading"},"chunkhash",-1),q=n("li",null,"\u6211\u4EEC\u5C06webpack.config.js \u4E2D\u7684\u4E24\u5904 fullhash \u4FEE\u6539\u4E3A chunkhash",-1),y=n("br",null,null,-1),M=n("li",null,"\u6BCF\u4E00\u4E2Achunk\u90FD\u6709\u4E00\u4E2A\u90FD\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684hash",-1),B=n("li",null,"index.js \u548C index.css \u6253\u5305\u7684 hash \u503C\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728 index.js \u4E2D\u5F15\u7528\u4E86 index.css \uFF0C\u6253\u5305\u540E\u4ED6\u4EEC\u5C5E\u4E8E\u4E00\u4E2Achunk",-1),N=n("br",null,null,-1),V=n("li",null,"lodash \u548C sub.js \u6587\u4EF6\u7684\u6253\u5305\u503C\u8FD9\u6B21\u6CA1\u6709\u6539\u53D8",-1),z=n("h3",{id:"11-contenthash",class:"doc-heading"},"contenthash",-1),H=n("p",null,"\u53EA\u6709\u5F53\u6587\u4EF6\u81EA\u5DF1\u7684\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u5176\u6253\u5305\u7684 hash \u503C\u624D\u4F1A\u53D1\u751F\u53D8\u52A8",-1),W=n("li",null,"\u5C06webpack.config.js \u4E2D MiniCssExtractPlugin \u63D2\u4EF6chunkhash \u6539\u4E3A contenthash",-1),I=n("br",null,null,-1),$=n("br",null,null,-1),A=n("li",null,"index.css hash\u5E76\u6CA1\u6709\u53D1\u751F\u6539\u53D8",-1),D=n("h2",{id:"12-\u601D\u8003",class:"doc-heading"},"\u601D\u8003",-1),F=n("h3",{id:"13-\u6211\u4EEC\u5C06webpack-config-js\u4E2Doutput\u4E5F\u6539\u6210contenthash\u884C\u4E0D\u884C\uFF1F",class:"doc-heading"},"\u6211\u4EEC\u5C06webpack.config.js\u4E2Doutput\u4E5F\u6539\u6210contenthash\u884C\u4E0D\u884C\uFF1F",-1),G=n("p",null,"\u6700\u597D\u4E0D\u8981\uFF0Cchunkhash\u4F1A\u8003\u8651\u5F88\u591A\u56E0\u7D20\uFF0C\u6BD4\u5982\u6A21\u5757\u8DEF\u5F84\u3001\u6A21\u5757\u540D\u79F0\u3001\u6A21\u5757\u5927\u5C0F\u3001\u6A21\u5757id\u7B49\u7B49",-1),J=n("h2",{id:"14-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),S={__name:"hash",setup(K){const l=[{id:"doc-title",title:"webpack hash"},{id:"1-\u51C6\u5907",title:"1. \u51C6\u5907"},{id:"2-\u9879\u76EE\u7ED3\u6784",title:"1.1. \u9879\u76EE\u7ED3\u6784",sub:!0},{id:"3-webpack-config-js",title:"1.2. webpack.config.js",sub:!0},{id:"4-index-js",title:"1.3. index.js",sub:!0},{id:"5-add-js",title:"1.4. add.js",sub:!0},{id:"6-sub-js",title:"1.5. sub.js",sub:!0},{id:"7-index-css",title:"1.6. index.css",sub:!0},{id:"8-\u6253\u5305\u7ED3\u679C",title:"2. \u6253\u5305\u7ED3\u679C"},{id:"9-fullhash",title:"2.1. fullhash",sub:!0},{id:"10-chunkhash",title:"2.2. chunkhash",sub:!0},{id:"11-contenthash",title:"2.3. contenthash",sub:!0},{id:"12-\u601D\u8003",title:"3. \u601D\u8003"},{id:"13-\u6211\u4EEC\u5C06webpack-config-js\u4E2Doutput\u4E5F\u6539\u6210contenthash\u884C\u4E0D\u884C\uFF1F",title:"3.1. \u6211\u4EEC\u5C06webpack.config.js\u4E2Doutput\u4E5F\u6539\u6210contenthash\u884C\u4E0D\u884C\uFF1F",sub:!0},{id:"14-\u53C2\u8003\u6587\u732E",title:"4. \u53C2\u8003\u6587\u732E"}];return(L,O)=>{const t=o("doc-code"),c=o("doc-img"),h=o("doc-link"),i=o("doc-page");return d(),u(i,{desc:"webpack hash fullhash chunkhash contenthash \u4F7F\u7528\u4EE5\u53CA\u533A\u522B",toc:l},{default:a(()=>[p,r,_,b,g,k,s(t,{code:`hash
\u251C\u2500 package.json
\u251C\u2500 src
\u2502  \u251C\u2500 add.js
\u2502  \u251C\u2500 index.css
\u2502  \u251C\u2500 index.js
\u2502  \u2514\u2500 sub.js
\u251C\u2500 webpack.config.js
\u2514\u2500 yarn.lock
`,lang:"yaml"}),m,s(t,{code:`const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pathResolve = p => path.resolve(__dirname, p)
module.exports = {
  entry: {
    index: pathResolve('./src/index.js'),
    add: pathResolve('./src/add.js'),
    sub: pathResolve('./src/sub.js'),
  },
  mode: 'production',
  output: {
    path: pathResolve('./dist'),
    filename: '[name].[fullhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'compare hash',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
      }),
    ],
  },
}
`,lang:"javascript"}),f,s(t,{code:`import _ from 'lodash'
import { add } from './add'
import { sub } from './sub'
import './index.css'

const addResult = add(56 + 211)
const subResult = sub(213 - 53)
console.log(_.join([addResult, subResult], '---'))

const box = document.createElement('div')
box.innerText = 'compare hash'
document.body.append(box)
`,lang:"javascript"}),j,s(t,{code:`export function add (a, b) {
  return a + b
}
`,lang:"javascript"}),x,s(t,{code:`export function sub (a, b) {
  return a - b
}
`,lang:"javascript"}),w,s(t,{code:`div {
    color: coral;
}
`,lang:"css"}),v,P,n("ul",null,[n("li",null,[e("fullhash\u662F\u5168\u91CF\u7684hash\uFF0C\u662F\u6574\u4E2A\u9879\u76EE\u7EA7\u522B\u7684"),R,s(c,{src:"webpack-fullhash.png",alt:"webpack-fullhash"})]),C,E]),T,n("ul",null,[q,n("li",null,[e("\u6253\u5305\u4E00\u4E0B\uFF0C\u8BB0\u5F55\u4E00\u4E0B\u6587\u4EF6\u540E\u7F00"),y,s(c,{src:"webpack-chunkhash-pre.png",alt:"webpack-chunkhash-pre"})]),M,B,n("li",null,[e("\u6B64\u65F6\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0Badd.js\uFF0C\u518D\u6B21\u6253\u5305"),N,s(c,{src:"webpack-chunkhash-aft.png",alt:"webpack-chunkhash-aft"})]),V]),z,H,n("ul",null,[W,n("li",null,[e("\u6253\u5305\u4E00\u4E0B\uFF0C\u8BB0\u5F55\u4E00\u4E0B\u6587\u4EF6\u540E\u7F00"),I,s(c,{src:"webpack-contenthash-pre.png",alt:"webpack-contenthash-pre"})]),n("li",null,[e("\u66F4\u6539\u4E00\u4E0Badd.js"),$,s(c,{src:"webpack-contenthash-aft.png",alt:"webpack-contenthash-aft"})]),A]),D,F,G,J,n("p",null,[s(h,{to:"https://blog.51cto.com/u_14115828/3733990"},{default:a(()=>[e("https://blog.51cto.com/u_14115828/3733990")]),_:1})])]),_:1})}}};export{S as default};
