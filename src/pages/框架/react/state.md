---
title: state
---

## 快照

```jsx
const [score, setScore] = useState(0);

function increment() {
  setScore(score + 1);
  console.log(score);
}

increment(); // 0
increment(); // 0
increment(); // 0
// 在渲染请求之前 score 一直等于 0，最终渲染结果为 1
```

改进：在下次渲染前多次更新同一个 state

```jsx
function increment() {
  setScore(s => s + 1); //更新器函数
  console.log(score); // 0 0 0，最终渲染结果为 3
}
```

一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的

React 会使 state 的值始**固定**在一次渲染的各个事件处理函数内部。 你无需担心代码运行时 state 是否发生了变化。

```jsx
const [number, setNumber] = useState(0);

return (
  <>
    <h1>{number}</h1>
    <button onClick={() => {
      setNumber(number + 5);
      setTimeout(() => {
        alert(number); // 每次获取的number都是setNumber触发时的快照 0 5 ...
      }, 3000);
    }}>+5</button>
  </>
)
```

## 更新状态中的对象

```jsx
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

function handleTitleChange(e) {
  setPerson({ // 用一个新对象进行替换
    ...person,
    artwork: {
      ...person.artwork,
      title: e.target.value
    }
  });
}
```

### [use-immer](https://github.com/immerjs/use-immer)

```jsx
import { useImmer } from 'use-immer';

const [person, updatePerson] = useImmer({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

function handleNameChange(e) {
  updatePerson(draft => {
    draft.name = e.target.value;
  });
}

function handleTitleChange(e) {
  updatePerson(draft => {
    draft.artwork.title = e.target.value;
  });
}
```

### 数组也是如此

```jsx
const [list, setList] = useState(
  initialList
);

function handleToggle(artworkId, nextSeen) {
  setList(list.map(artwork => { // 新的数组
    if (artwork.id === artworkId) {
      return { ...artwork, seen: nextSeen };
    } else {
      return { ...artwork }; // 此处应用原数组的对象，不行
    }
  }));
}
```

## 更新队列

```jsx
const [number, setNumber] = useState(0);

return (
  <>
    <h1>{number}</h1>
    <button
      onClick={() => {
        setNumber(number + 5);
        alert(number); // 0
        setNumber((n) => n + 1);
        alert(number); // 0
        setNumber((n) => n + 2);
        alert(number); // 0
      }}
    >
      增加数字
    </button>
  </>
);
// 5 6 8 最终为 8
```

```jsx
onClick={() => {
  setNumber((n) => n + 1);
  setNumber(number + 5);
  setNumber((n) => n + 2);
}}
// 1 5 7 最终为 7
```

```jsx
onClick={() => {
  setNumber((n) => n + 1);
  setNumber((n) => n + 2);
  setNumber(number + 5);
}}
// 1 3 5 最终为 5
```

你品，你细品

## 计算状态

```jsx
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const fullName = firstName + ' ' + lastName; // 每次组件更新都会从新计算fullName

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}
```

## 保留和重置状态

App.js

```jsx
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}
// key 值的改变会帮助我们重置状态，可以理解为重新渲染该组件
```

::: tip
相同位置的相同组件会使得 state 被保留下来
对 React 来说重要的是组件在 UI 树中的位置,而不是在 JSX 中的位置
:::

## 作为state的初始值

```jsx
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor); // 仅仅作为初始值
```

`messageColor` 变化时 `color` 状态变量将不会更新
