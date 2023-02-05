import{r as n,o as c,c as d,f as i,g as o,a9 as l}from"./vendor.js";const a=l("h2",{id:"1-\u4ECE\u547D\u4EE4\u884C\u8FD0\u884C-node-js-\u811A\u672C",class:"doc-heading"},"\u4ECE\u547D\u4EE4\u884C\u8FD0\u884C Node.js \u811A\u672C",-1),r=l("h2",{id:"2-\u4ECE-node-js-\u7A0B\u5E8F\u9000\u51FA",class:"doc-heading"},"\u4ECE Node.js \u7A0B\u5E8F\u9000\u51FA",-1),p=l("ol",null,[l("li",null,"ctrl + C\u5F3A\u5236\u5173\u95ED"),l("li",null,"process.exit()")],-1),_=l("ul",null,[l("li",null,"\u8FD9\u610F\u5473\u7740\u4EFB\u4F55\u5F85\u5904\u7406\u7684\u56DE\u8C03\u3001\u4ECD\u5728\u53D1\u9001\u4E2D\u7684\u4EFB\u4F55\u7F51\u7EDC\u8BF7\u6C42\u3001\u4EFB\u4F55\u6587\u4EF6\u7CFB\u7EDF\u8BBF\u95EE\u3001\u6216\u6B63\u5728\u5199\u5165 stdout \u6216 stderr \u7684\u8FDB\u7A0B\uFF0C\u6240\u6709\u8FD9\u4E9B\u90FD\u4F1A\u88AB\u7ACB\u5373\u975E\u6B63\u5E38\u5730\u7EC8\u6B62\u3002"),l("li",null,"\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u6574\u6570\uFF0C\u5411\u64CD\u4F5C\u7CFB\u7EDF\u53D1\u9001\u9000\u51FA\u7801")],-1),u=l("p",null,"\u4E5F\u53EF\u4EE5\u8BBE\u7F6E process.exitCode \u5C5E\u6027\uFF1A",-1),h=l("p",null,"\u5C3D\u91CF\u53CB\u597D\u7684\u9000\u51FA\u7A0B\u5E8F\uFF1A\u5411\u8BE5\u547D\u4EE4\u53D1\u9001\u4FE1\u53F7\uFF0C\u5E76\u4F7F\u7528\u8FDB\u7A0B\u7684\u4FE1\u53F7\u5904\u7406\u7A0B\u5E8F\u8FDB\u884C\u5904\u7406",-1),g=l("div",{class:"doc-note doc-note--tip"},[l("p",{class:"doc-note__title"},"TIP"),l("p",null,"\u4EC0\u4E48\u662F\u4FE1\u53F7\uFF1F\u4FE1\u53F7\u662F\u4E00\u4E2A POSIX \u5185\u90E8\u901A\u4FE1\u7CFB\u7EDF\uFF1A\u53D1\u9001\u901A\u77E5\u7ED9\u8FDB\u7A0B\uFF0C\u4EE5\u544A\u77E5\u5176\u53D1\u751F\u7684\u4E8B\u4EF6\u3002")],-1),v=l("h2",{id:"3-\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF",class:"doc-heading"},"\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF",-1),m=l("p",null,"process \u6838\u5FC3\u6A21\u5757\u63D0\u4F9B\u4E86 env \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u627F\u8F7D\u4E86\u5728\u542F\u52A8\u8FDB\u7A0B\u65F6\u8BBE\u7F6E\u7684\u6240\u6709\u73AF\u5883\u53D8\u91CF",-1),E=l("h2",{id:"4-repl-read-eval-print-loop-\u8BFB\u53D6-\u6C42\u503C-\u8F93\u51FA-\u5FAA\u73AF-\u6A21\u5F0F",class:"doc-heading"},"REPL (Read-Eval-Print Loop) [\u8BFB\u53D6-\u6C42\u503C-\u8F93\u51FA \u5FAA\u73AF]\u6A21\u5F0F",-1),j=l("p",null,"\u5728\u7EC8\u7AEF\u4E2D\u5C1D\u8BD5",-1),x=l("li",null,[l("p",null,"\u4F7F\u7528 tab \u952E\u81EA\u52A8\u8865\u5168,\u4EE5\u5339\u914D\u5DF2\u5B9A\u4E49\u6216\u9884\u5B9A\u4E49\u7684\u53D8\u91CF")],-1),N=l("p",null,"\u63A2\u7D22 JavaScript \u5BF9\u8C61",-1),P=l("p",null,"\u63A2\u7D22\u5168\u5C40\u5BF9\u8C61",-1),R=l("p",null,"_ \u7279\u6B8A\u53D8\u91CF: \u4F1A\u6253\u5370\u6700\u540E\u4E00\u6B21\u64CD\u4F5C\u7684\u7ED3\u679C",-1),b=l("p",null,"\u70B9\u547D\u4EE4",-1),L=l("ul",null,[l("li",null,".help: \u663E\u793A\u70B9\u547D\u4EE4\u7684\u5E2E\u52A9\u3002"),l("li",null,".editor: \u542F\u7528\u7F16\u8F91\u5668\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u7F16\u5199\u591A\u884C JavaScript \u4EE3\u7801\u3002\u5F53\u5904\u4E8E\u6B64\u6A21\u5F0F\u65F6\uFF0C\u6309\u4E0B ctrl-D \u53EF\u4EE5\u8FD0\u884C\u7F16\u5199\u7684\u4EE3\u7801\u3002"),l("li",null,".break: \u5F53\u8F93\u5165\u591A\u884C\u7684\u8868\u8FBE\u5F0F\u65F6\uFF0C\u8F93\u5165 .break \u547D\u4EE4\u53EF\u4EE5\u4E2D\u6B62\u8FDB\u4E00\u6B65\u7684\u8F93\u5165\u3002\u76F8\u5F53\u4E8E\u6309\u4E0B ctrl-C\u3002"),l("li",null,".clear: \u5C06 REPL \u4E0A\u4E0B\u6587\u91CD\u7F6E\u4E3A\u7A7A\u5BF9\u8C61\uFF0C\u5E76\u6E05\u9664\u5F53\u524D\u6B63\u5728\u8F93\u5165\u7684\u4EFB\u4F55\u591A\u884C\u7684\u8868\u8FBE\u5F0F\u3002"),l("li",null,".load: \u52A0\u8F7D JavaScript \u6587\u4EF6\uFF08\u76F8\u5BF9\u4E8E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF09\u3002"),l("li",null,".save: \u5C06\u5728 REPL \u4F1A\u8BDD\u4E2D\u8F93\u5165\u7684\u6240\u6709\u5185\u5BB9\u4FDD\u5B58\u5230\u6587\u4EF6\uFF08\u9700\u6307\u5B9A\u6587\u4EF6\u540D\uFF09\u3002"),l("li",null,".exit: \u9000\u51FA REPL\uFF08\u76F8\u5F53\u4E8E\u6309\u4E0B\u4E24\u6B21 ctrl-C\uFF09\u3002")],-1),C=l("p",null,"\u5982\u679C REPL \u80FD\u5224\u65AD\u51FA\u662F\u5426\u6B63\u5728\u8F93\u5165\u591A\u884C\u7684\u8BED\u53E5\uFF0C\u5219\u65E0\u9700\u8C03\u7528 .editor\u3002",-1),I={__name:"\u5165\u95E8",setup(f){const s=[{id:"doc-title",title:"\u5165\u95E8"},{id:"1-\u4ECE\u547D\u4EE4\u884C\u8FD0\u884C-node-js-\u811A\u672C",title:"1. \u4ECE\u547D\u4EE4\u884C\u8FD0\u884C Node.js \u811A\u672C"},{id:"2-\u4ECE-node-js-\u7A0B\u5E8F\u9000\u51FA",title:"2. \u4ECE Node.js \u7A0B\u5E8F\u9000\u51FA"},{id:"3-\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF",title:"3. \u8BFB\u53D6\u73AF\u5883\u53D8\u91CF"},{id:"4-repl-read-eval-print-loop-\u8BFB\u53D6-\u6C42\u503C-\u8F93\u51FA-\u5FAA\u73AF-\u6A21\u5F0F",title:"4. REPL (Read-Eval-Print Loop) [\u8BFB\u53D6-\u6C42\u503C-\u8F93\u51FA \u5FAA\u73AF]\u6A21\u5F0F"}];return(k,S)=>{const e=n("doc-code"),t=n("doc-page");return c(),d(t,{desc:"",toc:s},{default:i(()=>[a,o(e,{code:`node app.js
`,lang:"shell"}),r,p,_,o(e,{code:`process.exit(1)
# \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9000\u51FA\u7801\u4E3A 0\uFF0C\u8868\u793A\u6210\u529F\u3002
# \u4E0D\u540C\u7684\u9000\u51FA\u7801\u5177\u6709\u4E0D\u540C\u7684\u542B\u4E49\uFF0C\u53EF\u4EE5\u5728\u7CFB\u7EDF\u4E2D\u7528\u4E8E\u7A0B\u5E8F\u4E0E\u5176\u4ED6\u7A0B\u5E8F\u7684\u901A\u4FE1\u3002
`,lang:"shell"}),u,o(e,{code:`process.exitCode = 1
# \u5F53\u7A0B\u5E8F\u7ED3\u675F\u65F6\uFF0CNode.js \u4F1A\u8FD4\u56DE\u8BE5\u9000\u51FA\u7801\u3002
`,lang:"shell"}),h,g,o(e,{code:`const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('\u4F60\u597D')
})
const server = app.listen(3000, () => console.log('\u670D\u52A1\u5668\u5DF2\u5C31\u7EEA'))
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('\u8FDB\u7A0B\u5DF2\u7EC8\u6B62')
  })
})
`,lang:"javascript"}),v,m,o(e,{code:`process\\.env\\.NODE_ENV # "development"
`,lang:"shell"}),E,j,o(e,{code:`node # \u56DE\u8F66
`,lang:"shell"}),l("ol",null,[x,l("li",null,[N,o(e,{code:`Number. # \u6309\u4E0Btab,\u4F1A\u5217\u51FANumber\u4E0B\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5
`,lang:"shell"})]),l("li",null,[P,o(e,{code:`global. # \u540C\u4E0A
`,lang:"shell"})]),l("li",null,[R,o(e,{code:`parseFloat(123.333)
#  123.333
_
#  123.333
`,lang:"shell"})]),l("li",null,[b,L,o(e,{code:`[1, 2, 3].forEach(num => { # \u6309\u4E0Benter
... console.log(num) # \u6B63\u5728\u8F93\u5165\u591A\u884C\u8BED\u53E5
.break # \u6B64\u547D\u4EE4\u76F8\u5F53\u4E8E\u6309\u4E0Bctrl + c
`,lang:"shell"}),C])])]),_:1})}}};export{I as default};
