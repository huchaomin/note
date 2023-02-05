---
date: '1642579984428'
title: vuex 使用
description: vuex 通用用法一
tags: [vuex]
---

### 引用 vuex
```javascript
export default new Vuex.Store({
  // 在严格模式下，每当Vuex状态在变异处理程序之外进行变异时，都会引发错误
  // 这样可以确保调试工具可以明确跟踪所有状态突变
  // 部署生产时请勿启用严格模式！严格模式在状态树上运行同步深度监视程序，以检测不适当的突变，当您对该状态进行大量突变时，这可能会非常昂贵
  // 确保在生产中将其关闭以避免性能成本
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 1
  },
  // 类似计算属性
  getters: {
    doubleCount: state => {	// (state, getters, rootState, rootGetters)
      return state.count * 2
    },
  },
  mutations: {
    addCount: (state, payload) => { // 只有两个参数
      state.count += payload
    },
  },
  actions: {
    addCountAsync: (context, payload) => { // { state, getters, commit, dispatch, rootState, rootGetters } = context
      setTimeout(() => {
        context.commit('addCount', payload)
      }, 2000)
    },
  },
  modules: {
    a: moduleA,
  },
})
```

