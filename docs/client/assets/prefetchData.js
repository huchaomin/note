import{r as t,o as s,c as u,f as n,ac as e,g as o,v as i}from"./vendor.js";const d=e("ul",null,[e("li",null,"\u53EA\u80FD\u5728vue-router\u4E2D\u4F7F\u7528\u7684component\u4E2D\u4F7F\u7528"),e("li",null,"pre-fetch data"),e("li",null,"validate the route"),e("li",null,"redirect to another route, when some conditions aren\u2019t met (like user isn\u2019t logged in)"),e("li",null,"can help in initializing the Store state"),e("li",null,"will run before the actual route component is rendered"),e("li",null,"\u4E0D\u80FD\u4F7F\u7528 this"),e("li",null,"runs only once"),e("li",null,"\u6240\u6709\u6A21\u5F0F\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0Cespecially useful for SSR builds"),e("li",null,"\u5982\u679C\u60F3\u7F13\u5B58\u6570\u636E\uFF0C\u6700\u597D\u642D\u914Dpinia\u4F7F\u7528")],-1),p=e("h2",{id:"1-\u8C03\u7528\u94FE",class:"doc-heading"},"\u8C03\u7528\u94FE",-1),h=e("h2",{id:"2-\u4F8B\u5B50",class:"doc-heading"},"\u4F8B\u5B50",-1),g={__name:"prefetchData",setup(_){const a=[{id:"doc-title",title:"prefetch data"},{id:"1-\u8C03\u7528\u94FE",title:"1. \u8C03\u7528\u94FE"},{id:"2-\u4F8B\u5B50",title:"2. \u4F8B\u5B50"}];return(f,m)=>{const r=t("doc-link"),l=t("doc-code"),c=t("doc-page");return s(),u(c,{desc:"",toc:a},{default:n(()=>[e("p",null,[o(r,{to:"https://quasar.dev/quasar-cli-vite/prefetch-feature#introduction"},{default:n(()=>[i("\u5B98\u65B9\u6587\u6863")]),_:1})]),d,p,e("p",null,[o(r,{to:"https://quasar.dev/quasar-cli-vite/prefetch-feature#when-prefetch-gets-activated"},{default:n(()=>[i("\u5B98\u65B9\u94FE\u63A5")]),_:1})]),h,o(l,{code:`<script>
export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // fetch data, validate route and optionally redirect to some other route...
    // redirect({ path: '/login' })
    // redirect({ path: '/moved-permanently' }, 301) // 302 \u9ED8\u8BA4
    // redirect(false) // aborts the current route navigation, supported only on client-side

    // -- Pinia on Non SSR --
    // import { useMyStore } from 'stores/myStore'
    // export default {
    //   preFetch () {
    //     const myStore = useMyStore()
    //   }
    // }

    // ssrContext is available only server-side in SSR mode
    // Return a Promise if you are running an async job
  },
}
<\/script>
<script setup>....<\/script>
`,lang:"javascript"})]),_:1})}}};export{g as default};
