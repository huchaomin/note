---
date: '1641210646249'
title: preload prefetch
description: 浏览器预加载preload prefetch祥解
tags: [preload prefetch]
---

### preload (提前加载)
- 请求在还没到解析页面的时候就已经开始预加载资源了（放在头部）
- 确定该资源即将要被使用
- 获取后被缓存，等待被使用。所以顺序是使用者的循序，不是preload请求时的顺序
- 不会造成二次下载，使用者会等待，一旦页面关闭了，它也就会立即停止 preload 获取资源
- preload 字体不带 crossorigin 也将会二次获取
- IE（包括11）不支持
```javascript
// 检测 <link rel=”preload”> 是否被支持
const preloadSupported = function () {
  var link = document.createElement('link')
  var relList = link.relList
  if (!relList || !relList.supports) return false
  return relList.supports('preload')
}
```
### prefetch （预判加载）
- 告诉浏览器未来可能会使用到的某个资源，浏览器就会在闲时去加载对应的资源（不能滥用）
- 获取后被缓存，等待被使用。所以顺序是使用者的循序，不是prefetch请求时的顺序
- 如果在使用者使用之前加载完毕，不会造成二次下载（prefetch cache）
- 如果在使用者使用之前没有加载完毕，会造成二次下载，使用者不会等待，即使页面关闭，prefetch 发起的请求仍会进行不会中断
- 支持IE11

> 在首屏渲染优化尤其重要  
> 两者都不会只下载资源并不执行，待真正使用到才会执行文件

::: tip 预解析
WebKit 和 Firefox 都进行了这项优化。  
在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。  
通过这种方式，资源可以在并行连接上加载，从而提高总体速度。  
请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用
:::

