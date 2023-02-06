import{r as t,o as d,c as r,f as c,ac as s,g as o,v as e}from"./vendor.js";const f=s("h2",{id:"1-\u5E38\u7528\u7684\u4E00\u4E9B\u65B9\u6CD5",class:"doc-heading"},"\u5E38\u7528\u7684\u4E00\u4E9B\u65B9\u6CD5",-1),_=s("ul",null,[s("li",null,[s("code",{class:"doc-token"},"fs.access()"),e(": \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u4EE5\u53CA Node.js \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.appendFile()"),e(": \u8FFD\u52A0\u6570\u636E\u5230\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u6587\u4EF6\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.close()"),e(": \u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.copyFile()"),e(": \u62F7\u8D1D\u6587\u4EF6\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.mkdir()"),e(": \u65B0\u5EFA\u6587\u4EF6\u5939\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.open()"),e(": \u8BBE\u7F6E\u6587\u4EF6\u6A21\u5F0F?")]),s("li",null,[s("code",{class:"doc-token"},"fs.readdir()"),e(": \u8BFB\u53D6\u76EE\u5F55\u7684\u5185\u5BB9\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.readFile()"),e(": \u8BFB\u53D6\u6587\u4EF6\u7684\u5185\u5BB9")]),s("li",null,[s("code",{class:"doc-token"},"fs.realpath()"),e(": \u5C06\u76F8\u5BF9\u7684\u6587\u4EF6\u8DEF\u5F84\u6307\u9488\uFF08.\u3001\u2026\uFF09\u89E3\u6790\u4E3A\u5B8C\u6574\u7684\u8DEF\u5F84\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.rename()"),e(": \u91CD\u547D\u540D\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.rmdir()"),e(": \u5220\u9664\u6587\u4EF6\u5939\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.stat()"),e(": \u8FD4\u56DE\u6587\u4EF6\uFF08\u901A\u8FC7\u4F20\u5165\u7684\u6587\u4EF6\u540D\u6307\u5B9A\uFF09\u7684\u72B6\u6001\u3002\u76F8\u5173\u65B9\u6CD5\uFF1Afs.fstat()\u3001fs.lstat()\u3002")]),s("li",null,[s("code",{class:"doc-token"},"fs.writeFile()"),e(": \u5C06\u6570\u636E\u5199\u5165\u6587\u4EF6\u3002")])],-1),h=s("h2",{id:"2-fs-stat-path-options-callback-",class:"doc-heading"},"fs.stat(path[, options], callback)",-1),p=s("p",null,"\u5F02\u6B65\u5730\u83B7\u5F97\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F",-1),u=s("div",{class:"doc-note doc-note--warning"},[s("p",{class:"doc-note__title"},"WARNING"),s("p",null,[e("\u4E0D\u63A8\u8350\u5728\u8C03\u7528"),s("code",{class:"doc-token"},"fs.open()"),e("\u3001"),s("code",{class:"doc-token"},"fs.readFile()"),e("\u6216"),s("code",{class:"doc-token"},"fs.writeFile()"),e("\u4E4B\u524D\u4F7F\u7528"),s("code",{class:"doc-token"},"fs.stat()"),e("\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002 \u800C\u662F\uFF0C\u7528\u6237\u4EE3\u7801\u5E94\u8BE5\u76F4\u63A5\u6253\u5F00/\u8BFB\u53D6/\u5199\u5165\u6587\u4EF6\uFF0C\u5E76\u5728\u6587\u4EF6\u4E0D\u53EF\u7528\u65F6\u5904\u7406\u5F15\u53D1\u7684\u9519\u8BEF\u3002"),s("br"),e(" \u8981\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\u800C\u4E0D\u5BF9\u5176\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5EFA\u8BAE\u4F7F\u7528"),s("code",{class:"doc-token"},"fs.access()")])],-1),k=s("h2",{id:"3-others",class:"doc-heading"},"others",-1),m=s("h3",{id:"4-\u83B7\u53D6\u6587\u4EF6\u5939\u4E0B\u9762\u7B2C\u4E00\u5C42\u5B8C\u6574\u7684\u8DEF\u5F84",class:"doc-heading"},"\u83B7\u53D6\u6587\u4EF6\u5939\u4E0B\u9762\u7B2C\u4E00\u5C42\u5B8C\u6574\u7684\u8DEF\u5F84",-1),g=s("h3",{id:"5-\u5220\u9664\u6587\u4EF6\u5939",class:"doc-heading"},"\u5220\u9664\u6587\u4EF6\u5939",-1),b=s("p",null,[e("\u5B98\u65B9\u63A8\u8350\u4F7F\u7528"),s("code",{class:"doc-token"},"fs-extra"),e("\u6A21\u5757")],-1),x={__name:"fs\u6A21\u5757\u5E38\u7528\u65B9\u6CD5",setup(F){const l=[{id:"doc-title",title:"fs \u6A21\u5757\u7684\u5E38\u7528\u65B9\u6CD5"},{id:"1-\u5E38\u7528\u7684\u4E00\u4E9B\u65B9\u6CD5",title:"1. \u5E38\u7528\u7684\u4E00\u4E9B\u65B9\u6CD5"},{id:"2-fs-stat-path-options-callback-",title:"2. fs.stat(path[, options], callback)"},{id:"3-others",title:"3. others"},{id:"4-\u83B7\u53D6\u6587\u4EF6\u5939\u4E0B\u9762\u7B2C\u4E00\u5C42\u5B8C\u6574\u7684\u8DEF\u5F84",title:"3.1. \u83B7\u53D6\u6587\u4EF6\u5939\u4E0B\u9762\u7B2C\u4E00\u5C42\u5B8C\u6574\u7684\u8DEF\u5F84",sub:!0},{id:"5-\u5220\u9664\u6587\u4EF6\u5939",title:"3.2. \u5220\u9664\u6587\u4EF6\u5939",sub:!0}];return(N,v)=>{const i=t("doc-link"),n=t("doc-code"),a=t("doc-page");return d(),r(a,{desc:"",toc:l},{default:c(()=>[s("p",null,[o(i,{to:"http://nodejs.cn/api/fs.html#file-system"},{default:c(()=>[e("\u5B98\u65B9\u6587\u6863")]),_:1})]),f,_,h,p,o(n,{code:`const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  stats.isFile()
  stats.isDirectory()
  stats.isSymbolicLink()
  stats.size //1024000 //= 1MB
})
// console.log(stats)
// Stats {
//   dev: 16777220,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096,
//   ino: 14214074,
//   size: 8,
//   blocks: 8,
//   atimeMs: 1561174616618.8555,
//   mtimeMs: 1561174614584,
//   ctimeMs: 1561174614583.8145,
//   birthtimeMs: 1561174007710.7478,
//   atime: 2019-06-22T03:36:56.619Z,
//   mtime: 2019-06-22T03:36:54.584Z,
//   ctime: 2019-06-22T03:36:54.584Z,
//   birthtime: 2019-06-22T03:26:47.711Z
// }
`,lang:"javascript"}),u,k,m,o(n,{code:`const result = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})

// \u6392\u9664\u6587\u4EF6\u5939
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}
const file = result.filter(isFile)
`,lang:"javascript"}),g,b]),_:1})}}};export{x as default};
