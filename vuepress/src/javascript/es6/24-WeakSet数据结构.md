---
date: '1645177156833'
title: es6 WeakSet数据结构
description: es6 WeakSet数据结构
tags: [es6]
---
### WeakSet数据结构
它与 Set 有两个区别：
 - WeakSet 的成员只能是对象，而不能是其他类型的值。
 - WeakSet 中的对象都是弱引用
```javascript
const ws = new WeakSet()
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
```
垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 **WeakSet 不可遍历**。
```javascript
const a = [[1, 2], [3, 4]]
const ws = new WeakSet(a)
// WeakSet {[1, 2], [3, 4]}
//a的成员会自动成为 WeakSet 的成员
```
 - WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
 - WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
 - WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 
