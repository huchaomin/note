import{r as e,o as d,c as s,f as a,g as n,a8 as t}from"./vendor.js";const r=t("h2",{id:"1-\u5B57\u7B26\u7684-unicode-\u8868\u793A\u6CD5",class:"doc-heading"},"\u5B57\u7B26\u7684 Unicode \u8868\u793A\u6CD5",-1),l=t("p",null,"\u7528{}\u62EC\u4E0A\u8D85\u8FC70xFFFF\u7684\u6570\u503C\uFF0C\u5C31\u80FD\u6B63\u786E\u89E3\u8BFB\u8BE5\u5B57\u7B26\u3002",-1),_=t("p",null,"\u6709\u4E86\u8FD9\u79CD\u8868\u793A\u6CD5\u4E4B\u540E\uFF0CJavaScript \u5171\u6709 6 \u79CD\u65B9\u6CD5\u53EF\u4EE5\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u3002",-1),p=t("h2",{id:"2-codepointat-",class:"doc-heading"},"codePointAt()",-1),u=t("p",null,"\u80FD\u591F\u6B63\u786E\u5904\u7406 4 \u4E2A\u5B57\u8282\u50A8\u5B58\u7684\u5B57\u7B26\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u7684\u7801\u70B9\u7684\u5341\u8FDB\u5236\u503C\u3002",-1),g=t("p",null,"\u5982\u679C\u60F3\u8981\u5341\u516D\u8FDB\u5236\u7684\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528toString\u65B9\u6CD5\u8F6C\u6362\u4E00\u4E0B\u3002",-1),h=t("p",null,"codePointAt\u65B9\u6CD5\u662F\u6D4B\u8BD5\u4E00\u4E2A\u5B57\u7B26\u7531\u4E24\u4E2A\u5B57\u8282\u8FD8\u662F\u7531\u56DB\u4E2A\u5B57\u8282\u7EC4\u6210\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u3002",-1),B=t("h2",{id:"3-string-fromcodepoint-",class:"doc-heading"},"String.fromCodePoint()",-1),f=t("p",null,"ES5 \u63D0\u4F9BString.fromCharCode\u65B9\u6CD5\uFF0C\u7528\u4E8E\u4ECE\u7801\u70B9\u8FD4\u56DE\u5BF9\u5E94\u5B57\u7B26\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u80FD\u8BC6\u522B 32 \u4F4D\u7684 UTF-16 \u5B57\u7B26\uFF08Unicode \u7F16\u53F7\u5927\u4E8E0xFFFF\uFF09",-1),S={__name:"\u5B57\u7B26\u4E32\u7684\u6269\u5C551",setup(m){const c=[{id:"doc-title",title:"\u5B57\u7B26\u4E32\u7684\u6269\u5C55"},{id:"1-\u5B57\u7B26\u7684-unicode-\u8868\u793A\u6CD5",title:"1. \u5B57\u7B26\u7684 Unicode \u8868\u793A\u6CD5"},{id:"2-codepointat-",title:"2. codePointAt()"},{id:"3-string-fromcodepoint-",title:"3. String.fromCodePoint()"}];return(F,A)=>{const o=e("doc-code"),i=e("doc-page");return d(),s(i,{desc:"",toc:c},{default:a(()=>[r,l,n(o,{code:`"\\u20BB7"
// '\u20BB7'
//JavaScript \u4F1A\u7406\u89E3\u6210\\u20BB+7
"\\u{20BB7}"
// "\u{20BB7}"
`,lang:"javascript"}),_,n(o,{code:`'\\z' === 'z'  // true
'\\172' === 'z' // true
'\\x7A' === 'z' // true
'\\u007A' === 'z' // true
'\\u{7A}' === 'z' // true
`,lang:"javascript"}),p,u,n(o,{code:`let s = '\u{20BB7}a'
s.codePointAt(0) // 134071
s.codePointAt(1) // 57271
s.codePointAt(2) // 97
`,lang:"javascript"}),g,n(o,{code:`let s = '\u{20BB7}a'
s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"
`,lang:"javascript"}),h,n(o,{code:`function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF
}
is32Bit("\u{20BB7}") // true
is32Bit("a") // false
`,lang:"javascript"}),B,f,n(o,{code:`String.fromCharCode(0x20BB7)
// "\u0BB7"
String.fromCodePoint(0x20BB7)
// "\u{20BB7}"
`,lang:"javascript"})]),_:1})}}};export{S as default};
