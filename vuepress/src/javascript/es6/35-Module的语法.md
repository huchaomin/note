---
date: '1645246975775'
title: es6 Module
description: es6 Module的语法
tags: [es6]
---
### Module的语法
ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入
#### 严格模式
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict"。
严格模式主要有以下限制：
 - 变量必须声明后再使用
 - 函数的参数不能有同名属性，否则报错
 - 不能使用with语句
 - 不能对只读属性赋值，否则报错
 - 不能使用前缀 0 表示八进制数，否则报错
 - 不能删除不可删除的属性，否则报错
 - 不能删除变量delete prop，会报错，只能删除属性delete  - global[prop]
 - eval不会在它的外层作用域引入变量
 - eval和arguments不能被重新赋值
 - arguments不会自动反映函数参数的变化
 - 不能使用arguments.callee
 - 不能使用arguments.caller
 - 禁止this指向全局对象
 - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
 - 增加了保留字（比如protected、static和interface）
#### export 命令
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量
```javascript
// export输出的变量就是本来的名字，但是可以使用as关键字重命名
function v1() { ... }
function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}
//v2可以用不同的名字输出两次。
```
写法
```javascript
// 报错
export 1
// 报错
var m = 1
export m

// 写法一
export var m = 1
// 写法二
var m = 1
export {m}
// 写法三
var n = 1
export {n as m}
```
```javascript
// 报错
function f() {}
export f

// 正确
export function f() {}
// 正确
function f() {}
export {f}
```
export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
```javascript
export var foo = 'bar'
setTimeout(() => foo = 'baz', 500)
//500 毫秒之后变成baz
```
export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
```javascript
function foo() {
  export default 'bar' // SyntaxError
}
foo()
```
#### import 命令
as
```javascript
import { lastName as surname } from './profile.js'
```
import命令输入的变量都是只读的
```javascript
import {a} from './xxx.js'
a = {} // Syntax Error : 'a' is read-only
```
如果a是一个对象，改写a的属性是允许的
```javascript
import {a} from './xxx.js'
a.foo = 'hello' // 合法操作(但是不建议)
```
import命令具有提升效果，会提升到整个模块的头部，首先执行
```javascript
foo()
import { foo } from 'my_module'
```
由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
```javascript
// 报错
import { 'f' + 'oo' } from 'my_module'
// 报错
let module = 'my_module'
import { foo } from module
// 报错
if (x === 1) {
  import { foo } from 'module1'
} else {
  import { foo } from 'module2'
}
```
import语句会执行所加载的模块，因此可以有下面的写法。
```javascript
import 'lodash'
```
多次重复执行同一句import语句，那么只会执行一次，而不会执行多次
```javascript
import 'lodash'
import 'lodash'
//加载了两次lodash，但是只会执行一次
```
#### 模块的整体加载 
```javascript
// circle.js
export function area(radius) {
  return Math.PI * radius * radius
}
export function circumference(radius) {
  return 2 * Math.PI * radius
}
```
```javascript
// main.js
import { area, circumference } from './circle'
console.log('圆面积：' + area(4))
console.log('圆周长：' + circumference(14))
```
或者
```javascript
import * as circle from './circle'
console.log('圆面积：' + circle.area(4))
console.log('圆周长：' + circle.circumference(14))
```
#### export default 命令
用于指定模块的默认输出
```javascript
// 第一组
export default function crc32() { // 输出
  // ...
}
import crc32 from 'crc32' // 输入
// 第二组
export function crc32() { // 输出
  // ...
}
import {crc32} from 'crc32' // 输入
```
export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
```javascript
// modules.js
function add(x, y) {
  return x * y
}
export {add as default}
// 等同于
// export default add

// app.js
import { default as foo } from 'modules'
// 等同于
// import foo from 'modules'
```
```javascript
//lodash.js
export default function (obj) {
  // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach }

//main.js
import _, { each, forEach } from 'lodash'
```
#### export 与 import 的复合写法
```javascript
export { foo, bar } from 'my_module'
// 可以简单理解为
import { foo, bar } from 'my_module'
export { foo, bar }
//foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。
```


