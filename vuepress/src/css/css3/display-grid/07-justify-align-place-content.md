---
date: '1647755648702'
title: css3 display:grid
description: css3 justify-content、align-content和place-content基本用法
tags: [css3]
---
### justify-content、align-content和place-content基本用法
 - `justify-content`: 是整个内容区域在容器里面的水平位置
 - `align-content`: 属性是整个内容区域的垂直位置
 - `place-content` 属性是 `align-content` 属性和 `justify-content` 属性的合并简写形式,如果省略第二个值，则浏览器认为与第一个值相等
 - 取值：start | end | center | stretch | space-around | space-between | space-evenly

##### 例1
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  height: 500px;
  border: 1px solid #dddddd;
  place-content: space-evenly;
}
```
![row-column23.png](~@assets/image/displayGrid/row-column23.png)

##### 例1
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 1fr 1fr 1fr;
  height: 500px;
  border: 1px solid #dddddd;
  place-content: stretch;
}
```
![row-column24.png](~@assets/image/displayGrid/row-column24.png)
项目大小没有指定时，拉伸占据整个网格容器
