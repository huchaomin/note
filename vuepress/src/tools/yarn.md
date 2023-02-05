---
date: '1641628799216' 
title: yarn 的基础用法 
description: yarn 的基础用法 
tags: [yarn]
---
### 初始化
```shell
yarn init
```

### 添加依赖包
```shell
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 添加到不同依赖项类别中
```shell
yarn add [package] --dev	// devDependencies
yarn add [package] --peer	// peerDependencies 
yarn add [package] --optional	// optionalDependencies 
```

### 升级
```shell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 移除
```shell
yarn remove [package]
```

### 安装项目的全部依赖
```shell
yarn
// 或者
yarn install
```
