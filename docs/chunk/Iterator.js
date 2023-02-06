import{r as l,o as i,c as s,f as d,g as o,a9 as e,v as t}from"./vendor.js";const c=e("h2",{id:"1-\u4F5C\u7528\u6709\u4E09",class:"doc-heading"},"\u4F5C\u7528\u6709\u4E09",-1),u=e("ol",null,[e("li",null,"\u4E3A\u5404\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u7EDF\u4E00\u7684\u3001\u7B80\u4FBF\u7684\u8BBF\u95EE\u63A5\u53E3"),e("li",null,"\u4F7F\u5F97\u6570\u636E\u7ED3\u6784\u7684\u6210\u5458\u80FD\u591F\u6309\u67D0\u79CD\u6B21\u5E8F\u6392\u5217"),e("li",null,"ES6 \u521B\u9020\u4E86\u4E00\u79CD\u65B0\u7684\u904D\u5386\u547D\u4EE4for\u2026of\u5FAA\u73AF\uFF0CIterator \u63A5\u53E3\u4E3B\u8981\u4F9Bfor\u2026of\u6D88\u8D39\uFF08while\u4E5F\u884C\uFF09\u3002")],-1),_=e("h2",{id:"2-\u904D\u5386\u8FC7\u7A0B",class:"doc-heading"},"\u904D\u5386\u8FC7\u7A0B",-1),f=e("ul",null,[e("li",null,"\u521B\u5EFA\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\uFF0C\u6307\u5411\u5F53\u524D\u6570\u636E\u7ED3\u6784\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FED\u4EE3\u5668\u5BF9\u8C61\u672C\u8D28\u4E0A\uFF0C\u5C31\u662F\u4E00\u4E2A\u6307\u9488\u5BF9\u8C61\u3002"),e("li",null,"\u7B2C\u4E00\u6B21\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u6307\u9488\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7B2C\u4E00\u4E2A\u6210\u5458\u3002"),e("li",null,"\u7B2C\u4E8C\u6B21\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u6307\u9488\u5C31\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7B2C\u4E8C\u4E2A\u6210\u5458\u3002"),e("li",null,"\u4E0D\u65AD\u8C03\u7528\u6307\u9488\u5BF9\u8C61\u7684next\u65B9\u6CD5\uFF0C\u76F4\u5230\u5B83\u6307\u5411\u6570\u636E\u7ED3\u6784\u7684\u7ED3\u675F\u4F4D\u7F6E\u3002")],-1),h=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"\u6BCF\u4E00\u6B21\u8C03\u7528next\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u7684\u5F53\u524D\u6210\u5458\u7684\u4FE1\u606F\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A\u5305\u542Bvalue\u548Cdone\u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\u3002\u5176\u4E2D\uFF0Cvalue\u5C5E\u6027\u662F\u5F53\u524D\u6210\u5458\u7684\u503C\uFF0Cdone\u5C5E\u6027\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u904D\u5386\u662F\u5426\u7ED3\u675F\u3002")],-1),g=e("p",null,"\u539F\u751F\u5177\u5907 Iterator \u63A5\u53E3\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B:",-1),p=e("ul",null,[e("li",null,"Array"),e("li",null,"Map"),e("li",null,"Set"),e("li",null,"String"),e("li",null,"TypedArray"),e("li",null,"\u51FD\u6570\u7684 arguments \u5BF9\u8C61"),e("li",null,"NodeList \u5BF9\u8C61")],-1),v=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[t("\u5176\u4ED6\u6570\u636E\u7ED3\u6784\uFF08\u4E3B\u8981\u662F\u5BF9\u8C61\uFF09\u7684 Iterator \u63A5\u53E3\uFF0C\u90FD\u9700\u8981\u81EA\u5DF1\u5728Symbol.iterator\u5C5E\u6027\u4E0A\u9762\u90E8\u7F72\uFF0C\u8FD9\u6837\u624D\u4F1A\u88ABfor\u2026of\u5FAA\u73AF\u904D\u5386\u3002"),e("br"),t(" \u5BF9\u8C61\uFF08Object\uFF09\u4E4B\u6240\u4EE5\u6CA1\u6709\u9ED8\u8BA4\u90E8\u7F72Iterator\u63A5\u53E3\uFF0C\u662F\u56E0\u4E3A\u5BF9\u8C61\u7684\u54EA\u4E2A\u5C5E\u6027\u5148\u904D\u5386\uFF0C\u54EA\u4E2A\u5C5E\u6027\u540E\u904D\u5386\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u624B\u52A8\u6307\u5B9A\u3002")])],-1),b=e("h2",{id:"3-\u8C03\u7528-iterator-\u63A5\u53E3\u7684\u573A\u5408",class:"doc-heading"},"\u8C03\u7528 Iterator \u63A5\u53E3\u7684\u573A\u5408",-1),x=e("h3",{id:"4-\u89E3\u6784\u8D4B\u503C",class:"doc-heading"},"\u89E3\u6784\u8D4B\u503C",-1),y=e("h3",{id:"5-\u6269\u5C55\u8FD0\u7B97\u7B26",class:"doc-heading"},"\u6269\u5C55\u8FD0\u7B97\u7B26",-1),m=e("h3",{id:"6-yield*",class:"doc-heading"},"yield*",-1),j=e("h3",{id:"7-\u5176\u4ED6\u573A\u5408",class:"doc-heading"},"\u5176\u4ED6\u573A\u5408",-1),I=e("ul",null,[e("li",null,"for\u2026of"),e("li",null,"Array.from()"),e("li",null,"Map(), Set(), WeakMap(), WeakSet()\uFF08\u6BD4\u5982new Map([[\u2018a\u2019,1],[\u2018b\u2019,2]])\uFF09"),e("li",null,"Promise.all()"),e("li",null,"Promise.race()")],-1),k=e("h2",{id:"8-\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684-return-\uFF0Cthrow-",class:"doc-heading"},"\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684 return()\uFF0Cthrow()",-1),A=e("blockquote",{class:"doc-note"},[e("p",null,"next\u65B9\u6CD5\u662F\u5FC5\u987B\u90E8\u7F72\u7684\uFF0Creturn\u65B9\u6CD5\u548Cthrow\u65B9\u6CD5\u662F\u5426\u90E8\u7F72\u662F\u53EF\u9009\u7684")],-1),S=e("p",null,[t("return\u65B9\u6CD5\u7684\u4F7F\u7528\u573A\u5408\u662F\uFF0C\u5982\u679Cfor\u2026of\u5FAA\u73AF\u63D0\u524D\u9000\u51FA\uFF08\u901A\u5E38\u662F\u56E0\u4E3A\u51FA\u9519\uFF0C\u6216\u8005\u6709break\u8BED\u53E5\uFF09\uFF0C\u5C31\u4F1A\u8C03\u7528return\u65B9\u6CD5\u3002"),e("br"),t(" \u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5728\u5B8C\u6210\u904D\u5386\u524D\uFF0C\u9700\u8981\u6E05\u7406\u6216\u91CA\u653E\u8D44\u6E90\uFF0C\u5C31\u53EF\u4EE5\u90E8\u7F72return\u65B9\u6CD5\u3002")],-1),w=e("h2",{id:"9-\u6570\u7EC4\u7684\u8FED\u4EE3\u5668",class:"doc-heading"},"\u6570\u7EC4\u7684\u8FED\u4EE3\u5668",-1),E=e("p",null,"for\u2026of\u5FAA\u73AF\u53EF\u4EE5\u4EE3\u66FF\u6570\u7EC4\u5B9E\u4F8B\u7684forEach\u65B9\u6CD5\u3002",-1),N=e("p",null,[t("for\u2026in\u5FAA\u73AF\uFF0C\u53EA\u80FD\u83B7\u5F97\u5BF9\u8C61\u7684\u952E\u540D\uFF0C\u4E0D\u80FD\u76F4\u63A5\u83B7\u53D6\u952E\u503C"),e("br"),t(" for\u2026of\u5FAA\u73AF\uFF0C\u5141\u8BB8\u904D\u5386\u83B7\u5F97\u952E\u503C")],-1),M=e("p",null,"for\u2026of\u5FAA\u73AF\u8C03\u7528\u8FED\u4EE3\u5668\u63A5\u53E3\uFF0C\u6570\u7EC4\u7684\u8FED\u4EE3\u5668\u63A5\u53E3\u53EA\u8FD4\u56DE\u5177\u6709\u6570\u5B57\u7D22\u5F15\u7684\u5C5E\u6027",-1),T=e("p",null,"\u5E76\u4E0D\u662F\u6240\u6709\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u90FD\u5177\u6709 Iterator \u63A5\u53E3",-1),C=e("h2",{id:"10-\u5BF9\u8C61\u7684\u8FED\u4EE3\u5668",class:"doc-heading"},"\u5BF9\u8C61\u7684\u8FED\u4EE3\u5668",-1),L=e("p",null,[t("\u5BF9\u4E8E\u666E\u901A\u7684\u5BF9\u8C61\uFF0Cfor\u2026of\u7ED3\u6784\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u4F1A\u62A5\u9519\uFF0C\u5FC5\u987B\u90E8\u7F72\u4E86 Iterator \u63A5\u53E3\u540E\u624D\u80FD\u4F7F\u7528\u3002"),e("br"),t(" \u4F46\u662F\uFF0C\u8FD9\u6837\u60C5\u51B5\u4E0B\uFF0Cfor\u2026in\u5FAA\u73AF\u4F9D\u7136\u53EF\u4EE5\u7528\u6765\u904D\u5386\u952E\u540D")],-1),B=e("h2",{id:"11-\u4E0E\u5176\u4ED6\u904D\u5386\u8BED\u6CD5\u7684\u6BD4\u8F83",class:"doc-heading"},"\u4E0E\u5176\u4ED6\u904D\u5386\u8BED\u6CD5\u7684\u6BD4\u8F83",-1),P=e("p",null,"for\u5FAA\u73AF",-1),V=e("p",null,"forEach",-1),W=e("p",null,"for\u2026in",-1),q=e("ul",null,[e("li",null,"\u6570\u7EC4\u7684\u952E\u540D\u662F\u6570\u5B57\uFF0C\u4F46\u662Ffor\u2026in\u5FAA\u73AF\u662F\u4EE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u952E\u540D\u201C0\u201D\u3001\u201C1\u201D\u3001\u201C2\u201D\u7B49\u7B49\u3002"),e("li",null,"for\u2026in\u5FAA\u73AF\u4E0D\u4EC5\u904D\u5386\u6570\u5B57\u952E\u540D\uFF0C\u8FD8\u4F1A\u904D\u5386\u624B\u52A8\u6DFB\u52A0\u7684\u5176\u4ED6\u952E\uFF0C\u751A\u81F3\u5305\u62EC\u539F\u578B\u94FE\u4E0A\u7684\u952E\u3002"),e("li",null,[t("\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0Cfor\u2026in\u5FAA\u73AF\u4F1A\u4EE5\u4EFB\u610F\u987A\u5E8F\u904D\u5386\u952E\u540D\u3002"),e("br"),t(" \u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 break \u8BED\u53E5\uFF0C\u8DF3\u51FAfor\u2026of\u5FAA\u73AF\u7684\u4F8B\u5B50")])],-1),D={__name:"Iterator",setup(G){const r=[{id:"doc-title",title:"Iterator"},{id:"1-\u4F5C\u7528\u6709\u4E09",title:"1. \u4F5C\u7528\u6709\u4E09"},{id:"2-\u904D\u5386\u8FC7\u7A0B",title:"2. \u904D\u5386\u8FC7\u7A0B"},{id:"3-\u8C03\u7528-iterator-\u63A5\u53E3\u7684\u573A\u5408",title:"3. \u8C03\u7528 Iterator \u63A5\u53E3\u7684\u573A\u5408"},{id:"4-\u89E3\u6784\u8D4B\u503C",title:"3.1. \u89E3\u6784\u8D4B\u503C",sub:!0},{id:"5-\u6269\u5C55\u8FD0\u7B97\u7B26",title:"3.2. \u6269\u5C55\u8FD0\u7B97\u7B26",sub:!0},{id:"6-yield*",title:"3.3. yield*",sub:!0},{id:"7-\u5176\u4ED6\u573A\u5408",title:"3.4. \u5176\u4ED6\u573A\u5408",sub:!0},{id:"8-\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684-return-\uFF0Cthrow-",title:"4. \u8FED\u4EE3\u5668\u5BF9\u8C61\u7684 return()\uFF0Cthrow()"},{id:"9-\u6570\u7EC4\u7684\u8FED\u4EE3\u5668",title:"5. \u6570\u7EC4\u7684\u8FED\u4EE3\u5668"},{id:"10-\u5BF9\u8C61\u7684\u8FED\u4EE3\u5668",title:"6. \u5BF9\u8C61\u7684\u8FED\u4EE3\u5668"},{id:"11-\u4E0E\u5176\u4ED6\u904D\u5386\u8BED\u6CD5\u7684\u6BD4\u8F83",title:"7. \u4E0E\u5176\u4ED6\u904D\u5386\u8BED\u6CD5\u7684\u6BD4\u8F83"}];return(O,R)=>{const n=l("doc-code"),a=l("doc-page");return i(),s(a,{desc:"",toc:r},{default:d(()=>[c,u,_,f,h,g,p,o(n,{code:`let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
`,lang:"javascript"}),v,b,x,o(n,{code:`// \u5BF9\u6570\u7EC4\u548C Set \u7ED3\u6784\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\u65F6\uFF0C\u4F1A\u9ED8\u8BA4\u8C03\u7528Symbol.iterator\u65B9\u6CD5\u3002
let set = new Set().add('a').add('b').add('c')
let [x,y] = set
// x='a' y='b'
let [first, ...rest] = set
// first='a' rest=['b','c']
`,lang:"javascript"}),y,o(n,{code:`// \u6269\u5C55\u8FD0\u7B97\u7B26\uFF08...\uFF09\u4E5F\u4F1A\u8C03\u7528\u9ED8\u8BA4\u7684 Iterator \u63A5\u53E3
// \u4F8B\u4E00
var str = 'hello'
[...str] //  ['h','e','l','l','o']

// \u4F8B\u4E8C
let arr = ['b', 'c']
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']

// \u53EA\u8981\u67D0\u4E2A\u6570\u636E\u7ED3\u6784\u90E8\u7F72\u4E86 Iterator \u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u5BF9\u5B83\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u5C06\u5176\u8F6C\u4E3A\u6570\u7EC4\u3002
let arr = [...iterable]
`,lang:"javascript"}),m,o(n,{code:`// yield*\u540E\u9762\u8DDF\u7684\u662F\u4E00\u4E2A\u53EF\u904D\u5386\u7684\u7ED3\u6784\uFF0C\u5B83\u4F1A\u8C03\u7528\u8BE5\u7ED3\u6784\u7684\u8FED\u4EE3\u5668\u63A5\u53E3\u3002
let generator = function* () {
  yield 1
  yield* [2,3,4]
  yield 5
}
var iterator = generator()
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
`,lang:"javascript"}),j,I,k,A,S,w,E,o(n,{code:`const arr = ['red', 'green', 'blue']
arr.forEach(function (element, index) {
  console.log(element) // red green blue
  console.log(index)   // 0 1 2
})
`,lang:"javascript"}),N,o(n,{code:`var arr = ['a', 'b', 'c', 'd']
for (let a in arr) {
  console.log(a) // 0 1 2 3
}
for (let a of arr) {
  console.log(a) // a b c d
}
`,lang:"javascript"}),M,o(n,{code:`let arr = [3, 5, 7]
arr.foo = 'hello'
for (let i in arr) {
  console.log(i) // "0", "1", "2", "foo"
}
for (let i of arr) {
  console.log(i) //  "3", "5", "7"
}
`,lang:"javascript"}),T,o(n,{code:`let arrayLike = { length: 2, 0: 'a', 1: 'b' }
// \u62A5\u9519
for (let x of arrayLike) {
  console.log(x)
}
// \u6B63\u786E
for (let x of Array.from(arrayLike)) {
  console.log(x)
}
`,lang:"javascript"}),C,L,o(n,{code:`let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
}
for (let e in es6) {
  console.log(e)
}
// edition
// committee
// standard
for (let e of es6) {
  console.log(e)
}
// TypeError: es6[Symbol.iterator] is not a function
`,lang:"javascript"}),B,P,o(n,{code:`for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index])
}
// \u6BD4\u8F83\u9EBB\u70E6
`,lang:"javascript"}),V,o(n,{code:`myArray.forEach(function (value) {
  console.log(value)
})
// \u65E0\u6CD5\u4E2D\u9014\u8DF3\u51FAforEach\u5FAA\u73AF\uFF0Cbreak\u547D\u4EE4\u6216return\u547D\u4EE4\u90FD\u4E0D\u80FD\u594F\u6548
`,lang:"javascript"}),W,o(n,{code:`for (var index in myArray) {
  console.log(myArray[index])
}
`,lang:"javascript"}),q,o(n,{code:`for (var n of fibonacci) {
  if (n > 1000) break
  console.log(n)
}
`,lang:"javascript"})]),_:1})}}};export{D as default};
