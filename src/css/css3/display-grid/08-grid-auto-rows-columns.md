---
date: '1647781832971'
title: css3 display:grid
description: css3 grid-auto-columns、grid-auto-rows基本用法
tags: [css3]
---
### grid-auto-columns、grid-auto-rows基本用法
 - `grid-auto-columns`: 自动创建的多余网格的列宽
 - `grid-auto-rows`: 自动创建的多余网格的行高
 - 语法: 与 `grid-template-columns` 和 `grid-template-rows` 完全相同
 - 如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高

##### 例1
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px;
}

.item-8 {
  grid-column-start: 2;
  grid-row-start: 4;
}

.item-9 {
  grid-column-start: 3;
  grid-row-start: 5;
}
```
![row-column25.png](~@assets/image/displayGrid/row-column25.png)

##### 例2
实现所有行的行高一样
```css
#container {
  grid-auto-rows: 1fr;
}
```
