<script setup>
import '@docsearch/css';
import docsearch from '@docsearch/js';

// const { origin } = window.location;
onMounted(() => {
  docsearch({
    container: '#docsearch',
    appId: 'ZHEDSTO6YB',
    apiKey: 'bf9a80447707675386acb0c5d2f8be66',
    indexName: 'mulinzi',
    placeholder: '搜索笔记...',
    transformItems(items) {
      console.log(items);
      return items.map((item) => ({
        ...item,
        content: item.content.toUpperCase(),
      }));
    },
  });
});
</script>

<template>
  <div id="docsearch"></div>
</template>
<style lang="scss">
  .DocSearch-Container{
    z-index: 9999;
  }
</style>
