---
date: '1644733734701'
title: call,apply 和 bind
description: call,apply 和 bind 区别
tags: [Function]
---
### call,apply 和 bind 区别
#### 前言
call、apply 和 bind 是 Function 对象自带的三个方法，这三个方法的主要作用是改变函数中的 this 指向，从而可以达到接花移木的效果。
#### 1. call
`call(thisArgs [,args...])`  
thisArgs  
1. 指定了函数在运行期的调用者，也就是函数中的 this 对象
2. 不传，或者传null,undefined， 函数中的 this 指向 window 对象
3. 传递另一个函数的函数名，函数中的 this 指向这个函数的引用
4. 传递字符串、数值或布尔类型等基础类型，函数中的 this 指向其对应的包装对象，如 String、Number、Boolean
5. 传递一个对象，函数中的 this 指向这个对象
```javascript
function a () {
  console.log(this)
}

function b () {}
var obj = { name: 'onepixel' }

a.call() // window
a.call(null) // window
a.call(undefined)// window
a.call(1) // Number
a.call('') // String
a.call(true) // Boolean
a.call(b) // function b(){}
a.call(obj) // {name:'onepixel'}

```
```javascript
var a = {
  name: 'function a',
  say: function () {
    console.log('Hi,I\'m function a!')
  },
}

function b (name) {
  console.log('Post params: ' + name)
  console.log('I\'m ' + this.name)
  this.say()
}

b.call(a, 'test')
// Post params: test
// I'm function a
// I'm function a!
```
#### 2. apply
`apply(thisArgs [,args[]])`  
apply 和 call 的唯一区别是第二个参数的传递方式不同，apply 的第二个参数必须是一个数组（或者类数组）
```javascript
function b (x, y, z) {
  console.log(x, y, z)
}

b.apply(null, [1, 2, 3]) // 1 2 3
```
#### 3. bind
`bind(thisArgs [,args...])`
 - bind是ES5 新增的一个方法  
 - call 或 apply 都会自动执行对应的函数  
 - bind 不会执行对应的函数，只是返回了对函数的引用。
```javascript
var obj = { name: 'onepixel' }
document.addEventListener('click', onClick.bind(obj, 'p1', 'p2'), false)

function onClick (a, b) {
  console.log(
    this.name, // onepixel
    a, // p1
    b, // p2
  )
}
```
bind 的 polyfill 实现
```javascript
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    var args = Array.prototype.slice.call(arguments, 1)    //arraylike => array
    var fToBind = this     //this在这里指向的是实例函数
    var fBind = function () {
      console.log(this)      //window
      return fToBind.apply(
        // 如果外部执行var obj = new fBind(), 则将obj作为最终的this，放弃使用oThis
        this instanceof fBind
          ? this  // 此时的 this 就是 new 出的 obj
          : oThis || this, // 如果传递的 oThis 无效，就将 fBind 的调用者作为this
        // 将通过bind传递的参数和调用时传递的参数进行合并，并作为最终的参数传递
        args.concat(Array.prototype.slice.call(arguments)),
      )
    }
    // 将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
    fBind.prototype = this.prototype
    // 返回fBind的引用，由外部按需调用
    return fBind
  }
}
```
bind 之后 this 的指向是不可再次改变的
```javascript
var obj1 = {
  name: 'Tom',
}
var obj2 = {
  name: 'Joy',
}
setTimeout(function () {
  console.log(this.name)
}.bind(obj1).bind(obj2), 0)
//tom
```
### 实战
数组去重
```javascript
Array.prototype.unique = function (fn) {
  var rst = []
  var tmp = {}
  this.forEach(function (val) {
    var key = 'uniq' + (typeof fn === 'function' ? fn.bind(this, val)() : val)
    if (!tmp.hasOwnProperty(key)) {
      rst.push(val)
      tmp[key] = null
    }
  }, this)
  return rst
}
var arr = [1, 2, 2, 3, 5]
arr.unique(function (v) {
  return v
})
```
继承
```javascript
function Animal (name, weight) {
  this.name = name
  this.weight = weight
}

function Cat () {
  Animal.call(this, 'cat', '50')
  //Animal.apply(this,['cat','50']);

  this.say = function () {
    console.log('I am ' + this.name + ',my weight is ' + this.weight)
  }
}

var cat = new Cat()
cat.say()//I am cat,my weight is 50
```
```javascript
Array.prototype.forEach.call(arraylike,function(item){
  console.log(item) // 1 2 3 4
})
```
```javascript
Math.max(1,2,3,6,9) // 9
var arr = [1,2,3,6,9]
Math.max.apply(null,arr) // 9
```
