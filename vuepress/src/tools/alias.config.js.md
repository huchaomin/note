---
date: '1640781730623'
title: webstorm
description: webstorm 路径别名设置
tags: [webstorm, webpack]
---
### webstorm 路径别名设置
::: tip 
由于 Vue CLI 3 不再使用传统的 webpack 配置文件，故 webstorm 无法识别别名  
本文件对项目无任何作用，仅作为 webstorm 识别别名用  
进入 webstorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
:::

```javascript
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('./src')
    }
  }
}
```
