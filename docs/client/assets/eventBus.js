import{r as a,o,c as i,f as r,g as e,ac as s}from"./vendor.js";const d=s("h2",{id:"1-\u81EA\u5B9A\u4E49bus",class:"doc-heading"},"\u81EA\u5B9A\u4E49Bus",-1),l=s("h2",{id:"2-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),u=s("p",null,"\u5B9E\u8DF5\u4E2D\u901A\u5E38\u2F64Vue\u4EE3\u66FFBus\uFF0C\u56E0\u4E3AVue\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u76F8\u5E94\u63A5\u2F1D",-1),m={__name:"eventBus",setup(f){const t=[{id:"doc-title",title:"\u81EA\u5B9A\u4E49 eventBus"},{id:"1-\u81EA\u5B9A\u4E49bus",title:"1. \u81EA\u5B9A\u4E49Bus"},{id:"2-\u4F7F\u7528",title:"2. \u4F7F\u7528"}];return(p,h)=>{const n=a("doc-code"),c=a("doc-page");return o(),i(c,{desc:"",toc:t},{default:r(()=>[d,e(n,{code:`class Bus {
  constructor () {
    this.callbacks = {}
  }
  $on (name, fn) {
   this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit (name, arg) {
   if (this.callbacks[name]) {
     this.callbacks[name].forEach(fn => fn(arg))
    }
  }
  $off (name, fn) {
    const arr = this.callbacks[name]
    if (!arr) return
    if (fn === undefined) {
      arr.splice(0)
      return
    }
    const index = arr.indexOf(fn)
    if (index === -1) return
    arr.splice(index, 1)
  }
}

`,lang:"javascript"}),l,e(n,{code:`// main.js
Vue.prototype.$bus = new Bus()
// pre
this.$bus.$on('foo', handle)
// aft
this.$bus.$emit('foo')
`,lang:"javascript"}),u,e(n,{code:`Vue.prototype.$Bus = new Vue()
`,lang:"javascript"})]),_:1})}}};export{m as default};
