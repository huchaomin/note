import{r as o,o as a,c,f as d,g as n,aa as _}from"./vendor-90615676.js";const i=_("h2",{id:"1-\u51C6\u5907",class:"doc-heading"},"\u51C6\u5907",-1),p=_("p",null,"webpack\u914D\u7F6E\u5982\u4E0B",-1),u=_("h2",{id:"2-\u7ED3\u679C",class:"doc-heading"},"\u7ED3\u679C",-1),f={__name:"\u5904\u7406esmodule",setup(s){const t=[{id:"doc-title",title:"webpack \u6253\u5305esmodule"},{id:"1-\u51C6\u5907",title:"1. \u51C6\u5907"},{id:"2-\u7ED3\u679C",title:"2. \u7ED3\u679C"}];return(l,b)=>{const e=o("doc-code"),r=o("doc-page");return a(),c(r,{desc:"webpack \u6253\u5305esmodule\u6587\u4EF6\u5206\u6790",toc:t},{default:d(()=>[i,n(e,{code:`// index.js
import bar from './bar'
function foo () {
  return bar()
}
`,lang:"javascript"}),n(e,{code:`// bar.js
export default function bar () {
  return 1
}
`,lang:"javascript"}),p,n(e,{code:`const path = require("path")
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'outs'),
    filename: 'index.js',
  },
  devtool: false
}
`,lang:"javascript"}),u,n(e,{code:`(() => { // webpackBootstrap
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
`,lang:"javascript"})]),_:1})}}};export{f as default};
