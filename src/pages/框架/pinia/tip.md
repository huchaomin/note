---
title: tip
---

- defineStore 第一个参数必须唯一，声明多次无效，以第一次为准
- 它有三个概念，state、getters 和 actions
- 在 setup() 调用 useStore() 之前，store 实例是不会被创建的
- store 是一个用 reactive 包装的对象，这意味着不需要在 getters 后面写 .value，就像 setup 中的 props 一样，如果你写了，我们也不能解构它（action除外）
- 想解构 store，可以使用 `const { name, doubleCount } = storeToRefs(store)`
- compositon api 不支持 $reset方法： setup syntax and does not implement $reset()
- 你可以在pinia实例上侦听整个 state

  ```javascript
  watch(
    pinia.state,
    (state) => {
      // 每当状态发生变化时，将整个 state 持久化到本地存储。
      localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
  )
  ```

- 单页面应用在组件外使用 store

```javascript
import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()
```
