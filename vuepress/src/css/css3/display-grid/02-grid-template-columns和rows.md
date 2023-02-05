---
date: '1647677797751'
title: css3 display:grid
description: css3 grid-template-columns和grid-template-rows基本用法
tags: [css3]
---

### grid-template-columns 和 grid-template-rows
 - `grid-template-columns` :属性定义每一列的列宽,值的个数就是列的个数(grid-auto-flow为row的情况下)  
 - `grid-template-rows` :定义每一行的行高,行的个数由最后 item 的总数决定(grid-auto-flow为row的情况下)
#### 1. 可以设置为固定的像素值
```css
#container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```
![row-column1.png](~@assets/image/displayGrid/row-column1.png)
```css
#container {
  grid-template-columns: 100px;
  grid-template-rows: 100px 150px 200px;
}
```
4、5、6、7、8、9高度没有定义，由内部元素撑起来
![row-column2.png](~@assets/image/displayGrid/row-column2.png)

#### 2. 可以设置为百分比
```css
#container {
  grid-template-columns: 100%;
  grid-template-rows: 100% 100px;
}
```
1 的宽度为：父元素100%，如果设置的更大，overflow:visible  
1 的高度为：3的高度[3、4、5、6、7、8、9高度一样] * （9 - 1[这里指的是2]） + 2的高度，此时子元素已超出父元素的高度，但没有滚动条
![row-column3.png](~@assets/image/displayGrid/row-column3.png)

#### 3. 可以设置 `repeat()` 函数
```css
#container {
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 50px 100px);
}
```
![row-column4.png](~@assets/image/displayGrid/row-column4.png)
#### 4. `auto-fill` 关键字
有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 `auto-fill` 关键字表示自动填充。
```css
#container {
  grid-template-columns: repeat(auto-fill, 50px 100px);
  /*不知道要repeat多少次*/
}
```
![row-column5.png](~@assets/image/displayGrid/row-column5.png)
#### 5. `fr` 关键字
为了方便表示比例关系，网格布局提供了 `fr` 关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 `1fr` 和 `2fr`，就表示后者是前者的两倍。
```css
#container {
  grid-template-columns: 20px  1fr 2fr;
}
```
3的宽度为2的两倍
![row-column6.png](~@assets/image/displayGrid/row-column6.png)
#### 6. `minmax()` 函数
产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。  
`fr` 不能作为最小值
#### 7. auto 关键字
```css
#container {
  grid-template-columns: 100px auto 100px;
}
```
此时2、5、8自动撑满一行
![row-column7.png](~@assets/image/displayGrid/row-column7.png)
此时2宽度不够，但是不影响5、8
![row-column8.png](~@assets/image/displayGrid/row-column8.png)
此时2、5、8都是200px,已经超出container,但是container overflow:visible
![row-column9.png](~@assets/image/displayGrid/row-column9.png)
#### 8. 网格线的名称
可以使用方括号，指定每一根网格线的名字，方便以后的引用。
```css
#container {
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  /*允许同一根线有多个名字，比如[fifth-line row-5]*/
}
```
