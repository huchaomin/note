---
date: '1644725152885'
title: commonJS之require命令
description: commonJS require命令的使用方法
tags: [commonJS]
---
### require命令
#### 作用
读入并执行一个JavaScript文件，然后返回该模块的exports属性
Node使用CommonJS模块规范，内置的require命令用于加载模块文件。
```javascript
// example.js
var invisible = function () {
  console.log("invisible")
}
exports.message = "hi"
exports.say = function () {
  console.log(message)
}
```
```javascript
var example = require('./example.js')
example
// {
//   message: "hi",
//   say: [Function]
// }
```
#### 加载规则
require命令用于加载文件，后缀名默认为.js。
```javascript
var foo = require('foo')
//  等同于
var foo = require('foo.js')
```
根据参数的不同格式，require命令去不同路径寻找模块文件。
1. 如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。
2. 如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。比如，require('./circle')将加载当前脚本同一目录的circle.js。
3. 如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。

> /home/user/projects/foo.js执行了require('bar.js')命令，Node会依次搜索以下文件。
/usr/local/lib/node/bar.js  (核心)  
/home/user/projects/node_modules/bar.js （当前目录node_modules）  
/home/user/node_modules/bar.js  （上级目录node_modules）  
/home/node_modules/bar.js   （上上级目录node_modules）  
/node_modules/bar.js    （上上上级目录node_modules）

4. 如果参数字符串不以“./“或”/“开头，而且是一个路径，比如require('example-module/path/to/file')，则将先找到example-module的位置，然后再以它为参数，找到后续路径。
5. 如果指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。.js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。
6. 如果想得到require命令加载的确切文件名，使用require.resolve()方法。
#### 目录的加载规则
通常，我们会把相关的文件会放在一个目录里面，便于组织。这时，最好为该目录设置一个入口文件，让require方法可以通过这个入口文件，加载整个目录。  
在目录中放置一个package.json文件，并且将入口文件写入main字段。
```json
// package.json
{ 
  "name" : "some-library",
  "main" : "./lib/some-library.js"
}
```
require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，然后加载main字段指定的入口文件。  
如果package.json文件没有main字段，或者根本就没有package.json文件，则会加载该目录下的index.js文件或index.node文件。
#### 模块的缓存
第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的module.exports属性。
```javascript
require('./example.js')
require('./example.js').message = "hello"
require('./example.js').message     //并没有重新获取example.js
// "hello"
```
如果想要多次执行某个模块，可以让该模块输出一个函数，然后每次require这个模块的时候，重新执行一下输出的函数。
#### 删除缓存
所有缓存的模块保存在require.cache之中
```javascript
// 删除指定模块的缓存
delete require.cache[moduleName]
// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key]
})
```
::: alert
缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，require命令还是会重新加载该模块。
:::
#### 环境变量NODE_PATH
Node执行一个脚本时，会先查看环境变量NODE_PATH  
它是一组以冒号分隔的绝对路径。在其他位置找不到指定模块时，Node会去这些路径查找。（上面不是说优先来这里找么?）  
可以将NODE_PATH添加到.bashrc。
```javascript
export NODE_PATH="/usr/local/lib/node"
```
如果遇到复杂的相对路径
```javascript
var myModule = require('../../../../lib/myModule')
```
一是将该文件加入node_modules目录  
二是修改NODE_PATH环境变量，package.json文件可以采用下面的写法。
```
{
  "name": "node_path",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "NODE_PATH=lib node index.js"
  },
  "author": "",
  "license": "ISC"
}
```
#### 模块的循环加载
如果发生模块的循环加载，即A加载B，B又加载A，则B将加载A的不完整版本。
```javascript
// a.js
exports.x = 'a1'
console.log('a.js ', require('./b.js').x)
exports.x = 'a2'

// b.js
exports.x = 'b1'
console.log('b.js ', require('./a.js').x)
exports.x = 'b2'
```
```shell
// main.js
console.log('main.js ', require('./a.js').x)
console.log('main.js ', require('./b.js').x)

$ node main.js
b.js  a1
a.js  b2
main.js  a2
main.js  b2
```
```shell
//修改main.js
console.log('main.js ', require('./a.js').x)
console.log('main.js ', require('./b.js').x)
console.log('main.js ', require('./a.js').x)
console.log('main.js ', require('./b.js').x)

$ node main.js
b.js  a1
a.js  b2
main.js  a2
main.js  b2
main.js  a2     //缓存中读取
main.js  b2     //缓存中读取
```
#### require.main
用来判断模块是直接执行，还是被调用执行
直接执行的时候（node module.js），require.main属性指向模块本身。
```javascript
require.main === module
// true
```
调用执行的时候（通过require加载该脚本执行），上面的表达式返回false。
