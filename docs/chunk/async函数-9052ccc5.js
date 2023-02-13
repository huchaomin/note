import{r as e,o as c,c as r,f as l,g as t,aa as n}from"./vendor-90615676.js";const i=n("h2",{id:"1-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),d=n("p",null,"async\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61",-1),h=n("p",null,"async \u51FD\u6570\u6709\u591A\u79CD\u4F7F\u7528\u5F62\u5F0F\u3002",-1),u=n("p",null,"async\u51FD\u6570\u5185\u90E8return\u8BED\u53E5\u8FD4\u56DE\u7684\u503C\uFF0C\u4F1A\u6210\u4E3Athen\u65B9\u6CD5\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u3002",-1),m=n("p",null,"async\u51FD\u6570\u5185\u90E8\u629B\u51FA\u9519\u8BEF\uFF0C\u4F1A\u5BFC\u81F4\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61\u53D8\u4E3Areject\u72B6\u6001\u3002\u629B\u51FA\u7684\u9519\u8BEF\u5BF9\u8C61\u4F1A\u88ABcatch\u65B9\u6CD5\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u5230\u3002",-1),p=n("h2",{id:"2-await-\u547D\u4EE4",class:"doc-heading"},"await \u547D\u4EE4",-1),w=n("p",null,"await\u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u7684\u7ED3\u679C\u3002\u5982\u679C\u4E0D\u662F Promise \u5BF9\u8C61\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684\u503C\u3002",-1),f=n("p",null,"await\u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2Athenable\u5BF9\u8C61\uFF08\u5373\u5B9A\u4E49then\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF09\uFF0C\u90A3\u4E48await\u4F1A\u5C06\u5176\u7B49\u540C\u4E8E Promise \u5BF9\u8C61\u3002",-1),_=n("p",null,"\u4EFB\u4F55\u4E00\u4E2Aawait\u8BED\u53E5\u540E\u9762\u7684Promise\u5BF9\u8C61\u53D8\u4E3Areject\u72B6\u6001\uFF0C\u90A3\u4E48\u6574\u4E2Aasync\u51FD\u6570\u90FD\u4F1A\u4E2D\u65AD\u6267\u884C\u3002",-1),g=n("h2",{id:"3-\u6CE8\u610F",class:"doc-heading"},"\u6CE8\u610F",-1),v=n("p",null,"\u591A\u4E2Aawait\u547D\u4EE4\u540E\u9762\u7684\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7EE7\u53D1\u5173\u7CFB\uFF0C\u6700\u597D\u8BA9\u5B83\u4EEC\u540C\u65F6\u89E6\u53D1\u3002",-1),y=n("p",null,"async \u51FD\u6570\u53EF\u4EE5\u4FDD\u7559\u8FD0\u884C\u5806\u6808",-1),P=n("p",null,"\u5E76\u53D1\u6267\u884C\u64CD\u4F5C\u653E\u5728\u5916\u9762",-1),T={__name:"async\u51FD\u6570",setup(j){const a=[{id:"doc-title",title:"async\u51FD\u6570"},{id:"1-\u4F7F\u7528",title:"1. \u4F7F\u7528"},{id:"2-await-\u547D\u4EE4",title:"2. await \u547D\u4EE4"},{id:"3-\u6CE8\u610F",title:"3. \u6CE8\u610F"}];return(b,x)=>{const o=e("doc-code"),s=e("doc-page");return c(),r(s,{desc:"",toc:a},{default:l(()=>[i,d,t(o,{code:`function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncPrint('hello world', 50)
`,lang:"javascript"}),h,t(o,{code:`// \u51FD\u6570\u58F0\u660E
async function foo() {}
// \u51FD\u6570\u8868\u8FBE\u5F0F
const foo = async function () {}
// \u5BF9\u8C61\u7684\u65B9\u6CD5
let obj = { async foo() {} }
obj.foo().then(...)
// Class \u7684\u65B9\u6CD5
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars')
  }

  async getAvatar(name) {
    const cache = await this.cachePromise
    return cache.match(\`/avatars/\${name}.jpg\`)
  }
}
const storage = new Storage()
storage.getAvatar('jake').then(\u2026)
// \u7BAD\u5934\u51FD\u6570
const foo = async () => {}
`,lang:"javascript"}),u,t(o,{code:`async function f() {
  return 'hello world'
}
f().then(v => console.log(v))
// "hello world"
`,lang:"javascript"}),m,t(o,{code:`async function f() {
  throw new Error('\u51FA\u9519\u4E86')
}
f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: \u51FA\u9519\u4E86
`,lang:"javascript"}),p,w,t(o,{code:`async function f() {
  // \u7B49\u540C\u4E8E
  // return 123
  return await 123
}
f().then(v => console.log(v))
// 123
`,lang:"javascript"}),f,t(o,{code:`class Sleep {
  constructor(timeout) {
    this.timeout = timeout
  }
  then(resolve, reject) {
    const startTime = Date.now()
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    )
  }
}
(async () => {
  const sleepTime = await new Sleep(1000)
  console.log(sleepTime)
})()
// 1000
`,lang:"javascript"}),_,t(o,{code:`async function f() {
  await Promise.reject('\u51FA\u9519\u4E86')
  await Promise.resolve('hello world') // \u4E0D\u4F1A\u6267\u884C
}

//\u8981\u53D8\u4E3A\u53EF\u6267\u884C
async function f() {
  await Promise.reject('\u51FA\u9519\u4E86').catch(e => console.log(e))
  return await Promise.resolve('hello world')
}
f()
.then(v => console.log(v))
// \u51FA\u9519\u4E86
// hello world

//\u6216\u8005
async function main() {
  try {
    const val1 = await firstStep()
    const val2 = await secondStep(val1)
    const val3 = await thirdStep(val1, val2)
    console.log('Final: ', val3)
  } catch (err) {
    console.error(err)
  }
}
`,lang:"javascript"}),g,v,t(o,{code:`let foo = await getFoo()
let bar = await getBar()   //\u53EA\u6709\u7B49foo\u72B6\u6001\u6539\u53D8\u4E4B\u540E\u624D\u80FD\u53BB\u83B7\u53D6bar\u7684\u72B6\u6001

// \u6539\u5199
let [foo, bar] = await Promise.all([getFoo(), getBar()])
`,lang:"javascript"}),y,t(o,{code:`const a = () => {
  b().then(() => c())
}
// \u5F53b()\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u51FD\u6570a()\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u800C\u662F\u7EE7\u7EED\u6267\u884C\u3002
// \u7B49\u5230b()\u8FD0\u884C\u7ED3\u675F\uFF0C\u53EF\u80FDa()\u65E9\u5C31\u8FD0\u884C\u7ED3\u675F\u4E86\uFF0Cb()\u6240\u5728\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u5DF2\u7ECF\u6D88\u5931\u4E86\u3002
// \u5982\u679Cb()\u6216c()\u62A5\u9519\uFF0C\u9519\u8BEF\u5806\u6808\u5C06\u4E0D\u5305\u62ECa()\u3002

//\u6539\u5199
const a = async () => {
  await b()
  c()
}
// b()\u8FD0\u884C\u7684\u65F6\u5019\uFF0Ca()\u662F\u6682\u505C\u6267\u884C\uFF0C\u4E0A\u4E0B\u6587\u73AF\u5883\u90FD\u4FDD\u5B58\u7740\u3002
// \u4E00\u65E6b()\u6216c()\u62A5\u9519\uFF0C\u9519\u8BEF\u5806\u6808\u5C06\u5305\u62ECa()\u3002
`,lang:"javascript"}),P,t(o,{code:`// \u7EE7\u53D1\u6267\u884C
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url)
    console.log(await response.text())
  }
}

// \u5E76\u53D1\u6267\u884C\uFF08async\u5728map\u51FD\u6570\u91CC\u9762\uFF09
async function logInOrder(urls) {
  // \u53EF\u4EE5\u7406\u89E3\u6B64\u65F6map\u51FD\u6570\u6CA1\u6709\u6682\u505C\u6267\u884C\uFF0C\u56E0\u4E3A\u91CC\u9762\u7684async \u548C await\u662F\u4E00\u5BF9
  const textPromises = urls.map(async url => {
    const response = await fetch(url)
    return response.text()
  })
  for (const textPromise of textPromises) {
    console.log(await textPromise)
  }
}
`,lang:"javascript"})]),_:1})}}};export{T as default};
