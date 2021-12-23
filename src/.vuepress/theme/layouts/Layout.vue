<template>
<div
  :class="{ 'rounded': $vuetify.breakpoint.smAndUp }"
  class="theme-default-content d-flex flex-column pa-sm-6 pa-2">
  <Content></Content>
  <v-spacer></v-spacer>
<!--  <prev-next></prev-next>-->
  <Vssue
    :key="currentNavId"
    :options="{ locale: 'zh' }"
    :title="currentNavId"
    class="mt-10"
    @dblclick.native.stop=""/>
</div>
</template>
<script>
import PrevNext from '../components/PrevNext.vue'
import findSideNav from '../mixins/findSideNav.js'

export default {
  mixins: [findSideNav],
  components: {
    PrevNext,
  },
}
</script>
