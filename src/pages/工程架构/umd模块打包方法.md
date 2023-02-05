---
title: umd 模块打包wrapper
desc: 将非模块化的包，包装成umd
---
## 定义

UMD (Universal Module Definition), 希望提供一个前后端跨平台的解决方案

## 写法

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
