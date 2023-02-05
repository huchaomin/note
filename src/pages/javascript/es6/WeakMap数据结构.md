---
title: WeakMap数据结构
---
## WeakMap数据结构

- WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
- 键名所引用的对象都是弱引用，有助于防止内存泄漏
- WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用

```javascript
const wm = new WeakMap()
let key = {}
let obj = {foo: 1}

wm.set(key, obj)
obj = null
wm.get(key)
// Object {foo: 1}
```

WeakMap只有四个方法可用：get()、set()、has()、delete()。
