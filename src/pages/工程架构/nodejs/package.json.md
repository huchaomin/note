---
title: package.json
---

## name 设置软件包的名称

- 必须少于 214 个字符
- 不能包含空格
- 只能包含小写字母、连字符（-）或下划线（_）。

## author 软件包的作者名称

```json
{
  "author": "NodeJS中文网 <mail@nodejs.cn> (http://nodejs.cn)"
}
```

```json
{
  "author": {
    "name": "NodeJS中文网",
    "email": "mail@nodejs.cn",
    "url": "http://nodejs.cn"
  }
}
```

## contributors

项目贡献者

## bugs

链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面

## homepage

软件包的主页

## version

指定软件包的当前版本

```json
"version": "1.0.0"
```

此属性遵循版本的语义版本控制记法，这意味着版本始终以 3 个数字表示：x.x.x
第一个数字是主版本号，第二个数字是次版本号，第三个数字是补丁版本号
具有重大更改的是主版本，引入向后兼容的更改的版本是次版本，仅修复缺陷的版本是补丁版本

- ~: 如果写入的是 〜0.13.0，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
- ^: 如果写入的是 ^0.13.0，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。
- *: 如果写入的是*，则表示接受所有的更新，包括主版本升级。
- \>: 接受高于指定版本的任何版本。
- \>=: 接受等于或高于指定版本的任何版本。
- <: 接受低于指定版本的任何版本。
- <=: 接受等于或低于指定版本的任何版本。
- =: 接受确切的版本。
- -: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
- 无符号: 仅接受指定的特定版本。
- latest: 使用可用的最新版本。
还可以在范围内组合以上大部分内容，例如：1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。

## license

软件包的许可证

## keywords

软件包功能相关的关键字数组

## description

对软件包的简短描述

## repository

程序包仓库所在的位置

## main

软件包的入口点
当在应用程序中导入此软件包时，应用程序会在该位置搜索模块的导出

## private

如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上

## scripts

定义一组可以运行的 node 脚本

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

## dependencies

生产依赖安装的 npm 软件包的列表

## devDependencies

开发依赖安装的 npm 软件包的列表

## engines

此软件包/应用程序要运行的 Node.js 或其他命令的版本

```json
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

## browserslist

[用于告知要支持哪些浏览器（及其版本）](../脚手架工具/browserslist.md)

## 特有的属性

package.json 文件还可以承载命令特有的配置，例如 Babel、ESLint 等。

## package-lock.json

作用： [使得每个人的安装依赖版本同步](http://nodejs.cn/learn/the-package-lock-json-file)
