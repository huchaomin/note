---
date: '1644048747795'
title: 对象的描述对象
description: 对象的描述对象：configurable，Enumerable，Writable，Value
tags: [Object]
---
### 属性的描述对象
#### configurable
1. 表示能否通过delete删除属性从而重新定义属性
2. 能否修改属性的描述对象
3. 能够把属性由数据属性修改为访问器属性（getter/setter）
4. 非可逆操作
```javascript
let obj = {}
Object.defineProperty(obj, 'a', {
  configurable: true,
  enumerable: true,
  value: 'a',
})
obj.a = 'b'
console.log(obj)	// { a: 'a' }
delete(obj.a)
obj.a = 'b'
console.log(obj)	// { a: 'b' }
```

#### Enumerable：表示能否通过for-in循环返回该属性
#### Writable：表示能否修改属性的值
#### Value：默认值为undefined，这个值即为属性的属性值，我们可以在这个位置上读取属性值，也可以在这个位置上写入属性值

### 默认值
```javascript
obj.b = 'b'
Object.getOwnPropertyDescriptor(obj,'b')
// {value: 'b', writable: true, enumerable: true, configurable: true}
```
```javascript
Object.defineProperty(obj, 'b', { value: 'b' })
Object.getOwnPropertyDescriptor(obj,'b')
// {value: 'b', writable: false, enumerable: false, configurable: false}
```
