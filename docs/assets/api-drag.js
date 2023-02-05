import{r as t,o as r,c as i,f as d,a9 as o,g as l,v as e}from"./vendor.js";const _=o("h2",{id:"1-\u77E5\u8BC6\u70B9",class:"doc-heading"},"\u77E5\u8BC6\u70B9",-1),p=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"DataTransfer"),e(" \u5BF9\u8C61\uFF1A\u9000\u62FD\u5BF9\u8C61\u7528\u6765\u4F20\u9012\u7684\u5A92\u4ECB\uFF0C\u4F7F\u7528\u4E00\u822C\u4E3AEvent.dataTransfer\u3002")])],-1),g=o("p",null,[o("code",{class:"doc-token"},"draggable"),e(" \u5C5E\u6027\uFF1A\u5C31\u662F\u6807\u7B7E\u5143\u7D20\u8981\u8BBE\u7F6Edraggable=true\uFF0C\u5426\u5219\u4E0D\u4F1A\u6709\u6548\u679C\uFF0C\u4F8B\u5982\uFF1A")],-1),u=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"ondragstart"),e(" \u4E8B\u4EF6\uFF1A\u5F53\u62D6\u62FD\u5143\u7D20\u5F00\u59CB\u88AB\u62D6\u62FD\u7684\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u6B64\u4E8B\u4EF6\u4F5C\u7528\u5728\u88AB\u62D6\u66F3\u5143\u7D20\u4E0A")])],-1),h=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"ondragenter"),e(" \u4E8B\u4EF6\uFF1A\u5F53\u62D6\u66F3\u5143\u7D20\u8FDB\u5165\u76EE\u6807\u5143\u7D20\u7684\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u6B64\u4E8B\u4EF6\u4F5C\u7528\u5728\u76EE\u6807\u5143\u7D20\u4E0A")])],-1),m=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"ondragover"),e(" \u4E8B\u4EF6\uFF1A\u62D6\u62FD\u5143\u7D20\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u79FB\u52A8\u7684\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u6B64\u4E8B\u4EF6\u4F5C\u7528\u5728\u76EE\u6807\u5143\u7D20\u4E0A")])],-1),f=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"ondrop"),e(" \u4E8B\u4EF6\uFF1A\u88AB\u62D6\u62FD\u7684\u5143\u7D20\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u540C\u65F6\u9F20\u6807\u653E\u5F00\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u6B64\u4E8B\u4EF6\u4F5C\u7528\u5728\u76EE\u6807\u5143\u7D20\u4E0A")])],-1),k=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"ondragend"),e(" \u4E8B\u4EF6\uFF1A\u5F53\u62D6\u62FD\u5B8C\u6210\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u6B64\u4E8B\u4EF6\u4F5C\u7528\u5728\u88AB\u62D6\u66F3\u5143\u7D20\u4E0A")])],-1),v=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"Event.preventDefault()"),e(" \u65B9\u6CD5\uFF1A\u963B\u6B62\u9ED8\u8BA4\u7684\u4E9B\u4E8B\u4EF6\u65B9\u6CD5\u7B49\u6267\u884C\u3002"),o("br"),e(" \u5728ondragover\u4E2D\u4E00\u5B9A\u8981\u6267\u884CpreventDefault()\uFF0C\u5426\u5219ondrop\u4E8B\u4EF6\u4E0D\u4F1A\u88AB\u89E6\u53D1\u3002\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u65E0\u6CD5\u5C06\u6570\u636E\u3001\u5143\u7D20\u653E\u5230\u5176\u4ED6\u5143\u7D20\u4E2D\u7684\uFF09")])],-1),b=o("li",null,[o("p",null,[o("code",{class:"doc-token"},"Event.effectAllowed"),e(" \u5C5E\u6027\uFF1A\u5C31\u662F\u62D6\u62FD\u7684\u6548\u679C\u3002\uFF08\u6211\u6CA1\u8BD5\u51FA\u6548\u679C\uFF09")])],-1),w=o("h2",{id:"2-\u6D4F\u89C8\u5668\u9ED8\u8BA4\u9009\u62E9\u5230\u7684dom\u90FD\u53EF\u4EE5\u62D6\u62FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u963B\u6B62",class:"doc-heading"},"\u6D4F\u89C8\u5668\u9ED8\u8BA4\u9009\u62E9\u5230\u7684dom\u90FD\u53EF\u4EE5\u62D6\u62FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u963B\u6B62",-1),x=o("h2",{id:"3-\u7F8E\u5316\u63D2\u4EF6",class:"doc-heading"},"\u7F8E\u5316\u63D2\u4EF6",-1),N={__name:"api-drag",setup(y){const c=[{id:"doc-title",title:"html drag api"},{id:"1-\u77E5\u8BC6\u70B9",title:"1. \u77E5\u8BC6\u70B9"},{id:"2-\u6D4F\u89C8\u5668\u9ED8\u8BA4\u9009\u62E9\u5230\u7684dom\u90FD\u53EF\u4EE5\u62D6\u62FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u963B\u6B62",title:"2. \u6D4F\u89C8\u5668\u9ED8\u8BA4\u9009\u62E9\u5230\u7684dom\u90FD\u53EF\u4EE5\u62D6\u62FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u963B\u6B62"},{id:"3-\u7F8E\u5316\u63D2\u4EF6",title:"3. \u7F8E\u5316\u63D2\u4EF6"}];return(D,B)=>{const n=t("doc-code"),a=t("doc-link"),s=t("doc-page");return r(),i(s,{desc:"html drag api\u77E5\u8BC6\u70B9",toc:c},{default:d(()=>[_,o("ol",null,[p,o("li",null,[g,l(n,{code:`<div title="\u62D6\u62FD\u6211" draggable="true">\u5217\u88681</div>
`,lang:"html"})]),u,h,m,f,k,v,b]),w,l(n,{code:`<body ondragstart="return false"></body>
// \u7136\u540E\u9700\u8981\u62D6\u62FD\u7684\u5143\u7D20\u4E0A\u9762
onDragStart (e) {
 e.stopPropagation(); // \u5168\u5C40\u963B\u6B62\u4E86dragstart\u4E8B\u4EF6\uFF0C\u8FD9\u91CC\u4E0D\u80FD\u5192\u6CE1\u5230\u5168\u5C40
}
`,lang:"html"}),x,o("p",null,[l(a,{to:"https://www.npmjs.com/package/draggable-polyfill"},{default:d(()=>[e("draggable-polyfill")]),_:1})])]),_:1})}}};export{N as default};
