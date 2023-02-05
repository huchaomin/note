<template>
<div>
  <div
    v-for="(item, index) in newestDocs" :key="index"
    :class="{ 'rounded': !$vuetify.breakpoint.mobile }"
    class="theme-default-content px-4 py-3 mb-4">
    <a href="#" @click.prevent="toPage(item)">{{ item.frontmatter.title || item.relativePath }}</a>
    <p
      v-if="item.frontmatter.description"
      class="text--disabled text-truncate description">{{ item.frontmatter.description }}
    </p>
    <p class="detail text-truncate">
       <span v-if="!$vuetify.breakpoint.mobile">
        <v-icon>mdi-account</v-icon>
        {{ $site.themeConfig.author.name }}
      </span> <span>
        <v-icon>mdi-clock-time-ten-outline</v-icon>
        {{ item.lastUpdated | toDateLocaleString }}
      </span> <span v-if="item.frontmatter.tags">
        <v-icon>mdi-tag</v-icon>
        {{ item.frontmatter.tags.join('|') }}
      </span>
    </p>
  </div>
</div>
</template>
<script>
export default {
  computed: {
    newestDocs () {
      return this.$site.pages.filter(o => o.lastUpdated && o.path !== '/').sort((a, b) => {
        let c1 = new Date(a.lastUpdated).valueOf()
        let c2 = new Date(b.lastUpdated).valueOf()
        return c2 - c1
      }).slice(0, 10)
    },
  },
  methods: {
    toPage (page) {
      this.$router.push({
        path: decodeURI(page.regularPath),
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.theme-default-content

  .description
    font-size 0.8em

  .v-icon
    font-size 1.2em
    margin-right -5px

  p
    margin-bottom 0
    height 25px
    line-height 25px

    &.detail
      span
        margin-right 5px

  a:hover
    text-decoration underline

  &:last-of-type
    margin-bottom 0 !important
</style>
