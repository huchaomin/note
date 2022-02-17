---
date: '1644049736253'
title: 对象的静态方法
description: 对象的静态方法
tags: [Object]
---
### Object 的静态方法
::: table
方法                         | 作用
assign                      | 浅拷贝自身可枚举的属性，会触发getter、setter，访问器属性(getter、setter)会被转换成数据属性，包括Symbol值属性
create                      | 根据原型创建新实例对象，有第二个参数
defineProperty(s)           | 定义属性和其描述对象（configurable、enumerable、value、writable、get、set）
keys                        | 返回对象的自身可枚举属性组成的数组，不会触发getter
values                      | 返回对象的自身可枚举属性值组成的数组，会触发getter
entries                     | 返回对象的自身可枚举的键值对的二维数组[[key, value],...]，会触发getter
fromEntries                 | 把键值对列表转换为一个对象
freeze                      | 不能增、不能删、不能修改原型、数据属性和访问器属性不能互相转换、writable和configurable变为false
seal                        | 不能增、不能删、不能修改原型、数据属性和访问器属性不能互相转换、configurable变为false
preventExtensions           | 让对象自身永远不能再添加新的属性、原型链可以添加、不能改变原型、非可逆操作
getOwnPropertyDescriptor(s) | 返回自有属性的描述对象
getOwnPropertyNames         | 返回自身属性的属性名，包括不可枚举属性但不包括Symbol值的数组
getOwnPropertySymbols       | 返回自身的所有 Symbol 属性的数组
getPrototypeOf              | 返回对象的原型
setPrototypeOf              | 设置对象的原型、耗性能、preventExtensions会阻止
is                          | 判断两个值是否为同一个值
isExtensible                | 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）【freeze、seal、preventExtensions】
isFrozen                    | 判断一个对象是否被冻结
isSealed                    | 方法判断一个对象是否被密封
:::

### Object.create
```javascript
class Foo {
  constructor() {
    return Object.create(null)
  }
}
new Foo() instanceof Foo // false
```
简单内部实现
```javascript
var obj = new Object() // 创建一个空对象
obj.__proto__ = F.prototype // obj的__proto__指向构造函数的prototype
var result = F.call(obj) // 把构造函数的this指向obj，并执行构造函数把结果赋值给result
if (typeof(result) === 'object') {
  objB = result // 构造函数F的执行结果是引用类型，就把这个引用类型的对象返回给objB
} else {
  objB = obj // 构造函数F的执行结果是值类型，就返回obj这个空对象给objB
}
```

### 其他
Map 转化为 Object
```javascript
const map = new Map([ ['foo', 'bar'], ['baz', 42] ])
const obj = Object.fromEntries(map)
console.log(obj) // { foo: "bar", baz: 42 }
```

Array 转化为 Object
```javascript
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
const obj = Object.fromEntries(arr)
console.log(obj) // { 0: "a", 1: "b", 2: "c" }
```

对象转换
```javascript
const object1 = { a: 1, b: 2, c: 3 }
const object2 = Object.fromEntries(
  Object.entries(object1).map(([ key, val ]) => [ key, val * 2 ])
)
console.log(object2) // { a: 2, b: 4, c: 6 }
```

浅拷贝object
```javascript
// 相对于assign : 可拷贝不枚举，正确拷贝getter、setter,可拷贝属性的描述对象，可拷贝原型
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```

获取不可枚举的属性（不包括Symbol）
```javascript
Object.getOwnPropertyNames(obj).filter(key => {
  return !Object.keys(obj).includes(key)
})
```

Object.is pollyfill
```javascript
if (!Object.is) {
  Object.is = function (x, y) {
    if (x === y) {
      return x !== 0 || 1/x !== 1/y
    } else {
      return x !== x && y !== y
    }
  }
}
```

Object.isFrozen pollyfil
```javascript
const descriptor = Object.getOwnPropertyDescriptors(obj)
Object.values(descriptor).forEach(obj => {
  obj.configurable = false
  obj.writable = false
})
Object.defineProperties(obj, descriptor)
Object.preventExtensions(obj)
console.log(Object.isFrozen(obj)) // true
```

