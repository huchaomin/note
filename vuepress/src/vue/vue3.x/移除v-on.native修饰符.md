---
date: '1649494379474'
title: vue3 移除 native 修饰符
description: 移除 v-on.native 修饰符
tags: [vue]
---
### 移除 v-on.native 修饰符
#### 2.x 语法

默认情况下，传递给带有 `v-on` 的组件的事件监听器只能通过 `this.$emit` 触发。要将原生 DOM 监听器添加到子组件的根元素中，可以使用 `.native` 修饰符：

```html
<my-component
  v-on:close="handleComponentEvent"
  v-on:click.native="handleNativeClickEvent"
/>
```

#### 3.x 语法

`v-on` 的 `.native` 修饰符已被移除。同时，新增的 `emits` 选项允许子组件定义真正会被触发的事件。

因此，对于子组件中*未*被定义为组件触发的所有事件监听器，Vue 现在将把它们作为原生事件监听器添加到子组件的根元素中 (除非在子组件的选项中设置了 `inheritAttrs: false`)。

```html
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
```

`MyComponent.vue`

```html
<script>
  export default {
    emits: ['close']
  }
</script>
```
