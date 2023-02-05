---
date: '1645242590649'
title: es6 Class 类
description: es6 Class 的基本用法
tags: [es6]
---
### Class 类
#### 类的数据类型就是函数，类本身就指向构造函数
ES5生成实例对象的传统方法是通过构造函数
```javascript
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')'
}
var p = new Point(1, 2)
```
ES6
```javascript
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }         //没有逗号
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}
var p = new Point(1, 2)
```
所以
```javascript
class Point {
  // ...
}
typeof Point // "function"
Point === Point.prototype.constructor // true
//类的数据类型就是函数，类本身就指向构造函数。

var p = new Point(1, 2)
p.constructor === Point.prototype.constructor // true
//实例的constructor属性，指向构造函数Point
```
为类的原型对象添加属性
```javascript
class Point {
  constructor(){
    // ...
  }
  toString(){}
  toValue(){}
}
// 或者
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
})
```
类的内部所有定义的方法，都是不可枚举的（non-enumerable）
```javascript
class Point {
  constructor(x, y) {
    // ...
  }
  toString() {
    // ...
  }
}
Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]

ES5不一样
var Point = function (x, y) {
  // ...
}
Point.prototype.toString = function() {
  // ...
}
Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```
#### constructor 方法 
没有显式定义，一个空的constructor方法会被默认添加
```javascript
class Point {}
// 等同于
class Point {
  constructor() {}
}
```
通过new命令生成对象实例时，自动调用该方法,返回实例对象（即this）,当然也可以返回另一个对象
```javascript
class Foo {
  constructor() {
    return Object.create(null)
  }
}
new Foo() instanceof Foo // false
```
#### 类必须使用new调用
#### 取值函数（getter）和存值函数（setter）
与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter'
  }
  set prop(value) {
    console.log('setter: '+value)
  }
}
let inst = new MyClass()
inst.prop = 123
// setter: 123
inst.prop
// 'getter'
```
存值函数和取值函数是设置在属性的 Descriptor 对象上的,与 ES5 完全一致。
```javascript
class CustomHTMLElement {
  constructor(element) {
    this.element = element
  }
  get html() {
    return this.element.innerHTML
  }
  set html(value) {
    this.element.innerHTML = value
  }
}
var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
)
"get" in descriptor  // true
"set" in descriptor  // true
```
#### Class 表达式
与函数一样，类也可以使用表达式的形式定义。
```javascript
const MyClass = class Me {
  getClassName() {
    return Me.name
  }
}
// Me只在 Class 的内部可用,在 Class 外部，这个类只能用MyClass引用

// 也可以简写
const MyClass = class { /* ... */ }
```
立即执行的 Class
```javascript
let person = new class {
  constructor (name) {
    this.name = name
  }

  sayName () {
    console.log(this.name)
  }
}('张三')
persion.sayName() // 张三
```
#### 注意
1. 严格模式
类和模块的内部，默认就是严格模式
2. 不存在变量提升
```javascript
new Foo() // ReferenceError
class Foo {}
```
3. this 的指向
类的方法内部如果含有this，它默认指向类的实例。  
但是，必须非常小心，一旦单独使用该方法，很可能报错。
```javascript
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }
  print(text) {
    console.log(text)
  }
}
const logger = new Logger()
const { printName } = logger
printName() // TypeError: Cannot read property 'print' of undefined(严格模式不能指向window)
```
#### 静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。  
如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```javascript
class Foo {
  static classMethod() {
    return 'hello'
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo()
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
如果静态方法包含this关键字，这个this指的是类，而不是实例
```javascript
class Foo {
  static bar() {
    this.baz()    //相当于Foo.baz()
  }
  static baz() {
    console.log('hello')
  }
  baz() {
    console.log('world')
  }
}
Foo.bar() // hello
```
父类的静态方法，可以被子类继承
```javascript
class Foo {
  static classMethod() {
    return 'hello'
  }
}
class Bar extends Foo {}
Bar.classMethod() // 'hello'
```
静态方法也是可以从super对象上调用的
```javascript
class Foo {
  static classMethod() {
    return 'hello'
  }
}
class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too'
  }
}
Bar.classMethod() // "hello, too"
```
#### 实例属性的新写法
实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层
```javascript
class IncreasingCounter {
  constructor() {
    this._count = 0
  }
  get value() {
    console.log('Getting the current value!')
    return this._count
  }
  increment() {
    this._count++
  }
}
//等同于
class IncreasingCounter {
  _count = 0
  get value() {
    console.log('Getting the current value!')
    return this._count
  }
  increment() {
    this._count++
  }
}
```
#### 静态属性
静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性
```javascript
// 老写法
class Foo {
  // ...
}
Foo.prop = 1

// 新写法
class Foo {
  static prop = 1
}
```
#### 私有属性私有方法
私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。
```javascript
(提案)
class Foo {
  #a
  #b
  constructor(a, b) {
    this.#a = a
    this.#b = b
  }
  #sum() {
    return #a + #b
  }
  printSum() {
    console.log(this.#sum())
  }
}
```
#### new.target 属性
该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。  
如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined
```javascript
function Person(name) {
  if (new.target === Person) {
    this.name = name
  } else {
    throw new Error('必须使用 new 命令生成实例')
  }
}
var person = new Person('张三') // 正确
var notAPerson = Person.call(person, '张三')  // 报错

class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle)
    this.length = length
    this.width = width
  }
}
var obj = new Rectangle(3, 4) // 输出 true
```
子类继承父类时，new.target会返回子类
```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle)
    // ...
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, width)
  }
}
var obj = new Square(3) // 输出 false
```
```javascript
// 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化')
    }
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super()
    // ...
  }
}
var x = new Shape()  // 报错
var y = new Rectangle(3, 4)  // 正确
```
#### 综合
```javascript
class Rectangle {
  // constructor
  constructor(height, width) {
    // 实例属性(必须定义在类的方法里)
    this.height = height
    this.width = width
  }
  // 原型链上的Getter
  get area () {
    return this.calcArea()
  }
  // 原型链上的方法
  calcArea () {
    return this.height * this.width
  }
  // 静态方法(不需要实例化该类，不能通过实例调用静态方法)
  static calcGirth (height, width) {
  	 return height * 2 + width * 2
  }
  static getDoubleStaticWidth () {
  	return this.staticWidth * 2	// this表示类构造函数
  }
  getDoubelPrototypeWidth () {
  	return this.prototypeWidth * 2	// this表示类实例，此时prototypeWidth从原型链继承过来
  }
}
// 静态属性（必须定义在类定义的外面）
Rectangle.staticWidth = 20
// 原型的数据属性（必须定义在类定义的外面）
Rectangle.prototype.prototypeWidth = 25
const square = new Rectangle(10, 10);

console.log(square.area)	// 100
console.log(square.calcArea())	// 100

console.log(square.calcGirth(10, 10))	// square.calcGirth is not a function
console.log(Rectangle.calcGirth(10, 10))	// 40

console.log(Rectangle.getDoubleStaticWidth()) // 40
console.log(square.getDoubelPrototypeWidth()) // 50
```

