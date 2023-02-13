import{r as n,o as l,c as s,f as p,g as o,aa as e,v as c}from"./vendor-90615676.js";const k=e("h2",{id:"1-\u7EFC\u5408",class:"doc-heading"},"\u7EFC\u5408",-1),i=e("p",null,"\u901A\u8FC7\u5728 import \u4E2D\u6DFB\u52A0\u6CE8\u91CA\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u8BF8\u5982\u7ED9 chunk \u547D\u540D\u6216\u9009\u62E9\u4E0D\u540C\u6A21\u5F0F\u7684\u64CD\u4F5C",-1),r=e("h2",{id:"2-webpackignore",class:"doc-heading"},"webpackIgnore",-1),u=e("ul",null,[e("li",null,"\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u7981\u7528\u52A8\u6001\u5BFC\u5165\u89E3\u6790"),e("li",null,"\u8BBE\u7F6E\u4E3A true \u5219\u4E0D\u8FDB\u884C\u4EE3\u7801\u5206\u5272")],-1),b=e("h2",{id:"3-webpackchunkname",class:"doc-heading"},"webpackChunkName",-1),h=e("p",null,"\u65B0 chunk \u7684\u540D\u79F0",-1),w=e("h2",{id:"4-webpackmode",class:"doc-heading"},"webpackMode",-1),m=e("ul",null,[e("li",null,[e("code",{class:"doc-token"},'"lazy"'),c("\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u4E3A\u6BCF\u4E2A import() \u5BFC\u5165\u7684\u6A21\u5757\uFF0C\u751F\u6210\u4E00\u4E2A\u53EF\u5EF6\u8FDF\u52A0\u8F7D(lazy-loadable) chunk")]),e("li",null,[e("code",{class:"doc-token"},'"lazy-once"'),c("\uFF1A\u751F\u6210\u4E00\u4E2A\u53EF\u4EE5\u6EE1\u8DB3\u6240\u6709 import() \u8C03\u7528\u7684\u5355\u4E2A\u53EF\u5EF6\u8FDF\u52A0\u8F7D(lazy-loadable) chunk\u3002"),e("br"),c(" \u6B64 chunk \u5C06\u5728\u7B2C\u4E00\u6B21 import() \u8C03\u7528\u65F6\u83B7\u53D6\uFF0C\u968F\u540E\u7684 import() \u8C03\u7528\u5C06\u4F7F\u7528\u76F8\u540C\u7684\u7F51\u7EDC\u54CD\u5E94\u3002"),e("br"),c(" \u6CE8\u610F\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4EC5\u5728\u90E8\u5206\u52A8\u6001\u8BED\u53E5\u4E2D\u6709\u610F\u4E49\uFF0C\u4F8B\u5982 import("),e("code",{class:"doc-token"},"./locales/${language}.json"),c(")\uFF0C\u5176\u4E2D\u53EF\u80FD\u542B\u6709\u591A\u4E2A\u88AB\u8BF7\u6C42\u7684\u6A21\u5757\u8DEF\u5F84\u3002")]),e("li",null,[e("code",{class:"doc-token"},'"eager"'),c("\uFF1A\u4E0D\u4F1A\u751F\u6210\u989D\u5916\u7684 chunk\uFF0C\u6240\u6709\u6A21\u5757\u90FD\u88AB\u5F53\u524D chunk \u5F15\u5165\uFF0C\u5E76\u4E14\u6CA1\u6709\u989D\u5916\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002"),e("br"),c(" \u4ECD\u7136\u4F1A\u8FD4\u56DE Promise\uFF0C\u4F46\u662F\u662F resolved \u72B6\u6001\u3002\u548C\u9759\u6001\u5BFC\u5165\u76F8\u5BF9\u6BD4\uFF0C\u5728\u8C03\u7528 import\uFF08\uFF09\u5B8C\u6210\u4E4B\u524D\uFF0C\u8BE5\u6A21\u5757\u4E0D\u4F1A\u88AB\u6267\u884C\u3002")]),e("li",null,[e("code",{class:"doc-token"},'"weak"'),c("\uFF1A\u5C1D\u8BD5\u52A0\u8F7D\u6A21\u5757\uFF0C\u5982\u679C\u8BE5\u6A21\u5757\u51FD\u6570\u5DF2\u7ECF\u4EE5\u5176\u4ED6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5373\uFF0C\u53E6\u4E00\u4E2A chunk \u5BFC\u5165\u8FC7\u6B64\u6A21\u5757\uFF0C\u6216\u5305\u542B\u6A21\u5757\u7684\u811A\u672C\u88AB\u52A0\u8F7D\uFF09\u3002"),e("br"),c(" \u4ECD\u7136\u4F1A\u8FD4\u56DE Promise\uFF0C\u4F46\u662F\u53EA\u6709\u5728\u5BA2\u6237\u7AEF\u4E0A\u5DF2\u7ECF\u6709\u8BE5 chunk \u65F6\u624D\u6210\u529F\u89E3\u6790\u3002"),e("br"),c(" \u5982\u679C\u8BE5\u6A21\u5757\u4E0D\u53EF\u7528\uFF0CPromise \u5C06\u4F1A\u662F rejected \u72B6\u6001\uFF0C\u5E76\u4E14\u7F51\u7EDC\u8BF7\u6C42\u6C38\u8FDC\u4E0D\u4F1A\u6267\u884C\u3002"),e("br"),c(" \u5F53\u9700\u8981\u7684 chunks \u59CB\u7EC8\u5728\uFF08\u5D4C\u5165\u5728\u9875\u9762\u4E2D\u7684\uFF09\u521D\u59CB\u8BF7\u6C42\u4E2D\u624B\u52A8\u63D0\u4F9B\uFF0C\u800C\u4E0D\u662F\u5728\u5E94\u7528\u7A0B\u5E8F\u5BFC\u822A\u5728\u6700\u521D\u6CA1\u6709\u63D0\u4F9B\u7684\u6A21\u5757\u5BFC\u5165\u7684\u60C5\u51B5\u89E6\u53D1\uFF0C\u8FD9\u5BF9\u4E8E\u901A\u7528\u6E32\u67D3\uFF08SSR\uFF09\u662F\u975E\u5E38\u6709\u7528\u7684\u3002")])],-1),_=e("h2",{id:"5-webpackinclude-\u4E0E-webpackexclude",class:"doc-heading"},"webpackInclude \u4E0E webpackExclude",-1),g=e("p",null,"\u4F7F\u7528 webpackInclude and webpackExclude \u9009\u9879\u53EF\u8BA9\u4F60\u6DFB\u52A0\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F\uFF0C\u4EE5\u51CF\u5C11 webpack \u6253\u5305\u5BFC\u5165\u7684\u6587\u4EF6\u6570\u91CF",-1),f=e("h2",{id:"6-webpackprefetch-\u4E0E-webpackpreload",class:"doc-heading"},"webpackPrefetch \u4E0E webpackPreload",-1),x=e("p",null,"\u8BBE\u7F6E\u6A21\u5757\u7684\u9884\u52A0\u8F7D\u65B9\u5F0F",-1),N={__name:"magic-comments",setup(P){const d=[{id:"doc-title",title:"webpack Magic Comments"},{id:"1-\u7EFC\u5408",title:"1. \u7EFC\u5408"},{id:"2-webpackignore",title:"2. webpackIgnore"},{id:"3-webpackchunkname",title:"3. webpackChunkName"},{id:"4-webpackmode",title:"4. webpackMode"},{id:"5-webpackinclude-\u4E0E-webpackexclude",title:"5. webpackInclude \u4E0E webpackExclude"},{id:"6-webpackprefetch-\u4E0E-webpackpreload",title:"6. webpackPrefetch \u4E0E webpackPreload"}];return(j,y)=>{const a=n("doc-code"),t=n("doc-page");return l(),s(t,{desc:"webpack webpackChunkName webpackMode webpackPrefetch webpackPreload \u4F7F\u7528\u65B9\u6CD5",toc:d},{default:p(()=>[k,i,o(a,{code:`// \u5355\u4E2A\u76EE\u6807
import(/* webpackIgnore: true */ 'ignored-module.js')

import(
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  /* webpackExports: ["default", "named"] */
  'module'
)

// \u591A\u4E2A\u53EF\u80FD\u7684\u76EE\u6807
import(
  /* webpackInclude: /\\.json$/ */
  /* webpackExclude: /\\.noimport\\.json$/ */
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  \`./locale/\${language}\`
)
`,lang:"javascript"}),r,u,b,h,o(a,{code:`// your code
const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')

// webpack.config.js
output: {
  // ...
  chunkFilename: '[name].vendor.js',
}

// bundle
lodash.vendor.js
`,lang:"javascript"}),w,m,_,g,f,x]),_:1})}}};export{N as default};
