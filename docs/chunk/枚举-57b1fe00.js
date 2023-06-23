import{r as s,o as r,c as i,f as b,g as c,aa as e,v as o}from"./vendor-e1827163.js";const l=e("h2",{id:"1-object-entries-",class:"doc-heading"},"Object.entries()",-1),d=e("p",null,[o("\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u952E\u503C\u5BF9\u6570\u7EC4"),e("br"),o(" \u5176\u6392\u5217\u4E0E\u4F7F\u7528 for\u2026in \u5FAA\u73AF\u904D\u5386\u8BE5\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u987A\u5E8F\u4E00\u81F4\uFF08\u533A\u522B\u5728\u4E8E for-in \u5FAA\u73AF\u4E5F\u679A\u4E3E\u539F\u578B\u94FE\u4E2D\u7684\u5C5E\u6027\uFF09")],-1),j=e("h2",{id:"2-object-fromentries-",class:"doc-heading"},"Object.fromEntries()",-1),u=e("p",null,[o("\u628A\u952E\u503C\u5BF9\u5217\u8868\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5BF9\u8C61"),e("br"),o(" Object.fromEntries() \u662F Object.entries \u7684\u53CD\u8F6C\u3002")],-1),_=e("h2",{id:"3-object-keys-",class:"doc-heading"},"Object.keys()",-1),A=e("p",null,[o("\u8FD4\u56DE\u4E00\u4E2A\u7531\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684"),e("strong",null,"\u81EA\u8EAB\u53EF\u679A\u4E3E"),o("\u5C5E\u6027\u540D\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u6570\u7EC4"),e("br"),o(" \u6392\u5217\u987A\u5E8F\u548C\u4F7F\u7528 for\u2026in \u5FAA\u73AF\u904D\u5386\u8BE5\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u987A\u5E8F\u4E00\u81F4")],-1),D=e("h2",{id:"4-object-values-",class:"doc-heading"},"Object.values()",-1),O=e("p",null,[o("\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61"),e("strong",null,"\u81EA\u8EAB\u53EF\u679A\u4E3E"),o("\u5C5E\u6027\u503C\u7684\u6570\u7EC4"),e("br"),o(" \u6392\u5217\u987A\u5E8F\u548C\u4F7F\u7528 for\u2026in \u5FAA\u73AF\u904D\u5386\u8BE5\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u987A\u5E8F\u4E00\u81F4")],-1),B={__name:"\u679A\u4E3E",setup(f){const n=[{id:"doc-title",title:"\u679A\u4E3E"},{id:"1-object-entries-",title:"1. Object.entries()"},{id:"2-object-fromentries-",title:"2. Object.fromEntries()"},{id:"3-object-keys-",title:"3. Object.keys()"},{id:"4-object-values-",title:"4. Object.values()"}];return(h,p)=>{const t=s("doc-code"),a=s("doc-page");return r(),i(a,{desc:"",toc:n},{default:b(()=>[l,d,c(t,{code:"const%20obj%20%3D%20%7B%20foo%3A%20%27bar%27%2C%20baz%3A%2042%20%7D%0Aconsole.log%28Object.entries%28obj%29%29%0A//%20%5B%20%5B%27foo%27%2C%20%27bar%27%5D%2C%20%5B%27baz%27%2C%2042%5D%20%5D%0A%0A//%u7EE7%u627F%u7684%u5C5E%u6027%u4E0D%u80FD%u88AB%u904D%u5386%u51FA%u6765%0Aconst%20myObj%20%3D%20Object.create%28%7B%20getFoo%3A%20%7B%20value%28%29%20%7B%20return%20this.foo%20%7D%7D%7D%29%0AmyObj.foo%20%3D%20%27bar%27%0Aconsole.log%28Object.entries%28myObj%29%29%20//%20%5B%20%5B%27foo%27%2C%20%27bar%27%5D%20%5D%0A",lang:"javascript"}),j,u,_,A,c(t,{code:"var%20anObj%20%3D%20%7B%20100%3A%20%27a%27%2C%202%3A%20%27b%27%2C%207%3A%20%27c%27%20%7D%0Aconsole.log%28Object.keys%28anObj%29%29%20//%20%5B%272%27%2C%20%277%27%2C%20%27100%27%5D%0A",lang:"javascript"}),D,O,c(t,{code:"var%20an_obj%20%3D%20%7B%20100%3A%20%27a%27%2C%202%3A%20%27b%27%2C%207%3A%20%27c%27%20%7D%0Aconsole.log%28Object.values%28an_obj%29%29%20//%20%5B%27b%27%2C%20%27c%27%2C%20%27a%27%5D%28%u6839%u636Ekey%u6765%29%0A",lang:"javascript"})]),_:1})}}};export{B as default};
