<template>
<div
  :class="{ 'rounded': $vuetify.breakpoint.smAndUp }"
  class="theme-default-content pa-sm-6 pa-2">
  <div v-for="(item, index) in newestDocs" :key="index">
    <p>{{ item.regularPath }}</p>
    <p>{{ item.lastUpdated }}</p>
  </div>
</div>
</template>
<script>
export default {
  created () {
    console.log(this)
  },
  computed: {
    newestDocs () {
      return this.$site.pages.sort((a, b) => {
        let c1 = new Date(a.lastUpdated).valueOf()
        let c2 = new Date(b.lastUpdated).valueOf()
        console.log(c1, c2)
        return c2 - c1
      })
    },
  },
}
</script>
<style scoped>
</style>
