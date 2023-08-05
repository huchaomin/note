---
title: vite.config.ts 配置一览
---

## 同步配置

```typescript
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: process.cwd(), // 项目根目录(index.html 文件所在的位置)
  base: '/', // 部署时的基本 URL,配置了该项等于配置了import.meta.env.VITE_BASE_URL
  mode: 'development', // 开发模式,在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。也可以通过命令行 --mode 选项来重写
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: { // 有些依赖不能被vite找到，需要手动指定（比如import指令是编译后生成的）
    // 链接依赖在预构建时主动转换为esm
    // 如果依赖项很大（包含很多内部模块）或者是 CommonJS
    include: ['linked-dep'],
    // 如果依赖项很小，并且已经是有效的 ESM
    exclude: ['dep-a'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    }
  },
  build: {
    // 在 outDir 中生成 manifest.json
    manifest: true,
    cssCodeSplit: true, // 在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时一并获取, 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      input: { // 入口文件
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
      output: {
        manualChunks: { // 自定义 chunk 分割策略
        },
      },
      lib: { // 构建库
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'lib/main.js'),
        name: 'MyLib',
        // the proper extensions will be added
        fileName: 'my-lib', // 输出文件名
      },
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',
      },
    },
  },
})
```

## 异步配置和获取配置参数

```typescript
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(async ({ command, mode }) => {
  const data = await asyncFunction()

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '') // 在配置中获取环境变量
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV,
      // String 值会以原始表达式形式使用，所以如果定义了一个字符串常量，它需要被显式地打引号。（例如使用 JSON.stringify）
      API_PREFIX: JSON.stringify(apiPrefix), // const apiPrefix = 'basic'
      API_PREFIX: '"basic"',
      // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
      // 如果你想暴露一个不含前缀的变量，可以使用 define 选项：
      // https://cn.vitejs.dev/config/shared-options.html#envprefix
      'import.meta.env.ENV_VARIABLE': JSON.stringify(process.env.ENV_VARIABLE),
    },
  }
})
```
