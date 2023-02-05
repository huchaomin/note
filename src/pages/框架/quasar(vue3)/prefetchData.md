---
title: prefetch data
---

[官方文档](https://quasar.dev/quasar-cli-vite/prefetch-feature#introduction)

- 只能在vue-router中使用的component中使用
- pre-fetch data
- validate the route
- redirect to another route, when some conditions aren’t met (like user isn’t logged in)
- can help in initializing the Store state
- will run before the actual route component is rendered
- 不能使用 this
- runs only once
- 所有模式中都可以使用，especially useful for SSR builds
- 如果想缓存数据，最好搭配pinia使用

## 调用链

[官方链接](https://quasar.dev/quasar-cli-vite/prefetch-feature#when-prefetch-gets-activated)

## 例子

```javascript
<script>
export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // fetch data, validate route and optionally redirect to some other route...
    // redirect({ path: '/login' })
    // redirect({ path: '/moved-permanently' }, 301) // 302 默认
    // redirect(false) // aborts the current route navigation, supported only on client-side

    // -- Pinia on Non SSR --
    // import { useMyStore } from 'stores/myStore'
    // export default {
    //   preFetch () {
    //     const myStore = useMyStore()
    //   }
    // }

    // ssrContext is available only server-side in SSR mode
    // Return a Promise if you are running an async job
  },
}
</script>
<script setup>....</script>
```
