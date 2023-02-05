---
date: '1646545050706'
title: vue 组件的递归
description: 实现一个简单的 vue 递归组件
tags: [vue]
---
### 实现一个简单的 vue 递归组件
/index.vue
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
          title: 'Web全栈架构师',
          children: [
            {
              title: 'Java架构师',
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
              title: 'Web全栈',
              children: [
                {
                  title: 'Vue训练营',
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
