---
date: '1645249628452'
title: es6 Module的加载实现
description: es6 Module的加载实现
tags: [es6]
---
### Module的加载实现
#### 加载规则
浏览器加载 ES6 模块，也使用script标签，但是要加入type="module"属性。
```html
<script type="module" src="./foo.js"></script>
```
等同于打开了defer属性(多个也是一样，dom加载完毕，按顺序执行)
```html
<script type="module" src="./foo.js" defer></script>
```
async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染（不按顺序）
```html
<script type="module" src="./foo.js" async></script>
```
也允许内嵌在网页中
```html
<script type="module">
  import utils from "./utils.js"
  // other code
</script>
```
外部的模块脚本
```javascript
import utils from 'https://example.com/js/utils.js'
const x = 1
console.log(x === window.x) //false
console.log(this === undefined) // true
```
注意点
 - 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
 - 模块脚本自动采用严格模式，不管有没有声明use strict。
 - 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
 - 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
 - 同一个模块如果加载多次，将只执行一次。
```javascript
//侦测当前代码是否在 ES6 模块之中。
const isNotModuleScript = this !== undefined
```
#### ES6 模块与 CommonJS 模块的差异
两个重大差异
 - CommonJS 模块输出的是一个值的浅拷贝，ES6 模块输出的是值的引用
 - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

第二个差异是因为 CommonJS加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

ES6 export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
```javascript
// mod.js
function C() {
  this.sum = 0
  this.add = function () {
    this.sum += 1
  }
  this.show = function () {
    console.log(this.sum)
  }
}
export let c = new C()
```
```javascript
// x.js
import {c} from './mod'
c.add()

// y.js
import {c} from './mod'
c.show()

// main.js
import './x'
import './y'
```
```shell
$ babel-node main.js
1
```
x.js和y.js加载的都是C的同一个实例。
