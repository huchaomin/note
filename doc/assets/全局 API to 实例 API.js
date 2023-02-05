import{r as c,o as u,c as r,f as s,g as t,a8 as e,v as o}from"./vendor.js";const _=e("h2",{id:"1-\u4E00\u89C8",class:"doc-heading"},"\u4E00\u89C8",-1),m=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"2.x \u5168\u5C40 API"),e("th",{class:"text-left"},"3.x \u5B9E\u4F8B API")])],-1),g=e("tbody",null,[e("tr",null,[e("td",null,"Vue.config"),e("td",null,"app.config")]),e("tr",null,[e("td",null,"Vue.config.productionTip"),e("td",null,"\u79FB\u9664")]),e("tr",null,[e("td",null,"Vue.config.ignoredElements"),e("td",null,"app.config.compilerOptions.isCustomElement")]),e("tr",null,[e("td",null,"Vue.component"),e("td",null,"app.component")]),e("tr",null,[e("td",null,"Vue.directive"),e("td",null,"app.directive")]),e("tr",null,[e("td",null,"Vue.mixin"),e("td",null,"app.mixin")]),e("tr",null,[e("td",null,"Vue.use"),e("td",null,"app.use")]),e("tr",null,[e("td",null,"Vue.prototype"),e("td",null,"app.config.globalProperties")]),e("tr",null,[e("td",null,"Vue.extend"),e("td",null,"\u79FB\u9664")])],-1),h=e("h2",{id:"2-config-ignoredelements-\u66FF\u6362\u4E3A-config-iscustomelement",class:"doc-heading"},"config.ignoredElements \u66FF\u6362\u4E3A config.isCustomElement",-1),f={class:"doc-note doc-note--tip"},V=e("p",{class:"doc-note__title"},"\u91CD\u8981",-1),v=e("code",{class:"doc-token"},"isCustomElement",-1),k=e("code",{class:"doc-token"},"@vue/compiler-dom",-1),x=e("code",{class:"doc-token"},"compilerOptions",-1),P=e("ul",null,[e("li",null,[o("\u5F53\u4F7F\u7528\u4EC5\u8FD0\u884C\u65F6\u6784\u5EFA\u7248\u672C\u65F6\uFF0C\u5982\u679C\u914D\u7F6E\u4E86 "),e("code",{class:"doc-token"},"config.compilerOptions.isCustomElement"),o(" \u9009\u9879\uFF0C\u5C06\u53D1\u51FA\u8B66\u544A\uFF0C\u4EE5\u6307\u793A\u7528\u6237\u8BE5\u9009\u9879\u5E94\u8BE5\u5728\u6784\u5EFA\u6B65\u9AA4\u4E2D\u4F20\u9012\uFF1B")]),e("li",null,"\u8FD9\u5C06\u662F Vue CLI \u914D\u7F6E\u4E2D\u65B0\u7684\u9876\u5C42\u9009\u9879\u3002")],-1),b=e("h2",{id:"3-vue-prototype-\u66FF\u6362\u4E3A-config-globalproperties",class:"doc-heading"},"Vue.prototype \u66FF\u6362\u4E3A config.globalProperties",-1),A=e("p",null,[o("\u5728 Vue 2 \u4E2D\uFF0C "),e("code",{class:"doc-token"},"Vue.prototype"),o(" \u901A\u5E38\u7528\u4E8E\u6DFB\u52A0\u6240\u6709\u7EC4\u4EF6\u90FD\u80FD\u8BBF\u95EE\u7684 property\u3002")],-1),j=e("code",{class:"doc-token"},"config.globalProperties",-1),y=e("h2",{id:"4-vue-extend-\u79FB\u9664",class:"doc-heading"},"Vue.extend \u79FB\u9664",-1),I=e("p",null,[o("\u5728 Vue 2.x \u4E2D\uFF0C"),e("code",{class:"doc-token"},"Vue.extend"),o(" \u66FE\u7ECF\u88AB\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E Vue \u6784\u9020\u51FD\u6570\u7684\u201C\u5B50\u7C7B\u201D\uFF0C\u5176\u53C2\u6570\u5E94\u4E3A\u4E00\u4E2A\u5305\u542B\u7EC4\u4EF6\u9009\u9879\u7684\u5BF9\u8C61\u3002\u5728 Vue 3.x \u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6CA1\u6709\u7EC4\u4EF6\u6784\u9020\u5668\u7684\u6982\u5FF5\u4E86\u3002\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 "),e("code",{class:"doc-token"},"createApp"),o(" \u8FD9\u4E2A\u5168\u5C40 API \u6765\u6302\u8F7D\u7EC4\u4EF6\uFF1A")],-1),C=e("h3",{id:"5-\u7C7B\u578B\u63A8\u65AD",class:"doc-heading"},"\u7C7B\u578B\u63A8\u65AD",-1),N=e("p",null,[o("\u5728 Vue 2 \u4E2D\uFF0C"),e("code",{class:"doc-token"},"Vue.extend"),o(" \u4E5F\u88AB\u7528\u6765\u4E3A\u7EC4\u4EF6\u9009\u9879\u63D0\u4F9B TypeScript \u7C7B\u578B\u63A8\u65AD\u3002\u5728 Vue 3 \u4E2D\uFF0C\u4E3A\u4E86\u8FBE\u5230\u76F8\u540C\u7684\u76EE\u7684\uFF0C"),e("code",{class:"doc-token"},"defineComponent"),o(" \u5168\u5C40 API \u53EF\u4EE5\u7528\u6765\u4F5C\u4E3A "),e("code",{class:"doc-token"},"Vue.extend"),o(" \u7684\u66FF\u4EE3\u65B9\u6848\u3002")],-1),w=e("p",null,[o("\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u867D\u7136 "),e("code",{class:"doc-token"},"defineComponent"),o(" \u7684\u8FD4\u56DE\u7C7B\u578B\u662F\u4E00\u4E2A\u7C7B\u4F3C\u6784\u9020\u5668\u7684\u7C7B\u578B\uFF0C\u4F46\u662F\u5B83\u7684\u76EE\u7684\u4EC5\u4EC5\u662F\u4E3A\u4E86 TSX \u7684\u63A8\u65AD\u3002\u5728\u8FD0\u884C\u65F6 "),e("code",{class:"doc-token"},"defineComponent"),o(" \u91CC\u57FA\u672C\u6CA1\u6709\u4EC0\u4E48\u64CD\u4F5C\uFF0C\u53EA\u4F1A\u539F\u6837\u8FD4\u56DE\u8BE5\u9009\u9879\u5BF9\u8C61\u3002")],-1),B=e("h3",{id:"6-\u7EC4\u4EF6\u7EE7\u627F",class:"doc-heading"},"\u7EC4\u4EF6\u7EE7\u627F",-1),E=e("strong",null,"\u7EC4\u5408\u5F0FAPI",-1),M=e("code",{class:"doc-token"},"extends",-1),W=e("code",{class:"doc-token"},"Vue.extend",-1),q=e("h2",{id:"7-\u63D2\u4EF6\u5F00\u53D1\u8005\u987B\u77E5",class:"doc-heading"},"\u63D2\u4EF6\u5F00\u53D1\u8005\u987B\u77E5",-1),F=e("p",null,[o("\u5728 UMD \u6784\u5EFA\u4E2D\uFF0C\u63D2\u4EF6\u5F00\u53D1\u8005\u4F7F\u7528 "),e("code",{class:"doc-token"},"Vue.use"),o(" \u6765\u81EA\u52A8\u5B89\u88C5\u63D2\u4EF6\u662F\u4E00\u4E2A\u901A\u7528\u7684\u505A\u6CD5\u3002\u4F8B\u5982\uFF0C\u5B98\u65B9\u7684 "),e("code",{class:"doc-token"},"vue-router"),o(" \u63D2\u4EF6\u662F\u8FD9\u6837\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u81EA\u884C\u5B89\u88C5\u7684\uFF1A")],-1),O=e("p",null,[o("\u7531\u4E8E "),e("code",{class:"doc-token"},"use"),o(" \u5168\u5C40 API \u5728 Vue 3 \u4E2D\u5DF2\u65E0\u6CD5\u4F7F\u7528\uFF0C\u56E0\u6B64\u6B64\u65B9\u6CD5\u5C06\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5E76\u4E14\u8C03\u7528 "),e("code",{class:"doc-token"},"Vue.use()"),o(" \u73B0\u5728\u5C06\u89E6\u53D1\u4E00\u4E2A\u8B66\u544A\u3002\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\uFF0C\u5F00\u53D1\u8005\u5FC5\u987B\u5728\u5E94\u7528\u5B9E\u4F8B\u4E0A\u663E\u5F0F\u6307\u5B9A\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF1A")],-1),T=e("h2",{id:"8-provide-inject",class:"doc-heading"},"Provide / Inject",-1),$=e("p",null,[o("\u4E0E\u5728 2.x \u6839\u5B9E\u4F8B\u4E2D\u4F7F\u7528 "),e("code",{class:"doc-token"},"provide"),o(" \u9009\u9879\u7C7B\u4F3C\uFF0CVue 3 \u5E94\u7528\u5B9E\u4F8B\u4E5F\u63D0\u4F9B\u4E86\u53EF\u88AB\u5E94\u7528\u5185\u4EFB\u610F\u7EC4\u4EF6\u6CE8\u5165\u7684\u4F9D\u8D56\u9879\uFF1A")],-1),D=e("p",null,[o("\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\u4F7F\u7528 "),e("code",{class:"doc-token"},"provide"),o(" \u5C06\u5C24\u5176\u6709\u7528\uFF0C\u53EF\u4EE5\u66FF\u4EE3 "),e("code",{class:"doc-token"},"globalProperties"),o("\u3002")],-1),H=e("h2",{id:"9-\u5728\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u914D\u7F6E",class:"doc-heading"},"\u5728\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u914D\u7F6E",-1),R=e("p",null,"\u5728\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u914D\u7F6E (\u5982\u7EC4\u4EF6\u6216\u6307\u4EE4) \u7684\u4E00\u79CD\u65B9\u6CD5\u662F\u521B\u5EFA\u5DE5\u5382\u51FD\u6570\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A",-1),S=e("p",null,[o("\u73B0\u5728\uFF0C"),e("code",{class:"doc-token"},"Foo"),o(" \u548C "),e("code",{class:"doc-token"},"Bar"),o(" \u5B9E\u4F8B\u53CA\u5176\u540E\u4EE3\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528 "),e("code",{class:"doc-token"},"focus"),o(" \u6307\u4EE4\u3002")],-1),z={__name:"\u5168\u5C40 API to \u5B9E\u4F8B API",setup(G){const d=[{id:"doc-title",title:"vue3 \u5B9E\u4F8BAPI"},{id:"1-\u4E00\u89C8",title:"1. \u4E00\u89C8"},{id:"2-config-ignoredelements-\u66FF\u6362\u4E3A-config-iscustomelement",title:"2. config.ignoredElements \u66FF\u6362\u4E3A config.isCustomElement"},{id:"3-vue-prototype-\u66FF\u6362\u4E3A-config-globalproperties",title:"3. Vue.prototype \u66FF\u6362\u4E3A config.globalProperties"},{id:"4-vue-extend-\u79FB\u9664",title:"4. Vue.extend \u79FB\u9664"},{id:"5-\u7C7B\u578B\u63A8\u65AD",title:"4.1. \u7C7B\u578B\u63A8\u65AD",sub:!0},{id:"6-\u7EC4\u4EF6\u7EE7\u627F",title:"4.2. \u7EC4\u4EF6\u7EE7\u627F",sub:!0},{id:"7-\u63D2\u4EF6\u5F00\u53D1\u8005\u987B\u77E5",title:"5. \u63D2\u4EF6\u5F00\u53D1\u8005\u987B\u77E5"},{id:"8-provide-inject",title:"6. Provide / Inject"},{id:"9-\u5728\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u914D\u7F6E",title:"7. \u5728\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u914D\u7F6E"}];return(L,U)=>{const i=c("q-markup-table"),a=c("c-scroll-area"),n=c("doc-code"),l=c("doc-link"),p=c("doc-page");return u(),r(p,{desc:"vue3 \u65B0\u589E\u5B9E\u4F8BAPI",toc:d},{default:s(()=>[_,t(a,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:s(()=>[t(i,{flat:"",bordered:"",dense:""},{default:s(()=>[m,g]),_:1})]),_:1}),h,t(n,{code:`// \u4E4B\u524D
Vue.config.ignoredElements = ['my-el', /^ion-/]

// \u4E4B\u540E
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
`,lang:"js"}),e("div",f,[V,e("p",null,[o("\u5728 Vue 3 \u4E2D\uFF0C\u5143\u7D20\u662F\u5426\u662F\u7EC4\u4EF6\u7684\u68C0\u67E5\u5DF2\u8F6C\u79FB\u5230\u6A21\u677F\u7F16\u8BD1\u9636\u6BB5\uFF0C\u56E0\u6B64\u53EA\u6709\u5728\u4F7F\u7528\u8FD0\u884C\u65F6\u7F16\u8BD1\u5668\u65F6\u6B64\u914D\u7F6E\u9009\u9879\u624D\u4F1A\u751F\u6548\u3002\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u4EC5\u8FD0\u884C\u65F6\u6784\u5EFA\u7248\u672C\uFF0C\u5219 "),v,o(" \u5FC5\u987B\u5728\u6784\u5EFA\u6B65\u9AA4\u4E2D\u4F20\u9012\u7ED9 "),k,o(" \u2014\u2014\u6BD4\u5982\uFF0C\u901A\u8FC7 "),t(l,{to:"https://vue-loader.vuejs.org/options.html#compileroptions"},{default:s(()=>[o("vue-loader \u4E2D\u7684 "),x,o(" \u9009\u9879")]),_:1}),o("\u3002")]),P]),b,A,e("p",null,[o("\u5728 Vue 3 \u4E2D\u4E0E\u4E4B\u5BF9\u5E94\u7684\u662F "),t(l,{to:"https://v3.cn.vuejs.org/api/application-config.html#globalproperties"},{default:s(()=>[j]),_:1}),o("\u3002\u8FD9\u4E9B property \u5C06\u88AB\u590D\u5236\u5230\u5E94\u7528\u4E2D\uFF0C\u4F5C\u4E3A\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u7684\u4E00\u90E8\u5206\u3002")]),t(n,{code:`// \u4E4B\u524D - Vue 2
Vue.prototype.$http = () => {}
`,lang:"js"}),t(n,{code:`// \u4E4B\u540E - Vue 3
const app = createApp({})
app.config.globalProperties.$http = () => {}
`,lang:"js"}),y,I,t(n,{code:`// \u4E4B\u524D - Vue 2

// \u521B\u5EFA\u6784\u9020\u5668
const Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// \u521B\u5EFA\u4E00\u4E2A Profile \u7684\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u5B83\u6302\u8F7D\u5230\u4E00\u4E2A\u5143\u7D20\u4E0A
new Profile().$mount('#mount-point')
`,lang:"js"}),t(n,{code:`// \u4E4B\u540E - Vue 3
const Profile = {
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
}
Vue.createApp(Profile).mount('#mount-point')
`,lang:"js"}),e("p",null,[t(l,{to:"https://v3.cn.vuejs.org/guide/migration/props-data.html#_2-x-\u8BED\u6CD5"},{default:s(()=>[o("\u5220\u9664propsData")]),_:1})]),C,N,w,B,e("p",null,[o("\u5728 Vue 3 \u4E2D\uFF0C\u6211\u4EEC\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528 "),E,o(" \u6765\u66FF\u4EE3\u7EE7\u627F\u4E0E mixin\u3002\u5982\u679C\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u4ECD\u7136\u9700\u8981\u4F7F\u7528\u7EC4\u4EF6\u7EE7\u627F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 "),t(l,{to:"https://v3.cn.vuejs.org/api/options-composition.html#extends"},{default:s(()=>[M,o(" \u9009\u9879")]),_:1}),o(" \u6765\u4EE3\u66FF "),W,o("\u3002")]),q,F,t(n,{code:`var inBrowser = typeof window !== 'undefined'
/* \u2026 */
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}
`,lang:"js"}),O,t(n,{code:`const app = createApp(MyApp)
app.use(VueRouter)
`,lang:"js"}),T,$,t(n,{code:`// \u5728\u5165\u53E3\u4E2D
app.provide('guide', 'Vue 3 Guide')

// \u5728\u5B50\u7EC4\u4EF6\u4E2D
export default {
  inject: {
    book: {
      from: 'guide'
    }
  },
  template: \`<div>{{ book }}</div>\`
}
`,lang:"js"}),D,H,R,t(n,{code:`import { createApp } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const createMyApp = options => {
  const app = createApp(options)
  app.directive('focus' /* ... */)

  return app
}

createMyApp(Foo).mount('#foo')
createMyApp(Bar).mount('#bar')
`,lang:"js"}),S]),_:1})}}};export{z as default};
