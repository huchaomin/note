---
title: vite 其他知识点
---

## JSON 可以被直接导入 —— 同样支持具名导入

```ts
// 导入整个对象
import json from './example.json'
// 对一个根字段使用具名导入 —— 有效帮助 treeshaking！
import { field } from './example.json'
```

## 动态导入

```ts
const module = await import(`./dir/${file}.js`) // file仅代表一层深的文件名
```

## 预加载指令生成 // TODO

Vite 会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 `<link rel="modulepreload">` 指令

## 刷新预构建

- 启动开发服务器时指定 `--force`
- 手动删除 `node_modules/.vite` 缓存目录

## import.meta\u200b.env

- MODE
- BASE_URL
- PROD
- DEV
- SSR

不想被替换

### js中可以使用 unicode 零宽度空格

```js
let a = 'import.meta\u200b.env.MODE'
```

### 对于 Vue 模板或其他编译到 JavaScript 字符串的 HTML

```html
import.meta.<wbr>env.MODE
```

## .env 文件

[官方文档](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)

## manifest.json

```json
{
  "main.js": {
    "file": "assets/main.4889e940.js",
    "src": "main.js",
    "isEntry": true,
    "dynamicImports": ["views/foo.js"],
    "css": ["assets/main.b82dbe22.css"],
    "assets": ["assets/asset.0ab0f9cd.png"]
  },
  "views/foo.js": {
    "file": "assets/foo.869aea0d.js",
    "src": "views/foo.js",
    "isDynamicEntry": true,
    "imports": ["_shared.83069a53.js"]
  },
  "_shared.83069a53.js": {
    "file": "assets/shared.83069a53.js"
  }
}
```

- 清单是一个 `Record<name, chunk>` 结构的对象。
- 对于 入口 或动态入口 chunk，键是相对于项目根目录的资源路径。
- 对于非入口 chunk，键是生成文件的名称并加上前缀 _。
- Chunk 将信息包含在其静态和动态导入上（两者都是映射到清单中相应 chunk 的键)，以及任何与之相关的 CSS 和资源文件
- [可以通过这份清单文件，生成用于预渲染的 HTML 字符串，并替换 `<!--preload-links-->` 占位符](https://juejin.cn/post/7072272115470172190)
