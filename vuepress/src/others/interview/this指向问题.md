---
date: '1644744904044'
title: js this 指向问题
description: js this 指向问题说明
tags: [interview]
---
### this 指向问题
#### 前言
每个函数在调用时，都会去获取2个值： arguments和this

匿名函数在获取这2个值时，只会搜索自己执行环境中的，永远不会直接访问外部函数或执行环境中的这2个变量
#### 结论
this最终指向的是那个调用它的对象
```javascript
var a = 'hello'

function foo () {
  console.log(this.a)
}

foo() // hello (可以看做window.foo())
```
```javascript
function foo () {
  console.log(this.a)  //谁调用了我，我就指向谁
}

var obj = {
  a: 'hello',
  foo: foo,
}
obj.foo() // hello
```
```javascript
function foo () {
  console.log(this.a)  //谁调用了我，我就指向谁
}

var obj2 = {
  a: 'hello',
  foo: foo,
}
var obj1 = {
  a: 'world',
  obj2: obj2,
}
obj1.obj2.foo() // hello
```
```javascript
function foo () {
  console.log(this.a)
}

var obj = {
  a: 'hello',
  foo: foo,
}
var bar = obj.foo // 函数引用传递
var a = 'Global'
bar() // "Global"
```
#### 显示绑定
通过bind()，apply()，call()函数可以显示的绑定this作用域，它接收的第一个参数即是上下文对象并将其赋给this
#### 默认绑定全局变量window
```javascript
// 接上
var a = 'hello window'
foo.call(null) // hello window
```
#### new新对象绑定(指向new出来的对象实例)
```javascript
function foo(a) {
  this.a = a
}
var bar = new foo('hello')
console.log(bar.a) // hello
```
#### this 在匿名函数中
匿名函数(非箭头函数)的执行环境具有全局性，this通常指向window
```javascript
var flag = 'window'
var object = {
  flag: 'local',
  sayFlag: function () {
    //返回一个匿名函数
    return function () {
      console.log(this.flag)
    }
  },
}
object.sayFlag()() // window （非严格模式下）
``` 
#### this在es6 Class中的指向
```javascript
class Printer {
  printName (name = 'there') {
    this.print(`Hello ${name}`)
  }

  print (text) {
    console.log(text)
  }
}

const printer = new Printer()

const { printName } = printer
printName() // 报错

printer.printName() // Hello there
```
