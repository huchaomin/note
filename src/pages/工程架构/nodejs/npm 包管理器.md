---
title: npm 包管理器
---

## 下载

安装所有依赖

```sh
# 如果项目具有 package.json 文件
npm install
npm install --production # 只安装dependencies下面的包
```

安装单个软件包

```sh
npm install <package-name>
```

- \-\-save 安装并添加条目到 package.json 文件的 dependencies。
- \-\-save-dev 安装并添加条目到 package.json 文件的 devDependencies。
- devDependencies 通常是开发的工具（例如测试的库）
- dependencies 则是与生产环境中的应用程序相关

更新软件包

```sh
npm update
npm update <package-name>
```

## 运行任务

```sh
npm run <task-name> # start-dev or start

# package.json
# {
#   "scripts": {
#     "start-dev": "node lib/server-development",
#     "start": "node lib/server-production"
#   }
# }
```

## 安装npm包

### npm 将软件包安装到哪里

```sh
npm install lodash # 当前node_modules 子文件夹下、dependencies中
npm install -g lodash #全局node_modules 子文件夹下
npm root -g # 全局的位置(C:\Users\hwx927218\AppData\Roaming\npm\node_modules)
```

### 查看 npm 包安装的版本

所有依赖

```sh
npm list
npm list -g # 全局
npm list --depth=0 # 仅查看顶层（也就是package.json里面的）
npm list -g --depth=0 # 仅查看全局顶层
npm list <package-name> # 特定包的版本(也适用于依赖包)
```

### 查看包的远程版本

```sh
npm view [package_name] version # 最新版
npm view [package_name] versions # 所有历史版本
```

### 安装 npm 包的固定版本

使用'@'符号安装固定版本

```sh
npm install <package-name>@<version>
npm install -g <package-name>@<version>
```

## 更新包

```sh
npm update # package.json不会改变，package-lock.json可能会改变
npm install # 同上
npm outdated # 查看哪些顶层包有更新
```

强制包所有的包更新到最新（包括主版本，不推荐）

```sh
npm install -g npm-check-updates
ncu -u
npm update # 更推荐 rimraf node_modules,然后npm install
```

## 卸载包

```sh
npm uninstall <package-name> # 卸载包，不改变package.json
npm uninstall <package-name> --save # 卸载包，改变package.json中的dependencies
npm uninstall <package-name> --save-dev # 卸载包，改变package.json中的devDependencies
npm uninstall -g <package-name> # 卸载全局的包
```

## npx

### 产生的原因

包的开发者通常喜欢将命令全局安装（为了方便），然后又不止开发了一个包，然后每个包运行相同命令，命令的版本不一样，这就很蛋疼了

### 作用

运行 `npx <command-name>` 会自动地在项目的 node_modules 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包。

不需要安装任何东西。

```sh
#  我电脑没有安装npx和cowsay
npx cowsay "你好"
#  自动全局安装和npm相同版本的npx
#  下载cowsay
#  执行上面的命令
#  卸载cowsay
```

### 场景

```sh
npx vue create my-vue-app # 运行 vue CLI 工具以创建新的应用程序并运行它们
npx create-react-app my-react-app # 使用 create-react-app 创建新的 React 应用
```

可以使用 @version 语法运行同一命令的不同版本

```sh
npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1
```

直接从 URL 运行任意代码片段

```sh
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```
