---
date: '1645096106418'
title: es6 const命令
description: es6 const命令的用法
tags: [es6]
---
### const(不变)命令
#### 作用
const声明一个只读的常量。一旦声明，常量的值就不能改变
```javascript
const PI = 3.1415
PI // 3.1415
PI = 3 // Uncaught TypeError: Assignment to constant variable.
```
const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
```javascript
const foo
// SyntaxError: Missing initializer in const declaration
```
**其他使用方法与let一致**
#### 本质
1. const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址的指针不得改动。
2. 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
3. 但对于复合类型的数据（主要是对象和数组），至于它指向的数据结构是不是可变的，就完全不能控制了。
```javascript
const foo = {}
// 为 foo 添加一个属性，可以成功
foo.prop = 123
foo.prop // 123
// 将 foo 指向另一个对象，就会报错
foo = {} // Assignment to constant variable.

const a = []
a.push('Hello') // 可执行
a.length = 0    // 可执行
a = ['Dave']    // Assignment to constant variable.
```
