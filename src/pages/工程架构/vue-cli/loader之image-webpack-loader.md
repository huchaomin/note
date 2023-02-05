---
title: image-webpack-loader
desc: image-webpack-loader 压缩图片
---

## 压缩图片

```javascript
chainWebpack: config => {
  config.module
    .rule("image-webpack-loader")
    .test(/\.(gif|png|jpe?g|svg)$/i)
    .use("file-loader")
    .loader("image-webpack-loader")
    .tap(() => ({
      disable: process\.env\.NODE_ENV !== "production"
    }))
    .end()
}
```
