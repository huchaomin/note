---
date: '1646563461026'
title: vue form组件
description: 实现一个简单的 vue form组件 -- FormItem
tags: [vue]
---
### 实现一个简单的 vue form组件 -- FormItem
/FormItem.vue
```vue
<template>
<div>
  <label v-if="label">{{ label }}</label>
  <slot></slot>
  <p v-if="error">{{ error }}</p>
</div>
</template>
<script>
import emitter from './emitter.js'
import Schema from 'async-validator'

export default {
  inject: ['form'],
  mixins: [emitter],
  componentName: 'formItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      error: '',
    }
  },
  mounted () {
    this.$on('validate', () => { this.validate() })
    this.dispatch('formWrapper', 'form.addFormItem', [this])
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const descriptor = { [this.prop]: rules }
      const schema = new Schema(descriptor)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    },
  },
  beforeDestroy () {
    this.dispatch('formWrapper', 'form.removeFormItem', [this])
  },
}
</script>
```
