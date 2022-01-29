---
date: '1642659336368'
title: vue v-for
description: vue v-for 循环
tags: [vue]
---

### 1. 遍历数组
```javascript
v-for="(i,j) in/of posts"
// i 是值 j 是下标
```

### 2. 遍历对象
```javascript
v-for="(i,j,n) in/of posts"
// i 是值 j 是键名 n 是下标
```

#### 关于遍历对象的顺序
1. 会先判断是否有iterator接口，如果有循环执行next()方法
2. 没有iterator的情况下，会调用`Object.keys()`方法，在不同浏览器中，JS 引擎不能保证输出顺序一致
