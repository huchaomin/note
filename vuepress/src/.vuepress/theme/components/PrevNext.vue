<template>
<div
  v-if="$site.themeConfig.enablePrevAndNext && (prev || next)"
  class="prev-next d-none d-sm-flex justify-space-between mt-9">
  <v-btn
    v-if="prev"
    :ripple="false"
    class="ml-n4"
    color="primary"
    plain
    @click="toPage(prev)">
    <v-icon dense>mdi-arrow-left</v-icon>
    <span>{{ prev.name }}</span>
  </v-btn>
  <v-spacer></v-spacer>
  <v-btn
    v-if="next"
    :ripple="false"
    class="mr-n4"
    color="primary"
    plain
    @click="toPage(next)">
    <span>{{ next.name }}</span>
    <v-icon dense>mdi-arrow-right</v-icon>
  </v-btn>
</div>
</template>
<script>
import findSideNav from '../mixins/findSideNav.js'

export default {
  mixins: [findSideNav],
  data () {
    return {
      prev: null,
      next: null,
    }
  },
  watch: {
    '$page': {
      handler () {
        this.reRender()
      },
      immediate: true,
    },
  },
  created () {
    this.$bus.$on('parentTouchstart', isTouchCode => {
      this.isTouchCode = isTouchCode
    })
    this.$bus.$on('swipe', direction => {
      if (this.isTouchCode || !this.$vuetify.breakpoint.mobile) return
      if (direction === 'Right') {
        if (this.prev) {
          this.toPage(this.prev)
        }
      } else if (direction === 'Left') {
        if (this.next) {
          this.toPage(this.next)
        }
      }
    })
  },
  methods: {
    reRender () {
      this.prev = null
      this.next = null
      const currentNavId = this.currentNavId
      if (!currentNavId) return
      const parents = this.getAllParentsById(currentNavId)
      if (parents.length === 0) return
      const parent = parents[0]
      const fileArr = parent.children.filter(o => !o.isDirectory)
      const index = fileArr.findIndex(o => o.id === currentNavId)
      this.prev = fileArr[index - 1]
      this.next = fileArr[index + 1]
    },
    toPage (page) {
      this.$router.push({
        path: page.routerPath,
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.v-btn
  &:after
    content ''
    position absolute
    bottom 0
    left 50%
    right 50%
    height 2px
    background $nprogressColor
    transition all .3s

  &:hover
    &:after
      left 16px
      right 16px
</style>
