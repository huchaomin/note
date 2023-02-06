import{r as n,o as c,c as a,f as d,g as o,a8 as t}from"./vendor-5a734afa.js";const l=t("h2",{id:"1-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),p=t("p",null,"\u8868\u793A\u5F53\u524D\u6A21\u5757\u5BF9\u5916\u8F93\u51FA\u7684\u63A5\u53E3\uFF0C\u5176\u4ED6\u6587\u4EF6\u52A0\u8F7D\u8BE5\u6A21\u5757\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u8BFB\u53D6module.exports\u53D8\u91CF\u3002",-1),i=t("h2",{id:"2-exports\u53D8\u91CF",class:"doc-heading"},"exports\u53D8\u91CF",-1),u=t("p",null,"Node\u4E3A\u6BCF\u4E2A\u6A21\u5757\u63D0\u4F9B\u4E00\u4E2Aexports\u53D8\u91CF\uFF0C\u6307\u5411module.exports",-1),x=t("p",null,"\u5728\u5BF9\u5916\u8F93\u51FA\u6A21\u5757\u63A5\u53E3\u65F6\uFF0C\u53EF\u4EE5\u5411exports\u5BF9\u8C61\u6DFB\u52A0\u65B9\u6CD5\u3002",-1),f={__name:"module.exports\u5C5E\u6027",setup(m){const r=[{id:"doc-title",title:"commonJS\u4E4Bmodule.exports\u5C5E\u6027"},{id:"1-\u5B9A\u4E49",title:"1. \u5B9A\u4E49"},{id:"2-exports\u53D8\u91CF",title:"2. exports\u53D8\u91CF"}];return(_,h)=>{const e=n("doc-code"),s=n("doc-page");return c(),a(s,{desc:"",toc:r},{default:d(()=>[l,p,o(e,{code:`var EventEmitter = require('events').EventEmitter
module.exports = new EventEmitter()
//1\u79D2\u540E\u89E6\u53D1ready\u4E8B\u4EF6
setTimeout(function() {
  module.exports.emit('ready')
}, 1000)
`,lang:"javascript"}),o(e,{code:`var a = require('./a')
a.on('ready', function() {
  console.log('module a is ready')
})
`,lang:"javascript"}),i,u,o(e,{code:`var exports = module.exports
`,lang:"javascript"}),x,o(e,{code:`exports.area = function (r) {
  return Math.PI * r * r
}
exports.circumference = function (r) {
  return 2 * Math.PI * r
}

//\u80FD\u76F4\u63A5\u5C06exports\u53D8\u91CF\u6307\u5411\u4E00\u4E2A\u503C\uFF0C\u56E0\u4E3A\u8FD9\u6837\u7B49\u4E8E\u5207\u65AD\u4E86exports\u4E0Emodule.exports\u7684\u8054\u7CFB\u3002
exports = function(x) {console.log(x)}
`,lang:"javascript"}),o(e,{code:`exports.hello = function() {
  return 'hello'
}
module.exports = 'Hello world'
//hello\u51FD\u6570\u662F\u65E0\u6CD5\u5BF9\u5916\u8F93\u51FA\u7684\uFF0C\u56E0\u4E3Amodule.exports\u88AB\u91CD\u65B0\u8D4B\u503C\u4E86\u3002
`,lang:"javascript"})]),_:1})}}};export{f as default};
