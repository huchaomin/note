import{r as e,o as c,c as i,f as s,g as t,aa as o,v as r}from"./vendor-774b84b8.js";const p=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"ES6 \u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u800C\u662F\u901A\u8FC7export\u547D\u4EE4\u663E\u5F0F\u6307\u5B9A\u8F93\u51FA\u7684\u4EE3\u7801\uFF0C\u518D\u901A\u8FC7import\u547D\u4EE4\u8F93\u5165")],-1),d=o("h2",{id:"1-\u4E25\u683C\u6A21\u5F0F",class:"doc-heading"},"\u4E25\u683C\u6A21\u5F0F",-1),m=o("p",null,[r('ES6 \u7684\u6A21\u5757\u81EA\u52A8\u91C7\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u4E0D\u7BA1\u4F60\u6709\u6CA1\u6709\u5728\u6A21\u5757\u5934\u90E8\u52A0\u4E0A"use strict"\u3002'),o("br"),r(" \u4E25\u683C\u6A21\u5F0F\u4E3B\u8981\u6709\u4EE5\u4E0B\u9650\u5236\uFF1A")],-1),u=o("ul",null,[o("li",null,"\u53D8\u91CF\u5FC5\u987B\u58F0\u660E\u540E\u518D\u4F7F\u7528"),o("li",null,"\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u80FD\u6709\u540C\u540D\u5C5E\u6027\uFF0C\u5426\u5219\u62A5\u9519"),o("li",null,"\u4E0D\u80FD\u4F7F\u7528with\u8BED\u53E5"),o("li",null,"\u4E0D\u80FD\u5BF9\u53EA\u8BFB\u5C5E\u6027\u8D4B\u503C\uFF0C\u5426\u5219\u62A5\u9519"),o("li",null,"\u4E0D\u80FD\u4F7F\u7528\u524D\u7F00 0 \u8868\u793A\u516B\u8FDB\u5236\u6570\uFF0C\u5426\u5219\u62A5\u9519"),o("li",null,"\u4E0D\u80FD\u5220\u9664\u4E0D\u53EF\u5220\u9664\u7684\u5C5E\u6027\uFF0C\u5426\u5219\u62A5\u9519"),o("li",null,"\u4E0D\u80FD\u5220\u9664\u53D8\u91CFdelete prop\uFF0C\u4F1A\u62A5\u9519\uFF0C\u53EA\u80FD\u5220\u9664\u5C5E\u6027delete - global[prop]"),o("li",null,"eval\u4E0D\u4F1A\u5728\u5B83\u7684\u5916\u5C42\u4F5C\u7528\u57DF\u5F15\u5165\u53D8\u91CF"),o("li",null,"eval\u548Carguments\u4E0D\u80FD\u88AB\u91CD\u65B0\u8D4B\u503C"),o("li",null,"arguments\u4E0D\u4F1A\u81EA\u52A8\u53CD\u6620\u51FD\u6570\u53C2\u6570\u7684\u53D8\u5316"),o("li",null,"\u4E0D\u80FD\u4F7F\u7528arguments.callee"),o("li",null,"\u4E0D\u80FD\u4F7F\u7528arguments.caller"),o("li",null,"\u7981\u6B62this\u6307\u5411\u5168\u5C40\u5BF9\u8C61"),o("li",null,"\u4E0D\u80FD\u4F7F\u7528fn.caller\u548Cfn.arguments\u83B7\u53D6\u51FD\u6570\u8C03\u7528\u7684\u5806\u6808"),o("li",null,"\u589E\u52A0\u4E86\u4FDD\u7559\u5B57\uFF08\u6BD4\u5982protected\u3001static\u548Cinterface\uFF09")],-1),f=o("h2",{id:"2-export-\u547D\u4EE4",class:"doc-heading"},"export \u547D\u4EE4",-1),_=o("p",null,"\u4E00\u4E2A\u6A21\u5757\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6\u3002\u8BE5\u6587\u4EF6\u5185\u90E8\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u5916\u90E8\u65E0\u6CD5\u83B7\u53D6\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5916\u90E8\u80FD\u591F\u8BFB\u53D6\u6A21\u5757\u5185\u90E8\u7684\u67D0\u4E2A\u53D8\u91CF\uFF0C\u5C31\u5FC5\u987B\u4F7F\u7528export\u5173\u952E\u5B57\u8F93\u51FA\u8BE5\u53D8\u91CF",-1),x=o("p",null,"\u5199\u6CD5",-1),h=o("p",null,"export\u8BED\u53E5\u8F93\u51FA\u7684\u63A5\u53E3\uFF0C\u4E0E\u5176\u5BF9\u5E94\u7684\u503C\u662F\u52A8\u6001\u7ED1\u5B9A\u5173\u7CFB\uFF0C\u5373\u901A\u8FC7\u8BE5\u63A5\u53E3\uFF0C\u53EF\u4EE5\u53D6\u5230\u6A21\u5757\u5185\u90E8\u5B9E\u65F6\u7684\u503C\u3002",-1),g=o("p",null,"export\u547D\u4EE4\u53EF\u4EE5\u51FA\u73B0\u5728\u6A21\u5757\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF0C\u53EA\u8981\u5904\u4E8E\u6A21\u5757\u9876\u5C42\u5C31\u53EF\u4EE5\u3002\u5982\u679C\u5904\u4E8E\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\uFF0C\u5C31\u4F1A\u62A5\u9519\uFF0C\u4E0B\u4E00\u8282\u7684import\u547D\u4EE4\u4E5F\u662F\u5982\u6B64\u3002\u8FD9\u662F\u56E0\u4E3A\u5904\u4E8E\u6761\u4EF6\u4EE3\u7801\u5757\u4E4B\u4E2D\uFF0C\u5C31\u6CA1\u6CD5\u505A\u9759\u6001\u4F18\u5316\u4E86\uFF0C\u8FDD\u80CC\u4E86 ES6 \u6A21\u5757\u7684\u8BBE\u8BA1\u521D\u8877\u3002",-1),v=o("h2",{id:"3-import-\u547D\u4EE4",class:"doc-heading"},"import \u547D\u4EE4",-1),j=o("p",null,"as",-1),b=o("p",null,"import\u547D\u4EE4\u8F93\u5165\u7684\u53D8\u91CF\u90FD\u662F\u53EA\u8BFB\u7684",-1),y=o("p",null,"\u5982\u679Ca\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6539\u5199a\u7684\u5C5E\u6027\u662F\u5141\u8BB8\u7684",-1),E=o("p",null,"import\u547D\u4EE4\u5177\u6709\u63D0\u5347\u6548\u679C\uFF0C\u4F1A\u63D0\u5347\u5230\u6574\u4E2A\u6A21\u5757\u7684\u5934\u90E8\uFF0C\u9996\u5148\u6267\u884C",-1),V=o("p",null,"\u7531\u4E8Eimport\u662F\u9759\u6001\u6267\u884C\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4F7F\u7528\u8868\u8FBE\u5F0F\u548C\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u53EA\u6709\u5728\u8FD0\u884C\u65F6\u624D\u80FD\u5F97\u5230\u7ED3\u679C\u7684\u8BED\u6CD5\u7ED3\u6784\u3002",-1),S=o("p",null,"import\u8BED\u53E5\u4F1A\u6267\u884C\u6240\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6709\u4E0B\u9762\u7684\u5199\u6CD5\u3002",-1),M=o("p",null,"\u591A\u6B21\u91CD\u590D\u6267\u884C\u540C\u4E00\u53E5import\u8BED\u53E5\uFF0C\u90A3\u4E48\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u800C\u4E0D\u4F1A\u6267\u884C\u591A\u6B21",-1),N=o("h2",{id:"4-\u6A21\u5757\u7684\u6574\u4F53\u52A0\u8F7D",class:"doc-heading"},"\u6A21\u5757\u7684\u6574\u4F53\u52A0\u8F7D",-1),B=o("p",null,"\u6216\u8005",-1),I=o("h2",{id:"5-export-default-\u547D\u4EE4",class:"doc-heading"},"export default \u547D\u4EE4",-1),P=o("p",null,"\u7528\u4E8E\u6307\u5B9A\u6A21\u5757\u7684\u9ED8\u8BA4\u8F93\u51FA",-1),T=o("p",null,"export default\u547D\u4EE4\u7528\u4E8E\u6307\u5B9A\u6A21\u5757\u7684\u9ED8\u8BA4\u8F93\u51FA\u3002\u663E\u7136\uFF0C\u4E00\u4E2A\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u8F93\u51FA\uFF0C\u56E0\u6B64export default\u547D\u4EE4\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\u3002\u6240\u4EE5\uFF0Cimport\u547D\u4EE4\u540E\u9762\u624D\u4E0D\u7528\u52A0\u5927\u62EC\u53F7\uFF0C\u56E0\u4E3A\u53EA\u53EF\u80FD\u552F\u4E00\u5BF9\u5E94export default\u547D\u4EE4\u3002",-1),k=o("h2",{id:"6-export-\u4E0E-import-\u7684\u590D\u5408\u5199\u6CD5",class:"doc-heading"},"export \u4E0E import \u7684\u590D\u5408\u5199\u6CD5",-1),q={__name:"Module\u7684\u8BED\u6CD5",setup(w){const a=[{id:"doc-title",title:"Module"},{id:"1-\u4E25\u683C\u6A21\u5F0F",title:"1. \u4E25\u683C\u6A21\u5F0F"},{id:"2-export-\u547D\u4EE4",title:"2. export \u547D\u4EE4"},{id:"3-import-\u547D\u4EE4",title:"3. import \u547D\u4EE4"},{id:"4-\u6A21\u5757\u7684\u6574\u4F53\u52A0\u8F7D",title:"4. \u6A21\u5757\u7684\u6574\u4F53\u52A0\u8F7D"},{id:"5-export-default-\u547D\u4EE4",title:"5. export default \u547D\u4EE4"},{id:"6-export-\u4E0E-import-\u7684\u590D\u5408\u5199\u6CD5",title:"6. export \u4E0E import \u7684\u590D\u5408\u5199\u6CD5"}];return(z,C)=>{const n=e("doc-code"),l=e("doc-page");return c(),i(l,{desc:"",toc:a},{default:s(()=>[p,d,m,u,f,_,t(n,{code:`// export\u8F93\u51FA\u7684\u53D8\u91CF\u5C31\u662F\u672C\u6765\u7684\u540D\u5B57\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528as\u5173\u952E\u5B57\u91CD\u547D\u540D
function v1() { ... }
function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}
//v2\u53EF\u4EE5\u7528\u4E0D\u540C\u7684\u540D\u5B57\u8F93\u51FA\u4E24\u6B21\u3002
`,lang:"javascript"}),x,t(n,{code:`// \u62A5\u9519
export 1
// \u62A5\u9519
var m = 1
export m

// \u5199\u6CD5\u4E00
export var m = 1
// \u5199\u6CD5\u4E8C
var m = 1
export {m}
// \u5199\u6CD5\u4E09
var n = 1
export {n as m}
`,lang:"javascript"}),t(n,{code:`// \u62A5\u9519
function f() {}
export f

// \u6B63\u786E
export function f() {}
// \u6B63\u786E
function f() {}
export {f}
`,lang:"javascript"}),h,t(n,{code:`export var foo = 'bar'
setTimeout(() => foo = 'baz', 500)
//500 \u6BEB\u79D2\u4E4B\u540E\u53D8\u6210baz
`,lang:"javascript"}),g,t(n,{code:`function foo() {
  export default 'bar' // SyntaxError
}
foo()
`,lang:"javascript"}),v,j,t(n,{code:`import { lastName as surname } from './profile.js'
`,lang:"javascript"}),b,t(n,{code:`import {a} from './xxx.js'
a = {} // Syntax Error : 'a' is read-only
`,lang:"javascript"}),y,t(n,{code:`import {a} from './xxx.js'
a.foo = 'hello' // \u5408\u6CD5\u64CD\u4F5C(\u4F46\u662F\u4E0D\u5EFA\u8BAE)
`,lang:"javascript"}),E,t(n,{code:`foo()
import { foo } from 'my_module'
`,lang:"javascript"}),V,t(n,{code:`// \u62A5\u9519
import { 'f' + 'oo' } from 'my_module'
// \u62A5\u9519
let module = 'my_module'
import { foo } from module
// \u62A5\u9519
if (x === 1) {
  import { foo } from 'module1'
} else {
  import { foo } from 'module2'
}
`,lang:"javascript"}),S,t(n,{code:`import 'lodash'
`,lang:"javascript"}),M,t(n,{code:`import 'lodash'
import 'lodash'
//\u52A0\u8F7D\u4E86\u4E24\u6B21lodash\uFF0C\u4F46\u662F\u53EA\u4F1A\u6267\u884C\u4E00\u6B21
`,lang:"javascript"}),N,t(n,{code:`// circle.js
export function area(radius) {
  return Math.PI * radius * radius
}
export function circumference(radius) {
  return 2 * Math.PI * radius
}
`,lang:"javascript"}),t(n,{code:`// main.js
import { area, circumference } from './circle'
console.log('\u5706\u9762\u79EF\uFF1A' + area(4))
console.log('\u5706\u5468\u957F\uFF1A' + circumference(14))
`,lang:"javascript"}),B,t(n,{code:`import * as circle from './circle'
console.log('\u5706\u9762\u79EF\uFF1A' + circle.area(4))
console.log('\u5706\u5468\u957F\uFF1A' + circle.circumference(14))
`,lang:"javascript"}),I,P,t(n,{code:`// \u7B2C\u4E00\u7EC4
export default function crc32() { // \u8F93\u51FA
  // ...
}
import crc32 from 'crc32' // \u8F93\u5165
// \u7B2C\u4E8C\u7EC4
export function crc32() { // \u8F93\u51FA
  // ...
}
import {crc32} from 'crc32' // \u8F93\u5165
`,lang:"javascript"}),T,t(n,{code:`// modules.js
function add(x, y) {
  return x * y
}
export {add as default}
// \u7B49\u540C\u4E8E
// export default add

// app.js
import { default as foo } from 'modules'
// \u7B49\u540C\u4E8E
// import foo from 'modules'
`,lang:"javascript"}),t(n,{code:`//lodash.js
export default function (obj) {
  // \xB7\xB7\xB7
}
export function each(obj, iterator, context) {
  // \xB7\xB7\xB7
}
export { each as forEach }

//main.js
import _, { each, forEach } from 'lodash'
`,lang:"javascript"}),k,t(n,{code:`export { foo, bar } from 'my_module'
// \u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A
import { foo, bar } from 'my_module'
export { foo, bar }
//foo\u548Cbar\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u88AB\u5BFC\u5165\u5F53\u524D\u6A21\u5757\uFF0C\u53EA\u662F\u76F8\u5F53\u4E8E\u5BF9\u5916\u8F6C\u53D1\u4E86\u8FD9\u4E24\u4E2A\u63A5\u53E3\uFF0C\u5BFC\u81F4\u5F53\u524D\u6A21\u5757\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528foo\u548Cbar\u3002
`,lang:"javascript"})]),_:1})}}};export{q as default};
