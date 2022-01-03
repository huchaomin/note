---
date: '1641129761297'
title: webpack resolve
description: webpack resolve 详解
tags: [webpack]
---

### alias
创建 import 或 require 的别名，来确保模块引入变得更简单
```javascript
module.exports = {
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
    },
  },
}
```
使用
```javascript
import Utility from '../../utilities/utility' // 以前
import Utility from 'Utilities/utility' // 现在
```
末尾添加 $，以表示精准匹配
```javascript
// alias: {
//   xyz$: path.resolve(__dirname, 'path/to/file.js'),
// },
import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入
import Test2 from 'xyz/file.js'; // 非精确匹配，触发普通解析 xyz/file.js 被解析和导入
```

### preferRelative
当启用此选项时，webpack 更倾向于将模块请求解析为相对请求，  
而不使用来自 node_modules 目录下的模块
```javascript
// let's say `src/logo.svg` exists
import logo1 from 'logo.svg'; // this is viable when `preferRelative` enabled
import logo2 from './logo.svg'; // otherwise you can only use relative path to resolve logo.svg

// `preferRelative` is enabled by default for `new URL()` case(默认开启)
const b = new URL('module/path', import.meta.url);
const a = new URL('./module/path', import.meta.url);
```

### 其他
```javascript
resolve: {
  // 允许无扩展名文件 require('./foo') 可以正常运行
  enforceExtension: false,
  // 按顺序解析这些后缀名 (覆盖默认配置)
  extensions: ['.wasm', '.mjs', '.js', '.json'],
  // 在 package.json 中使用哪个字段导入模块
  mainFields: ['browser', 'module', 'main'], //  当webpack target 属性设置为 webworker, web 或者没有指定 的默认值
  mainFields: ['module', 'main'],  // 当webpack target 属性设置为以上其他值 的默认值
  // 解析目录时要使用的文件名
  mainFiles: ['index'],
  // 在 package.json 中用于解析模块请求的字段
  exportsFields: ['exports', 'myCompanyExports']
  // 告诉 webpack 解析模块时应该搜索的目录
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],  // src将优先于node_modules
  // 传递 true 将缓存一切模块，但并不安全
  unsafeCache: true,
  // package.json中用于提供程序包内部请求的字段（以＃开头的请求被视为内部请求）
  importsFields: ['browser', 'module', 'main'],
  // 当正常解析失败重定向模块请求
  fallback: {
    xyz: path.resolve(__dirname, 'path/to/file.js')
  }
},
```
