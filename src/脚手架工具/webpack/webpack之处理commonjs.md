---
date: '1641170766016'
title: webpack 打包commonjs
description: webpack 打包commonjs文件分析
tags: [webpack]
---

### 准备
```javascript
//index.js
'use strict';
const bar = require('./bar')
function foo() {
  return bar.bar()
}
```
```javascript
//bar.js
'use strict'
exports.bar = function () {
  return 1
}
```
webpack配置如下
```javascript
const path = require("path")
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'outs'),
    filename: 'index.js',
  },
  devtool: false
}
```

### 结果
```javascript
(() => { // webpackBootstrap
  "use strict"
  var __webpack_modules__ = ({
    "./bar.js": ((__unused_webpack_module, exports) => {
      exports.bar = function () {
        return 1
      }
    })
  })
  // The module cache
  var __webpack_module_cache__ = {}
  // The require function
  function __webpack_require__ (moduleId) {
    // Check if module is in cache
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    }
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    // Return the exports of the module
    return module.exports
  }
  (() => {
    //index.js
    const bar = __webpack_require__("./bar.js")
    function foo () {
      return bar.bar()
    }
  })()
})()
```
