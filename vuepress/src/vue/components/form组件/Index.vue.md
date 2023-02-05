---
date: '1646563253395'
title: vue form组件
description: 实现一个简单的 vue form组件
tags: [vue]
---
### 实现一个简单的 vue form组件
Index.vue
```vue
<template>
<div>
  <h3>Form表单</h3>
  <form-wrapper ref="loginForm" :model="model" :rules="rules" @submit="submitForm">
    <form-item label="⽤户名" prop="username">
      <form-input v-model="model.username"></form-input>
    </form-item>
    <form-item label="确认密码" prop="password">
      <form-input v-model="model.password" type="password"></form-input>
    </form-item>
  </form-wrapper>
</div>
</template>
<script>
import FormInput from './FormInput.vue'
import FormItem from './FormItem.vue'
import FormWrapper from './FormWrapper.vue'

export default {
  components: {
    FormWrapper,
    FormItem,
    FormInput,
  },
  data () {
    return {
      model: { username: 'tom', password: '' },
      rules: {
        username: [{ required: true, message: '请输⼊⽤户名' }],
        password: [{ required: true, message: '请输⼊密码' }],
      },
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$notice({
            title: '胡哥，校验成功了',
            message: '你快点来搬砖',
          })
        } else {
          this.$notice({
            title: '胡哥，校验失败了',
            message: '你快点删库跑路',
          })
        }
      })
    },
  },
}
</script>
```
