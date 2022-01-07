---
date: '1641464644952'
title: umd 模块打包wrapper
description: 将非模块化的包，包装成umd
tags: [umd]
---
### 定义
UMD (Universal Module Definition), 希望提供一个前后端跨平台的解决方案

### 写法
```javascript
((root, factory) => {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else {
    root['libraryName'] = factory()
  }
})(typeof self !== undefined ? self : this, (() => {
    return // entry return
  }),
)
```

