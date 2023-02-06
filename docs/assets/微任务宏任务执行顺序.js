import{r as s,o as r,c as d,f as c,g as n,a9 as e,v as t}from"./vendor.js";const u=e("h2",{id:"1-\u5728\u5FAE\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",class:"doc-heading"},"\u5728\u5FAE\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",-1),h=e("p",null,[e("kbd",null,"\u6211\u7684\u7406\u89E3")],-1),m=e("p",null,"\u5728\u6267\u884C\u5FAE\u961F\u5217microtask queue\u4E2D\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u5982\u679C\u53C8\u4EA7\u751F\u4E86microtask\uFF0C\u90A3\u4E48\u4F1A\u7EE7\u7EED\u6DFB\u52A0\u5230\u961F\u5217\u7684\u672B\u5C3E\uFF0C\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5468\u671F\u6267\u884C\uFF0C\u76F4\u5230microtask queue\u4E3A\u7A7A\u505C\u6B62",-1),g=e("h2",{id:"2-\u5728\u5B8F\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",class:"doc-heading"},"\u5728\u5B8F\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",-1),_=e("p",null,[e("kbd",null,"\u6211\u7684\u7406\u89E3")],-1),p=e("p",null,"\u5B8F\u4EFB\u52A1\u6267\u884C\u7684\u65F6\u5019\u5FAE\u4EFB\u52A1\u961F\u5217\u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\u4E86\uFF0C\u91CC\u9762\u4EA7\u751F\u7684\u5FAE\u4EFB\u52A1\u5B8F\u4EFB\u52A1\u53EA\u80FD\u8FDB\u5165\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF",-1),k=e("h2",{id:"3-async",class:"doc-heading"},"async",-1),w=e("h2",{id:"4-$nexttick-\u9ED8\u8BA4\u8D70\u5FAE\u4EFB\u52A1-",class:"doc-heading"},"$nextTick(\u9ED8\u8BA4\u8D70\u5FAE\u4EFB\u52A1)",-1),T=e("h2",{id:"5-\u95EE\u9898",class:"doc-heading"},"\u95EE\u9898",-1),f=e("p",null,"\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6267\u884C\u987A\u5E8F \u5FAE\u4EFB\u52A1 --> dom\u66F4\u65B0 --> \u5B8F\u4EFB\u52A1\uFF0C\u90A3\u4E48vue\u4F7F\u7528\u5FAE\u4EFB\u52A1nextTick\u4E4B\u540E\u6211\u4EEC\u4E3A\u4EC0\u4E48\u80FD\u83B7\u5F97\u66F4\u65B0\u540E\u7684dom\u5462\uFF1F",-1),v=e("p",null,[t("\u6240\u4EE5\u4EE5\u4E0B\u60C5\u51B5\u662F\u5F97\u4E0D\u5230\u53D8\u66F4\u540E\u7684"),e("code",{class:"doc-token"},"DOM"),t("\u7684")],-1),P=e("h2",{id:"6-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),N={__name:"\u5FAE\u4EFB\u52A1\u5B8F\u4EFB\u52A1\u6267\u884C\u987A\u5E8F",setup(y){const i=[{id:"doc-title",title:"js\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u6267\u884C\u987A\u5E8F"},{id:"1-\u5728\u5FAE\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",title:"1. \u5728\u5FAE\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1"},{id:"2-\u5728\u5B8F\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",title:"2. \u5728\u5B8F\u4EFB\u52A1\u4E2D\u6DFB\u52A0\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1"},{id:"3-async",title:"3. async"},{id:"4-$nexttick-\u9ED8\u8BA4\u8D70\u5FAE\u4EFB\u52A1-",title:"4. $nextTick(\u9ED8\u8BA4\u8D70\u5FAE\u4EFB\u52A1)"},{id:"5-\u95EE\u9898",title:"5. \u95EE\u9898"},{id:"6-\u53C2\u8003\u6587\u732E",title:"6. \u53C2\u8003\u6587\u732E"}];return(x,j)=>{const o=s("doc-code"),l=s("doc-link"),a=s("doc-page");return r(),d(a,{desc:"\u521D\u6B65\u8BA4\u8BC6js\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u6267\u884C\u987A\u5E8F",toc:i},{default:c(()=>[u,n(o,{code:`console.log('task start')

setTimeout(()=>{
  console.log('setTimeout1')
},0)

new Promise((resolve, reject)=>{
  console.log('new Promise1')
  resolve()
}).then(()=>{
  console.log('Promise.then1')
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
  new Promise((resolve, reject)=>{
    console.log('new Promise2')
    resolve()
  }).then(()=>{
    console.log('Promise.then2')
  })
})
console.log('task end')
// 'task start'
// 'new Promise1'
// 'task end'
// 'Promise.then1'
// 'new Promise2'
// 'Promise.then2'
// 'setTimeout1'
// 'setTimeout2'
`,lang:"javascript"}),h,m,g,n(o,{code:`console.log('task start')

setTimeout(()=>{
  console.log('setTimeout1')
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
  new Promise((resolve, reject)=>{
    console.log('new Promise2')
    resolve()
  }).then(()=>{
    console.log('Promise.then2')
  })
},0)

new Promise((resolve, reject)=>{
  console.log('new Promise1')
  resolve()
}).then(()=>{
  console.log('Promise.then1')
})

console.log('task end')
// 'task start'
// 'new Promise1'
// 'task end'
// 'Promise.then1'
// 'setTimeout1'
// 'new Promise2'
// 'Promise.then2'
// 'setTimeout2'
`,lang:"javascript"}),_,p,k,n(o,{code:`async function asycn1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

asycn1()

new Promise((resolve) => {
  console.log('promise1')
  resolve()
}).then(() => {
  console.log('promise2')
})

console.log('script end')
// 'script start'
// 'async1 start'
// 'async2'
// 'promise1'
// 'script end'
// 'async1 end'
// 'promise2'
// 'setTimeout'
`,lang:"javascript"}),w,n(o,{code:`mounted() {
  this.message = 'aaa' // \u6B64\u65F6\u5DF2\u7ECF\u751F\u6210vue\u5185\u90E8\u7EF4\u62A4\u7684\u5F02\u6B65\u961F\u5217
  setTimeout(() => { console.log('222') })
  Promise.resolve().then(res => { console.log('333') })
  this.$nextTick(() => { // \u6B64\u65F6\u53EA\u662F\u5C06\u56DE\u8C03\u51FD\u6570push\u5230\u4E0A\u9762\u7684\u90A3\u4E2A\u5F02\u6B65\u961F\u5217
    console.log('444')
  })
  Promise.resolve().then(res => { console.log('555') })
}
// 444 --> 333 --> 555 --> 222
`,lang:"javascript"}),T,f,n(o,{code:`export function queueWatcher (watcher: Watcher) { // set\u65B9\u6CD5\u540E watcher update\u65F6\u5019\u89E6\u53D1
  const id = watcher.id
  if (has[id] == null) {
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true
      if (process\\.env\\.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue()
        return
      }
      nextTick(flushSchedulerQueue)
      // \u4E2A\u51FD\u6570\u662F\u5FAE\u4EFB\u52A1\u8FD8\u662F\u5B8F\u4EFB\u52A1\uFF0C\u5176\u5B9E\u90FD\u65E0\u6240\u8C13\uFF0C\u751A\u81F3\u540C\u6B65\u5F02\u6B65\u90FD\u65E0\u6240\u8C13\u3002\u53EA\u8981\u6211\u4EEC\u8981\u64CD\u4F5CDOM\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5728\u6570\u636E\u53D8\u66F4\u4E4B\u540E\u5C31\u53EF\u4EE5
    }
  }
}
`,lang:"javascript"}),v,n(o,{code:`Vue.nextTick(()=>{
  console.log(document.querySelector('h1').innerText)
})
this.msg = 'hello'
`,lang:"javascript"}),P,e("p",null,[n(l,{to:"https://segmentfault.com/a/1190000040014996"},{default:c(()=>[t("segmentfault")]),_:1})])]),_:1})}}};export{N as default};
