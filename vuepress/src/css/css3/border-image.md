---
date: '1644670376281'
title: css3 border-image
description: css3 border-image 基本用法
tags: [css3]
---
### css3 border-image 基本用法
#### 兼容性 
Internet Explorer 11, Firefox, Opera 15, Chrome 以及 Safari 6
#### 语法
::: table
值                   | 描述
border-image-source | 用在边框的图片的路径
border-image-slice  | 图片边框向内偏移
border-image-width  | 图片边框的宽度
border-image-outset | 边框图像区域超出边框的量
border-image-repeat | 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)
:::

::: alert
使用 border-image 时，其将会替换掉border-style 属性所设置的边框样式
::: 
#### 原理 
作原理就是**九宫格伸缩法**：把图片切割成九块，然后把他们应用到边和角。
#### 例
```css
div{
  width:200px;
  height:200px;
  margin:20px;
  padding:20px;
  border: 20px solid;
  background-color: #ddd;
  background-clip: padding-box;
}
```
我们使用的图片为  
![border_img_base.png](~@assets/image/border_img_base.png)
border.png(78*78px)
#### border-image-source: url(./img/border.png)
1. 是唯一必需的 
2. 属性值可以是URL，数据URI，CSS渐变形状，或者行内SVG

![border-image-source.png](~@assets/image/border-image-source.png)
#### border-image-width
此时默认为border的宽度**20px**，与上图一样  
若改为40px
![border-image-width.png](~@assets/image/border-image-width.png)
#### border-image-slice
1. 该属性最多接受4个不带单位的正数或者百分比，包括一个可选的fill关键字。属性的初始值为100%（平均分成9块）。 
2. 这串数值规定从源图片的上部，右部，下部，左部开始测量裁剪。如果缺少一个值，默认取对边的值-如缺少左部的值，同时右部的值为10px，左部的值会取10px。
3. 默认舍弃源图片的中心块。一旦使用了fill关键字，源图片的中心块将作为该元素的背景。  

![border-image-slice1.png](~@assets/image/border-image-slice1.png)
![border-image-slice2.png](~@assets/image/border-image-slice2.png)
![border-image-slice3.png](~@assets/image/border-image-slice3.png)
#### border-image-repeat
图像边框（不是四个角）的填充模式
1. round

![border-image-repeat-round.png](~@assets/image/border-image-repeat-round.png)
2. repeat

![border-image-repeat-repeat.png](~@assets/image/border-image-repeat-repeat.png)
3. stretch  
默认，与上面的26一样

4. space

![border-image-repeat-space.png](~@assets/image/border-image-repeat-space.png)
#### border-image-outset
默认为0
若设置为20，刚好包在margin外面
![border-image-outset.png](~@assets/image/border-image-outset.png)

