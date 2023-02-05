import{r as a,o as i,c,f as d,g as n,a9 as r}from"./vendor.js";const s=r("h2",{id:"1-es6-\u4E2D\u7684-set-\u53BB\u91CD",class:"doc-heading"},"ES6 \u4E2D\u7684 Set \u53BB\u91CD",-1),l=r("h2",{id:"2-array-filter-\u52A0-indexof",class:"doc-heading"},"Array.filter() \u52A0 indexOf",-1),f=r("h2",{id:"3-\u53CC\u5C42-for-\u5FAA\u73AF",class:"doc-heading"},"\u53CC\u5C42 for \u5FAA\u73AF",-1),h={__name:"\u53BB\u91CD",setup(u){const t=[{id:"doc-title",title:"\u6570\u7EC4\u7684\u53BB\u91CD"},{id:"1-es6-\u4E2D\u7684-set-\u53BB\u91CD",title:"1. ES6 \u4E2D\u7684 Set \u53BB\u91CD"},{id:"2-array-filter-\u52A0-indexof",title:"2. Array.filter() \u52A0 indexOf"},{id:"3-\u53CC\u5C42-for-\u5FAA\u73AF",title:"3. \u53CC\u5C42 for \u5FAA\u73AF"}];return(_,y)=>{const e=a("doc-code"),o=a("doc-page");return i(),c(o,{desc:"\u51E0\u4E2A\u7B80\u5355\u7684\u6570\u7EC4\u53BB\u91CD\u65B9\u6CD5",toc:t},{default:d(()=>[s,n(e,{code:`function unique (array) {
  return Array.from(new Set(array))
}

function unique (array) {
  return [...new Set(array)]
}

let unique = (array) => [...new Set(array)]
`,lang:"javascript"}),l,n(e,{code:`function unique(array){
   return array.filter((item,index) => array.indexOf(item) === index)
}
`,lang:"javascript"}),f,n(e,{code:`function unique (array) {
  for (let i = 0, len = array.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
        len--
        j--
      }
    }
  }
  return array
}
`,lang:"javascript"})]),_:1})}}};export{h as default};
