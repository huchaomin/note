---
date: '1640871430539'
title: vue.config.js plugin
description: vue.config.js plugin 处理
tags: [vue-cli]
---
### 给所有插件传递options
```javascript
pluginOptions: {
  foo: {
    // 插件可以 `options.pluginOptions.foo` 访问这些选项。
  }
}
```
### 修改插件选项
```javascript
chainWebpack: config => {
  config
    .plugin('html') //  替换 html-webpack-plugin 的默认路径
    .tap(args => {
      args[0].template = '/Users/username/proj/app/templates/index.html'
      return args
    })
}
```

