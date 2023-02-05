---
date: '1641210646249'
title: preload prefetch
description: 浏览器预加载preload prefetch祥解
tags: [html]
---

### preload (提前加载)
```html
<link rel="preload" as="script" href="test.js" onload="handleOnload()" onerror="handlepreloadError()">
<link rel="preload" as="style" href="test.css" onload="this.rel=stylesheet"> // css加载后立即生效
```
 - 需要使用as属性指定特定的资源类型以便浏览器为其分配一定的优先级，并能够正确加载资源
 - 请求在还没到解析页面的时候就已经开始预加载资源了
 - 确定该资源即将要被使用
 - 获取后被缓存，等待被使用。所以顺序是使用者的循序，不是preload请求时的顺序
 - 不会造成二次下载，使用者会等待，一旦页面关闭了，它也就会立即停止 preload 获取资源
 - preload 字体不带 crossorigin 也将会二次获取
 - IE（包括11）不支持

#### as 属性
 - as属性用于规定资源的类型，并根据资源类型设置Accep请求头，以便能够使用正常的策略去请求对应的资源
 - as的值可以取style、script、image、font、fetch、document、audio、video等；如果as属性被省略，那么该请求将会当做异步请求处理；

#### 检测 <link rel=”preload”> 是否被支持
```javascript
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
- 会存储在net-stack cache至少5分钟
- 如果在使用者使用之前加载完毕，不会造成二次下载（prefetch cache）
- 如果在使用者使用之前没有加载完毕，会造成二次下载，使用者不会等待，即使页面关闭，prefetch 发起的请求仍会进行不会中断
- 支持IE11

> 在首屏渲染优化尤其重要  
> 两者都不会在下载资源时执行，待真正使用到才会执行文件

::: tip 预解析
WebKit 和 Firefox 都进行了这项优化。  
在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。  
通过这种方式，资源可以在并行连接上加载，从而提高总体速度。  
请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用
:::

