---
title: webpack module
desc: webpack module 详解
---
## 用法

```javascript
module: {
  // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件,提高构建性能
  noParse: /jquery|lodash/,
}
```
