import{r as c,o as _,c as m,f as s,a9 as e,g as t,v as o}from"./vendor.js";const p=e("h2",{id:"1-\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",class:"doc-heading"},"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",-1),r=e("br",null,null,-1),v=e("code",{class:"doc-token"},"-ms-",-1),g=e("h2",{id:"2-\u51C6\u5907",class:"doc-heading"},"\u51C6\u5907",-1),u=e("br",null,null,-1),h=e("br",null,null,-1),k=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[e("code",{class:"doc-token"},"display: inline-grid;"),o(": container \u5143\u7D20\u4F1A\u53D8\u4E3A\u884C\u5185\u5143\u7D20\uFF0C\u5BF9 item \u5143\u7D20\u65E0\u5F71\u54CD")])],-1),f=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("\u8BBE\u4E3A\u7F51\u683C\u5E03\u5C40\u4EE5\u540E\uFF0C\u5BB9\u5668\u5B50\u5143\u7D20\uFF08\u9879\u76EE\uFF09\u7684 "),e("code",{class:"doc-token"},"float"),o("\u3001"),e("code",{class:"doc-token"},"display: inline-block"),o("\u3001"),e("code",{class:"doc-token"},"display: table-cell"),o("\u3001"),e("code",{class:"doc-token"},"vertical-align"),o(" \u548C "),e("code",{class:"doc-token"},"column-*"),o(" \u7B49\u8BBE\u7F6E\u90FD\u5C06\u5931\u6548\u3002")])],-1),x={__name:"\u517C\u5BB9\u6027\u4E0E\u51C6\u5907",setup(b){const l=[{id:"doc-title",title:"css3 display:grid"},{id:"1-\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",title:"1. \u6D4F\u89C8\u5668\u517C\u5BB9\u6027"},{id:"2-\u51C6\u5907",title:"2. \u51C6\u5907"}];return(y,C)=>{const d=c("doc-img"),i=c("doc-link"),n=c("doc-code"),a=c("doc-page");return _(),m(a,{desc:"",toc:l},{default:s(()=>[p,e("p",null,[t(d,{src:"can-i-use-grid.png",alt:"can-i-use-grid.png"}),r,o(" \u4ECE"),t(i,{to:"https://caniuse.com/?search=grid"},{default:s(()=>[o("Can i use")]),_:1}),o("\u4E0A\u53EF\u4EE5\u770B\u5230\u57FA\u672C\u4E0A\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u5DF2\u7ECF\u652F\u6301\u4E86\uFF0Cie10\u548C11\u4E5F\u53EF\u4EE5\u901A\u8FC7\u524D\u7F00 "),v,o(" \u6765\u83B7\u5F97\u517C\u5BB9")]),g,e("p",null,[t(i,{to:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeat()"},{default:s(()=>[o("css repeat()")]),_:1}),u,t(i,{to:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax()"},{default:s(()=>[o("css minmax()")]),_:1})]),t(n,{code:`<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
`,lang:"html"}),t(n,{code:`#container {
  display: grid;
}
`,lang:"css"}),e("p",null,[t(d,{src:"display-grid.png",alt:"display-grid.png"}),h,o(" \u53EF\u4EE5\u770B\u51FA\u5B50\u5143\u7D20\u9ED8\u8BA4\u5360\u7236\u5143\u7D20\u5BBD\u5EA6\u7684100%")]),k,f]),_:1})}}};export{x as default};
