---
title: plugins
---

插件只会应用于在 pinia 传递给应用程序后创建的【app.use(pinia)】 store，否则它们不会生效。
在一个插件中， state 变更或添加（包括调用 store.$patch()）都是发生在 store 被激活之前，因此不会触发任何订阅函数。

## 作用

- 为 store 添加新的属性
- 定义 store 时增加新的选项
- 为 store 增加新的方法
- 包装现有的方法
- 改变或甚至取消 action
- 实现副作用，如本地存储
- 仅应用插件于特定 store

## 简介

```javascript
export function myPiniaPlugin(context) { // 只有一个参数
  context.pinia // 用 `createPinia()` 创建的 pinia。
  context.app // 用 `createApp()` 创建的当前应用程序（仅 Vue 3）。
  context.store // 该插件想扩展的 store
  context.options // 定义传给 `defineStore()` 的 store 的可选对象。
  // ...
}
```

## 使用

### 将一个静态属性添加到所有 store 实例

```javascript
import { createPinia } from 'pinia'

const pinia = createPinia()

// 但可以的话，请使用返回对象的方法，这样它们就能被 devtools 自动追踪到：
pinia.use(() => ({ hello: 'world' }));

pinia.use(({ store }) => {
  store.hello = 'world'
})

// 添加失败，因为 store 里面已经有了 router 属性
pinia.use(({ store }) => {
  store.router = markRaw({ a: 'a' });
})

// 在另一个文件中
const store = useStore()
store.hello // 'world'
```

### 为所有 store 添加新的 state

如果你想给 store 添加新的 state 属性，或者在 hydration 过程中使用的属性，你必须同时在两个地方添加它

- 在 store 上，因此你可以用 store.myState 访问它。
- 在 store.$state 上，因此它可以在 devtools 中使用，并且，在 SSR 时被序列化（serialized）。

```javascript
pinia.use(({ store }) => {
  // 为了正确地处理 SSR，我们需要确保我们没有重写任何一个
  // 现有的值
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    // 在插件中定义 hasError，因此每个 store 都有各自的
    // hasError 状态
    const hasError = ref(false) // 肯定也会使用 ref()（或其他响应式 API），以便在不同的读取中共享相同的值：
    // 在 `$state` 上设置变量，允许它在 SSR 期间被序列化。
    store.$state.hasError = hasError
  }
  // 我们需要将 ref 从 state 转移到 store
  // 这样的话,两种方式：store.hasError 和 store.$state.hasError 都可以访问
  // 并且共享的是同一个变量
  // 查看 https://vuejs.org/api/reactivity-utilities.html#toref
  store.hasError = toRef(store.$state, 'hasError')

  // 在这种情况下，最好不要返回 `hasError`
  // 因为它将被显示在 devtools 的 `state` 部分
  // 如果我们返回它，devtools 将显示两次。
})
```

### 在插件中调用 $subscribe、$onAction

```javascript
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 响应 store 变化
  })
  store.$onAction(() => {
    // 响应 store actions
  })
})
```

### 使用 store 的 options

store

```javascript
defineStore(
  'search',
  () => {
    // ...
  },
  {
    // 这将在后面被一个插件读取
    debounce: {
      // 让 action searchContacts 防抖 300ms
      searchContacts: 300,
    },
  }
)
```

```javascript
// 使用任意防抖库
import debounce from 'lodash/debounce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // 我们正在用新的 action 来覆盖这些 action
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})
```

### 可以添加全局的 options 吗？ 可以试试
