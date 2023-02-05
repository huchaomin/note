---
title: 修改 scrollbar 样式
desc: 修改 scrollbar 样式 scss 语法
---

```scss
@mixin scrollBar($width) {
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
```

```scss
::-webkit-scrollbar-thumb {
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

.scrollbar__wrap{ // 一般ui组件都有一个计算滚动条宽度的方法
  @include scrollBar(10px);
}
```
