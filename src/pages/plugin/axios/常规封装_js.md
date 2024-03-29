---
desc: axios 的常规封装, 处理登录，断网情况
---

```javascript
import axios from 'axios'
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

// 创建axios实例
const instance = axios.create({ timeout: 1000 * 12 })

// 服务端通常是根据请求头（headers）中的 Content-Type 字段来获知请求中的消息主体是用何种方式编码，再对主体进行解析。
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // 缺点是每个请求都会带token去验证
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error),
)

// 响应拦截
instance.interceptors.response.use(
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  error => {
    const { response } = error
    if (response) {
      const { status } = response
      switch (status) {
        case 401: //  未登录
          toLogin()
          break
        case 403: //  登录过期
          tip('登录过期，请重新登录')
          localStorage.removeItem('token')   // 清除token
          store.commit('loginSuccess', null)
          toLogin()
          break
        case 404: //  请求不存在
          tip('请求的资源不存在')
          break
        default:  // 其他错误，直接抛出错误提示
          tip(response.data.message)
      }
      return Promise.reject(error.response)
    } else {
      if (!window.navigator.onLine) {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  },
)
export default instance
```
