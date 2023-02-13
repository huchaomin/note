import{r as l,o as c,c as a,f as i,g as n,aa as e}from"./vendor-90615676.js";const _=e("ul",null,[e("li",null,"url-loader \u5C06\u5C0F\u4E8E 4kb \u7684\u8D44\u6E90\u5185\u8054\uFF0C\u4EE5\u51CF\u5C11 HTTP \u8BF7\u6C42\u7684\u6570\u91CF"),e("li",null,"\u5982\u679C URL \u4EE5 ~ \u5F00\u5934\uFF0C\u5176\u540E\u7684\u4EFB\u4F55\u5185\u5BB9\u90FD\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\u8BF7\u6C42\u88AB\u89E3\u6790")],-1),d=e("ul",null,[e("li",null,"\u672C\u5730\u9884\u89C8dist")],-1),u=e("ul",null,[e("li",null,"\u4F7F\u7528\u73AF\u5883\u53D8\u91CF")],-1),h={__name:"others",setup(r){const s=[{id:"doc-title",title:"vue.config.js \u5176\u4ED6"}];return(g,p)=>{const o=l("doc-code"),t=l("doc-page");return c(),a(t,{desc:"vue-cli vue.config.js \u6742\u788E\u77E5\u8BC6",toc:s},{default:i(()=>[_,n(o,{code:`// html
<img alt="Vue logo" src="@/assets/img/logo.png">

// css (css-loader)
background: url('~@/assets/img/logo.png');
`,lang:"vue"}),d,n(o,{code:`npm install -g serve
serve -s dist
# -s \u53C2\u6570\u7684\u610F\u601D\u662F\u5C06\u5176\u67B6\u8BBE\u5728 Single-Page Application \u6A21\u5F0F\u4E0B
# \u8FD9\u4E2A\u6A21\u5F0F\u4F1A\u5904\u7406\u5373\u5C06\u63D0\u5230\u7684\u8DEF\u7531\u95EE\u9898(history\u6A21\u5F0F\u4E0B\uFF0C\u5C06\u4EFB\u4F55\u6CA1\u6709\u5339\u914D\u5230\u9759\u6001\u6587\u4EF6\u7684\u8BF7\u6C42\u56DE\u9000\u5230 index.html)
`,lang:"sh"}),u,n(o,{code:`VUE_APP_* | NODE_ENV | BASE_URL
# .env \u6587\u4EF6\u91CC\u9762\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u53EA\u6709\u4EE5VUE_APP\u5F00\u5934\u7684\u624D\u4F1A\u88ABvue-cli\u4F7F\u7528
`,lang:"sh"})]),_:1})}}};export{h as default};
