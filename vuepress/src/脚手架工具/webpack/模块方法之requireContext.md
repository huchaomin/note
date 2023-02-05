---
date: '1641205883095'
title: webpack require.context 
description: webpack require.context 使用方法详解
tags: [webpack]
---

### 语法
```javascript
const context = require.context(
  (directory: String),
  (includeSubdirs: Boolean) /* 可选的，默认值是 true */,
  (filter: RegExp) /* 可选的，默认值是 /^\.\/.*$/，所有文件 */,
  (mode: String)  /* 可选的， 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，默认值是 'sync' */
)
```
如果 mode 设置为 lazy，基础模块将以异步方式加载
```javascript
var context = require.context('locales', true, /\.json$/, 'lazy')
context('localeA').then((locale) => {
  // do something with locale
})
```
创建出一个 context，其中文件来自 template 目录，不搜寻子目录，request 以 `.js` 结尾
```javascript
const requireContext = require.context('./template', false, /\.js$/)
// 创建出一个 context，其中文件来自 template 目录，不搜寻子目录，request 以 `.js` 结尾。
```

### require.context 返回值
```javascript
console.log(requireContext)
// ƒ webpackContext(req) {
//   var id = webpackContextResolve(req);
//   return __webpack_require__(id);
// }
```

### requireContext.resolve
返回 request 被解析后得到的模块 id
```javascript
console.log(requireContext.resolve)
// ƒ webpackContextResolve(req) {
//   if(!__webpack_require__.o(map, req)) {
//     var e = new Error("Cannot find module '" + req + "'");
//     e.code = 'MODULE_NOT_FOUND';
//     throw e;
//   }
//   return map[req];
// }
```

### requireContext.keys
由所有可能被此 context module 处理的模块 id
```javascript
console.log(requireContext.keys)
// ƒ webpackContextKeys() {
//   return Object.keys(map);
// }
```
加载这个上下文的所有文件
```javascript
function importAll (r) {
  r.keys().forEach(r)
}
importAll(requireContext)
```

### requireContext.id
context module 的模块 id
```javascript
console.log(requireContext.id)
// ./src/template sync \.js$
```
