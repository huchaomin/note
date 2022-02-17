---
date: '1644894784619'
title: Object 静态方法之get
description: Object 静态方法 get 操作
tags: [Object]
---
### Object 静态方法 get 操作
#### Object.getPrototypeOf()
返回指定对象的原型
```javascript
var proto = {}
var obj = Object.create(proto)
Object.getPrototypeOf(obj) === proto // true

var reg = /a/
Object.getPrototypeOf(reg) === RegExp.prototype // true

Object.getPrototypeOf( Object.prototype ) === null // true
Object.getPrototypeOf( Object ) === Function.prototype // true
```
#### Object.getOwnPropertyDescriptor()
返回指定对象上一个**自有属性**对应的属性描述符。  
```javascript
var o = { bar: 42 }
var d = Object.getOwnPropertyDescriptor(o, "bar")
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }
```
#### Object.getOwnPropertyDescriptors()
获取一个对象的所有自身属性的描述符。
```javascript
var o = { bar: 42 ,baz:43}
// {
// bar ： {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// },
// baz ： {
//   configurable: true,
//   enumerable: true,
//   value: 43,
//   writable: true
// }
// }
```
#### Object.getOwnPropertyNames()
返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
```javascript
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo },
    enumerable: false
  }
})
my_obj.foo = 1
Object.getOwnPropertyNames(my_obj)
//["getFoo", "foo"]
```
#### Object.getOwnPropertySymbols()
返回一个给定对象自身的所有 Symbol 属性的数组
```javascript
var obj = {}
var a = Symbol("a")
var b = Symbol.for("b")

obj[a] = "localSymbol"
obj[b] = "globalSymbol"

var objectSymbols = Object.getOwnPropertySymbols(obj)

console.log(objectSymbols.length) // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```
