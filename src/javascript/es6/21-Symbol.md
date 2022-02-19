---
date: '1645151673027'
title: es6 Symbol
description: es6 Symbol的使用
tags: [es6]
---
### Symbol
#### 作用
它是 JavaScript 语言的第七种数据类型，表示独一无二
```javascript
let s = Symbol()
typeof s
// "symbol"
```
可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
```javascript
let s1 = Symbol('foo')
let s2 = Symbol('bar')
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```
因为独一无二，所以不相等
```javascript
// 没有参数的情况
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo')
let s2 = Symbol('foo')
s1 === s2 // false
```
不能与其他类型的值进行运算
```javascript
let sym = Symbol('My symbol')
"your symbol is " + sym 
//VM514:1 Uncaught TypeError: Cannot convert a Symbol value to a string
```
可以显式转为字符串
```javascript
let sym = Symbol('My symbol')
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```
也可以转为布尔值，但是不能转为数值
```javascript
let sym = Symbol()
Boolean(sym) // true
!sym  // false
if (sym) {
  // ...
}
Number(sym) // TypeError
sym + 2 // TypeError
```
#### Symbol.prototype.description
返回Symbol值得描述
```javascript
const sym = Symbol('foo')
sym.description // "foo"
```
```javascript
//当然这种方式也可以
const sym = Symbol('foo')
sym.toString() // "Symbol(foo)"
```
#### 作为属性名的 Symbol
```javascript
let mySymbol = Symbol()
// 第一种写法
let a = {}
a[mySymbol] = 'Hello!'
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
}
// 第三种写法
let a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello!' })
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
Symbol 值作为对象属性名时，不能用点运算符,因为点运算符后面总是字符串
```javascript
const mySymbol = Symbol()
const a = {}
a.mySymbol = 'Hello!'
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```
同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
```javascript
let obj = {
  [s](arg) { ... }
}
```
#### Object.getOwnPropertySymbols()
返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。  
Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性
```javascript
const obj = {}
let a = Symbol('a')
let b = Symbol('b')
obj[a] = 'Hello'
obj[b] = 'World'
const objectSymbols = Object.getOwnPropertySymbols(obj)
objectSymbols
// [Symbol(a), Symbol(b)]
```
::: tip
由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
:::
#### Symbol.for()
Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol  
它们的区别是，前者会被登记在全局环境中供搜索，后者不会。  
Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。  

比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
```javascript
Symbol.for("bar") === Symbol.for("bar")
// true
Symbol("bar") === Symbol("bar")
// false
```
#### Symbol.keyFor()
返回一个已登记的 Symbol 类型值的key
```javascript
let s1 = Symbol.for("foo")
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo")
Symbol.keyFor(s2) // undefined
```
Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
```javascript
iframe = document.createElement('iframe')
iframe.src = String(window.location)
document.body.appendChild(iframe)
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
```
