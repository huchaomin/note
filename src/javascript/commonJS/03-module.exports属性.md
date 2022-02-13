---
date: '1644724481708'
title: commonJS之module.exports属性
description: commonJS module.exports属性的简单理解
tags: [commonJS]
---
### module.exports属性
#### 定义
表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。
```javascript
var EventEmitter = require('events').EventEmitter
module.exports = new EventEmitter()
//1秒后触发ready事件
setTimeout(function() {
  module.exports.emit('ready')
}, 1000)
```
```javascript
var a = require('./a')
a.on('ready', function() {
  console.log('module a is ready')
})
```
#### exports变量
Node为每个模块提供一个exports变量，指向module.exports
```javascript
var exports = module.exports
```
在对外输出模块接口时，可以向exports对象添加方法。
```javascript
exports.area = function (r) {
  return Math.PI * r * r
}
exports.circumference = function (r) {
  return 2 * Math.PI * r
}

//能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。
exports = function(x) {console.log(x)}
```
```javascript
exports.hello = function() {
  return 'hello'
}
module.exports = 'Hello world'
//hello函数是无法对外输出的，因为module.exports被重新赋值了。
```
