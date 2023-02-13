import{r as s,o,c as i,f as r,g as a,aa as t}from"./vendor-90615676.js";const d=t("h2",{id:"1-\u76F4\u63A5\u53D8\u66F4",class:"doc-heading"},"\u76F4\u63A5\u53D8\u66F4",-1),p=t("h2",{id:"2-$patch",class:"doc-heading"},"$patch",-1),u=t("p",null,"\u6709\u4E9B\u53D8\u66F4\u771F\u7684\u5F88\u96BE\u5B9E\u73B0\u6216\u8005\u5F88\u8017\u65F6",-1),h=t("h2",{id:"3-\u66FF\u6362-state",class:"doc-heading"},"\u66FF\u6362 state",-1),l=t("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u53D8\u66F4 pinia \u5B9E\u4F8B\u7684 state \u6765\u8BBE\u7F6E\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u521D\u59CB state\u3002\u8FD9\u5E38\u7528\u4E8E hydration \u7684 SSR\u3002",-1),_=t("h2",{id:"4-\u8BA2\u9605-state",class:"doc-heading"},"\u8BA2\u9605 state",-1),m=t("p",null,"\u6BD4\u8D77\u666E\u901A\u7684 watch()\uFF0C\u4F7F\u7528 $subscribe() \u7684\u597D\u5904\u662F subscriptions \u5728 patch[vue nextTick] \u540E\u53EA\u89E6\u53D1\u4E00\u6B21",-1),g=t("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cstate subscriptions \u4F1A\u88AB\u7ED1\u5B9A\u5230\u6DFB\u52A0\u5B83\u4EEC\u7684\u7EC4\u4EF6\u4E0A\uFF08\u5982\u679C store \u5728\u7EC4\u4EF6\u7684 setup() \u91CC\u9762\uFF09\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u88AB\u5378\u8F7D\u65F6\uFF0C\u5B83\u4EEC\u5C06\u88AB\u81EA\u52A8\u5220\u9664\u3002\u5982\u679C\u4F60\u60F3\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u4F9D\u65E7\u4FDD\u7559\u5B83\u4EEC\uFF0C\u8BF7\u5C06 { detached: true } \u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE5\u5C06 state subscription \u4ECE\u5F53\u524D\u7EC4\u4EF6\u4E2D detach\uFF1A",-1),f={__name:"state",setup($){const c=[{id:"doc-title",title:"state"},{id:"1-\u76F4\u63A5\u53D8\u66F4",title:"1. \u76F4\u63A5\u53D8\u66F4"},{id:"2-$patch",title:"2. $patch"},{id:"3-\u66FF\u6362-state",title:"3. \u66FF\u6362 state"},{id:"4-\u8BA2\u9605-state",title:"4. \u8BA2\u9605 state"}];return(b,S)=>{const e=s("doc-code"),n=s("doc-page");return o(),i(n,{desc:"",toc:c},{default:r(()=>[d,a(e,{code:`counter.count++;
`,lang:"javascript"}),p,a(e,{code:`store.$patch({
  count: store.count + 1, // \u4FEE\u6539
  age: 120, // \u65B0\u589E
  name: 'DIO', // \u65B0\u589E
})
`,lang:"javascript"}),u,a(e,{code:`store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
`,lang:"javascript"}),h,a(e,{code:"// \u8FD9\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u66FF\u6362`$state`\nstore.$state = { count: 24 }\n// \u5728\u5B83\u5185\u90E8\u8C03\u7528 `$patch()`\uFF1A\nstore.$patch({ count: 24 })\n",lang:"javascript"}),l,a(e,{code:`pinia.state.value = {} // \u5378\u8F7D\u6389\u4E86\u6240\u6709\u7684 useStore \u5B9E\u4F8B
`,lang:"javascript"}),_,m,a(e,{code:`cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct'(\u76F4\u63A5\u8D4B\u503Ccount\u6216\u8005\u8C03\u7528increment2\u4E3A direct) | 'patch object' | 'patch function'
  // \u548C cartStore.$id \u4E00\u6837
  mutation.storeId // 'cart'
  // \u53EA\u6709 mutation.type === 'patch object'\u7684\u60C5\u51B5\u4E0B\u624D\u53EF\u7528
  mutation.payload // \u4F20\u9012\u7ED9 cartStore.$patch() \u7684\u8865\u4E01\u5BF9\u8C61\u3002
  // \u6BCF\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A state \u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8\u3002
  localStorage.setItem('cart', JSON.stringify(state))
})
`,lang:"javascript"}),g,a(e,{code:`export default {
  setup() {
    const someStore = useSomeStore()
    // \u5728\u7EC4\u4EF6\u88AB\u5378\u8F7D\u540E\uFF0C\u8BE5\u8BA2\u9605\u4F9D\u65E7\u4F1A\u88AB\u4FDD\u7559\u3002
    someStore.$subscribe(callback, { detached: true })
    // ...
  },
}
`,lang:"javascript"})]),_:1})}}};export{f as default};
