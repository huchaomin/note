import{r as t,o as s,c as o,f as i,g as n,aa as a}from"./vendor-90615676.js";const l=a("h2",{id:"1-\u524D\u8A00",class:"doc-heading"},"\u524D\u8A00",-1),d=a("h2",{id:"2-map",class:"doc-heading"},"map",-1),u=a("h2",{id:"3-foreach",class:"doc-heading"},"forEach",-1),h=a("h2",{id:"4-reduce-reduceright",class:"doc-heading"},"reduce/reduceRight",-1),y=a("h2",{id:"5-filter",class:"doc-heading"},"filter",-1),p=a("h2",{id:"6-some",class:"doc-heading"},"some",-1),f=a("h2",{id:"7-every",class:"doc-heading"},"every",-1),_={__name:"\u904D\u5386\u7684\u5F02\u6B65\u5199\u6CD5",setup(m){const c=[{id:"doc-title",title:"\u904D\u5386\u7684\u5F02\u6B65\u5199\u6CD5"},{id:"1-\u524D\u8A00",title:"1. \u524D\u8A00"},{id:"2-map",title:"2. map"},{id:"3-foreach",title:"3. forEach"},{id:"4-reduce-reduceright",title:"4. reduce/reduceRight"},{id:"5-filter",title:"5. filter"},{id:"6-some",title:"6. some"},{id:"7-every",title:"7. every"}];return(g,v)=>{const e=t("doc-code"),r=t("doc-page");return s(),o(r,{desc:"",toc:c},{default:i(()=>[l,n(e,{code:`const result = await func()
// \u7B49\u540C\u4E8E
func().then(res => {
 const result = res
 // code here
})
`,lang:"javascript"}),n(e,{code:`async function func () {
 return 1
}
// \u7B49\u540C\u4E8E
function func () {
 return new Promise(resolve => resolve(1))
}
`,lang:"javascript"}),d,n(e,{code:`await Promise.all(arr.map(asyncCallback))
`,lang:"javascript"}),n(e,{code:`Array.prototype.mapAsync = async function (callback, thisArg) {
 return await Promise.all(this.map(callback, thisArg))
}
`,lang:"javascript"}),u,n(e,{code:`Array.prototype.forEachAsync = async function (callback, thisArg) {
  for (let [key, value] of Object.entries(this)) {
    await callback.call(thisArg, value, key, this)
  }
}
[1,2,3].forEachAsync(async (n, index) => {
  const m = await new Promise(resolve => {
    setTimeout(() => resolve(n * index), 1000 / n)
  })
  console.log(m)
})
// 0 2 6
`,lang:"javascript"}),h,n(e,{code:`await [5, 2, 3].reduce(async (accumulator, n) => await accumulator * n, 1)
// 30
`,lang:"javascript"}),y,n(e,{code:`// \u6027\u80FD\u66F4\u597D
Array.prototype.filterAsync = async function (callback, thisArg) {
  const result = await Promise.all(this.map(callback, thisArg))
 return this.filter((value, key) => result[key])
}
// \u7EE7\u53D1\u6267\u884C
Array.prototype.filterAsync = async function (callback, thisArg) {
 const arr = []
  for (let [key, value] of Object.entries(this)) {
   if (await callback.call(thisArg, value, key, this)) {
     arr.push(value)
    }
  }
  return arr
}
`,lang:"javascript"}),p,n(e,{code:`// \u5E76\u53D1\u5904\u7406\u53EF\u80FD\u66F4\u5FEB
Array.prototype.someAsync = async function (callback, thisArg) {
 const result = await Promise.all(this.map(callback, thisArg))
  return result.find(value => value) === undefined ? false : true
}
// \u7EE7\u53D1\u5904\u7406\u4E0D\u4E00\u5B9A\u66F4\u6162
Array.prototype.someAsync = async function (callback, thisArg) { // return \u53EF\u4EE5\u8DF3\u51FAfor\u5FAA\u73AF
 for (let [key, value] of Object.entries(this)) {
   if (await callback.call(thisArg, value, key, this)) {
     return true
    }
  }
  return false
}
`,lang:"javascript"}),n(e,{code:`await [4, 7, 6].someAsync (async n => {
 return await new Promise(resolve => {
  setTimeout(() => resolve(n === 5))
 })
})
// false
`,lang:"javascript"}),f,n(e,{code:`Array.prototype.everyAsync = async function (callback, thisArg) {
 const result = await Promise.all(this.map(callback, thisArg))
  return result.every(item => item)
}
`,lang:"javascript"}),n(e,{code:`await [5, 5, 5].everyAsync(async n => {
 return await new Promise(resolve => {
  setTimeout(() => resolve(n === 5),1000)
 })
})
// true
`,lang:"javascript"})]),_:1})}}};export{_ as default};
