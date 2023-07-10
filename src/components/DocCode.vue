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
  fromDocExample: {
    type: Boolean,
    default: false,
  },
});
const docStore = useDocStore();
const fullScreen = computed(() => docStore.state.toc.length === 0);
const qPageHeight = inject('qPageHeight');
</script>

<template>
  <div
    class="relative-position"
    :class="{ 'q-my-md': !fullScreen && !fromDocExample }"
    :style="`${ fullScreen ? `height: ${qPageHeight}px;` : '' }`"
  >
    <code-prism
      :lang="props.lang"
      :code="props.code"
      :full-screen="fullScreen"
      :from-doc-example="fromDocExample"
    ></code-prism>
    <copy-button class="absolute-top-right q-ma-xs"></copy-button>
  </div>
</template>
