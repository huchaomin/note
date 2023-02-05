---
date: '1644672212203'
title: css3 box-shadow
description: css3 box-shadow 基本用法
tags: [css3]
---
### css3 box-shadow 基本用法
#### 兼容性
IE9+、Firefox 4、Chrome、Opera 以及 Safari 5.1.1
#### 语法
```css
box-shadow: h-shadow v-shadow blur spread color inset;
```
::: table
值        | 描述
h-shadow | 必需。水平阴影的位置。允许负值
v-shadow | 必需。垂直阴影的位置。允许负值
blur     | 可选。模糊距离
spread   | 可选。阴影的尺寸
color    | 可选。阴影的颜色
inset    | 可选。将外部阴影 (outset) 改为内部阴影
:::
#### 例
```css
div{
  width:200px;
  height:200px;
  margin:100px;
  border:20px solid rgba(0,255,0,.5);
  padding:20px;
}
```
####  box-shadow: 0 0 20px 20px red;
![box-shadow01.png](~@assets/image/box-shadow01.png)
####  box-shadow: 0 0 0 20px red;
![box-shadow02.png](~@assets/image/box-shadow02.png)
####  box-shadow: 0 0 20px 0 red;
![box-shadow03.png](~@assets/image/box-shadow03.png)
#### box-shadow: 0 0 20px 20px red inset;
![box-shadow04.png](~@assets/image/box-shadow04.png)
