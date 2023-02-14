import{r as s,o as a,c as u,f as c,g as o,aa as t,v as e}from"./vendor-774b84b8.js";const r=t("h2",{id:"1-\u5173\u4E8E\u547D\u540D\u89C4\u8303",class:"doc-heading"},"\u5173\u4E8E\u547D\u540D\u89C4\u8303",-1),m=t("h2",{id:"2-\u65B0\u589E-emits-\u9009\u9879",class:"doc-heading"},[e("\u65B0\u589E "),t("code",{class:"doc-token"},"emits"),e(" \u9009\u9879")],-1),p={class:"doc-note doc-note--warning"},_=t("p",{class:"doc-note__title"},"WARNING",-1),h=t("br",null,null,-1),v=t("br",null,null,-1),b=t("code",{class:"doc-token"},"native",-1),f=t("h2",{id:"3-\u9A8C\u8BC1\u629B\u51FA\u7684\u4E8B\u4EF6",class:"doc-heading"},"\u9A8C\u8BC1\u629B\u51FA\u7684\u4E8B\u4EF6",-1),g=t("p",null,[e("\u4E0E prop \u7C7B\u578B\u9A8C\u8BC1\u7C7B\u4F3C\uFF0C\u5982\u679C\u4F7F\u7528"),t("strong",null,"\u5BF9\u8C61"),e("\u8BED\u6CD5\u800C\u4E0D\u662F\u6570\u7EC4\u8BED\u6CD5\u5B9A\u4E49\u53D1\u51FA\u7684\u4E8B\u4EF6\uFF0C\u5219\u53EF\u4EE5\u5BF9\u5B83\u8FDB\u884C\u9A8C\u8BC1\u3002")],-1),k=t("code",{class:"doc-token"},"props",-1),y=t("code",{class:"doc-token"},"emits",-1),w=t("br",null,null,-1),C={__name:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6",setup(j){const l=[{id:"doc-title",title:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6"},{id:"1-\u5173\u4E8E\u547D\u540D\u89C4\u8303",title:"1. \u5173\u4E8E\u547D\u540D\u89C4\u8303"},{id:"2-\u65B0\u589E-emits-\u9009\u9879",title:"2. \u65B0\u589E emits \u9009\u9879"},{id:"3-\u9A8C\u8BC1\u629B\u51FA\u7684\u4E8B\u4EF6",title:"3. \u9A8C\u8BC1\u629B\u51FA\u7684\u4E8B\u4EF6"}];return(x,B)=>{const n=s("doc-code"),i=s("doc-link"),d=s("doc-page");return a(),u(d,{desc:"",toc:l},{default:c(()=>[r,o(n,{code:`this.$emit('myEvent')
`,lang:"js"}),o(n,{code:`<my-component @my-event="doSomething"></my-component>
`,lang:"vue"}),m,o(n,{code:`app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
`,lang:"js"}),t("div",p,[_,t("p",null,[e("\u5F53\u5728 emits \u9009\u9879\u4E2D\u5B9A\u4E49\u4E86\u539F\u751F\u4E8B\u4EF6 (\u5982 click) \u65F6\uFF0C\u5C06\u4F7F\u7528\u7EC4\u4EF6\u4E2D\u7684\u4E8B\u4EF6\u66FF\u4EE3\u539F\u751F\u4E8B\u4EF6\u4FA6\u542C\u5668\u3002"),h,e(" \u5982\u679C\u6CA1\u6709\uFF0C\u7EC4\u4EF6\u4E2D\u7684\u4E8B\u4EF6\u548C\u539F\u751F\u4E8B\u4EF6\u4FA6\u542C\u5668\u90FD\u53EF\u4EE5\u89E6\u53D1 "),o(i,{to:"https://github.com/vuejs/rfcs/pull/16/files"},{default:c(()=>[e("89\u884C")]),_:1}),v,e(" \u4E8B\u4EF6\u7684 "),b,e(" \u4FEE\u9970\u7B26\u5DF2\u7ECF\u88AB\u79FB\u9664")])]),o(n,{code:`<template>
  <button v-on:click="$emit('click', $event)">OK</button>
</template>
<script>
export default {
  emits: [] // \u4E0D\u58F0\u660E\u4E8B\u4EF6
}
<\/script>
`,lang:"vue"}),o(n,{code:`<my-button v-on:click="handleClick"></my-button>
<!--\u8BE5\u4E8B\u4EF6\u73B0\u5728\u4F1A\u88AB\u89E6\u53D1\u4E24\u6B21-->
`,lang:"vue"}),f,g,o(n,{code:`emits: {
  // \u6CA1\u6709\u9A8C\u8BC1
  click: null,

  // \u9A8C\u8BC1 submit \u4E8B\u4EF6
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
}
`,lang:"js"}),t("p",null,[e("Runtime validations should only be performed in dev mode but can potentially bloat production bundle size. Props validators have the same issue. Both can be solved with a Babel plugin that transforms "),k,e(" and "),y,e(" options to the Array format in production builds. This way the dev only code is stripped but the runtime behavior will stay consistent."),w,o(i,{to:"https://github.com/vuejs/rfcs/pull/16/files"},{default:c(()=>[e("\u63A8\u8350\u5199\u6570\u7EC4")]),_:1})])]),_:1})}}};export{C as default};
