import{r,o as s,c as d,f as l,g as t,aa as e,v as o}from"./vendor-90615676.js";const i=e("h2",{id:"1-\u5168\u5C40\u5B88\u536B\u4E0E\u94A9\u5B50",class:"doc-heading"},"\u5168\u5C40\u5B88\u536B\u4E0E\u94A9\u5B50",-1),f=e("h2",{id:"2-\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B",class:"doc-heading"},"\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B",-1),u=e("h2",{id:"3-\u7EC4\u4EF6\u5185\u7684\u5B88\u536B",class:"doc-heading"},"\u7EC4\u4EF6\u5185\u7684\u5B88\u536B",-1),h=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("\u7EC4\u4EF6\u5185\u7684\u5B88\u536B\u53EA\u80FD\u5728 "),e("code",{class:"doc-token"},"component"),o(" \u5BF9\u5E94\u7684\u90A3\u4E2A\u7EC4\u4EF6\u91CC\u9762\u751F\u6548\uFF0C"),e("br"),o(" \u81F3\u4E8E "),e("code",{class:"doc-token"},"component"),o(" \u91CC\u9762\u53C8\u5F15\u7528\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u5185\u7684\u5B88\u536B\u4E0D\u751F\u6548"),e("br"),o(" \u6240\u4EE5\u5BF9\u4E8E "),e("code",{class:"doc-token"},"lazyLoadView"),o(" \u6A21\u5F0F\uFF0C\u53EA\u80FD\u5199\u5728\u4E0B\u9762")])],-1),m=e("h2",{id:"4-\u89E6\u53D1\u987A\u5E8F",class:"doc-heading"},"\u89E6\u53D1\u987A\u5E8F",-1),x={__name:"\u5BFC\u822A\u5B88\u536B",setup(b){const c=[{id:"doc-title",title:"vue-router \u5BFC\u822A\u5B88\u536B"},{id:"1-\u5168\u5C40\u5B88\u536B\u4E0E\u94A9\u5B50",title:"1. \u5168\u5C40\u5B88\u536B\u4E0E\u94A9\u5B50"},{id:"2-\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B",title:"2. \u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B"},{id:"3-\u7EC4\u4EF6\u5185\u7684\u5B88\u536B",title:"3. \u7EC4\u4EF6\u5185\u7684\u5B88\u536B"},{id:"4-\u89E6\u53D1\u987A\u5E8F",title:"4. \u89E6\u53D1\u987A\u5E8F"}];return(_,p)=>{const n=r("doc-code"),a=r("doc-page");return s(),d(a,{desc:"vue-router \u5BFC\u822A\u5B88\u536B\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u8C03\u7528\u65F6\u673A",toc:c},{default:l(()=>[i,t(n,{code:`// \u5168\u5C40\u524D\u7F6E\u5B88\u536B
// \u5F53\u4E00\u4E2A\u5BFC\u822A\u89E6\u53D1\u65F6\uFF0C\u5168\u5C40\u524D\u7F6E\u5B88\u536B\u6309\u7167\u521B\u5EFA\u987A\u5E8F\u8C03\u7528\u3002
// \u5F02\u6B65\u89E3\u6790\u6267\u884C
// \u5BFC\u822A\u5728\u6240\u6709\u5168\u5C40\u524D\u7F6E\u5B88\u536B resolve \u5B8C\u4E4B\u524D\u4E00\u76F4\u5904\u4E8E\u7B49\u5F85\u4E2D
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})
// \u5168\u5C40\u89E3\u6790\u5B88\u536B \u5728\u5BFC\u822A\u88AB\u786E\u8BA4\u4E4B\u524D\uFF0C\u540C\u65F6\u5728\u6240\u6709\u7EC4\u4EF6\u5185\u5B88\u536B\u548C\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\u88AB\u89E3\u6790\u4E4B\u540E
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})
// \u5168\u5C40\u540E\u7F6E\u94A9\u5B50 \u4E0D\u4F1A\u63A5\u53D7 next \u51FD\u6570\u4E5F\u4E0D\u4F1A\u6539\u53D8\u5BFC\u822A\u672C
router.afterEach((to, from) => {
  console.log('afterEach')
})
`,lang:"javascript"}),f,t(n,{code:`{
  path: '/home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  beforeEnter: (to, from, next) => {
    // \u548CbeforeEach\u5B8C\u5168\u76F8\u540C\uFF0C\u5982\u679C\u90FD\u8BBE\u7F6E\u5219\u5728beforeEach\u4E4B\u540E\u7D27\u968F\u6267\u884C
    console.log('beforeEnter')
    next()
  },
},
`,lang:"javascript"}),u,t(n,{code:`// \u5728\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531 \u88AB confirm \u524D\u8C03\u7528
// \u4E0D\uFF01\u80FD\uFF01\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B \`this\`
// \u56E0\u4E3A\u5F53\u5B88\u536B\u6267\u884C\u524D\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u8FD8\u6CA1\u88AB\u521B\u5EFA,\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 next \u56DE\u8C03\u53BB\u83B7\u53D6
beforeRouteEnter (to, from, next) {
  console.log('beforeRouteEnter')
  next(vm => {
    console.log('beforeRouteEnter next\u56DE\u8C03 \u5728created\u548Cmounted\u4E4B\u95F4\u88AB\u8C03\u7528')
  })
},
// \u5728\u5F53\u524D\u8DEF\u7531\u6539\u53D8\uFF0C\u4F46\u662F\u8BE5\u7EC4\u4EF6\u88AB\u590D\u7528\u65F6\u8C03\u7528
// \u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5E26\u6709\u52A8\u6001\u53C2\u6570\u7684\u8DEF\u5F84 /foo/:id\uFF0C\u5728 /foo/1 \u548C /foo/2 \u4E4B\u95F4\u8DF3\u8F6C\u7684\u65F6\u5019\uFF0C
// \u7531\u4E8E\u4F1A\u6E32\u67D3\u540C\u6837\u7684 Foo \u7EC4\u4EF6\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u88AB\u590D\u7528\u3002\u800C\u8FD9\u4E2A\u94A9\u5B50\u5C31\u4F1A\u5728\u8FD9\u4E2A\u60C5\u51B5\u4E0B\u88AB\u8C03\u7528\u3002
// \u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`
beforeRouteUpdate (to, from, next) {
  console.log('beforeRouteUpdate')
  next()
},
// \u5BFC\u822A\u79BB\u5F00\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531\u65F6\u8C03\u7528
// \u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`
beforeRouteLeave (to, from, next) {
  console.log('beforeRouteLeave')
  next()
},
`,lang:"javascript"}),h,t(n,{code:`return Promise.resolve({
  functional: true,
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next(vm => {
      console.log('lazyLoadView beforeRouteEnter next\u56DE\u8C03 \u5728created\u548Cmounted\u4E4B\u95F4\u88AB\u8C03\u7528')
    })
  },
  render (h, { data, children }) {
    return h(AsyncHandler, data, children)
  },
})
`,lang:"javascript"}),m,t(n,{code:`beforeRouterLeave --> beforeEach --> beforeEnter --> beforeRouteEnter --> beforeResolve --> afterEach -->
created --> beforeRouteEnter\u7684next\u56DE\u8C03 --> mounted
`,lang:"markup"})]),_:1})}}};export{x as default};
