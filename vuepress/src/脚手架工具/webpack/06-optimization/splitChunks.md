---
date: '1641297225510'
title: webpack optimization.splitChunks
description: webpack optimization.splitChunks 各个配置及其作用祥解
tags: [webpack]
---
### [官方文档链接](https://webpack.docschina.org/plugins/split-chunks-plugin/)
### 默认配置
```javascript
optimization: {
  splitChunks: {
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
},
```

### chunks
表明将选择哪些 chunk 进行优化
 - `'all'` 所有的,一般的选择。这意味着 chunk 可以在异步和非异步 chunk 之间共享
 - `'async'` 只优化异步的
 - `'initial'` 被直接引入的模块将会被用于优化
 - `function`
```javascript
splitChunks: {
  chunks(chunk) {
    // exclude `my-excluded-chunk`
    return chunk.name !== 'my-excluded-chunk'
  },
},
```
::: tip
Note that it is applied to the fallback cache group as well
`splitChunks.fallbackCacheGroup.chunks`
:::
可参考[https://zhuanlan.zhihu.com/p/110173795](https://zhuanlan.zhihu.com/p/110173795)

### maxAsyncRequests
按需加载时的最大并行请求数  
可参考[https://www.cnblogs.com/kwzm/p/10316482.html](https://www.cnblogs.com/kwzm/p/10316482.html)

### maxInitialRequests
入口点的最大并行请求数(被直接引入的模块)  
可参考[https://www.cnblogs.com/kwzm/p/10316217.html](https://www.cnblogs.com/kwzm/p/10316217.html)

### minSizeReduction
生成 chunk 所需的主 chunk（bundle）的最小体积（以字节为单位）缩减。 
这意味着如果分割成一个 chunk 并没有减少主 chunk（bundle）的给定字节数，它将不会被分割，即使它满足 splitChunks.minSize。
> 我暂时的理解：这个头猪最少要割一斤卖，割少了不给卖

::: alert
为了生成 chunk，splitChunks.minSizeReduction 与 splitChunks.minSize 都需要被满足。
:::

### enforceSizeThreshold
强制执行拆分的体积阈值和其他限制
::: alert
minRemainingSize，maxAsyncRequests，maxInitialRequests 将被忽略
:::

### minRemainingSize
在 webpack 5 中引入了 splitChunks.minRemainingSize 选项，通过确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块。  
'development' 模式 中默认为 0。对于其他情况，splitChunks.minRemainingSize 默认为 splitChunks.minSize 的值。  
因此除需要深度控制的极少数情况外，不需要手动指定它
> 我暂时的理解：你割的我这头猪剩下不到一斤了，要不全买走，要不我不卖了
::: alert
仅在剩余单个 chunk 时生效
:::

### cacheGroups
[https://juejin.cn/post/6919684767575179278](https://juejin.cn/post/6919684767575179278)
[https://juejin.cn/post/6844904199394689032](https://juejin.cn/post/6844904199394689032)

### others
 - splitChunks.cacheGroup必须同时满足各个条件才能生效，这个之前我理解错误，我以为比如minSize或是minChunks等条件只要满足一条就可以拆分，但是实际上必须同时满足才行
 - splitChunks的配置项都是作用于cacheGroup上的，如果将cacheGroup的默认两个分组vendor和default设置为false，则splitChunks就不会起作用
 - minChunks、maxAsyncRequests、maxInitialRequests的值必须设置为大于等于1的数
 - 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义
 - 当父chunk和子chunk同时引入相同的module时，并不会将其分割出来而是删除掉子chunk里面共同的module，保留父chunk的module，这个是因为 `optimization.removeAvaliableModules` 默认是true
 - 当两个cacheGroup.priority相同时，先定义的会先命中
 - 除了js，splitChunks也适用于css
