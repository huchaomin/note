import{r as n,o as s,c as a,f as l,g as o,aa as e,v as r}from"./vendor.js";const d=e("h2",{id:"1-\u8BED\u6CD5",class:"doc-heading"},"\u8BED\u6CD5",-1),u=e("p",null,"\u5982\u679C mode \u8BBE\u7F6E\u4E3A lazy\uFF0C\u57FA\u7840\u6A21\u5757\u5C06\u4EE5\u5F02\u6B65\u65B9\u5F0F\u52A0\u8F7D",-1),_=e("p",null,[r("\u521B\u5EFA\u51FA\u4E00\u4E2A context\uFF0C\u5176\u4E2D\u6587\u4EF6\u6765\u81EA template \u76EE\u5F55\uFF0C\u4E0D\u641C\u5BFB\u5B50\u76EE\u5F55\uFF0Crequest \u4EE5 "),e("code",{class:"doc-token"},".js"),r(" \u7ED3\u5C3E")],-1),x=e("h2",{id:"2-require-context-\u8FD4\u56DE\u503C",class:"doc-heading"},"require.context \u8FD4\u56DE\u503C",-1),p=e("h2",{id:"3-requirecontext-resolve",class:"doc-heading"},"requireContext.resolve",-1),q=e("p",null,"\u8FD4\u56DE request \u88AB\u89E3\u6790\u540E\u5F97\u5230\u7684\u6A21\u5757 id",-1),h=e("h2",{id:"4-requirecontext-keys",class:"doc-heading"},"requireContext.keys",-1),g=e("p",null,"\u7531\u6240\u6709\u53EF\u80FD\u88AB\u6B64 context module \u5904\u7406\u7684\u6A21\u5757 id",-1),m=e("p",null,"\u52A0\u8F7D\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u7684\u6240\u6709\u6587\u4EF6",-1),v=e("h2",{id:"5-requirecontext-id",class:"doc-heading"},"requireContext.id",-1),C=e("p",null,"context module \u7684\u6A21\u5757 id",-1),f={__name:"\u6A21\u5757\u65B9\u6CD5\u4E4BrequireContext",setup(k){const c=[{id:"doc-title",title:"webpack require.context"},{id:"1-\u8BED\u6CD5",title:"1. \u8BED\u6CD5"},{id:"2-require-context-\u8FD4\u56DE\u503C",title:"2. require.context \u8FD4\u56DE\u503C"},{id:"3-requirecontext-resolve",title:"3. requireContext.resolve"},{id:"4-requirecontext-keys",title:"4. requireContext.keys"},{id:"5-requirecontext-id",title:"5. requireContext.id"}];return(y,j)=>{const t=n("doc-code"),i=n("doc-page");return s(),a(i,{desc:"webpack require.context \u4F7F\u7528\u65B9\u6CD5\u8BE6\u89E3",toc:c},{default:l(()=>[d,o(t,{code:`const context = require.context(
  (directory: String),
  (includeSubdirs: Boolean) /* \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u662F true */,
  (filter: RegExp) /* \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u662F /^\\.\\/.*$/\uFF0C\u6240\u6709\u6587\u4EF6 */,
  (mode: String)  /* \u53EF\u9009\u7684\uFF0C 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'\uFF0C\u9ED8\u8BA4\u503C\u662F 'sync' */
)
`,lang:"javascript"}),u,o(t,{code:`var context = require.context('locales', true, /\\.json$/, 'lazy')
context('localeA').then((locale) => {
  // do something with locale
})
`,lang:"javascript"}),_,o(t,{code:"const requireContext = require.context('./template', false, /\\.js$/)\n// \u521B\u5EFA\u51FA\u4E00\u4E2A context\uFF0C\u5176\u4E2D\u6587\u4EF6\u6765\u81EA template \u76EE\u5F55\uFF0C\u4E0D\u641C\u5BFB\u5B50\u76EE\u5F55\uFF0Crequest \u4EE5 `.js` \u7ED3\u5C3E\u3002\n",lang:"javascript"}),x,o(t,{code:`console.log(requireContext)
// \u0192 webpackContext(req) {
//   var id = webpackContextResolve(req);
//   return __webpack_require__(id);
// }
`,lang:"javascript"}),p,q,o(t,{code:`console.log(requireContext.resolve)
// \u0192 webpackContextResolve(req) {
//   if(!__webpack_require__.o(map, req)) {
//     var e = new Error("Cannot find module '" + req + "'");
//     e.code = 'MODULE_NOT_FOUND';
//     throw e;
//   }
//   return map[req];
// }
`,lang:"javascript"}),h,g,o(t,{code:`console.log(requireContext.keys)
// \u0192 webpackContextKeys() {
//   return Object.keys(map);
// }
`,lang:"javascript"}),m,o(t,{code:`function importAll (r) {
  r.keys().forEach(r)
}
importAll(requireContext)
`,lang:"javascript"}),v,C,o(t,{code:`console.log(requireContext.id)
// ./src/template sync \\.js$
`,lang:"javascript"})]),_:1})}}};export{f as default};
