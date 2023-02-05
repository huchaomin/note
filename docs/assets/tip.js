import{r as o,o as l,c,f as p,a8 as e,g as n,v as i}from"./vendor.js";const r=e("li",null,[e("p",null,"defineStore \u7B2C\u4E00\u4E2A\u53C2\u6570\u5FC5\u987B\u552F\u4E00\uFF0C\u58F0\u660E\u591A\u6B21\u65E0\u6548\uFF0C\u4EE5\u7B2C\u4E00\u6B21\u4E3A\u51C6")],-1),u=e("li",null,[e("p",null,"\u5B83\u6709\u4E09\u4E2A\u6982\u5FF5\uFF0Cstate\u3001getters \u548C actions")],-1),d=e("li",null,[e("p",null,"\u5728 setup() \u8C03\u7528 useStore() \u4E4B\u524D\uFF0Cstore \u5B9E\u4F8B\u662F\u4E0D\u4F1A\u88AB\u521B\u5EFA\u7684")],-1),_=e("li",null,[e("p",null,"store \u662F\u4E00\u4E2A\u7528 reactive \u5305\u88C5\u7684\u5BF9\u8C61\uFF0C\u8FD9\u610F\u5473\u7740\u4E0D\u9700\u8981\u5728 getters \u540E\u9762\u5199 .value\uFF0C\u5C31\u50CF setup \u4E2D\u7684 props \u4E00\u6837\uFF0C\u5982\u679C\u4F60\u5199\u4E86\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u80FD\u89E3\u6784\u5B83\uFF08action\u9664\u5916\uFF09")],-1),m=e("li",null,[e("p",null,[i("\u60F3\u89E3\u6784 store\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("code",{class:"doc-token"},"const { name, doubleCount } = storeToRefs(store)")])],-1),f=e("li",null,[e("p",null,"compositon api \u4E0D\u652F\u6301 $reset\u65B9\u6CD5\uFF1A setup syntax and does not implement $reset()")],-1),h=e("p",null,"\u4F60\u53EF\u4EE5\u5728pinia\u5B9E\u4F8B\u4E0A\u4FA6\u542C\u6574\u4E2A state",-1),S=e("li",null,[e("p",null,"\u5355\u9875\u9762\u5E94\u7528\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528 store")],-1),N={__name:"tip",setup(g){const s=[{id:"doc-title",title:"tip"}];return(v,x)=>{const t=o("doc-code"),a=o("doc-page");return l(),c(a,{desc:"",toc:s},{default:p(()=>[e("ul",null,[r,u,d,_,m,f,e("li",null,[h,n(t,{code:`watch(
  pinia.state,
  (state) => {
    // \u6BCF\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A state \u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8\u3002
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
`,lang:"javascript"})]),S]),n(t,{code:`import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// \u274C  \u5931\u8D25\uFF0C\u56E0\u4E3A\u5B83\u662F\u5728\u521B\u5EFA pinia \u4E4B\u524D\u88AB\u8C03\u7528\u7684
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// \u2705 \u6210\u529F\uFF0C\u56E0\u4E3A pinia \u5B9E\u4F8B\u73B0\u5728\u6FC0\u6D3B\u4E86
const userStore = useUserStore()
`,lang:"javascript"})]),_:1})}}};export{N as default};
