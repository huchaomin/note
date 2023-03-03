<script setup>
defineProps({
  fitContentHeight: {
    type: Boolean,
    default: false,
  },
});
const instance = ref(null);
const thumbStyle = {
  borderRadius: '8px',
  backgroundColor: process.env.DOC_THEME_COLOR,
  width: '8px',
  opacity: 1,
};

const height = ref(0);
function onResize(size) {
  height.value = size.height;
}

defineExpose({
  instance,
});
</script>
<template>
  <q-scroll-area
    ref="instance"
    :thumb-style="thumbStyle"
    :class="{ fit: !fitContentHeight, fitContentHeight }"
    :style="`${ fitContentHeight ? 'height:'+height+'px;' : '' }`"
  >
    <slot></slot>
    <q-resize-observer v-if="fitContentHeight" @resize="onResize"></q-resize-observer>
  </q-scroll-area>
</template>
<style lang="scss" scoped>
  .fitContentHeight{
    :deep() {
      .q-scrollarea__content{
        min-height: auto;
      }
    }
  }
</style>
