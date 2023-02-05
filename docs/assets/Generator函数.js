import{r as l,o as d,c as i,f as c,g as o,a9 as e}from"./vendor.js";const r=e("h2",{id:"1-\u7279\u5F81",class:"doc-heading"},"\u7279\u5F81",-1),s=e("ul",null,[e("li",null,"function\u5173\u952E\u5B57\u4E0E\u51FD\u6570\u540D\u4E4B\u95F4\u6709\u4E00\u4E2A\u661F\u53F7"),e("li",null,"\u51FD\u6570\u4F53\u5185\u90E8\u4F7F\u7528yield\u8868\u8FBE\u5F0F\uFF0C\u5B9A\u4E49\u4E0D\u540C\u7684\u5185\u90E8\u72B6\u6001")],-1),u=e("h2",{id:"2-yield-\u8868\u8FBE\u5F0F",class:"doc-heading"},"yield \u8868\u8FBE\u5F0F",-1),_=e("p",null,"\u7531\u4E8E Generator \u51FD\u6570\u8FD4\u56DE\u7684\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u53EA\u6709\u8C03\u7528next\u65B9\u6CD5\u624D\u4F1A\u904D\u5386\u4E0B\u4E00\u4E2A\u5185\u90E8\u72B6\u6001\uFF0C\u6240\u4EE5\u5176\u5B9E\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u4EE5\u6682\u505C\u6267\u884C\u7684\u51FD\u6570\u3002yield\u8868\u8FBE\u5F0F\u5C31\u662F\u6682\u505C\u6807\u5FD7\u3002",-1),x=e("ul",null,[e("li",null,"\u9047\u5230yield\u8868\u8FBE\u5F0F\uFF0C\u5C31\u6682\u505C\u6267\u884C\u540E\u9762\u7684\u64CD\u4F5C\uFF0C\u5E76\u5C06\u7D27\u8DDF\u5728yield\u540E\u9762\u7684\u90A3\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684value\u5C5E\u6027\u503C\u3002"),e("li",null,"\u4E0B\u4E00\u6B21\u8C03\u7528next\u65B9\u6CD5\u65F6\uFF0C\u518D\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u4E0B\u4E00\u4E2Ayield\u8868\u8FBE\u5F0F\u3002"),e("li",null,"\u5982\u679C\u6CA1\u6709\u518D\u9047\u5230\u65B0\u7684yield\u8868\u8FBE\u5F0F\uFF0C\u5C31\u4E00\u76F4\u8FD0\u884C\u5230\u51FD\u6570\u7ED3\u675F\uFF0C\u76F4\u5230return\u8BED\u53E5\u4E3A\u6B62\uFF0C\u5E76\u5C06return\u8BED\u53E5\u540E\u9762\u7684\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684value\u5C5E\u6027\u503C\u3002"),e("li",null,"\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709return\u8BED\u53E5\uFF0C\u5219\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684value\u5C5E\u6027\u503C\u4E3Aundefined\u3002")],-1),v=e("p",null,"\u53EF\u4EE5\u4E0D\u7528yield\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u65F6\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A\u5355\u7EAF\u7684\u6682\u7F13\u6267\u884C\u51FD\u6570",-1),f=e("h2",{id:"3-next-\u65B9\u6CD5\u7684\u53C2\u6570",class:"doc-heading"},"next \u65B9\u6CD5\u7684\u53C2\u6570",-1),g=e("p",null,"\u53EF\u4EE5\u5E26\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5C31\u4F1A\u88AB\u5F53\u4F5C\u4E0A\u4E00\u4E2Ayield\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u3002",-1),b={__name:"Generator\u51FD\u6570",setup(h){const t=[{id:"doc-title",title:"Generator\u51FD\u6570"},{id:"1-\u7279\u5F81",title:"1. \u7279\u5F81"},{id:"2-yield-\u8868\u8FBE\u5F0F",title:"2. yield \u8868\u8FBE\u5F0F"},{id:"3-next-\u65B9\u6CD5\u7684\u53C2\u6570",title:"3. next \u65B9\u6CD5\u7684\u53C2\u6570"}];return(y,p)=>{const n=l("doc-code"),a=l("doc-page");return d(),i(a,{desc:"",toc:t},{default:c(()=>[r,s,o(n,{code:`function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}
var hw = helloWorldGenerator()

hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
`,lang:"javascript"}),u,_,x,o(n,{code:`function* gen() {
  yield  123 + 456
}
// \u4E0D\u4F1A\u7ACB\u5373\u6C42\u503C\uFF0C\u53EA\u6709\u8C03\u4E86next\u65B9\u6CD5\u540E\u518D\u56DE\u6C42\u503C
`,lang:"javascript"}),v,o(n,{code:`function* f() {
  console.log('\u6267\u884C\u4E86\uFF01')
}
var generator = f()
setTimeout(function () {
  generator.next()
}, 2000)
`,lang:"javascript"}),o(n,{code:`function* gen(){
  // some code
}
var g = gen()
g[Symbol.iterator]() === g
// true
`,lang:"javascript"}),f,g,o(n,{code:`function* foo(x) {
  console.log(x)
  var y = 2 * (yield (x + 1))
  console.log(x,y)
  var z = yield (y / 3)
  console.log(x,y,z)
  return (x + y + z)
}
var a = foo(5)
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5)
b.next() // { value:6, done:false } x->5
b.next(12) // { value:8, done:false } x->5 y->24
b.next(13) // { value:42, done:true } x->5 y->24 z->13
`,lang:"javascript"})]),_:1})}}};export{b as default};
