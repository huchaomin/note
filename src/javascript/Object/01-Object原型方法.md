---
date: '1644059940253'
title: 对象的原型方法
description: 对象的原型方法
tags: [Object]
---

### 对象的原型方法
::: table
方法                 | 作用
hasOwnProperty       | 返回对象自身属性中是否具有指定的属性的Boolean,包括Symbol
isPrototypeOf        | 测试一个对象是否存在于另一个对象的原型链上
propertyIsEnumerable | 表示指定的属性是否可枚举
toString             | 返回一个表示该对象的字符串 [object Object]
valueOf              | 返回指定对象的原始值
:::

### Object.prototype.hasOwnProperty()
 - 返回一个布尔值，指示对象自身属性中是否具有指定的属性
 - 该方法会忽略掉那些从原型链上继承到的属性。
 - 即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true
### Object.prototype.isPrototypeOf()
测试一个对象是否存在于另一个对象的原型链上  
#### 语法
`prototypeObj.isPrototypeOf(object)`  
如果 prototypeObj 为 undefined 或 null，会抛出 TypeError
#### 例
```javascript
function Foo() {}
let foo = new Foo()
Foo.prototype.isPrototypeOf(foo)   //true

let baz = new foo.constructor()
Foo.prototype.isPrototypeOf(baz)   //true

//等同于
foo instanceof Foo     //true
baz instanceof Foo     //true
```
### Object.prototype.valueOf()
返回指定对象的原始值  
不同类型对象的valueOf()方法的返回值
```javascript
// Array：返回数组对象本身
var array = ['ABC', true, 12, -5]
console.log(array.valueOf() === array)   // true

// Date：当前时间距1970年1月1日午夜的毫秒数
var date = new Date(2013, 7, 18, 23, 11, 59, 230)
console.log(date.valueOf())   // 1376838719230

// Number：返回数字值
var num = 15.26540
console.log(num.valueOf())   // 15.2654

// 布尔：返回布尔值true或false
var bool = true
console.log(bool.valueOf() === bool)   // true

// new一个Boolean对象
var newBool = new Boolean(true)
// valueOf()返回的是true，两者的值相等
console.log(newBool.valueOf() == newBool)   // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool)   // false

// Function：返回函数本身
function foo () {}

console.log(foo.valueOf() === foo)   // true
var foo2 = new Function('x', 'y', 'return x + y')
console.log(foo2.valueOf())

// Object：返回对象本身
var obj = { name: '张三', age: 18 }
console.log(obj.valueOf() === obj)   // true

// String：返回字符串值
var str = 'http://www.xyz.com'
console.log(str.valueOf() === str)   // true

// new一个字符串对象
var str2 = new String('http://www.xyz.com')
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log(str2.valueOf() === str2)   // false
```

### 其他
isPrototypeOf与instanceof
```javascript
function Car () {}
const byd = new Car()
console.log(byd instanceof Car) // true
console.log(Car.prototype.isPrototypeOf(byd)) // true
```

::: alert
实例上的这些方法都有可能被重写，实际运用这些方法的过程中最好采用以下写法
Object.prototype.toString.call(...)
:::
