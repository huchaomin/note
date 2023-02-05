import{r as n,o as a,c,f as d,g as e,aa as t,v as s}from"./vendor.js";const l=t("p",null,[s("\u63D2\u4EF6\u53EA\u4F1A\u5E94\u7528\u4E8E\u5728 pinia \u4F20\u9012\u7ED9\u5E94\u7528\u7A0B\u5E8F\u540E\u521B\u5EFA\u7684\u3010app.use(pinia)\u3011 store\uFF0C\u5426\u5219\u5B83\u4EEC\u4E0D\u4F1A\u751F\u6548\u3002"),t("br"),s(" \u5728\u4E00\u4E2A\u63D2\u4EF6\u4E2D\uFF0C state \u53D8\u66F4\u6216\u6DFB\u52A0\uFF08\u5305\u62EC\u8C03\u7528 store.$patch()\uFF09\u90FD\u662F\u53D1\u751F\u5728 store \u88AB\u6FC0\u6D3B\u4E4B\u524D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u8BA2\u9605\u51FD\u6570\u3002")],-1),u=t("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),p=t("ul",null,[t("li",null,"\u4E3A store \u6DFB\u52A0\u65B0\u7684\u5C5E\u6027"),t("li",null,"\u5B9A\u4E49 store \u65F6\u589E\u52A0\u65B0\u7684\u9009\u9879"),t("li",null,"\u4E3A store \u589E\u52A0\u65B0\u7684\u65B9\u6CD5"),t("li",null,"\u5305\u88C5\u73B0\u6709\u7684\u65B9\u6CD5"),t("li",null,"\u6539\u53D8\u6216\u751A\u81F3\u53D6\u6D88 action"),t("li",null,"\u5B9E\u73B0\u526F\u4F5C\u7528\uFF0C\u5982\u672C\u5730\u5B58\u50A8"),t("li",null,"\u4EC5\u5E94\u7528\u63D2\u4EF6\u4E8E\u7279\u5B9A store")],-1),h=t("h2",{id:"2-\u7B80\u4ECB",class:"doc-heading"},"\u7B80\u4ECB",-1),_=t("h2",{id:"3-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),b=t("h3",{id:"4-\u5C06\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\u6DFB\u52A0\u5230\u6240\u6709-store-\u5B9E\u4F8B",class:"doc-heading"},"\u5C06\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\u6DFB\u52A0\u5230\u6240\u6709 store \u5B9E\u4F8B",-1),g=t("h3",{id:"5-\u4E3A\u6240\u6709-store-\u6DFB\u52A0\u65B0\u7684-state",class:"doc-heading"},"\u4E3A\u6240\u6709 store \u6DFB\u52A0\u65B0\u7684 state",-1),f=t("p",null,"\u5982\u679C\u4F60\u60F3\u7ED9 store \u6DFB\u52A0\u65B0\u7684 state \u5C5E\u6027\uFF0C\u6216\u8005\u5728 hydration \u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u5C5E\u6027\uFF0C\u4F60\u5FC5\u987B\u540C\u65F6\u5728\u4E24\u4E2A\u5730\u65B9\u6DFB\u52A0\u5B83",-1),$=t("ul",null,[t("li",null,"\u5728 store \u4E0A\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u7528 store.myState \u8BBF\u95EE\u5B83\u3002"),t("li",null,"\u5728 store.$state \u4E0A\uFF0C\u56E0\u6B64\u5B83\u53EF\u4EE5\u5728 devtools \u4E2D\u4F7F\u7528\uFF0C\u5E76\u4E14\uFF0C\u5728 SSR \u65F6\u88AB\u5E8F\u5217\u5316\uFF08serialized\uFF09\u3002")],-1),m=t("h3",{id:"6-\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528-$subscribe\u3001$onaction",class:"doc-heading"},"\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528 $subscribe\u3001$onAction",-1),v=t("h3",{id:"7-\u4F7F\u7528-store-\u7684-options",class:"doc-heading"},"\u4F7F\u7528 store \u7684 options",-1),E=t("p",null,"store",-1),x=t("h3",{id:"8-\u53EF\u4EE5\u6DFB\u52A0\u5168\u5C40\u7684-options-\u5417\uFF1F-\u53EF\u4EE5\u8BD5\u8BD5",class:"doc-heading"},"\u53EF\u4EE5\u6DFB\u52A0\u5168\u5C40\u7684 options \u5417\uFF1F \u53EF\u4EE5\u8BD5\u8BD5",-1),P={__name:"plugins",setup(S){const r=[{id:"doc-title",title:"plugins"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-\u7B80\u4ECB",title:"2. \u7B80\u4ECB"},{id:"3-\u4F7F\u7528",title:"3. \u4F7F\u7528"},{id:"4-\u5C06\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\u6DFB\u52A0\u5230\u6240\u6709-store-\u5B9E\u4F8B",title:"3.1. \u5C06\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\u6DFB\u52A0\u5230\u6240\u6709 store \u5B9E\u4F8B",sub:!0},{id:"5-\u4E3A\u6240\u6709-store-\u6DFB\u52A0\u65B0\u7684-state",title:"3.2. \u4E3A\u6240\u6709 store \u6DFB\u52A0\u65B0\u7684 state",sub:!0},{id:"6-\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528-$subscribe\u3001$onaction",title:"3.3. \u5728\u63D2\u4EF6\u4E2D\u8C03\u7528 $subscribe\u3001$onAction",sub:!0},{id:"7-\u4F7F\u7528-store-\u7684-options",title:"3.4. \u4F7F\u7528 store \u7684 options",sub:!0},{id:"8-\u53EF\u4EE5\u6DFB\u52A0\u5168\u5C40\u7684-options-\u5417\uFF1F-\u53EF\u4EE5\u8BD5\u8BD5",title:"3.5. \u53EF\u4EE5\u6DFB\u52A0\u5168\u5C40\u7684 options \u5417\uFF1F \u53EF\u4EE5\u8BD5\u8BD5",sub:!0}];return(j,A)=>{const o=n("doc-code"),i=n("doc-page");return a(),c(i,{desc:"",toc:r},{default:d(()=>[l,u,p,h,e(o,{code:`export function myPiniaPlugin(context) { // \u53EA\u6709\u4E00\u4E2A\u53C2\u6570
  context.pinia // \u7528 \`createPinia()\` \u521B\u5EFA\u7684 pinia\u3002
  context.app // \u7528 \`createApp()\` \u521B\u5EFA\u7684\u5F53\u524D\u5E94\u7528\u7A0B\u5E8F\uFF08\u4EC5 Vue 3\uFF09\u3002
  context.store // \u8BE5\u63D2\u4EF6\u60F3\u6269\u5C55\u7684 store
  context.options // \u5B9A\u4E49\u4F20\u7ED9 \`defineStore()\` \u7684 store \u7684\u53EF\u9009\u5BF9\u8C61\u3002
  // ...
}
`,lang:"javascript"}),_,b,e(o,{code:`import { createPinia } from 'pinia'

const pinia = createPinia()

// \u4F46\u53EF\u4EE5\u7684\u8BDD\uFF0C\u8BF7\u4F7F\u7528\u8FD4\u56DE\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u8FD9\u6837\u5B83\u4EEC\u5C31\u80FD\u88AB devtools \u81EA\u52A8\u8FFD\u8E2A\u5230\uFF1A
pinia.use(() => ({ hello: 'world' }));

pinia.use(({ store }) => {
  store.hello = 'world'
})

// \u6DFB\u52A0\u5931\u8D25\uFF0C\u56E0\u4E3A store \u91CC\u9762\u5DF2\u7ECF\u6709\u4E86 router \u5C5E\u6027
pinia.use(({ store }) => {
  store.router = markRaw({ a: 'a' });
})

// \u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D
const store = useStore()
store.hello // 'world'
`,lang:"javascript"}),g,f,$,e(o,{code:`pinia.use(({ store }) => {
  // \u4E3A\u4E86\u6B63\u786E\u5730\u5904\u7406 SSR\uFF0C\u6211\u4EEC\u9700\u8981\u786E\u4FDD\u6211\u4EEC\u6CA1\u6709\u91CD\u5199\u4EFB\u4F55\u4E00\u4E2A
  // \u73B0\u6709\u7684\u503C
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    // \u5728\u63D2\u4EF6\u4E2D\u5B9A\u4E49 hasError\uFF0C\u56E0\u6B64\u6BCF\u4E2A store \u90FD\u6709\u5404\u81EA\u7684
    // hasError \u72B6\u6001
    const hasError = ref(false) // \u80AF\u5B9A\u4E5F\u4F1A\u4F7F\u7528 ref()\uFF08\u6216\u5176\u4ED6\u54CD\u5E94\u5F0F API\uFF09\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u540C\u7684\u8BFB\u53D6\u4E2D\u5171\u4EAB\u76F8\u540C\u7684\u503C\uFF1A
    // \u5728 \`$state\` \u4E0A\u8BBE\u7F6E\u53D8\u91CF\uFF0C\u5141\u8BB8\u5B83\u5728 SSR \u671F\u95F4\u88AB\u5E8F\u5217\u5316\u3002
    store.$state.hasError = hasError
  }
  // \u6211\u4EEC\u9700\u8981\u5C06 ref \u4ECE state \u8F6C\u79FB\u5230 store
  // \u8FD9\u6837\u7684\u8BDD,\u4E24\u79CD\u65B9\u5F0F\uFF1Astore.hasError \u548C store.$state.hasError \u90FD\u53EF\u4EE5\u8BBF\u95EE
  // \u5E76\u4E14\u5171\u4EAB\u7684\u662F\u540C\u4E00\u4E2A\u53D8\u91CF
  // \u67E5\u770B https://vuejs.org/api/reactivity-utilities.html#toref
  store.hasError = toRef(store.$state, 'hasError')

  // \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u4E0D\u8981\u8FD4\u56DE \`hasError\`
  // \u56E0\u4E3A\u5B83\u5C06\u88AB\u663E\u793A\u5728 devtools \u7684 \`state\` \u90E8\u5206
  // \u5982\u679C\u6211\u4EEC\u8FD4\u56DE\u5B83\uFF0Cdevtools \u5C06\u663E\u793A\u4E24\u6B21\u3002
})
`,lang:"javascript"}),m,e(o,{code:`pinia.use(({ store }) => {
  store.$subscribe(() => {
    // \u54CD\u5E94 store \u53D8\u5316
  })
  store.$onAction(() => {
    // \u54CD\u5E94 store actions
  })
})
`,lang:"javascript"}),v,E,e(o,{code:`defineStore(
  'search',
  () => {
    // ...
  },
  {
    // \u8FD9\u5C06\u5728\u540E\u9762\u88AB\u4E00\u4E2A\u63D2\u4EF6\u8BFB\u53D6
    debounce: {
      // \u8BA9 action searchContacts \u9632\u6296 300ms
      searchContacts: 300,
    },
  }
)
`,lang:"javascript"}),e(o,{code:`// \u4F7F\u7528\u4EFB\u610F\u9632\u6296\u5E93
import debounce from 'lodash/debounce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // \u6211\u4EEC\u6B63\u5728\u7528\u65B0\u7684 action \u6765\u8986\u76D6\u8FD9\u4E9B action
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})
`,lang:"javascript"}),x]),_:1})}}};export{P as default};
