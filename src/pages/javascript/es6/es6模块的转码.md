---
title: es6模块的转码
---
## Babel

略

## ES6 module transpiler

是 square 公司开源的一个转码器，可以将 ES6 模块转为 CommonJS 模块或 AMD 模块的写法，从而在浏览器中使用。
安装

```sh
npm install -g es6-module-transpiler
```

将 ES6 模块文件转码

```sh
compile-modules convert file1.js file2.js
```

## SystemJS

它是一个垫片库（polyfill），可以在浏览器内加载 ES6 模块、AMD 模块和 CommonJS 模块，将其转为 ES5 格式。它在后台调用的是 Google 的 Traceur 转码器。
先在网页内载入system.js文件。

```html
<script src="system.js"></script>
```

使用System.import方法加载模块文件

```html
<script>
  System.import('./app.js') // 可以自动转码
</script>
```

System.import使用异步加载，返回一个Promise对象，可以针对这个对象编程。

```javascript
// app/es6-file.js:
export class q {
  constructor() {
    this.es6 = 'hello'
  }
}
```

```html
<script>
System.import('app/es6-file').then(function(m) {
  console.log(new m.q().es6) // hello
})
</script>
```
