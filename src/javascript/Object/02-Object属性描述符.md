---
date: '1644048747795'
title: 对象的属性描述符
description: 对象的属性描述符：configurable，Enumerable，Writable，Value，get，set
tags: [Object]
---
### 对象的属性描述符
目前对象的属性描述符有两种形式：数据描述符和存取描述符
#### 数据描述符(数据属性描述符)
是一个具有值的属性，该值可能是可写的，也可能不是可写的。
#### 存取描述符(访问器属性描述符)
是由getter-setter函数对描述的属性。描述符必须是这两种形式之一；不能同时是两者。
#### 数据描述符和存取描述符均具有
`configurable`
1. 表示能否通过delete删除属性从而重新定义属性
2. 能否修改属性的描述对象
3. 能否把属性由数据属性修改为访问器属性（getter/setter）
4. 非可逆操作
```javascript
let obj = {}
Object.defineProperty(obj, 'a', {
  configurable: true,
  enumerable: true,
  value: 'a',
})
obj.a = 'b'
console.log(obj)	// { a: 'a' }
delete(obj.a)
obj.a = 'b'
console.log(obj)	// { a: 'b' }
```
`enumerable`  
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
#### 数据描述符具有以下可选键值
`value`  
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
`writable`  
当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
#### 存取描述符具有以下可选键值
`get`  
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
默认为 undefined。

`set`  
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
默认为 undefined。

::: tip
设置了get或set方法的属性，会自动变成访问器属性，不再从value读取属性值。  
用Object.getOwnPropertyDescriptor方法也不再返回value和writable。
:::
### 即
::: table
/| configurable | enumerable | value | writable | get | set
数据描述符 | yes | yes | yes | yes | no | no
存取描述符 | yes | yes | no | no | yes | yes
:::
### 默认值
```javascript
obj.b = 'b'
Object.getOwnPropertyDescriptor(obj,'b')
// {value: 'b', writable: true, enumerable: true, configurable: true}
```
```javascript
Object.defineProperty(obj, 'b', { value: 'b' })
Object.getOwnPropertyDescriptor(obj,'b')
// {value: 'b', writable: false, enumerable: false, configurable: false}
```
### 例
定义一个自动存档的对象
```javascript
function Archiver () {
  var temperature = null
  var archive = []

  Object.defineProperty(this, 'temperature', {
    get: function () {
      console.log('get!')
      return temperature
    },
    set: function (value) {
      temperature = value
      archive.push({ val: temperature })
    },
  })

  this.getArchive = function () { return archive }
}

var arc = new Archiver()
arc.temperature // 'get!'
arc.temperature = 11
arc.temperature = 13
arc.getArchive() // [{ val: 11 }, { val: 13 }]
```
如果存储描述符的属性是被继承的，它的 get 和set 方法会在子对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享。
```javascript
function myclass() {}

var value
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value
  },
  set(x) {
    value = x
  }
})

var a = new myclass()
var b = new myclass()
a.x = 1
console.log(b.x) // 1

//解决（用this）
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x
  },
  set(x) {
    this.stored_x = x
  }
})
var a = new myclass()
var b = new myclass()
a.x = 1
console.log(b.x) // undefined
```
数据描述符值属性始终在对象自身上设置，而不是原型上。  
如果一个不可写的属性被继承，它仍然可以防止修改对象的属性。
```javascript
function myclass () {}

myclass.prototype.x = 1
Object.defineProperty(myclass.prototype, 'y', {
  writable: false,
  value: 1,
})

var a = new myclass()
a.x = 2
console.log(a.x) // 2
console.log(myclass.prototype.x) // 1
a.y = 2 // Ignored, throws in strict mode
console.log(a.y) // 1
console.log(myclass.prototype.y) // 1
```
