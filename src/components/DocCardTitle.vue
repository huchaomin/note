<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="doc-card-title">
    {{ props.title }}
  </div>
</template>

<style lang="scss">
.doc-card-title {
  margin-left: -12px;
  padding: 4px 10px 4px 24px;
  position: relative;
  border-radius: 3px 5px 5px 0;
  background: $light-code-bg;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 9px 0 0 11px;
    border-top-color: scale-color($light-code-bg, $lightness: -15%);
  }
}
</style>
