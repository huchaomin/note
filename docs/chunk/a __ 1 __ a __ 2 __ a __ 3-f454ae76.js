import{r as n,o as c,c as s,f as l,g as e,a9 as t}from"./vendor-585b19a3.js";const r=t("h2",{id:"1-a-==-1-and-and-a-==-2-and-and-a-==-3",class:"doc-heading"},"a == 1 && a == 2 && a == 3",-1),i=t("h2",{id:"2-a-===-1-and-and-a-===-2-and-and-a-===-3",class:"doc-heading"},"a === 1 && a === 2 && a === 3",-1),h={__name:"a == 1 && a == 2 && a == 3",setup(_){const d=[{id:"doc-title",title:"a == 1 && a == 2 && a == 3"},{id:"1-a-==-1-and-and-a-==-2-and-and-a-==-3",title:"1. a == 1 && a == 2 && a == 3"},{id:"2-a-===-1-and-and-a-===-2-and-and-a-===-3",title:"2. a === 1 && a === 2 && a === 3"}];return(u,p)=>{const a=n("doc-code"),o=n("doc-page");return c(),s(o,{desc:"\u7ECF\u5178\u9762\u8BD5\u9898\u4E4Ba == 1 && a == 2 && a == 3",toc:d},{default:l(()=>[r,e(a,{code:`// \u9690\u5F0F\u8F6C\u6362\u6210number\u4F1A\u8C03valueOf\u65B9\u6CD5
class A {
 constructor (value) {
   this.value = value
  }
  valueOf () {
   return this.value++
  }
}
let a = new A(1)
`,lang:"javascript"}),i,e(a,{code:`let value = 1
Object.defineProperty(window, 'a', {
 get () {
   return value++
  }
})
`,lang:"javascript"})]),_:1})}}};export{h as default};
