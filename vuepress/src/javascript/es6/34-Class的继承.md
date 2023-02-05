---
date: '1645243804952'
title: es6 Class的继承
description: es6 Class的继承
tags: [es6]
---
### Class的继承
#### 可以通过extends关键字实现继承
```javascript
class Point {}
class ColorPoint extends Point {}
// 由于没有部署任何代码，所以这两个类完全一样，等于复制了一个Point类。
```
#### super() 函数
```javascript
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }

  toString() {
    return this.color + ' ' + super.toString() // 调用父类的toString()
  }
}
// 注意一个是构造函数，一个是父类原型
```
子类必须在constructor方法中调用super方法，否则新建实例时会报错。
```javascript
class Point { /* ... */ }
class ColorPoint extends Point {
  constructor() {}
}
let cp = new ColorPoint() // ReferenceError
```
所以
```javascript
class ColorPoint extends Point {
}
// 等同于
class ColorPoint extends Point {
  constructor(...args) {        //默认被添加
    super(...args)
  }
}
```
在子类的构造函数中，只有调用super之后，才可以使用this关键字
```javascript
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color // ReferenceError
    super(x, y)
    this.color = color // 正确
  }
}
```
```javascript
class A {
  constructor() {
    console.log(new.target.name)
  }
}
class B extends A {
  constructor() {
    super()        //相当于A.prototype.constructor.call(this)
  }
}
new A() // A
new B() // B
```
只能用在子类的构造函数之中，用在其他地方就会报错
```javascript
class A {}

class B extends A {
  m() {
    super() // 报错
  }
}
```
super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类  
由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
```javascript
class A {
  constructor() {
    this.p = 2     // 父类实例的p
  }
}
class B extends A {
  get m() {
    return super.p     // 父类原型对象上面的p
  }
}
let b = new B()
b.m // undefined
```
由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
```javascript
class A {
  constructor() {
    this.x = 1
  }
}
class B extends A {
  constructor() {
    super()
    this.x = 2
    super.x = 3
    console.log(super.x) // undefined
    console.log(this.x) // 3
  }
}
let b = new B()
```
如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。
```javascript
class Parent {
  static myMethod(msg) {
    console.log('static', msg)
  }
  myMethod(msg) {
    console.log('instance', msg)
  }
}
class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg)
  }
  myMethod(msg) {
    super.myMethod(msg)
  }
}
Child.myMethod(1) // static 1
var child = new Child()
child.myMethod(2) // instance 2
// super在静态方法之中指向父类，在普通方法之中指向父类的原型对象
```
在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类
```javascript
class A {
  constructor() {
    this.x = 1
  }
  static print() {
    console.log(this.x)
  }
}
class B extends A {
  constructor() {
    super()
    this.x = 2
  }
  static m() {
    super.print() // 此时this指B
  }
}
B.x = 3
B.m() // 3
```
#### 类的 prototype 属性和__proto__属性
```javascript
class A {}
class B extends A {}
B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```
```javascript
class A {}
A.__proto__ === Function.prototype // true
A.prototype.__proto__ === Object.prototype // true
// 这种情况下，A作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承Function.prototype。但是，A调用后返回一个空对象（即Object实例），所以A.prototype.__proto__指向构造函数（Object）的prototype属性。
```
#### 原生构造函数的继承
原生构造函数是指语言内置的构造函数，通常用来生成数据结构。  
ECMAScript 的原生构造函数大致有下面这些：
 - Boolean()
 - Number()
 - String()
 - Array()
 - Date()
 - Function()
 - RegExp()
 - Error()
 - Object()
以前这些原生构造函数是无法继承的，比如，不能自己定义一个Array的子类。
```javascript
function MyArray() {
  Array.apply(this, arguments)
}
MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
})
```
上面代码定义了一个继承 Array 的MyArray类。但是，这个类的行为与Array完全不一致。
```javascript
var colors = new MyArray()
colors[0] = "red"
colors.length  // 0

colors.length = 0
colors[0]  // "red"
```
原因：原生构造函数会忽略apply方法传入的this，也就是说，原生构造函数的this无法绑定，导致拿不到内部属性。  
**而现在**
```javascript
class MyArray extends Array {
  constructor(...args) {
    super(...args)
  }
}

var arr = new MyArray()
arr[0] = 12
arr.length // 1

arr.length = 0
arr[0] // undefine
```
上面代码定义了一个MyArray类，继承了Array构造函数，因此就可以从MyArray生成数组的实例。这意味着，ES6 可以自定义原生数据结构（比如Array、String等）的子类，这是 ES5 无法做到的

有一个行为差异
```javascript
class NewObj extends Object{
  constructor(){
    super(...arguments)
  }
}
var o = new NewObj({attr: true})
o.attr === true  // false
//一旦发现Object方法不是通过new Object()这种形式调用，ES6 规定Object构造函数会忽略参数。

var o = new Object({attr: true})
o.attr === true  // true
```
