---
date: '1641347802675'
title: webpack webpack-bundle-analyzer
description: webpack webpack-bundle-analyzer 打包分析工具的使用
tags: [webpack]
---
### 安装
```shell
yarn add -D webpack-bundle-analyzer
```

### 使用
```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// chainWebpack
if (process.env.REPORT) {
  config.plugin('analyze').use(BundleAnalyzerPlugin, [{ analyzerPort: 8899 }])
}
// package.json
"report": "cross-env REPORT=TRUE npm run build"  
```
