<template>
<div class="theme-default-content rounded d-flex flex-column">
  <Content></Content>
  <v-spacer></v-spacer>
  <prev-next></prev-next>
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
