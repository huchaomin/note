---
date: '1646563376902'
title: vue form组件
description: 实现一个简单的 vue form组件 -- FormWrapper
tags: [vue]
---
### 实现一个简单的 vue form组件 -- FormWrapper
/FormWrapper.vue
```vue
<template>
<form @submit.prevent="submit">
  <slot></slot>
  <button type="submit">确定</button>
</form>
</template>
<script>
export default {
  componentName: 'formWrapper',
  provide () {
    return {
      form: this, // 将组件实例作为提供者，⼦代组件可⽅便获取
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  data () {
    return {
      formItem: [],
    }
  },
  created () {
    this.$on('form.addFormItem', (item) => {
      if (item) {
        this.formItem.push(item)
      }
    })
    this.$on('form.removeFormItem', (item) => {
      if (item.prop) {
        this.formItem.splice(this.formItem.indexOf(item), 1)
      }
    })
  },
  methods: {
    validate (cb) {
      const tasks = this.formItem.map(item => item.validate())
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    },
    submit () {
      this.$emit('submit')
    },
  },
}
</script>
```
