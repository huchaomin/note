import{r as t,o as N,c as u,f as o,g as i,a8 as e,v as s}from"./vendor.js";const l=e("h2",{id:"1-\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5",class:"doc-heading"},"\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5",-1),c=e("h2",{id:"2-number-isfinite-number-isnan-",class:"doc-heading"},"Number.isFinite(), Number.isNaN()",-1),b=e("p",null,"Number.isFinite()\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u6570\u503C\u662F\u5426\u4E3A\u6709\u9650\u7684\uFF08finite\uFF09\uFF0C\u5373\u4E0D\u662FInfinity\u3002",-1),m=e("p",null,"Number.isNaN()\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3ANaN",-1),d=e("p",null,"\u5B83\u4EEC\u4E0E\u4F20\u7EDF\u7684\u5168\u5C40\u65B9\u6CD5isFinite()\u548CisNaN()\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u4F20\u7EDF\u65B9\u6CD5\u5148\u8C03\u7528Number()\u5C06\u975E\u6570\u503C\u7684\u503C\u8F6C\u4E3A\u6570\u503C\uFF0C\u518D\u8FDB\u884C\u5224\u65AD",-1),p=e("h2",{id:"3-number-parseint-number-parsefloat-",class:"doc-heading"},"Number.parseInt(), Number.parseFloat()",-1),_=e("p",null,[s("ES6 \u5C06\u5168\u5C40\u65B9\u6CD5parseInt()\u548CparseFloat()\uFF0C\u79FB\u690D\u5230Number\u5BF9\u8C61\u4E0A\u9762\uFF0C\u884C\u4E3A\u5B8C\u5168\u4FDD\u6301\u4E0D\u53D8\u3002"),e("br"),s(" \u76EE\u7684\uFF0C\u662F\u9010\u6B65\u51CF\u5C11\u5168\u5C40\u6027\u65B9\u6CD5\uFF0C\u4F7F\u5F97\u8BED\u8A00\u9010\u6B65\u6A21\u5757\u5316\u3002")],-1),f=e("h2",{id:"4-number-isinteger-",class:"doc-heading"},"Number.isInteger()",-1),g=e("p",null,[s("\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u6570\u503C\u662F\u5426\u4E3A\u6574\u6570\u3002"),e("br"),s(" \u592A\u5927\u592A\u5C0F\u4F1A\u8BEF\u5224")],-1),h=e("h2",{id:"5-number-epsilon",class:"doc-heading"},"Number.EPSILON",-1),I=e("p",null,[s("ES6 \u5728Number\u5BF9\u8C61\u4E0A\u9762\uFF0C\u65B0\u589E\u4E00\u4E2A\u6781\u5C0F\u7684\u5E38\u91CFNumber.EPSILON\u3002"),e("br"),s(" \u6839\u636E\u89C4\u683C\uFF0C\u5B83\u8868\u793A 1 \u4E0E\u5927\u4E8E 1 \u7684\u6700\u5C0F\u6D6E\u70B9\u6570\u4E4B\u95F4\u7684\u5DEE\u3002")],-1),F=e("h2",{id:"6-\u5B89\u5168\u6574\u6570\u548C-number-issafeinteger-",class:"doc-heading"},"\u5B89\u5168\u6574\u6570\u548C Number.isSafeInteger()",-1),v=e("p",null,"\u7565",-1),j=e("h2",{id:"7-\u6307\u6570\u8FD0\u7B97\u7B26",class:"doc-heading"},"\u6307\u6570\u8FD0\u7B97\u7B26",-1),S=e("p",null,"ES2016 \u65B0\u589E\u4E86\u4E00\u4E2A\u6307\u6570\u8FD0\u7B97\u7B26\uFF08**\uFF09\u3002",-1),E=e("p",null,"\u7279\u70B9\u662F\u53F3\u7ED3\u5408\uFF0C\u800C\u4E0D\u662F\u5E38\u89C1\u7684\u5DE6\u7ED3\u5408\u3002\u591A\u4E2A\u6307\u6570\u8FD0\u7B97\u7B26\u8FDE\u7528\u65F6\uFF0C\u662F\u4ECE\u6700\u53F3\u8FB9\u5F00\u59CB\u8BA1\u7B97\u7684\u3002",-1),x=e("p",null,"\u6307\u6570\u8FD0\u7B97\u7B26\u53EF\u4EE5\u4E0E\u7B49\u53F7\u7ED3\u5408\uFF0C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF08**=\uFF09\u3002",-1),V=e("p",null,"V8 \u5F15\u64CE\u7684\u6307\u6570\u8FD0\u7B97\u7B26\u4E0EMath.pow\u7684\u5B9E\u73B0\u4E0D\u76F8\u540C\uFF0C\u5BF9\u4E8E\u7279\u522B\u5927\u7684\u8FD0\u7B97\u7ED3\u679C\uFF0C\u4E24\u8005\u4F1A\u6709\u7EC6\u5FAE\u7684\u5DEE\u5F02\u3002",-1),O={__name:"\u6570\u503C\u7684\u6269\u5C55",setup(w){const r=[{id:"doc-title",title:"\u6570\u503C\u7684\u6269\u5C55"},{id:"1-\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5",title:"1. \u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u8868\u793A\u6CD5"},{id:"2-number-isfinite-number-isnan-",title:"2. Number.isFinite(), Number.isNaN()"},{id:"3-number-parseint-number-parsefloat-",title:"3. Number.parseInt(), Number.parseFloat()"},{id:"4-number-isinteger-",title:"4. Number.isInteger()"},{id:"5-number-epsilon",title:"5. Number.EPSILON"},{id:"6-\u5B89\u5168\u6574\u6570\u548C-number-issafeinteger-",title:"6. \u5B89\u5168\u6574\u6570\u548C Number.isSafeInteger()"},{id:"7-\u6307\u6570\u8FD0\u7B97\u7B26",title:"7. \u6307\u6570\u8FD0\u7B97\u7B26"}];return(y,B)=>{const n=t("doc-code"),a=t("doc-page");return N(),u(a,{desc:"",toc:r},{default:o(()=>[l,i(n,{code:`0b111110111 === 503 // true
0o767 === 503 // true
`,lang:"javascript"}),c,b,i(n,{code:`Number.isFinite(15) // true
Number.isFinite(0.8) // true
Number.isFinite(NaN) // false
Number.isFinite(Infinity) // false
Number.isFinite(-Infinity) // false
Number.isFinite('foo') // false
Number.isFinite('15') // false
Number.isFinite(true) // false
// \u5982\u679C\u53C2\u6570\u7C7B\u578B\u4E0D\u662F\u4E25\u683C\u6570\u503C\uFF0CNumber.isFinite\u4E00\u5F8B\u8FD4\u56DEfalse\u3002
`,lang:"javascript"}),m,i(n,{code:`Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
// \u5982\u679C\u53C2\u6570\u7C7B\u578B\u4E0D\u662FNaN\uFF0CNumber.isNaN\u4E00\u5F8B\u8FD4\u56DEfalse\u3002
`,lang:"javascript"}),d,i(n,{code:`isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false
`,lang:"javascript"}),p,_,i(n,{code:`Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true
`,lang:"javascript"}),f,g,i(n,{code:`Number.isInteger(25) // true
Number.isInteger(0) // true
Number.isInteger(-1) // true
Number.isInteger(25.1) // false
`,lang:"javascript"}),i(n,{code:`Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
// \u5982\u679C\u53C2\u6570\u4E0D\u662F\u6570\u503C\uFF0CNumber.isInteger\u8FD4\u56DEfalse\u3002
`,lang:"javascript"}),h,I,F,v,j,S,i(n,{code:`2 ** 2 // 4
2 ** 3 // 8
`,lang:"javascript"}),E,i(n,{code:`// \u76F8\u5F53\u4E8E 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
`,lang:"javascript"}),x,i(n,{code:`let a = 1.5
a **= 2
// \u7B49\u540C\u4E8E a = a * a

let b = 4
b **= 3
// \u7B49\u540C\u4E8E b = b * b * b
`,lang:"javascript"}),V,i(n,{code:`Math.pow(99, 99)
// 3.697296376497263e+197

99 ** 99
// 3.697296376497268e+197
`,lang:"javascript"})]),_:1})}}};export{O as default};
