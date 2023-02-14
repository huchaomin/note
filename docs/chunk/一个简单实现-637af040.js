import{r as o,o as u,c as i,f as a,g as t,aa as n}from"./vendor-774b84b8.js";const c=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"\u6CA1\u6709\u8003\u8651\u5B50\u8DEF\u7531")],-1),p=n("p",null,"/plugins/router/index.js",-1),l=n("p",null,"/plugins/router/routerLink.js",-1),d=n("p",null,"/plugins/router/routerView.js",-1),g={__name:"\u4E00\u4E2A\u7B80\u5355\u5B9E\u73B0",setup(h){const r=[{id:"doc-title",title:"\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A hashChange vue-router"}];return(_,V)=>{const e=o("doc-code"),s=o("doc-page");return u(),i(s,{desc:"",toc:r},{default:a(()=>[c,p,t(e,{code:`import Link from './routerLink.js'
import View from './routerView.js'
let Vue
class VueRouter {
  constructor (options) {
    Vue.util.defineReactive(this, 'current', null)
    window.addEventListener('hashchange', this.hashChange.bind(this))
    window.addEventListener('load', this.hashChange.bind(this))

    // \u7F13\u5B58\u8DEF\u7531\u8868
    this.routesMap = new Map()
    options.routes.forEach(route => {
      this.routesMap.set(route.path, route)
    })
  }
  hashChange () {
    this.current = window.location.hash.slice(1)
  }
}
// \u4E3A\u4EC0\u4E48\u8981\u2F64\u6DF7\u2F0A\u2F45\u5F0F\u5199\uFF1F\u4E3B\u8981\u539F\u56E0\u662Fuse\u4EE3\u7801\u5728\u524D\uFF0CRouter\u5B9E\u4F8B\u521B\u5EFA\u5728\u540E\uFF0C\u2F7Dinstall\u903B\u8F91\u2F1C\u9700\u8981\u2F64\u5230\u8BE5\u5B9E\u4F8B
VueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    },
  })
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}
export default VueRouter
`,lang:"javascript"}),l,t(e,{code:`export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  render (h) {
    return h('a', {
      attrs: {
        href: '#' + this.to,
      },
    }, [
      this.$slots.default,
    ])
  },
}
`,lang:"javascript"}),d,t(e,{code:`export default {
  render (h) {
    const { routesMap, current } = this.$router
    const route = routesMap.get(current)
    return h(route ? route.component : null)
  },
}
`,lang:"javascript"})]),_:1})}}};export{g as default};
