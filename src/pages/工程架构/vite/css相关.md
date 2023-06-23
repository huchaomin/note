---
title: vite css相关
---

## 预配置了postcss

- 如果项目包含有效的 PostCSS 配置 (任何受 postcss-load-config 支持的格式，例如 postcss.config.js)，它将会自动应用于所有已导入的 CSS。
- 请注意，CSS 最小化压缩将在 PostCSS 之后运行，并会使用 build.cssTarget 选项

### postcss-import

- 通过 postcss-import 预配置支持了 CSS @import 内联，Vite 的路径别名也遵从 CSS @import
- Sass 和 Less 文件也支持 @import 别名和 URL 变基

## 禁用 CSS 注入页面

在过往的 Vite 3 之中，以默认导入形式导入一个 .css 文件的可能会造成对 CSS 的双重加载。

```javascript
import cssString from './global.css'
```

vite 4 改良

```javascript
import cssString from './global.css?inline'
```

注意：这样写样式会注入到页面

```ts
import './foo.css'
```

## CSS Modules

略

## CSS 预处理器

- 由于 Vite 的目标仅为现代浏览器，因此建议使用原生 CSS 变量和实现 CSSWG 草案的 PostCSS 插件（例如 postcss-nesting）来编写简单的、符合未来标准的 CSS

- 话虽如此，但 Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖

```bash
# .scss and .sass
npm add -D sass

# .less
npm add -D less

# .styl and .stylus
npm add -D stylus
```

## CSS 代码分割

- Vite 会自动地将一个**异步** chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。
- 这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 `<link>` 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.)
- 如果你更倾向于将所有的 CSS 抽取到一个文件中，你可以通过设置 `build.cssCodeSplit` 为 false 来禁用 CSS 代码分割
