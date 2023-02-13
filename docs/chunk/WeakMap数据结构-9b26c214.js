import{r as a,o as c,c as l,f as s,g as p,aa as e}from"./vendor-90615676.js";const d=e("h2",{id:"1-weakmap\u6570\u636E\u7ED3\u6784",class:"doc-heading"},"WeakMap\u6570\u636E\u7ED3\u6784",-1),_=e("ul",null,[e("li",null,"WeakMap\u53EA\u63A5\u53D7\u5BF9\u8C61\u4F5C\u4E3A\u952E\u540D\uFF08null\u9664\u5916\uFF09\uFF0C\u4E0D\u63A5\u53D7\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u4F5C\u4E3A\u952E\u540D"),e("li",null,"\u952E\u540D\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u90FD\u662F\u5F31\u5F15\u7528\uFF0C\u6709\u52A9\u4E8E\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F"),e("li",null,"WeakMap \u5F31\u5F15\u7528\u7684\u53EA\u662F\u952E\u540D\uFF0C\u800C\u4E0D\u662F\u952E\u503C\u3002\u952E\u503C\u4F9D\u7136\u662F\u6B63\u5E38\u5F15\u7528")],-1),i=e("p",null,"WeakMap\u53EA\u6709\u56DB\u4E2A\u65B9\u6CD5\u53EF\u7528\uFF1Aget()\u3001set()\u3001has()\u3001delete()\u3002",-1),h={__name:"WeakMap\u6570\u636E\u7ED3\u6784",setup(k){const o=[{id:"doc-title",title:"WeakMap\u6570\u636E\u7ED3\u6784"},{id:"1-weakmap\u6570\u636E\u7ED3\u6784",title:"1. WeakMap\u6570\u636E\u7ED3\u6784"}];return(r,u)=>{const t=a("doc-code"),n=a("doc-page");return c(),l(n,{desc:"",toc:o},{default:s(()=>[d,_,p(t,{code:`const wm = new WeakMap()
let key = {}
let obj = {foo: 1}

wm.set(key, obj)
obj = null
wm.get(key)
// Object {foo: 1}
`,lang:"javascript"}),i]),_:1})}}};export{h as default};
