import{r as t,o as l,c as r,f as c,a9 as o,g as s,v as e}from"./vendor-585b19a3.js";const i=o("h2",{id:"1-\u53EF\u9009\u7684props\u58F0\u660E",class:"doc-heading"},"\u53EF\u9009\u7684props\u58F0\u660E",-1),h=o("p",null,[e("When a component has no "),o("code",{class:"doc-token"},"props"),e(" declarations, all attributes passed by the parent are exposed in "),o("code",{class:"doc-token"},"this.$props"),e(". Unlike declared props, they will NOT be exposed directly on "),o("code",{class:"doc-token"},"this"),e(". In addition, in this case "),o("code",{class:"doc-token"},"this.$attrs"),e(" and "),o("code",{class:"doc-token"},"this.$props"),e(" will be pointing to the same object.")],-1),u=o("h3",{id:"2-\u51FD\u6570\u5F0F\u7EC4\u4EF6",class:"doc-heading"},"\u51FD\u6570\u5F0F\u7EC4\u4EF6",-1),_=o("p",null,[e("Similar to stateful components, when props are declared, the "),o("code",{class:"doc-token"},"props"),e(" arguments will only contain the declared props - attributes received but not declared as props will be in the argument ("),o("code",{class:"doc-token"},"attrs"),e("):")],-1),g={__name:"\u53EF\u9009\u7684props\u58F0\u660E",setup(m){const a=[{id:"doc-title",title:"\u53EF\u9009\u7684props\u58F0\u660E"},{id:"1-\u53EF\u9009\u7684props\u58F0\u660E",title:"1. \u53EF\u9009\u7684props\u58F0\u660E"},{id:"2-\u51FD\u6570\u5F0F\u7EC4\u4EF6",title:"1.1. \u51FD\u6570\u5F0F\u7EC4\u4EF6",sub:!0}];return(b,f)=>{const p=t("doc-link"),n=t("doc-code"),d=t("doc-page");return l(),r(d,{desc:"",toc:a},{default:c(()=>[i,o("p",null,[s(p,{to:"https://github.com/vuejs/rfcs/pull/25/files"},{default:c(()=>[e("\u5B98\u65B9\u82F1\u6587markdowm\u6587\u4EF6")]),_:1})]),h,s(n,{code:`<template>
  <div>{{ $props.foo }}</div>
</template>

// If the component has no other options, the entire \`<script>\` block can be dropped, so the following would be a valid SFC
<script>
export default {}
<\/script>
`,lang:"vue"}),u,_,s(n,{code:`const FunctionalComp = (props, slots, attrs) => {
// const FunctionalComp = (props, { slots, attrs }) => { \u96BE\u9053\u4E0D\u662F\u8FD9\u6837\u5417
  // \`attrs\` contains all received attributes except declared \`foo\`
}
FunctionalComp.props = {
  foo: Number
}
`,lang:"js"})]),_:1})}}};export{g as default};
