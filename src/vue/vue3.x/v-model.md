---
date: '1649473652239'
title: vue3 v-model
description: vue3 v-model写法的改变
tags: [vue]
---
### v-model写法的改变
::: alert
`v-bind.sync` 语法已经被移除
:::
#### 原生的受控组件
```vue
<input v-model="searchText" />
```
等价于
```vue
<input :value="searchText" @input="searchText = $event.target.value" />
```
#### 自定义组件
```vue
<custom-input v-model="searchText"></custom-input>
```
```js
app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `
})
```
#### getter 和 setter
```js
app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input v-model="value">
  `,
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) { 
        this.$emit('update:modelValue', value)
      }
    }
  }
})
```
#### 参数
```vue
<my-component v-model:title="bookTitle"></my-component>
```
```js
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
```
#### 多个 `v-model` 绑定
```vue
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
```
```js
app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```
#### `v-model` 修饰符
```vue
<my-component v-model.capitalize="myText"></my-component>
```
```js
app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      console.log(this.modelModifiers) // { capitalize: true }
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})
```
#### 带参数的修饰符
```vue
<my-component v-model:description.capitalize="myText"></my-component>
```
```js
app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})
```
