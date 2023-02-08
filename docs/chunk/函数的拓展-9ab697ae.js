import{r as t,o as a,c as i,f as d,g as e,a9 as n}from"./vendor-585b19a3.js";const s=n("h2",{id:"1-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",class:"doc-heading"},"\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",-1),r=n("p",null,"ES6\u4E4B\u524D",-1),f=n("p",null,"ES6",-1),u=n("p",null,"\u53C2\u6570\u53D8\u91CF\u662F\u9ED8\u8BA4\u58F0\u660E\u7684\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528let\u6216const\u518D\u6B21\u58F0\u660E\u3002",-1),g=n("p",null,"\u4F7F\u7528\u53C2\u6570\u9ED8\u8BA4\u503C\u65F6\uFF0C\u51FD\u6570\u4E0D\u80FD\u6709\u540C\u540D\u53C2\u6570\u3002",-1),_=n("p",null,"\u60F0\u6027\u6C42\u503C",-1),h=n("p",null,"\u4F5C\u4E3A\u7EC3\u4E60\uFF0C\u8BF7\u95EE\u4E0B\u9762\u4E24\u79CD\u5199\u6CD5\u6709\u4EC0\u4E48\u5DEE\u522B\uFF1F",-1),m=n("h2",{id:"2-\u51FD\u6570\u7684-length-\u5C5E\u6027",class:"doc-heading"},"\u51FD\u6570\u7684 length \u5C5E\u6027",-1),p=n("p",null,"\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C\u4EE5\u540E\uFF0C\u51FD\u6570\u7684length\u5C5E\u6027\uFF0C\u5C06\u8FD4\u56DE\u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E2A\u6570\u3002",-1),x=n("h2",{id:"3-\u51FD\u6570\u7684-name-\u5C5E\u6027",class:"doc-heading"},"\u51FD\u6570\u7684 name \u5C5E\u6027",-1),j={__name:"\u51FD\u6570\u7684\u62D3\u5C55",setup(y){const l=[{id:"doc-title",title:"\u51FD\u6570\u7684\u62D3\u5C55"},{id:"1-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",title:"1. \u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C"},{id:"2-\u51FD\u6570\u7684-length-\u5C5E\u6027",title:"2. \u51FD\u6570\u7684 length \u5C5E\u6027"},{id:"3-\u51FD\u6570\u7684-name-\u5C5E\u6027",title:"3. \u51FD\u6570\u7684 name \u5C5E\u6027"}];return(b,H)=>{const o=t("doc-code"),c=t("doc-page");return a(),i(c,{desc:"",toc:l},{default:d(()=>[s,r,e(o,{code:`function log (x, y) {
  if (typeof y === 'undefined') {
    y = 'World'
  }
  console.log(x, y)
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
`,lang:"javascript"}),f,e(o,{code:`function log (x, y = 'World') {
  console.log(x, y)
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
`,lang:"javascript"}),u,e(o,{code:`function foo (x = 5) {
  let x = 1 // error
  const x = 2 // error
}
`,lang:"javascript"}),g,e(o,{code:`// \u4E0D\u62A5\u9519
function foo (x, x, y) {
  // ...
}

// \u62A5\u9519
function foo (x, x, y = 1) {     //let\u58F0\u660E\u4E86\u4E24\u6B21
  // ...
}
// SyntaxError: Duplicate parameter name not allowed in this context
`,lang:"javascript"}),_,e(o,{code:`let x = 99

function foo (p = x + 1) {
  console.log(p)
}

foo() // 100
x = 100
foo() // 101
`,lang:"javascript"}),h,e(o,{code:`// \u5199\u6CD5\u4E00
function m1 ({ x = 0, y = 0 } = {}) {
  return [x, y]      //\u8BBE\u7F6E\u4E86\u5BF9\u8C61\u89E3\u6784\u8D4B\u503C\u7684\u9ED8\u8BA4\u503C
}

// \u5199\u6CD5\u4E8C
function m2 ({ x, y } = { x: 0, y: 0 }) {
  return [x, y]      //\u6CA1\u6709\u8BBE\u7F6E\u5BF9\u8C61\u89E3\u6784\u8D4B\u503C\u7684\u9ED8\u8BA4\u503C
}
`,lang:"javascript"}),e(o,{code:`// \u51FD\u6570\u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5
m1() // [0, 0]
m2() // [0, 0]

// x \u548C y \u90FD\u6709\u503C\u7684\u60C5\u51B5
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x \u6709\u503C\uFF0Cy \u65E0\u503C\u7684\u60C5\u51B5
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x \u548C y \u90FD\u65E0\u503C\u7684\u60C5\u51B5
m1({}) // [0, 0]
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]
`,lang:"javascript"}),m,p,e(o,{code:`(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
(function(...args) {}).length // 0
(function (a = 0, b, c) {}).length // 0 ?
(function (a, b = 1, c) {}).length // 1 ?
`,lang:"javascript"}),x,e(o,{code:`var f = function () {}
// ES5
f.name // ""
// ES6
f.name // "f"

const bar = function baz() {}
// ES5
bar.name // "baz"
// ES6
bar.name // "baz"

(new Function).name // "anonymous"

//bind\u8FD4\u56DE\u7684\u51FD\u6570\uFF0Cname\u5C5E\u6027\u503C\u4F1A\u52A0\u4E0Abound\u524D\u7F00\u3002
function foo() {}
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
`,lang:"javascript"})]),_:1})}}};export{j as default};
