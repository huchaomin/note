---
date: '1645152268318'
title: es6 内置的 Symbol 值
description: es6 内置的 Symbol 值
tags: [es6]
---
### 内置的 Symbol 值
#### Symbol.hasInstance
对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
```javascript
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array
  }
}
[1, 2, 3] instanceof new MyClass() // true
```
上面代码中，MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
#### Symbol.isConcatSpreadable
对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
```javascript
let arr1 = ['c', 'd']
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined(或者true)可以展开

let arr2 = ['c', 'd']
arr2[Symbol.isConcatSpreadable] = false //false不可展开
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
```
类似数组的对象默认不展开
```javascript
let obj = {length: 2, 0: 'c', 1: 'd'}
['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true
['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
```
#### Symbol.species(略)
#### Symbol.match
```javascript
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)
```
#### Symbol.replace
```javascript
String.prototype.replace(searchValue, replaceValue)
// 等同于
searchValue[Symbol.replace](this, replaceValue)
```
#### Symbol.search
```javascript
String.prototype.search(regexp)
// 等同于
regexp[Symbol.search](this)
```
#### Symbol.split
```javascript
String.prototype.split(separator, limit)
// 等同于
separator[Symbol.split](this, limit)
```
#### Symbol.iterator
指向该对象的默认遍历器方法
#### Symbol.toPrimitive
指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
#### Symbol.unscopables
指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
#### Symbol.toStringTag
可以用来表示对象的自定义类型标签
```javascript
const a = {}
Object.prototype.toString.call(a) // '[object Object]'

Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' })
Object.prototype.toString.call(a) // '[object Module]'
```
[toStringTag:segmentfault](https://segmentfault.com/a/1190000021043630)
[toStringTag:mozilla](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
