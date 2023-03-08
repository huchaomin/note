---
title: lazyLoadView 添加路由过度组件
---

## 用法

```js
// defineAsyncComponent不能使用在Vue Router上
// 函数式组件不能被 keepalive
function lazyLoadView(asyncModule) {
  const asyncWrapper = defineAsyncComponent({
    loader: asyncModule,
    delay: 0,
    timeout: 5000,
    errorComponent: RouterSuspenseErr, // 路由错误组件
    loadingComponent: RouterSuspense, // 路由过度组件
  });
  const fn = () => h(asyncWrapper);
  fn.displayName = '毛线用都没有的名字'; // https://router.vuejs.org/zh/api/index.html#meta
  return fn;
}
```

## 想要被keep-alive

```js
<script setup>
import RouterSuspense from './RouterSuspense.vue';

const route = useRoute();
const routerStore = useRouterStore();

const keepAliveInclude = ref([]);
// 这里代码只会走一遍，缓存组件的实例
const compoCache = new Map();
watch(routerStore.recentRouters, (arr) => {
  compoCache.forEach((v, k) => {
    if (!arr.includes(k) && k !== 'NotFound') {
      compoCache.delete(k);
    }
  });
});

const asyncCompo = computed(() => {
  const { name, meta } = route;
  if (compoCache.has(name)) {
    return compoCache.get(name);
  }
  const compo = defineAsyncComponent({
    loader: () => meta.loader().then((res) => {
      res.default.name = name; // for async components, name check should be based in its loaded inner component if available
      return res;
    }), // 与 stores/router.js 目录层级相同
    loadingComponent: RouterSuspense,
  });
  compo.name = name; // pruneCache 用到这个name 判断哪些组件需要被销毁
  compoCache.set(name, compo);
  return compo;
});
watch(asyncCompo, () => {
  keepAliveInclude.value = [...routerStore.recentRouters];
}, {
  immediate: true,
});

</script>
<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
  >
    <keep-alive :include="keepAliveInclude">
      <component :is="asyncCompo" class="full-height"></component>
    </keep-alive>
  </transition>
</template>
```
