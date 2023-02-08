import{r as a,o as s,c as i,f as c,a9 as t,g as e}from"./vendor-585b19a3.js";const p={id:"1-string-prototype-search-",class:"doc-heading"},d=t("code",{class:"doc-token"},"String.prototype.search()",-1),g=t("ul",null,[t("li",null,"\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u7684\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u4F4D\u7F6E\u7D22\u5F15\u3002\u5426\u5219\u5C06\u8FD4\u56DE-1"),t("li",null,"\u4E0D\u6267\u884C\u5168\u5C40\u5339\u914D\uFF0C\u5B83\u5C06\u5FFD\u7565\u4FEE\u9970\u7B26g\uFF0C\u5E76\u4E14\u603B\u662F\u4ECE\u5B57\u7B26\u4E32\u7684\u5F00\u59CB\u8FDB\u884C\u68C0\u7D22")],-1),_={id:"2-string-prototype-split-",class:"doc-heading"},h=t("code",{class:"doc-token"},"String.prototype.split()",-1),u=t("ul",null,[t("li",null,"\u65B9\u6CD5\u5207\u5272 String \u5BF9\u8C61\u4E3A\u4E00\u4E2A\u5176\u5B50\u5B57\u7B26\u4E32\u7684\u6570\u7EC4")],-1),b={id:"3-string-prototype-match-",class:"doc-heading"},m=t("code",{class:"doc-token"},"String.prototype.match()",-1),S=t("ul",null,[t("li",null,"\u8FD4\u56DE\u6574\u4E2A\u5339\u914D\u7ED3\u679C(\u6709g)\uFF0C\u548C\u901A\u8FC7\u6355\u83B7\u7EC4\u5339\u914D\u5230\u7684\u7ED3\u679C\u7EC4\u6210\u7684\u6570\u7EC4(\u6CA1\u6709g)\uFF0C\u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\u5219\u8FD4\u56DEnull")],-1),y={id:"4-string-prototype-matchall-",class:"doc-heading"},v=t("code",{class:"doc-token"},"String.prototype.matchAll()",-1),f=t("ul",null,[t("li",null,"\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6240\u6709\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u53CA\u5206\u7EC4\u6355\u83B7\u7EC4\u7684\u8FED\u4EE3\u5668"),t("li",null,"\u5FC5\u987B\u662F\u8BBE\u7F6E\u4E86\u5168\u5C40\u6A21\u5F0F g \u7684\u5F62\u5F0F,\u5426\u5219\u4F1A\u629B\u51FA\u5F02\u5E38 TypeError")],-1),A={id:"5-string-prototype-replace-",class:"doc-heading"},j=t("code",{class:"doc-token"},"String.prototype.replace()",-1),$=t("ul",null,[t("li",null,"\u8FD4\u56DE\u7528\u66FF\u6362\u5668\u66FF\u6362\u76F8\u5E94\u5339\u914D\u9879\u540E\u7684\u65B0\u5B57\u7B26\u4E32")],-1),C={__name:"\u4E0EString\u76F8\u5173",setup(z){const l=[{id:"doc-title",title:"String \u91CC RegExp \u5B9E\u4F8B\u7684\u5E94\u7528"},{id:"1-string-prototype-search-",title:"1. String.prototype.search()"},{id:"2-string-prototype-split-",title:"2. String.prototype.split()"},{id:"3-string-prototype-match-",title:"3. String.prototype.match()"},{id:"4-string-prototype-matchall-",title:"4. String.prototype.matchAll()"},{id:"5-string-prototype-replace-",title:"5. String.prototype.replace()"}];return(k,x)=>{const n=a("doc-link"),o=a("doc-code"),r=a("doc-page");return s(),i(r,{desc:"",toc:l},{default:c(()=>[t("h2",p,[e(n,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search"},{default:c(()=>[d]),_:1})]),g,e(o,{code:`'abc'.search(/a/) // 0
/a/[Symbol.search]('abc') // 0
`,lang:"javascript"}),t("h2",_,[e(n,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split"},{default:c(()=>[h]),_:1})]),u,e(o,{code:`'a-b-c'.split(/-/) // ["a", "b", "c"]
/-/[Symbol.split]('a-b-c') // ["a", "b", "c"]
`,lang:"javascript"}),t("h2",b,[e(n,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match"},{default:c(()=>[m]),_:1})]),S,e(o,{code:`'abc'.match(/a/g) // ["a"]\u3010\u6709g\u3011

/a/[Symbol.match]('abc') // \u3010\u65E0g\u3011
// 0: "a"
// groups: undefined
// index: 0
// input: "abc"
// length: 1
// __proto__: Array(0)
`,lang:"javascript"}),t("h2",y,[e(n,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"},{default:c(()=>[v]),_:1})]),f,e(o,{code:`'abca'.matchAll(/a/g) // RegExpStringIterator\xA0{}
/a/[Symbol.matchAll]('abc') // RegExpStringIterator\xA0{}
`,lang:"javascript"}),t("h2",A,[e(n,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace"},{default:c(()=>[j]),_:1})]),$,e(o,{code:`'abca'.replace(/a/g, 'A') // 'AbcA'
/a/[Symbol.replace]('abc', 'A') // 'Abc'
`,lang:"javascript"}),e(o,{code:`function validateMobile (str) {
  return /^[1][0-9]{10}$/.test(str) && str.replace(/(\\d{3})(\\d{4})(\\d{4})/, function (rs, $1, $2, $3) {
    console.log(arguments)
    return \`\${ $1 }****\${ $3 }\`
  })
  // return /^[1][0-9]{10}$/.test(str) && str.replace(/(\\d{3})(\\d{4})(\\d{4})/, '$1****$2') // \u8FD9\u91CC\u81EA\u5E26\u5B57\u7B26\u7A9C\u66FF\u6362
}
console.log(validateMobile('13590199192'))
// [Arguments] {
//   '0': '13590199192',
//   '1': '135',
//   '2': '9019',
//   '3': '9192',
//   '4': 0, // index
//   '5': '13590199192' // input
// }
// 135****9192
`,lang:"javascript"})]),_:1})}}};export{C as default};
