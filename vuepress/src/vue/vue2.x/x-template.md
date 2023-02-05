---
date: '1642753226180'
title: Vue x-template
description: Vue x-template的基本用法
tags: [vue]
---
### x-template 使用
```html
<script type="text/x-template" id="yourId">
<template>
  <h1 v-show="showHeading">
    <slot></slot>
  </h1>
  // ...
</template>
</script>
```
```javascript
Vue.component('h1-heading', {
  template: '#yourId',
  props: {
    showHeading: {
      type: Boolean,
      default: true
    }
  }
})
```
