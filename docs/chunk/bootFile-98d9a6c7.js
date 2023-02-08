import{r as n,o as d,c as u,f as l,g as e,a9 as t,v as r}from"./vendor-585b19a3.js";const h=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"prop name"),t("th",{class:"text-left"},"description")])],-1),p=t("tbody",null,[t("tr",null,[t("td",null,"app"),t("td",null,"Vue app instance")]),t("tr",null,[t("td",null,"router"),t("td",null,"Instance of Vue Router from \u2018src/router/index.js\u2019")]),t("tr",null,[t("td",null,"store"),t("td",null,"Instance of the Pinia or the Vuex store - store only will be passed if your project uses Pinia")]),t("tr",null,[t("td",null,"ssrContext"),t("td",null,"Available only on server-side, if building for SSR. More info")]),t("tr",null,[t("td",null,"urlPath"),t("td",null,"The pathname (path + search) part of the URL. It also contains the hash on client-side.")]),t("tr",null,[t("td",null,"publicPath"),t("td",null,"The configured public path.")]),t("tr",null,[t("td",null,"redirect"),t("td",null,"Function to call to redirect to another URL. Accepts String (full URL) or a Vue Router location String or Object.")])],-1),_=t("h2",{id:"1-\u53EF\u4EE5\u5F02\u6B65",class:"doc-heading"},"\u53EF\u4EE5\u5F02\u6B65",-1),m=t("h2",{id:"2-\u4ECEnode-modules\u4E2D\u5F15\u5165",class:"doc-heading"},"\u4ECEnode_modules\u4E2D\u5F15\u5165",-1),f=t("h2",{id:"3-\u9009\u62E9\u6027boot",class:"doc-heading"},"\u9009\u62E9\u6027boot",-1),b=t("h2",{id:"4-redirect",class:"doc-heading"},"redirect",-1),g=t("p",null,[r("The redirect() method accepts a String (full URL) or a Vue Router location String or Object."),t("br"),r(" On SSR it can receive a second parameter which should be a Number for any of the HTTP STATUS codes that redirect the browser (3xx ones).")],-1),x=t("ul",null,[t("li",null,"\u4E0D\u7528\u6DFB\u52A0 publicPath"),t("li",null,"\u4E0D\u4F1A\u6DFB\u52A0 hash")],-1),j=t("p",null,"As it was mentioned in the previous sections, the default export of a boot file can return a Promise. If this Promise gets rejected with an Object that contains a \u201Curl\u201D property, then Quasar CLI will redirect the user to that URL:",-1),V={__name:"bootFile",setup(R){const a=[{id:"doc-title",title:"boot file"},{id:"1-\u53EF\u4EE5\u5F02\u6B65",title:"1. \u53EF\u4EE5\u5F02\u6B65"},{id:"2-\u4ECEnode-modules\u4E2D\u5F15\u5165",title:"2. \u4ECEnode_modules\u4E2D\u5F15\u5165"},{id:"3-\u9009\u62E9\u6027boot",title:"3. \u9009\u62E9\u6027boot"},{id:"4-redirect",title:"4. redirect"}];return(v,S)=>{const s=n("q-markup-table"),c=n("c-scroll-area"),o=n("doc-code"),i=n("doc-page");return d(),u(i,{desc:"",toc:a},{default:l(()=>[e(c,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:l(()=>[e(s,{flat:"",bordered:"",dense:""},{default:l(()=>[h,p]),_:1})]),_:1}),_,e(o,{code:`export default async ({ app, router, store }) => {
  // something to do
  await something()
}
`,lang:"javascript"}),m,e(o,{code:`boot: [
  '~my-npm-package/some/file'
]
`,lang:"javascript"}),f,e(o,{code:`boot: [
  ctx.mode.electron ? 'some-file' : ''
]
`,lang:"javascript"}),b,g,x,e(o,{code:`redirect('/1') // Vue Router location as String
redirect({ path: '/1' }) // Vue Router location as Object
redirect('https://quasar.dev') // Example for redirect() with a URL
`,lang:"javascript"}),j,e(o,{code:`export default () => {
  const isAuthorized = // ...
  if (!isAuthorized && !urlPath.startsWith('/login')) {
    return Promise.reject({ url: '/login' })
  }
}
`,lang:"javascript"})]),_:1})}}};export{V as default};
