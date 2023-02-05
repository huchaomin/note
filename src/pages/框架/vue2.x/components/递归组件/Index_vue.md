---
title: vue 组件的递归
desc: 实现一个简单的 vue 递归组件
---

```vue
<template>
  <Tree :data="treeData"></Tree>
</template>
<script>
import Tree from '../Tree.vue'

export default {
  data () {
    return {
      treeData: [
        {
          title: 'Web',
          children: [
            {
              title: 'Java',
            },
            {
              title: 'JS高级',
              children: [
                {
                  title: 'ES6',
                },
                {
                  title: '动效',
                },
              ],
            },
            {
              title: 'Web前端',
              children: [
                {
                  title: 'Vue',
                  expand: true,
                  children: [
                    {
                      title: '组件化',
                    },
                    {
                      title: '源码',
                    },
                    {
                      title: 'docker部署',
                    },
                  ],
                },
                {
                  title: 'React',
                  children: [
                    {
                      title: 'JSX',
                    },
                    {
                      title: '虚拟DOM',
                    },
                  ],
                },
                {
                  title: 'Node',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  components: {
    Tree,
  },
}
</script>
```
