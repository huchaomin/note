import{r,o as i,c as s,f as a,g as o,aa as e,v as c}from"./vendor-e1827163.js";const l=e("h2",{id:"1-\u8BED\u6CD5",class:"doc-heading"},"\u8BED\u6CD5",-1),d=e("p",null,"\u5982\u679C mode \u8BBE\u7F6E\u4E3A lazy\uFF0C\u57FA\u7840\u6A21\u5757\u5C06\u4EE5\u5F02\u6B65\u65B9\u5F0F\u52A0\u8F7D",-1),C=e("p",null,[c("\u521B\u5EFA\u51FA\u4E00\u4E2A context\uFF0C\u5176\u4E2D\u6587\u4EF6\u6765\u81EA template \u76EE\u5F55\uFF0C\u4E0D\u641C\u5BFB\u5B50\u76EE\u5F55\uFF0Crequest \u4EE5 "),e("code",{class:"doc-token"},".js"),c(" \u7ED3\u5C3E")],-1),A=e("h2",{id:"2-require-context-\u8FD4\u56DE\u503C",class:"doc-heading"},"require.context \u8FD4\u56DE\u503C",-1),_=e("h2",{id:"3-requirecontext-resolve",class:"doc-heading"},"requireContext.resolve",-1),x=e("p",null,"\u8FD4\u56DE request \u88AB\u89E3\u6790\u540E\u5F97\u5230\u7684\u6A21\u5757 id",-1),p=e("h2",{id:"4-requirecontext-keys",class:"doc-heading"},"requireContext.keys",-1),q=e("p",null,"\u7531\u6240\u6709\u53EF\u80FD\u88AB\u6B64 context module \u5904\u7406\u7684\u6A21\u5757 id",-1),F=e("p",null,"\u52A0\u8F7D\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u7684\u6240\u6709\u6587\u4EF6",-1),h=e("h2",{id:"5-requirecontext-id",class:"doc-heading"},"requireContext.id",-1),E=e("p",null,"context module \u7684\u6A21\u5757 id",-1),v={__name:"\u6A21\u5757\u65B9\u6CD5\u4E4BrequireContext",setup(g){const u=[{id:"doc-title",title:"webpack require.context"},{id:"1-\u8BED\u6CD5",title:"1. \u8BED\u6CD5"},{id:"2-require-context-\u8FD4\u56DE\u503C",title:"2. require.context \u8FD4\u56DE\u503C"},{id:"3-requirecontext-resolve",title:"3. requireContext.resolve"},{id:"4-requirecontext-keys",title:"4. requireContext.keys"},{id:"5-requirecontext-id",title:"5. requireContext.id"}];return(B,m)=>{const t=r("doc-code"),n=r("doc-page");return i(),s(n,{desc:"webpack require.context \u4F7F\u7528\u65B9\u6CD5\u8BE6\u89E3",toc:u},{default:a(()=>[l,o(t,{code:"const%20context%20%3D%20require.context%28%0A%20%20%28directory%3A%20String%29%2C%0A%20%20%28includeSubdirs%3A%20Boolean%29%20/*%20%u53EF%u9009%u7684%uFF0C%u9ED8%u8BA4%u503C%u662F%20true%20*/%2C%0A%20%20%28filter%3A%20RegExp%29%20/*%20%u53EF%u9009%u7684%uFF0C%u9ED8%u8BA4%u503C%u662F%20/%5E%5C.%5C/.*%24/%uFF0C%u6240%u6709%u6587%u4EF6%20*/%2C%0A%20%20%28mode%3A%20String%29%20%20/*%20%u53EF%u9009%u7684%uFF0C%20%27sync%27%20%7C%20%27eager%27%20%7C%20%27weak%27%20%7C%20%27lazy%27%20%7C%20%27lazy-once%27%uFF0C%u9ED8%u8BA4%u503C%u662F%20%27sync%27%20*/%0A%29%0A",lang:"javascript"}),d,o(t,{code:"var%20context%20%3D%20require.context%28%27locales%27%2C%20true%2C%20/%5C.json%24/%2C%20%27lazy%27%29%0Acontext%28%27localeA%27%29.then%28%28locale%29%20%3D%3E%20%7B%0A%20%20//%20do%20something%20with%20locale%0A%7D%29%0A",lang:"javascript"}),C,o(t,{code:"const%20requireContext%20%3D%20require.context%28%27./template%27%2C%20false%2C%20/%5C.js%24/%29%0A//%20%u521B%u5EFA%u51FA%u4E00%u4E2A%20context%uFF0C%u5176%u4E2D%u6587%u4EF6%u6765%u81EA%20template%20%u76EE%u5F55%uFF0C%u4E0D%u641C%u5BFB%u5B50%u76EE%u5F55%uFF0Crequest%20%u4EE5%20%60.js%60%20%u7ED3%u5C3E%u3002%0A",lang:"javascript"}),A,o(t,{code:"console.log%28requireContext%29%0A//%20%u0192%20webpackContext%28req%29%20%7B%0A//%20%20%20var%20id%20%3D%20webpackContextResolve%28req%29%3B%0A//%20%20%20return%20__webpack_require__%28id%29%3B%0A//%20%7D%0A",lang:"javascript"}),_,x,o(t,{code:"console.log%28requireContext.resolve%29%0A//%20%u0192%20webpackContextResolve%28req%29%20%7B%0A//%20%20%20if%28%21__webpack_require__.o%28map%2C%20req%29%29%20%7B%0A//%20%20%20%20%20var%20e%20%3D%20new%20Error%28%22Cannot%20find%20module%20%27%22%20+%20req%20+%20%22%27%22%29%3B%0A//%20%20%20%20%20e.code%20%3D%20%27MODULE_NOT_FOUND%27%3B%0A//%20%20%20%20%20throw%20e%3B%0A//%20%20%20%7D%0A//%20%20%20return%20map%5Breq%5D%3B%0A//%20%7D%0A",lang:"javascript"}),p,q,o(t,{code:"console.log%28requireContext.keys%29%0A//%20%u0192%20webpackContextKeys%28%29%20%7B%0A//%20%20%20return%20Object.keys%28map%29%3B%0A//%20%7D%0A",lang:"javascript"}),F,o(t,{code:"function%20importAll%20%28r%29%20%7B%0A%20%20r.keys%28%29.forEach%28r%29%0A%7D%0AimportAll%28requireContext%29%0A",lang:"javascript"}),h,E,o(t,{code:"console.log%28requireContext.id%29%0A//%20./src/template%20sync%20%5C.js%24%0A",lang:"javascript"})]),_:1})}}};export{v as default};
