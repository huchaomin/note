---
date: '1641474021519'
title: html drag api
description: html drag api知识点
tags: [html]
---

### 知识点
1. `DataTransfer` 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。
2. `draggable` 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：
    ```html
    <div title="拖拽我" draggable="true">列表1</div>
    ```
3. `ondragstart` 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
4. `ondragenter` 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
5. `ondragover` 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
6. `ondrop` 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
7. `ondragend` 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上
8. `Event.preventDefault()` 方法：阻止默认的些事件方法等执行。
   在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。（默认情况下是无法将数据、元素放到其他元素中的）
9. `Event.effectAllowed` 属性：就是拖拽的效果。（我没试出效果）

### 浏览器默认选择到的dom都可以拖拽，我们可以阻止
```html
<body ondragstart="return false"></body>
// 然后需要拖拽的元素上面
onDragStart (e) {
	e.stopPropagation(); // 全局阻止了dragstart事件，这里不能冒泡到全局
}
```

### 美化插件
[draggable-polyfill](https://www.npmjs.com/package/draggable-polyfill)
