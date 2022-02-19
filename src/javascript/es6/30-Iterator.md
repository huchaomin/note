---
date: '1645197433032'
title: es6 Iterator
description: es6 Iterator迭代器的理解与使用
tags: [es6]
---
### Iterator 迭代器
#### 作用有三:
1. 为各种数据结构，提供一个统一的、简便的访问接口
2. 使得数据结构的成员能够按某种次序排列
3. ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费（while也行）。
#### 遍历过程
 - 创建一个指针对象，指向当前数据结构的起始位置。也就是说，迭代器对象本质上，就是一个指针对象。  
 - 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。  
 - 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。  
 - 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
::: tip
每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
:::
原生具备 Iterator 接口的数据结构如下:
 - Array
 - Map
 - Set
 - String
 - TypedArray
 - 函数的 arguments 对象
 - NodeList 对象
```javascript
let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```
::: alert
注意：其他数据结构（主要是对象）的 Iterator 接口，都需要自己在Symbol.iterator属性上面部署，这样才会被for...of循环遍历。  
对象（Object）之所以没有默认部署Iterator接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
:::
#### 调用 Iterator 接口的场合
1. 解构赋值
```javascript
// 对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。
let set = new Set().add('a').add('b').add('c')
let [x,y] = set
// x='a' y='b'
let [first, ...rest] = set
// first='a' rest=['b','c']
```
2. 扩展运算符
```javascript
// 扩展运算符（...）也会调用默认的 Iterator 接口
// 例一
var str = 'hello'
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c']
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']

// 只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。
let arr = [...iterable]
```
3. yield*
```javascript
// yield*后面跟的是一个可遍历的结构，它会调用该结构的迭代器接口。
let generator = function* () {
  yield 1
  yield* [2,3,4]
  yield 5
}
var iterator = generator()
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```
4. 其他场合
 - for...of
 - Array.from()
 - Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
 - Promise.all()
 - Promise.race()
#### 迭代器对象的 return()，throw()
> next方法是必须部署的，return方法和throw方法是否部署是可选的

return方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句），就会调用return方法。  
如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法。
#### 数组的迭代器
for...of循环可以代替数组实例的forEach方法。
```javascript
const arr = ['red', 'green', 'blue']
arr.forEach(function (element, index) {
  console.log(element) // red green blue
  console.log(index)   // 0 1 2
})
```
for...in循环，只能获得对象的键名，不能直接获取键值
for...of循环，允许遍历获得键值
```javascript
var arr = ['a', 'b', 'c', 'd']
for (let a in arr) {
  console.log(a) // 0 1 2 3
}
for (let a of arr) {
  console.log(a) // a b c d
}
```
for...of循环调用迭代器接口，数组的迭代器接口只返回具有数字索引的属性
```javascript
let arr = [3, 5, 7]
arr.foo = 'hello'
for (let i in arr) {
  console.log(i) // "0", "1", "2", "foo"
}
for (let i of arr) {
  console.log(i) //  "3", "5", "7"
}
```
并不是所有类似数组的对象都具有 Iterator 接口
```javascript
let arrayLike = { length: 2, 0: 'a', 1: 'b' }
// 报错
for (let x of arrayLike) {
  console.log(x)
}
// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x)
}
```
#### 对象的迭代器
对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。  
但是，这样情况下，for...in循环依然可以用来遍历键名
```javascript
let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
}
for (let e in es6) {
  console.log(e)
}
// edition
// committee
// standard
for (let e of es6) {
  console.log(e)
}
// TypeError: es6[Symbol.iterator] is not a function
```
#### 与其他遍历语法的比较 
for循环
```javascript
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index])
}
// 比较麻烦
```
forEach
```javascript
myArray.forEach(function (value) {
  console.log(value)
})
// 无法中途跳出forEach循环，break命令或return命令都不能奏效
```
for...in
```javascript
for (var index in myArray) {
  console.log(myArray[index])
}
```
 - 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
 - for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
 - 某些情况下，for...in循环会以任意顺序遍历键名。
下面是一个使用 break 语句，跳出for...of循环的例子
```javascript
for (var n of fibonacci) {
  if (n > 1000) break
  console.log(n)
}
```
