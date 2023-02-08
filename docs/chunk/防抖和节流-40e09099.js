import{r as t,o as l,c as a,f as i,g as o,a9 as n}from"./vendor-585b19a3.js";const u=n("h2",{id:"1-\u9632\u6296",class:"doc-heading"},"\u9632\u6296",-1),d=n("p",null,"\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1n\u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9n\u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6",-1),r=n("p",null,"\u8FD9\u91CC\u6CA1\u6709\u8003\u8651\u6700\u540E\u4E00\u6B21\u6E05\u9664\u5B9A\u65F6\u5668\u7684\u95EE\u9898\uFF0C\u4EC5\u4F5C\u53C2\u8003\uFF0C\u53EF\u4EE5\u50CFlodash\u91CC\u9762\u4E00\u6837\u5B9A\u4E49\u4E00\u4E2Acancel\u65B9\u6CD5",-1),m=n("h2",{id:"2-\u8282\u6D41",class:"doc-heading"},"\u8282\u6D41",-1),_=n("p",null,"\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570",-1),b={__name:"\u9632\u6296\u548C\u8282\u6D41",setup(p){const c=[{id:"doc-title",title:"\u9632\u6296\u51FD\u6570\u548C\u8282\u6D41\u51FD\u6570"},{id:"1-\u9632\u6296",title:"1. \u9632\u6296"},{id:"2-\u8282\u6D41",title:"2. \u8282\u6D41"}];return(f,h)=>{const e=t("doc-code"),s=t("doc-page");return l(),a(s,{desc:"",toc:c},{default:i(()=>[u,d,o(e,{code:`function debounce (fn, delay) {
  let timer
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}

function testDebounce (e, content) {
  console.log(e, content)
}

const testDebounceFn = debounce(testDebounce, 1000)
document.onmousemove = function (e) {
  testDebounceFn(e, 'debounce')
}
`,lang:"javascript"}),r,m,_,o(e,{code:`function throttle (fn, delay) {
  let timer = null
  return function (...arg) {
    if (timer !== null) return
    timer = setTimeout(() => {
      fn.apply(t, arg)
      clearTimeout(timer)
      timer = null
    }, delay)
  }
}

function testDebounce (e, content) {
  console.log(e, content)
}

const testDebounceFn = throttle(testDebounce, 1000)
document.onmousemove = function (e) {
  testDebounceFn(e, 'throttle')
}
`,lang:"javascript"})]),_:1})}}};export{b as default};
