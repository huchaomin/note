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
