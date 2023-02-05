import{r as s,o as l,c as a,f as i,g as n,a8 as e,v as o}from"./vendor.js";const h=e("h2",{id:"1-\u63D2\u69FD\u7EDF\u4E00",class:"doc-heading"},"\u63D2\u69FD\u7EDF\u4E00",-1),r=e("h3",{id:"2-\u6982\u89C8",class:"doc-heading"},"\u6982\u89C8",-1),p=e("p",null,"\u6B64\u66F4\u6539\u7EDF\u4E00\u4E86 3.x \u4E2D\u7684\u666E\u901A\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u3002",-1),_=e("p",null,"\u4EE5\u4E0B\u662F\u53D8\u5316\u7684\u53D8\u66F4\u603B\u7ED3\uFF1A",-1),u=e("ul",null,[e("li",null,[e("code",{class:"doc-token"},"this.$slots"),o(" \u73B0\u5728\u5C06\u63D2\u69FD\u4F5C\u4E3A\u51FD\u6570\u516C\u5F00")]),e("li",null,[e("strong",null,"\u975E\u517C\u5BB9"),o("\uFF1A\u79FB\u9664 "),e("code",{class:"doc-token"},"this.$scopedSlots")])],-1),m=e("h4",{class:"doc-heading"},"2.x \u8BED\u6CD5",-1),g=e("p",null,[o("\u5F53\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\uFF0C\u5373 "),e("code",{class:"doc-token"},"h"),o(" \u65F6\uFF0C2.x \u66FE\u7ECF\u5728\u5185\u5BB9\u8282\u70B9\u4E0A\u5B9A\u4E49 "),e("code",{class:"doc-token"},"slot"),o(" \u6570\u636E property\u3002")],-1),x=e("p",null,"\u6B64\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u8BED\u6CD5\u5F15\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\uFF1A",-1),y=e("blockquote",{class:"doc-note"},[e("p",null,"Normal slots are rendered during the parent\u2019s render cycle. When a dependency of a slot changes, it causes both the parent and child components to re-render. Scoped slots, on the other hand, are compiled into inline functions and called during the child component\u2019s render cycle. This means any data dependencies relied on by a scoped slot are collected by the child component, resulting in more precise updates. In 2.6, we have introduced an optimization that further ensures parent scope dependency mutations only affect the parent and would no longer force the child component to update if it uses only scoped slots")],-1),f=e("h4",{class:"doc-heading"},"3.x \u8BED\u6CD5",-1),k=e("p",null,"\u5728 3.x \u4E2D\uFF0C\u63D2\u69FD\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u5B9A\u4E49\u4E3A\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF1A",-1),v=e("p",null,[o("\u5F53\u4F60\u9700\u8981\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u5F15\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u65F6\uFF0C\u5B83\u4EEC\u73B0\u5728\u88AB\u7EDF\u4E00\u5230 "),e("code",{class:"doc-token"},"$slots"),o(" \u9009\u9879\u4E2D\u4E86\u3002")],-1),C={__name:"\u63D2\u69FD\u7EDF\u4E00",setup($){const c=[{id:"doc-title",title:"\u63D2\u69FD\u7EDF\u4E00"},{id:"1-\u63D2\u69FD\u7EDF\u4E00",title:"1. \u63D2\u69FD\u7EDF\u4E00"},{id:"2-\u6982\u89C8",title:"1.1. \u6982\u89C8",sub:!0}];return(b,S)=>{const t=s("doc-code"),d=s("doc-page");return l(),a(d,{desc:"",toc:c},{default:i(()=>[h,r,p,_,u,m,g,n(t,{code:`// 2.x \u8BED\u6CD5
h(LayoutComponent, [
  h('div', { slot: 'header' }, this.header),
  h('div', { slot: 'content' }, this.content)
])
`,lang:"js"}),x,n(t,{code:`// 2.x \u8BED\u6CD5
this.$scopedSlots.header
`,lang:"js"}),y,f,k,n(t,{code:`// 3.x Syntax
h(LayoutComponent, {}, {
  header: () => h('div', this.header),
  content: () => h('div', this.content)
})
`,lang:"js"}),v,n(t,{code:`// 2.x \u8BED\u6CD5
this.$scopedSlots.header

// 3.x \u8BED\u6CD5
this.$slots.header()
`,lang:"js"})]),_:1})}}};export{C as default};
