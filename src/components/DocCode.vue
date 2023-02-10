<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
});
const docStore = useDocStore();
const fullScreen = computed(() => docStore.state.toc.length === 0);
const qPageHeight = inject('qPageHeight');
</script>

<template>
  <div
    class="relative-position"
    :class="{ 'q-my-md': !fullScreen }"
    :style="`${ fullScreen ? `height: ${qPageHeight}px;` : '' }`"
  >
    <code-prism :lang="props.lang" :code="props.code" :full-screen="fullScreen"></code-prism>
    <copy-button class="absolute-top-right q-ma-xs" :text="props.code"></copy-button>
  </div>
</template>
