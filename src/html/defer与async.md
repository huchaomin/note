---
date: '1641257636565'
title: defer async
description: script标签defer async使用详解
tags: [html]
---

### 立即执行的脚本
浏览器会立即加载并执行指定的脚本  
“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行
```html
<script src="script.js"></script>
```

### defer
告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。  
脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行
-  `defer` ----> `DOMContentLoaded`(事件在文档完全加载和解析后触发，无需等待样式表、图像和子框架完成加载) ----> `load`
- `DOMContentLoaded` 事件处理程序等待具有 `defer` 特性的脚本执行完成。它仅在脚本下载且执行结束后才会被触发
- **具有`defer`特性的脚本会并行下载，并顺序执行**
- `defer` **特性仅适用于外部脚本**（如果 `<script>` 脚本没有 `src`，则会忽略 `defer` 特性）

### async
- 浏览器不会因 `async` 脚本而阻塞（与 `defer` 类似）。
- 其他脚本不会等待 `async` 脚本加载完成，同样，`async` 脚本也不会等待其他脚本。
- `DOMContentLoaded` 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
- `DOMContentLoaded` 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）
- 当我们将独立的第三方脚本集成到页面时，此时采用异步加载方式是非常棒的：计数器，广告等，因为它们不依赖于我们的脚本，我们的脚本也不应该等待它们

![defer-async](~@assets/image/defer-async.png)

### 动态脚本
 - 当脚本被附加到文档时，脚本就会立即开始加载  
 - 默认情况下，动态脚本的行为是“异步”的

<<< src/assets/demo/append-none-async-script/index.html

不设置`script1.async = false`,结果为3，1，2或者3，2，1(没有顺序)  
设置`script1.async = false`,结果为3，1，2
     
