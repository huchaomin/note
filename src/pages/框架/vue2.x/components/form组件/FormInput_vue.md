---
title: vue form组件
desc: 实现一个简单的 vue form组件 -- FormInput
---
```vue
<template>
<div>
  <input :value="value" v-bind="$attrs" @input="onInput">
</div>
</template>
<script>
import emitter from './emitter.js'

export default {
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      // this.$parent.$emit('validate')
      this.dispatch('formItem', 'validate')
    },
  },
}
</script>
```
