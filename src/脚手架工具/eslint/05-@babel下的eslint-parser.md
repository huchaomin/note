---
date: '1641551635837' 
title: babel下的eslint-parser
description: babel下的eslint-parser 粗解
tags: [babel eslint-parser]
---
### eslint 默认 parser
只转换 js，默认支持 ES5 的语法，可以通过制定 parserOptions 给 Espree 传递如下选项  
ESLint 官方文档中的 parserOptions 只适用 Espree 解析器
```javascript
"parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
      "jsx": true
    }
}
```
::: alert
ecmaVersion 可以开启更高 ES 版本的校验（已加入ES标准的语法，不包括实验性的语法）  
但需要注意的是一些新标准中的语法对 ESLint 的版本也有要求，如果发现ESLint 不支持校验，可能需要升级 ESLint 版本
:::

### @babel/eslint-parser
::: tip
ESLint的默认解析器和核心规则仅支持最新的最终 ECMAScript 标准，  
不支持 Babel 提供的实验性（例如新功能）和非标准（例如Flow或TypeScript类型）语法。  
@babel/eslint-parser 是允许 ESLint 在由 Babel 转换的源代码上运行的解析器
:::
 - 该 parser 允许你使用 ESLint 校验所有 babel code
 - 如果你使用该解析器，还要使用 babel
 - 当你使用 babel 时，babel 的解析器会把你的 code 转换为 AST，该解析器会将其转换为 ESLint 能懂的 ESTree
 - 该 praser 的 parserOptions 默认配置如下
```javascript
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: true, // 是否需要 babel 配置文件
    sourceType: "module", // script 或者 module
    allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
    ecmaFeatures: {
      globalReturn: false, // 设置为 true，当 sourceType 为 script 时，允许全局 return
    },
    babelOptions: {
      configFile: "path/to/config.js", // babel 的配置文件，可以不传
    },
  },
}
```
