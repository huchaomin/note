import{r as c,o as i,c as r,f as e,aa as t,g as o,v as l}from"./vendor-e1827163.js";const _=t("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),h=t("p",null,"\u6253\u5305\u5DE5\u5177\u5E38\u7528\u7684 glob \u5339\u914D\u5DE5\u5177",-1),m=t("br",null,null,-1),f=t("h2",{id:"2-\u7528\u6CD5",class:"doc-heading"},"\u7528\u6CD5",-1),p=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("p",null,[l("Always use forward-slashes(\u6B63\u659C\u6760) in glob expressions (patterns and ignore option)."),t("br"),l(" Use backslashes(\u53CD\u659C\u6760) for escaping characters.")])],-1),g=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"\u8BED\u6CD5"),t("th",{class:"text-left"},"\u8BF4\u660E")])],-1),k=t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"*")]),t("td",null,[l("\u5339\u914D\u4EFB\u610F\u5B57\u7B26,\u4F46\u4E0D\u5305\u62EC\u659C\u6760\uFF08\u8DEF\u5F84\u5206\u5272\u7B26\uFF09\u548C\u9690\u85CF\u6587\u4EF6\uFF08\u547D\u540D\u4EE5"),t("code",{class:"doc-token"},"."),l("\u5F00\u5934\uFF09")])],-1),b=t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"**")]),t("td",null,"\u5339\u914D0\u6216\u8005\u591A\u4E2A\u76EE\u5F55")],-1),x=t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"?")]),t("td",null,"\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF0C\u4F46\u4E0D\u5305\u62EC\u659C\u6760\uFF08\u8DEF\u5F84\u5206\u5272\u7B26\uFF09")],-1),j=t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"\\\\")]),t("td",null,"\u8F6C\u4E49\u5B57\u7B26 $^*+?()[]")],-1),v=t("td",null,[t("code",{class:"doc-token"},"[[:digit:]]")],-1),q=t("td",null,[t("code",{class:"doc-token"},"?(pattern-list)")],-1),y=t("td",null,[t("code",{class:"doc-token"},"{}")],-1),R=t("td",null,[t("code",{class:"doc-token"},"[1-5]")],-1),B=t("tr",null,[t("td",null,"`(a"),t("td",null,"b)`")],-1),N=t("h2",{id:"3-\u4F8B\u5B50",class:"doc-heading"},"\u4F8B\u5B50",-1),w=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"\u8BED\u6CD5"),t("th",{class:"text-left"},"\u8BF4\u660E")])],-1),V=t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"cellRender/**.vue"),l(" \u6216 "),t("code",{class:"doc-token"},"cellRender/*.vue")]),t("td",null,"\u53EA\u80FD\u5339\u914D\u4E0B\u5C42\u6587\u4EF6")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"cellRender/*/*.vue"),l(" \u6216 "),t("code",{class:"doc-token"},"cellRender/*/**.vue")]),t("td",null,"\u53EA\u80FD\u5339\u914D\u4E0B\u4E0B\u5C42\u6587\u4EF6")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"cellRender/**/*.vue")]),t("td",null,"\u5339\u914D\u6240\u6709\u5C42\u7EA7\u6587\u4EF6")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"src/*.??")]),t("td",null,"\u5339\u914D\u4E0B\u5C42\u4E14\u62D3\u5C55\u540D\u4E3A\u4E24\u4F4D\u7684\u6587\u4EF6")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"file-[01].js")]),t("td",null,"\u5339\u914D file-0.js \u548C file-1.js")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"src/**/*.{css,scss}")]),t("td",null,"\u5339\u914D src \u4E0B\u6240\u6709 css \u548C scss \u6587\u4EF6")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"file-[[:digit:]].js")]),t("td",null,"\u5339\u914D file-0.js, file-1.js, \u2026 ,file-9.js")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"file-{1..3}.js")]),t("td",null,"\u5339\u914D file-1.js, file-2.js, file-3.js")]),t("tr",null,[t("td",null,"`file-(1"),t("td",null,"2)`")])],-1),T={__name:"fast-glob",setup(A){const a=[{id:"doc-title",title:"fast-glob \u7528\u6CD5"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-\u7528\u6CD5",title:"2. \u7528\u6CD5"},{id:"3-\u4F8B\u5B50",title:"3. \u4F8B\u5B50"}];return(C,G)=>{const s=c("doc-link"),n=c("q-markup-table"),d=c("c-scroll-area"),u=c("doc-page");return i(),r(u,{desc:"",toc:a},{default:e(()=>[_,h,t("p",null,[o(s,{to:"https://github.com/mrmlnc/fast-glob#pattern-syntax"},{default:e(()=>[l("\u5B98\u65B9\u6587\u6863")]),_:1}),m,o(s,{to:"https://github.com/micromatch/micromatch"},{default:e(()=>[l("micromatch")]),_:1})]),f,p,o(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:e(()=>[o(n,{flat:"",bordered:"",dense:""},{default:e(()=>[g,t("tbody",null,[k,b,x,j,t("tr",null,[v,t("td",null,[o(s,{to:"https://github.com/micromatch/picomatch#posix-brackets"},{default:e(()=>[l("\u5339\u914D\u6570\u5B57")]),_:1})])]),t("tr",null,[q,t("td",null,[o(s,{to:"https://github.com/micromatch/micromatch#extglobs"},{default:e(()=>[l("\u5339\u914D0\u6216\u80051\u4E2Apattern-list\u4E2D\u7684\u5B57\u7B26")]),_:1})])]),t("tr",null,[y,t("td",null,[o(s,{to:"https://github.com/micromatch/braces"},{default:e(()=>[l("\u5339\u914D\u591A\u4E2A\u5B57\u7B26")]),_:1})])]),t("tr",null,[R,t("td",null,[o(s,{to:"https://github.com/micromatch/micromatch#regex-character-classes"},{default:e(()=>[l("\u5339\u914D1-5\u7684\u5B57\u7B26")]),_:1})])]),B])]),_:1})]),_:1}),N,o(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:e(()=>[o(n,{flat:"",bordered:"",dense:""},{default:e(()=>[w,V]),_:1})]),_:1})]),_:1})}}};export{T as default};
