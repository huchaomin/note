---
date: '1641715596645'
title: web 安全
description: web 常见的攻击手段
tags: [xss csrf]
---

### xss(跨站脚本)攻击（Cross-Site Scripting）

[参考链接](https://zhuanlan.zhihu.com/p/129803779)
[vue](https://cn.vuejs.org/v2/guide/security.html)
::: tip
vue 内部使用 Document.createTextNode() 或者 setAttribute 等浏览器原生api转义用户输入的内容  
最佳实践是永远不要向 Vue 挂载可能包含服务端渲染或用户提供的内容
:::

#### 防范
1. 永远不要使用不可信任的模板
```vue
new Vue({
  el: '#app',
  template: `<div>` + userProvidedString + `</div>` // 永远不要这样做
})
```
2. 慎用v-html
```vue
<div v-html="userProvidedHtml"></div>
```
3. 将重要的`cookie`标记为`http only`,  这样的话`Javascript`中的`document.cookie`语句就不能获取到`cookie`了.
4. [注入 URL](https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5-URL)
前后端都需要拦截，`url`的有效性
5. [注入样式](https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5%E6%A0%B7%E5%BC%8F)
`Vue`要在模板内避免渲染`style`标签
6. [注入 JavaScript](https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5-JavaScript)
不鼓励使用`Vue`渲染`<script>`元素,如 `onclick`、`onfocus`和`onmouseenter`的值不推荐使用用户输入的值
7. 采用 [Content Security Policy (CSP：浏览器端指定资源白名单的方式)](https://content-security-policy.com/)


### CSRF（Cross-site request forgery）跨站请求伪造

[参考链接](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)

#### 防范

1. 检查Referer字段

HTTP头中有一个Referer字段，这个字段用以标明请求来源于哪个地址,Referer字段应和请求的地址位于同一域名下

虽然http协议对此字段的内容有明确的规定，
但并无法保证来访的浏览器的具体实现，亦无法保证浏览器没有安全漏洞影响到此字段。
并且也存在攻击者攻击某些浏览器，篡改其Referer字段的可能。

2. 添加校验token

要求在访问敏感数据请求时，要求用户浏览器提供不保存在cookie中，并且攻击者无法伪造的数据作为校验
