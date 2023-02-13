import{r as n,o,c as a,f as s,g as i}from"./vendor-90615676.js";const l={__name:"index_js",setup(c){const e=[];return(d,p)=>{const r=n("doc-code"),t=n("doc-page");return o(),a(t,{desc:"",toc:e},{default:s(()=>[i(r,{code:`import Vue from 'vue'
import apis from './apis.js'
import axios from 'axios'
import store from 'store'
import router from 'router'

import { resolveURL } from './url'

const loadingOption = {
  lock: true,
  target: 'body',
  background: 'rgba(0, 0, 0, 0.1)',
}

const http = axios.create({
  timeout: 10000,
})

http.interceptors.request.use(config => {
  const tenantId = store.state.tenantId
  if (tenantId) {
    config.headers.tenantId = tenantId
  }
  if (config.formUrlencoded) {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // axios\uFF08\u6216\u6D4F\u89C8\u5668\uFF09 \u81EA\u52A8\u8BBE\u7F6E

    // \u7A7A\u683C\u4F1A\u8F6C\u5316\u6210 +\uFF0C\u800C\u4E0D\u662F %20
    // const searchParams = new URLSearchParams()
    // Object.keys(config.data).forEach(key => {
    //   searchParams.set(key, config.data[key])
    // })
    // config.data = searchParams.toString()

    // \u7A7A\u683C\u4F1A\u8F6C\u5316\u6210%20(\u6216\u8005\u4F7F\u7528qs.stringify(config.data))
    config.data = Object.keys(config.data).map(key => \`\${key}=\${encodeURIComponent(config.data[key])}\`).join('&')
    delete config.formUrlencoded
  }
  return config
}, error => Promise.reject(error))

function isGetTenant (url) {
  return url.includes(apis.getUserInfo.url) || url.includes(apis.getUserTenantInfo.url)
}

http.interceptors.response.use(response => {
  const data = response.data
  if (data.code === 0) {
    return data.data
  } else {
    if (data.msg) {
      const showErrMsg = response.config._showErrMsg
      if (showErrMsg === undefined || showErrMsg === true) {
        Vue.prototype.$message.error(data.msg)
      }
      delete response.config._showErrMsg
    }
    if (data.code) {
      if (data.code === 10212) { // \u6B63\u5728\u7EF4\u62A4\u4E2D
        // noinspection JSIgnoredPromiseFromCall
        store.dispatch('updateSystemState')
      } else if (data.code === 10018) { // \u9879\u76EE\u4E0D\u5B58\u5728
        if (router.currentRoute.name !== 'projectList') {
          router.push({ name: 'projectList' })
        }
      }
      return Promise.reject(response)
    }
  }
  return data // \u6709\u53EF\u80FD\u662FBlob\u5BF9\u8C61
}, error => {
  const errMsg = Vue.prototype.$message.error
  if (error.response) {
    const { status } = error.response
    if (status === 401) { // \u53BB idaas \u5E73\u53F0\u767B\u9646\u9274\u6743
      const data = error.response.data.data
      const mark = '&redirect='
      const pre = data.split(mark)[0]
      window.location.href = \`\${pre + mark + window.location.href}\`
    } else {
      if (!isGetTenant(error.response.config.url)) {
        if (status === 403) {
          store.commit('setNoPermission', true)
        } else if (error.msg) {
          errMsg(error.msg)
        } else {
          errMsg('\u7F51\u7EDC\u9519\u8BEF\uFF01')
        }
      }
    }
  } else {
    if (!isGetTenant(error.config.url)) {
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') > -1) {
        errMsg('\u94FE\u63A5\u8D85\u65F6\uFF01')
      } else {
        errMsg('\u7F51\u7EDC\u9519\u8BEF\uFF01')
      }
    }
  }
  return Promise.reject(error)
})

const apiCache = new Map()

class Ajax {
  constructor (config) {
    this.config = Object.assign({
      type: 'get',
      cache: false,
      loading: false,
    }, config)
  }

  send (data) {
    const {
      type,
      cache,
      loading,
    } = this.config
    let pLoading
    if (data._loading !== undefined) {
      pLoading = data._loading
      delete data._loading
    }
    const url = this.handleUrl(data)
    const fLoading = pLoading === undefined ? loading : pLoading
    const loadingVm = fLoading ? Vue.prototype.$loading(loadingOption) : null
    let promise
    const cfgs = Object.assign({}, this.config)
    delete (cfgs.type)
    delete (cfgs.url)
    delete (cfgs.cache)
    delete (cfgs.loading)
    if (type === 'get') { // \u53EA\u7F13\u5B58get\u8BF7\u6C42
      if (cache) promise = apiCache.get(url)
      if (!promise) {
        promise = http.get(url, cfgs)
      }
    } else if (type === 'post') {
      promise = http.post(url, data, cfgs)
    } // \u5176\u4ED6type\u78B0\u5230\u4E86\u518D\u6DFB\u52A0
    return promise.then(res => {
      if (type === 'get' && cache) {
        apiCache.set(url, promise)
      }
      return Promise.resolve(res)
    }).catch(res => Promise.reject(res)).finally(() => {
      if (loadingVm) loadingVm.close()
    })
  }

  handleUrl (data) {
    let {
      url,
      type,
    } = this.config
    let query = '?'
    Object.keys(data).forEach(key => {
      const reg = new RegExp(\`\\\\$\\\\{\${key}\\\\}\`, 'g')
      if (reg.test(url)) {
        url = url.replace(reg, encodeURIComponent(data[key]))
        delete data[key]
      } else {
        query += \`\${key}=\${encodeURIComponent(data[key])}&\`
      }
    })
    if (query !== '?' && type === 'get') {
      query = query.slice(0, -1)
      url += query
    }
    return resolveURL(url)
  }
}

const $ajax = {}
Object.keys(apis).forEach(key => {
  $ajax[key] = function (data = {}) {
    return new Ajax(apis[key]).send(data)
  }
})
Vue.prototype.$ajax = $ajax
export default $ajax
`,lang:"javascript"})]),_:1})}}};export{l as default};
