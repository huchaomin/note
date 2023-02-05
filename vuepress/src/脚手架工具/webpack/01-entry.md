---
date: '1641126989606'
title: webpack entry
description: webpack entry 详解
tags: [webpack]
---

### 字符串
```javascript
entry: './path/to/my/entry/file.js'
// 此时output的name为main
```

### 数组
一次注入多个依赖文件，并且将它们的依赖关系绘制在一个 "chunk" 中
```javascript
entry: [
  './src/file_1.js',
  './src/file_2.js'
]
```

### 对象
```javascript
entry: {
  main: './path/to/my/entry/file.js'
}
// 此时output的name为main
```
```javascript
entry: {
  app: './src/app.js',
  adminApp: './src/adminApp.js'
}
// 两个chunk
```

### 多页面应用程序:三个独立分离的依赖图
```javascript
entry: {
  pageOne: './src/pageOne/index.js',
  pageTwo: './src/pageTwo/index.js',
  pageThree: './src/pageThree/index.js'
}
```

### 为特定的入口指定一个自定义的输出文件名
```javascript
entry: { 
  app: {
    import: './index.js',
    filename: 'pages/[name][ext]'
  }
  // 最终dist/pages/app.js
},
```
### dependOn
```javascript
entry: { 
  // dependOn 选项你可以与另一个入口 chunk 共享模块
  // app 这个 chunk 就不会包含 react-vendors 拥有的模块了
  app: { import: './index.js', dependOn: 'react-vendors' },
  'react-vendors': ['react', 'react-dom', 'prop-types']
},
entry: {
  moment: { import: 'moment-mini', runtime: 'runtime' },
  reactvendors: { import: ['react', 'react-dom'], runtime: 'runtime' },
  testapp: {
    import: './wwwroot/component/TestApp.tsx',
    dependOn: ['reactvendors', 'moment'],
  },
},
 entry: {
  app: { import: ['./app.js', './app2.js'], dependOn: 'react-vendors' },
  'react-vendors': ['react', 'react-dom', 'prop-types']
}
```
