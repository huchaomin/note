<script setup>
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view/dist/index.esm';
import useDocMeta from 'composables/useDocMeta.js';

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    default: undefined,
  },
});

const title = computed(() => props.data?.title);
useDocMeta(title, props);

const transformer = new Transformer([]); // 不需要prism和katex plugins
const svgRef = ref();

onMounted(() => {
  const mm = Markmap.create(svgRef.value, {
    duration: 200,
    maxWidth: 500,
  });
  const { root } = transformer.transform(unescape(props.content));
  mm.setData(root);
  mm.fit();
});

const docStore = useDocStore();
docStore.state.toc = [];
</script>
<template>
  <svg ref="svgRef" class="full-width block" />
</template>
