---
title: glob 导入
---

## 基本用法

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk

```ts
const modules = import.meta.glob('./dir/*.js')
```

```ts
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js'),
}
```

## eager 直接同步引入

```ts
const modules = import.meta.glob('./dir/*.js', { eager: true })
```

```ts
// vite 生成的代码
import * as __glob__0_0 from './dir/foo.js'
import * as __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}
```

### 对导入进行断言

```ts
const modules = import.meta.glob('./dir/*.js', { as: 'raw', eager: true })
```

```ts
// code produced by vite（代码由 vite 输出）
const modules = {
  './dir/foo.js': 'export default "foo"\n',
  './dir/bar.js': 'export default "bar"\n',
}
```

- `{ as: 'url' }` 还支持将资源作为 URL 加载

## 多个匹配模式

```ts
const modules = import.meta.glob(['./dir/*.js', './another/*.js'])
```

## 反面匹配模式

```ts
const modules = import.meta.glob(['./dir/*.js', '!**/bar.js']) // 对顺序没什么要求
```

## 只想要导入模块中的部分内容（具名导入）

```ts
const modules = import.meta.glob('./dir/*.js', { import: 'setup' })
```

```ts
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js').then((m) => m.setup),
  './dir/bar.js': () => import('./dir/bar.js').then((m) => m.setup),
}
```

当与 eager 一同存在时，甚至可以对这些模块进行 tree-shaking

```ts
const modules = import.meta.glob('./dir/*.js', {
  import: 'setup',
  eager: true,
})
```

```ts
// vite 生成的代码
import { setup as __glob__0_0 } from './dir/foo.js'
import { setup as __glob__0_1 } from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}
```

### 加载默认导出

```ts
const modules = import.meta.glob('./dir/*.js', {
  import: 'default',
  eager: true,
})
```

```ts
// vite 生成的代码
import __glob__0_0 from './dir/foo.js'
import __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}
```

## 自定义查询

```ts
const modules = import.meta.glob('./dir/*.js', {
  query: { foo: 'bar', bar: true },
})
```

```ts
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js?foo=bar&bar=true'),
  './dir/bar.js': () => import('./dir/bar.js?foo=bar&bar=true'),
}
```

## 注意

- 这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准
- 该 Glob 模式会被当成导入标识符：必须是相对路径（以 ./ 开头）或绝对路径（以 / 开头，相对于项目根目录解析）或一个别名路径（请看 resolve.alias 选项）
- Glob 匹配是使用 fast-glob 来实现的 —— 阅读它的文档来查阅 支持的 Glob 模式。
- 你还需注意，所有 import.meta.glob 的参数都必须以字面量传入。你 不 可以在其中使用变量或表达式
