---
date: '1647877140048'
title: css3 display:grid
description: css3 justify-self、align-self和place-self基本用法
tags: [css3]
---
### justify-self、align-self和place-self基本用法

 - `justify-self` 属性设置单元格内容的水平位置，跟 `justify-items` 属性的用法完全一致，但只作用于单个项目
 - `align-self` 属性设置单元格内容的垂直位置，跟 `align-items` 属性的用法完全一致，也是只作用于单个项目
 - `place-self` 属性是 `align-self` 属性和 `justify-self` 属性的合并简写形式,如果省略第二个值，`place-self` 属性会认为这两个值相等

##### 例1
```css
.item-1 {
  justify-self: start;
}
```
![row-column35.png](~@assets/image/displayGrid/row-column35.png)

##### 例2
```css
.item-1 {
  place-self: center;
}
```
![row-column36.png](~@assets/image/displayGrid/row-column36.png)
