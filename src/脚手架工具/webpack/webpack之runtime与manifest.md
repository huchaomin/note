---
date: '1641130987201'
title: webpack runtime manifest
description: webpack runtime与manifest
tags: [webpack]
---

### 由来
在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：
 - 你或你的团队编写的源码。
 - 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
 - webpack 的 runtime 和 manifest，管理所有模块的交互。

### runtime
在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码，包括
 - 在模块交互时，连接模块所需的加载和解析逻辑
 - 已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑

### manifest（载货单）
一旦你的应用在浏览器中以 index.html 文件的形式被打开，一些 bundle 和应用需要的各种资源都需要用某种方式被加载与链接起来。  
在经过打包、压缩、为延迟加载而拆分为细小的 chunk 这些 webpack 优化 之后，你精心安排的 /src 目录的文件结构都已经不再存在。  
所以 webpack 如何管理所有所需模块之间的交互呢？这就是 manifest 数据用途的由来……

 - 当 compiler 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点 --- 这个数据集合称为 "manifest"
 - 当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块

无论你选择哪种 模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。  
通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。

```javascript
// 我们可以使用 webpack-manifest-plugin 查看项目的 manifest
{
  "dist/batman.js": "dist/batman.1234567890.js",
  "dist/joker.js": "dist/joker.0987654321.js"
}
```
