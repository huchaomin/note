---
date: '1644726775822'
title: AMD规范与CommonJS规范的兼容性
description: AMD规范与CommonJS规范的兼容性
tags: [commonJS]
---
### AMD规范与CommonJS规范的兼容性
#### 说明
1. CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作
2. AMD规范则是非同步加载模块，允许指定回调函数。
3. 由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。  
4. 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。
#### AMD规范使用define方法定义模块
```javascript
define(['package/lib'], function(lib){
  function foo(){
    lib.log('hello world!')
  }

  return {
    foo: foo
  }
})
```
AMD规范允许输出的模块兼容CommonJS规范，这时define方法需要写成下面这样：
```javascript
define(function (require, exports, module){
  var someModule = require("someModule")
  var anotherModule = require("anotherModule")
  someModule.doTehAwesome()
  anotherModule.doMoarAwesome()
  exports.asplode = function (){
    someModule.doTehAwesome()
    anotherModule.doMoarAwesome()
  }
})
```
