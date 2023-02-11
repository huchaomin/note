---
title: ref 的用法
---

## 可以设置函数

```javascript
ref: (vm) => { if (vm) { childRefs[path] = vm; } },
```

```javascript
function showMenu(proxy) {
  if (proxy !== void 0 && proxy !== rootRef.value) {
    proxy.show !== void 0 && proxy.show();
    const parent = getParentProxy(proxy);
    if (parent !== void 0) {
      showMenu(parent);
    }
  }
}

function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }

  let { parent } = proxy.$;

  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
```
