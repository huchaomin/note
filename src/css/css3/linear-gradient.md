---
date: '1644672870758'
title: css3 linear-gradient
description: css3 linear-gradient 基本用法
tags: [css3]
---
### css3 linear-gradient 基本用法
#### 兼容性  
Internet Explorer 10, Firefox 16, Opera 15, Chrome26 以及 Safari 6  
#### 语法
```css
linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+)
```
默认方向to bottom(180deg)  
background-clip默认border-box
#### 例
```css
div{
  width:200px;
  height:200px;
  margin:20px;
  border:20px solid rgba(0,255,0,.5);
  padding:20px;
}
```
#### background: linear-gradient(blue, white);
![linear-gradient01.png](~@assets/image/linear-gradient01.png)
#### background-size: 25px 25px;
![linear-gradient02.png](~@assets/image/linear-gradient02.png)
#### background-clip: border-box;  
默认，和第一张图一样  
#### background-clip: content-box;
![linear-gradient03.png](~@assets/image/linear-gradient03.png)
#### background-clip: padding-box;
![linear-gradient04.png](~@assets/image/linear-gradient04.png)
#### background: linear-gradient(blue, white) no-repeat; background-size: 25px 25px;  
注意这里没有设置background-clip: padding-box;
![linear-gradient05.png](~@assets/image/linear-gradient05.png)
#### background: linear-gradient(45deg,blue,white 50%,red) no-repeat;
![linear-gradient06.png](~@assets/image/linear-gradient06.png)
