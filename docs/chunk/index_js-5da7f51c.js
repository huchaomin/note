import{r as t,o as a,c,f as s,g as d}from"./vendor-5a734afa.js";const i={__name:"index_js",setup(r){const e=[{id:"doc-title",title:"vuex \u4F7F\u7528"}];return(u,p)=>{const n=t("doc-code"),o=t("doc-page");return a(),c(o,{desc:"",toc:e},{default:s(()=>[d(n,{code:`export default new Vuex.Store({
  // \u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u6BCF\u5F53Vuex\u72B6\u6001\u5728\u53D8\u5F02\u5904\u7406\u7A0B\u5E8F\u4E4B\u5916\u8FDB\u884C\u53D8\u5F02\u65F6\uFF0C\u90FD\u4F1A\u5F15\u53D1\u9519\u8BEF
  // \u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u8C03\u8BD5\u5DE5\u5177\u53EF\u4EE5\u660E\u786E\u8DDF\u8E2A\u6240\u6709\u72B6\u6001\u7A81\u53D8
  // \u90E8\u7F72\u751F\u4EA7\u65F6\u8BF7\u52FF\u542F\u7528\u4E25\u683C\u6A21\u5F0F\uFF01\u4E25\u683C\u6A21\u5F0F\u5728\u72B6\u6001\u6811\u4E0A\u8FD0\u884C\u540C\u6B65\u6DF1\u5EA6\u76D1\u89C6\u7A0B\u5E8F\uFF0C\u4EE5\u68C0\u6D4B\u4E0D\u9002\u5F53\u7684\u7A81\u53D8\uFF0C\u5F53\u60A8\u5BF9\u8BE5\u72B6\u6001\u8FDB\u884C\u5927\u91CF\u7A81\u53D8\u65F6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u975E\u5E38\u6602\u8D35
  // \u786E\u4FDD\u5728\u751F\u4EA7\u4E2D\u5C06\u5176\u5173\u95ED\u4EE5\u907F\u514D\u6027\u80FD\u6210\u672C
  strict: process\\.env\\.NODE_ENV !== 'production',
  state: {
    count: 1
  },
  // \u7C7B\u4F3C\u8BA1\u7B97\u5C5E\u6027
  getters: {
    doubleCount: state => { // (state, getters, rootState, rootGetters)
      return state.count * 2
    },
  },
  mutations: {
    addCount: (state, payload) => { // \u53EA\u6709\u4E24\u4E2A\u53C2\u6570
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
`,lang:"javascript"})]),_:1})}}};export{i as default};
