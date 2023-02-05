---
date: '1641199210158'
title: webpack Magic Comments
description: webpack webpackChunkName webpackMode webpackPrefetch webpackPreload 使用方法
tags: [webpack]
---

### 综合
通过在 import 中添加注释，我们可以进行诸如给 chunk 命名或选择不同模式的操作
```javascript
// 单个目标
import(/* webpackIgnore: true */ 'ignored-module.js')

import(
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  /* webpackExports: ["default", "named"] */
  'module'
)

// 多个可能的目标
import(
  /* webpackInclude: /\.json$/ */
  /* webpackExclude: /\.noimport\.json$/ */
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  `./locale/${language}`
)
```

### webpackIgnore
 - 设置为 true 时，禁用动态导入解析
 - 设置为 true 则不进行代码分割

### webpackChunkName
新 chunk 的名称
```javascript
// your code
const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')

// webpack.config.js
output: {
  // ...
  chunkFilename: '[name].vendor.js',
}

// bundle
lodash.vendor.js
```

### webpackMode
 - `"lazy"`（默认）：为每个 import() 导入的模块，生成一个可延迟加载(lazy-loadable) chunk
 - `"lazy-once"`：生成一个可以满足所有 import() 调用的单个可延迟加载(lazy-loadable) chunk。  
此 chunk 将在第一次 import() 调用时获取，随后的 import() 调用将使用相同的网络响应。  
注意，这种模式仅在部分动态语句中有意义，例如 import(`./locales/${language}.json`)，其中可能含有多个被请求的模块路径。
 - `"eager"`：不会生成额外的 chunk，所有模块都被当前 chunk 引入，并且没有额外的网络请求。  
仍然会返回 Promise，但是是 resolved 状态。和静态导入相对比，在调用 import（）完成之前，该模块不会被执行。
 - `"weak"`：尝试加载模块，如果该模块函数已经以其他方式加载（即，另一个 chunk 导入过此模块，或包含模块的脚本被加载）。  
仍然会返回 Promise，但是只有在客户端上已经有该 chunk 时才成功解析。  
如果该模块不可用，Promise 将会是 rejected 状态，并且网络请求永远不会执行。  
当需要的 chunks 始终在（嵌入在页面中的）初始请求中手动提供，而不是在应用程序导航在最初没有提供的模块导入的情况触发，这对于通用渲染（SSR）是非常有用的。

### webpackInclude 与 webpackExclude
使用 webpackInclude and webpackExclude 选项可让你添加正则表达式模式，以减少 webpack 打包导入的文件数量

### webpackPrefetch 与 webpackPreload
设置模块的预加载方式
