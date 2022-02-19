---
date: '1645240993216'
title: es6 async函数
description: es6 async函数的理解与使用
tags: [es6]
---
### async函数
async函数返回一个 Promise 对象
```javascript
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncPrint('hello world', 50)
```
async 函数有多种使用形式。
```javascript
// 函数声明
async function foo() {}
// 函数表达式
const foo = async function () {}
// 对象的方法
let obj = { async foo() {} }
obj.foo().then(...)
// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars')
  }

  async getAvatar(name) {
    const cache = await this.cachePromise
    return cache.match(`/avatars/${name}.jpg`)
  }
}
const storage = new Storage()
storage.getAvatar('jake').then(…)
// 箭头函数
const foo = async () => {}
```
async函数内部return语句返回的值，会成为then方法回调函数的参数。
```javascript
async function f() {
  return 'hello world'
}
f().then(v => console.log(v))
// "hello world"
```
async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
```javascript
async function f() {
  throw new Error('出错了')
}
f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: 出错了
```
#### await 命令
await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
```javascript
async function f() {
  // 等同于
  // return 123
  return await 123
}
f().then(v => console.log(v))
// 123
```
await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。
```javascript
class Sleep {
  constructor(timeout) {
    this.timeout = timeout
  }
  then(resolve, reject) {
    const startTime = Date.now()
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    )
  }
}
(async () => {
  const sleepTime = await new Sleep(1000)
  console.log(sleepTime)
})()
// 1000
```
任何一个await语句后面的Promise对象变为reject状态，那么整个async函数都会中断执行。
```javascript
async function f() {
  await Promise.reject('出错了')
  await Promise.resolve('hello world') // 不会执行
}

//要变为可执行
async function f() {
  await Promise.reject('出错了').catch(e => console.log(e))
  return await Promise.resolve('hello world')
}
f()
.then(v => console.log(v))
// 出错了
// hello world

//或者
async function main() {
  try {
    const val1 = await firstStep()
    const val2 = await secondStep(val1)
    const val3 = await thirdStep(val1, val2)
    console.log('Final: ', val3)
  } catch (err) {
    console.error(err)
  }
}
```
#### 注意
多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
```javascript
let foo = await getFoo()
let bar = await getBar()   //只有等foo状态改变之后才能去获取bar的状态

// 改写
let [foo, bar] = await Promise.all([getFoo(), getBar()])
```
async 函数可以保留运行堆栈
```javascript
const a = () => {
  b().then(() => c())
}
// 当b()运行的时候，函数a()不会中断，而是继续执行。
// 等到b()运行结束，可能a()早就运行结束了，b()所在的上下文环境已经消失了。
// 如果b()或c()报错，错误堆栈将不包括a()。

//改写
const a = async () => {
  await b()
  c()
}
// b()运行的时候，a()是暂停执行，上下文环境都保存着。
// 一旦b()或c()报错，错误堆栈将包括a()。
```
并发执行操作放在外面
```javascript
// 继发执行
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url)
    console.log(await response.text())
  }
}

// 并发执行（async在map函数里面）
async function logInOrder(urls) {
  // 可以理解此时map函数没有暂停执行，因为里面的async 和 await是一对
  const textPromises = urls.map(async url => {
    const response = await fetch(url)
    return response.text()
  })
  for (const textPromise of textPromises) {
    console.log(await textPromise)
  }
}
```
