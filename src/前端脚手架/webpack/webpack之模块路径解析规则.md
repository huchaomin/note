---
date: '1641170156364'
title: webpack 文件引入路径
description: webpack 文件引入路径解析规则
tags: [webpack]
---

::: tip
当打包模块时，webpack 使用 enhanced-resolve 来解析文件路径
:::

### 绝对路径
由于已经获得文件的绝对路径，因此不需要再做进一步解析
```javascript
import '/home/me/file'
import 'C:\\Users\\me\\file'
```

### 相对路径
使用 import 或 require 的资源文件所处的目录，被认为是上下文目录。  
在 import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径
```javascript
import '../src/file1'
import './file2'
```

### 模块路径
```javascript
import 'module'
import 'module/lib/file'
```
1. 如果 package 中包含 package.json 文件，那么在 resolve.exportsFields 配置选项中指定的字段会被依次查找，
package.json 中的第一个字段会根据 package 导出指南确定 package 中可用的 export。  

一旦根据上述规则解析路径后，resolver 将会检查路径是指向文件还是文件夹。如果路径指向文件：

2. 如果文件具有扩展名，则直接将文件打包。
3. 否则，将使用 resolve.extensions 选项作为文件扩展名来解析，此选项会告诉解析器在解析中能够接受那些扩展名（例如 .js，.jsx）。

如果路径指向一个文件夹，则进行如下步骤寻找具有正确扩展名的文件：

4. 如果文件夹中包含 package.json 文件，则会根据 resolve.mainFields 配置中的字段顺序查找，并根据 package.json 中的符合配置要求的第一个字段来确定文件路径。
5. 如果不存在 package.json 文件或 resolve.mainFields 没有返回有效路径，则会根据 resolve.mainFiles 配置选项中指定的文件名顺序查找，看是否能在 import/require 的目录下匹配到一个存在的文件名。
6. 然后使用 resolve.extensions 选项，以类似的方式解析文件扩展名。

### 关于缓存
每次文件系统访问文件都会被缓存，以便于更快触发对同一文件的多个并行或串行请求。  
在 watch 模式 下，只有修改过的文件会被从缓存中移出。如果关闭 watch 模式，则会在每次编译前清理缓存。
