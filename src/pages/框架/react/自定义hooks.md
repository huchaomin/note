---
title: 自定义hooks
---

## 什么是自定义hooks

自定义hooks是一个函数，其名称以“use”开头，函数内部可以调用其他的hooks。

## 自定义hooks的使用场景

1. 多个组件之间共享逻辑
2. 复杂组件的分割

## 自定义hooks的使用规则

1. 只能在函数最外层调用hooks，不要在循环、条件判断或者子函数中调用
2. 只能在React的函数组件中调用hooks，不要在其他的JavaScript函数中调用

## 简单的例子

usePointerPosition.js

```jsx
import { useState, useEffect } from 'react';

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
  return position;
}
```

useDelayedValue.js

```jsx
import { useState, useEffect } from 'react';

export function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}
```

### ajax 请求

```jsx
function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(`/api/search?${params}`);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
```
