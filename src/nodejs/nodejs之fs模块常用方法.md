---
date: '1642419524450'
title: nodejs fs 模块
description: nodejs fs 模块的常用方法
tags: [nodejs]
---
### [官方文档](http://nodejs.cn/api/fs.html#file-system)
### 常用的一些方法
 - `fs.access()`: 检查文件是否存在，以及 Node.js 是否有权限访问。
 - `fs.appendFile()`: 追加数据到文件。如果文件不存在，则创建文件。
 - `fs.close()`: 关闭文件描述符。
 - `fs.copyFile()`: 拷贝文件。
 - `fs.mkdir()`: 新建文件夹。
 - `fs.open()`: 设置文件模式?
 - `fs.readdir()`: 读取目录的内容。
 - `fs.readFile()`: 读取文件的内容
 - `fs.realpath()`: 将相对的文件路径指针（.、..）解析为完整的路径。
 - `fs.rename()`: 重命名文件或文件夹。
 - `fs.rmdir()`: 删除文件夹。
 - `fs.stat()`: 返回文件（通过传入的文件名指定）的状态。相关方法：fs.fstat()、fs.lstat()。
 - `fs.writeFile()`: 将数据写入文件。
### fs.stat(path[, options], callback)
异步地获得文件的详细信息
```javascript
const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  stats.isFile()
  stats.isDirectory()
  stats.isSymbolicLink()
  stats.size //1024000 //= 1MB
})
// console.log(stats)
// Stats {
//   dev: 16777220,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096,
//   ino: 14214074,
//   size: 8,
//   blocks: 8,
//   atimeMs: 1561174616618.8555,
//   mtimeMs: 1561174614584,
//   ctimeMs: 1561174614583.8145,
//   birthtimeMs: 1561174007710.7478,
//   atime: 2019-06-22T03:36:56.619Z,
//   mtime: 2019-06-22T03:36:54.584Z,
//   ctime: 2019-06-22T03:36:54.584Z,
//   birthtime: 2019-06-22T03:26:47.711Z
// }
```
::: alert
不推荐在调用`fs.open()`、`fs.readFile()`或`fs.writeFile()`之前使用`fs.stat()`检查文件是否存在。 而是，用户代码应该直接打开/读取/写入文件，并在文件不可用时处理引发的错误。

要检查文件是否存在而不对其进行操作，建议使用`fs.access()`
:::

### others
#### 获取文件夹下面第一层完整的路径
```javascript
const result = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})

// 排除文件夹
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}
const file = result.filter(isFile)
```
#### 删除文件夹
官方推荐使用`fs-extra`模块
