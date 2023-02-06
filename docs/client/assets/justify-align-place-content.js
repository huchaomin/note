import{r as c,o as a,c as i,f as p,g as t,ac as e,v as n}from"./vendor.js";const r=e("h2",{id:"1-\u4F5C\u7528\u548C\u53D6\u503C",class:"doc-heading"},"\u4F5C\u7528\u548C\u53D6\u503C",-1),u=e("ul",null,[e("li",null,[e("code",{class:"doc-token"},"justify-content"),n(": \u662F\u6574\u4E2A\u5185\u5BB9\u533A\u57DF\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6C34\u5E73\u4F4D\u7F6E")]),e("li",null,[e("code",{class:"doc-token"},"align-content"),n(": \u5C5E\u6027\u662F\u6574\u4E2A\u5185\u5BB9\u533A\u57DF\u7684\u5782\u76F4\u4F4D\u7F6E")]),e("li",null,[e("code",{class:"doc-token"},"place-content"),n(" \u5C5E\u6027\u662F "),e("code",{class:"doc-token"},"align-content"),n(" \u5C5E\u6027\u548C "),e("code",{class:"doc-token"},"justify-content"),n(" \u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F,\u5982\u679C\u7701\u7565\u7B2C\u4E8C\u4E2A\u503C\uFF0C\u5219\u6D4F\u89C8\u5668\u8BA4\u4E3A\u4E0E\u7B2C\u4E00\u4E2A\u503C\u76F8\u7B49")]),e("li",null,"\u53D6\u503C\uFF1Astart | end | center | stretch | space-around | space-between | space-evenly")],-1),_=e("h3",{id:"2-\u4F8B1",class:"doc-heading"},"\u4F8B1",-1),g=e("h3",{id:"3-\u4F8B1",class:"doc-heading"},"\u4F8B1",-1),m=e("br",null,null,-1),y={__name:"justify-align-place-content",setup(h){const l=[{id:"doc-title",title:"justify-content\u3001align-content\u548Cplace-content"},{id:"1-\u4F5C\u7528\u548C\u53D6\u503C",title:"1. \u4F5C\u7528\u548C\u53D6\u503C"},{id:"2-\u4F8B1",title:"1.1. \u4F8B1",sub:!0},{id:"3-\u4F8B1",title:"1.2. \u4F8B1",sub:!0}];return(x,f)=>{const o=c("doc-code"),s=c("doc-img"),d=c("doc-page");return a(),i(d,{desc:"css3 display:grid justify-content\u3001align-content\u548Cplace-content\u57FA\u672C\u7528\u6CD5",toc:l},{default:p(()=>[r,u,_,t(o,{code:`#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  height: 500px;
  border: 1px solid #dddddd;
  place-content: space-evenly;
}
`,lang:"css"}),e("p",null,[t(s,{src:"row-column23.png",alt:"row-column23.png"})]),g,t(o,{code:`#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 1fr 1fr 1fr;
  height: 500px;
  border: 1px solid #dddddd;
  place-content: stretch;
}
`,lang:"css"}),e("p",null,[t(s,{src:"row-column24.png",alt:"row-column24.png"}),m,n(" \u9879\u76EE\u5927\u5C0F\u6CA1\u6709\u6307\u5B9A\u65F6\uFF0C\u62C9\u4F38\u5360\u636E\u6574\u4E2A\u7F51\u683C\u5BB9\u5668")])]),_:1})}}};export{y as default};
