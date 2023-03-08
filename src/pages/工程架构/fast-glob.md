---
title: fast-glob 用法
---

## 作用

打包工具常用的 glob 匹配工具

[官方文档](https://github.com/mrmlnc/fast-glob#pattern-syntax)
[micromatch](https://github.com/micromatch/micromatch)

## 用法

::: warning
Always use forward-slashes(正斜杠) in glob expressions (patterns and ignore option).
Use backslashes(反斜杠) for escaping characters.
:::

| 语法 | 说明 |
| --- | --- |
| `*` | 匹配任意字符,但不包括斜杠（路径分割符）和隐藏文件（命名以`.`开头） |
| `**` | 匹配0或者多个目录 |
| `?` | 匹配任意单个字符，但不包括斜杠（路径分割符） |
| `\\` | 转义字符 $^*+?()[] |
| `[[:digit:]]` | [匹配数字](https://github.com/micromatch/picomatch#posix-brackets) |
| `?(pattern-list)` | [匹配0或者1个pattern-list中的字符](https://github.com/micromatch/micromatch#extglobs) |
| `{}` | [匹配多个字符](https://github.com/micromatch/braces) |
| `[1-5]` | [匹配1-5的字符](https://github.com/micromatch/micromatch#regex-character-classes) |
| `(a|b)` | [匹配a或者b](https://www.regular-expressions.info/brackets.html) |

## 例子

| 语法 | 说明 |
| --- | --- |
| `cellRender/**.vue` 或 `cellRender/*.vue` | 只能匹配下层文件 |
| `cellRender/*/*.vue` 或 `cellRender/*/**.vue` | 只能匹配下下层文件 |
| `cellRender/**/*.vue` | 匹配所有层级文件 |
| `src/*.??` | 匹配下层且拓展名为两位的文件 |
| `file-[01].js` | 匹配 file-0.js 和 file-1.js |
| `src/**/*.{css,scss}` | 匹配 src 下所有 css 和 scss 文件 |
| `file-[[:digit:]].js` | 匹配 file-0.js, file-1.js, .... ,file-9.js |
| `file-{1..3}.js` | 匹配 file-1.js, file-2.js, file-3.js |
| `file-(1|2)` | 匹配 file-1.js 和 file-2.js |
