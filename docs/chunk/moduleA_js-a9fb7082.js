import{r as t,o as a,c as s,f as c,g as r}from"./vendor-585b19a3.js";const l={__name:"moduleA_js",setup(m){const e=[{id:"doc-title",title:"moduleA"}];return(d,u)=>{const o=t("doc-code"),n=t("doc-page");return a(),s(n,{desc:"",toc:e},{default:c(()=>[r(o,{code:`export default {
  // \u5B83\u7684\u6240\u6709 getter\u3001action \u53CA mutation \u90FD\u4F1A\u81EA\u52A8\u6839\u636E\u6A21\u5757\u6CE8\u518C\u7684\u8DEF\u5F84\u8C03\u6574\u547D\u540D,\u5426\u5219\u4E0B\u9762\u90FD\u662F\u5728root\u4E0B\u9762\u6CE8\u518C\u7684
  // state \u672C\u8EAB\u5DF2\u7ECF\u6709\u9694\u79BB\u4F5C\u7528\u57DF\u4E86,\u4ED6\u548CrootState\u5728module\u91CC\u9762\u6C38\u8FDC\u4E0D\u4E00\u6837
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
    addAcount: (state, payload) => { // \u53EA\u6709\u4E24\u4E2A\u53C2\u6570
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
    // \u5B50\u4E2D\u6CE8\u518C\u7236action
    // someAction: {
    //   root: true,
    //   handler (context, payload) { ... } // -> 'someAction'
    // }
  },
  modules: {
    // \u6CA1\u6709\u8BBE\u7F6Enamespaced: true\uFF0C\u7EE7\u627F\u7236\u6A21\u5757\u7684\u547D\u540D\u7A7A\u95F4
    // myPage: {
    //   state: () => ({ ... }),
    //   getters: {
    //     someGetter () { ... } // -> getters['a/someGetter']
    //   }
    // },
  }
}
`,lang:"javascript"})]),_:1})}}};export{l as default};
