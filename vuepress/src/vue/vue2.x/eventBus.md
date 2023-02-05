---
date: '1642655752462'
title: vue 自定义 eventBus
description: vue 自定义 eventBus
tags: [vue]
---

### 自定义Bus
```javascript
class Bus {
  constructor () {
    this.callbacks = {}
  }
  $on (name, fn) {
  	this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit (name, arg) {
  	if (this.callbacks[name]) {
    	this.callbacks[name].forEach(fn => fn(arg))
    }
  }
  $off (name, fn) {
    const arr = this.callbacks[name]
    if (!arr) return
    if (fn === undefined) {
      arr.splice(0)
      return
    }
    const index = arr.indexOf(fn)
    if (index === -1) return
    arr.splice(index, 1) 
  }
}

```

### 使用
```javascript
// main.js
Vue.prototype.$bus = new Bus()
// pre
this.$bus.$on('foo', handle)
// aft
this.$bus.$emit('foo')
```

实践中通常⽤Vue代替Bus，因为Vue已经实现了相应接⼝
```javascript
Vue.prototype.$Bus = new Vue()
```

