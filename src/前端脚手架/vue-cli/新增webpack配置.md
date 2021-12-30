---
date: '1640872567830'
title: 新增vue.config.js配置 
description: vue-cli vue.config.js 使用configureWebpack/chainWebpack新增配置
tags: [vue-cli]
---

### configureWebpack 方式
1. 它可以是一个对象：和 webpack 本身配置方式是一致，该对象将会被 webpack-merge 合并入最终的 webpack 配置
```javascript
configureWebpack: {
  rules: [],
  plugins:  []
}
```
2. 它也可以是一个函数
```javascript
configureWebpack: (config) => {
  // 例如，通过判断运行环境，设置mode
  config.mode = 'production'
} 
```

### chainWebpack 方式
```javascript
chainWebpack: (config) => {
  config.mode = 'production'
}
```

