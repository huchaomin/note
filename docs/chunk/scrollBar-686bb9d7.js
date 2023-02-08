import{r,o as l,c as a,f as e,g as o}from"./vendor-585b19a3.js";const b={__name:"scrollBar",setup(i){const t=[{id:"doc-title",title:"\u4FEE\u6539 scrollbar \u6837\u5F0F"}];return(s,d)=>{const n=r("doc-code"),c=r("doc-page");return l(),a(c,{desc:"\u4FEE\u6539 scrollbar \u6837\u5F0F scss \u8BED\u6CD5",toc:t},{default:e(()=>[o(n,{code:`@mixin scrollBar($width) {
  &::-webkit-scrollbar{
    width: $width !important;
    height: $width !important;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: $width !important;
  }
}

@mixin scrollBarChildren($width) {
  ::-webkit-scrollbar{
    width: $width !important;
    height: $width !important;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: $width !important;
  }
}
`,lang:"scss"}),o(n,{code:`::-webkit-scrollbar-thumb {
  background: $scroll-bar;
  &:hover, &:active {
    background: $scroll-bar-hover
  }
}

html {
  @include scrollBarChildren(6px);
}

.aui-grid {
  @include scrollBarChildren(10px);
}

.scrollbar__wrap{ // \u4E00\u822Cui\u7EC4\u4EF6\u90FD\u6709\u4E00\u4E2A\u8BA1\u7B97\u6EDA\u52A8\u6761\u5BBD\u5EA6\u7684\u65B9\u6CD5
  @include scrollBar(10px);
}
`,lang:"scss"})]),_:1})}}};export{b as default};
