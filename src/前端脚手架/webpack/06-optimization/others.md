---
date: '1641269733813'
title: webpack optimization 
description: webpack optimization 其他配置
tags: [webpack]
---

### nodeEnv
#### 取值 `false`|`string`
告知 `webpack` 将 `process.env.NODE_ENV` 设置为一个给定字符串  
如果 `optimization.nodeEnv` 不是 `false`，则会使用 `DefinePlugin`  
`optimization.nodeEnv` 默认值取决于 `mode`，如果为 `false`，则会回退到 `"production"`

> 当 mode 设置为 'none' 时，optimization.nodeEnv 的默认值为 false

### realContentHash
资源生成正确的资源内容hash后，再添加一个额外的hash。
 - production模式为`true`
 - development模式为`false`
 - none模式为`false`

如果 realContentHash 设置为 false，内部数据用于计算哈希值，当静态资源相同时，它可以改变。

### runtimeChunk
提取引导模板(extracting boilerplate)
#### 取值 `object`(只有一个name属性)|`string`|`boolean`
1. 默认值为`false`,每个入口 chunk 中直接嵌入 runtime
2. 为每个入口添加一个只含有 runtime 的额外 chunk,下面三种配置效果一样
```javascript
// true
// 'multiple'
runtimeChunk: {
  name: (entrypoint) => `runtime~${entrypoint.name}`,
},
```
3. 创建一个在所有生成 chunk 之间共享的运行时文件,下面两种配置效果一样
```javascript
// 'single'
runtimeChunk: {
  name: 'runtime',
},
```
::: alert
对于每个 runtime chunk，导入的模块会被分别初始化。  
因此如果你在同一个页面中引用多个入口起点，请注意此行为。  
你或许应该将其设置为 single，或者使用其他只有一个 runtime 实例的配置。
:::
