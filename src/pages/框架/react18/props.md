---
title: props
---

## 默认值

```jsx
function Avatar({ person, size = 100 }) {
  // 在缺少 size prop 或 size ==== undefined 时生效
}
```

## 展开语法传递 props

```jsx
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

## children

```jsx
<Card>
  <Avatar />
</Card>
```

```jsx
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

## Immutable

`props` 是 `configurable:false` (待验证)。当一个组件需要改变它的 props（例如，响应用户交互或新数据）时，它不得不“请求”它的父组件传递 不同的 props —— 一个新对象！它的旧 props 将被丢弃，最终 JavaScript 引擎将回收它们占用的内存。
