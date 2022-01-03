---
date: '1641174739919'
title: webpack hash
description: webpack hash fullhash chunkhash contenthash 使用以及区别
tags: [webpack]
---

::: tip
hash通常被作为前端静态资源实现增量更新的方案，通过在文件名中带上一串hash字符串，告诉浏览器该文件是否发生更新，从而决定是否要使用缓存机制。
:::

webpack打包时的hash有三种
 - fullhash (webpack4.x版本及之前为 hash，webpack5.x中使用 fullhash 和 hash 均可)
 - chunkhash
 - contenthash
 
### 准备
我们通过一个demo查看他们的区别

#### 项目结构
```yaml
hash
├─ package.json
├─ src
│  ├─ add.js
│  ├─ index.css
│  ├─ index.js
│  └─ sub.js
├─ webpack.config.js
└─ yarn.lock
```

#### webpack.config.js
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pathResolve = p => path.resolve(__dirname, p)
module.exports = {
  entry: {
    index: pathResolve('./src/index.js'),
    add: pathResolve('./src/add.js'),
    sub: pathResolve('./src/sub.js'),
  },
  mode: 'production',
  output: {
    path: pathResolve('./dist'),
    filename: '[name].[fullhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'compare hash',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
      }),
    ],
  },
}
```


#### index.js
```javascript
import _ from 'lodash'
import { add } from './add'
import { sub } from './sub'
import './index.css'

const addResult = add(56 + 211)
const subResult = sub(213 - 53)
console.log(_.join([addResult, subResult], '---'))

const box = document.createElement('div')
box.innerText = 'compare hash'
document.body.append(box)
```

#### add.js
```javascript
export function add (a, b) {
  return a + b
}
```

#### sub.js
```javascript
export function sub (a, b) {
  return a - b
}
```

#### index.css
```css
div {
    color: coral;
}
```

### 打包结果
#### fullhash
 - fullhash是全量的hash，是整个项目级别的  
![webpack-fullhash](~@assets/image/webpack-fullhash.png)
 - 只要项目中有任何一个的文件内容发生变动，打包后所有文件的hash值都会发生改变  
 - 最上面的486是lodash

#### chunkhash
 - 我们将webpack.config.js 中的两处 fullhash 修改为 chunkhash
 - 打包一下，记录一下文件后缀  
![webpack-chunkhash-pre](~@assets/image/webpack-chunkhash-pre.png)
 - 每一个chunk都有一个都有一个独立的hash
 - index.js 和 index.css 打包的 hash 值是一样的，这是因为在 index.js 中引用了 index.css ，打包后他们属于一个chunk
 - 此时我们修改一下add.js，再次打包  
![webpack-chunkhash-aft](~@assets/image/webpack-chunkhash-aft.png)
 - lodash 和 sub.js 文件的打包值这次没有改变

#### contenthash
只有当文件自己的内容发生改变时，其打包的 hash 值才会发生变动
 - 将webpack.config.js 中 MiniCssExtractPlugin 插件chunkhash 改为 contenthash
 - 打包一下，记录一下文件后缀  
![webpack-contenthash-pre](~@assets/image/webpack-contenthash-pre.png)
 - 更改一下add.js  
![webpack-contenthash-aft](~@assets/image/webpack-contenthash-aft.png)
 - index.css hash并没有发生改变

### 思考
#### 我们将webpack.config.js中output也改成contenthash行不行？
最好不要，chunkhash会考虑很多因素，比如模块路径、模块名称、模块大小、模块id等等

#### 参考文献
[https://blog.51cto.com/u_14115828/3733990](https://blog.51cto.com/u_14115828/3733990)
