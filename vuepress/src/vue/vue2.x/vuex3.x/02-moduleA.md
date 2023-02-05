---
date: '1642651729876'
title: vuex 使用
description: vuex 通用用法二
tags: [vuex]
---

### moduleA
```javascript
export default {
  // 它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名,否则下面都是在root下面注册的
  // state 本身已经有隔离作用域了,他和rootState在module里面永远不一样
  namespaced: true,
  state: {
    aCount: 1,
  },
  getters: {
    doubleAcount: state => { // (state, getters, rootState, rootGetters)
      return state.aCount * 2
    }
  },
  mutations: {
    addAcount: (state, payload) => { // 只有两个参数
      state.aCount += payload
    },
  },
  actions: {
    addCountsAsync: (context, payload) => { // { state, getters, commit, dispatch, rootState, rootGetters } = context
      setTimeout(() => {
        context.commit('addAcount', payload)
      }, 2000)
      // getters.someGetter // -> 'a/someGetter'
      // rootGetters.someGetter // -> 'someGetter'
      // commit('someMutation') // -> 'a/someMutation'
      // commit('someMutation', null, { root: true }) // -> 'someMutation'
      // dispatch('someOtherAction') // -> 'a/someOtherAction'
      // dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
    },
    // 子中注册父action
    // someAction: {
    //   root: true,
    //   handler (context, payload) { ... } // -> 'someAction'
    // }
  },
  modules: {
    // 没有设置namespaced: true，继承父模块的命名空间
    // myPage: {
    //   state: () => ({ ... }),
    //   getters: {
    //     someGetter () { ... } // -> getters['a/someGetter']
    //   }
    // },
  }
}
```

