---
title: requestAnimationFrame 详解
examples: QDrawer
---

## 为什么要使用

- css已经能够实现非常多的动画特效，但是仍然存在css无法完成的动画任务，比如页面滚动
- `setInterval` 虽然能解决上面的问题，但是js的单线程机制，无法保证动画的流畅性

  ```js
  let startTime = new Date().getTime();

  setTimeout(()=>{
    let endTime = new Date().getTime();
    console.log(endTime - startTime); // 远远大于50
  },50)

  for(let i=0;i<20000;i++) {
    console.log(1);
  }
  ```

::: tip
由css实现的动画的优势就是浏览器知道动画的开始及每一帧的循环间隔，能够在恰当的时间刷新UI，给用户一种流畅的体验
:::

## 作用

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
回调函数一般会重新调用 `requestAnimationFrame` 方法，这样每次重绘之前都会有一个回调函数被执行，这样就形成了流畅的动画。

## 语法

```js
const id = requestAnimationFrame(callback);
```

### callback

该回调函数会被传入一个 `DOMHighResTimeStamp` 参数，该参数与 `performance.now()` 的返回值相同，它表示当前时间，函数执行时会自动传入。

::: tip
在同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。
该时间戳是一个十进制数，单位为毫秒，最小精度为 1ms
:::

### 返回值 id

一个长整数，请求 ID，是回调列表中唯一的标识符。是回调函数列表中唯一的标识符，可以传递给 `window.cancelAnimationFrame()` 以取消回调函数。

<doc-example title="hahaha" file="Basic" />
