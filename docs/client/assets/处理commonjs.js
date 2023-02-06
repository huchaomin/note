import{r as t,o as _,c as d,f as r,g as n,ac as o}from"./vendor.js";const s=o("h2",{id:"1-\u51C6\u5907",class:"doc-heading"},"\u51C6\u5907",-1),u=o("p",null,"webpack\u914D\u7F6E\u5982\u4E0B",-1),i=o("h2",{id:"2-\u7ED3\u679C",class:"doc-heading"},"\u7ED3\u679C",-1),b={__name:"\u5904\u7406commonjs",setup(p){const c=[{id:"doc-title",title:"webpack \u6253\u5305commonjs"},{id:"1-\u51C6\u5907",title:"1. \u51C6\u5907"},{id:"2-\u7ED3\u679C",title:"2. \u7ED3\u679C"}];return(l,m)=>{const e=t("doc-code"),a=t("doc-page");return _(),d(a,{desc:"webpack \u6253\u5305commonjs\u6587\u4EF6\u5206\u6790",toc:c},{default:r(()=>[s,n(e,{code:`//index.js
'use strict';
const bar = require('./bar')
function foo() {
  return bar.bar()
}
`,lang:"javascript"}),n(e,{code:`//bar.js
'use strict'
exports.bar = function () {
  return 1
}
`,lang:"javascript"}),u,n(e,{code:`const path = require("path")
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'outs'),
    filename: 'index.js',
  },
  devtool: false
}
`,lang:"javascript"}),i,n(e,{code:`(() => { // webpackBootstrap
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
`,lang:"javascript"})]),_:1})}}};export{b as default};
