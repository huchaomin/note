---
date: '1640871800124'
title: vue.config.js 其他
description: vue-cli vue.config.js 杂碎知识
tags: [vue-cli]
---
- url-loader 将小于 4kb 的资源内联，以减少 HTTP 请求的数量
- 如果 URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析
```vue
// html
<img alt="Vue logo" src="@/assets/img/logo.png">

// css (css-loader)
background: url('~@/assets/img/logo.png');
```
- 本地预览dist
```shell
npm install -g serve
serve -s dist
# -s 参数的意思是将其架设在 Single-Page Application 模式下
# 这个模式会处理即将提到的路由问题(history模式下，将任何没有匹配到静态文件的请求回退到 index.html)
```
- 使用环境变量
```shell
VUE_APP_* | NODE_ENV | BASE_URL
# .env 文件里面配置的环境变量只有以VUE_APP开头的才会被vue-cli使用
```





