---
date: '1645179920172'
title: es6 Promise 对象
description: es6 Promise 对象的使用
tags: [es6]
---
### Promise 对象
**是异步编程的一种解决方案**两个特点:  
1. 对象的状态不受外界影响。

Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。  
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  
这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。  
只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。  
如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。 

缺点：  
1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
```javascript
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value)
  } else {
    reject(error)
  }
})
```
```javascript
// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected(可选)状态的回调函数。
promise.then(function(value) {
  // success
}, function(error) {
  // failure
})
```
Promise 新建后就会立即执行。
```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise')
  resolve()
})
promise.then(function() {
  console.log('resolved.')
})
console.log('Hi!')
// Promise
// Hi!
// resolved
```
Promise对象实现的 Ajax 操作
```javascript
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open("GET", url)
    client.onreadystatechange = handler
    client.responseType = "json"
    client.setRequestHeader("Accept", "application/json")
    client.send()
  })
  return promise
}
```
嵌套Promise
```javascript
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 1000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 5000)
})
p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// (1秒后) 红 Error: fail (5秒后) log Error: fail
```
调用resolve或reject并不会终结 Promise 的参数函数的执行
```javascript
new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)
}).then(r => {
  console.log(r)
})
// 2
// 1
```
#### Promise.prototype.then()
第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。  
then方法返回的是一个新的Promise实例
```javascript
let promise = new Promise(function (resolve, reject) {
  resolve()
})
promise.then(function () {
  console.log('resolved1')
}, function () {
  console.log('reject1')
}).then(function () {
  console.log('resolved2')
}, function () {
  console.log('reject2')
})
//resolved1
//resolved2
```
```javascript
promise.then(function () {
  console.log('resolved1')
  reject()
}, function () {
  console.log('reject1')
}).then(function () {
  console.log('resolved2')
}, function () {
  console.log('reject2')
}).then(function () {
  console.log('resolved3')
}, function () {
  console.log('reject3')
})
//resolved1
//reject2
//resolved3
```
```javascript
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL) 
  // 如果return 的结果已经是一个Promise，then方法就把它return出去
}).then(function funcA (comments) {
  console.log('resolved: ', comments)
}, function funcB (err) {
  console.log('rejected: ', err)
})
// 第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。
// 改用箭头函数
getJSON('/post/1.json').then(
  post => getJSON(post.commentURL),
).then(
  comments => console.log('resolved: ', comments),
  err => console.log('rejected: ', err),
)
```
#### Promise.prototype.catch()
catch方法返回的还是一个 Promise 对象  
Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
```javascript
getJSON('/posts.json').then(function (posts) {
  // ...(这里的错误也会被catch)
}).catch(function (error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error)
})
//getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
```
```javascript
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err))

// 等同于
p.then((val) => console.log('fulfilled:', val),(err) => reject(err))
  .then(null, (err) => console.log("rejected:", err))
```
如果 Promise 状态已经变成resolved，再抛出错误是无效的
```javascript
const promise = new Promise(function(resolve, reject) {
  resolve('ok')
  throw new Error('test')
})
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) })
// ok
```
Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
```javascript
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL)
}).then(function (comments) {
  // some code
}).catch(function (error) {
  // 处理前面三个Promise产生的错误
})
//等同于
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL)
}, (err) => reject(err)).then(function (comments) {
  // some code
}, (err) => reject(err)).then(undefined, function (error) {
  // 处理前面三个Promise产生的错误
})
```
一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
```javascript
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  })

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error(因为可以catch到上面then方法里面的错误)
  })
```
Promise 对象抛出的错误不会传递到外层代码,不会影响程序的执行  
catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2)
  })
}

someAsyncThing()
.catch(function(error) {
  console.log('oh no', error)
})
.then(function() {
  console.log('carry on')
})
// oh no [ReferenceError: x is not defined]
// carry on
```
如果没有报错，则会跳过catch方法
```javascript
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error)
})
.then(function() {
  console.log('carry on')
  //此时，要是then方法里面报错，就与前面的catch无关了。
})
// carry on
```
#### Promise.prototype.finally()
用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···})
```
不接受任何参数  
finally方法总是会返回原来的值
```javascript
Promise.resolve(2).finally(() => {})
// Promise {<fulfilled>: 2}
Promise.reject(3).finally(() => {})
// Promise {<rejected>: 3}
```
#### Promise.all()
用于将多个 Promise 实例，包装成一个新的 Promise 实例
```javascript
const p = Promise.all([p1, p2, p3])
//Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
```
p的状态由p1、p2、p3决定，分成两种情况
1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
```javascript
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json")
})
Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
})
```
如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello')
})
.then(result => result)
.catch(e => e)

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了')
})
.then(result => result)
.catch(e => e)

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e))
// ["hello", Error: 报错了]

//如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
  resolve('hello')
})
.then(result => result)

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了')
})
.then(result => result)

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e))
// Error: 报错了
```
#### Promise.race()
```javascript
const p = Promise.race([p1, p2, p3])
```
只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。  
那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。  
例：设置ajax请求超时时间
```javascript
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])

p
.then(console.log)
.catch(console.error)
```
#### Promise.resolve()
有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
```javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
数分成四种情况
 - 如果参数是 Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
 - 参数是一个thenable对象
thenable对象指的是具有then方法的对象,Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
```
let thenable = {
  then: function(resolve, reject) {
    resolve(42)
  }
}
let p1 = Promise.resolve(thenable)
p1.then(function(value) {
  console.log(value)  // 42
})
//thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。
```
 - 参数不是具有then方法的对象，或根本就不是对象
则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
```javascript
const p = Promise.resolve('Hello')
p.then(function (s){
  console.log(s)
})
// Hello
```
 - Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
```javascript
const p = Promise.resolve()
p.then(function () {
  // ...
})
```
注意：立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
```javascript
setTimeout(function () {
  console.log('three')     //在下一轮“事件循环”开始时执行
}, 0)
Promise.resolve().then(function () {
  console.log('two')       //在本轮“事件循环”结束时执行
})
console.log('one')         //立即执行
// one
// two
// three
```
#### Promise.reject() 
```javascript
const p = Promise.reject('出错了')
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
})
// 出错了
```
::: alert
Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致
:::
```javascript
const thenable = {
  then(resolve, reject) {
    reject('出错了')
  }
}
Promise.reject(thenable)
.catch(e => {
  console.log(e === thenable)
})
// true
```
#### Promise.try()
实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。
```javascript
Promise.resolve().then(f)
// 缺点，就是如果f是同步函数，那么它会在本轮事件循环的末尾执行
```
```javascript
(async () => f())()
.then(...)
.catch(...)
// 可以
```
```javascript
const f = () => console.log('now')
(
  () => new Promise(
    resolve => resolve(f())
  )
)()
console.log('next')
// now
// next
// 也可以
```
```javascript
const f = () => console.log('now')
Promise.try(f)
console.log('next')
// now
// next
```
```javascript
Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)       //同步异步错误都可以catch的到
```
