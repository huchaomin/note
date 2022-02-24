---
date: '1645091767127'
title: es6 let命令
description: es6 let命令的使用
tags: [es6]
---
### let命令
#### 基本用法
用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
```javascript
for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }) // 0 1 2 3 4 5 6 ...
}
console.log(i) // ReferenceError: i is not defined
```
```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }) // 10 10 10 ...
}
console.log(i) // 10
```   
#### 不存在声明提前
let和const会先查找所有的声明，但不提前
```javascript
// var 的情况
console.log(foo) // 输出undefined
var foo = 2

// let 的情况
console.log(bar) // 报错ReferenceError
let bar = 2
```
#### 暂时性死区（temporal dead zone，简称 TDZ）
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。  
ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
```javascript
var tmp = 123
if (true) {
  tmp = 'abc' // ReferenceError
  let tmp
}
```
```javascript
if (true) {
  // TDZ开始
  tmp = 'abc' // ReferenceError
  console.log(tmp) // ReferenceError

  let tmp // TDZ结束
  console.log(tmp) // undefined

  tmp = 123
  console.log(tmp) // 123
}
```
所以typeof不再是一个百分之百安全的操作。
```javascript
typeof x // ReferenceError
let x

typeof abcd // undefined
```
有些“死区”比较隐蔽，不太容易发现。
```javascript
function bar(x = y, y = 2) {
  return [x, y]
}
bar() // y ReferenceError

function bar(x = 2, y = x) {
  return [x, y]
}
bar() // [2, 2]

var x = x // 不报错
let x = x // ReferenceError: x is not defined
```
这个不属于“死区”
```javascript
function foo() {
  return a
}
let a
foo()
```
#### 不允许重复声明
```javascript
// 报错
function func() {
  let a = 10
  var a = 1
}

// 报错
function func() {
  let a = 10
  let a = 1
}

function func(arg) {
  let arg // 报错
}

function func(arg) {
  {
    let arg // 不报错
  }
}
```
