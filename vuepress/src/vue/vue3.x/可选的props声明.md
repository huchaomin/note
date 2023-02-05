---
date: '1649579807626'
title: vue3 可选的props声明
description: vue3 可选的props声明
tags: [vue]
---
### 可选的props声明
[官方英文markdowm文件](https://github.com/vuejs/rfcs/pull/25/files)

When a component has no `props` declarations, all attributes passed by the parent are exposed in `this.$props`. Unlike declared props, they will NOT be exposed directly on `this`. In addition, in this case `this.$attrs` and `this.$props` will be pointing to the same object.

```vue
<template>
  <div>{{ $props.foo }}</div>
</template>

// If the component has no other options, the entire `<script>` block can be dropped, so the following would be a valid SFC
<script>
export default {}
</script>
```

#### 函数式组件
Similar to stateful components, when props are declared, the `props` arguments will only contain the declared props - attributes received but not declared as props will be in the argument (`attrs`):
``` js
const FunctionalComp = (props, slots, attrs) => {
// const FunctionalComp = (props, { slots, attrs }) => { 难道不是这样吗
  // `attrs` contains all received attributes except declared `foo`
}
FunctionalComp.props = {
  foo: Number
}
```
