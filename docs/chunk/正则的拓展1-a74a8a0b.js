import{r as o,o as l,c as r,f as i,g as t,a9 as e,v as n}from"./vendor-585b19a3.js";const p=e("h2",{id:"1-regexp-\u6784\u9020\u51FD\u6570",class:"doc-heading"},"RegExp \u6784\u9020\u51FD\u6570",-1),d=e("p",null,"\u5728 ES5 \u4E2D\uFF0CRegExp\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u6709\u4E24\u79CD\u60C5\u51B5\u3002",-1),g=e("p",null,[n("ES6 \u5982\u679CRegExp\u6784\u9020\u51FD\u6570\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u5219\u5BF9\u8C61\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u4FEE\u9970\u7B26\u3002"),e("br"),n(" \u800C\u4E14\uFF0C\u8FD4\u56DE\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u4F1A\u5FFD\u7565\u539F\u6709\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4FEE\u9970\u7B26\uFF0C\u53EA\u4F7F\u7528\u65B0\u6307\u5B9A\u7684\u4FEE\u9970\u7B26\u3002")],-1),_=e("h2",{id:"2-\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5",class:"doc-heading"},"\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5",-1),h=e("p",null,[n("\u5B57\u7B26\u4E32\u5BF9\u8C61\u5171\u6709 4 \u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1Amatch()\u3001replace()\u3001search()\u548Csplit()\u3002"),e("br"),n(" ES6 \u5C06\u8FD9 4 \u4E2A\u65B9\u6CD5\uFF0C\u5728\u8BED\u8A00\u5185\u90E8\u5168\u90E8\u8C03\u7528RegExp\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u4ECE\u800C\u505A\u5230\u6240\u6709\u4E0E\u6B63\u5219\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C\u5168\u90FD\u5B9A\u4E49\u5728RegExp\u5BF9\u8C61\u4E0A\u3002")],-1),x=e("ul",null,[e("li",null,"String.prototype.match \u8C03\u7528 RegExp.prototype[Symbol.match]"),e("li",null,"String.prototype.replace \u8C03\u7528 RegExp.prototype[Symbol.replace]"),e("li",null,"String.prototype.search \u8C03\u7528 RegExp.prototype[Symbol.search]"),e("li",null,"String.prototype.split \u8C03\u7528 RegExp.prototype[Symbol.split]")],-1),y=e("h2",{id:"3-u-\u4FEE\u9970\u7B26",class:"doc-heading"},"u \u4FEE\u9970\u7B26",-1),u=e("p",null,"\u4F1A\u6B63\u786E\u5904\u7406\u56DB\u4E2A\u5B57\u8282\u7684 UTF-16 \u7F16\u7801",-1),E=e("h2",{id:"4-y-\u4FEE\u9970\u7B26",class:"doc-heading"},"y \u4FEE\u9970\u7B26",-1),R=e("p",null,[n("y\u4FEE\u9970\u7B26\u7684\u4F5C\u7528\u4E0Eg\u4FEE\u9970\u7B26\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u5168\u5C40\u5339\u914D\uFF0C\u540E\u4E00\u6B21\u5339\u914D\u90FD\u4ECE\u4E0A\u4E00\u6B21\u5339\u914D\u6210\u529F\u7684\u4E0B\u4E00\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u3002"),e("br"),n(" \u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0Cg\u4FEE\u9970\u7B26\u53EA\u8981\u5269\u4F59\u4F4D\u7F6E\u4E2D\u5B58\u5728\u5339\u914D\u5C31\u53EF\uFF0C\u800Cy\u4FEE\u9970\u7B26\u786E\u4FDD\u5339\u914D\u5FC5\u987B\u4ECE\u5269\u4F59\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u8FD9\u4E5F\u5C31\u662F\u201C\u7C98\u8FDE\u201D\u7684\u6DB5\u4E49\u3002")],-1),v=e("p",null,"\u4F7F\u7528lastIndex\u5C5E\u6027(\u6307\u5B9A\u6BCF\u6B21\u641C\u7D22\u7684\u5F00\u59CB\u4F4D\u7F6E)\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u8BF4\u660Ey\u4FEE\u9970\u7B26\u3002",-1),f=e("p",null,"\u5355\u5355\u4E00\u4E2Ay\u4FEE\u9970\u7B26\u5BF9match\u65B9\u6CD5\uFF0C\u53EA\u80FD\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5339\u914D\uFF0C\u5FC5\u987B\u4E0Eg\u4FEE\u9970\u7B26\u8054\u7528\uFF0C\u624D\u80FD\u8FD4\u56DE\u6240\u6709\u5339\u914D\u3002",-1),m=e("h2",{id:"5-regexp-prototype-sticky-\u5C5E\u6027",class:"doc-heading"},"RegExp.prototype.sticky \u5C5E\u6027",-1),b=e("p",null,"\u8868\u793A\u662F\u5426\u8BBE\u7F6E\u4E86y\u4FEE\u9970\u7B26\u3002",-1),S=e("h2",{id:"6-regexp-prototype-flags-\u5C5E\u6027",class:"doc-heading"},"RegExp.prototype.flags \u5C5E\u6027",-1),j=e("p",null,"\u8FD4\u56DE\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4FEE\u9970\u7B26",-1),U=e("h2",{id:"7-s-\u4FEE\u9970\u7B26",class:"doc-heading"},"s \u4FEE\u9970\u7B26",-1),k=e("p",null,[n("\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u70B9\uFF08.\uFF09\u662F\u4E00\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF0C\u4EE3\u8868\u4EFB\u610F\u7684\u5355\u4E2A\u5B57\u7B26\uFF0C\u4F46\u662F\u6709\u4E24\u4E2A\u4F8B\u5916\u3002"),e("br"),n(" \u4E00\u4E2A\u662F\u56DB\u4E2A\u5B57\u8282\u7684 UTF-16\u5B57\u7B26\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u7528u\u4FEE\u9970\u7B26\u89E3\u51B3\uFF1B"),e("br"),n(" \u53E6\u4E00\u4E2A\u662F\u884C\u7EC8\u6B62\u7B26\uFF08line terminator character\uFF09\u3002")],-1),w=e("p",null,[e("strong",null,"\u884C\u7EC8\u6B62\u7B26"),n('\uFF0C\u5C31\u662F\u8BE5\u5B57\u7B26\u8868\u793A\u4E00\u884C\u7684\u7EC8\u7ED3\u3002\u4EE5\u4E0B\u56DB\u4E2A\u5B57\u7B26\u5C5E\u4E8E"\u884C\u7EC8\u6B62\u7B26"')],-1),G=e("ul",null,[e("li",null,"U+000A \u6362\u884C\u7B26\uFF08\\n\uFF09"),e("li",null,"U+000D \u56DE\u8F66\u7B26\uFF08\\r\uFF09"),e("li",null,"U+2028 \u884C\u5206\u9694\u7B26\uFF08line separator\uFF09"),e("li",null,"U+2029 \u6BB5\u5206\u9694\u7B26\uFF08paragraph separator\uFF09")],-1),X=e("h2",{id:"8--p\u4E0E-p-unicode-\u5C5E\u6027\u7C7B",class:"doc-heading"},"/p\u4E0E/P Unicode \u5C5E\u6027\u7C7B",-1),z=e("p",null,"\u5141\u8BB8\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7B26\u5408 Unicode \u67D0\u79CD\u5C5E\u6027\u7684\u6240\u6709\u5B57\u7B26\u3002",-1),N={__name:"\u6B63\u5219\u7684\u62D3\u5C551",setup(I){const s=[{id:"doc-title",title:"\u6B63\u5219\u7684\u62D3\u5C55"},{id:"1-regexp-\u6784\u9020\u51FD\u6570",title:"1. RegExp \u6784\u9020\u51FD\u6570"},{id:"2-\u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5",title:"2. \u5B57\u7B26\u4E32\u7684\u6B63\u5219\u65B9\u6CD5"},{id:"3-u-\u4FEE\u9970\u7B26",title:"3. u \u4FEE\u9970\u7B26"},{id:"4-y-\u4FEE\u9970\u7B26",title:"4. y \u4FEE\u9970\u7B26"},{id:"5-regexp-prototype-sticky-\u5C5E\u6027",title:"5. RegExp.prototype.sticky \u5C5E\u6027"},{id:"6-regexp-prototype-flags-\u5C5E\u6027",title:"6. RegExp.prototype.flags \u5C5E\u6027"},{id:"7-s-\u4FEE\u9970\u7B26",title:"7. s \u4FEE\u9970\u7B26"},{id:"8--p\u4E0E-p-unicode-\u5C5E\u6027\u7C7B",title:"8. /p\u4E0E/P Unicode \u5C5E\u6027\u7C7B"}];return(T,B)=>{const a=o("doc-code"),c=o("doc-page");return l(),r(c,{desc:"",toc:s},{default:i(()=>[p,d,t(a,{code:`// \u53C2\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u8FD9\u65F6\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4FEE\u9970\u7B26\uFF08flag\uFF09
var regex = new RegExp('xyz', 'i')
// \u7B49\u4EF7\u4E8E
var regex = /xyz/i
`,lang:"javascript"}),t(a,{code:`// \u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u793A\u5F0F,\u4E0D\u5141\u8BB8\u6B64\u65F6\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6DFB\u52A0\u4FEE\u9970\u7B26\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002
var regex = new RegExp(/xyz/i)
// \u7B49\u4EF7\u4E8E
var regex = /xyz/i
`,lang:"javascript"}),t(a,{code:`var regex = new RegExp(/xyz/, 'i')
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
`,lang:"javascript"}),g,t(a,{code:`new RegExp(/abc/ig, 'i').flags
// "i"
// \u539F\u6709\u6B63\u5219\u5BF9\u8C61\u7684\u4FEE\u9970\u7B26\u662Fig\uFF0C\u5B83\u4F1A\u88AB\u7B2C\u4E8C\u4E2A\u53C2\u6570i\u8986\u76D6\u3002
`,lang:"javascript"}),_,h,x,y,u,E,R,t(a,{code:`var s = 'aaa_aa_a'
var r1 = /a+/g
var r2 = /a+/y
r1.exec(s) // ["aaa"]
r1.exec(s) // ["aa"]
r2.exec(s) // ["aaa"]
r2.exec(s) // null
`,lang:"javascript"}),t(a,{code:`var s = 'aaa_aa_a'
var r = /a+_/y
r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
`,lang:"javascript"}),v,t(a,{code:`const REGEX = /a/y
// \u6307\u5B9A\u4ECE2\u53F7\u4F4D\u7F6E\u5F00\u59CB\u5339\u914D
REGEX.lastIndex = 2
// \u4E0D\u662F\u7C98\u8FDE\uFF0C\u5339\u914D\u5931\u8D25
REGEX.exec('xaya') // null
// \u6307\u5B9A\u4ECE3\u53F7\u4F4D\u7F6E\u5F00\u59CB\u5339\u914D
REGEX.lastIndex = 3
// 3\u53F7\u4F4D\u7F6E\u662F\u7C98\u8FDE\uFF0C\u5339\u914D\u6210\u529F
const match = REGEX.exec('xaya')
match.index // 3
REGEX.lastIndex // 4
`,lang:"javascript"}),f,t(a,{code:`'a1a2a3'.match(/a\\d/y) // ["a1"]
'a1a2a3'.match(/a\\d/gy) // ["a1", "a2", "a3"]
`,lang:"javascript"}),m,b,t(a,{code:`var r = /hello\\d/y
r.sticky // true
`,lang:"javascript"}),S,j,t(a,{code:`// ES5 \u7684 source \u5C5E\u6027
// \u8FD4\u56DE\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6B63\u6587
/abc/ig.source
// "abc"

// ES6 \u7684 flags \u5C5E\u6027
// \u8FD4\u56DE\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4FEE\u9970\u7B26
/abc/ig.flags
// 'gi'
`,lang:"javascript"}),U,k,w,G,t(a,{code:`/foo.bar/.test('foo\\nbar') // false
/foo.bar/s.test('foo\\nbar') // true
`,lang:"javascript"}),t(a,{code:`const re = /foo.bar/s
// \u53E6\u4E00\u79CD\u5199\u6CD5
// const re = new RegExp('foo.bar', 's')
re.test('foo\\nbar') // true
re.dotAll // true
re.flags // 's'
`,lang:"javascript"}),X,z]),_:1})}}};export{N as default};
