import{r,o as s,c as i,f as l,g as o,aa as t,v as n}from"./vendor-774b84b8.js";const d=t("h2",{id:"1-object-getownpropertydescriptors-",class:"doc-heading"},"Object.getOwnPropertyDescriptors()",-1),a=t("p",null,[n("ES5:Object.getOwnPropertyDescriptor(obj, prop)\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u67D0\u4E2A\u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61"),t("br"),n(" ES6:Object.getOwnPropertyDescriptors(obj)\u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\uFF08\u975E\u7EE7\u627F\u5C5E\u6027\uFF09\u7684\u63CF\u8FF0\u5BF9\u8C61\u3002")],-1),b=t("h2",{id:"2--proto-\u5C5E\u6027",class:"doc-heading"},[t("code",{class:"doc-token"},"__proto__"),n("\u5C5E\u6027")],-1),_=t("p",null,"\u7528\u6765\u8BFB\u53D6\u6216\u8BBE\u7F6E\u5F53\u524D\u5BF9\u8C61\u7684prototype\u5BF9\u8C61",-1),u=t("p",null,"\u7531\u4E8E\u53EA\u6709\u6D4F\u89C8\u5668\u90E8\u7F72\u4E86\u8BE5\u5C5E\u6027\uFF0C\u6545ES6\u63A8\u8350",-1),j=t("ul",null,[t("li",null,"Object.setPrototypeOf()\uFF08\u5199\u64CD\u4F5C\uFF09"),t("li",null,"Object.getPrototypeOf()\uFF08\u8BFB\u64CD\u4F5C\uFF09"),t("li",null,"Object.create()\uFF08\u751F\u6210\u64CD\u4F5C\uFF09")],-1),O=t("h2",{id:"3-object-setprototypeof-",class:"doc-heading"},"Object.setPrototypeOf()",-1),f=t("p",null,"\u8BBE\u7F6E\u4E00\u4E2A\u5BF9\u8C61\u7684prototype\u5BF9\u8C61,\u8FD4\u56DE\u7684\u662F\u7B2C\u4E00\u4E2A\u53C2\u6570",-1),y=t("h2",{id:"4-object-getprototypeof-",class:"doc-heading"},"Object.getPrototypeOf()",-1),g=t("p",null,"\u8BFB\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61",-1),m={__name:"\u5BF9\u8C61\u7684\u62D3\u5C553",setup(h){const c=[{id:"doc-title",title:"\u5BF9\u8C61\u7684\u62D3\u5C55"},{id:"1-object-getownpropertydescriptors-",title:"1. Object.getOwnPropertyDescriptors()"},{id:"2--proto-\u5C5E\u6027",title:"2. __proto__\u5C5E\u6027"},{id:"3-object-setprototypeof-",title:"3. Object.setPrototypeOf()"},{id:"4-object-getprototypeof-",title:"4. Object.getPrototypeOf()"}];return(P,w)=>{const e=r("doc-code"),p=r("doc-page");return s(),i(p,{desc:"",toc:c},{default:l(()=>[d,a,o(e,{code:`const obj = {
  foo: 123,
  get bar() { return 'abc' }
}
Object.getOwnPropertyDescriptors(obj)
// {
//   foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true
//    },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true
//    }
// }
`,lang:"javascript"}),b,_,o(e,{code:`//\u5B9E\u73B0\u4E0A\uFF0C__proto__\u8C03\u7528\u7684\u662FObject.prototype.__proto__\uFF0C\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B
Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    let _thisObj = Object(this)
    return Object.getPrototypeOf(_thisObj)
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError()
    }
    if (!isObject(this)) {
      return undefined
    }
    if (!isObject(proto)) {
      return undefined
    }
    let status = Reflect.setPrototypeOf(this, proto)
    if (!status) {
      throw new TypeError()
    }
  },
})

function isObject(value) {
  return Object(value) === value
}
`,lang:"javascript"}),u,j,O,f,o(e,{code:`let proto = {}
let obj = { x: 10 }
Object.setPrototypeOf(obj, proto)
proto.y = 20
proto.z = 40
obj.x // 10
obj.y // 20
obj.z // 40
`,lang:"javascript"}),y,g,o(e,{code:`Object.getPrototypeOf(1) === Number.prototype // true
Object.getPrototypeOf('foo') === String.prototype // true
Object.getPrototypeOf(true) === Boolean.prototype // true
Object.getPrototypeOf(null)
// TypeError: Cannot convert undefined or null to object
Object.getPrototypeOf(undefined)
// TypeError: Cannot convert undefined or null to object
`,lang:"javascript"})]),_:1})}}};export{m as default};
