<script setup>
import leftTree from 'constant/leftTree.json';
import DocDrawerMenuNode from './DocDrawerMenuNode.vue';

const cScroll = ref(null);

onMounted(() => {
  const instance = getCurrentInstance();
  // instance.proxy.$el.querySelector('.q-item--active').scrollIntoView();
  const activeItem = instance.proxy.$el.querySelector('.q-item--active');
  if (!activeItem) return;
  const { top } = activeItem.getBoundingClientRect();
  const { verticalContainerSize } = cScroll.value.instance.getScroll();
  const offset = top - verticalContainerSize / 2;
  if (offset > 0) {
    cScroll.value.instance.setScrollPosition('vertical', offset, 300);
  }
});
const docStore = useDocStore();

</script>
<template>
  <q-drawer
    v-model="docStore.state.menuDrawer"
    side="left"
    :width="300"
    bordered
  >
    <c-scroll-area ref="cScroll">
      <doc-drawer-menu-node :model="leftTree"></doc-drawer-menu-node>
    </c-scroll-area>
  </q-drawer>
</template>
