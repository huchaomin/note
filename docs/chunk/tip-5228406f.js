import{n as o,o as l,p as a,w as i,i as e,a as u,f as p}from"./vendor-a2411ed8.js";const c=e("li",null,[e("p",null,"defineStore \u7B2C\u4E00\u4E2A\u53C2\u6570\u5FC5\u987B\u552F\u4E00\uFF0C\u58F0\u660E\u591A\u6B21\u65E0\u6548\uFF0C\u4EE5\u7B2C\u4E00\u6B21\u4E3A\u51C6")],-1),r=e("li",null,[e("p",null,"\u5B83\u6709\u4E09\u4E2A\u6982\u5FF5\uFF0Cstate\u3001getters \u548C actions")],-1),A=e("li",null,[e("p",null,"\u5728 setup() \u8C03\u7528 useStore() \u4E4B\u524D\uFF0Cstore \u5B9E\u4F8B\u662F\u4E0D\u4F1A\u88AB\u521B\u5EFA\u7684")],-1),_=e("li",null,[e("p",null,"store \u662F\u4E00\u4E2A\u7528 reactive \u5305\u88C5\u7684\u5BF9\u8C61\uFF0C\u8FD9\u610F\u5473\u7740\u4E0D\u9700\u8981\u5728 getters \u540E\u9762\u5199 .value\uFF0C\u5C31\u50CF setup \u4E2D\u7684 props \u4E00\u6837\uFF0C\u5982\u679C\u4F60\u5199\u4E86\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u80FD\u89E3\u6784\u5B83\uFF08action\u9664\u5916\uFF09")],-1),d=e("li",null,[e("p",null,[p("\u60F3\u89E3\u6784 store\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("code",{class:"doc-token"},"const { name, doubleCount } = storeToRefs(store)")])],-1),m=e("li",null,[e("p",null,"compositon api \u4E0D\u652F\u6301 $reset\u65B9\u6CD5\uFF1A setup syntax and does not implement $reset()")],-1),B=e("li",null,[e("p",null,"\u4F60\u53EF\u4EE5\u5728pinia\u5B9E\u4F8B\u4E0A\u4FA6\u542C\u6574\u4E2A state")],-1),C=e("p",null,"\u4E8B\u4EF6\u8BA2\u9605 \u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528 pinia \u7684 $onAction",-1),F=e("li",null,[e("p",null,"\u5355\u9875\u9762\u5E94\u7528\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528 store")],-1),S={__name:"tip",setup(D){const s=[{id:"doc-title",title:"tip"}];return(h,f)=>{const t=o("doc-code"),n=o("doc-page");return l(),a(n,{desc:"",toc:s},{default:i(()=>[e("ul",null,[c,r,A,_,d,m,B,e("li",null,[C,u(t,{code:"watch%28%0A%20%20pinia.state%2C%0A%20%20%28state%29%20%3D%3E%20%7B%0A%20%20%20%20//%20%u6BCF%u5F53%u72B6%u6001%u53D1%u751F%u53D8%u5316%u65F6%uFF0C%u5C06%u6574%u4E2A%20state%20%u6301%u4E45%u5316%u5230%u672C%u5730%u5B58%u50A8%u3002%0A%20%20%20%20localStorage.setItem%28%27piniaState%27%2C%20JSON.stringify%28state%29%29%0A%20%20%7D%2C%0A%20%20%7B%20deep%3A%20true%20%7D%0A%29%0A",lang:"javascript"})]),F]),u(t,{code:"import%20%7B%20useUserStore%20%7D%20from%20%27@/stores/user%27%0Aimport%20%7B%20createApp%20%7D%20from%20%27vue%27%0Aimport%20App%20from%20%27./App.vue%27%0A%0A//%20%u274C%20%20%u5931%u8D25%uFF0C%u56E0%u4E3A%u5B83%u662F%u5728%u521B%u5EFA%20pinia%20%u4E4B%u524D%u88AB%u8C03%u7528%u7684%0Aconst%20userStore%20%3D%20useUserStore%28%29%0A%0Aconst%20pinia%20%3D%20createPinia%28%29%0Aconst%20app%20%3D%20createApp%28App%29%0Aapp.use%28pinia%29%0A%0A//%20%u2705%20%u6210%u529F%uFF0C%u56E0%u4E3A%20pinia%20%u5B9E%u4F8B%u73B0%u5728%u6FC0%u6D3B%u4E86%0Aconst%20userStore%20%3D%20useUserStore%28%29%0A",lang:"javascript"})]),_:1})}}};export{S as default};
