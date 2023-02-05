---
title: justify-items、align-items和place-items
desc: css3 display:grid justify-items、align-items和place-items基本用法
---

## 作用和取值

- `justify-items`: 设置单元格内容的水平位置
- `align-items`: 设置单元格内容的垂直位置
- `place-items` 属性是 `align-items` 属性和 `justify-items` 属性的合并简写形式,如果省略第二个值，则浏览器认为与第一个值相等
- 取值：start | end | center | stretch

### 例1

```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  place-items: stretch; /*默认*/
}
```

![row-column21.png](row-column21.png)

### 例2

```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  place-items: center;
}
```

![row-column22.png](row-column22.png)
