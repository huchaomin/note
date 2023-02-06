import{r as t,o as d,c as i,f as l,g as o,a8 as n,v as a}from"./vendor-5a734afa.js";const r=n("h2",{id:"1-\u4EA4\u6362\u53D8\u91CF\u7684\u503C",class:"doc-heading"},"\u4EA4\u6362\u53D8\u91CF\u7684\u503C",-1),p=n("h2",{id:"2-\u4ECE\u51FD\u6570\u8FD4\u56DE\u591A\u4E2A\u503C",class:"doc-heading"},"\u4ECE\u51FD\u6570\u8FD4\u56DE\u591A\u4E2A\u503C",-1),u=n("h2",{id:"3-\u51FD\u6570\u53C2\u6570\u7684\u5B9A\u4E49",class:"doc-heading"},"\u51FD\u6570\u53C2\u6570\u7684\u5B9A\u4E49",-1),f=n("h2",{id:"4-\u63D0\u53D6-json-\u6570\u636E",class:"doc-heading"},"\u63D0\u53D6 JSON \u6570\u636E",-1),_=n("h2",{id:"5-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",class:"doc-heading"},"\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",-1),h=n("h2",{id:"6-\u904D\u5386-map-\u7ED3\u6784",class:"doc-heading"},"\u904D\u5386 Map \u7ED3\u6784",-1),m=n("p",null,[a("\u4EFB\u4F55\u90E8\u7F72\u4E86 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u90FD\u53EF\u4EE5\u7528for\u2026of\u5FAA\u73AF\u904D\u5386\u3002"),n("br"),a(" Map \u7ED3\u6784\u539F\u751F\u652F\u6301 Iterator \u63A5\u53E3\uFF0C\u914D\u5408\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u83B7\u53D6\u952E\u540D\u548C\u952E\u503C\u5C31\u975E\u5E38\u65B9\u4FBF\u3002")],-1),g=n("h2",{id:"7-\u8F93\u5165\u6A21\u5757\u7684\u6307\u5B9A\u65B9\u6CD5",class:"doc-heading"},"\u8F93\u5165\u6A21\u5757\u7684\u6307\u5B9A\u65B9\u6CD5",-1),b={__name:"\u53D8\u91CF\u89E3\u6784\u8D4B\u503C\u7684\u7528\u9014",setup(x){const c=[{id:"doc-title",title:"\u53D8\u91CF\u89E3\u6784\u8D4B\u503C\u7684\u7528\u9014"},{id:"1-\u4EA4\u6362\u53D8\u91CF\u7684\u503C",title:"1. \u4EA4\u6362\u53D8\u91CF\u7684\u503C"},{id:"2-\u4ECE\u51FD\u6570\u8FD4\u56DE\u591A\u4E2A\u503C",title:"2. \u4ECE\u51FD\u6570\u8FD4\u56DE\u591A\u4E2A\u503C"},{id:"3-\u51FD\u6570\u53C2\u6570\u7684\u5B9A\u4E49",title:"3. \u51FD\u6570\u53C2\u6570\u7684\u5B9A\u4E49"},{id:"4-\u63D0\u53D6-json-\u6570\u636E",title:"4. \u63D0\u53D6 JSON \u6570\u636E"},{id:"5-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C",title:"5. \u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C"},{id:"6-\u904D\u5386-map-\u7ED3\u6784",title:"6. \u904D\u5386 Map \u7ED3\u6784"},{id:"7-\u8F93\u5165\u6A21\u5757\u7684\u6307\u5B9A\u65B9\u6CD5",title:"7. \u8F93\u5165\u6A21\u5757\u7684\u6307\u5B9A\u65B9\u6CD5"}];return(j,v)=>{const e=t("doc-code"),s=t("doc-page");return d(),i(s,{desc:"",toc:c},{default:l(()=>[r,o(e,{code:`let x = 1
let y = 2
[x, y] = [y, x]
`,lang:"javascript"}),p,o(e,{code:`function example() {
  return [1, 2, 3]
}
let [a, b, c] = example()

function example() {
  return {
    foo: 1,
    bar: 2
  }
}
let { foo, bar } = example()
`,lang:"javascript"}),u,o(e,{code:`// \u53C2\u6570\u662F\u4E00\u7EC4\u6709\u6B21\u5E8F\u7684\u503C
function f([x, y, z]) { ... }
f([1, 2, 3])

// \u53C2\u6570\u662F\u4E00\u7EC4\u65E0\u6B21\u5E8F\u7684\u503C
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1})
`,lang:"javascript"}),f,o(e,{code:`let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
}
let { id, status, data: number } = jsonData
console.log(id, status, number)
// 42, "OK", [867, 5309]
`,lang:"javascript"}),_,o(e,{code:`jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
}
`,lang:"javascript"}),h,m,o(e,{code:`const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for (let [key, value] of map) {
  console.log(key + " is " + value)
}
// first is hello
// second is world

// \u83B7\u53D6\u952E\u540D
for (let [key] of map) {
  // ...
}
// \u83B7\u53D6\u952E\u503C
for (let [,value] of map) {
  // ...
}
`,lang:"javascript"}),g,o(e,{code:`const { SourceMapConsumer, SourceNode } = require("source-map")
`,lang:"javascript"})]),_:1})}}};export{b as default};
