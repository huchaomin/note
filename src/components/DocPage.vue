<script setup>
import getMeta from 'utils/get-meta.js';

const route = useRoute();
const props = defineProps({
  desc: {
    type: String,
    required: true,
  },
  toc: {
    type: Array,
    required: true,
  },
});

const title = computed(() => props.toc[0]?.title);
const metaTitle = computed(() => {
  if (title.value) {
    return `${route.name} | ${title.value}`;
  }
  return route.name;
});
useMeta({
  title: metaTitle.value,
  titleTemplate: (t) => `${t} | ${process.env.DOC_NAME}`,
  meta: getMeta(metaTitle.value, props.desc || metaTitle.value),
});
const docStore = useDocStore();
watchEffect(() => {
  docStore.state.toc = props.toc;
});
onMounted(() => {
  const { getEleBySearch, scrollToEle } = docStore;
  const ele = getEleBySearch();
  setTimeout(() => {
    scrollToEle(ele);
  }, 500); // 有些页面组件还没加载完，需要延迟一下 not perfect
});
</script>

<template>
  <div>
    <h1 v-if="title" id="doc-title" class="doc-heading">
      {{ title }}
      <q-badge v-if="$route.meta.lastUpdate" align="top">
        {{ `最后更新时间：${$route.meta.lastUpdate}` }}
      </q-badge>
    </h1>
    <slot></slot>
  </div>
</template>
