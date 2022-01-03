---
date: '1641171723382'
title: webpack 打包esmodule
description: webpack 打包esmodule文件分析
tags: [webpack]
---

### 准备
```javascript
// index.js
import bar from './bar'
function foo () {
  return bar()
}
```
```javascript
// bar.js
export default function bar () {
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
  'use strict'
  var __webpack_modules__ = ({
    './src/bar.js':
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__)
        __webpack_require__.d(__webpack_exports__, {
          'default': () => (/* binding */ bar),
        })

        function bar () {
          return 1
        }
      }),
  })
  // The module cache
  var __webpack_module_cache__ = {}

  // The require function
  function __webpack_require__ (moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    }
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    // Return the exports of the module
    return module.exports
  }

  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
        }
      }
    }
  })();
  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();
  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
      }
      Object.defineProperty(exports, '__esModule', { value: true })
    }
  })()
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__)
    /* harmony import */
    var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar */ './src/bar.js')

    function foo () {
      return (0, _bar__WEBPACK_IMPORTED_MODULE_0__['default'])()
    }
  })()
})()
```
