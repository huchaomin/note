---
date: '1645239021011'
title: es6 Generator函数
description: es6 Generator函数的理解与使用
tags: [es6]
---
### Generator函数
#### 特征:
 - function关键字与函数名之间有一个星号
 - 函数体内部使用yield表达式，定义不同的内部状态
```javascript
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}
var hw = helloWorldGenerator()

hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }
```
#### yield 表达式
由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。  
 - 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。  
 - 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。  
 - 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。  
 - 如果该函数没有return语句，则返回的对象的value属性值为undefined。  
```javascript
function* gen() {
  yield  123 + 456
}
// 不会立即求值，只有调了next方法后再回求值
```
可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数
```javascript
function* f() {
  console.log('执行了！')
}
var generator = f()
setTimeout(function () {
  generator.next()
}, 2000)
```
```javascript
function* gen(){
  // some code
}
var g = gen()
g[Symbol.iterator]() === g
// true
```
#### next 方法的参数 
可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
```javascript
function* foo(x) {
  console.log(x)
  var y = 2 * (yield (x + 1))
  console.log(x,y)
  var z = yield (y / 3)
  console.log(x,y,z)
  return (x + y + z)
}
var a = foo(5)
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5)
b.next() // { value:6, done:false } x->5
b.next(12) // { value:8, done:false } x->5 y->24
b.next(13) // { value:42, done:true } x->5 y->24 z->13
```
