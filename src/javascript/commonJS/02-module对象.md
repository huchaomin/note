---
date: '1644724286994'
title: commonJS之module对象
description: commonJS的module对象的简单理解
tags: [commonJS]
---
### commonJS之module对象
#### Node内部提供一个Module构建函数。所有模块都是Module的实例。
```javascript
function Module(id, parent) {
  this.id = id
  this.exports = {}
  this.parent = parent
  // ...
```
#### 每个模块内部，都有一个module对象，代表当前模块。它有以下属性。
 - module.id 模块的识别符，通常是带有绝对路径的模块文件名。
 - module.filename 模块的文件名，带有绝对路径。
 - module.loaded 返回一个布尔值，表示模块是否已经完成加载。
 - module.parent 返回一个对象，表示调用该模块的模块。
 - module.children 返回一个数组，表示该模块要用到的其他模块。
 - module.exports 表示模块对外输出的值。
```javascript
// example.js
var jquery = require('jquery')
exports.$ = jquery
console.log(module)
```
```javascript
{ id: '.',
  exports: { '$': [Function] },
  parent: null,
  filename: '/path/to/example.js',
  loaded: false,
  children:
   [ { id: '/path/to/node_modules/jquery/dist/jquery.js',
       exports: [Function],
       parent: [Circular],
       filename: '/path/to/node_modules/jquery/dist/jquery.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ '/home/user/deleted/node_modules',
     '/home/user/node_modules',
     '/home/node_modules',
     '/node_modules' ]
}
```
