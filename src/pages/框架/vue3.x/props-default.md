---
title: props 的 default 函数
---

::: warning
生成 prop 默认值的工厂函数不再能访问 `this`。
:::

- 组件接收到的原始 prop 将作为参数传递给默认函数；
- `inject` API 可以在默认函数中使用。

```js
import { inject } from 'vue'

export default {
  props: {
    theme: {
      default (props) {
        // `props` 是传递给组件的、
        // 在任何类型/默认强制转换之前的原始值，
        // 也可以使用 `inject` 来访问注入的 property
        return inject('theme', 'default-theme')
      }
    }
  }
}
```
