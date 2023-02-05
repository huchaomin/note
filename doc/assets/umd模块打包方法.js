import{r as o,o as d,c as s,f as a,g as r,a8 as e}from"./vendor.js";const i=e("h2",{id:"1-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),f=e("p",null,"UMD (Universal Module Definition), \u5E0C\u671B\u63D0\u4F9B\u4E00\u4E2A\u524D\u540E\u7AEF\u8DE8\u5E73\u53F0\u7684\u89E3\u51B3\u65B9\u6848",-1),l=e("h2",{id:"2-\u5199\u6CD5",class:"doc-heading"},"\u5199\u6CD5",-1),h={__name:"umd\u6A21\u5757\u6253\u5305\u65B9\u6CD5",setup(p){const t=[{id:"doc-title",title:"umd \u6A21\u5757\u6253\u5305wrapper"},{id:"1-\u5B9A\u4E49",title:"1. \u5B9A\u4E49"},{id:"2-\u5199\u6CD5",title:"2. \u5199\u6CD5"}];return(_,u)=>{const n=o("doc-code"),c=o("doc-page");return d(),s(c,{desc:"\u5C06\u975E\u6A21\u5757\u5316\u7684\u5305\uFF0C\u5305\u88C5\u6210umd",toc:t},{default:a(()=>[i,f,l,r(n,{code:`((root, factory) => {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else {
    root['libraryName'] = factory()
  }
})(typeof self !== undefined ? self : this, (() => {
    return // entry return
  }),
)
`,lang:"javascript"})]),_:1})}}};export{h as default};
