---
date: '1642411126338'
title: nodejs fs 模块
description: nodejs fs 模块入门
tags: [nodejs]
---
### [官方文档](http://nodejs.cn/api/fs.html#file-system)
### 作用
支持以标准POSIX函数为模型的方式与文件系统进行交互

### 所有fs操作都可以使用 CommonJS 语法和 ES6 模块进行访问
```javascript
// 要使用基于 promise 的 API
import * as fs from 'fs/promises'
const fs = require('fs/promises')

// 要使用回调和同步的 API
import * as fs from 'fs'
const fs = require('fs')
```

### 所有fs操作都具有同步，回调和基于promise的形式
同步
```javascript
const fs = require('fs')
try {
  fs.unlinkSync('/tmp/hello')
  console.log('successfully deleted /tmp/hello')
} catch (err) {
  // handle the error
}
```
异步
```javascript
//  第一个参数始终为异常保留。如果操作成功完成，则第一个参数为null或undefined
const fs = require('fs')
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err
  console.log('successfully deleted /tmp/hello')
})
```
promise
```javascript
const fs = require('fs/promises')
(async function(path){
  try {
    await fs.unlink(path)
  } catch (err) {
    // handle the error
  }
})('/tmp/hello')
```
::: alert
Promise API 和 回调的 API 使用底层的 Node.js 线程池在事件循环线程之外执行文件系统操作。这些操作不是同步的也不是线程安全的。 对同一文件执行多个并发修改时必须小心，否则可能会损坏数据。

同步的 API 同步地执行所有操作，阻塞事件循环，直到操作完成或失败。
:::

### 文件路径
大多数 fs 操作接受可以以`字符串`、`<Buffer>`或使用`file: 协议的 <URL>`对象的形式指定的文件路径

[参考官方文档](http://nodejs.cn/api/fs.html#file-paths)

### 文件描述符
#### 定义
在POSIX系统上，对于每个进程，内核都会维护一个当前打开的文件和资源的表。
每个打开的文件都分配有一个简单的数字标识符，称为文件描述符。
 
在系统级别，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定文件。  
Windows系统使用不同但概念上类似的机制来跟踪资源。  

为了简化用户操作，Node.js提取了操作系统之间的特定差异，并为所有打开的文件分配了数字文件描述符。
#### 使用
 - 基于回调的`fs.open()`和同步`fs.openSync()`方法打开一个文件并分配一个新的文件描述符。 分配后，文件描述符可用于从文件读取数据、向文件写入数据或请求有关文件的信息。
```javascript
fs.open('/open/some/file.txt', 'r', (err, fd) => {
  // 'r' 为文件系统标志
  // fd 是文件描述符
  if (err) throw err
  fs.fstat(fd, (err, stat) => {
    if (err) throw err
    // use stat
    fs.close(fd, (err) => {
      if (err) throw err
    })
  })
})
```
 - 基于 promise 的 API 使用`<FileHandle>`对象代替数字文件描述符。 这些对象由系统更好地管理，以确保资源不泄漏。
 - 读数将从当前位置开始。例如，如果文件已经有内容 'Hello World' 并且使用文件描述符读取了六个字节，则使用相同文件描述符调用 fs.readFile() 将返回 'World' 而不是 'Hello World'。
::: alert
操作系统限制在任何给定时间可能打开的文件描述符的数量，因此在操作完成时关闭描述符至关重要。 否则将导致内存泄漏，最终导致应用程序崩溃。
:::

### 文件系统标志
[官方文档](http://nodejs.cn/api/fs.html#file-system-flags)
