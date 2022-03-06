---
date: '1646546095851'
title: vue 弹窗组件
description: 实现一个简单的 vue 弹窗组件 -- Notice
tags: [vue]
---
### 实现一个简单的 vue 弹窗组件 -- Notice
/Notice.vue
```vue
<template>
<div v-if="isShow" class="box">
  <h3>{{ title }}</h3>
  <p class="box-content">{{ message }}</p>
  <button type="button" @click="hide">关闭</button>
</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isShow: true,
    }
  },
  methods: {
    hide () {
      this.isShow = false
      this.remove()
    },
  },
}
</script>
<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  background-color: #ffffff;
  border: grey 3px solid;
  box-sizing: border-box;
}

.box-content {
  width: 200px;
  font-size: 14px;
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 3px;
  margin: 10px auto 8px;
}
</style>
```
