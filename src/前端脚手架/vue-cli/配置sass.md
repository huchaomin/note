---
date: '1641092276367'
title: vue-cli sass
description: vue-cli使用dart-sass
tags: [dart-sass]
---

### 1. vue-cli构建时选择dart-sass,node-sass依赖包有时很难下下来
```shell
css pre-processors use dart-sass as default
```

### 2. 向所有 Sass 样式传入共享的全局变量
```javascript
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/variables.sass"`,
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/variables.scss";`,
      },
    },
  },
}
```
::: tip
sass-loader 11与 webpack 4不兼容，降低sass-loader到10即可  
例如：`"sass-loader": "^10.1.0",`
:::




