import{r as t,o as r,c as s,f as l,g as a,a8 as o}from"./vendor-5a734afa.js";const d=o("h2",{id:"1-\u2026\u6269\u5C55\u8FD0\u7B97\u7B26",class:"doc-heading"},"\u2026\u6269\u5C55\u8FD0\u7B97\u7B26",-1),p=o("p",null,"\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u4E3A\u7528\u9017\u53F7\u5206\u9694\u7684\u53C2\u6570\u5E8F\u5217",-1),i=o("p",null,"\u53EA\u6709\u51FD\u6570\u8C03\u7528\u65F6\uFF0C\u6269\u5C55\u8FD0\u7B97\u7B26\u624D\u53EF\u4EE5\u653E\u5728\u5706\u62EC\u53F7\u4E2D\uFF0C\u5426\u5219\u4F1A\u62A5\u9519",-1),_=o("p",null,"\u66FF\u4EE3\u51FD\u6570\u7684 apply \u65B9\u6CD5",-1),u=o("p",null,"\u5E94\u7528",-1),x={__name:"\u6570\u7EC4\u7684\u62D3\u5C551",setup(g){const e=[{id:"doc-title",title:"\u6570\u7EC4\u7684\u62D3\u5C55"},{id:"1-\u2026\u6269\u5C55\u8FD0\u7B97\u7B26",title:"1. \u2026\u6269\u5C55\u8FD0\u7B97\u7B26"}];return(h,v)=>{const n=t("doc-code"),c=t("doc-page");return r(),s(c,{desc:"",toc:e},{default:l(()=>[d,p,a(n,{code:`console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
[...[], 1]
// [1]      \u5982\u679C\u6269\u5C55\u8FD0\u7B97\u7B26\u540E\u9762\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u5219\u4E0D\u4EA7\u751F\u4EFB\u4F55\u6548\u679C\u3002
`,lang:"javascript"}),i,a(n,{code:`(...[1, 2])
// Uncaught SyntaxError: Unexpected number

console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number

console.log(...[1, 2])
// 1 2
`,lang:"javascript"}),_,a(n,{code:`// ES5 \u7684\u5199\u6CD5
Math.max.apply(null, [14, 3, 77])

// ES6 \u7684\u5199\u6CD5
Math.max(...[14, 3, 77])

// \u7B49\u540C\u4E8E
Math.max(14, 3, 77)

// ES5\u7684 \u5199\u6CD5
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
Array.prototype.push.apply(arr1, arr2)

// ES6 \u7684\u5199\u6CD5
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
`,lang:"javascript"}),u,a(n,{code:`//\u590D\u5236\u6570\u7EC4
const a1 = [1, 2]
// \u5199\u6CD5\u4E00
const a2 = [...a1]
// \u5199\u6CD5\u4E8C
const [...a2] = a1
`,lang:"javascript"}),a(n,{code:`//\u5408\u5E76\u6570\u7EC4(\u6D45\u62F7\u8D1D)
const a1 = [{ foo: 1 }]
const a2 = [{ bar: 2 }]

const a3 = a1.concat(a2)
const a4 = [...a1, ...a2]

a3[0] === a1[0] // true
a4[0] === a1[0] // true
`,lang:"javascript"}),a(n,{code:`// \u6570\u7EC4\u89E3\u6784\u8D4B\u503C(\u53EA\u80FD\u653E\u5728\u6700\u540E\u4E00\u4F4D)
const [first, ...rest] = [1, 2, 3, 4, 5]
first // 1
rest  // [2, 3, 4, 5]
`,lang:"javascript"}),a(n,{code:`// \u8F6C\u5B57\u7B26\u7A9C\u4E3A\u6570\u7EC4
[...'hello']
// [ "h", "e", "l", "l", "o" ]
`,lang:"javascript"}),a(n,{code:`// \u8F6C\u5B9E\u73B0\u4E86 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\u4E3A\u6570\u7EC4
let nodeList = document.querySelectorAll('div')
let array = [...nodeList]
`,lang:"javascript"})]),_:1})}}};export{x as default};
