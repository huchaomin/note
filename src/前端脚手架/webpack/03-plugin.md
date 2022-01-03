---
date: '1641129202973'
title: webpack plugin
description: webpack plugin 详解
tags: [webpack]
---

### 本质
是一个具有 apply 方法的 JavaScript 对象  
apply 方法会被 webpack compiler 调用，并且在整个编译生命周期都可以访问 compiler 对象
```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始')
    });
  }
}
module.exports = ConsoleLogOnBuildWebpackPlugin
// compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。
// 建议为此使用一个常量，以便它可以在所有 hook 中重复使用
```

### 用法
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
//  ...
plugins: [
  new HtmlWebpackPlugin({template: './src/index.html'})
]
```

### 访问内置的插件
```javascript
const webpack = require('webpack')
// ...
plugins: [
  new webpack.ProgressPlugin()
]
```

### Node API 方式
```javascript
const webpack = require('webpack') // 访问 webpack 运行时(runtime)
const configuration = require('./webpack.config.js')

let compiler = webpack(configuration)
new webpack.ProgressPlugin().apply(compiler)
compiler.run(function(err, stats) {
  // ...
})
```
::: alert
如果插件中使用了 webpack-sources 的 package，请使用 require('webpack').sources 替代 require('webpack-sources')，以避免持久缓存的版本冲突
:::
