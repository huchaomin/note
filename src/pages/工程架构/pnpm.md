---
title: pnpm 的基本用法
---

## 升级 pnpm

```bash
npm rm -g pnpm
npm add -g pnpm
```

## pnpm add -g xxx 'Unable to find the global bin directory xxx' 解决办法

### 找到npm下的pnpm

![npm-path](npm-path.png)

### 找到node_modules里面的bin目录

![pnpm-bin](pnpm-bin.png)

将其添加到环境变量中即可

## 切换node版本

首先Windows安装pnpm，前提是不能安装nodejs

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

切换版本

```bash
pnpm env use --global 14
```

::: warning
此时如果使用npm命令运行项目，运行完以后，如果再切换node版本，会报错，需要删掉pnpm,重新上一步骤

推荐使用nvm-windows
:::
