---
title: 其他知识点
---

## 多根节点

React Fragment

```jsx
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

::: tip
JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。
:::

## className

```jsx
<img className="avatar" />
```

## [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## [useSWR](https://swr.vercel.app/zh-CN)

## [TanStack Query](https://tanstack.com/query/latest)

## react 脚手架需要注意的地方

- eslint-config-react-app

## jsx 标签

- 小写的为 `HTML` 标签
- 大写的为组件的名称
- 标签必须闭合
- 大部分 HTML 和 SVG 属性都用驼峰式命名法表示
- 由于历史原因，`aria-*` 和 `data-*` 属性是以带 - 符号的 HTML 格式书写的
- 内联 style 属性 使用驼峰命名法编写

    ```html
    <ul style="background-color: black">
    ```

    jsx

    ```jsx
    <ul style={{ backgroundColor: 'black' }}>
    ```

## 如果你的标签和 return 关键字不在同一行，则必须把它包裹在一对括号中

```jsx
// 没有括号包裹的话，任何在 return 下一行的代码都 将被忽略
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

## 不要嵌套组件的定义

```jsx
export default function Gallery() {
  // 🔴 永远不要在组件中定义组件
  function Profile() {
    // ...
  }
  // ...
}
```

## 条件渲染

在 JSX 里，React 会将 false 视为一个“空值”，就像 null 或者 undefined，这样 React 就不会在这里进行任何渲染

JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。然而，如果左侧是 0，整个表达式将变成左侧的值（0），React 此时则会渲染 0 而不是不进行渲染

## 事件

- 在 React 中所有事件都会传播，除了 onScroll，它仅适用于你附加到的 JSX 标签
- `onClickCapture` 捕获阶段触发事件
- `onPointerMove` 鼠标移动事件
