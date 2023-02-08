import{r as t,o as n,c as a,f as c,g as i,a9 as o}from"./vendor-585b19a3.js";const d=o("h2",{id:"1-\u5F15\u5165",class:"doc-heading"},"\u5F15\u5165",-1),u=o("h2",{id:"2-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),r=o("h3",{id:"3-composition-api",class:"doc-heading"},"Composition API",-1),p=o("h3",{id:"4-outside-of-a-vue-file",class:"doc-heading"},"outside of a Vue file",-1),_=o("h2",{id:"5-\u63D2\u4EF6\u5217\u8868",class:"doc-heading"},"\u63D2\u4EF6\u5217\u8868",-1),h=o("ul",null,[o("li",null,"AddressbarColor \u83B7\u53D6\u6216\u8005\u8BBE\u7F6E\u5730\u5740\u680F\u989C\u8272"),o("li",null,"AppFullscreen \u5168\u5C4F"),o("li",null,"AppVisibility \u5E94\u7528\u53EF\u89C1\u6027\uFF08\u662F\u5426\u5728\u540E\u53F0\u8FD0\u884C\uFF09"),o("li",null,"BottomSheet \u5E95\u90E8\u5F39\u51FA\u6846"),o("li",null,"Cookies"),o("li",null,"\u6697\u9ED1\u6A21\u5F0F \uFF08\u81EA\u52A8\u5B89\u88C5\uFF09"),o("li",null,"Dialog \u5B9A\u5236\u5316\u7684\u5F39\u7A97\uFF0C\u53EF\u4EE5\u5FEB\u6377\u7684\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u5F39\u7A97\uFF0C\u590D\u6742\u7684\u8BF7\u4F7F\u7528q-dialog"),o("li",null,"LoadingBar \u52A0\u8F7D\u8FDB\u5EA6\u6761, \u4E0E q-ajax-bar \u7C7B\u4F3C"),o("li",null,"LocalStorage"),o("li",null,"SessionStorage"),o("li",null,"Meta \u8BBE\u7F6E\u9875\u9762\u7684meta\u3001html\u3001body\u3001style\u3001script\u3001noscript\u4FE1\u606F")],-1),b={__name:"plugins",setup(f){const s=[{id:"doc-title",title:"plugins"},{id:"1-\u5F15\u5165",title:"1. \u5F15\u5165"},{id:"2-\u4F7F\u7528",title:"2. \u4F7F\u7528"},{id:"3-composition-api",title:"2.1. Composition API",sub:!0},{id:"4-outside-of-a-vue-file",title:"2.2. outside of a Vue file",sub:!0},{id:"5-\u63D2\u4EF6\u5217\u8868",title:"3. \u63D2\u4EF6\u5217\u8868"}];return(g,m)=>{const e=t("doc-code"),l=t("doc-page");return n(),a(l,{desc:"",toc:s},{default:c(()=>[d,i(e,{code:`framework: {
  plugins: [ 'Notify', 'BottomSheet' ]
}
`,lang:"javascript"}),u,r,i(e,{code:`const $q = useQuasar()

function showNotification () {
  $q.notify('Some other message')
}
`,lang:"javascript"}),p,i(e,{code:`import { Notify } from 'quasar'
// ...
Notify.create('My message')
`,lang:"javascript"}),_,h]),_:1})}}};export{b as default};
