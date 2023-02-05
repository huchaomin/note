---
date: '1647862304690'
title: css3 display:grid
description: css3 grid-column-start/end、grid-row-start/end基本用法
tags: [css3]
---
### grid-column-start/end、grid-row-start/end基本用法
 - `grid-column-start`: 左边框所在的垂直网格线
 - `grid-column-end`: 右边框所在的垂直网格线
 - `grid-row-start`: 上边框所在的水平网格线
 - `grid-row-end`: 下边框所在的水平网格线

#### 可以设置为网格线的序列号
##### 例1
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```
![row-column26.png](~@assets/image/displayGrid/row-column26.png)

##### 例2
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```
![row-column27.png](~@assets/image/displayGrid/row-column27.png)

#### 可以设置为区域或网格线的名字
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: "header1 header2 header3" "body1 body2 body3" "footer1 footer2 footer3";
}
.item-1 {
  grid-column-start: body1-start; /* header1-start|footer1-start */
  grid-column-end: body2-end; /* header2-end|footer2-end */
  grid-row-start: body1-start; /* body2-start|body3-start */
  grid-row-end: footer1-end; /* footer2|footer3 */
}
```
等同于
```css
#container {
  grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4];
}

.item-1 {
  grid-column-start: c1;
  grid-column-end: c3;
  grid-row-start: r2;
  grid-row-end: r4;
}
```
![row-column28.png](~@assets/image/displayGrid/row-column28.png)

#### `span` 关键字
与 `table` 里面表示一样，‘跨越’的意思
```css
.item-1 {
  grid-column-start: span 2;
  /* grid-column-end: span 2; 相同效果 */
}
```
![row-column29.png](~@assets/image/displayGrid/row-column29.png)

#### `z-index` 定义重叠顺序
如果产生了项目的重叠，则使用z-index属性指定项目的重叠顺序
```css
.item-1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: span 2;
}

.item-2 {
  grid-column-start: 2;
  grid-row-start: 1;
}
```
![row-column30.png](~@assets/image/displayGrid/row-column30.png)

使 1 在 2 上面
```css
.item-1 {
  z-index: 1; /* 0也可以使1在2之上 */
}
```
![row-column31.png](~@assets/image/displayGrid/row-column31.png)

### `grid-column` 和 `grid-row` 的基本用法
 - `grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的合并简写形式
 - `grid-row` 属性是 `grid-row-start` 属性和 `grid-row-end` 的合并简写形式

#### 语法
```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

##### 例1
```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

##### 例2
```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```
![row-column32.png](~@assets/image/displayGrid/row-column32.png)

##### 例3
斜杠以及后面的部分可以省略，默认跨越一个网格
```css
.item {
  grid-column: 1;
  grid-row: 1;
}
```
