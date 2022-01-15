<template>
<div
  v-if="$site.themeConfig.enablePrevAndNext && (prev || next)"
  class="prev-next d-none d-sm-flex justify-space-between mt-9">
  <v-btn
    v-if="prev"
    color="primary"
    depressed
    @click="toPage(prev)">
    <v-icon dense>mdi-arrow-left</v-icon>
    <span>{{ prev.name }}</span>
  </v-btn>
  <v-spacer></v-spacer>
  <v-btn
    v-if="next"
    color="primary"
    depressed
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
      if (direction === 'Left') {
        if (this.prev) {
          this.toPage(this.prev)
        }
      } else if (direction === 'Right') {
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
