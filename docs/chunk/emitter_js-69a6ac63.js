import{r as e,o,c,f as m,g as p}from"./vendor-90615676.js";const l={__name:"emitter_js",setup(r){const n=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(s,i)=>{const a=e("doc-code"),t=e("doc-page");return o(),c(t,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6 -- emitter.js",toc:n},{default:m(()=>[p(a,{code:`function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.componentName
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    },
  },
}
`,lang:"javascript"})]),_:1})}}};export{l as default};
