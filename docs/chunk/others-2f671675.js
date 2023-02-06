import{r as t,o as d,c as a,f as i,a8 as e,g as c,v as o}from"./vendor-5a734afa.js";const r=e("h2",{id:"1-nodeenv",class:"doc-heading"},"nodeEnv",-1),u=e("h3",{id:"2-\u53D6\u503C-false|string",class:"doc-heading"},[o("\u53D6\u503C "),e("code",{class:"doc-token"},"false"),o("|"),e("code",{class:"doc-token"},"string")],-1),h=e("p",null,[o("\u544A\u77E5 "),e("code",{class:"doc-token"},"webpack"),o(" \u5C06 "),e("code",{class:"doc-token"},"process\\.env\\.NODE_ENV"),o(" \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u7ED9\u5B9A\u5B57\u7B26\u4E32"),e("br"),o(" \u5982\u679C "),e("code",{class:"doc-token"},"optimization.nodeEnv"),o(" \u4E0D\u662F "),e("code",{class:"doc-token"},"false"),o("\uFF0C\u5219\u4F1A\u4F7F\u7528 "),e("code",{class:"doc-token"},"DefinePlugin"),e("br"),e("code",{class:"doc-token"},"optimization.nodeEnv"),o(" \u9ED8\u8BA4\u503C\u53D6\u51B3\u4E8E "),e("code",{class:"doc-token"},"mode"),o("\uFF0C\u5982\u679C\u4E3A "),e("code",{class:"doc-token"},"false"),o("\uFF0C\u5219\u4F1A\u56DE\u9000\u5230 "),e("code",{class:"doc-token"},"production")],-1),_=e("blockquote",{class:"doc-note"},[e("p",null,"\u5F53 mode \u8BBE\u7F6E\u4E3A \u2018none\u2019 \u65F6\uFF0Coptimization.nodeEnv \u7684\u9ED8\u8BA4\u503C\u4E3A false")],-1),p=e("h2",{id:"3-realcontenthash",class:"doc-heading"},"realContentHash",-1),m=e("p",null,"\u8D44\u6E90\u751F\u6210\u6B63\u786E\u7684\u8D44\u6E90\u5185\u5BB9hash\u540E\uFF0C\u518D\u6DFB\u52A0\u4E00\u4E2A\u989D\u5916\u7684hash\u3002",-1),k=e("ul",null,[e("li",null,[o("production\u6A21\u5F0F\u4E3A"),e("code",{class:"doc-token"},"true")]),e("li",null,[o("development\u6A21\u5F0F\u4E3A"),e("code",{class:"doc-token"},"false")]),e("li",null,[o("none\u6A21\u5F0F\u4E3A"),e("code",{class:"doc-token"},"false")])],-1),g=e("p",null,"\u5982\u679C realContentHash \u8BBE\u7F6E\u4E3A false\uFF0C\u5185\u90E8\u6570\u636E\u7528\u4E8E\u8BA1\u7B97\u54C8\u5E0C\u503C\uFF0C\u5F53\u9759\u6001\u8D44\u6E90\u76F8\u540C\u65F6\uFF0C\u5B83\u53EF\u4EE5\u6539\u53D8\u3002",-1),b=e("h2",{id:"4-runtimechunk",class:"doc-heading"},"runtimeChunk",-1),f=e("p",null,"\u63D0\u53D6\u5F15\u5BFC\u6A21\u677F(extracting boilerplate)",-1),v=e("h3",{id:"5-\u53D6\u503C-object-\u53EA\u6709\u4E00\u4E2Aname\u5C5E\u6027-|string|boolean",class:"doc-heading"},[o("\u53D6\u503C "),e("code",{class:"doc-token"},"object"),o("(\u53EA\u6709\u4E00\u4E2Aname\u5C5E\u6027)|"),e("code",{class:"doc-token"},"string"),o("|"),e("code",{class:"doc-token"},"boolean")],-1),C=e("li",null,[e("p",null,[o("\u9ED8\u8BA4\u503C\u4E3A"),e("code",{class:"doc-token"},"false"),o(",\u6BCF\u4E2A\u5165\u53E3 chunk \u4E2D\u76F4\u63A5\u5D4C\u5165 runtime")])],-1),E=e("p",null,"\u4E3A\u6BCF\u4E2A\u5165\u53E3\u6DFB\u52A0\u4E00\u4E2A\u53EA\u542B\u6709 runtime \u7684\u989D\u5916 chunk,\u4E0B\u9762\u4E09\u79CD\u914D\u7F6E\u6548\u679C\u4E00\u6837",-1),N=e("p",null,"\u521B\u5EFA\u4E00\u4E2A\u5728\u6240\u6709\u751F\u6210 chunk \u4E4B\u95F4\u5171\u4EAB\u7684\u8FD0\u884C\u65F6\u6587\u4EF6,\u4E0B\u9762\u4E24\u79CD\u914D\u7F6E\u6548\u679C\u4E00\u6837",-1),j=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("\u5BF9\u4E8E\u6BCF\u4E2A runtime chunk\uFF0C\u5BFC\u5165\u7684\u6A21\u5757\u4F1A\u88AB\u5206\u522B\u521D\u59CB\u5316\u3002"),e("br"),o(" \u56E0\u6B64\u5982\u679C\u4F60\u5728\u540C\u4E00\u4E2A\u9875\u9762\u4E2D\u5F15\u7528\u591A\u4E2A\u5165\u53E3\u8D77\u70B9\uFF0C\u8BF7\u6CE8\u610F\u6B64\u884C\u4E3A\u3002"),e("br"),o(" \u4F60\u6216\u8BB8\u5E94\u8BE5\u5C06\u5176\u8BBE\u7F6E\u4E3A single\uFF0C\u6216\u8005\u4F7F\u7528\u5176\u4ED6\u53EA\u6709\u4E00\u4E2A runtime \u5B9E\u4F8B\u7684\u914D\u7F6E\u3002")])],-1),B={__name:"others",setup(w){const s=[{id:"doc-title",title:"webpack optimization"},{id:"1-nodeenv",title:"1. nodeEnv"},{id:"2-\u53D6\u503C-false|string",title:"1.1. \u53D6\u503C false|string",sub:!0},{id:"3-realcontenthash",title:"2. realContentHash"},{id:"4-runtimechunk",title:"3. runtimeChunk"},{id:"5-\u53D6\u503C-object-\u53EA\u6709\u4E00\u4E2Aname\u5C5E\u6027-|string|boolean",title:"3.1. \u53D6\u503C object(\u53EA\u6709\u4E00\u4E2Aname\u5C5E\u6027)|string|boolean",sub:!0}];return(x,z)=>{const n=t("doc-code"),l=t("doc-page");return d(),a(l,{desc:"webpack optimization \u5176\u4ED6\u914D\u7F6E",toc:s},{default:i(()=>[r,u,h,_,p,m,k,g,b,f,v,e("ol",null,[C,e("li",null,[E,c(n,{code:`// true
// 'multiple'
runtimeChunk: {
  name: (entrypoint) => \`runtime~\${entrypoint.name}\`,
},
`,lang:"javascript"})]),e("li",null,[N,c(n,{code:`// 'single'
runtimeChunk: {
  name: 'runtime',
},
`,lang:"javascript"})])]),j]),_:1})}}};export{B as default};
