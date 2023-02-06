import{r as d,o as a,c as e,f as s,g as t,ac as n}from"./vendor.js";const l=n("h2",{id:"1-min-",class:"doc-heading"},"min()",-1),m=n("p",null,"\u51FD\u6570\u8FD4\u56DE\u4E00\u7EC4\u503C\u4E2D\u7684\u6700\u5C0F\u503C\u3002",-1),p=n("h2",{id:"2-max-",class:"doc-heading"},"max()",-1),_=n("p",null,"\u51FD\u6570\u8FD4\u56DE\u4E00\u7EC4\u503C\u4E2D\u7684\u6700\u5927\u503C\u3002",-1),h=n("h2",{id:"3-clamp-",class:"doc-heading"},"clamp()",-1),x=n("p",null,"\u8FD4\u56DE\u9650\u5B9A\u6570\u503C",-1),w=n("p",null,"\u7B49\u540C\u4E8E",-1),r=n("h2",{id:"4-calc-",class:"doc-heading"},"calc()",-1),v=n("p",null,"\u8BA1\u7B97\u503C",-1),k={__name:"min\u3001max\u3001clamp\u3001calc",setup(g){const i=[{id:"doc-title",title:"min\u3001max\u3001clamp\u3001calc"},{id:"1-min-",title:"1. min()"},{id:"2-max-",title:"2. max()"},{id:"3-clamp-",title:"3. clamp()"},{id:"4-calc-",title:"4. calc()"}];return(u,f)=>{const c=d("doc-code"),o=d("doc-page");return a(),e(o,{desc:"",toc:i},{default:s(()=>[l,m,t(c,{code:`div{
  width:80vw;
  max-width:200px;
}
// \u7B49\u540C\u4E8E
div{
  width:min(80vw, 200px);
}
`,lang:"css"}),p,_,t(c,{code:`div{
  width:80vw;
  min-width:200px;
}
// \u7B49\u540C\u4E8E
div{
  width:max(80vw, 200px);
}
`,lang:"css"}),h,x,t(c,{code:`div{
  width: 100%;
  min-width:200px;
  max-width:300px;
}
// \u7B49\u540C\u4E8E
div{
  clamp(200px, 100%, 300px);
}
`,lang:"css"}),w,t(c,{code:`max(\u6700\u5C0F\u503C, min(val, \u6700\u5927\u503C));
`,lang:"css"}),r,v,t(c,{code:`:root{
  --w:min(200px, 80vw);
}
div {
  height: 50px;
  width:calc(var(--w) - 50px);
}
`,lang:"css"})]),_:1})}}};export{k as default};
