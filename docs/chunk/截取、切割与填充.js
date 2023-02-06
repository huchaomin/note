import{r as t,o as d,c as r,f as l,g as n,a9 as s,v as e}from"./vendor.js";const _=s("h2",{id:"1-array",class:"doc-heading"},"Array",-1),g=s("p",null,"slice \u590D\u5236\u4E00\u6BB5\u51FA\u6765\u7528 (\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4)",-1),p=s("p",null,"splice \u91CD\u65B0\u62FC\u63A5\u7EC4\u88C5\u539F\u6765\u7684\u6570\u7EC4 (\u4F1A\u6539\u53D8\u539F\u6570\u7EC4)",-1),u=s("h2",{id:"2-string",class:"doc-heading"},"String",-1),h=s("p",null,"slice \u590D\u5236\u4E00\u6BB5\u51FA\u6765\u7528 (\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),b=s("p",null,"split \u5207\u5272\u6210\u6570\u7EC4 (\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),f=s("p",null,"substring(\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),k=s("li",null,"\u6B63\u5E38\u60C5\u51B5\u4E0Esilce\u76F8\u540C",-1),m=s("li",null,[e("\u5982\u679C "),s("code",{class:"doc-token"},"indexStart"),e(" \u7B49\u4E8E "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C"),s("code",{class:"doc-token"},"substring"),e(" \u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u3002")],-1),v=s("li",null,[e("\u5982\u679C\u7701\u7565 "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C"),s("code",{class:"doc-token"},"substring"),e(" \u63D0\u53D6\u5B57\u7B26\u4E00\u76F4\u5230\u5B57\u7B26\u4E32\u672B\u5C3E\u3002")],-1),N=s("code",{class:"doc-token"},"NaN",-1),j=s("li",null,[e("\u5982\u679C\u4EFB\u4E00\u53C2\u6570\u5927\u4E8E "),s("code",{class:"doc-token"},"stringName.length"),e("\uFF0C\u5219\u88AB\u5F53\u4F5C "),s("code",{class:"doc-token"},"stringName.length"),e("\u3002")],-1),x=s("li",null,[e("\u5982\u679C "),s("code",{class:"doc-token"},"indexStart"),e(" \u5927\u4E8E "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C\u5219 "),s("code",{class:"doc-token"},"substring"),e(" \u7684\u6267\u884C\u6548\u679C\u5C31\u50CF\u4E24\u4E2A\u53C2\u6570\u8C03\u6362\u4E86\u4E00\u6837")],-1),E={__name:"\u622A\u53D6\u3001\u5207\u5272\u4E0E\u586B\u5145",setup(S){const o=[{id:"doc-title",title:"js \u6570\u636E\u7C7B\u578B\u7684\u622A\u53D6\u3001\u5207\u5272\u4E0E\u586B\u5145"},{id:"1-array",title:"1. Array"},{id:"2-string",title:"2. String"}];return(y,B)=>{const c=t("doc-code"),a=t("doc-link"),i=t("doc-page");return d(),r(i,{desc:"",toc:o},{default:l(()=>[_,n(c,{code:`let arr = [1, 2, 3, 4, 5]
`,lang:"javascript"}),s("ol",null,[s("li",null,[g,n(c,{code:`arr.slice(1) // [2, 3, 4, 5]
arr.slice(2, 3) // [3]
arr.slice(-2) // [4, 5]
arr.slice(-3, -2) // [3]
`,lang:"javascript"})]),s("li",null,[p,n(c,{code:`arr.splice(1, 2)
// [2, 3]
// arr => [1, 4, 5]

arr.splice(-3, 2, 7)
// [3, 4]
// arr => [1, 2, 7, 5]   \u53EA\u586B\u5145\u4E00\u6B21

arr.splice(-3, 2, 7, 8)
// [3, 4]
// arr => [1, 2, 7, 8, 5]
`,lang:"javascript"})])]),u,n(c,{code:`let str = 'abcdefg'
`,lang:"javascript"}),s("ol",null,[s("li",null,[h,n(c,{code:`str.slice(1) // 'bcdefg'
str.slice(2, 3) // 'c'
str.slice(-2) // 'fg'
str.slice(-3, -2) // \u2018e\u2019
`,lang:"javascript"})]),s("li",null,[b,n(c,{code:`str.split() // ['abcdefg']
str.split('') // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
str.split('c') // ['ab', 'defg']
`,lang:"javascript"})]),s("li",null,[f,s("ul",null,[k,m,v,s("li",null,[e("\u5982\u679C\u4EFB\u4E00\u53C2\u6570\u5C0F\u4E8E 0 \u6216\u4E3A "),n(a,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"},{default:l(()=>[N]),_:1}),e("\uFF0C\u5219\u88AB\u5F53\u4F5C 0\u3002")]),j,x]),n(c,{code:`str.substring(1) // 'bcdefg'
str.substring(2, 3) // 'c'
str.substring(-2) // 'abcdefg'
str.substring(-3, -2) // \u2019\u2018
`,lang:"javascript"})])])]),_:1})}}};export{E as default};
