---
title: Object构造函数
---

## 作用

为给定的参数创建一个包装类对象（object wrapper）：

- 如果给定值是 null 或 undefined，将会创建并返回一个空对象
- 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
- 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址

### 判断一个值是否是引用类型

```javascript
o !== Object(o) // 基本类型
o === Object(o) // 引用类型
```

## 当以非构造函数形式被调用时，Object 的行为等同于 new Object()

```javascript
const obj = {}

console.log(obj === new Object(obj)) // true
console.log(obj === Object(obj)) // true
```
