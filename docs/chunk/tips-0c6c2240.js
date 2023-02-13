import{r as s,o as c,c as p,f as o,aa as t,g as n,v as e}from"./vendor-90615676.js";const h=t("h2",{id:"1-tip",class:"doc-heading"},"tip",-1),_=t("li",null,[e("In Quasar, all Boolean properties have "),t("code",{class:"doc-token"},"false"),e(" as the default value."),t("br"),e(" As a result, you don\u2019t have to explictly assign them the "),t("code",{class:"doc-token"},"false"),e(" value.")],-1),f=t("li",null,[e("Quasar uses "),t("code",{class:"doc-token"},"eval-cheap-module-source-map"),e(" by default.")],-1),m=t("li",null,[e("Quasar uses the "),t("code",{class:"doc-token"},"en-US"),e(" Language Pack by default")],-1),g=t("li",null,[e("QBtn component will use the CSS "),t("code",{class:"doc-token"},"text-transform: uppercase"),e(" (no-caps?)")],-1),v=t("li",null,[e("Quasar uses "),t("code",{class:"doc-token"},"Material Icons"),e(" webfont as the icon set for its components")],-1),y=t("li",null,"Roboto comes with 5 different font weights you can use: 100, 300, 400, 500, 70",-1),w=t("li",null,"q-gutter \u548C q-col-gutter \u533A\u522B\u662F\u5B50\u5143\u7D20\u7528\u7684\u662Fmargin\u6216\u8005padding",-1),b=t("li",null,"QLayout QPageContainer, QHeader, QFooter and QLayoutDrawer \u4F7F\u7528margin\u4F1A\u5F71\u54CD\u5B9A\u4F4D\uFF0C\u4F7F\u7528padding\u6CA1\u95EE\u9898",-1),x=t("li",null,"stores for pinia, store for vuex",-1),Q=t("li",null,"LoadingBar active when runs the preFetch hooks",-1),S=t("li",null,"console.log(process.env) \u8FC7\u7A0B\u53D8\u91CF\u4E0D\u80FD\u6253\u5370\u51FA\u6765",-1),k=t("h2",{id:"2-app-flow",class:"doc-heading"},"app flow",-1),q=t("ul",null,[t("li",null,"Quasar is initialized (components, directives, plugins, Quasar i18n, Quasar icon sets)"),t("li",null,"Quasar Extras get imported (Roboto font \u2013 if used, icons, animations, \u2026)"),t("li",null,"Quasar CSS & your app\u2019s global CSS are imported"),t("li",null,"App.vue is loaded (not yet being used)"),t("li",null,"Store is imported (if using Pinia in src/stores or Vuex in src/store)"),t("li",null,"Pinia (if using) is injected into the Vue app instance"),t("li",null,"Router is imported (in src/router)"),t("li",null,"Boot files are imported"),t("li",null,"Router default export function executed"),t("li",null,"Boot files get their default export function executed"),t("li",null,"(if on Electron mode) Electron is imported and injected into Vue prototype"),t("li",null,"(if on Cordova mode) Listening for \u201Cdeviceready\u201D event and only then continuing with following steps"),t("li",null,"Instantiating Vue with root component and attaching to DOM")],-1),B=t("h2",{id:"3-env",class:"doc-heading"},"env",-1),C=t("p",null,"quasar",-1),E=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"({}).name"),t("th",{class:"text-left"},"type"),t("th",{class:"text-left"},"meaning")])],-1),V=t("tbody",null,[t("tr",null,[t("td",null,"DEV"),t("td",null,"Boolean"),t("td",null,"Code runs in development mode")]),t("tr",null,[t("td",null,"PROD"),t("td",null,"Boolean"),t("td",null,"Code runs in production mode")]),t("tr",null,[t("td",null,"DEBUGGING"),t("td",null,"Boolean"),t("td",null,"Code runs in development mode or --debug flag was set for production mode")]),t("tr",null,[t("td",null,"CLIENT"),t("td",null,"Boolean"),t("td",null,"Code runs on client (not on server)")]),t("tr",null,[t("td",null,"SERVER"),t("td",null,"Boolean"),t("td",null,"Code runs on server (not on client)")]),t("tr",null,[t("td",null,"MODE"),t("td",null,"String"),t("td",null,"Quasar CLI mode (spa, pwa, \u2026)")]),t("tr",null,[t("td",null,"NODE_ENV"),t("td",null,"String"),t("td",null,"Has two possible values: production or development")])],-1),L=t("br",null,null,-1),D=t("h2",{id:"4-accessing-the-router-in-pinia-stores",class:"doc-heading"},"accessing-the-router-in-pinia-stores",-1),j={__name:"tips",setup(N){const i=[{id:"doc-title",title:"quasar tips"},{id:"1-tip",title:"1. tip"},{id:"2-app-flow",title:"2. app flow"},{id:"3-env",title:"3. env"},{id:"4-accessing-the-router-in-pinia-stores",title:"4. accessing-the-router-in-pinia-stores"}];return(R,I)=>{const l=s("doc-link"),a=s("q-markup-table"),d=s("c-scroll-area"),u=s("doc-code"),r=s("doc-page");return c(),p(r,{desc:"",toc:i},{default:o(()=>[h,t("ul",null,[_,f,m,g,v,y,t("li",null,[n(l,{to:"https://quasar.dev/style/sass-scss-variables#caveat"},{default:o(()=>[e("\u6709\u2019$'\u7B26\u53F7\u7684\u6587\u4EF6\u624D\u4F1A\u81EA\u52A8\u5F15\u5165 Quasar Sass/SCSS variables")]),_:1})]),w,t("li",null,[n(l,{to:"https://quasar.dev/layout/grid/flexbox-patterns#masonry-like-layout"},{default:o(()=>[e("\u7C7B\u4F3C\u7816\u77F3\u7ED3\u6784\u5E03\u5C40")]),_:1})]),b,t("li",null,[n(l,{to:"https://quasar.dev/layout/layout#containerized-qlayout"},{default:o(()=>[e("QLayout \u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u91CC\u5C42\u5143\u7D20\uFF0CThe breakpoint does not refer to the window width, but to the actual width of the QLayout")]),_:1})]),x,Q,t("li",null,[n(l,{to:"https://quasar.dev/quasar-cli-vite/handling-vite#inspecting-vite-config"},{default:o(()=>[e("\u67E5\u770Bquasar.config.js\u7684\u914D\u7F6E")]),_:1})]),S]),k,q,B,C,n(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:o(()=>[n(a,{flat:"",bordered:"",dense:""},{default:o(()=>[E,V]),_:1})]),_:1}),t("p",null,[e("vite"),L,n(l,{to:"https://vitejs.dev/guide/env-and-mode.html"},{default:o(()=>[e("\u5B98\u65B9\u6587\u6863")]),_:1})]),D,n(u,{code:`import { defineStore } from 'pinia'

export const useWhateverStore = defineStore('whatever', {
  // ...
  actions: {
    whateverAction () {
      this.router.push('...') // TODO \u8BA9\u6211\u8BD5\u8BD5
    }
  }
}
`,lang:"javascript"})]),_:1})}}};export{j as default};
