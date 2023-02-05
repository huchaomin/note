<script setup>
const docStore = useDocStore();
const show = computed(() => docStore.hasRightDrawer.value);
</script>
<template>
  <q-drawer
    :model-value="show"
    side="right"
    :width="300"
    :breakpoint="0"
    bordered
  >
    <c-scroll-area>
      <q-list>
        <q-item
          v-for="tocItem in docStore.state.toc"
          :id="`toc--${ tocItem.id }`"
          :key="tocItem.id"
          v-ripple
          clickable
          dense
          :active="docStore.state.activeToc === tocItem.id"
          @click="docStore.scrollTo(tocItem.id)"
        >
          <q-item-section v-if="tocItem.sub === true" side></q-item-section>
          <q-item-section>{{ tocItem.title }}</q-item-section>
        </q-item>
      </q-list>
    </c-scroll-area>
  </q-drawer>
</template>
<style lang="scss" scoped>
.q-item {
  font-size: 12px;
  :deep() {
    .q-item__section--side {
      padding-right: 8px;
    }
  }
}
</style>
