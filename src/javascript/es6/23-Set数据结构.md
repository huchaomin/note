---
date: '1645176657440'
title: es6 Set 数据结构
description: es6 Set 数据结构的使用
tags: [es6]
---
### Set 数据结构
ES6 提供了新的数据结构Set。它类似于数组，但是成员的值都是**唯一**的，没有重复的值
Set本身是一个构造函数，用来生成 Set 数据结构
```javascript
const s = new Set()
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x))
for (let i of s) {
  console.log(i)
}
// 2 3 5 4(不会添加重复的值)
```
Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
```javascript
const set = new Set([1, 2, 3, 4, 4])
[...set] // [1, 2, 3, 4]
const set = new Set(document.querySelectorAll('div'))
set.size // 56
```
去重
```javascript
[...new Set(array)]
[...new Set('ababbc')].join('')
```
Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”
```javascript
let set = new Set()
let a = NaN
let b = NaN
set.add(a)
set.add(b)
set // Set {NaN}

let set = new Set()
let a = +0
let b = -0
set.add(a)
set.add(b)
set // {0} 和 Object.is 不一样

//引用类型
let set = new Set()
set.add({})
set.size // 1
set.add({})
set.size // 2
```
### Set 实例的属性和方法
 - Set.prototype.constructor：构造函数，默认就是Set函数。  
 - Set.prototype.size：返回Set实例的成员总数。  
 - Set.prototype.add(value)：添加某个值，返回 Set 结构本身。  
 - Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。  
 - Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。  
 - Set.prototype.clear()：清除所有成员，没有返回值。
```javascript
s.add(1).add(2).add(2)
// 注意2被加入了两次
s.size // 2
s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2)
s.has(2) // false
```
Array.from方法可以将 Set 结构转为数组
```javascript
const items = new Set([1, 2, 3, 4, 5])
const array = Array.from(items)
//数组去重
const items = new Set([1, 2, 3, 4, 5])
const array = Array.from(items)
```
 - Set.prototype.keys()：返回键名的遍历器  
 - Set.prototype.values()：返回键值的遍历器  
 - Set.prototype.entries()：返回键值对的遍历器  
 - Set.prototype.forEach()：使用回调函数遍历每个成员

由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
```javascript
let set = new Set(['red', 'green', 'blue'])
for (let item of set.keys()) {
  console.log(item)
}
// red
// green
// blue
for (let item of set.values()) {
  console.log(item)
}
// red
// green
// blue
for (let item of set.entries()) {
  console.log(item)
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
```javascript
let set = new Set(['red', 'green', 'blue'])
for (let x of set) {
  console.log(x)
}
// red
// green
// blue
```
```javascript
let set = new Set([1, 4, 9])
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
let set = new Set([1, 2, 3])
set = new Set([...set].map(x => x * 2))
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5])
set = new Set([...set].filter(x => (x % 2) == 0))
// 返回Set结构：{2, 4}
```


