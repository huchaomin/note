---
title: grid-area
desc: css3 display:grid grid-area基本用法
---
## 作用

指定项目放在哪一个区域

```css
#container {
  grid-template-areas: "a b c" "d e f" "g h i";
}

.item-1 {
  grid-area: e;
}
```

![row-column33.png](row-column33.png)

`grid-area` 属性还可用作 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end` 的合并简写形式，直接指定项目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

例

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

![row-column34.png](row-column34.png)
