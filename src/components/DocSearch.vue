<script setup>
import '@docsearch/css';
import docsearch from '@docsearch/js';

// const { origin } = window.location;
onMounted(() => {
  docsearch({
    container: '#docsearch',
    appId: 'ZHEDSTO6YB',
    apiKey: 'cf3cbb81b4cef999e99a7f5d8967f8da',
    indexName: 'mulinzi',
    placeholder: '搜索笔记...',
    // startUrls: [origin], // TODO
    // sitemaps: [`${origin}/sitemap.xml`],
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
