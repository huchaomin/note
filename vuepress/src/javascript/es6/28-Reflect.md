---
date: '1645179568798'
title: es6 Reflect
description: es6 Reflect 使用
tags: [es6]
---
### Reflect 使用
#### 设计目的
 - 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。
 - 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。
 - 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
 - Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
```javascript
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name)
    return Reflect.get(target, name)
  },
  deleteProperty(target, name) {
    console.log('delete' + name)
    return Reflect.deleteProperty(target, name)
  },
  has(target, name) {
    console.log('has' + name)
    return Reflect.has(target, name)
  }
})
//每一个Proxy对象的拦截操作（get、delete、has），内部都调用对应的Reflect方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。
```
#### Reflect对象一共有 13 个静态方法。
 - Reflect.apply(target, thisArg, args)
 - Reflect.construct(target, args)
 - Reflect.get(target, name, receiver)
 - Reflect.set(target, name, value, receiver)
 - Reflect.defineProperty(target, name, desc)
 - Reflect.deleteProperty(target, name)
 - Reflect.has(target, name)
 - Reflect.ownKeys(target)
 - Reflect.isExtensible(target)
 - Reflect.preventExtensions(target)
 - Reflect.getOwnPropertyDescriptor(target, name)
 - Reflect.getPrototypeOf(target)
 - Reflect.setPrototypeOf(target, prototype)
