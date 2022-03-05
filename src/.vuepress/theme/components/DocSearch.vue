<template>
<div class="mr-2"></div>
</template>
<script>
import '@docsearch/css'
import docsearch from '@docsearch/js'

export default {
  name: 'DocSearch',
  mounted () {
    docsearch({
      container: this.$el,
      appId: 'ZHEDSTO6YB',
      indexName: 'mulinzi',
      apiKey: 'cf3cbb81b4cef999e99a7f5d8967f8da',
      debug: false,
      placeholder: '查找笔记内容',
      transformItems: items => {
        return items.map(item => {
          return Object.assign({}, item, {
            url: this.getRelativePath(item.url),
          })
        }).filter(item => item.url !== '/')
      },
    })
  },
  methods: {
    getRelativePath (absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl)
      return pathname.replace(this.$site.base, '/') + hash
    },
  },
}
</script>
<style lang="scss">
.DocSearch {
  --docsearch-primary-color: #02a95e;
  --docsearch-logo-color: var(--docsearch-primary-color);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
}
</style>
