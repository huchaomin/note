---
date: '1652009094541'
title: jsconfig.json
description: jsconfig.json 的作用及详细配置
tags: [tools]
---
### jsconfig.json 的作用及详细配置
[官方文档](https://code.visualstudio.com/docs/languages/jsconfig)
#### 什么是jsconfig.json
目录中存在jsconfig.json文件表示该目录是JavaScript项目的根目录
jsconfig.json文件指定根文件和JavaScript语言服务提供的功能选项。

::: tip
如果您不使用JavaScript，则无需担心jsconfig.json

jsconfig.json源于tsconfig.json，是TypeScript的配置文件。jsconfig.json相当于tsconfig.json的“allowJs”属性设置为true
:::

#### 为什么我需要一个jsconfig.json文件
Visual Studio Code的JavaScript支持可以在两种不同的模式下运行：
 - 文件范围 - 没有jsconfig.json：在此模式下，在Visual Studio Code中打开的JavaScript文件被视为独立单元。 只要文件a.js没有显式引用文件b.ts（使用///引用指令或CommonJS模块），两个文件之间就没有共同的项目上下文。
 - 显式项目 - 使用jsconfig.json：JavaScript项目是通过jsconfig.json文件定义的。 目录中存在此类文件表示该目录是JavaScript项目的根目录。 文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项。

#### 例子
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": [
    "src/**/*"
  ]
}
```
