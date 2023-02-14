import{r as i,o as c,c as r,f as s,g as o,aa as e,v as l}from"./vendor-774b84b8.js";const d=e("h2",{id:"1-in",class:"doc-heading"},"in",-1),u=e("p",null,"\u5982\u679C\u6307\u5B9A\u7684\u5C5E\u6027\u5728\u6307\u5B9A\u7684\u5BF9\u8C61\u6216\u5176\u539F\u578B\u94FE\u4E2D,\u5219\u8FD4\u56DEtrue",-1),y=e("p",null,"\u53F3\u64CD\u4F5C\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61\u503C",-1),p=e("p",null,[l("\u88AB"),e("strong",null,"\u5220\u9664"),l("\u6216"),e("strong",null,"\u503C\u7B49\u4E8Eundefined"),l("\u7ED3\u679C\u4E0D\u540C")],-1),_=e("h2",{id:"2-++i",class:"doc-heading"},"++i",-1),g=e("p",null,"i\u5148\u5C06\u81EA\u8EAB\u7684\u503C\u81EA\u589E1\uFF0C\u518D\u5C06\u81EA\u589E\u540E\u7684\u503C\u8D4B\u503C\u7ED9\u53D8\u91CFa",-1),h=e("h2",{id:"3-i++",class:"doc-heading"},"i++",-1),m=e("p",null,"i\u5148\u5C06\u81EA\u8EAB\u7684\u503C\u8D4B\u503C\u7ED9\u53D8\u91CFa\uFF0C\u7136\u540E\u518D\u81EA\u589E1",-1),x=e("h2",{id:"4-==",class:"doc-heading"},"==",-1),T=e("ol",null,[e("li",null,"\u5982\u679Cx\u4E0D\u662F\u6B63\u5E38\u503C\uFF08\u6BD4\u5982\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF09\uFF0C\u4E2D\u65AD\u6267\u884C\u3002 \u5982\u679Cy\u4E0D\u662F\u6B63\u5E38\u503C\uFF0C\u4E2D\u65AD\u6267\u884C\u3002"),e("li",null,"\u5982\u679CType(x)\u4E0EType(y)\u76F8\u540C\uFF0C\u6267\u884C\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97x === y\u3002"),e("li",null,"\u5982\u679Cx\u662Fnull\uFF0Cy\u662Fundefined\uFF0C\u8FD4\u56DEtrue\u3002"),e("li",null,"\u5982\u679Cx\u662Fundefined\uFF0Cy\u662Fnull\uFF0C\u8FD4\u56DEtrue\u3002"),e("li",null,"\u5982\u679CType(x)\u662F\u6570\u503C\uFF0CType(y)\u662F\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DEx == ToNumber(y)\u7684\u7ED3\u679C\u3002"),e("li",null,"\u5982\u679CType(x)\u662F\u5B57\u7B26\u4E32\uFF0CType(y)\u662F\u6570\u503C\uFF0C\u8FD4\u56DEToNumber(x) == y\u7684\u7ED3\u679C\u3002"),e("li",null,"\u5982\u679CType(x)\u662F\u5E03\u5C14\u503C\uFF0C\u8FD4\u56DEToNumber(x) == y\u7684\u7ED3\u679C\u3002"),e("li",null,"\u5982\u679CType(y)\u662F\u5E03\u5C14\u503C\uFF0C\u8FD4\u56DEx == ToNumber(y)\u7684\u7ED3\u679C\u3002"),e("li",null,"\u5982\u679CType(x)\u662F\u5B57\u7B26\u4E32\u6216\u6570\u503C\u6216Symbol\u503C\uFF0CType(y)\u662F\u5BF9\u8C61\uFF0C\u8FD4\u56DEx == ToPrimitive(y)\u7684\u7ED3\u679C\u3002"),e("li",null,"\u5982\u679CType(x)\u662F\u5BF9\u8C61\uFF0CType(y)\u662F\u5B57\u7B26\u4E32\u6216\u6570\u503C\u6216Symbol\u503C\uFF0C\u8FD4\u56DEToPrimitive(x) == y\u7684\u7ED3\u679C\u3002"),e("li",null,"\u8FD4\u56DEfalse\u3002")],-1),N={__name:"\u8FD0\u7B97\u7B26",setup(v){const t=[{id:"doc-title",title:"js \u6570\u636E\u7684\u8FD0\u7B97\u7B26"},{id:"1-in",title:"1. in"},{id:"2-++i",title:"2. ++i"},{id:"3-i++",title:"3. i++"},{id:"4-==",title:"4. =="}];return(f,b)=>{const n=i("doc-code"),a=i("doc-page");return c(),r(a,{desc:"",toc:t},{default:s(()=>[d,u,o(n,{code:`const trees = new Array("redwood", "bay", "cedar", "oak", "maple")
0 in trees // true
'bay' in trees // false
'length' in trees // true
Symbol.iterator in trees // true
`,lang:"javascript"}),y,o(n,{code:`var color1 = new String("green")
'length' in color1 // true
var color2 = 'coral'
'length' in color2 // Cannot use 'in' operator to search for 'length' in coral
`,lang:"javascript"}),p,o(n,{code:`var mycar = {make: "Honda", model: "Accord", year: 1998, a: undefined}
delete mycar.make
'make' in mycar  // false
'a' in mycar // true
`,lang:"javascript"}),_,g,o(n,{code:`var i = 1
var a = ++i
console.log(i)  // 2
console.log(a)  // 2
`,lang:"javascript"}),h,m,o(n,{code:`var i = 1
var a = i++
console.log(i)  // 2
console.log(a)  // 1
`,lang:"javascript"}),x,o(n,{code:`x == y
`,lang:"javascript"}),T]),_:1})}}};export{N as default};
