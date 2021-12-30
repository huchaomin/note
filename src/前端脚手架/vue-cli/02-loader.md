---
date: '1640871277957'
title: vue.config.js loader
description: vue.config.js loader 处理
tags: [vue-cli]
---
### 添加一个新的 Loader
```javascript
module.exports = {
  chainWebpack: config => {
    config.module // GraphQL Loader
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
      // 你还可以再添加一个 loader
      .use('other-loader')
      .loader('other-loader')
      .end()
  }
}
```
### 替换一个规则里的 Loader
```javascript
chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  // 清除已有的所有 loader。
  // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
  svgRule.uses.clear()
  // 添加要替换的 loader
  svgRule
    .use('vue-svg-loader')
    .loader('vue-svg-loader')
}
```

