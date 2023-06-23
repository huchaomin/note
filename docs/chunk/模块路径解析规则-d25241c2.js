import{r as l,o as a,c as n,f as d,g as s,aa as e,v as o}from"./vendor-e1827163.js";const r=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"\u5F53\u6253\u5305\u6A21\u5757\u65F6\uFF0Cwebpack \u4F7F\u7528 enhanced-resolve \u6765\u89E3\u6790\u6587\u4EF6\u8DEF\u5F84")],-1),p=e("h2",{id:"1-\u7EDD\u5BF9\u8DEF\u5F84",class:"doc-heading"},"\u7EDD\u5BF9\u8DEF\u5F84",-1),_=e("p",null,"\u7531\u4E8E\u5DF2\u7ECF\u83B7\u5F97\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u518D\u505A\u8FDB\u4E00\u6B65\u89E3\u6790",-1),h=e("h2",{id:"2-\u76F8\u5BF9\u8DEF\u5F84",class:"doc-heading"},"\u76F8\u5BF9\u8DEF\u5F84",-1),m=e("p",null,[o("\u4F7F\u7528 import \u6216 require \u7684\u8D44\u6E90\u6587\u4EF6\u6240\u5904\u7684\u76EE\u5F55\uFF0C\u88AB\u8BA4\u4E3A\u662F\u4E0A\u4E0B\u6587\u76EE\u5F55\u3002"),e("br"),o(" \u5728 import/require \u4E2D\u7ED9\u5B9A\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F1A\u62FC\u63A5\u6B64\u4E0A\u4E0B\u6587\u8DEF\u5F84\uFF0C\u6765\u751F\u6210\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84")],-1),u=e("h2",{id:"3-\u6A21\u5757\u8DEF\u5F84",class:"doc-heading"},"\u6A21\u5757\u8DEF\u5F84",-1),g=e("ol",null,[e("li",null,[o("\u5982\u679C package \u4E2D\u5305\u542B package.json \u6587\u4EF6\uFF0C\u90A3\u4E48\u5728 resolve.exportsFields \u914D\u7F6E\u9009\u9879\u4E2D\u6307\u5B9A\u7684\u5B57\u6BB5\u4F1A\u88AB\u4F9D\u6B21\u67E5\u627E\uFF0C"),e("br"),o(" package.json \u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u4F1A\u6839\u636E package \u5BFC\u51FA\u6307\u5357\u786E\u5B9A package \u4E2D\u53EF\u7528\u7684 export\u3002")])],-1),v=e("p",null,"\u4E00\u65E6\u6839\u636E\u4E0A\u8FF0\u89C4\u5219\u89E3\u6790\u8DEF\u5F84\u540E\uFF0Cresolver \u5C06\u4F1A\u68C0\u67E5\u8DEF\u5F84\u662F\u6307\u5411\u6587\u4EF6\u8FD8\u662F\u6587\u4EF6\u5939\u3002\u5982\u679C\u8DEF\u5F84\u6307\u5411\u6587\u4EF6\uFF1A",-1),k=e("ol",{start:"2"},[e("li",null,"\u5982\u679C\u6587\u4EF6\u5177\u6709\u6269\u5C55\u540D\uFF0C\u5219\u76F4\u63A5\u5C06\u6587\u4EF6\u6253\u5305\u3002"),e("li",null,"\u5426\u5219\uFF0C\u5C06\u4F7F\u7528 resolve.extensions \u9009\u9879\u4F5C\u4E3A\u6587\u4EF6\u6269\u5C55\u540D\u6765\u89E3\u6790\uFF0C\u6B64\u9009\u9879\u4F1A\u544A\u8BC9\u89E3\u6790\u5668\u5728\u89E3\u6790\u4E2D\u80FD\u591F\u63A5\u53D7\u90A3\u4E9B\u6269\u5C55\u540D\uFF08\u4F8B\u5982 .js\uFF0C.jsx\uFF09\u3002")],-1),f=e("p",null,"\u5982\u679C\u8DEF\u5F84\u6307\u5411\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5219\u8FDB\u884C\u5982\u4E0B\u6B65\u9AA4\u5BFB\u627E\u5177\u6709\u6B63\u786E\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF1A",-1),j=e("ol",{start:"4"},[e("li",null,"\u5982\u679C\u6587\u4EF6\u5939\u4E2D\u5305\u542B package.json \u6587\u4EF6\uFF0C\u5219\u4F1A\u6839\u636E resolve.mainFields \u914D\u7F6E\u4E2D\u7684\u5B57\u6BB5\u987A\u5E8F\u67E5\u627E\uFF0C\u5E76\u6839\u636E package.json \u4E2D\u7684\u7B26\u5408\u914D\u7F6E\u8981\u6C42\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u6765\u786E\u5B9A\u6587\u4EF6\u8DEF\u5F84\u3002"),e("li",null,"\u5982\u679C\u4E0D\u5B58\u5728 package.json \u6587\u4EF6\u6216 resolve.mainFields \u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u8DEF\u5F84\uFF0C\u5219\u4F1A\u6839\u636E resolve.mainFiles \u914D\u7F6E\u9009\u9879\u4E2D\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u987A\u5E8F\u67E5\u627E\uFF0C\u770B\u662F\u5426\u80FD\u5728 import/require \u7684\u76EE\u5F55\u4E0B\u5339\u914D\u5230\u4E00\u4E2A\u5B58\u5728\u7684\u6587\u4EF6\u540D\u3002"),e("li",null,"\u7136\u540E\u4F7F\u7528 resolve.extensions \u9009\u9879\uFF0C\u4EE5\u7C7B\u4F3C\u7684\u65B9\u5F0F\u89E3\u6790\u6587\u4EF6\u6269\u5C55\u540D\u3002")],-1),x=e("h2",{id:"4-\u5173\u4E8E\u7F13\u5B58",class:"doc-heading"},"\u5173\u4E8E\u7F13\u5B58",-1),C=e("p",null,[o("\u6BCF\u6B21\u6587\u4EF6\u7CFB\u7EDF\u8BBF\u95EE\u6587\u4EF6\u90FD\u4F1A\u88AB\u7F13\u5B58\uFF0C\u4EE5\u4FBF\u4E8E\u66F4\u5FEB\u89E6\u53D1\u5BF9\u540C\u4E00\u6587\u4EF6\u7684\u591A\u4E2A\u5E76\u884C\u6216\u4E32\u884C\u8BF7\u6C42\u3002"),e("br"),o(" \u5728 watch \u6A21\u5F0F \u4E0B\uFF0C\u53EA\u6709\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\u4F1A\u88AB\u4ECE\u7F13\u5B58\u4E2D\u79FB\u51FA\u3002\u5982\u679C\u5173\u95ED watch \u6A21\u5F0F\uFF0C\u5219\u4F1A\u5728\u6BCF\u6B21\u7F16\u8BD1\u524D\u6E05\u7406\u7F13\u5B58\u3002")],-1),q={__name:"\u6A21\u5757\u8DEF\u5F84\u89E3\u6790\u89C4\u5219",setup(b){const c=[{id:"doc-title",title:"webpack \u6587\u4EF6\u5F15\u5165\u8DEF\u5F84"},{id:"1-\u7EDD\u5BF9\u8DEF\u5F84",title:"1. \u7EDD\u5BF9\u8DEF\u5F84"},{id:"2-\u76F8\u5BF9\u8DEF\u5F84",title:"2. \u76F8\u5BF9\u8DEF\u5F84"},{id:"3-\u6A21\u5757\u8DEF\u5F84",title:"3. \u6A21\u5757\u8DEF\u5F84"},{id:"4-\u5173\u4E8E\u7F13\u5B58",title:"4. \u5173\u4E8E\u7F13\u5B58"}];return(A,w)=>{const t=l("doc-code"),i=l("doc-page");return a(),n(i,{desc:"webpack \u6587\u4EF6\u5F15\u5165\u8DEF\u5F84\u89E3\u6790\u89C4\u5219",toc:c},{default:d(()=>[r,p,_,s(t,{code:"import%20%27/home/me/file%27%0Aimport%20%27C%3A%5C%5CUsers%5C%5Cme%5C%5Cfile%27%0A",lang:"javascript"}),h,m,s(t,{code:"import%20%27../src/file1%27%0Aimport%20%27./file2%27%0A",lang:"javascript"}),u,s(t,{code:"import%20%27module%27%0Aimport%20%27module/lib/file%27%0A",lang:"javascript"}),g,v,k,f,j,x,C]),_:1})}}};export{q as default};
