import{r as n,o as r,c as a,f as c,g as i}from"./vendor-90615676.js";const d={__name:"lazyLoadView",setup(m){const e=[{id:"doc-title",title:"vue-router \u8BBE\u7F6E\u5F02\u6B65\u5206\u5305\u52A0\u8F7D\u89C6\u56FE"}];return(l,s)=>{const o=n("doc-code"),t=n("doc-page");return r(),a(t,{desc:"vue-router \u8BBE\u7F6E\u5F02\u6B65\u5206\u5305\u52A0\u8F7D\uFF0C\u5E76\u8BBE\u7F6E\u52A0\u8F7D\u4E2D\u89C6\u56FE\u548C\u52A0\u8F7D\u9519\u8BEF\u89C6\u56FE",toc:e},{default:c(()=>[i(o,{code:`import Vue from 'vue'
import Router from 'vue-router'
import GlobalLoading from '@/components/common/GlobalLoading'
import NetworkErr from '@/components/common/NetworkErr'

Vue.use(Router)

function lazyLoadView (asyncModule) {
  const AsyncHandler = () => ({
    component: asyncModule,
    // component: asyncModule,
    // A component to use while the component is loading.
    loading: GlobalLoading,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: NetworkErr,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })
  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      return h(AsyncHandler, data, children)
    },
  })
}
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/lazy',
    name: 'Lazy',
    component: () => lazyLoadView(import(/* webpackChunkName: "lazy" */ '@/views/Lazy.vue')),
  },
]
const router = new Router({
  routes,
})
export default router
`,lang:"javascript"})]),_:1})}}};export{d as default};
