import{r as c,o as r,c as a,f as t,a9 as s,g as o,v as e}from"./vendor.js";const f=s("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),_=s("p",null,"\u652F\u6301\u4EE5\u6807\u51C6POSIX\u51FD\u6570\u4E3A\u6A21\u578B\u7684\u65B9\u5F0F\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u8FDB\u884C\u4EA4\u4E92",-1),h=s("h2",{id:"2-\u6240\u6709fs\u64CD\u4F5C\u90FD\u53EF\u4EE5\u4F7F\u7528-commonjs-\u8BED\u6CD5\u548C-es6-\u6A21\u5757\u8FDB\u884C\u8BBF\u95EE",class:"doc-heading"},"\u6240\u6709fs\u64CD\u4F5C\u90FD\u53EF\u4EE5\u4F7F\u7528 CommonJS \u8BED\u6CD5\u548C ES6 \u6A21\u5757\u8FDB\u884C\u8BBF\u95EE",-1),p=s("h2",{id:"3-\u6240\u6709fs\u64CD\u4F5C\u90FD\u5177\u6709\u540C\u6B65\uFF0C\u56DE\u8C03\u548C\u57FA\u4E8Epromise\u7684\u5F62\u5F0F",class:"doc-heading"},"\u6240\u6709fs\u64CD\u4F5C\u90FD\u5177\u6709\u540C\u6B65\uFF0C\u56DE\u8C03\u548C\u57FA\u4E8Epromise\u7684\u5F62\u5F0F",-1),u=s("p",null,"\u540C\u6B65",-1),m=s("p",null,"\u5F02\u6B65",-1),g=s("p",null,"promise",-1),j=s("div",{class:"doc-note doc-note--warning"},[s("p",{class:"doc-note__title"},"WARNING"),s("p",null,[e("Promise API \u548C \u56DE\u8C03\u7684 API \u4F7F\u7528\u5E95\u5C42\u7684 Node.js \u7EBF\u7A0B\u6C60\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u4E4B\u5916\u6267\u884C\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u3002\u8FD9\u4E9B\u64CD\u4F5C\u4E0D\u662F\u540C\u6B65\u7684\u4E5F\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002 \u5BF9\u540C\u4E00\u6587\u4EF6\u6267\u884C\u591A\u4E2A\u5E76\u53D1\u4FEE\u6539\u65F6\u5FC5\u987B\u5C0F\u5FC3\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u635F\u574F\u6570\u636E\u3002"),s("br"),e(" \u540C\u6B65\u7684 API \u540C\u6B65\u5730\u6267\u884C\u6240\u6709\u64CD\u4F5C\uFF0C\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u76F4\u5230\u64CD\u4F5C\u5B8C\u6210\u6216\u5931\u8D25\u3002")])],-1),k=s("h2",{id:"4-\u6587\u4EF6\u8DEF\u5F84",class:"doc-heading"},"\u6587\u4EF6\u8DEF\u5F84",-1),I=s("p",null,[e("\u5927\u591A\u6570 fs \u64CD\u4F5C\u63A5\u53D7\u53EF\u4EE5\u4EE5"),s("code",{class:"doc-token"},"\u5B57\u7B26\u4E32"),e("\u3001"),s("code",{class:"doc-token"},"<Buffer>"),e("\u6216\u4F7F\u7528"),s("code",{class:"doc-token"},"file: \u534F\u8BAE\u7684 <URL>"),e("\u5BF9\u8C61\u7684\u5F62\u5F0F\u6307\u5B9A\u7684\u6587\u4EF6\u8DEF\u5F84")],-1),v=s("h2",{id:"5-\u6587\u4EF6\u63CF\u8FF0\u7B26",class:"doc-heading"},"\u6587\u4EF6\u63CF\u8FF0\u7B26",-1),w=s("h3",{id:"6-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),y=s("p",null,[e("\u5728POSIX\u7CFB\u7EDF\u4E0A\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u8FDB\u7A0B\uFF0C\u5185\u6838\u90FD\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\u548C\u8D44\u6E90\u7684\u8868\u3002"),s("br"),e(" \u6BCF\u4E2A\u6253\u5F00\u7684\u6587\u4EF6\u90FD\u5206\u914D\u6709\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u5B57\u6807\u8BC6\u7B26\uFF0C\u79F0\u4E3A\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002")],-1),N=s("p",null,[e("\u5728\u7CFB\u7EDF\u7EA7\u522B\uFF0C\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u90FD\u4F7F\u7528\u8FD9\u4E9B\u6587\u4EF6\u63CF\u8FF0\u7B26\u6765\u6807\u8BC6\u548C\u8DDF\u8E2A\u6BCF\u4E2A\u7279\u5B9A\u6587\u4EF6\u3002"),s("br"),e(" Windows\u7CFB\u7EDF\u4F7F\u7528\u4E0D\u540C\u4F46\u6982\u5FF5\u4E0A\u7C7B\u4F3C\u7684\u673A\u5236\u6765\u8DDF\u8E2A\u8D44\u6E90\u3002")],-1),P=s("p",null,"\u4E3A\u4E86\u7B80\u5316\u7528\u6237\u64CD\u4F5C\uFF0CNode.js\u63D0\u53D6\u4E86\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u7279\u5B9A\u5DEE\u5F02\uFF0C\u5E76\u4E3A\u6240\u6709\u6253\u5F00\u7684\u6587\u4EF6\u5206\u914D\u4E86\u6570\u5B57\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002",-1),A=s("h3",{id:"7-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),S=s("ul",null,[s("li",null,[e("\u57FA\u4E8E\u56DE\u8C03\u7684"),s("code",{class:"doc-token"},"fs.open()"),e("\u548C\u540C\u6B65"),s("code",{class:"doc-token"},"fs.openSync()"),e("\u65B9\u6CD5\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u5E76\u5206\u914D\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002 \u5206\u914D\u540E\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u53EF\u7528\u4E8E\u4ECE\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u3001\u5411\u6587\u4EF6\u5199\u5165\u6570\u636E\u6216\u8BF7\u6C42\u6709\u5173\u6587\u4EF6\u7684\u4FE1\u606F\u3002")])],-1),W=s("ul",null,[s("li",null,[e("\u57FA\u4E8E promise \u7684 API \u4F7F\u7528"),s("code",{class:"doc-token"},"<FileHandle>"),e("\u5BF9\u8C61\u4EE3\u66FF\u6570\u5B57\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002 \u8FD9\u4E9B\u5BF9\u8C61\u7531\u7CFB\u7EDF\u66F4\u597D\u5730\u7BA1\u7406\uFF0C\u4EE5\u786E\u4FDD\u8D44\u6E90\u4E0D\u6CC4\u6F0F\u3002")]),s("li",null,"\u8BFB\u6570\u5C06\u4ECE\u5F53\u524D\u4F4D\u7F6E\u5F00\u59CB\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6587\u4EF6\u5DF2\u7ECF\u6709\u5185\u5BB9 \u2018Hello World\u2019 \u5E76\u4E14\u4F7F\u7528\u6587\u4EF6\u63CF\u8FF0\u7B26\u8BFB\u53D6\u4E86\u516D\u4E2A\u5B57\u8282\uFF0C\u5219\u4F7F\u7528\u76F8\u540C\u6587\u4EF6\u63CF\u8FF0\u7B26\u8C03\u7528 fs.readFile() \u5C06\u8FD4\u56DE \u2018World\u2019 \u800C\u4E0D\u662F \u2018Hello World\u2019\u3002")],-1),b=s("div",{class:"doc-note doc-note--warning"},[s("p",{class:"doc-note__title"},"WARNING"),s("p",null,"\u64CD\u4F5C\u7CFB\u7EDF\u9650\u5236\u5728\u4EFB\u4F55\u7ED9\u5B9A\u65F6\u95F4\u53EF\u80FD\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6570\u91CF\uFF0C\u56E0\u6B64\u5728\u64CD\u4F5C\u5B8C\u6210\u65F6\u5173\u95ED\u63CF\u8FF0\u7B26\u81F3\u5173\u91CD\u8981\u3002 \u5426\u5219\u5C06\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\uFF0C\u6700\u7EC8\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u5D29\u6E83\u3002")],-1),q=s("h2",{id:"8-\u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7",class:"doc-heading"},"\u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7",-1),R={__name:"fs\u6A21\u5757",setup(x){const d=[{id:"doc-title",title:"nodejs fs \u6A21\u5757"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-\u6240\u6709fs\u64CD\u4F5C\u90FD\u53EF\u4EE5\u4F7F\u7528-commonjs-\u8BED\u6CD5\u548C-es6-\u6A21\u5757\u8FDB\u884C\u8BBF\u95EE",title:"2. \u6240\u6709fs\u64CD\u4F5C\u90FD\u53EF\u4EE5\u4F7F\u7528 CommonJS \u8BED\u6CD5\u548C ES6 \u6A21\u5757\u8FDB\u884C\u8BBF\u95EE"},{id:"3-\u6240\u6709fs\u64CD\u4F5C\u90FD\u5177\u6709\u540C\u6B65\uFF0C\u56DE\u8C03\u548C\u57FA\u4E8Epromise\u7684\u5F62\u5F0F",title:"3. \u6240\u6709fs\u64CD\u4F5C\u90FD\u5177\u6709\u540C\u6B65\uFF0C\u56DE\u8C03\u548C\u57FA\u4E8Epromise\u7684\u5F62\u5F0F"},{id:"4-\u6587\u4EF6\u8DEF\u5F84",title:"4. \u6587\u4EF6\u8DEF\u5F84"},{id:"5-\u6587\u4EF6\u63CF\u8FF0\u7B26",title:"5. \u6587\u4EF6\u63CF\u8FF0\u7B26"},{id:"6-\u5B9A\u4E49",title:"5.1. \u5B9A\u4E49",sub:!0},{id:"7-\u4F7F\u7528",title:"5.2. \u4F7F\u7528",sub:!0},{id:"8-\u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7",title:"6. \u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7"}];return(B,C)=>{const l=c("doc-link"),n=c("doc-code"),i=c("doc-page");return r(),a(i,{desc:"",toc:d},{default:t(()=>[s("p",null,[o(l,{to:"http://nodejs.cn/api/fs.html#file-system"},{default:t(()=>[e("\u5B98\u65B9\u6587\u6863")]),_:1})]),f,_,h,o(n,{code:`// \u8981\u4F7F\u7528\u57FA\u4E8E promise \u7684 API
import * as fs from 'fs/promises'
const fs = require('fs/promises')

// \u8981\u4F7F\u7528\u56DE\u8C03\u548C\u540C\u6B65\u7684 API
import * as fs from 'fs'
const fs = require('fs')
`,lang:"javascript"}),p,u,o(n,{code:`const fs = require('fs')
try {
  fs.unlinkSync('/tmp/hello')
  console.log('successfully deleted /tmp/hello')
} catch (err) {
  // handle the error
}
`,lang:"javascript"}),m,o(n,{code:`//  \u7B2C\u4E00\u4E2A\u53C2\u6570\u59CB\u7EC8\u4E3A\u5F02\u5E38\u4FDD\u7559\u3002\u5982\u679C\u64CD\u4F5C\u6210\u529F\u5B8C\u6210\uFF0C\u5219\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3Anull\u6216undefined
const fs = require('fs')
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err
  console.log('successfully deleted /tmp/hello')
})
`,lang:"javascript"}),g,o(n,{code:`const fs = require('fs/promises')
(async function(path){
  try {
    await fs.unlink(path)
  } catch (err) {
    // handle the error
  }
})('/tmp/hello')
`,lang:"javascript"}),j,k,I,s("p",null,[o(l,{to:"http://nodejs.cn/api/fs.html#file-paths"},{default:t(()=>[e("\u53C2\u8003\u5B98\u65B9\u6587\u6863")]),_:1})]),v,w,y,N,P,A,S,o(n,{code:`fs.open('/open/some/file.txt', 'r', (err, fd) => {
  // 'r' \u4E3A\u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7
  // fd \u662F\u6587\u4EF6\u63CF\u8FF0\u7B26
  if (err) throw err
  fs.fstat(fd, (err, stat) => {
    if (err) throw err
    // use stat
    fs.close(fd, (err) => {
      if (err) throw err
    })
  })
})
`,lang:"javascript"}),W,b,q,s("p",null,[o(l,{to:"http://nodejs.cn/api/fs.html#file-system-flags"},{default:t(()=>[e("\u5B98\u65B9\u6587\u6863")]),_:1})])]),_:1})}}};export{R as default};
