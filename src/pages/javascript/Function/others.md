---
title: 函数的其他用法
---

## 执行一个字符串

```javascript
const fnStr = 'function() { console.log(1) }';

Function(`return ${ api }`)()(); // 1
```
