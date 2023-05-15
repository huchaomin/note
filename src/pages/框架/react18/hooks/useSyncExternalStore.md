---
title: useSyncExternalStore
---

使您的组件与外部存储同步

有时，您的组件可能需要订阅 React 状态之外的一些数据。
此数据可能来自第三方库或内置浏览器 API。由于此数据可能会在 React 不知情的情况下发生变化，因此您需要手动为您的组件订阅它。这通常通过 Effect 完成，例如

```jsx
function useOnlineStatus() { // 自定义hook
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine);
    }

    updateState();

    window.addEventListener('online', updateState);
    window.addEventListener('offline', updateState);
    return () => {
      window.removeEventListener('online', updateState);
      window.removeEventListener('offline', updateState);
    };
  }, []);
  return isOnline;
}

function ChatIndicator() {
  const isOnline = useOnlineStatus();
  // ...
}
```

React 有一个专门构建的 Hook，用于订阅首选的外部存储

```jsx
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function useOnlineStatus() {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
}
```
