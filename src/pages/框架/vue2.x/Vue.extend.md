---
title: Vue.extend
---

```javascript
import ConstructorOptions from './ConstructorOptions.vue'
const Constructor = Vue.extend(ConstructorOptions)

// ...
someMethod () {
  const vm = new Constructor({
    propsData: {
      prop1: ...,
    },
  });
  vm.$mount();
  this.$refs.someDom.appendChild(vm.$el)
  vm.remove = () => {
    this.$refs.someDom.removeChild(vm.$el)
    vm.$destroy()
  }
},
```
