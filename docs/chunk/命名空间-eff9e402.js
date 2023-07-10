import{n as o,o as c,p as d,w as l,i as e,f as s,a as t}from"./vendor-a2411ed8.js";const A=e("h2",{id:"1-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),B=e("p",null,"\u547D\u540D\u7A7A\u95F4\u662F\u4F4D\u4E8E\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u4E00\u4E2A\u666E\u901A\u7684\u5E26\u6709\u540D\u5B57\u7684JavaScript\u5BF9\u8C61",-1),p=e("h2",{id:"2-declare-module-vs-declare-namespace",class:"doc-heading"},[e("code",{class:"doc-token"},"declare module"),s(" vs "),e("code",{class:"doc-token"},"declare namespace")],-1),D=e("p",null,"\u5728ts\u91CC\u9762\u6709\u4E24\u79CD\u65B9\u6CD5\u5B9A\u4E49module",-1),m=e("blockquote",{class:"doc-note"},[e("p",null,"It\u2019s important to note that in TypeScript 1.5, the nomenclature has changed. \u201CInternal modules\u201D are now \u201Cnamespaces\u201D. \u201CExternal modules\u201D are now simply \u201Cmodules\u201D")],-1),g=e("p",null,"\u6240\u4EE5\u73B0\u5728\u81EA\u5B9A\u4E49\u5185\u90E8\u6A21\u5757\u8981\u6539\u5199\u4E3A",-1),h=e("h2",{id:"3-\u6CA1\u6709\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",class:"doc-heading"},"\u6CA1\u6709\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",-1),u=e("p",null,"\u6B64\u65F6\u5728\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u5BB9\u6613\u4E0E\u5176\u4ED6\u5BF9\u8C61\u4EA7\u751F\u547D\u540D\u51B2\u7A81",-1),_=e("h2",{id:"4-\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",class:"doc-heading"},"\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",-1),V=e("h2",{id:"5-\u5206\u5272\u547D\u540D\u7A7A\u95F4",class:"doc-heading"},"\u5206\u5272\u547D\u540D\u7A7A\u95F4",-1),f=e("p",null,[s("\u5F53\u5E94\u7528\u53D8\u5F97\u8D8A\u6765\u8D8A\u5927\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u4EE3\u7801\u5206\u79BB\u5230\u4E0D\u540C\u7684\u6587\u4EF6\u4E2D\u4EE5\u4FBF\u4E8E\u7EF4\u62A4\u3002"),e("br"),e("strong",null,"\u5C3D\u7BA1\u662F\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u5B83\u4EEC\u4ECD\u662F\u540C\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4")],-1),v=e("p",null,"Validation.ts",-1),b=e("p",null,"LettersOnlyValidator.ts",-1),x=e("p",null,"ZipCodeValidator.ts",-1),S=e("p",null,"Test.ts",-1),w=e("h2",{id:"6-\u522B\u540D",class:"doc-heading"},"\u522B\u540D",-1),y=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[s("\u6211\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528require\u5173\u952E\u5B57\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528\u5BFC\u5165\u7B26\u53F7\u7684\u9650\u5B9A\u540D\u8D4B\u503C\u3002"),e("br"),s(" \u8FD9\u4E0E\u4F7F\u7528 var\u76F8\u4F3C\uFF0C\u4F46\u5B83\u8FD8\u9002\u7528\u4E8E\u7C7B\u578B\u548C\u5BFC\u5165\u7684\u5177\u6709\u547D\u540D\u7A7A\u95F4\u542B\u4E49\u7684\u7B26\u53F7\u3002"),e("br"),s(" \u91CD\u8981\u7684\u662F\uFF0C\u5BF9\u4E8E\u503C\u6765\u8BB2\uFF0C import\u4F1A\u751F\u6210\u4E0E\u539F\u59CB\u7B26\u53F7\u4E0D\u540C\u7684\u5F15\u7528\uFF0C\u6240\u4EE5\u6539\u53D8\u522B\u540D\u7684var\u503C(polygons)\u5E76\u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u53D8\u91CF\u7684\u503C\u3002")])],-1),C=e("h2",{id:"7-\u4F7F\u7528\u5916\u90E8\u547D\u540D\u7A7A\u95F4\uFF0C\u5B9A\u4E49\u5176\u4ED6js\u5E93\u7C7B\u578B",class:"doc-heading"},"\u4F7F\u7528\u5916\u90E8\u547D\u540D\u7A7A\u95F4\uFF0C\u5B9A\u4E49\u5176\u4ED6js\u5E93\u7C7B\u578B",-1),E=e("p",null,[s("\u4F8B\u5982\uFF1A \u6D41\u884C\u7684\u7A0B\u5E8F\u5E93D3\u5728\u5168\u5C40\u5BF9\u8C61d3\u91CC\u5B9A\u4E49\u5B83\u7684\u529F\u80FD"),e("br"),s(" \u56E0\u4E3A\u8FD9\u4E2A\u5E93\u901A\u8FC7\u4E00\u4E2A "),e("code",{class:"doc-token"},"<script>"),s(" \u6807\u7B7E\u52A0\u8F7D\uFF08\u4E0D\u662F\u901A\u8FC7\u6A21\u5757\u52A0\u8F7D\u5668\uFF09,\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u5F53\u4F5C\u81EA\u5DF1\u5199\u7684\u4E00\u4E2A\u5185\u90E8\u6A21\u5757"),e("br"),s(" \u6240\u4EE5")],-1),q={__name:"\u547D\u540D\u7A7A\u95F4",setup(Z){const n=[{id:"doc-title",title:"\u547D\u540D\u7A7A\u95F4(Namespace)"},{id:"1-\u5B9A\u4E49",title:"1. \u5B9A\u4E49"},{id:"2-declare-module-vs-declare-namespace",title:"2. declare module vs declare namespace"},{id:"3-\u6CA1\u6709\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",title:"3. \u6CA1\u6709\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4"},{id:"4-\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4",title:"4. \u6DFB\u52A0\u547D\u540D\u7A7A\u95F4"},{id:"5-\u5206\u5272\u547D\u540D\u7A7A\u95F4",title:"5. \u5206\u5272\u547D\u540D\u7A7A\u95F4"},{id:"6-\u522B\u540D",title:"6. \u522B\u540D"},{id:"7-\u4F7F\u7528\u5916\u90E8\u547D\u540D\u7A7A\u95F4\uFF0C\u5B9A\u4E49\u5176\u4ED6js\u5E93\u7C7B\u578B",title:"7. \u4F7F\u7528\u5916\u90E8\u547D\u540D\u7A7A\u95F4\uFF0C\u5B9A\u4E49\u5176\u4ED6js\u5E93\u7C7B\u578B"}];return(R,L)=>{const r=o("doc-link"),a=o("doc-code"),i=o("doc-page");return c(),d(i,{desc:"",toc:n},{default:l(()=>[A,B,p,e("p",null,[s("\u7075\u611F\u6765\u81EA"),t(r,{to:"https://stackoverflow.com/questions/41932585/what-is-the-difference-between-declare-namespace-and-declare-module"},{default:l(()=>[s("stackoverflow")]),_:1})]),D,t(a,{code:"declare%20module%20%22buffer%22%20%7B%7D%20//%20with%20quotes%20%u5F15%u7528%u5916%u90E8%u6A21%u5757%0Adeclare%20module%20buffer%20%7B%7D%20//%20without%20quotes%20%u5B9A%u4E49%u5185%u90E8%u6A21%u5757%0A",lang:"ts"}),m,g,t(a,{code:"declare%20namespace%20buffer%20%7B%7D%0A",lang:"ts"}),h,u,t(a,{code:"interface%20StringValidator%20%7B%0A%20%20isAcceptable%28s%3A%20string%29%3A%20boolean%3B%0A%7D%0A%0Alet%20lettersRegexp%20%3D%20/%5E%5BA-Za-z%5D+%24/%3B%0Alet%20numberRegexp%20%3D%20/%5E%5B0-9%5D+%24/%3B%0A%0Aclass%20LettersOnlyValidator%20implements%20StringValidator%20%7B%0A%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20return%20lettersRegexp.test%28s%29%3B%0A%20%20%7D%0A%7D%0A%0Aclass%20ZipCodeValidator%20implements%20StringValidator%20%7B%0A%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20return%20s.length%20%3D%3D%3D%205%20%26%26%20numberRegexp.test%28s%29%3B%0A%20%20%7D%0A%7D%0A%0A//%20Some%20samples%20to%20try%0Alet%20strings%20%3D%20%5B%22Hello%22%2C%20%2298052%22%2C%20%22101%22%5D%3B%0A%0A//%20Validators%20to%20use%0Alet%20validators%3A%20%7B%20%5Bs%3A%20string%5D%3A%20StringValidator%3B%20%7D%20%3D%20%7B%7D%3B%0Avalidators%5B%22ZIP%20code%22%5D%20%3D%20new%20ZipCodeValidator%28%29%3B%0Avalidators%5B%22Letters%20only%22%5D%20%3D%20new%20LettersOnlyValidator%28%29%3B%0A%0A//%20Show%20whether%20each%20string%20passed%20each%20validator%0Afor%20%28let%20s%20of%20strings%29%20%7B%0A%20%20for%20%28let%20name%20in%20validators%29%20%7B%0A%20%20%20%20let%20isMatch%20%3D%20validators%5Bname%5D.isAcceptable%28s%29%3B%0A%20%20%20%20console.log%28%60%27%24%7B%20s%20%7D%27%20%24%7B%20isMatch%20%3F%20%22matches%22%20%3A%20%22does%20not%20match%22%20%7D%20%27%24%7B%20name%20%7D%27.%60%29%3B%0A%20%20%7D%0A%7D%0A",lang:"ts"}),_,t(a,{code:"namespace%20Validation%20%7B%0A%20%20export%20interface%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%3A%20boolean%3B%0A%20%20%7D%0A%0A%20%20const%20lettersRegexp%20%3D%20/%5E%5BA-Za-z%5D+%24/%3B%0A%20%20const%20numberRegexp%20%3D%20/%5E%5B0-9%5D+%24/%3B%0A%0A%20%20export%20class%20LettersOnlyValidator%20implements%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20%20%20return%20lettersRegexp.test%28s%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20export%20class%20ZipCodeValidator%20implements%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20%20%20return%20s.length%20%3D%3D%3D%205%20%26%26%20numberRegexp.test%28s%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0A//%20Some%20samples%20to%20try%0Alet%20strings%20%3D%20%5B%22Hello%22%2C%20%2298052%22%2C%20%22101%22%5D%3B%0A%0A//%20Validators%20to%20use%0Alet%20validators%3A%20%7B%20%5Bs%3A%20string%5D%3A%20Validation.StringValidator%3B%20%7D%20%3D%20%7B%7D%3B%0Avalidators%5B%22ZIP%20code%22%5D%20%3D%20new%20Validation.ZipCodeValidator%28%29%3B%0Avalidators%5B%22Letters%20only%22%5D%20%3D%20new%20Validation.LettersOnlyValidator%28%29%3B%0A%0A//%20Show%20whether%20each%20string%20passed%20each%20validator%0Afor%20%28let%20s%20of%20strings%29%20%7B%0A%20%20for%20%28let%20name%20in%20validators%29%20%7B%0A%20%20%20%20console.log%28%60%22%24%7B%20s%20%7D%22%20-%20%24%7B%20validators%5Bname%5D.isAcceptable%28s%29%20%3F%20%22matches%22%20%3A%20%22does%20not%20match%22%20%7D%20%24%7B%20name%20%7D%60%29%3B%0A%20%20%7D%0A%7D%0A",lang:"ts"}),V,f,v,t(a,{code:"namespace%20Validation%20%7B%0A%20%20export%20interface%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%3A%20boolean%3B%0A%20%20%7D%0A%7D%0A",lang:"ts"}),b,t(a,{code:"///%20%3Creference%20path%3D%22Validation.ts%22%20/%3E%0Anamespace%20Validation%20%7B%0A%20%20const%20lettersRegexp%20%3D%20/%5E%5BA-Za-z%5D+%24/%3B%0A%20%20export%20class%20LettersOnlyValidator%20implements%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20%20%20return%20lettersRegexp.test%28s%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",lang:"ts"}),x,t(a,{code:"///%20%3Creference%20path%3D%22Validation.ts%22%20/%3E%0Anamespace%20Validation%20%7B%0A%20%20const%20numberRegexp%20%3D%20/%5E%5B0-9%5D+%24/%3B%0A%20%20export%20class%20ZipCodeValidator%20implements%20StringValidator%20%7B%0A%20%20%20%20isAcceptable%28s%3A%20string%29%20%7B%0A%20%20%20%20%20%20return%20s.length%20%3D%3D%3D%205%20%26%26%20numberRegexp.test%28s%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",lang:"ts"}),S,t(a,{code:"///%20%3Creference%20path%3D%22Validation.ts%22%20/%3E%0A///%20%3Creference%20path%3D%22LettersOnlyValidator.ts%22%20/%3E%0A///%20%3Creference%20path%3D%22ZipCodeValidator.ts%22%20/%3E%0A%0A//%20Some%20samples%20to%20try%0Alet%20strings%20%3D%20%5B%22Hello%22%2C%20%2298052%22%2C%20%22101%22%5D%3B%0A%0A//%20Validators%20to%20use%0Alet%20validators%3A%20%7B%20%5Bs%3A%20string%5D%3A%20Validation.StringValidator%3B%20%7D%20%3D%20%7B%7D%3B%0Avalidators%5B%22ZIP%20code%22%5D%20%3D%20new%20Validation.ZipCodeValidator%28%29%3B%0Avalidators%5B%22Letters%20only%22%5D%20%3D%20new%20Validation.LettersOnlyValidator%28%29%3B%0A%0A//%20Show%20whether%20each%20string%20passed%20each%20validator%0Afor%20%28let%20s%20of%20strings%29%20%7B%0A%20%20for%20%28let%20name%20in%20validators%29%20%7B%0A%20%20%20%20console.log%28%60%22%24%7B%20s%20%7D%22%20-%20%24%7B%20validators%5Bname%5D.isAcceptable%28s%29%20%3F%20%22matches%22%20%3A%20%22does%20not%20match%22%20%7D%20%24%7B%20name%20%7D%60%29%3B%0A%20%20%7D%0A%7D%0A",lang:"ts"}),w,t(a,{code:"namespace%20Shapes%20%7B%0A%20%20export%20namespace%20Polygons%20%7B%0A%20%20%20%20export%20class%20Triangle%20%7B%20%7D%0A%20%20%20%20export%20class%20Square%20%7B%20%7D%0A%20%20%7D%0A%7D%0A%0Aimport%20polygons%20%3D%20Shapes.Polygons%3B%0Alet%20sq%20%3D%20new%20polygons.Square%28%29%3B%20//%20Same%20as%20%22new%20Shapes.Polygons.Square%28%29%22%0A",lang:"ts"}),y,C,E,t(a,{code:"declare%20namespace%20D3%20%7B%0A%20%20export%20interface%20Selectors%20%7B%0A%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%28selector%3A%20string%29%3A%20Selection%3B%0A%20%20%20%20%20%20%28element%3A%20EventTarget%29%3A%20Selection%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%0A%20%20export%20interface%20Event%20%7B%0A%20%20%20%20x%3A%20number%3B%0A%20%20%20%20y%3A%20number%3B%0A%20%20%7D%0A%0A%20%20export%20interface%20Base%20extends%20Selectors%20%7B%0A%20%20%20%20event%3A%20Event%3B%0A%20%20%7D%0A%7D%0A%0Adeclare%20var%20d3%3A%20D3.Base%3B%0A",lang:"ts"})]),_:1})}}};export{q as default};
