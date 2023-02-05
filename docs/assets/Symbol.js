import{r as e,o as m,c,f as a,g as n,a8 as o,v as t}from"./vendor.js";const b=o("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),r=o("p",null,"\u5B83\u662F JavaScript \u8BED\u8A00\u7684\u7B2C\u4E03\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u8868\u793A\u72EC\u4E00\u65E0\u4E8C",-1),i=o("p",null,"\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5BF9 Symbol \u5B9E\u4F8B\u7684\u63CF\u8FF0\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5728\u63A7\u5236\u53F0\u663E\u793A\uFF0C\u6216\u8005\u8F6C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u6BD4\u8F83\u5BB9\u6613\u533A\u5206\u3002",-1),d=o("p",null,"\u56E0\u4E3A\u72EC\u4E00\u65E0\u4E8C\uFF0C\u6240\u4EE5\u4E0D\u76F8\u7B49",-1),S=o("p",null,"\u4E0D\u80FD\u4E0E\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u8FD0\u7B97",-1),p=o("p",null,"\u53EF\u4EE5\u663E\u5F0F\u8F6C\u4E3A\u5B57\u7B26\u4E32",-1),_=o("p",null,"\u4E5F\u53EF\u4EE5\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u4F46\u662F\u4E0D\u80FD\u8F6C\u4E3A\u6570\u503C",-1),f=o("h2",{id:"2-symbol-prototype-description",class:"doc-heading"},"Symbol.prototype.description",-1),g=o("p",null,"\u8FD4\u56DESymbol\u503C\u5F97\u63CF\u8FF0",-1),h=o("h2",{id:"3-\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684-symbol",class:"doc-heading"},"\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684 Symbol",-1),u=o("p",null,"Symbol \u503C\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u65F6\uFF0C\u4E0D\u80FD\u7528\u70B9\u8FD0\u7B97\u7B26,\u56E0\u4E3A\u70B9\u8FD0\u7B97\u7B26\u540E\u9762\u603B\u662F\u5B57\u7B26\u4E32",-1),j=o("p",null,"\u540C\u7406\uFF0C\u5728\u5BF9\u8C61\u7684\u5185\u90E8\uFF0C\u4F7F\u7528 Symbol \u503C\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0CSymbol \u503C\u5FC5\u987B\u653E\u5728\u65B9\u62EC\u53F7\u4E4B\u4E2D\u3002",-1),v=o("h2",{id:"4-object-getownpropertysymbols-",class:"doc-heading"},"Object.getOwnPropertySymbols()",-1),k=o("p",null,[t("\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u5F53\u524D\u5BF9\u8C61\u7684\u6240\u6709\u7528\u4F5C\u5C5E\u6027\u540D\u7684 Symbol \u503C\u3002"),o("br"),t(" Symbol \u4F5C\u4E3A\u5C5E\u6027\u540D\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u4F1A\u51FA\u73B0\u5728for\u2026in\u3001for\u2026of\u5FAA\u73AF\u4E2D\uFF0C\u4E5F\u4E0D\u4F1A\u88ABObject.keys()\u3001Object.getOwnPropertyNames()\u3001JSON.stringify()\u8FD4\u56DE\u3002\u4F46\u662F\uFF0C\u5B83\u4E5F\u4E0D\u662F\u79C1\u6709\u5C5E\u6027")],-1),w=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"\u7531\u4E8E\u4EE5 Symbol \u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF0C\u4E0D\u4F1A\u88AB\u5E38\u89C4\u65B9\u6CD5\u904D\u5386\u5F97\u5230\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u4E3A\u5BF9\u8C61\u5B9A\u4E49\u4E00\u4E9B\u975E\u79C1\u6709\u7684\u3001\u4F46\u53C8\u5E0C\u671B\u53EA\u7528\u4E8E\u5185\u90E8\u7684\u65B9\u6CD5\u3002")],-1),O=o("h2",{id:"5-symbol-for-",class:"doc-heading"},"Symbol.for()",-1),H=o("p",null,[t("Symbol.for()\u4E0ESymbol()\u8FD9\u4E24\u79CD\u5199\u6CD5\uFF0C\u90FD\u4F1A\u751F\u6210\u65B0\u7684 Symbol"),o("br"),t(" \u5B83\u4EEC\u7684\u533A\u522B\u662F\uFF0C\u524D\u8005\u4F1A\u88AB\u767B\u8BB0\u5728\u5168\u5C40\u73AF\u5883\u4E2D\u4F9B\u641C\u7D22\uFF0C\u540E\u8005\u4E0D\u4F1A\u3002"),o("br"),t(" Symbol.for()\u4E0D\u4F1A\u6BCF\u6B21\u8C03\u7528\u5C31\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Symbol \u7C7B\u578B\u7684\u503C\uFF0C\u800C\u662F\u4F1A\u5148\u68C0\u67E5\u7ED9\u5B9A\u7684key\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u624D\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u503C\u3002")],-1),N=o("p",null,"\u6BD4\u5982\uFF0C\u5982\u679C\u4F60\u8C03\u7528Symbol.for(\u201Ccat\u201D)30 \u6B21\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u8FD4\u56DE\u540C\u4E00\u4E2A Symbol \u503C\uFF0C\u4F46\u662F\u8C03\u7528Symbol(\u201Ccat\u201D)30 \u6B21\uFF0C\u4F1A\u8FD4\u56DE 30 \u4E2A\u4E0D\u540C\u7684 Symbol \u503C\u3002",-1),P=o("h2",{id:"6-symbol-keyfor-",class:"doc-heading"},"Symbol.keyFor()",-1),M=o("p",null,"\u8FD4\u56DE\u4E00\u4E2A\u5DF2\u767B\u8BB0\u7684 Symbol \u7C7B\u578B\u503C\u7684key",-1),T=o("p",null,"Symbol.for\u4E3A Symbol \u503C\u767B\u8BB0\u7684\u540D\u5B57\uFF0C\u662F\u5168\u5C40\u73AF\u5883\u7684\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684 iframe \u6216 service worker \u4E2D\u53D6\u5230\u540C\u4E00\u4E2A\u503C\u3002",-1),F={__name:"Symbol",setup(x){const s=[{id:"doc-title",title:"Symbol"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-symbol-prototype-description",title:"2. Symbol.prototype.description"},{id:"3-\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684-symbol",title:"3. \u4F5C\u4E3A\u5C5E\u6027\u540D\u7684 Symbol"},{id:"4-object-getownpropertysymbols-",title:"4. Object.getOwnPropertySymbols()"},{id:"5-symbol-for-",title:"5. Symbol.for()"},{id:"6-symbol-keyfor-",title:"6. Symbol.keyFor()"}];return(B,C)=>{const l=e("doc-code"),y=e("doc-page");return m(),c(y,{desc:"",toc:s},{default:a(()=>[b,r,n(l,{code:`let s = Symbol()
typeof s
// "symbol"
`,lang:"javascript"}),i,n(l,{code:`let s1 = Symbol('foo')
let s2 = Symbol('bar')
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
`,lang:"javascript"}),d,n(l,{code:`// \u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 // false

// \u6709\u53C2\u6570\u7684\u60C5\u51B5
let s1 = Symbol('foo')
let s2 = Symbol('foo')
s1 === s2 // false
`,lang:"javascript"}),S,n(l,{code:`let sym = Symbol('My symbol')
"your symbol is " + sym
//VM514:1 Uncaught TypeError: Cannot convert a Symbol value to a string
`,lang:"javascript"}),p,n(l,{code:`let sym = Symbol('My symbol')
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
`,lang:"javascript"}),_,n(l,{code:`let sym = Symbol()
Boolean(sym) // true
!sym  // false
if (sym) {
  // ...
}
Number(sym) // TypeError
sym + 2 // TypeError
`,lang:"javascript"}),f,g,n(l,{code:`const sym = Symbol('foo')
sym.description // "foo"
`,lang:"javascript"}),n(l,{code:`//\u5F53\u7136\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u53EF\u4EE5
const sym = Symbol('foo')
sym.toString() // "Symbol(foo)"
`,lang:"javascript"}),h,n(l,{code:`let mySymbol = Symbol()
// \u7B2C\u4E00\u79CD\u5199\u6CD5
let a = {}
a[mySymbol] = 'Hello!'
// \u7B2C\u4E8C\u79CD\u5199\u6CD5
let a = {
  [mySymbol]: 'Hello!'
}
// \u7B2C\u4E09\u79CD\u5199\u6CD5
let a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello!' })
// \u4EE5\u4E0A\u5199\u6CD5\u90FD\u5F97\u5230\u540C\u6837\u7ED3\u679C
a[mySymbol] // "Hello!"
`,lang:"javascript"}),u,n(l,{code:`const mySymbol = Symbol()
const a = {}
a.mySymbol = 'Hello!'
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
`,lang:"javascript"}),j,n(l,{code:`let obj = {
  [s](arg) { ... }
}
`,lang:"javascript"}),v,k,n(l,{code:`const obj = {}
let a = Symbol('a')
let b = Symbol('b')
obj[a] = 'Hello'
obj[b] = 'World'
const objectSymbols = Object.getOwnPropertySymbols(obj)
objectSymbols
// [Symbol(a), Symbol(b)]
`,lang:"javascript"}),w,O,H,N,n(l,{code:`Symbol.for("bar") === Symbol.for("bar")
// true
Symbol("bar") === Symbol("bar")
// false
`,lang:"javascript"}),P,M,n(l,{code:`let s1 = Symbol.for("foo")
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo")
Symbol.keyFor(s2) // undefined
`,lang:"javascript"}),T,n(l,{code:`iframe = document.createElement('iframe')
iframe.src = String(window.location)
document.body.appendChild(iframe)
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
`,lang:"javascript"})]),_:1})}}};export{F as default};
