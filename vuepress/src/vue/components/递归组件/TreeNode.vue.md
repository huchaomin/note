---
date: '1646545403764'
title: vue 组件的递归
description: 实现一个简单的 vue 递归组件 -- TreeNode
tags: [vue]
---
### 实现一个简单的 vue 递归组件 -- TreeNode
/TreeNode.vue
```vue
<template>
<div>
  <div :style="{paddingLeft: (level-1)+'em'}"
       @click="toggle">
    <label>{{ model.title }}</label>
    <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
  </div>
  <div v-if="isFolder"
       v-show="open">
    <tree-node v-for="model in model.children"
               :key="model.title"
               :level="level + 1"
               :model="model"
               class="item">
    </tree-node>
  </div>
</div>
</template>
<script>
export default {
  name: 'tree-node',
  props: {
    model: Object,
    level: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      open: false,
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
  },
}
</script>
```
