---
date: '1642562923078'
title: vue-router 设置异步分包加载视图
description: vue-router 设置异步分包加载，并设置加载中视图和加载错误视图
tags: [vue-router]
---
### 异步分包加载视图，并设置加载中视图和加载错误视图
```javascript
import Vue from 'vue'
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
```

