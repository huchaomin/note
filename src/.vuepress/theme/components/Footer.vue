<template>
<v-footer
  v-if="!$vuetify.breakpoint.mobile"
  app
  class="d-flex pr-3 justify-space-between"
  padless>
  <v-btn
    depressed
    icon
    x-large
    @click="toRoot">
    <v-icon>mdi-home</v-icon>
  </v-btn>
  <div class="copyright">
    <p>
      Copyright
      <v-icon class="s-icon">mdi-copyright</v-icon>
      <span>{{ `2009-${new Date().getFullYear()} 木林子` }}</span>
    </p>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42112702000096" target="_blank">
      <img class="mr-1" src="../assets/images/filing.png" style="vertical-align: bottom"/>鄂公网安备42112702000096号
    </a>
    <a class="ml-2" href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022000181号-1</a>
  </div>
  <div v-if="$page.lastUpdated">
    最后更新时间
    <v-icon class="s-icon">mdi-clock-time-ten-outline</v-icon>
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
  .copyright
    text-align center
    font-size 0.8em

  .s-icon
    font-size 1.4em
    margin 0 -5px
</style>
