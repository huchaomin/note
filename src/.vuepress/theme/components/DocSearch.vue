<template>
<div></div>
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
<style scoped>
</style>
