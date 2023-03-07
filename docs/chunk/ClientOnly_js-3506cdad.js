import{r as o,o as s,c,f as a,g as l}from"./vendor-774b84b8.js";const u={__name:"ClientOnly_js",setup(r){const e=[];return(d,_)=>{const n=o("doc-code"),t=o("doc-page");return s(),c(t,{desc:"",toc:e},{default:a(()=>[l(n,{code:`import { defineComponent, ref, onMounted } from 'vue'

export const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false)

    onMounted(() => {
      show.value = true
    })

    return () => (show.value && slots.default ? slots.default() : null)
  }
})
`,lang:"js"})]),_:1})}}};export{u as default};
