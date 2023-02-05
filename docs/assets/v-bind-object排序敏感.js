import{r as o,o as s,c as a,f as l,g as c,a9 as e,v as t}from"./vendor.js";const _=e("h2",{id:"1-\u4ECB\u7ECD",class:"doc-heading"},"\u4ECB\u7ECD",-1),r=e("p",null,[t("\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\u52A8\u6001\u7ED1\u5B9A attribute \u65F6\uFF0C\u540C\u65F6\u4F7F\u7528 "),e("code",{class:"doc-token"},'v-bind="object"'),t(" \u8BED\u6CD5\u548C\u72EC\u7ACB attribute \u662F\u5E38\u89C1\u7684\u573A\u666F\u3002\u7136\u800C\uFF0C\u8FD9\u5C31\u5F15\u51FA\u4E86\u5173\u4E8E\u5408\u5E76\u7684\u4F18\u5148\u7EA7\u7684\u95EE\u9898\u3002")],-1),b=e("h2",{id:"2-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),v=e("p",null,[t("\u5728 2.x \u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u540C\u65F6\u5B9A\u4E49\u4E86 "),e("code",{class:"doc-token"},'v-bind="object"'),t(" \u548C\u4E00\u4E2A\u76F8\u540C\u7684\u72EC\u7ACB attribute\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u72EC\u7ACB attribute \u603B\u662F\u4F1A\u8986\u76D6 "),e("code",{class:"doc-token"},"object"),t(" \u4E2D\u7684\u7ED1\u5B9A\u3002")],-1),u=e("h2",{id:"3-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),h=e("p",null,[t("\u5728 3.x \u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u540C\u65F6\u5B9A\u4E49\u4E86 "),e("code",{class:"doc-token"},'v-bind="object"'),t(" \u548C\u4E00\u4E2A\u76F8\u540C\u7684\u72EC\u7ACB attribute\uFF0C\u90A3\u4E48\u7ED1\u5B9A\u7684\u58F0\u660E\u987A\u5E8F\u5C06\u51B3\u5B9A\u5B83\u4EEC\u5982\u4F55\u88AB\u5408\u5E76\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u76F8\u5BF9\u4E8E\u5047\u8BBE\u5F00\u53D1\u8005\u603B\u662F\u5E0C\u671B\u72EC\u7ACB attribute \u8986\u76D6 "),e("code",{class:"doc-token"},"object"),t(" \u4E2D\u5B9A\u4E49\u7684\u5185\u5BB9\uFF0C\u73B0\u5728\u5F00\u53D1\u8005\u80FD\u591F\u5BF9\u81EA\u5DF1\u6240\u5E0C\u671B\u7684\u5408\u5E76\u884C\u4E3A\u505A\u66F4\u597D\u7684\u63A7\u5236\u3002")],-1),p=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"\u4F60\u7684 IDE \u683C\u5F0F\u5316\u63D2\u4EF6\u4F1A\u81EA\u52A8\u6392\u5E8F\u6807\u7B7E\u5185\u7684\u5C5E\u6027\u987A\u5E8F\uFF0C\u6240\u4EE5\u5C3D\u91CF\u4E0D\u8981\u4F9D\u8D56\u6B64\u7279\u6027")],-1),k={__name:"v-bind-object\u6392\u5E8F\u654F\u611F",setup(x){const i=[{id:"doc-title",title:"v-bind object \u6392\u5E8F\u654F\u611F"},{id:"1-\u4ECB\u7ECD",title:"1. \u4ECB\u7ECD"},{id:"2-2-x-\u8BED\u6CD5",title:"2. 2.x \u8BED\u6CD5"},{id:"3-3-x-\u8BED\u6CD5",title:"3. 3.x \u8BED\u6CD5"}];return(g,m)=>{const d=o("doc-code"),n=o("doc-page");return s(),a(n,{desc:"",toc:i},{default:l(()=>[_,r,b,v,c(d,{code:`<!-- \u6A21\u677F -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- \u7ED3\u679C -->
<div id="red"></div>
`,lang:"html"}),u,h,c(d,{code:`<!-- \u6A21\u677F -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- \u7ED3\u679C -->
<div id="blue"></div>

<!-- \u6A21\u677F -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- \u7ED3\u679C -->
<div id="red"></div>
`,lang:"html"}),p]),_:1})}}};export{k as default};
