---
title: 其他
---

- [来自 `@vue/runtime-core` 的 `createRenderer` API](https://github.com/vuejs/vue-next/tree/master/packages/runtime-core)，用于创建自定义渲染器
- [单文件组件组合式 API 语法糖 (`<script setup>`)](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
- [`listeners` 现在作为 `$attrs` 的一部分传递，可以将其删除](https://v3.cn.vuejs.org/guide/migration/listeners-removed.html#%E6%A6%82%E8%A7%88)
- this.$children 已被移除，且不再支持。如果你需要访问子组件实例，我们建议使用 $refs
- 完全移除了 $on、$off 和 $once 方法 [官方文档](https://v3.cn.vuejs.org/guide/migration/events-api.html#_2-x-%E8%AF%AD%E6%B3%95)
- [过滤器已移除](https://v3.cn.vuejs.org/guide/migration/filters.html#_2-x-%E8%AF%AD%E6%B3%95)
- [inline-template 已经删除](https://v3.cn.vuejs.org/guide/migration/inline-template-attribute.html#_2-x-%E8%AF%AD%E6%B3%95)
- [更改按键修饰符](https://v3.cn.vuejs.org/guide/migration/keycode-modifiers.html#%E6%A6%82%E8%A7%88)
- [过渡的 class 名更改](https://v3.cn.vuejs.org/guide/migration/transition.html#%E6%A6%82%E8%A7%88)
- [Transition 作为根节点](https://v3.cn.vuejs.org/guide/migration/transition-as-root.html)
- [Transition Group 根元素](https://v3.cn.vuejs.org/guide/migration/transition-group.html#%E6%A6%82%E8%A7%88)
- The props, slots and attrs objects here are proxies, so they will always be pointing to the latest values when used in render functions.
- vue 在 3.2.34 或以上的版本中, 使用 `<script setup>` 的单文件组件会自动根据文件名生成对应的 name 选项，无需再手动声明。前提是解析后 Component.type.__name 有值
- v-bind 绑定的对象里面如果包含 ref, 是不会自动解构到模板上面的
- onMounted 早于 onActivated

## getCurrentInstance

```js
const { ctx }  = getCurrentInstance();  //  方式一，这种方式只能在开发环境下使用，生产环境下的ctx将访问不到
const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐
```
