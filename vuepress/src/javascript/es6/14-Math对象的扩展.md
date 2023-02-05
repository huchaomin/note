---
date: '1645109748595'
title: es6 Math 对象的扩展
description: es6 Math 对象的扩展
tags: [es6]
---
### Math 对象的扩展
ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。
1. Math.trunc()
Math.trunc方法用于去除一个数的小数部分，返回整数部分。
```javascript
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```
对于非数值，Math.trunc内部使用Number方法将其先转为数值。
```javascript
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
```
对于空值和无法截取整数的值，返回NaN。
```javascript
Math.trunc(NaN)      // NaN
Math.trunc('foo')    // NaN
Math.trunc()         // NaN
Math.trunc(undefined) // NaN
```
对于没有部署这个方法的环境，可以用下面的代码模拟。
```javascript
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x)
}
```
2. Math.sign()
Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
3. Math.cbrt()
Math.cbrt方法用于计算一个数的立方根。
4. Math.clz32()
Math.clz32()方法将参数转为 32 位无符号整数的形式，然后这个 32 位值里面有多少个前导 0。
5. Math.imul()
Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
6. Math.fround() 
返回一个数的32位单精度浮点数形式。
7. Math.hypot()
返回所有参数的平方和的平方根。
8. 对数方法
 - Math.expm1()
 - Math.log1p()
 - Math.log10()
 - Math.log2()
9. 双曲函数方法
 - Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
 - Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
 - Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
 - Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
 - Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
 - Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
