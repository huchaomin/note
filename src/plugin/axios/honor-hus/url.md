---
date: '1643687887939'
title: honor-hus 封装 axios 之 url前缀处理 
description: honor-hus 封装 axios 之 url前缀处理
tags: [axios]
---
### honor-hus 封装 axios 之 url前缀处理
```javascript
const apiPrefix = 'hus'

const resolveURL = url => {
  if (url.startsWith('http')) {
    return url
  }
  return `/${apiPrefix}/${url.replace(/^\/+/, '')}`
}
export {
  resolveURL,
}
```
