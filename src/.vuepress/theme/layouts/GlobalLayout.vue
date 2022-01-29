<template>
<v-app
  id="doc"
  v-touch="{
    left: () => swipe('Left'),
    right: () => swipe('Right'),
  }"
  @mousedown.native="globalMousedown">
  <iframe v-if="!$vuetify.breakpoint.mobile && iframeSrc"
          :src="iframeSrc"
          frameborder="0"
          height="100%"
          width="100%">
  </iframe>
  <header-bar @toggleDrawer="toggleDrawer"></header-bar>
  <navigation-drawer ref="drawer" @show="showBreadcrumbs = true"></navigation-drawer>
  <v-main>
    <div
      v-if="showBreadcrumbs && breadcrumbs.length > 0 && !$vuetify.breakpoint.mobile"
      class="d-flex align-center px-4 breadcrumbs">
      <v-icon class="mr-n6">mdi-folder-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="py-2"></v-breadcrumbs>
    </div>
    <div
      id="scroll-body"
      ref="scrollBody"
      :class="$page.frontmatter.pageClass"
      class="theme-container py-sm-10 py-0"
      @contextmenu="contextmenu"
      @dblclick="centerDblclick">
      <component
        :is="layout"
        @dblclick.native.stop=""
        @contextmenu.native.stop=""/>
    </div>
    <v-menu
      v-model="showToggleBgMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y>
      <v-list @mousedown.native.stop="">
        <v-list-item
          v-for="(item, index) in bg"
          :key="index"
          dense
          ripple
          @click="changeBg(item)">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-fab-transition>
      <v-btn
        v-show="offsetTop > 200"
        v-scroll:#scroll-body="onScroll"
        bottom
        class="to-top"
        fab
        fixed
        right
        @click="toContainerTop">
        <v-icon color="primary">mdi-arrow-expand-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-main>
  <footer-bar></footer-bar>
</v-app>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue'

const { getFileName } = require('../../util/index.js')

export default {
  components: {
    HeaderBar: Header,
    FooterBar: Footer,
    NavigationDrawer,
  },
  data () {
    return {
      offsetTop: 0,
      showBreadcrumbs: true,
      bg: [
        {
          name: '渐变',
          value: '',
        },
        {
          name: '化学分子',
          value: 'chemicalMolecule',
        },
        {
          name: '黑客帝国',
          value: 'theMatrix',
        },
        {
          name: '满天繁星',
          value: 'stars',
        },
        {
          name: '3D粒子',
          value: '3Dparticles',
        },
        {
          name: '粒子漩涡',
          value: 'particleVortex',
        },
      ],
      x: 0,
      y: 0,
      currentBg: 'chemicalMolecule',
      showToggleBgMenu: false,
      iframeSrc: '',
    }
  },
  watch: {
    '$page': {
      handler () {
        console.log(this)
        this.toContainerTop()
      },
    },
    'layout': {
      handler (val) {
        if (val === 'NotFound') {
          this.currentBg = 'theMatrix'
        } else {
          this.currentBg = ''
        }
      },
      immediate: true,
    },
    'currentBg': {
      handler (val) {
        this.$nextTick(() => {
          if (val) {
            this.iframeSrc = this.$withBase(`/bg/${val}/index.html`)
          } else {
            this.iframeSrc = ''
          }
        })
      },
      immediate: true,
    },
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    breadcrumbs () {
      const relativePath = this.$page.relativePath
      if (!relativePath || relativePath === 'index.md') return []
      const arr = this.$page.relativePath.split('/').map(text => ({ text }))
      arr.unshift({ text: '' })
      const lastItem = arr[arr.length - 1]
      lastItem.text = getFileName(lastItem.text)
      return arr
    },
  },
  mounted () {
    const el = this.$el
    el.addEventListener('touchstart', e => {
      const arr = [...document.querySelectorAll('div[class*="language-"]')]
      this.isTouchCode = arr.some(parent => parent.contains(e.target))
      this.$bus.$emit('parentTouchstart', this.isTouchCode)
    }, { passive: true })
  },
  methods: {
    toContainerTop () {
      this.$vuetify.goTo(0, { container: '#scroll-body' })
    },
    toggleDrawer (flag) {
      this.$refs.drawer.toggleDrawer(flag)
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    centerDblclick () {
      this.showBreadcrumbs = !this.showBreadcrumbs
      this.toggleDrawer(this.showBreadcrumbs)
    },
    contextmenu (e) {
      e.preventDefault()
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.showToggleBgMenu = true
      })
    },
    changeBg (item) {
      this.currentBg = item.value
    },
    globalMousedown () {
      this.showToggleBgMenu = false
    },
    swipe (direction) {
      this.$bus.$emit('swipe', direction)
    },
  },
}
</script>
<style lang="stylus" scoped>
iframe {
  position: absolute;
}

.breadcrumbs {
  border-top: 1px solid $border
}

.to-top {
  bottom: 80px !important;
}
</style>
