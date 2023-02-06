---
title: webpack webpack-bundle-analyzer
desc: webpack webpack-bundle-analyzer 打包分析工具的使用
---
## 安装

```sh
yarn add -D webpack-bundle-analyzer
```

## 使用

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// chainWebpack
if (process.env.REPORT) {
  config.plugin('analyze').use(BundleAnalyzerPlugin, [{ analyzerPort: 8899 }])
}
// package.json
"report": "cross-env REPORT=TRUE npm run build"
```
