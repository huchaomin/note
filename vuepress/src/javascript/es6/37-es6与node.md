---
date: '1645254513558'
title: es6与node
description: es6与node的联系与区别
tags: [es6]
---
### es6与node
#### node加载es6模块
Node 对 ES6 模块的处理比较麻烦，因为它有自己的 CommonJS 模块格式，与 ES6 模块格式是不兼容的。
目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案。
#### 努力使es6应用在浏览器端和nodejs里面
ES6 模块应该是通用的，同一个模块不用修改，就可以用在浏览器环境和服务器环境。  
为了达到这个目标，Node 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量。
1. 首先，就是this关键字。

ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。

2. 其次，以下这些**顶层变量**在 ES6 模块之中都是不存在的。

 - arguments
 - require
 - module
 - exports
 - __filename
 - __dirname
#### ES6 模块加载 CommonJS 模块
CommonJS 模块的输出都定义在module.exports这个属性上面。Node 的import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default xxx。
```javascript
// a.js
module.exports = {
  foo: 'hello',
  bar: 'world'
}
// 等同于
export default {
  foo: 'hello',
  bar: 'world'
}
```
#### CommonJS 模块加载 ES6 模块
CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。ES6 模块的所有输出接口，会成为输入对象的属性。
```javascript
// es.mjs
let foo = { bar: 'my-default' }
export default foo

// cjs.js
const es_namespace = await import('./es.mjs')
// es_namespace = {
//   get default() {
//     ...
//   }
// }
console.log(es_namespace.default)
// { bar:'my-default' }
```
