---
date: '1642503254960'
title: 监听元素的宽高
description: 使用iframe去监听一个元素宽高的变化
tags: [iframe]
---
### 利用onresize方法监听元素宽高的变化
```javascript
function observeResize (element, handler) {
  let frame = document.createElement('iframe')
  frame.style.cssText = 'position:absolute;top:-9999px;width:100%;height:100%;opacity:0;z-index: -99999'
  frame.onload = () => {
    frame.contentWindow.onresize = () => {
      handler(element)
    }
  }
  if (!['relative', 'absolute', 'fixed'].includes(window.getComputedStyle(element).position)) {
    element.style.position = 'relative'
  }
  element.appendChild(frame)
}
```
::: tip
有可能会改变元素的position属性  
页面添加iframe元素，如果监听的元素太多的话会影响性能
:::
