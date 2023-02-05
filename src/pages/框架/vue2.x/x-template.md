---
title: x-template
---
```html
<script type="text/x-template" id="yourId">
<template>
  <h1 v-show="showHeading">
    <slot></slot>
  </h1>
  // ...
</template>
</script>
```

```javascript
Vue.component('h1-heading', {
  template: '#yourId',
  props: {
    showHeading: {
      type: Boolean,
      default: true
    }
  }
})
```
