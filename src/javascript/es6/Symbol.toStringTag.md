---
date: '1644049426691'
title: es6 Symbol
description: es6 Symbol toStringTag 的作用
tags: [es6]
---
### 参考链接
[segmentfault](https://segmentfault.com/a/1190000021043630)
[mozilla](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)

### 可以用来表示对象的自定义类型标签
```javascript
const a = {}
Object.prototype.toString.call(a) // '[object Object]'

Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' })
Object.prototype.toString.call(a) // '[object Module]'
```
