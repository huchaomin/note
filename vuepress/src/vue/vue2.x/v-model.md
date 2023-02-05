---
date: '1642659517312'
title: vue v-model
description: vue v-model 使用
tags: [vue]
---

### v-model 作用
默认emit 'input' event， receive 'value' prop

### 自定义v-model
#### 默认
```vue
<template>
  <div>
    <input 
      type="text" 
      :value="value" 
      @input="$emit('input',$event.target.value)">
    <textarea 
      cols="30" rows="10" 
      :value="value" 
      @change="$emit('input',$event.target.value)">
    </textarea>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>
```

#### emit 'change' event， receive 'checked' prop
```vue
<template>
  <div>
    <input 
      type="text" 
      :value="checked" 
      @input="$emit('change',$event.target.value)">
    <span>{{ checked }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: ['checked'],
}
</script>
```

