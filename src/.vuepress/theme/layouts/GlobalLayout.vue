<template>
<v-app
  id="doc"
  @mousedown.native="globalMousedown">
  <iframe :src="$withBase(`/bg/${ currentBg }/index.html`)"
          frameborder="0"
          height="100%"
          scrolling="no"
          width="100%">
  </iframe>
  <header-bar @toggleDrawer="toggleDrawer"></header-bar>
  <navigation-drawer ref="drawer" @show="showBreadcrumbs = true"></navigation-drawer>
  <v-main @dblclick.native="centerDblclick">
    <div
      v-if="showBreadcrumbs && breadcrumbs.length > 0"
      class="d-flex align-center px-4 breadcrumbs"
      @dblclick.stop="">
      <v-icon class="mr-n6">mdi-folder-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="py-2"></v-breadcrumbs>
    </div>
    <div
      id="scroll-body"
      ref="scrollBody"
      :class="$page.frontmatter.pageClass"
      class="theme-container py-sm-10 py-0"
      @contextmenu="contextmenu">
      <component :is="layout" @contextmenu.native.stop=""/>
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
        @click="toContainerTop"
        @dblclick.stop="">
        <v-icon color="primary">mdi-arch</v-icon>
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
    }
  },
  watch: {
    '$page': {
      handler () {
        this.toContainerTop()
      },
    },
    'layout': {
      handler (val) {
        if (val === 'NotFound') {
          this.currentBg = 'theMatrix'
        } else {
          this.currentBg = 'chemicalMolecule'
        }
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
  methods: {
    // onResize () {
    //   const f1 = Math.min(window.innerWidth / 600 * 14, 14)
    //   const f2 = Math.max(f1, 10)
    //   document.documentElement.style.fontSize = `${f2}px`
    // },
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
      const isSelect = window.getSelection().toString().trim()
      if (isSelect.length > 1) return
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
  },
}
</script>
<style scoped>
iframe {
  position: absolute;
}

.to-top {
  bottom: 80px !important;
}
</style>
