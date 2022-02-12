---
date: '1644650465254'
title: css3 background 相关
description: css3 与 background 相关的特性及其写法
tags: [css3]
---
### background-clip(绘制的区域)
#### 兼容性
Internet Explorer 11, Firefox 15, Opera 15, Chrome16 以及 Safari 6
#### 值
1. border-box(默认)  
绘制border、padding及内容区域 
2. padding-box  
绘制padding及内容区域 
3. content-box  
绘制内容区域  

### background-origin(绘制的原点)
#### 兼容性 
Internet Explorer 9, Firefox 4, Opera 10.5, Chrome4 以及 Safari 3
#### 值
1. border-box  
从border的左上角开始绘制
2. padding-box(默认)  
从padding的左上角开始绘制
3. content-box  
从内容区域的左上角开始绘制
## background-size
#### 兼容性 
Internet Explorer 9, Firefox 4, Opera 10.5, Chrome4 以及 Safari 4.1
#### 语法
`background-size: length|percentage|cover|contain`
::: table
值          | 描述
length     | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"atuo(自动)"
percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)"
cover      | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
contain    | 	此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小
:::
#### 例
1. background-size: 50px 50px;  
![background-size_50px-50px.gif](~@assets/image/background-size_50px-50px.gif)
2. background-size: 50% 50%;  
![background-size_50%-50%.gif](~@assets/image/background-size_50percentage-50percentage.gif)
3. background-size: cover;  
![background-size_cover.gif](~@assets/image/background-size_cover.gif)
4. background-size: contain;  
![background-size_contain.gif](~@assets/image/background-size_contain.gif)

### 多背景
#### 兼容性未知 
#### 例
```css
div{
  background: url(./image/border.png) 0 0 no-repeat,
              url(./image/border_image_button.png) 85px 0 no-repeat;
  background-size: 25px 25px;
}
```
![multiple_background.gif](~@assets/image/multiple_background.gif)
