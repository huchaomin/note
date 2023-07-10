import{n as l,o as d,p as r,w as o,a as c,i as s,f as e}from"./vendor-a2411ed8.js";const _=s("h2",{id:"1-array",class:"doc-heading"},"Array",-1),u=s("p",null,"slice \u590D\u5236\u4E00\u6BB5\u51FA\u6765\u7528 (\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4)",-1),C=s("p",null,"splice \u91CD\u65B0\u62FC\u63A5\u7EC4\u88C5\u539F\u6765\u7684\u6570\u7EC4 (\u4F1A\u6539\u53D8\u539F\u6570\u7EC4)",-1),g=s("h2",{id:"2-string",class:"doc-heading"},"String",-1),p=s("p",null,"slice \u590D\u5236\u4E00\u6BB5\u51FA\u6765\u7528 (\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),A=s("p",null,"split \u5207\u5272\u6210\u6570\u7EC4 (\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),h=s("p",null,"substring(\u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32)",-1),B=s("li",null,"\u6B63\u5E38\u60C5\u51B5\u4E0Esilce\u76F8\u540C",-1),D=s("li",null,[e("\u5982\u679C "),s("code",{class:"doc-token"},"indexStart"),e(" \u7B49\u4E8E "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C"),s("code",{class:"doc-token"},"substring"),e(" \u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u3002")],-1),b=s("li",null,[e("\u5982\u679C\u7701\u7565 "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C"),s("code",{class:"doc-token"},"substring"),e(" \u63D0\u53D6\u5B57\u7B26\u4E00\u76F4\u5230\u5B57\u7B26\u4E32\u672B\u5C3E\u3002")],-1),f=s("code",{class:"doc-token"},"NaN",-1),k=s("li",null,[e("\u5982\u679C\u4EFB\u4E00\u53C2\u6570\u5927\u4E8E "),s("code",{class:"doc-token"},"stringName.length"),e("\uFF0C\u5219\u88AB\u5F53\u4F5C "),s("code",{class:"doc-token"},"stringName.length"),e("\u3002")],-1),m=s("li",null,[e("\u5982\u679C "),s("code",{class:"doc-token"},"indexStart"),e(" \u5927\u4E8E "),s("code",{class:"doc-token"},"indexEnd"),e("\uFF0C\u5219 "),s("code",{class:"doc-token"},"substring"),e(" \u7684\u6267\u884C\u6548\u679C\u5C31\u50CF\u4E24\u4E2A\u53C2\u6570\u8C03\u6362\u4E86\u4E00\u6837")],-1),E={__name:"\u622A\u53D6\u3001\u5207\u5272\u4E0E\u586B\u5145",setup(v){const n=[{id:"doc-title",title:"js \u6570\u636E\u7C7B\u578B\u7684\u622A\u53D6\u3001\u5207\u5272\u4E0E\u586B\u5145"},{id:"1-array",title:"1. Array"},{id:"2-string",title:"2. String"}];return(N,j)=>{const t=l("doc-code"),a=l("doc-link"),i=l("doc-page");return d(),r(i,{desc:"",toc:n},{default:o(()=>[_,c(t,{code:"let%20arr%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A",lang:"javascript"}),s("ol",null,[s("li",null,[u,c(t,{code:"arr.slice%281%29%20//%20%5B2%2C%203%2C%204%2C%205%5D%0Aarr.slice%282%2C%203%29%20//%20%5B3%5D%0Aarr.slice%28-2%29%20//%20%5B4%2C%205%5D%0Aarr.slice%28-3%2C%20-2%29%20//%20%5B3%5D%0A",lang:"javascript"})]),s("li",null,[C,c(t,{code:"arr.splice%281%2C%202%29%0A//%20%5B2%2C%203%5D%0A//%20arr%20%3D%3E%20%5B1%2C%204%2C%205%5D%0A%0Aarr.splice%28-3%2C%202%2C%207%29%0A//%20%5B3%2C%204%5D%0A//%20arr%20%3D%3E%20%5B1%2C%202%2C%207%2C%205%5D%20%20%20%u53EA%u586B%u5145%u4E00%u6B21%0A%0Aarr.splice%28-3%2C%202%2C%207%2C%208%29%0A//%20%5B3%2C%204%5D%0A//%20arr%20%3D%3E%20%5B1%2C%202%2C%207%2C%208%2C%205%5D%0A",lang:"javascript"})])]),g,c(t,{code:"let%20str%20%3D%20%27abcdefg%27%0A",lang:"javascript"}),s("ol",null,[s("li",null,[p,c(t,{code:"str.slice%281%29%20//%20%27bcdefg%27%0Astr.slice%282%2C%203%29%20//%20%27c%27%0Astr.slice%28-2%29%20//%20%27fg%27%0Astr.slice%28-3%2C%20-2%29%20//%20%u2018e%u2019%0A",lang:"javascript"})]),s("li",null,[A,c(t,{code:"str.split%28%29%20//%20%5B%27abcdefg%27%5D%0Astr.split%28%27%27%29%20//%20%5B%27a%27%2C%20%27b%27%2C%20%27c%27%2C%20%27d%27%2C%20%27e%27%2C%20%27f%27%2C%20%27g%27%5D%0Astr.split%28%27c%27%29%20//%20%5B%27ab%27%2C%20%27defg%27%5D%0A",lang:"javascript"})]),s("li",null,[h,s("ul",null,[B,D,b,s("li",null,[e("\u5982\u679C\u4EFB\u4E00\u53C2\u6570\u5C0F\u4E8E 0 \u6216\u4E3A "),c(a,{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"},{default:o(()=>[f]),_:1}),e("\uFF0C\u5219\u88AB\u5F53\u4F5C 0\u3002")]),k,m]),c(t,{code:"str.substring%281%29%20//%20%27bcdefg%27%0Astr.substring%282%2C%203%29%20//%20%27c%27%0Astr.substring%28-2%29%20//%20%27abcdefg%27%0Astr.substring%28-3%2C%20-2%29%20//%20%u2019%u2018%0A",lang:"javascript"})])])]),_:1})}}};export{E as default};
