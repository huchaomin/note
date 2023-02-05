import{r as d,o as s,c as l,f as i,g as n,aa as e,v as t}from"./vendor.js";const p=e("ul",null,[e("li",null,[e("code",{class:"doc-token"},"destroyed"),t(" \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A "),e("code",{class:"doc-token"},"unmounted")]),e("li",null,[e("code",{class:"doc-token"},"beforeDestroy"),t(" \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A "),e("code",{class:"doc-token"},"beforeUnmount")])],-1),u=e("h2",{id:"1-@hook",class:"doc-heading"},"@hook",-1),_=e("h3",{id:"2-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),h=e("h3",{id:"3-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),k={__name:"\u751F\u547D\u5468\u671F",setup(r){const c=[{id:"doc-title",title:"vue3 \u751F\u547D\u5468\u671F\u7684\u6539\u53D8"},{id:"1-@hook",title:"1. @hook"},{id:"2-2-x-\u8BED\u6CD5",title:"1.1. 2.x \u8BED\u6CD5",sub:!0},{id:"3-3-x-\u8BED\u6CD5",title:"1.2. 3.x \u8BED\u6CD5",sub:!0}];return(m,v)=>{const o=d("doc-code"),a=d("doc-page");return s(),l(a,{desc:"",toc:c},{default:i(()=>[p,u,_,n(o,{code:`<template>
  <child-component @hook:updated="onUpdated">
</template>
`,lang:"vue"}),h,n(o,{code:`<template>
  <child-component @vnode-updated="onUpdated">
  <!--\u6216\u8005-->
  <child-component @vnodeUpdated="onUpdated">
  <!--\u4E5F\u53EF\u4EE5\u7528\u5728\u666E\u901A\u6807\u7B7E\u4E0A-->
  <div @vnodeMounted="() => { ... }">
</template>
`,lang:"vue"}),n(o,{code:`h('div', {
  onVnodeMounted(vnode) {
    /* ... */
  },
  onVnodeUpdated(vnode, prevVnode) {
    /* ... */
  }
})
`,lang:"js"})]),_:1})}}};export{k as default};
