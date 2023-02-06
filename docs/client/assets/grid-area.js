import{r as t,o as r,c as l,f as i,g as e,ac as o,v as c}from"./vendor.js";const g=o("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),_=o("p",null,"\u6307\u5B9A\u9879\u76EE\u653E\u5728\u54EA\u4E00\u4E2A\u533A\u57DF",-1),p=o("p",null,[o("code",{class:"doc-token"},"grid-area"),c(" \u5C5E\u6027\u8FD8\u53EF\u7528\u4F5C "),o("code",{class:"doc-token"},"grid-row-start"),c("\u3001"),o("code",{class:"doc-token"},"grid-column-start"),c("\u3001"),o("code",{class:"doc-token"},"grid-row-end"),c("\u3001"),o("code",{class:"doc-token"},"grid-column-end"),c(" \u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F\uFF0C\u76F4\u63A5\u6307\u5B9A\u9879\u76EE\u7684\u4F4D\u7F6E\u3002")],-1),m=o("p",null,"\u4F8B",-1),f={__name:"grid-area",setup(u){const d=[{id:"doc-title",title:"grid-area"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"}];return(h,w)=>{const n=t("doc-code"),a=t("doc-img"),s=t("doc-page");return r(),l(s,{desc:"css3 display:grid grid-area\u57FA\u672C\u7528\u6CD5",toc:d},{default:i(()=>[g,_,e(n,{code:`#container {
  grid-template-areas: "a b c" "d e f" "g h i";
}

.item-1 {
  grid-area: e;
}
`,lang:"css"}),o("p",null,[e(a,{src:"row-column33.png",alt:"row-column33.png"})]),p,e(n,{code:`.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
`,lang:"css"}),m,e(n,{code:`.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
`,lang:"css"}),o("p",null,[e(a,{src:"row-column34.png",alt:"row-column34.png"})])]),_:1})}}};export{f as default};
