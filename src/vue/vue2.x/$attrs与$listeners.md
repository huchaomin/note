---
date: '1642653511138'
title: vue $attr 与 $listeners
description: vue $attr 与 $listeners 的实际运用
tags: [vue]
---

### inheritAttrs
 - `inheritAttrs：true` 继承除props之外的所有属性
 - `inheritAttrs：false` 只继承class、style属性

### $attrs
包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)，并且可以通过 v-bind=”$attrs” 传入内部组件。

当一个组件没有声明任何 props 时，它包含所有父作用域的绑定 (class 和 style 除外)

### $listeners
包含了父作用域中的 (不含 .native 修饰符) v-on 事件监听器。它可以通过 v-on=”$listeners” 传入内部组件

它是一个对象，里面包含了作用在这个组件上的所有事件监听器，相当于子组件继承了父组件的事件

### 使用
grand.vue
```vue
<div>
  <parent :customProp="..." @click="customClick" @click.native="nativeClick"></parent>
</div>
// emit customClick from parent
// emit customClick from child
```
parent.vue
```vue
<div>
  <child v-bind="$attrs" v-on="$listeners"></child>
</div>
...
inheritAttrs: false,
created () {
  this.$emit('click', 'emit customClick from parent')
  console.log(this.$attrs) // {customProp: ...}
  console.log(this.$listeners) // {click: customClick}
},
```
child.vue
```vue
<div>
  <input type="text" :value="customProp">
</div>
...
props: ['customProp'],
created () {
  this.$emit('click', 'emit customClick from child')
  console.log(this.$attrs) // {}
  console.log(this.$listeners) // {click: customClick}
},
```

#### 综上

1.  `$listeners` 里面包含了作用在这个组件上的所有监听器,但是不包含 `.native` 的监听器
2.  `$attrs` 和 `$listeners` 可以无限向下透传,每层传递都可以添加选项
3.  `$attrs` 如果遇到同名 `props` 会减少
