---
date: '1647741902906'
title: css3 display:grid
description: css3 grid-auto-flow基本用法
tags: [css3]
---
### grid-auto-flow
#### 兼容性
[can-i-use-grid-auto-flow](https://caniuse.com/?search=grid-auto-flow)
ie不支持

#### 作用
划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。  
默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。
这个顺序由 `grid-auto-flow` 属性决定，默认值是 `row`，即"先行后列"。也可以将它设成 `column`，变成"先列后行"

#### grid-auto-flow: column;
 - `grid-template-rows` :定义每一行的行高,值的个数就是行的个数 
 - `grid-template-columns` :属性定义每一列的列宽,列的个数由最后 item 的总数决定
##### 例1
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```
![row-column11.png](~@assets/image/displayGrid/row-column11.png)

##### 例2
```css
#container {
  grid-template-columns: 100px;
  grid-template-rows: 100px 150px 200px;
}
```
![row-column12.png](~@assets/image/displayGrid/row-column12.png)

##### 例3
```css
#container {
  grid-template-columns: 100%;
  grid-template-rows: 100% 100px;
}
```
![row-column13.png](~@assets/image/displayGrid/row-column13.png)
此时1的宽度为100% container,所以3~9已经超出了 container。  
1的高度为 100px[2的高度] + 1的原始高度[内容自动撑起来的高度]。 

##### 例4
```css
#container {
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 50px 100px);
}
```
![row-column14.png](~@assets/image/displayGrid/row-column14.png)

##### 例5
```css
#container {
   grid-template-columns: repeat(auto-fill, 50px 100px);
}
```
![row-column15.png](~@assets/image/displayGrid/row-column15.png)

##### 例6
```css
#container {
    grid-template-columns: 20px  1fr 2fr;
}
```
![row-column16.png](~@assets/image/displayGrid/row-column16.png)

##### 例7
```css
#container {
    grid-template-columns: 100px auto 100px;
}
```
![row-column17.png](~@assets/image/displayGrid/row-column17.png)
2、4、5、6、7、8、9宽度一致

#### grid-auto-flow: row dense;
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row dense;
}
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;  
}

.item-2 {
  grid-column-start: 2;
  grid-column-end: 4; 
}
```
![row-column18.png](~@assets/image/displayGrid/row-column18.png)

#### grid-auto-flow: column dense;
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column dense;
}
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;  
}

.item-2 {
  grid-column-start: 2;
  grid-column-end: 4; 
}
```
![row-column19.png](~@assets/image/displayGrid/row-column19.png)
