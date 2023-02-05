---
date: '1647750014346'
title: css3 display:grid
description: css3 grid-template-areas基本用法
tags: [css3]
---
### grid-template-areas
网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成
```css
#container {
  grid-template-areas: "a b c" "d e f" "g h i";
}
```
![row-column20.png](~@assets/image/displayGrid/row-column20.png)
上面代码先划分出9个单元格，然后将其定名为a到i的九个区域，分别对应这九个单元格

##### 多个单元格合并成一个区域的写法如下
```css
#container {
  grid-template-areas: "a a a" "b b b" "c c c";
  grid-template-areas: "header header header" "main main sidebar" "footer footer footer";
}
```

##### 如果某些区域不需要利用，则使用 `.` 表示
```css
#container {
  grid-template-areas: "a . c" "d . f" "g . i";
}
```
上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。

#### 使用
区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名 `-start`，终止网格线自动命名为区域名 `-end`  
比如，区域名为 `header`，则起始位置的水平网格线和垂直网格线叫做 `header-start`，终止位置的水平网格线和垂直网格线叫做 `header-end`。
