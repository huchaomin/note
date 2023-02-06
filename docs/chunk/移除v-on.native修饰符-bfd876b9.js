import{r as c,o as a,c as l,f as i,g as t,a8 as e,v as o}from"./vendor-5a734afa.js";const _=e("h2",{id:"1-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),p=e("p",null,[o("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F20\u9012\u7ED9\u5E26\u6709 "),e("code",{class:"doc-token"},"v-on"),o(" \u7684\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u53EA\u80FD\u901A\u8FC7 "),e("code",{class:"doc-token"},"this.$emit"),o(" \u89E6\u53D1\u3002\u8981\u5C06\u539F\u751F DOM \u76D1\u542C\u5668\u6DFB\u52A0\u5230\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("code",{class:"doc-token"},".native"),o(" \u4FEE\u9970\u7B26\uFF1A")],-1),h=e("h2",{id:"2-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),m=e("p",null,[e("code",{class:"doc-token"},"v-on"),o(" \u7684 "),e("code",{class:"doc-token"},".native"),o(" \u4FEE\u9970\u7B26\u5DF2\u88AB\u79FB\u9664\u3002\u540C\u65F6\uFF0C\u65B0\u589E\u7684 "),e("code",{class:"doc-token"},"emits"),o(" \u9009\u9879\u5141\u8BB8\u5B50\u7EC4\u4EF6\u5B9A\u4E49\u771F\u6B63\u4F1A\u88AB\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002")],-1),v=e("p",null,[o("\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u5B50\u7EC4\u4EF6\u4E2D"),e("em",null,"\u672A"),o("\u88AB\u5B9A\u4E49\u4E3A\u7EC4\u4EF6\u89E6\u53D1\u7684\u6240\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0CVue \u73B0\u5728\u5C06\u628A\u5B83\u4EEC\u4F5C\u4E3A\u539F\u751F\u4E8B\u4EF6\u76D1\u542C\u5668\u6DFB\u52A0\u5230\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E2D (\u9664\u975E\u5728\u5B50\u7EC4\u4EF6\u7684\u9009\u9879\u4E2D\u8BBE\u7F6E\u4E86 "),e("code",{class:"doc-token"},"inheritAttrs: false"),o(")\u3002")],-1),r=e("p",null,[e("code",{class:"doc-token"},"MyComponent.vue")],-1),f={__name:"\u79FB\u9664v-on.native\u4FEE\u9970\u7B26",setup(k){const s=[{id:"doc-title",title:"\u79FB\u9664 native \u4FEE\u9970\u7B26"},{id:"1-2-x-\u8BED\u6CD5",title:"1. 2.x \u8BED\u6CD5"},{id:"2-3-x-\u8BED\u6CD5",title:"2. 3.x \u8BED\u6CD5"}];return(u,x)=>{const n=c("doc-code"),d=c("doc-page");return a(),l(d,{desc:"",toc:s},{default:i(()=>[_,p,t(n,{code:`<my-component
  v-on:close="handleComponentEvent"
  v-on:click.native="handleNativeClickEvent"
/>
`,lang:"html"}),h,m,v,t(n,{code:`<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
`,lang:"html"}),r,t(n,{code:`<script>
  export default {
    emits: ['close']
  }
<\/script>
`,lang:"html"})]),_:1})}}};export{f as default};
