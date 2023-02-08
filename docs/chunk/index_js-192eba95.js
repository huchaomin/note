import{r as n,o as c,c as r,f as m,g as p}from"./vendor-585b19a3.js";const i={__name:"index_js",setup(d){const o=[{id:"doc-title",title:"vue \u5F39\u7A97\u7EC4\u4EF6"}];return(s,u)=>{const e=n("doc-code"),t=n("doc-page");return c(),r(t,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u5F39\u7A97\u7EC4\u4EF6",toc:o},{default:m(()=>[p(e,{code:`import Vue from 'vue'
import Notice from './Notice.vue'

// function create (Component, props) {
//   // \u521B\u5EFA\u2F00\u4E2AVue\u65B0\u5B9E\u4F8B
//   const vm = new Vue({
//     render (h) {
//       // render\u51FD\u6570\u5C06\u4F20\u2F0A\u7EC4\u4EF6\u914D\u7F6E\u5BF9\u8C61\u8F6C\u6362\u4E3A\u865A\u62DFdom
//       return h(Component, { props })
//     },
//   }).$mount() //\u6267\u2F8F\u6302\u8F7D\u51FD\u6570\uFF0C\u4F46\u672A\u6307\u5B9A\u6302\u8F7D\u2F6C\u6807\uFF0C\u8868\u793A\u53EA\u6267\u2F8F\u521D\u59CB\u5316\u2F2F\u4F5C
//
//   // \u5C06\u2F63\u6210dom\u5143\u7D20\u8FFD\u52A0\u2F84body
//   document.body.appendChild(vm.$el)
//   // \u7ED9\u7EC4\u4EF6\u5B9E\u4F8B\u6DFB\u52A0\u9500\u6BC1\u2F45\u6CD5
//   const comp = vm.$children[0]
//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
// }

function create (Component, props) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    propsData: props,
  })
  vm.$mount()
  // \u5C06\u2F63\u6210dom\u5143\u7D20\u8FFD\u52A0\u2F84body
  document.body.appendChild(vm.$el)
  // \u7ED9\u7EC4\u4EF6\u5B9E\u4F8B\u6DFB\u52A0\u9500\u6BC1\u2F45\u6CD5
  vm.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
}

export default {
  install (Vue) {
    Vue.prototype.$notice = function (props) {
      create(Notice, props)
    }
  },
}
`,lang:"javascript"})]),_:1})}}};export{i as default};
