---
date: '1643690468901'
title: es6 class 类
description: es6 class 类的基本用法
tags: [es6]
---
### 定义
类声明(不会声明提前)
```javascript
class Rectangle {}
```
类表达式
```javascript
// 未命名/匿名类
let a = class {}
// 命名类
let a = class A {}
```
::: alert
类声明和类表达式的主体都执行在严格模式下
:::

### 综合
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

