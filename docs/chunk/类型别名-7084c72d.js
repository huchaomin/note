import{r as o,o as r,c as A,f as l,g as n,aa as e}from"./vendor-e1827163.js";const c=e("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),i=e("ul",null,[e("li",null,"\u7C7B\u578B\u522B\u540D\u4F1A\u7ED9\u4E00\u4E2A\u7C7B\u578B\u8D77\u4E2A\u65B0\u540D\u5B57\u3002 \u7C7B\u578B\u522B\u540D\u6709\u65F6\u548C\u63A5\u53E3\u5F88\u50CF\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F5C\u7528\u4E8E\u539F\u59CB\u503C\uFF0C\u8054\u5408\u7C7B\u578B\uFF0C\u5143\u7EC4\u4EE5\u53CA\u5176\u5B83\u4EFB\u4F55\u4F60\u9700\u8981\u624B\u5199\u7684\u7C7B\u578B"),e("li",null,"\u522B\u540D\u4E0D\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5B83\u53EA\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u540D\u5B57\u6765\u5F15\u7528\u90A3\u4E2A\u7C7B\u578B"),e("li",null,"\u7ED9\u539F\u59CB\u7C7B\u578B\u8D77\u522B\u540D\u901A\u5E38\u6CA1\u4EC0\u4E48\u7528\uFF0C\u5C3D\u7BA1\u53EF\u4EE5\u505A\u4E3A\u6587\u6863\u7684\u4E00\u79CD\u5F62\u5F0F\u4F7F\u7528\u3002")],-1),p=e("p",null,"\u4E0E\u4EA4\u53C9\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528",-1),B=e("p",null,"\u7C7B\u578B\u522B\u540D\u4E0D\u80FD\u51FA\u73B0\u5728\u58F0\u660E\u53F3\u4FA7\u7684\u4EFB\u4F55\u5730\u65B9",-1),m={__name:"\u7C7B\u578B\u522B\u540D",setup(d){const s=[{id:"doc-title",title:"\u7C7B\u578B\u522B\u540D(Type Aliases)"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"}];return(D,u)=>{const t=o("doc-code"),a=o("doc-page");return r(),A(a,{desc:"",toc:s},{default:l(()=>[c,i,n(t,{code:"type%20Name%20%3D%20string%3B%0Atype%20NameResolver%20%3D%20%28%29%20%3D%3E%20string%3B%0Atype%20NameOrResolver%20%3D%20Name%20%7C%20NameResolver%3B%0Afunction%20getName%28n%3A%20NameOrResolver%29%3A%20Name%20%7B%0A%20%20if%20%28typeof%20n%20%3D%3D%3D%20%27string%27%29%20%7B%0A%20%20%20%20return%20n%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20return%20n%28%29%3B%0A%20%20%7D%0A%7D%0A%0A//%20%u6CDB%u578B%0Atype%20Container%3CT%3E%20%3D%20%7B%20value%3A%20T%20%7D%3B%0A%0A//%20%u5F15%u7528%u81EA%u5DF1%0Atype%20Tree%3CT%3E%20%3D%20%7B%0A%20%20value%3A%20T%3B%0A%20%20left%3A%20Tree%3CT%3E%3B%0A%20%20right%3A%20Tree%3CT%3E%3B%0A%7D%0A",lang:"ts"}),p,n(t,{code:"type%20LinkedList%3CT%3E%20%3D%20T%20%26%20%7B%20next%3A%20LinkedList%3CT%3E%20%7D%3B%0A%0Ainterface%20Person%20%7B%0A%20%20name%3A%20string%3B%0A%7D%0A%0Avar%20people%3A%20LinkedList%3CPerson%3E%3B%0Avar%20s%20%3D%20people.name%3B%0Avar%20s%20%3D%20people.next.name%3B%0Avar%20s%20%3D%20people.next.next.name%3B%0Avar%20s%20%3D%20people.next.next.next.name%3B%0A",lang:"ts"}),B,n(t,{code:"type%20Yikes%20%3D%20Array%3CYikes%3E%3B%20//%20error%0A",lang:"ts"})]),_:1})}}};export{m as default};
