---
date: '1641471936469'
title: Navigator.sendBeacon
description: 使用Navigator.sendBeacon监听用户离开页面，并向后端发送数据
tags: [Navigator sendBeacon]
---

### 用户离开页面时的统计动作
```javascript
created () {
  // 用户离开页面时释放锁
  window.addEventListener('beforeunload', this.releaseLock)
},
methods: {
  releaseLock () {
    window.removeEventListener('beforeunload', this.releaseLock)
    // 进入这个页面之前就拿到了这个iLock的值，表示锁的状态
    if (!this.iLock) return // 如果没有锁，就不去释放锁
    const blob = new Blob([JSON.stringify(yourData)], { type: 'application/json; charset=UTF-8' })
    navigator.sendBeacon(yourUrl, blob)
  },
}
beforeRouteLeave (to, from, next) { // 这里没有考虑keep-alive的情况
  // 相同lockId页面之间互相跳转不用解锁，（会产生锁还没解完，就去拿锁，拿锁失败的情况）
  const arr = [//...]	// 相同lockId页面的name集合
  if (!arr.includes(to.name) || !arr.includes(from.name)) {
    this.releaseLock()
  }
  next()
},
```
::: tip
当浏览器窗口关闭或者刷新时，会触发beforeunload事件
:::

