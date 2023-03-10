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

const transformer = new Transformer();
const svgRef = ref();

onMounted(() => {
  const mm = Markmap.create(svgRef.value);
  const { root } = transformer.transform(props.content);
  mm.setData(root);
  mm.fit();
});

const docStore = useDocStore();
docStore.state.toc = [];
</script>
<template>
  <svg ref="svgRef" class="full-width block" />
</template>
