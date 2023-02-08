import{r as o,o as s,c,f as r,g as m}from"./vendor-585b19a3.js";const u={__name:"Vue.extend",setup(p){const e=[{id:"doc-title",title:"Vue.extend"}];return(a,d)=>{const t=o("doc-code"),n=o("doc-page");return s(),c(n,{desc:"",toc:e},{default:r(()=>[m(t,{code:`import ConstructorOptions from './ConstructorOptions.vue'
const Constructor = Vue.extend(ConstructorOptions)

// ...
someMethod () {
  const vm = new Constructor({
    propsData: {
      prop1: ...,
    },
  });
  vm.$mount();
  this.$refs.someDom.appendChild(vm.$el)
  vm.remove = () => {
    this.$refs.someDom.removeChild(vm.$el)
    vm.$destroy()
  }
},
`,lang:"javascript"})]),_:1})}}};export{u as default};
