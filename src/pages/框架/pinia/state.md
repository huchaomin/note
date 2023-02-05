---
title: state
---

## 直接变更

```javascript
counter.count++;
```

## $patch

```javascript
store.$patch({
  count: store.count + 1, // 修改
  age: 120, // 新增
  name: 'DIO', // 新增
})
```

有些变更真的很难实现或者很耗时

```javascript
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

## 替换 state

```javascript
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```

你也可以通过变更 pinia 实例的 state 来设置整个应用程序的初始 state。这常用于 hydration 的 SSR。

```javascript
pinia.state.value = {} // 卸载掉了所有的 useStore 实例
```

## 订阅 state

比起普通的 watch()，使用 $subscribe() 的好处是 subscriptions 在 patch[vue nextTick] 后只触发一次

```javascript
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct'(直接赋值count或者调用increment2为 direct) | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。
  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```

默认情况下，state subscriptions 会被绑定到添加它们的组件上（如果 store 在组件的 setup() 里面）。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 { detached: true } 作为第二个参数，以将 state subscription 从当前组件中 detach：

```javascript
export default {
  setup() {
    const someStore = useSomeStore()
    // 在组件被卸载后，该订阅依旧会被保留。
    someStore.$subscribe(callback, { detached: true })
    // ...
  },
}
```
