<template>
<v-footer
  app
  class="d-sm-flex d-none pa-3 justify-space-between"
  padless>
  <v-btn
    class="ma-n3"
    depressed
    icon
    x-large
    @click="toRoot">
    <v-icon>mdi-home</v-icon>
  </v-btn>
  <div>中华老字号版权所有</div>
  <div v-if="$page.lastUpdated">
    最后更新时间
    <v-icon style="font-size: 1.7rem">mdi-clock-time-ten-outline</v-icon>
    {{ $page.lastUpdated | toDateLocaleString }}
  </div>
</v-footer>
</template>
<script>
export default {
  methods: {
    toRoot () {
      if (this.$route.path === '/') return
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.v-footer
  letter-spacing 1.5px

  &:before
    content ' '
    position absolute
    width 100%
    top 0
    left 0
    height 1px
    background rgba(0, 0, 0, .12)
</style>
