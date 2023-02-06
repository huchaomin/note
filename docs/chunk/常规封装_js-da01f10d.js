import{r as n,o as r,c as s,f as a,g as c}from"./vendor-5a734afa.js";const d={__name:"\u5E38\u89C4\u5C01\u88C5_js",setup(i){const e=[];return(p,u)=>{const o=n("doc-code"),t=n("doc-page");return r(),s(t,{desc:"axios \u7684\u5E38\u89C4\u5C01\u88C5, \u5904\u7406\u767B\u5F55\uFF0C\u65AD\u7F51\u60C5\u51B5",toc:e},{default:a(()=>[c(o,{code:`import axios from 'axios'
import router from '@/router'
import store from '@/store/index'
import { Toast } from 'vant'

const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true,
  })
}

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath,
    },
  })
}

// \u521B\u5EFAaxios\u5B9E\u4F8B
const instance = axios.create({ timeout: 1000 * 12 })

// \u670D\u52A1\u7AEF\u901A\u5E38\u662F\u6839\u636E\u8BF7\u6C42\u5934\uFF08headers\uFF09\u4E2D\u7684 Content-Type \u5B57\u6BB5\u6765\u83B7\u77E5\u8BF7\u6C42\u4E2D\u7684\u6D88\u606F\u4E3B\u4F53\u662F\u7528\u4F55\u79CD\u65B9\u5F0F\u7F16\u7801\uFF0C\u518D\u5BF9\u4E3B\u4F53\u8FDB\u884C\u89E3\u6790\u3002
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// \u8BF7\u6C42\u62E6\u622A
instance.interceptors.request.use(
  config => {
    // \u6BCF\u6B21\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u5224\u65ADvuex\u4E2D\u662F\u5426\u5B58\u5728token
    // \u5982\u679C\u5B58\u5728\uFF0C\u5219\u7EDF\u4E00\u5728http\u8BF7\u6C42\u7684header\u90FD\u52A0\u4E0Atoken\uFF0C\u8FD9\u6837\u540E\u53F0\u6839\u636Etoken\u5224\u65AD\u4F60\u7684\u767B\u5F55\u60C5\u51B5
    // \u5373\u4F7F\u672C\u5730\u5B58\u5728token\uFF0C\u4E5F\u6709\u53EF\u80FDtoken\u662F\u8FC7\u671F\u7684\uFF0C\u6240\u4EE5\u5728\u54CD\u5E94\u62E6\u622A\u5668\u4E2D\u8981\u5BF9\u8FD4\u56DE\u72B6\u6001\u8FDB\u884C\u5224\u65AD
    // \u7F3A\u70B9\u662F\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u4F1A\u5E26token\u53BB\u9A8C\u8BC1
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error),
)

// \u54CD\u5E94\u62E6\u622A
instance.interceptors.response.use(
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  error => {
    const { response } = error
    if (response) {
      const { status } = response
      switch (status) {
        case 401: //  \u672A\u767B\u5F55
          toLogin()
          break
        case 403: //  \u767B\u5F55\u8FC7\u671F
          tip('\u767B\u5F55\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55')
          localStorage.removeItem('token')   // \u6E05\u9664token
          store.commit('loginSuccess', null)
          toLogin()
          break
        case 404: //  \u8BF7\u6C42\u4E0D\u5B58\u5728
          tip('\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728')
          break
        default:  // \u5176\u4ED6\u9519\u8BEF\uFF0C\u76F4\u63A5\u629B\u51FA\u9519\u8BEF\u63D0\u793A
          tip(response.data.message)
      }
      return Promise.reject(error.response)
    } else {
      if (!window.navigator.onLine) {
        // \u5904\u7406\u65AD\u7F51\u7684\u60C5\u51B5
        // eg:\u8BF7\u6C42\u8D85\u65F6\u6216\u65AD\u7F51\u65F6\uFF0C\u66F4\u65B0state\u7684network\u72B6\u6001
        // network\u72B6\u6001\u5728app.vue\u4E2D\u63A7\u5236\u7740\u4E00\u4E2A\u5168\u5C40\u7684\u65AD\u7F51\u63D0\u793A\u7EC4\u4EF6\u7684\u663E\u793A\u9690\u85CF
        // \u5173\u4E8E\u65AD\u7F51\u7EC4\u4EF6\u4E2D\u7684\u5237\u65B0\u91CD\u65B0\u83B7\u53D6\u6570\u636E\uFF0C\u4F1A\u5728\u65AD\u7F51\u7EC4\u4EF6\u4E2D\u8BF4\u660E
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  },
)
export default instance
`,lang:"javascript"})]),_:1})}}};export{d as default};
