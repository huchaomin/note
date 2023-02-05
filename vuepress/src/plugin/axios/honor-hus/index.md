---
date: '1643687344097'
title: honor-hus 封装 axios 之配置处理
description: honor-hus 封装 axios 之配置处理
tags: [axios]
---
### honor-hus 封装 axios 之配置处理
```javascript
import Vue from 'vue'
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
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // axios（或浏览器） 自动设置

    // 空格会转化成 +，而不是 %20
    // const searchParams = new URLSearchParams()
    // Object.keys(config.data).forEach(key => {
    //   searchParams.set(key, config.data[key])
    // })
    // config.data = searchParams.toString()

    // 空格会转化成%20(或者使用qs.stringify(config.data))
    config.data = Object.keys(config.data).map(key => `${key}=${encodeURIComponent(config.data[key])}`).join('&')
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
      if (data.code === 10212) { // 正在维护中
        // noinspection JSIgnoredPromiseFromCall
        store.dispatch('updateSystemState')
      } else if (data.code === 10018) { // 项目不存在
        if (router.currentRoute.name !== 'projectList') {
          router.push({ name: 'projectList' })
        }
      }
      return Promise.reject(response)
    }
  }
  return data // 有可能是Blob对象
}, error => {
  const errMsg = Vue.prototype.$message.error
  if (error.response) {
    const { status } = error.response
    if (status === 401) { // 去 idaas 平台登陆鉴权
      const data = error.response.data.data
      const mark = '&redirect='
      const pre = data.split(mark)[0]
      window.location.href = `${pre + mark + window.location.href}`
    } else {
      if (!isGetTenant(error.response.config.url)) {
        if (status === 403) {
          store.commit('setNoPermission', true)
        } else if (error.msg) {
          errMsg(error.msg)
        } else {
          errMsg('网络错误！')
        }
      }
    }
  } else {
    if (!isGetTenant(error.config.url)) {
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') > -1) {
        errMsg('链接超时！')
      } else {
        errMsg('网络错误！')
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
    if (type === 'get') { // 只缓存get请求
      if (cache) promise = apiCache.get(url)
      if (!promise) {
        promise = http.get(url, cfgs)
      }
    } else if (type === 'post') {
      promise = http.post(url, data, cfgs)
    } // 其他type碰到了再添加
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
      const reg = new RegExp(`\\$\\{${key}\\}`, 'g')
      if (reg.test(url)) {
        url = url.replace(reg, encodeURIComponent(data[key]))
        delete data[key]
      } else {
        query += `${key}=${encodeURIComponent(data[key])}&`
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
```
