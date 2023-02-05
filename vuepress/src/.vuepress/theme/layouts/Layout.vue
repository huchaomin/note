<template>
<div
  :class="{ 'rounded': !$vuetify.breakpoint.mobile }"
  class="theme-default-content d-flex flex-column pa-sm-6 pa-2">
  <Content></Content>
  <v-spacer></v-spacer>
  <prev-next></prev-next>
  <Vssue
    v-if="vssueId && !$vuetify.breakpoint.mobile"
    :key="vssueId"
    :options="{ locale: 'zh' }"
    :title="vssueId"
    class="mt-10"/>
</div>
</template>
<script>
import PrevNext from '../components/PrevNext.vue'

export default {
  components: {
    PrevNext,
  },
  computed:{
    vssueId () {
      return this.$page.frontmatter.date
    }
  }
}
</script>
