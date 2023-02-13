import{r as n,o as p,c as r,f as a,aa as o,g as c,v as t}from"./vendor-90615676.js";const i=o("h2",{id:"1-\u6570\u636E\u65CF\u8C31\u4E00\u89C8",class:"doc-heading"},"\u6570\u636E\u65CF\u8C31\u4E00\u89C8",-1),d=o("h2",{id:"2-\u9A8C\u8BC1",class:"doc-heading"},"\u9A8C\u8BC1",-1),u=o("p",null,"\u4EE5\u4E0B\u5168\u90E8\u4E3A\u771F",-1),g=o("ul",null,[o("li",null,"\u6240\u6709\u7684\u6784\u9020\u51FD\u6570\u90FD\u662F Function \u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5305\u62EC\u5B83\u81EA\u5DF1"),o("li",null,"prototype \u9876\u5C42\u90FD\u662F Object.prototype"),o("li",null,"JavaScript\u7531\u5BF9\u8C61\u7EC4\u6210\uFF0C\u4E00\u5207\u7686\u4E3A\u5BF9\u8C61")],-1),F=o("blockquote",{class:"doc-note"},[o("p",null,[t("\u5973\u5A32\u634F\u571F\u9020\u4EBA\uFF1A"),o("br"),o("code",{class:"doc-token"},"null"),t(" ------\u5B87\u5B99\u5927\u7206\u70B8------> \u4EA7\u751F\u4E86\u571F\uFF0C\u571F\u5C31\u662F "),o("code",{class:"doc-token"},"Object.prototype"),t("\uFF0C\u6240\u6709\u7684\u4EBA\u90FD\u662F\u571F\u634F\u6210\u7684\uFF1B"),o("br"),t(" \u5973\u5A32\u7684\u5B58\u5728\u5C31\u662F\u4E2Abug,\u5979\u634F\u4E86\u6240\u6709\u4EBA\u4E5F\u634F\u4E86\u5979\u81EA\u5DF1\uFF0C\u5979\u5C31\u662F "),o("code",{class:"doc-token"},"Function")])],-1),j={__name:"\u65CF\u8C31",setup(y){const e=[{id:"doc-title",title:"js \u6570\u636E\u65CF\u8C31"},{id:"1-\u6570\u636E\u65CF\u8C31\u4E00\u89C8",title:"1. \u6570\u636E\u65CF\u8C31\u4E00\u89C8"},{id:"2-\u9A8C\u8BC1",title:"2. \u9A8C\u8BC1"}];return(h,b)=>{const l=n("doc-img"),s=n("doc-code"),_=n("doc-page");return p(),r(_,{desc:"js \u6570\u636E\u65CF\u8C31\uFF0C\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u5173\u7CFB",toc:e},{default:a(()=>[i,o("p",null,[c(l,{src:"data_genealogy.png",alt:"data_genealogy.png"})]),d,u,c(s,{code:`function Foo () {}
const foo = new Foo()

console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.__proto__ === Function.prototype) // \u666E\u901A\u6784\u9020\u51FD\u6570\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u770B\u4F5C Function \u7684\u4E00\u4E2A\u5B9E\u4F8B
console.log(Function.__proto__ === Function.prototype) // new \u4E86\u4E00\u4E2A\u81EA\u5DF1
console.log(Object.__proto__ === Function.prototype)
console.log(Foo.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(Function.prototype.constructor === Function)
console.log(Function.constructor === Function) // \u6B64\u65F6\u53EF\u4EE5\u628A Function \u770B\u4F5C\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u7684 constructor \u5C5E\u6027\u7EE7\u627F\u81EA Function.prototype
`,lang:"javascript"}),g,F]),_:1})}}};export{j as default};
