import{r as e,o as r,c,f as a,g as n,aa as d}from"./vendor-90615676.js";const _=d("p",null,"\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6BCF\u4E2A store \u90FD\u88AB reactive\u5305\u88C5\u8FC7\uFF0C\u6240\u4EE5\u53EF\u4EE5\u81EA\u52A8\u89E3\u5305\u4EFB\u4F55\u5B83\u6240\u5305\u542B\u7684 Ref(ref()\u3001computed()\u2026)",-1),i={__name:"\u54CD\u5E94\u6027",setup(l){const o=[{id:"doc-title",title:"\u54CD\u5E94\u6027"}];return(p,h)=>{const t=e("doc-code"),s=e("doc-page");return r(),c(s,{desc:"",toc:o},{default:a(()=>[_,n(t,{code:`const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // \u6BCF\u4E2A store \u90FD\u6709\u5355\u72EC\u7684 \`hello\` \u5C5E\u6027
  store.hello = ref('secret')
  // \u5B83\u4F1A\u88AB\u81EA\u52A8\u89E3\u5305
  store.hello // 'secret'

  // \u6240\u6709\u7684 store \u90FD\u5728\u5171\u4EAB \`shared\` \u5C5E\u6027\u7684\u503C
  store.shared = sharedRef
  store.shared // 'shared'
})
`,lang:"javascript"})]),_:1})}}};export{i as default};
