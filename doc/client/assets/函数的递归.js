import{r as t,o as c,c as s,f as u,g as a,aa as n}from"./vendor.js";const i=n("h2",{id:"1-\u524D\u8A00",class:"doc-heading"},"\u524D\u8A00",-1),r=n("p",null,"\u62A5\u9519\u7684\u539F\u56E0\u5728\u4E8E\u5728\u51FD\u6570\u4F53\u5185\u90E8\u4F1A\u8C03\u7528a\u51FD\u6570\uFF0C\u800C\u53D8\u91CFa\u5BF9\u51FD\u6570\u7684\u5F15\u7528\u5DF2\u7ECF\u88AB\u89E3\u9664\u6240\u4EE5\u62A5\u9519",-1),d=n("h2",{id:"2-arguments-callee",class:"doc-heading"},"arguments.callee",-1),m=n("ol",null,[n("li",null,"\u59CB\u7EC8\u6307\u5411\u5F53\u524D\u7684\u51FD\u6570"),n("li",null,"\u591A\u7528\u4E8E\u9012\u5F52\u8C03\u7528\uFF0C\u9632\u6B62\u51FD\u6570\u6267\u884C\u4E0E\u51FD\u6570\u540D\u7D27\u7D27\u8026\u5408\u7684\u73B0\u8C61"),n("li",null,"\u5BF9\u4E8E\u6CA1\u6709\u51FD\u6570\u540D\u7684\u533F\u540D\u51FD\u6570\u4E5F\u975E\u5E38\u8D77\u4F5C\u7528"),n("li",null,[n("strong",null,"\u201C\u4E25\u683C\u6A21\u5F0F\u201D\u4E0B\u4E0D\u80FD\u4F7F\u7528arguments.callee")])],-1),g=n("h2",{id:"3-\u4E25\u683C\u6A21\u5F0F\u4E0B\u51FD\u6570\u7684\u9012\u5F52",class:"doc-heading"},"\u4E25\u683C\u6A21\u5F0F\u4E0B\u51FD\u6570\u7684\u9012\u5F52",-1),_=n("h2",{id:"4-\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u533F\u540D\u51FD\u6570\u7684\u9012\u5F52",class:"doc-heading"},"\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u533F\u540D\u51FD\u6570\u7684\u9012\u5F52",-1),p=n("p",null,"\u7ACB\u5373\u6267\u884C\u51FD\u6570",-1),j={__name:"\u51FD\u6570\u7684\u9012\u5F52",setup(f){const o=[{id:"doc-title",title:"\u51FD\u6570\u9012\u5F52\u7684\u51E0\u79CD\u65B9\u5F0F"},{id:"1-\u524D\u8A00",title:"1. \u524D\u8A00"},{id:"2-arguments-callee",title:"2. arguments.callee"},{id:"3-\u4E25\u683C\u6A21\u5F0F\u4E0B\u51FD\u6570\u7684\u9012\u5F52",title:"3. \u4E25\u683C\u6A21\u5F0F\u4E0B\u51FD\u6570\u7684\u9012\u5F52"},{id:"4-\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u533F\u540D\u51FD\u6570\u7684\u9012\u5F52",title:"4. \u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u533F\u540D\u51FD\u6570\u7684\u9012\u5F52"}];return(h,v)=>{const e=t("doc-code"),l=t("doc-page");return c(),s(l,{desc:"",toc:o},{default:u(()=>[i,a(e,{code:`function a (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * a(num - 1)
  }
}
`,lang:"javascript"}),a(e,{code:`var b = a
console.log(b(2)) // 2
console.log(typeof(a)) // function
`,lang:"javascript"}),a(e,{code:`var b = a
a = null
console.log(b(2)) // a is not a function
`,lang:"javascript"}),r,d,m,a(e,{code:`function a (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}
`,lang:"javascript"}),a(e,{code:`var b = a
a = null
console.log(b(2)) // 2
`,lang:"javascript"}),g,a(e,{code:`var b = function a (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * a(num - 1)
  }
}
// a is not defined(\u6B64\u65F6a\u5C5E\u4E8E\u5C40\u90E8\u53D8\u91CF)
// typeof(b) (function)
console.log(b(2)) // 2
`,lang:"javascript"}),_,a(e,{code:`var b = function (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}
b(2) // 2
`,lang:"javascript"}),p,a(e,{code:`(function (num) {    //\u5FC5\u987B\u52A0\u4E0A\u8FD0\u7B97\u7B26\uFF0C\u8BA9\u5F15\u64CE\u77E5\u9053\u4E0D\u662F\u51FD\u6570\u58F0\u660E\uFF0C\u800C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
})(2)
`,lang:"javascript"})]),_:1})}}};export{j as default};
