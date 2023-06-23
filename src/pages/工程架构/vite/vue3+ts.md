---
title: vue3 + ts 搭建流程
---

## 初始化

```bash
pnpm create vite
```

此时package.json中的依赖如下：

```json
{
  "name": "vite-vue-ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.47"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.1.0",
    "typescript": "^5.0.2",
    "vite": "^4.3.9",
    "vue-tsc": "^1.4.2"
  }
}
```

## 编辑器配置

### 安装插件

TypeScript cannot handle type information for `.vue` imports by default,
so we replace the `tsc` CLI with `vue-tsc` for type checking.
In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types

### Disable the built-in TypeScript Extension(take over mode)

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
3. Reload

::: warning
请注意，Vite 仅执行 .ts 文件的转译工作，并不执行 任何类型检查
:::
