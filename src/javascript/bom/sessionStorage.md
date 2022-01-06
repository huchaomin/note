---
date: '1641473569922'
title: window.sessionStorage
description: 使用window.sessionStorage存储数据，并设置过期时间
tags: [sessionStorage]
---

### 存储数据，并设置过期时间
```javascript
const session = {
  set (key, val, expired) {
    if (typeof val !== 'string') {
      val = JSON.stringify(val)
    }
    window.sessionStorage.setItem(key, val)
    if (typeof expired === 'number' && expired >= 0) {
      window.sessionStorage.setItem(`${key}__expires__`, `${Date.now() + 1000 * 60 * expired}`)
    }
  },
  get (key) {
    let val = window.sessionStorage.getItem(key)
    if (val !== null) {
      let expired = window.sessionStorage.getItem(`${key}__expires__`)
      if (expired) {
        if (Date.now() > expired) {
          this.removeWithExpire(key)
          val = null
        }
      }
    }
    try {
      val = JSON.parse(val)
    } catch (e) {
      console.error(`session JSON.parse${e}`)
      val = null
    }
    return val
  },
  remove (key) {
    window.sessionStorage.removeItem(key)
  },
  removeWithExpire (key) {
    this.remove(key)
    this.remove(`${key}__expires__`)
  },
}
export {
  session,
}
```

