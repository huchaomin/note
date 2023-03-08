---
title: triggerRef
---

## 应用

```vue
<script setup>
const instanceList = ref(null); // 数组格式
const customerCodeList = computed(() => instanceList.value?.map((instance) => instance.formModel.customerCode) || []);
const productCustomerList = reactive([]);
function add() {
  productCustomerList.push({});
  // 此时手动触发一下，依赖于 instanceList 的 computed 才会重新计算
  nextTick(() => {
    triggerRef(instanceList);
  });
}
</script>
<template>
<div v-for="item in productCustomerList">
  <ProductCustomer ref="instanceList" />
</div>
</template>
```
