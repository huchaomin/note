import{r as i,o as d,c as r,f as t,g as e,aa as o,v as a}from"./vendor-774b84b8.js";const h=o("h2",{id:"1-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),u=o("h3",{id:"2-composition-api",class:"doc-heading"},"Composition API",-1),_=o("h3",{id:"3-outside-of-a-vue-file",class:"doc-heading"},"Outside of a vue file",-1),p=o("h2",{id:"4-$q-version",class:"doc-heading"},"$q.version",-1),g=o("p",null,"Quasar version.",-1),q=o("h2",{id:"5-$q-platform",class:"doc-heading"},"$q.platform",-1),$=o("h2",{id:"6-$q-screen",class:"doc-heading"},"$q.screen",-1),m=o("h3",{id:"7-body-classes",class:"doc-heading"},"Body classes",-1),f=o("p",null,"enable body classes(\u5BF9\u9996\u5C4F\u6E32\u67D3\u6709\u5F71\u54CD)",-1),v=o("h3",{id:"8-\u8BBE\u7F6E",class:"doc-heading"},"\u8BBE\u7F6E",-1),b=o("h2",{id:"9-$q-lang",class:"doc-heading"},"$q.lang",-1),y=o("h3",{id:"10-\u67E5\u770B\u6240\u6709\u7684-isoname",class:"doc-heading"},"\u67E5\u770B\u6240\u6709\u7684 isoName",-1),C=o("li",null,"$q.lang.isoName",-1),N=o("li",null,"$q.lang.set(lang) \u8BBE\u7F6E\u7684\u662F $q.lang.isoName \u4E0D\u662F getLocale",-1),k=o("li",null,"$q.lang.getLocale(): will always return the users locale (based on browser settings)",-1),w=o("br",null,null,-1),x=o("h2",{id:"11-$q-iconset",class:"doc-heading"},"$q.iconSet",-1),j=o("h2",{id:"12-$q-cordova",class:"doc-heading"},"$q.cordova",-1),B=o("h2",{id:"13-$q-capacitor",class:"doc-heading"},"$q.capacitor",-1),V={__name:"$q\u5BF9\u8C61",setup(S){const c=[{id:"doc-title",title:"$q \u5BF9\u8C61"},{id:"1-\u4F7F\u7528",title:"1. \u4F7F\u7528"},{id:"2-composition-api",title:"1.1. Composition API",sub:!0},{id:"3-outside-of-a-vue-file",title:"1.2. Outside of a vue file",sub:!0},{id:"4-$q-version",title:"2. $q.version"},{id:"5-$q-platform",title:"3. $q.platform"},{id:"6-$q-screen",title:"4. $q.screen"},{id:"7-body-classes",title:"4.1. Body classes",sub:!0},{id:"8-\u8BBE\u7F6E",title:"4.2. \u8BBE\u7F6E",sub:!0},{id:"9-$q-lang",title:"5. $q.lang"},{id:"10-\u67E5\u770B\u6240\u6709\u7684-isoname",title:"5.1. \u67E5\u770B\u6240\u6709\u7684 isoName",sub:!0},{id:"11-$q-iconset",title:"6. $q.iconSet"},{id:"12-$q-cordova",title:"7. $q.cordova"},{id:"13-$q-capacitor",title:"8. $q.capacitor"}];return(z,Q)=>{const s=i("doc-code"),n=i("doc-link"),l=i("doc-page");return d(),r(l,{desc:"",toc:c},{default:t(()=>[h,u,e(s,{code:`const $q = useQuasar()
console.log($q.platform.is.ios)
`,lang:"javascript"}),_,e(s,{code:`import { Quasar } from 'quasar'
console.log(Quasar.platform.is.ios)
`,lang:"javascript"}),p,g,q,o("p",null,[e(n,{to:"https://quasar.dev/options/platform-detection"},{default:t(()=>[a("\u5B98\u65B9\u6587\u6863")]),_:1})]),$,o("p",null,[e(n,{to:"https://quasar.dev/options/screen-plugin#usage"},{default:t(()=>[a("\u94FE\u63A5")]),_:1})]),m,f,e(s,{code:`framework: {
  config: {
    screen: {
      bodyClasses: true // <<< add this
    }
  }
}
`,lang:"javascript"}),e(s,{code:`.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
`,lang:"sass"}),v,e(s,{code:`// Change window breakpoints; does NOT also changes CSS breakpoints
$q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
// Change the default 100ms debounce to some other value.
$q.screen.setDebounce(500)
`,lang:"javascript"}),b,y,e(s,{code:`import languages from 'quasar/lang/index.json'
`,lang:"javascript"}),o("ul",null,[C,N,k,o("li",null,[a("$q.lang.label.close: \u83B7\u53D6\u2019close\u2019\u7684\u56FD\u9645\u5316label (zh-CN:\u2018\u5173\u95ED\u2019)"),w,e(n,{to:"https://quasar.dev/options/app-internationalization#detecting-locale"},{default:t(()=>[a("https://quasar.dev/options/app-internationalization#detecting-locale")]),_:1})])]),x,j,B]),_:1})}}};export{V as default};
