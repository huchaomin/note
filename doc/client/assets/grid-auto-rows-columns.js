import{r as n,o as l,c as r,f as i,g as c,aa as o,v as t}from"./vendor.js";const u=o("h2",{id:"1-\u4F5C\u7528\u548C\u53D6\u503C",class:"doc-heading"},"\u4F5C\u7528\u548C\u53D6\u503C",-1),g=o("ul",null,[o("li",null,[o("code",{class:"doc-token"},"grid-auto-columns"),t(": \u81EA\u52A8\u521B\u5EFA\u7684\u591A\u4F59\u7F51\u683C\u7684\u5217\u5BBD")]),o("li",null,[o("code",{class:"doc-token"},"grid-auto-rows"),t(": \u81EA\u52A8\u521B\u5EFA\u7684\u591A\u4F59\u7F51\u683C\u7684\u884C\u9AD8")]),o("li",null,[t("\u8BED\u6CD5: \u4E0E "),o("code",{class:"doc-token"},"grid-template-columns"),t(" \u548C "),o("code",{class:"doc-token"},"grid-template-rows"),t(" \u5B8C\u5168\u76F8\u540C")]),o("li",null,"\u5982\u679C\u4E0D\u6307\u5B9A\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u5B8C\u5168\u6839\u636E\u5355\u5143\u683C\u5185\u5BB9\u7684\u5927\u5C0F\uFF0C\u51B3\u5B9A\u65B0\u589E\u7F51\u683C\u7684\u5217\u5BBD\u548C\u884C\u9AD8")],-1),p=o("h3",{id:"2-\u4F8B1",class:"doc-heading"},"\u4F8B1",-1),_=o("h3",{id:"3-\u4F8B2",class:"doc-heading"},"\u4F8B2",-1),m=o("p",null,"\u5B9E\u73B0\u6240\u6709\u884C\u7684\u884C\u9AD8\u4E00\u6837",-1),k={__name:"grid-auto-rows-columns",setup(h){const e=[{id:"doc-title",title:"grid-auto-columns\u3001grid-auto-rows"},{id:"1-\u4F5C\u7528\u548C\u53D6\u503C",title:"1. \u4F5C\u7528\u548C\u53D6\u503C"},{id:"2-\u4F8B1",title:"1.1. \u4F8B1",sub:!0},{id:"3-\u4F8B2",title:"1.2. \u4F8B2",sub:!0}];return(w,x)=>{const s=n("doc-code"),d=n("doc-img"),a=n("doc-page");return l(),r(a,{desc:"css3 display:grid grid-auto-columns\u3001grid-auto-rows\u57FA\u672C\u7528\u6CD5",toc:e},{default:i(()=>[u,g,p,c(s,{code:`#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px;
}

.item-8 {
  grid-column-start: 2;
  grid-row-start: 4;
}

.item-9 {
  grid-column-start: 3;
  grid-row-start: 5;
}
`,lang:"css"}),o("p",null,[c(d,{src:"row-column25.png",alt:"row-column25.png"})]),_,m,c(s,{code:`#container {
  grid-auto-rows: 1fr;
}
`,lang:"css"})]),_:1})}}};export{k as default};
