import{r as c,o as a,c as l,f as i,g as t,aa as o}from"./vendor-90615676.js";const d=o("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),r=o("p",null,"const\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\u3002\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8",-1),_=o("p",null,"const\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u5F97\u6539\u53D8\u503C\uFF0C\u8FD9\u610F\u5473\u7740\uFF0Cconst\u4E00\u65E6\u58F0\u660E\u53D8\u91CF\uFF0C\u5C31\u5FC5\u987B\u7ACB\u5373\u521D\u59CB\u5316\uFF0C\u4E0D\u80FD\u7559\u5230\u4EE5\u540E\u8D4B\u503C\u3002",-1),p=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"\u5176\u4ED6\u4F7F\u7528\u65B9\u6CD5\u4E0Elet\u4E00\u81F4")],-1),h=o("h2",{id:"2-\u672C\u8D28",class:"doc-heading"},"\u672C\u8D28",-1),g=o("ol",null,[o("li",null,"const\u5B9E\u9645\u4E0A\u4FDD\u8BC1\u7684\uFF0C\u5E76\u4E0D\u662F\u53D8\u91CF\u7684\u503C\u4E0D\u5F97\u6539\u52A8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u4E0D\u5F97\u6539\u52A8\u3002"),o("li",null,"\u5BF9\u4E8E\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF08\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\uFF09\uFF0C\u503C\u5C31\u4FDD\u5B58\u5728\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7B49\u540C\u4E8E\u5E38\u91CF\u3002"),o("li",null,"\u4F46\u5BF9\u4E8E\u590D\u5408\u7C7B\u578B\u7684\u6570\u636E\uFF08\u4E3B\u8981\u662F\u5BF9\u8C61\u548C\u6570\u7EC4\uFF09\uFF0C\u81F3\u4E8E\u5B83\u6307\u5411\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E0D\u662F\u53EF\u53D8\u7684\uFF0C\u5C31\u5B8C\u5168\u4E0D\u80FD\u63A7\u5236\u4E86\u3002")],-1),x={__name:"const\u547D\u4EE4",setup(u){const s=[{id:"doc-title",title:"const\u547D\u4EE4"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-\u672C\u8D28",title:"2. \u672C\u8D28"}];return(f,m)=>{const n=c("doc-code"),e=c("doc-page");return a(),l(e,{desc:"",toc:s},{default:i(()=>[d,r,t(n,{code:`const PI = 3.1415
PI // 3.1415
PI = 3 // Uncaught TypeError: Assignment to constant variable.
`,lang:"javascript"}),_,t(n,{code:`const foo
// SyntaxError: Missing initializer in const declaration
`,lang:"javascript"}),p,h,g,t(n,{code:`const foo = {}
// \u4E3A foo \u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6210\u529F
foo.prop = 123
foo.prop // 123
// \u5C06 foo \u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u9519
foo = {} // Assignment to constant variable.

const a = []
a.push('Hello') // \u53EF\u6267\u884C
a.length = 0    // \u53EF\u6267\u884C
a = ['Dave']    // Assignment to constant variable.
`,lang:"javascript"})]),_:1})}}};export{x as default};
