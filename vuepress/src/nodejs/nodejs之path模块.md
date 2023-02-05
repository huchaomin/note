---
date: '1642390372278'
title: nodejs path 模块
description: nodejs path 模块初解
tags: [nodejs]
---

### 作用
path模块提供了用于处理文件和目录路径的实用工具

### 系统与路径
 - 在 Linux 和 macOS 上，路径可能类似于`/users/joe/file.txt`  
 - 在 Windows 上则有所不同，具有类似以下的结构`\users\joe\file.txt`

### Windows与POSIX
path模块的默认操作因运行Node.js应用程序的操作系统而异
```javascript
// POSIX
path.basename('C:\\temp\\myfile.html')
// 'C:\\temp\\myfile.html'
```
```javascript
// Windows
path.basename('C:\\temp\\myfile.html')
// 'myfile.html'
```
要在任何操作系统上使用Windows文件路径时获得一致的结果，请使用`path.win32`
```
path.win32.basename('C:\\temp\\myfile.html')
// 'myfile.html'
```
要在任何操作系统上使用POSIX文件路径时获得一致的结果，请使用`path.posix`
```
path.posix.basename('C:\\temp\\myfile.html')
// 'C:\\temp\\myfile.html'
```
### path.basename(path[, ext])
返回path的最后一部分
```javascript
path.basename('/foo/bar/baz/asdf/quux.html')
// 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// 'quux'
```
Windows通常以不区分大小写的方式处理文件名，包括文件扩展名，但此功能不会
```javascript
path.win32.basename('C:\\foo.html', '.html')
// 'foo'
path.win32.basename('C:\\foo.HTML', '.html')
// 'foo.HTML'
```
### path.delimiter
提供特定于平台的路径定界符
 - `;`对于Windows
 - `:`对于POSIX
### path.dirname(path)
返回目录部分
```javascript
path.dirname('C:\\foo.html')
// 'C:\\'
```
### path.extname(path)
返回扩展名
```javascript
path.extname('index.html')
// '.html'
path.extname('index.coffee.md')
// '.md'
path.extname('index.')
// '.'
path.extname('index')
// ''
path.extname('.index')
// ''
path.extname('.index.md')
// '.md'
```
### path.format(pathObject)
```javascript
path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
})
// 'C:\\path\\dir\\file.txt'
```
### path.isAbsolute(path)
确定是否为绝对路径
### path.join([...paths])
使用特定于平台的分隔符作为分隔符将所有给定的段连接在一起，然后对结果路径进行规范化
零长度段将被忽略
```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// '\\foo\\bar\\baz\\asdf'
path.join('/foo', 'bar', 'baz/asdf', 'quux', '.')
// '\\foo\\bar\\baz\\asdf\\quux'
```
### path.normalize(path)
对给定的path进行规范化
```javascript
path.normalize('C:\\temp\\\\foo\\bar\\..\\')
// 'C:\\temp\\foo\\'
```
### path.parse(path)
```javascript
path.parse('C:\\path\\dir\\file.txt')
// {
//  root: 'C:\\',
//  dir: 'C:\\path\\dir',
//  base: 'file.txt',
//  ext: '.txt',
//  name: 'file'
// }
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// " C:\      path\dir   \ file  .txt "
// └──────┴──────────────┴──────┴─────┘
```
### path.relative(from, to)
```javascript
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
// Returns: '../../impl/bbb'
```
### path.resolve([...paths])
 - 将一系列路径或路径段解析为绝对路径
 - 从右到左处理,直到构造出绝对路径为止
 - 处理到最后如果尚未生成绝对路径，则使用当前工作目录
```javascript
path.resolve('/foo/bar', './baz')
// '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// If the current working directory is /home/myself/node,
// '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
### path.sep
提供特定于平台的路径段分隔符
 - `\` 在Windows上
 - `/` 在POSIX上
```
// posix
'foo/bar/baz'.split(path.sep)
// ['foo', 'bar', 'baz']

// Windows
'foo\\bar\\baz'.split(path.sep)
// ['foo', 'bar', 'baz']
```
::: tip
在Windows上，正斜杠（/）和反斜杠（\）均被接受为路径段分隔符。但是，这些path方法仅添加反斜杠（\）
:::
