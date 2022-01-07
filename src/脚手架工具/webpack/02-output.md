---
date: '1641127465496'
title: webpack output
description: webpack output 详解
tags: [webpack]
---

### 基本配置
```javascript
output: {
  filename: '[name].js',
  path:__dirname + '/dist'
}
```

### 使用 CDN 和 hash
```javascript
output: {
  path: '/home/proj/cdn/assets/[fullhash]',
  publicPath: 'https://cdn.example.com/assets/[fullhash]/'
}
```
::: tip
webpack4.x版本及之前为 hash，webpack5.x中使用 fullhash 和 hash 均可
:::

### publicPath
按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）的相对加载路径前缀
::: tip
在编译时(compile time)无法知道输出文件的 publicPath 的情况下，可以留空  
然后在入口文件(entry file)处使用自由变量(free variable) __webpack_public_path__，以便在运行时(runtime)进行动态设置
:::

### environment
告诉 webpack 在生成的运行时代码中可以使用哪个版本的 ES 特性。
```javascript
output: {
  environment: {
    // The environment supports arrow functions ('() => { ... }').
    arrowFunction: true,
    // The environment supports BigInt as literal (123n).
    bigIntLiteral: false,
    // The environment supports const and let for variable declarations.
    const: true,
    // The environment supports destructuring ('{ a, b } = obj').
    destructuring: true,
    // The environment supports an async import() function to import EcmaScript modules.
    dynamicImport: false,
    // The environment supports 'for of' iteration ('for (const x of array) { ... }').
    forOf: true,
    // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
    module: false,
  }
}
```

### 其他
```javascript
output: {
  library: 'someLibName',
  libraryTarget: 'umd',
  // 每个输出 bundle 的名称(不会影响那些「按需加载 chunk 或 loader创建的文件」的输出文件)
  filename: '[name].[contenthash].[id].bundle.js'
  filename: (pathData) => {
    return pathData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
  },
  // 添加注释
  auxiliaryComment: 'Test Comment'，
  // 为 HTML 的 <script> 标签添加 charset="utf-8" 标识,默认为true
  charset: true,
  // 定义动态加载（异步加载）的chunk的名字
  chunkFilename: [id].js,
  // 请求chunk的timeOut时间，默认120000
  chunkLoadTimeout： 120000,
  // 用于加载 chunk 的全局变量(一般为JSONP 函数)
  chunkLoadingGlobal: 'myCustomFunc',
  // 加载 chunk 的方法.（默认值有 'jsonp' (web)，'importScripts' (WebWorker)，'require' (sync node.js)，'async-node' (async node.js)
  chunkLoading: 'async-node',
  // chunk 的格式.( 默认包含 'array-push' (web/WebWorker)，'commonjs' (node.js))
  chunkFormat: 'commonjs',
  // 为入口启用 chunk 加载类型列表
  enabledChunkLoadingTypes: ['jsonp', 'require'],
  // 告诉 webpack 启用 cross-origin 属性 加载 chunk
  crossOriginLoading: 'anonymous',
  // asset Modules 的 filename
  assetModuleFilename: '[hash][ext][query]',
  // 使用哪个全局对象来挂载 library
  globalObject: 'this',
  // 自定义热更新 chunk 的文件名
  hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
  // 只在 target 设置为 'web' 时使用，用于加载热更新(hot update)的 JSONP 函数
  hotUpdateGlobal: 'myCustomFunc',
  // 如果一个模块是在 require 时抛出异常，告诉 webpack 从模块实例缓存(require.cache)中删除这个模块
  strictModuleExceptionHandling: false,
  // 入口点可用的 library 类型列表
  enabledLibraryTypes: ['module'],
  // 告诉 webpack 添加 IIFE 外层包裹生成的代码.
  iife: true
  // 是一个实验性的功能， 想要使用的话，通过设置 experiments.outputModule 为 true
  // 设置 output.iife 为 false, output.libraryTarget 为 'module', output.scriptType 为 'module' 和 terserOptions.module 为 true
  module: true
}
```
