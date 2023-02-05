---
date: '1640833779808'
title: .editorconfig
description: .editorconfig 的作用及详细配置
tags: [editorconfig]
---
### 作用
.editorconfig有助于在不同的编辑器和 IDE 中保持一致的编码样式
```yaml
# 表明这是最顶层的配置文件，这样才会停止继续向上查找 .editorconfig 文件；
# 查找的 .editorconfig 文件是从顶层开始读取的，类似变量作用域的效果，内部
# 的 .editorconfig 文件属性优先级更高
root = true

# 指定作用文件格式
[*]
# 或者[*.{js, jsx, ts, tsx, vue, html}]

# 缩进的类型 [space | tab]
indent_style = space

# 缩进的大小 
# tab_width: 设置整数用于指定替代tab的列数。默认值就是indent_size的值，一般无需指定
indent_size = 2

# 定义换行符 [lf | cr | crlf]
end_of_line = lf

# 编码格式。支持latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用uft-8-bom。
charset = utf-8

# 是否除去换行行首的任意空白字符
trim_trailing_whitespace = true

# 文件是否以一个空白行结尾 [true | false]
insert_final_newline = true
```
#### 参考文献
[https://juejin.cn/post/6844903679993053191](https://juejin.cn/post/6844903679993053191)  
[https://www.jianshu.com/p/ec9564fe1c2b](https://www.jianshu.com/p/ec9564fe1c2b)  
[https://www.jianshu.com/p/8d33019d1c69](https://www.jianshu.com/p/8d33019d1c69)

