---
date: '1641202348933'
title: webpack devtool 
description: webpack devtool 配置祥解
tags: [webpack]
---

### 作用
定义 sourse-map 文件的生成方式
sourse-map 就是一份源码和转换后代码的映射文件

### 配置
[参考官网](https://webpack.docschina.org/configuration/devtool/)

### 总结
::: table
参数    | 参数解释
eval   | 打包后的模块都使用 eval() 执行，行映射可能不准；不产生独立的 map 文件
cheap  | map 映射只显示行不显示列，忽略源自 loader 的 source map
inline | 映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件
module | 增加对 loader source map 和第三方模块的映射
:::

### 例
 - `source-map`: 生成独立 map 文件，显示报错的行列信息
 - `cheap-sourse-map`: 生成独立 map 文件，显示报错的行信息，不显示报错列信息
 - `eval-source-map`: 以 eval() 函数打包运行模块，不产生独立的 map 文件，会显示报错的行列信息
```javascript
// index.bundle.js 文件
!function(e) {
  // ......
}([function(module, exports) {
  eval("console.lg('hello source-map !');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,......joiIn0=\n//# sourceURL=webpack-internal:///0\n")
}
])
```
 - `inline-source-map`: 映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件。显示报错的行列信息

### 推荐配置
dev: eval-cheap-module-source-map  
prod: nosources-source-map

#### 参考文献
[https://juejin.cn/post/6844904201311485966](https://juejin.cn/post/6844904201311485966)
