---
title: v-bind绑定v-model指令
---

## 有些时候我们希望把v-model指令通过v-bind绑定到组件上

```js
function getBind(obj) {
  const bind = {};
  if (obj.prop) {
    bind.modelValue = formModel[obj.prop];
    bind['onUpdate:modelValue'] = (val) => {
      formModel[obj.prop] = val;
    };
  }
  return bind;
}
```

要通过判断obj.prop判断要不要绑定v-model,此时要不多写一个v-if-else,要不采用上面的方法

```vue
<c-input v-bind="getBind(obj)" />
```

## 此时可以绑定两个update:model-value

```vue
<c-input v-bind="getBind()" @update:model-value="update"></c-input>
```

![onUpdate-modelValue](onUpdate-modelValue.png)
