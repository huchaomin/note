---
date: '1641209669689'
title: ES modules
description: ES modules 使用以及注意事项
tags: [ES modules]
---

### ES modules are now available in browsers! They're in
- Safari 10.1.
- Chrome 61.
- Firefox 60.
- Edge 16.

### 必须加上 type=module
```javascript
// utils.mjs
export function addTextToBody(text) {
  const div = document.createElement('div')
  div.textContent = text
  document.body.appendChild(div)
}
```
```html
<script type="module">
  import {addTextToBody} from './utils.mjs'
  addTextToBody('Modules are pretty cool.')
</script>
```

### 必须使用相对或绝对路径，并且带上后缀
```javascript
// Supported:
import {foo} from 'https://jakearchibald.com/utils/bar.mjs';
import {foo} from '/utils/bar.mjs';
import {foo} from './bar.mjs';
import {foo} from '../bar.mjs';

// Not supported:
import {foo} from 'bar.mjs';
import {foo} from 'utils/bar.mjs';
```
::: alert
其他说明符保留供将来使用，例如导入内置模块
:::

### 使用 nomodule 向后兼容
```html
<script type="module" src="module.mjs"></script>  <!-- 现代浏览器 -->
<script nomodule src="fallback.js"></script>  <!-- 非现代且支持nomodule属性的浏览器 -->
```
- Firefox doesn't support nomodule (issue). Fixed in Firefox nightly!
- Edge doesn't support nomodule (issue). Fixed in Edge 16!
- Safari 10.1 doesn't support nomodule. Fixed in Safari 11!

::: tip
这里就有必要考虑支持type="module"不支持nomodule的浏览器，参照https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc
:::

### Defer by default
```html
<script type="module" src="1.mjs"></script>
<script src="2.js"></script>
<script defer src="3.js"></script>
<!--最终顺序 2 > 1 > 3-->
```
> The way scripts block the HTML parser during fetching is bad.  
> With regular scripts you can use defer to prevent blocking, which also delays script execution until the document has finished parsing, and maintains execution order with other deferred scripts.  
> Module scripts behave like defer by default – there's no way to make a module script block the HTML parser while it fetches
> Module scripts use the same execution queue as regular scripts using defer

### Inline scripts are also deferred
```html
<script type="module">
  addTextToBody("Inline module executed");
</script>
<script src="1.js"></script>
<script defer>  
  addTextToBody("Inline script executed");
</script>
<script defer src="2.js"></script>
<!--最终顺序 1 > inline script > inline module > defer script-->
```
> inline module会默认添加defer属性  
> inline script会忽视defer和async属性

### async
```html
<script async type="module">
  import {addTextToBody} from './utils.mjs'
  addTextToBody('Inline module executed.')
</script>
<script async type="module" src="1.mjs"></script>
```
> Async works on external(外部的) & inline modules

> 如果同时指defer和async，async优先于现代浏览器，而支持defer但不支持async的旧版浏览器将回退到defer

### Modules only execute once
```html
<!-- 1.mjs 只执行一次 -->
<script type="module" src="1.mjs"></script>
<script type="module" src="1.mjs"></script>
<script type="module">
  import "./1.mjs";
</script>

<!-- 2.js 执行两次 -->
<script src="2.js"></script>
<script src="2.js"></script>
```

### Always CORS(跨域资源共享)
Unlike regular scripts, module scripts (and their imports) are fetched with CORS.   
This means cross-origin module scripts must return valid CORS headers such as __Access-Control-Allow-Origin: *__
```html
<!-- This will not execute, as it fails a CORS check -->
<script type="module" src="https://….now.sh/no-cors"></script>

<!-- This will not execute, as one of its imports fails a CORS check -->
<script type="module">
  import 'https://….now.sh/no-cors';
  addTextToBody("This will not execute.");
</script>

<!-- This will execute as it passes CORS checks -->
<script type="module" src="https://….now.sh/cors"></script>
```

### 跨域请求的凭证
如果请求来自同一来源，则大多数基于CORS的API都会发送凭据（Cookie等），但是fetch()和模块脚本例外  
但是随着浏览器的更新，这一切都改变了，现在fetch()和模块脚本的行为与其他基于CORS的API相同
```html
<!-- Fetched with credentials (cookies etc) -->
<script src="1.js"></script>

<!-- Fetched with credentials, except in old browsers that follow the old spec -->
<script type="module" src="1.mjs"></script>

<!-- Fetched with credentials, in browsers that follow the old & new spec -->
<script type="module" crossorigin src="1.mjs"></script>

<!-- Fetched without credentials -->
<script type="module" crossorigin src="https://other-origin/1.mjs"></script>

<!-- Fetched with credentials-->
<script type="module" crossorigin="use-credentials" src="https://other-origin/1.mjs"></script>
```
### mime 类型(有待验证)
Unlike regular scripts, modules scripts must be served with one of the valid JavaScript MIME types else they won't
execute.   
The HTML Standard recommends **text/javascript**

#### 参考文献
[https://jakearchibald.com/2017/es-modules-in-browsers/]([https://jakearchibald.com/2017/es-modules-in-browsers/]
)
