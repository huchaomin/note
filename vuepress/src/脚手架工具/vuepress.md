---
date: '1640776776122'
title: vuepress
description: vuepress 常用的配置与markdown写法
tags: [vuepress, markdown]
---

### yaml 可自定义
```yaml
---
date: '1640776776122' // page id(string)
title: vuepress // 页面标题
description: vuepress 常用的配置与markdown写法 // 页面seo描述
tags: [vuepress, markdown] // 页面标识
pageClass: custom-page-class // 给页面添加特殊的class
layout: SpecialLayout // 自定义当前页面的布局
---
```

### markdown demo(注意template、script标签下面空行)
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
### markdown 使用外部组件
<v-alert
  outlined
  type="warning"
>同级目录下index.md和README.md只能有一个</v-alert>

### markdown 自定义container
::: alert 我是自定义警告标题
alert 内容，如果想换行的话敲两个空格
:::

### markdown 代码高亮
``` js {4,5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### markdown 导入代码片段并高亮（无法使用路径别名）【也可以导入代码当中一部分】
<<< src/index.md{2}

### 渲染table
::: table
aaa|bbb|ccc
a|b|c
a|b|c
:::

### 脚本和样式提升
...
