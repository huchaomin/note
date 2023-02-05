import{r as t,o as c,c as a,f as d,g as s,aa as r}from"./vendor.js";const i=r("h2",{id:"1-\u5411-getter-\u4F20\u9012\u53C2\u6570",class:"doc-heading"},"\u5411 getter \u4F20\u9012\u53C2\u6570",-1),u=r("p",null,"\u8BF7\u6CE8\u610F\uFF0C\u5F53\u4F60\u8FD9\u6837\u505A\u65F6\uFF0Cgetter \u5C06\u4E0D\u518D\u88AB\u7F13\u5B58\uFF0C\u5B83\u4EEC\u53EA\u662F\u4E00\u4E2A\u88AB\u4F60\u8C03\u7528\u7684\u51FD\u6570\u3002\u4E0D\u8FC7\uFF0C\u4F60\u53EF\u4EE5\u5728 getter \u672C\u8EAB\u4E2D\u7F13\u5B58\u4E00\u4E9B\u7ED3\u679C\uFF0C\u867D\u7136\u8FD9\u79CD\u505A\u6CD5\u5E76\u4E0D\u5E38\u89C1\uFF0C\u4F46\u53EF\u4EE5\u8BC1\u660E\u7684\u662F\u5B83\u7684\u6027\u80FD\u4F1A\u66F4\u597D\uFF1A",-1),f={__name:"getters",setup(_){const n=[{id:"doc-title",title:"getters"},{id:"1-\u5411-getter-\u4F20\u9012\u53C2\u6570",title:"1. \u5411 getter \u4F20\u9012\u53C2\u6570"}];return(g,p)=>{const e=t("doc-code"),o=t("doc-page");return c(),a(o,{desc:"",toc:n},{default:d(()=>[i,s(e,{code:`export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
`,lang:"javascript"}),u,s(e,{code:`export const useStore = defineStore('main', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
`,lang:"javascript"})]),_:1})}}};export{f as default};
