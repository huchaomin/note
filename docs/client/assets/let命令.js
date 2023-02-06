import{r as t,o as l,c as i,f as d,g as o,ac as n,v as c}from"./vendor.js";const s=n("h2",{id:"1-\u57FA\u672C\u7528\u6CD5",class:"doc-heading"},"\u57FA\u672C\u7528\u6CD5",-1),f=n("p",null,"\u7528\u6CD5\u7C7B\u4F3C\u4E8Evar\uFF0C\u4F46\u662F\u6240\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53EA\u5728let\u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\u3002",-1),p=n("h2",{id:"2-\u4E0D\u5B58\u5728\u58F0\u660E\u63D0\u524D",class:"doc-heading"},"\u4E0D\u5B58\u5728\u58F0\u660E\u63D0\u524D",-1),_=n("p",null,"let\u548Cconst\u4F1A\u5148\u67E5\u627E\u6240\u6709\u7684\u58F0\u660E\uFF0C\u4F46\u4E0D\u63D0\u524D",-1),u=n("h2",{id:"3-\u6682\u65F6\u6027\u6B7B\u533A\uFF08temporal-dead-zone\uFF0C\u7B80\u79F0-tdz\uFF09",class:"doc-heading"},"\u6682\u65F6\u6027\u6B7B\u533A\uFF08temporal dead zone\uFF0C\u7B80\u79F0 TDZ\uFF09",-1),g=n("p",null,[c("\u53EA\u8981\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u5B58\u5728let\u547D\u4EE4\uFF0C\u5B83\u6240\u58F0\u660E\u7684\u53D8\u91CF\u5C31\u201C\u7ED1\u5B9A\u201D\uFF08binding\uFF09\u8FD9\u4E2A\u533A\u57DF\uFF0C\u4E0D\u518D\u53D7\u5916\u90E8\u7684\u5F71\u54CD\u3002"),n("br"),c(" ES6 \u660E\u786E\u89C4\u5B9A\uFF0C\u5982\u679C\u533A\u5757\u4E2D\u5B58\u5728let\u548Cconst\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u533A\u5757\u5BF9\u8FD9\u4E9B\u547D\u4EE4\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4ECE\u4E00\u5F00\u59CB\u5C31\u5F62\u6210\u4E86\u5C01\u95ED\u4F5C\u7528\u57DF\u3002\u51E1\u662F\u5728\u58F0\u660E\u4E4B\u524D\u5C31\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002")],-1),m=n("p",null,"\u6240\u4EE5typeof\u4E0D\u518D\u662F\u4E00\u4E2A\u767E\u5206\u4E4B\u767E\u5B89\u5168\u7684\u64CD\u4F5C\u3002",-1),h=n("p",null,"\u6709\u4E9B\u201C\u6B7B\u533A\u201D\u6BD4\u8F83\u9690\u853D\uFF0C\u4E0D\u592A\u5BB9\u6613\u53D1\u73B0\u3002",-1),v=n("p",null,"\u8FD9\u4E2A\u4E0D\u5C5E\u4E8E\u201C\u6B7B\u533A\u201D",-1),x=n("h2",{id:"4-\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E",class:"doc-heading"},"\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E",-1),R={__name:"let\u547D\u4EE4",setup(b){const a=[{id:"doc-title",title:"let\u547D\u4EE4"},{id:"1-\u57FA\u672C\u7528\u6CD5",title:"1. \u57FA\u672C\u7528\u6CD5"},{id:"2-\u4E0D\u5B58\u5728\u58F0\u660E\u63D0\u524D",title:"2. \u4E0D\u5B58\u5728\u58F0\u660E\u63D0\u524D"},{id:"3-\u6682\u65F6\u6027\u6B7B\u533A\uFF08temporal-dead-zone\uFF0C\u7B80\u79F0-tdz\uFF09",title:"3. \u6682\u65F6\u6027\u6B7B\u533A\uFF08temporal dead zone\uFF0C\u7B80\u79F0 TDZ\uFF09"},{id:"4-\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E",title:"4. \u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E"}];return(j,y)=>{const e=t("doc-code"),r=t("doc-page");return l(),i(r,{desc:"",toc:a},{default:d(()=>[s,f,o(e,{code:`for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }) // 0 1 2 3 4 5 6 ...
}
console.log(i) // ReferenceError: i is not defined
`,lang:"javascript"}),o(e,{code:`for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }) // 10 10 10 ...
}
console.log(i) // 10
`,lang:"javascript"}),p,_,o(e,{code:`// var \u7684\u60C5\u51B5
console.log(foo) // \u8F93\u51FAundefined
var foo = 2

// let \u7684\u60C5\u51B5
console.log(bar) // \u62A5\u9519ReferenceError
let bar = 2
`,lang:"javascript"}),u,g,o(e,{code:`var tmp = 123
if (true) {
  tmp = 'abc' // ReferenceError
  let tmp
}
`,lang:"javascript"}),o(e,{code:`if (true) {
  // TDZ\u5F00\u59CB
  tmp = 'abc' // ReferenceError
  console.log(tmp) // ReferenceError

  let tmp // TDZ\u7ED3\u675F
  console.log(tmp) // undefined

  tmp = 123
  console.log(tmp) // 123
}
`,lang:"javascript"}),m,o(e,{code:`typeof x // ReferenceError
let x

typeof abcd // undefined
`,lang:"javascript"}),h,o(e,{code:`function bar(x = y, y = 2) {
  return [x, y]
}
bar() // y ReferenceError

function bar(x = 2, y = x) {
  return [x, y]
}
bar() // [2, 2]

var x = x // \u4E0D\u62A5\u9519
let x = x // ReferenceError: x is not defined
`,lang:"javascript"}),v,o(e,{code:`function foo() {
  return a
}
let a
foo()
`,lang:"javascript"}),x,o(e,{code:`// \u62A5\u9519
function func() {
  let a = 10
  var a = 1
}

// \u62A5\u9519
function func() {
  let a = 10
  let a = 1
}

function func(arg) {
  let arg // \u62A5\u9519
}

function func(arg) {
  {
    let arg // \u4E0D\u62A5\u9519
  }
}
`,lang:"javascript"})]),_:1})}}};export{R as default};
