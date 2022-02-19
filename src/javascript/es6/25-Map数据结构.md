---
date: '1645178479243'
title: es6 Map数据结构
description: es6 Map数据结构的使用
tags: [es6]
---
### Map数据结构
类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
```javascript
const m = new Map()
const o = {p: 'Hello World'}

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```
```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
])

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```
实际上
```javascript
const items = [
  ['name', '张三'],
  ['title', 'Author']
]
const map = new Map()
items.forEach(
  ([key, value]) => map.set(key, value)
)
```
注意引用类型
```javascript
const map = new Map()
map.set(['a'], 555)
map.get(['a']) // undefined
```
```javascript
let map = new Map()

map.set(-0, 123)
map.get(+0) // 123

map.set(true, 1)
map.set('true', 2)
map.get(true) // 1

map.set(undefined, 3)
map.set(null, 4)
map.get(undefined) // 3

map.set(NaN, 123)
map.get(NaN) // 123
```
```javascript
map[Symbol.iterator] === map.entries

for (let [key, value] of map.entries()) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"
```
