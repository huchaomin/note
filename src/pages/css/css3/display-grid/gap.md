---
title: row-gap、column-gap和gap
desc: css3 display:grid row-gap、column-gap和gap基本用法
---

## 兼容性

[can-i-use-row-gap](https://caniuse.com/?search=row-gap)
ie 不兼容

## 语法

- `row-gap`: 行间距
- `column-gap`: 列间距
- `gap`: 行列间距的合并简写，语法如下

```css
gap: <row-gap> <column-gap>;
/*如果省略了第二个值，浏览器认为第二个值等于第一个值*/
```

::: warning
三者旧语法为：`grid-row-gap` `grid-column-gap` `grid-gap`
:::

```css
#container {
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

![row-column10.png](row-column10.png)
