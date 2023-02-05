---
title: vue 组件的递归
desc: 实现一个简单的 vue 递归组件 -- Tree
---

```vue
<template>
<div class="tree">
  <TreeNode
    v-for="item in data"
    :key="item.title"
    :model="item">
  </TreeNode>
</div>
</template>
<script>
import TreeNode from './TreeNode.vue'

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeNode,
  },
}
</script>
<style scoped>
.tree {
  text-align: left;
}
</style>
```
