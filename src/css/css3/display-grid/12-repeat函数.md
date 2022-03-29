---
date: '1647925433021'
title: css3 display:grid
description: css3 repeat()函数基本用法
tags: [css3]
---
### repeat()函数基本用法
[CSS repeat()函数详细介绍](https://www.zhangxinxu.com/wordpress/2019/12/css-repeat/)
[mozilla](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeat)
::: alert
`CSS repeat()` 函数只能作用在 `grid-template-columns` 和 `grid-template-rows` 这两个CSS属性上
:::
#### 兼容性
[can-i-use-repeat()](https://caniuse.com/?search=repeat())
![row-column37.png](~@assets/image/displayGrid/row-column37.png)
ie 不兼容

#### repeat()函数可以同时多个
```css
#container {
  grid-template-columns: repeat(2, 1fr) repeat(2, 2fr) auto;
}
```
![row-column38.png](~@assets/image/displayGrid/row-column38.png)

#### repeat()函数支持对网格线命名
```css
#container {
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]) auto;
  /* 但是这就有三个成对的start和end,怎么区分呢？ */
}
```

#### 可以设置 `min-content/max-content` 关键字 
[理解CSS3 max/min-content及fit-content等width值](https://www.zhangxinxu.com/wordpress/2016/05/css3-width-max-contnet-min-content-fit-content/)
1. `min-content`: 最小内容尺寸
 - 中文的最小内容单位是一个汉字，有其他特殊符号的话，就是一个汉字加一个特殊符号的宽度
 - 英文的最小内容单位是单词，有其他特殊符号的话，就是一个单词加一个特殊符号的宽度
 - 最终宽度是所有这些最小内容单元最长的那个单元宽度
2. `max-content`: 最大内容宽度
可以理解为文本内容不换行时候的宽度
```html
<span>父元素上</span>
<div id="container">
  <div class="item item-1">你是</div>
  <div class="item item-2">2</div>
  <div class="item item-3">peter wang</div>
  <div class="item item-5">peter hu</div>
  <div class="item item-6">5</div>
  <div class="item item-7">是我</div>
  <div class="item item-8">哈，哈</div>
  <div class="item item-9">8</div>
  <div class="item item-9">9</div>
</div>
<span>父元素下</span>
```
```css
#container {
  grid-template-columns: repeat(2, min-content auto max-content) min-content;
}
```
![row-column39.png](~@assets/image/displayGrid/row-column39.png)

#### 可以设置 `minmax()` 函数
```css
#container {
  grid-template-columns: repeat(2, minmax(min-content, max-content) 40px) auto;
}
```
![grid-repeat-mixmax.gif](~@assets/image/displayGrid/grid-repeat-mixmax.gif)

#### 可以设置 `fit-content()` 函数
尺寸由内容决定，内容越多尺寸越大，但不超过限定的尺寸。  
##### 语法
```
fit-content( [ <length> | <percentage> ] )
```
可参考[张鑫旭css-repeat](https://www.zhangxinxu.com/wordpress/2019/12/css-repeat/)，但是浏览器兼容性有待考究

#### `auto-fill` 关键字
根据Grid布局中每一个子项的尺寸自动计算需要填充的数量。  
计算规则是，当前列表数量下的总尺寸不会超出Grid容器的最大正整数值。
```css
#container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```
上面的效果是把一行分成数量未知的多个列，每一列的宽度相等且最小宽度为100px。
item 数不足一行的话，用匿名 item 填充

当我们使用 `auto-fill` 自动填充的时候，`repeat()` 函数是不能和 `auto` 一起使用的，例如下面这种写法是无效的：
```css
#container {
  /* 无效 */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) auto;
}
```

但是可以和长度只和百分比值一起使用:
```css
#container {
  /* 无效 */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) 20%;
}
```

#### `auto-fit` 关键字
无论Grid容器多宽，子项元素一定是尺寸一定是填满的；当Grid容器尺寸没有富余的时候，表现和 `auto-fill` 是一样的
