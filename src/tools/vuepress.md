- 谷歌分析
- Algolia 搜索（文档写的足够好）
- pwa
- 排序
- 首页
- 网站备案
### yaml 可自定义
```yaml
---
pageClass: custom-page-class // 给页面添加特殊class
layout: SpecialLayout // 自定义页面布局（暂留功能）
---
```
### themeConfig 可自定义
```js
module.exports = {
  themeConfig: {
    enablePrevAndNext: true, // 是否开启上一篇，下一篇
  }
}
```

### 代码高亮
``` js {4,5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
### 导入代码片段（无法使用路径别名）【也可以导入代码当中一部分】
<<< src/.vuepress/config.js{2}

### 使用外部组件
<v-alert
  outlined
  type="warning"
>同级目录下index.md和README.md只能有一个</v-alert>

### demo(注意template、script、:::标签下面空行)
::: demo
<template>
  <button @click="onClick">Click me!</button>
</template>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>

<style>
button {
  color: blue;
}
</style>
:::

### tabs
:::: tabs type:card
::: tab title
__markdown content__
:::
::: tab title2
<v-alert
  outlined
  type="warning"
>同级目录下index.md和README.md只能有一个</v-alert>
:::
::::

