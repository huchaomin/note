---
title: useEffect
---

## 让您在渲染后运行一些代码

```jsx
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  // 也可以依赖 props
  // ref 可依赖可不依赖，但是如果是父组件传过来的 ref，那么就必须依赖
  return <video ref={ref} src={src} loop playsInline />;
}
```

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
  // 如果有依赖列表，但是列表中的值和自动收集的依赖值不一样（Object.is比较）eslint会报错
}, [a, b]);
```

## 返回一个函数，以在组件卸载时或者重新运行该effect时运行清理

```jsx
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
```

::: warning
在开发中，React 将立即运行并额外清理一次 Effect。这就是您看到"✅ Connecting..."打印两次, "❌ Disconnected."打印一次的原因（组件还未卸载）。这确保您不会忘记实现清理功能

在生产中不会立即运行并额外清理一次
:::

## 控制非 React 小部件

```jsx
useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
  // 不需要清理
}, [zoomLevel]);

useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
  // 需要清理，生产应该没问题
}, []);
```

## 订阅事件

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 触发动画

```jsx
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```

## 初始化时获取数据

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 🔴 Avoid: Fetching without cleanup logic
    // 而且开发环境会请求两遍
    // 而且query变化时，后请求的接口可能先返回，导致结果错乱
    fetchResults(query, page).then(json => {
      setResults(json);
    });
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

需要添加一个清理函数来忽略陈旧的响应

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
}
```

## 主体中声明的所有变量都是反应式的，如果使用到必须添加到依赖列表中

```jsx
function ChatRoom({ roomId, selectedServerUrl }) { // roomId is reactive
  const settings = useContext(SettingsContext); // settings is reactive
  const serverUrl = selectedServerUrl ?? settings.defaultServerUrl; // serverUrl is reactive
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // Your Effect reads roomId and serverUrl
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // So it needs to re-synchronize when either of them changes!
  // ...
}
```

## 依赖项为对象或函数

```jsx
const options = {};
useEffect(() => {
}, [options]);
// 每次渲染都会重新渲染一次副作用
```

## 使用更新函数删除依赖

```jsx
function ChatRoom({ roomId }) {
const [messages, setMessages] = useState([]);
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  connection.on('message', (receivedMessage) => {
    setMessages([...messages, receivedMessage]);
  });
  return () => connection.disconnect();
}, [roomId, messages]); // 此处不能依赖 messages
```

我们可以传入更新函数

```jsx
function ChatRoom({ roomId }) {
const [messages, setMessages] = useState([]);
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  connection.on('message', (receivedMessage) => {
    // 当然也可以放到 useEffectEvent 里面
    setMessages(msgs => [...msgs, receivedMessage]);
  });
  return () => connection.disconnect();
}, [roomId]);
```

## useEffectEvent 副作用事件处理 （实验特性）

```jsx
import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection, sendMessage } from './chat.js';
import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', onConnected); // theme 不能放在依赖列表中，所以只能写在上面
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
```

### 另一个例子

```jsx
const onVisit = useEffectEvent(visitedUrl => {
  // 调用日志会用到 numberOfItems，所以放到event里面
  logVisit(visitedUrl, numberOfItems);
});
// url 改变时触发日志调用
useEffect(() => {
  onVisit(url);
}, [url]);
```

可不可以这么写呢

```jsx
const onVisit = useEffectEvent(() => {
  logVisit(url, numberOfItems);
});

useEffect(() => {
  onVisit();
}, [url]);
```

上面的写法虽然可以工作但是不推荐，尤其是遇到异步的情况

```jsx
const onVisit = useEffectEvent(() => {
  logVisit(url, numberOfItems);
});

useEffect(() => {
  setTimeout(() => {
    onVisit();
  }, 5000);
}, [url]);
// TODO 此处的url会不会是一样的呢？
```

### 使用方式非常有限

- 只能从 Effects 内部调用它们。
- 永远不要将它们传递给其他组件或 Hooks

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const onTick = useEffectEvent(() => {
    setCount(count + 1);
  });
  useTimer(onTick, 1000); // 🔴 Avoid: Passing Effect Events
  return <h1>{count}</h1>
}

function useTimer(callback, delay) {
  useEffect(() => {
    const id = setInterval(() => {
      callback();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay, callback]); // Need to specify "callback" in dependencies
}
```

相反，始终直接在使用它们的效果旁边声明效果事件

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  useTimer(() => {
    setCount(count + 1);
  }, 1000);
  return <h1>{count}</h1>
}

function useTimer(callback, delay) {
  const onTick = useEffectEvent(() => {
    callback();
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick(); // ✅ Good: Only called locally inside an Effect
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]); // No need to specify "onTick" (an Effect Event) as a dependency
}
```

## 可能不需要的场合

### 例1

```jsx
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
  // 希望userId改变时，comment重置
  useEffect(() => {
    console.log('userId changed!'); // TODO 会打印几次
    setComment('');
  }, [userId]);
}
```

改

```jsx
export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId} // 添加key值
    />
  );
}
```

### 例2

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  // 列表变化时，重置选择，会导致选择闪烁
  useEffect(() => {
    setSelection(null);
  }, [items]);
}
```

改

```jsx
const [prevItems, setPrevItems] = useState(items);
if (items !== prevItems) {
  setPrevItems(items);
  setSelection(null);
}
```

改

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // ✅ Best: Calculate everything during rendering
  const selection = items.find(item => item.id === selectedId) ?? null;
}
```

## 仅在客户端上运行。它们不会在服务器渲染期间运行

```jsx
function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... return client-only JSX ...
  }  else {
    // ... return initial JSX ...
  }
}
```
