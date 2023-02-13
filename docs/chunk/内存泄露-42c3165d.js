import{r as o,o as i,c as r,f as c,g as t,aa as e,v as s}from"./vendor-90615676.js";const p=e("h2",{id:"1-\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF",class:"doc-heading"},"\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF",-1),u=e("p",null,"\u5728 JavaScript \u6587\u4EF6\u5934\u90E8\u52A0\u4E0A \u2018use strict\u2019\uFF0C\u53EF\u4EE5\u907F\u514D\u6B64\u7C7B\u9519\u8BEF\u53D1\u751F",-1),h=e("h2",{id:"2-\u88AB\u9057\u5FD8\u7684\u8BA1\u65F6\u5668",class:"doc-heading"},"\u88AB\u9057\u5FD8\u7684\u8BA1\u65F6\u5668",-1),_=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"setTimeout \u6211\u6682\u65F6\u6218\u961F\u65E0\u9700\u6E05\u7406\u90A3\u4E00\u961F")],-1),m=e("h2",{id:"3-\u88AB\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668",class:"doc-heading"},"\u88AB\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668",-1),v=e("h2",{id:"4-\u88AB\u9057\u5FD8\u7684-es6-set-\u6210\u5458",class:"doc-heading"},"\u88AB\u9057\u5FD8\u7684 ES6 Set \u6210\u5458",-1),g=e("p",null,"\u4E0A\u9762\u53EF\u4EE5\u6539\u6210\u4F7F\u7528WeakSet",-1),k=e("h2",{id:"5-\u88AB\u9057\u5FD8\u7684-es6-map-\u952E\u540D",class:"doc-heading"},"\u88AB\u9057\u5FD8\u7684 ES6 Map \u952E\u540D",-1),f=e("p",null,"\u4E0A\u9762\u53EF\u4EE5\u6539\u6210\u4F7F\u7528WeakMap",-1),y=e("h2",{id:"6-\u88AB\u9057\u5FD8\u7684\u8BA2\u9605\u53D1\u5E03\u4E8B\u4EF6\u76D1\u542C\u5668",class:"doc-heading"},"\u88AB\u9057\u5FD8\u7684\u8BA2\u9605\u53D1\u5E03\u4E8B\u4EF6\u76D1\u542C\u5668",-1),w=e("h2",{id:"7-\u8131\u79BB-dom-\u7684\u5F15\u7528",class:"doc-heading"},"\u8131\u79BB DOM \u7684\u5F15\u7528",-1),E=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"\u88AB\u88AB\u5783\u573E\u56DE\u6536\u7684 DOM \u8282\u70B9\u4E0A\u7ED1\u5B9A\u7684 listener \u548C observer \u4E8B\u4EF6\u4E5F\u5C06\u88AB\u5783\u573E\u56DE\u6536")],-1),S=e("h2",{id:"8-ie-9\u5FAA\u73AF\u5F15\u7528\u95EE\u9898",class:"doc-heading"},"IE 9\u5FAA\u73AF\u5F15\u7528\u95EE\u9898",-1),b=e("h2",{id:"9-console-log",class:"doc-heading"},"console.log",-1),C=e("p",null,[s("\u5728\u4F20\u9012\u7ED9"),e("code",{class:"doc-token"},"console.log/dir..."),s("\u7684\u5BF9\u8C61\u662F\u4E0D\u80FD\u88AB\u5783\u573E\u56DE\u6536")],-1),I=e("h2",{id:"10-\u610F\u5916\u7684closures-\u95ED\u5305-",class:"doc-heading"},"\u610F\u5916\u7684closures(\u95ED\u5305)",-1),T={__name:"\u5185\u5B58\u6CC4\u9732",setup(M){const l=[{id:"doc-title",title:"\u5185\u5B58\u6CC4\u9732\u7684\u65B9\u5F0F\u53CA\u5982\u4F55\u907F\u514D"},{id:"1-\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF",title:"1. \u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF"},{id:"2-\u88AB\u9057\u5FD8\u7684\u8BA1\u65F6\u5668",title:"2. \u88AB\u9057\u5FD8\u7684\u8BA1\u65F6\u5668"},{id:"3-\u88AB\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668",title:"3. \u88AB\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668"},{id:"4-\u88AB\u9057\u5FD8\u7684-es6-set-\u6210\u5458",title:"4. \u88AB\u9057\u5FD8\u7684 ES6 Set \u6210\u5458"},{id:"5-\u88AB\u9057\u5FD8\u7684-es6-map-\u952E\u540D",title:"5. \u88AB\u9057\u5FD8\u7684 ES6 Map \u952E\u540D"},{id:"6-\u88AB\u9057\u5FD8\u7684\u8BA2\u9605\u53D1\u5E03\u4E8B\u4EF6\u76D1\u542C\u5668",title:"6. \u88AB\u9057\u5FD8\u7684\u8BA2\u9605\u53D1\u5E03\u4E8B\u4EF6\u76D1\u542C\u5668"},{id:"7-\u8131\u79BB-dom-\u7684\u5F15\u7528",title:"7. \u8131\u79BB DOM \u7684\u5F15\u7528"},{id:"8-ie-9\u5FAA\u73AF\u5F15\u7528\u95EE\u9898",title:"8. IE 9\u5FAA\u73AF\u5F15\u7528\u95EE\u9898"},{id:"9-console-log",title:"9. console.log"},{id:"10-\u610F\u5916\u7684closures-\u95ED\u5305-",title:"10. \u610F\u5916\u7684closures(\u95ED\u5305)"}];return(x,j)=>{const n=o("doc-code"),a=o("doc-link"),d=o("doc-page");return i(),r(d,{desc:"",toc:l},{default:c(()=>[p,u,h,t(n,{code:`<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    refresh() {},
  },
  mounted() {
    this.refreshInterval = setInterval(function() {
      this.refresh()
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval) // \u4E0D\u80FD\u9057\u5FD8
  },
}
<\/script>
`,lang:"vue"}),_,m,t(n,{code:`<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.resizeEventCallback = () => {}
    window.addEventListener('resize', this.resizeEventCallback)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeEventCallback) // \u4E0D\u80FD\u9057\u5FD8
  },
}
<\/script>
`,lang:"vue"}),v,t(n,{code:`let map = new Set()
let value = { test: 22 }
map.add(value)

map.delete(value) // \u4E0D\u80FD\u9057\u5FD8
value = null
`,lang:"javascript"}),g,t(n,{code:`let map = new WeakSet()
let value = { test: 22 }
map.add(value)
value = null
`,lang:"javascript"}),k,t(n,{code:`let map = new Map()
let key = new Array(5 * 1024 * 1024)
map.set(key, 1)

map.delete(key) // \u4E0D\u80FD\u9057\u5FD8
key = null
`,lang:"javascript"}),f,t(n,{code:`let map = new WeakMap()
let key = new Array(5 * 1024 * 1024)
map.set(key, 1)
key = null
`,lang:"javascript"}),y,t(n,{code:`<template>
  <div @click="onClick"></div>
</template>

<script>
import customEvent from 'event'

export default {
  methods: {
    onClick() {
      customEvent.emit('test', { type: 'click' })
    },
  },
  mounted() {
    customEvent.on('test', data => {})
  },
  beforeDestroy() {
    customEvent.off('test') // \u4E0D\u80FD\u9057\u5FD8
  },
}
<\/script>
`,lang:"vue"}),w,t(n,{code:`class Test {
  constructor() {
    this.elements = {
      button: document.querySelector('#button'),
      div: document.querySelector('#div'),
      span: document.querySelector('#span'),
    }
  }
  removeButton() {
    document.body.removeChild(this.elements.button)
    this.elements.button = null // \u4E0D\u80FD\u9057\u5FD8
  }
}

const a = new Test()
a.removeButton()
`,lang:"javascript"}),E,S,e("p",null,[t(a,{to:"https://www.jianshu.com/p/e3013a39f483"},{default:c(()=>[s("\u53C2\u8003\u6587\u6863")]),_:1})]),b,C,I]),_:1})}}};export{T as default};
