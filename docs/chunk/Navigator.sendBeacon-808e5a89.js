import{r as o,o as c,c as s,f as r,g as d,a8 as e}from"./vendor-5a734afa.js";const i=e("h2",{id:"1-\u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u7684\u7EDF\u8BA1\u52A8\u4F5C",class:"doc-heading"},"\u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u7684\u7EDF\u8BA1\u52A8\u4F5C",-1),l=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"\u5F53\u6D4F\u89C8\u5668\u7A97\u53E3\u5173\u95ED\u6216\u8005\u5237\u65B0\u65F6\uFF0C\u4F1A\u89E6\u53D1beforeunload\u4E8B\u4EF6")],-1),m={__name:"Navigator.sendBeacon",setup(_){const n=[{id:"doc-title",title:"Navigator.sendBeacon"},{id:"1-\u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u7684\u7EDF\u8BA1\u52A8\u4F5C",title:"1. \u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u7684\u7EDF\u8BA1\u52A8\u4F5C"}];return(p,u)=>{const t=o("doc-code"),a=o("doc-page");return c(),s(a,{desc:"\u4F7F\u7528Navigator.sendBeacon\u76D1\u542C\u7528\u6237\u79BB\u5F00\u9875\u9762\uFF0C\u5E76\u5411\u540E\u7AEF\u53D1\u9001\u6570\u636E",toc:n},{default:r(()=>[i,d(t,{code:`created () {
  // \u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u91CA\u653E\u9501
  window.addEventListener('beforeunload', this.releaseLock)
},
methods: {
  releaseLock () {
    window.removeEventListener('beforeunload', this.releaseLock)
    // \u8FDB\u5165\u8FD9\u4E2A\u9875\u9762\u4E4B\u524D\u5C31\u62FF\u5230\u4E86\u8FD9\u4E2AiLock\u7684\u503C\uFF0C\u8868\u793A\u9501\u7684\u72B6\u6001
    if (!this.iLock) return // \u5982\u679C\u6CA1\u6709\u9501\uFF0C\u5C31\u4E0D\u53BB\u91CA\u653E\u9501
    const blob = new Blob([JSON.stringify(yourData)], { type: 'application/json; charset=UTF-8' })
    navigator.sendBeacon(yourUrl, blob)
  },
}
beforeRouteLeave (to, from, next) { // \u8FD9\u91CC\u6CA1\u6709\u8003\u8651keep-alive\u7684\u60C5\u51B5
  // \u76F8\u540ClockId\u9875\u9762\u4E4B\u95F4\u4E92\u76F8\u8DF3\u8F6C\u4E0D\u7528\u89E3\u9501\uFF0C\uFF08\u4F1A\u4EA7\u751F\u9501\u8FD8\u6CA1\u89E3\u5B8C\uFF0C\u5C31\u53BB\u62FF\u9501\uFF0C\u62FF\u9501\u5931\u8D25\u7684\u60C5\u51B5\uFF09
  const arr = [//...] // \u76F8\u540ClockId\u9875\u9762\u7684name\u96C6\u5408
  if (!arr.includes(to.name) || !arr.includes(from.name)) {
    this.releaseLock()
  }
  next()
},
`,lang:"javascript"}),l]),_:1})}}};export{m as default};
