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

## 自定义hooks的实现

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
