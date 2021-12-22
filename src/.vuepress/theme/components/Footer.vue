<template>
<v-footer
  app
  class="d-sm-flex d-none pa-3 justify-space-between"
  padless>
  <div>欢迎您：
    <count-up :end-val="visitors"></count-up>
    号游客
  </div>
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
  data () {
    return {
      visitors: 2021,
    }
  },
  created () {
    const run = timeout => {
      let timer = setTimeout(() => {
        this.visitors += Math.floor(Math.random() * 50)
        clearTimeout(timer)
        run(Math.random() * 100000)
      }, timeout)
    }
    run(Math.random() * 100000)
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
