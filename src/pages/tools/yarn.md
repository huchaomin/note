---
title: yarn 的基础用法
---
## 初始化

```sh
yarn init
```

## 添加依赖包

```sh
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

## 添加到不同依赖项类别中

```sh
yarn add [package] --dev // devDependencies
yarn add [package] --peer // peerDependencies
yarn add [package] --optional // optionalDependencies
```

## 升级

```sh
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

## 移除

```sh
yarn remove [package]
```

## 安装项目的全部依赖

```sh
yarn
// 或者
yarn install
```
