---
date: '1641478591107'
title: 修改 scrollbar 样式
description: 修改 scrollbar 样式 scss 语法
tags: [css scrollbar]
---

### 修改 scrollbar 样式
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

.scrollbar__wrap,
#app > .middle {
  @include scrollBar(10px);
}
```

