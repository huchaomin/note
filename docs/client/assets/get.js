import{r,o as s,c as b,f as l,g as o,ac as e,v as n}from"./vendor.js";const p=e("h2",{id:"1-object-getprototypeof-",class:"doc-heading"},"Object.getPrototypeOf()",-1),i=e("p",null,"\u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u7684\u539F\u578B",-1),g=e("h2",{id:"2-object-getownpropertydescriptor-",class:"doc-heading"},"Object.getOwnPropertyDescriptor()",-1),d=e("p",null,[n("\u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u4E0A\u4E00\u4E2A"),e("strong",null,"\u81EA\u6709\u5C5E\u6027"),n("\u5BF9\u5E94\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u3002")],-1),y=e("h2",{id:"3-object-getownpropertydescriptors-",class:"doc-heading"},"Object.getOwnPropertyDescriptors()",-1),j=e("p",null,"\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u3002",-1),u=e("h2",{id:"4-object-getownpropertynames-",class:"doc-heading"},"Object.getOwnPropertyNames()",-1),O=e("p",null,"\u8FD4\u56DE\u4E00\u4E2A\u7531\u6307\u5B9A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u5C5E\u6027\u540D\uFF08\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4F46\u4E0D\u5305\u62ECSymbol\u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF09\u7EC4\u6210\u7684\u6570\u7EC4",-1),_=e("h2",{id:"5-object-getownpropertysymbols-",class:"doc-heading"},"Object.getOwnPropertySymbols()",-1),m=e("p",null,"\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709 Symbol \u5C5E\u6027\u7684\u6570\u7EC4",-1),P={__name:"get",setup(h){const c=[{id:"doc-title",title:"Object get \u64CD\u4F5C"},{id:"1-object-getprototypeof-",title:"1. Object.getPrototypeOf()"},{id:"2-object-getownpropertydescriptor-",title:"2. Object.getOwnPropertyDescriptor()"},{id:"3-object-getownpropertydescriptors-",title:"3. Object.getOwnPropertyDescriptors()"},{id:"4-object-getownpropertynames-",title:"4. Object.getOwnPropertyNames()"},{id:"5-object-getownpropertysymbols-",title:"5. Object.getOwnPropertySymbols()"}];return(w,f)=>{const t=r("doc-code"),a=r("doc-page");return s(),b(a,{desc:"",toc:c},{default:l(()=>[p,i,o(t,{code:`var proto = {}
var obj = Object.create(proto)
Object.getPrototypeOf(obj) === proto // true

var reg = /a/
Object.getPrototypeOf(reg) === RegExp.prototype // true

Object.getPrototypeOf( Object.prototype ) === null // true
Object.getPrototypeOf( Object ) === Function.prototype // true
`,lang:"javascript"}),g,d,o(t,{code:`var o = { bar: 42 }
var d = Object.getOwnPropertyDescriptor(o, "bar")
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }
`,lang:"javascript"}),y,j,o(t,{code:`var o = { bar: 42 ,baz:43}
// {
// bar \uFF1A {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// },
// baz \uFF1A {
//   configurable: true,
//   enumerable: true,
//   value: 43,
//   writable: true
// }
// }
`,lang:"javascript"}),u,O,o(t,{code:`var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo },
    enumerable: false
  }
})
my_obj.foo = 1
Object.getOwnPropertyNames(my_obj)
//["getFoo", "foo"]
`,lang:"javascript"}),_,m,o(t,{code:`var obj = {}
var a = Symbol("a")
var b = Symbol.for("b")

obj[a] = "localSymbol"
obj[b] = "globalSymbol"

var objectSymbols = Object.getOwnPropertySymbols(obj)

console.log(objectSymbols.length) // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
`,lang:"javascript"})]),_:1})}}};export{P as default};
