import{r as a,o as d,c as r,f as l,g as n,ac as t,v as e}from"./vendor.js";const _=t("h2",{id:"1-\u5177\u540D\u7EC4\u5339\u914D",class:"doc-heading"},"\u5177\u540D\u7EC4\u5339\u914D",-1),i=t("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u5706\u62EC\u53F7\u8FDB\u884C\u7EC4\u5339\u914D\u3002",-1),p=t("p",null,"\u4F7F\u7528exec\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5C06\u8FD9\u4E09\u7EC4\u5339\u914D\u7ED3\u679C\u63D0\u53D6\u51FA\u6765\u3002",-1),h=t("p",null,"ES2018 \u5F15\u5165\u4E86\u5177\u540D\u7EC4\u5339\u914D\uFF08Named Capture Groups\uFF09\uFF0C\u5141\u8BB8\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u5339\u914D\u6307\u5B9A\u4E00\u4E2A\u540D\u5B57\uFF0C\u65E2\u4FBF\u4E8E\u9605\u8BFB\u4EE3\u7801\uFF0C\u53C8\u4FBF\u4E8E\u5F15\u7528\u3002",-1),u=t("ul",null,[t("li",null,"\u6DFB\u52A0id\u7684\u65B9\u5F0F\u4E3A\u5728\u5706\u62EC\u53F7\u5185\u90E8\uFF0C\u6A21\u5F0F\u7684\u5934\u90E8\u6DFB\u52A0\u201C\u95EE\u53F7 + \u5C16\u62EC\u53F7 + \u7EC4\u540D\u201D\uFF08?<year>\uFF09"),t("li",null,"\u6570\u5B57\u5E8F\u53F7\uFF08matchObj[1]\uFF09\u4F9D\u7136\u6709\u6548"),t("li",null,[e("\u6CA1\u6709\u5339\u914D\u5230\u7684id\u5219\u8FD4\u56DEundefined"),t("br"),e(" \u4F8B\u5B50")])],-1),m=t("p",null,"\u5177\u540D\u7EC4\u5339\u914D\u5728\u539F\u6765\u7684\u57FA\u7840\u4E0A\uFF0C\u65B0\u589E\u4E86\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u53C2\u6570(groups)\uFF1A\u5177\u540D\u7EC4\u6784\u6210\u7684\u4E00\u4E2A\u5BF9\u8C61\u3002\u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u76F4\u63A5\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\u3002",-1),b=t("h2",{id:"2-\u5177\u540D\u7EC4\u5339\u914D\u5F15\u7528",class:"doc-heading"},"\u5177\u540D\u7EC4\u5339\u914D\u5F15\u7528",-1),E=t("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0F\u5185\u90E8\u5F15\u7528\u67D0\u4E2A\u201C\u5177\u540D\u7EC4\u5339\u914D\u201D\uFF0C\u53EF\u4EE5\u4F7F\u7528\\k<\u7EC4\u540D>\u7684\u5199\u6CD5\u3002",-1),g=t("p",null,"\u6570\u5B57\u5F15\u7528\uFF08\\1\uFF09\u4F9D\u7136\u6709\u6548\u3002",-1),y=t("p",null,"\u540C\u65F6\u4F7F\u7528",-1),j=t("h2",{id:"3-string-prototype-matchall",class:"doc-heading"},"String.prototype.matchAll",-1),T=t("p",null,"\u4E00\u6B21\u6027\u53D6\u51FA\u6240\u6709\u5339\u914D\u3002\u4E0D\u8FC7\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u904D\u5386\u5668\uFF08Iterator\uFF09\uFF0C\u800C\u4E0D\u662F\u6570\u7EC4\u3002",-1),I={__name:"\u6B63\u5219\u7684\u62D3\u5C552",setup(R){const c=[{id:"doc-title",title:"\u6B63\u5219\u7684\u62D3\u5C55"},{id:"1-\u5177\u540D\u7EC4\u5339\u914D",title:"1. \u5177\u540D\u7EC4\u5339\u914D"},{id:"2-\u5177\u540D\u7EC4\u5339\u914D\u5F15\u7528",title:"2. \u5177\u540D\u7EC4\u5339\u914D\u5F15\u7528"},{id:"3-string-prototype-matchall",title:"3. String.prototype.matchAll"}];return(C,f)=>{const o=a("doc-code"),s=a("doc-page");return d(),r(s,{desc:"",toc:c},{default:l(()=>[_,i,n(o,{code:`const RE_DATE = /(\\d{4})-(\\d{2})-(\\d{2})/
`,lang:"javascript"}),p,n(o,{code:`const matchObj = RE_DATE.exec('1999-12-31')
const year = matchObj[1] // 1999
const month = matchObj[2] // 12
const day = matchObj[3] // 31
//\u6B64\u65F6\u5B57\u7B26\u7A9C\u5E74\u6708\u65E5\u5982\u679C\u98A0\u5012\u4E86matchObj\u540E\u9762\u5E8F\u53F7\u4E5F\u8981\u4FEE\u6539
`,lang:"javascript"}),h,n(o,{code:`const RE_DATE = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/
const matchObj = RE_DATE.exec('1999-12-31')
const year = matchObj.groups.year // 1999
const month = matchObj.groups.month // 12
const day = matchObj.groups.day // 31
`,lang:"javascript"}),u,n(o,{code:`let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar')
one  // foo
two  // bar
`,lang:"javascript"}),n(o,{code:`let re = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/u
'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'
`,lang:"javascript"}),n(o,{code:`'2015-01-02'.replace(re, (
   matched, // \u6574\u4E2A\u5339\u914D\u7ED3\u679C 2015-01-02
   capture1, // \u7B2C\u4E00\u4E2A\u7EC4\u5339\u914D 2015
   capture2, // \u7B2C\u4E8C\u4E2A\u7EC4\u5339\u914D 01
   capture3, // \u7B2C\u4E09\u4E2A\u7EC4\u5339\u914D 02
   position, // \u5339\u914D\u5F00\u59CB\u7684\u4F4D\u7F6E 0
   S, // \u539F\u5B57\u7B26\u4E32 2015-01-02
   groups // \u5177\u540D\u7EC4\u6784\u6210\u7684\u4E00\u4E2A\u5BF9\u8C61 {year, month, day}
 ) => {
 let {day, month, year} = groups
 return \`\${day}/\${month}/\${year}\`
})
`,lang:"javascript"}),m,b,E,n(o,{code:`const RE_TWICE = /^(?<word>[a-z]+)!\\k<word>$/
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
`,lang:"javascript"}),g,n(o,{code:`const RE_TWICE = /^(?<word>[a-z]+)!\\1$/
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
`,lang:"javascript"}),y,n(o,{code:`const RE_TWICE = /^(?<word>[a-z]+)!\\k<word>!\\1$/
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false
`,lang:"javascript"}),j,T]),_:1})}}};export{I as default};
