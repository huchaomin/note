import{r as n,o as a,c,f as s,g as d,aa as o}from"./vendor-774b84b8.js";const i=o("h2",{id:"1-\u8BF4\u660E",class:"doc-heading"},"\u8BF4\u660E",-1),r=o("ol",null,[o("li",null,"CommonJS\u89C4\u8303\u52A0\u8F7D\u6A21\u5757\u662F\u540C\u6B65\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u52A0\u8F7D\u5B8C\u6210\uFF0C\u624D\u80FD\u6267\u884C\u540E\u9762\u7684\u64CD\u4F5C"),o("li",null,"AMD\u89C4\u8303\u5219\u662F\u975E\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0C\u5141\u8BB8\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u3002"),o("li",null,"\u7531\u4E8ENode.js\u4E3B\u8981\u7528\u4E8E\u670D\u52A1\u5668\u7F16\u7A0B\uFF0C\u6A21\u5757\u6587\u4EF6\u4E00\u822C\u90FD\u5DF2\u7ECF\u5B58\u5728\u4E8E\u672C\u5730\u786C\u76D8\uFF0C\u6240\u4EE5\u52A0\u8F7D\u8D77\u6765\u6BD4\u8F83\u5FEB\uFF0C\u4E0D\u7528\u8003\u8651\u975E\u540C\u6B65\u52A0\u8F7D\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5CommonJS\u89C4\u8303\u6BD4\u8F83\u9002\u7528\u3002"),o("li",null,"\u4F46\u662F\uFF0C\u5982\u679C\u662F\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u8981\u4ECE\u670D\u52A1\u5668\u7AEF\u52A0\u8F7D\u6A21\u5757\uFF0C\u8FD9\u65F6\u5C31\u5FC5\u987B\u91C7\u7528\u975E\u540C\u6B65\u6A21\u5F0F\uFF0C\u56E0\u6B64\u6D4F\u89C8\u5668\u7AEF\u4E00\u822C\u91C7\u7528AMD\u89C4\u8303\u3002")],-1),m=o("h2",{id:"2-amd\u89C4\u8303\u4F7F\u7528define\u65B9\u6CD5\u5B9A\u4E49\u6A21\u5757",class:"doc-heading"},"AMD\u89C4\u8303\u4F7F\u7528define\u65B9\u6CD5\u5B9A\u4E49\u6A21\u5757",-1),u=o("p",null,"AMD\u89C4\u8303\u5141\u8BB8\u8F93\u51FA\u7684\u6A21\u5757\u517C\u5BB9CommonJS\u89C4\u8303\uFF0C\u8FD9\u65F6define\u65B9\u6CD5\u9700\u8981\u5199\u6210\u4E0B\u9762\u8FD9\u6837\uFF1A",-1),M={__name:"AMD\u89C4\u8303\u4E0ECommonJS\u89C4\u8303\u7684\u517C\u5BB9\u6027",setup(_){const t=[{id:"doc-title",title:"AMD\u89C4\u8303\u4E0ECommonJS\u89C4\u8303\u7684\u517C\u5BB9\u6027"},{id:"1-\u8BF4\u660E",title:"1. \u8BF4\u660E"},{id:"2-amd\u89C4\u8303\u4F7F\u7528define\u65B9\u6CD5\u5B9A\u4E49\u6A21\u5757",title:"2. AMD\u89C4\u8303\u4F7F\u7528define\u65B9\u6CD5\u5B9A\u4E49\u6A21\u5757"}];return(f,p)=>{const e=n("doc-code"),l=n("doc-page");return a(),c(l,{desc:"",toc:t},{default:s(()=>[i,r,m,d(e,{code:`define(['package/lib'], function(lib){
  function foo(){
    lib.log('hello world!')
  }

  return {
    foo: foo
  }
})
`,lang:"javascript"}),u,d(e,{code:`define(function (require, exports, module){
  var someModule = require("someModule")
  var anotherModule = require("anotherModule")
  someModule.doTehAwesome()
  anotherModule.doMoarAwesome()
  exports.asplode = function (){
    someModule.doTehAwesome()
    anotherModule.doMoarAwesome()
  }
})
`,lang:"javascript"})]),_:1})}}};export{M as default};
