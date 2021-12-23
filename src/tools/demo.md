### demo(注意template、script、:::标签下面空行)
::: demo
<template>
  <button @click="onClick">Click me!</button>
</template>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>

<style>
button {
  color: blue;
}
</style>
:::
