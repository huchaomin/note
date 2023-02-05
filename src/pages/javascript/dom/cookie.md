---
title: cookie
---

- 大小一般为4KB
- 随着HTTP header发送到服务器端
- 通过name = value(需经过encodeURIComponent编码)的形式存储
- 只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
- 在所有同源窗口中都是共享的（与localStorage一样）
- cookie数据还有路径的概念，可以限制cookie只属于某个路径下

## 参考文档

[https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
