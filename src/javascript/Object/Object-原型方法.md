---
date: '1644059940253'
title: 对象的原型方法
description: 对象的原型方法
tags: [Object]
---

### Object.prototype
::: table
方法                 | 作用                                                     |
hasOwnProperty       | 返回对象自身属性中是否具有指定的属性的Boolean,包括Symbol |
isPrototypeOf        | 测试一个对象是否存在于另一个对象的原型链上               |
propertyIsEnumerable | 表示指定的属性是否可枚举                                 |
toString             | 返回一个表示该对象的字符串 [object Object]               |
valueOf              | 返回指定对象的原始值                                     |
:::

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
