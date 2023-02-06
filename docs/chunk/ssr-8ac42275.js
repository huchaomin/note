import{r as a,o as d,c as l,f as s,a8 as e,g as t,v as o}from"./vendor-5a734afa.js";const p=e("h2",{id:"1-quasar-lang-pack",class:"doc-heading"},"quasar-lang-pack",-1),h=e("h2",{id:"2-platform-detection",class:"doc-heading"},"Platform Detection",-1),u=e("h2",{id:"3-boot-redirect",class:"doc-heading"},"boot redirect",-1),m=e("p",null,[o("The redirect() method accepts a String (full URL) or a Vue Router location String or Object."),e("br"),o(" On SSR it can receive a second parameter which should be a Number for any of the HTTP STATUS codes that redirect the browser (3xx ones).")],-1),_=e("h2",{id:"4-cross-request-state-pollution",class:"doc-heading"},"cross-request state pollution",-1),f=e("h2",{id:"5-prefetch-pinia-on-ssr",class:"doc-heading"},"prefetch Pinia on SSR",-1),g=e("h2",{id:"6-others",class:"doc-heading"},"others",-1),w={__name:"ssr",setup(S){const r=[{id:"doc-title",title:"ssr"},{id:"1-quasar-lang-pack",title:"1. quasar-lang-pack"},{id:"2-platform-detection",title:"2. Platform Detection"},{id:"3-boot-redirect",title:"3. boot redirect"},{id:"4-cross-request-state-pollution",title:"4. cross-request state pollution"},{id:"5-prefetch-pinia-on-ssr",title:"5. prefetch Pinia on SSR"},{id:"6-others",title:"6. others"}];return(b,x)=>{const i=a("doc-link"),n=a("doc-code"),c=a("doc-page");return d(),l(c,{desc:"",toc:r},{default:s(()=>[p,e("p",null,[t(i,{to:"https://quasar.dev/options/quasar-language-packs#dynamical-ssr-"},{default:s(()=>[o("\u94FE\u63A5")]),_:1})]),h,e("p",null,[t(i,{to:"https://quasar.dev/options/platform-detection#note-about-ssr"},{default:s(()=>[o("\u94FE\u63A5")]),_:1})]),u,m,_,t(n,{code:`import { boot } from 'quasar/wrappers';
import axios from 'axios';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' }); // \u79FB\u5230\u91CC\u9762\u53BB\uFF0C\u9632\u6B62\u4EA4\u53C9\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3

export default boot(({ app }) => {});

export { api }; // \u5982\u679C\u79FB\u5230\u91CC\u9762\u53BB\u5C31\u4E0D\u80FD\u5728\u8FD9\u91CC\u5BFC\u51FA\u4E86

`,lang:"javascript"}),f,t(n,{code:`// App.vue - handling Pinia stores
// example with a store named "myStore"
// placed in /src/stores/myStore.js|ts

import { useMyStore } from 'stores/myStore'

export default {
  // ...
  preFetch ({ store }) {
    const myStore = useMyStore(store)
    // do something with myStore
  }
}
`,lang:"javascript"}),g,t(n,{code:`/*
 * If not building with SSR mode, you can
 * directly export the Router/Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router/Store instance.
 */
`,lang:"javascript"})]),_:1})}}};export{w as default};
