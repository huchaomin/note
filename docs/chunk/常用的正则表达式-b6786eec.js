import{r as c,o as d,c as i,f as s,a8 as e,g as t,v as o}from"./vendor-5a734afa.js";const r=e("ul",null,[e("li",null,[o("\u96F6\u548C\u975E\u96F6\u5F00\u5934\u7684\u6570\u5B57: "),e("code",{class:"doc-token"},"^(0|[1-9]\\d*)$")]),e("li",null,[o("\u6700\u591A\u5E26\u4E24\u4F4D\u5C0F\u6570\u7684\u6570\u5B57: "),e("code",{class:"doc-token"},"^(0|[1-9]\\d*)(\\.\\d{1,2})?$")]),e("li",null,[o("\u5F3A\u5BC6\u7801(\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\u7684\u7EC4\u5408\uFF0C\u4E0D\u80FD\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u57288-10\u4E4B\u95F4): "),e("code",{class:"doc-token"},"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$")]),e("li",null,[o("\u7A7A\u767D\u884C: "),e("code",{class:"doc-token"},"\\n\\s*\\r")]),e("li",null,[o("\u9996\u5C3E\u7A7A\u767D\u5B57\u7B26: "),e("code",{class:"doc-token"},"^\\s*|\\s*$\u6216(^\\s*)|(\\s*$)")])],-1),_=e("h2",{id:"1-\u5339\u914D\u6C49\u5B57",class:"doc-heading"},"\u5339\u914D\u6C49\u5B57",-1),p=e("ul",null,[e("li",null,[o("99\u5E74\u4E4B\u524D\uFF1A"),e("code",{class:"doc-token"},"[\\u4E00-\\u9FA5]")])],-1),h=e("ul",null,[e("li",null,[o("\u73B0\u4EE3\u5168\u9762\u7684\uFF1A"),e("code",{class:"doc-token"},"/\\p{Unified_Ideograph}/u")])],-1),m={__name:"\u5E38\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F",setup(A){const u=[{id:"doc-title",title:"\u5E38\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F"},{id:"1-\u5339\u914D\u6C49\u5B57",title:"1. \u5339\u914D\u6C49\u5B57"}];return(g,F)=>{const l=c("doc-link"),n=c("doc-code"),a=c("doc-page");return d(),i(a,{desc:"",toc:u},{default:s(()=>[r,_,e("p",null,[t(l,{to:"https://zhuanlan.zhihu.com/p/33335629"},{default:s(()=>[o("\u53C2\u8003\u77E5\u4E4E")]),_:1})]),p,t(n,{code:`/^[\\u4E00-\\u9FA5]$/.test('\u6211') // true
/^[\\u4E00-\\u9FA5]$/.test('\u9FCF') // false  [1999\u5E74\u540E\u52A0\u5165\u7684\u6C49\u5B57\uFF0C109 \u53F7\u5316\u5B66\u5143\u7D20]
`,lang:"javascript"}),h,t(n,{code:`const reg = /\\p{Unified_Ideograph}/u
reg.test('\u6211') // true
reg.test('\u9FCF') // true
`,lang:"javascript"}),e("ul",null,[e("li",null,[o("\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u652F\u6301\uFF1AChrome 64 \u4EE5\u4E0A, Safari 11.1 \u4EE5\u4E0A\u90FD"),t(l,{to:"https://link.zhihu.com/?target=https%3A//caniuse.com/%23feat%3Dmdn-javascript_builtins_regexp_property_escapes"},{default:s(()=>[o("\u652F\u6301")]),_:1}),o("\u6B63\u5219\u8868\u8FBE\u5F0F Unicode \u5C5E\u6027\u8F6C\u4E49")])]),t(n,{code:`// \u5BF9\u4E8E\u4E0D\u652F\u6301\u7684
{
  "presets": ["@babel/env"] //  Babel 7.7.0\u53CA\u4EE5\u4E0A\u7248\u672C
}
...
const regex = /\\p{Unified_Ideograph}/u
// transpiled to ES6:
const regex = /[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6D6}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}]/u
`,lang:"javascript"})]),_:1})}}};export{m as default};
