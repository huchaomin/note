<script setup>
import { fadeOut, fadeIn } from 'utils/other.js';
import DocHeader from './DocHeader.vue';
import DocDrawerMenu from './DocDrawerMenu.vue';
import DocDrawerToc from './DocDrawerToc.vue';

const docStore = provideDocStore();
const cScroll = ref(null);

docStore.state.scrollArea = computed(() => cScroll.value?.instance);

const showPageSticky = ref(false);

function onScroll({ verticalPosition, verticalContainerSize }) { // 滚动大小发生变化也会产生滚动事件，包括初始化的时候
  if (docStore.hasRightDrawer.value) {
    docStore.setActiveToc();
  }
  showPageSticky.value = verticalPosition > verticalContainerSize * 0.66;
}

function scrollToTop() {
  docStore.state.scrollArea.setScrollPosition('vertical', 0, 300);
}

const instance = getCurrentInstance();
function routeMounted() {
  const { $el } = instance.proxy;
  const enterLoading = document.querySelector('.doc-enter-loading');
  $el.style.opacity = 0;
  fadeOut(enterLoading).then(() => {
    enterLoading.remove();
    document.body.classList.remove('is-loading');
    fadeIn($el);
  });
}
const qPageHeight = ref(0);
function setQPageHeight(offset, height) {
  qPageHeight.value = height - offset;
  return {
    height: `${qPageHeight.value}px`,
  };
}
provide('qPageHeight', qPageHeight);
</script>
<template>
  <q-layout
    view="hHh LpR fff"
  >
    <doc-header></doc-header>
    <q-no-ssr>
      <doc-drawer-menu></doc-drawer-menu>
      <doc-drawer-toc></doc-drawer-toc>
    </q-no-ssr>
    <q-page-container>
      <q-page :style-fn="setQPageHeight">
        <c-scroll-area ref="cScroll" @scroll="onScroll">
          <router-view
            :class="{ 'q-layout-padding': docStore.state.toc.length !== 0 }"
            :style="{ minHeight: `${qPageHeight}px` }"
            @vnode-mounted="routeMounted"
          ></router-view>
        </c-scroll-area>
        <q-page-sticky v-if="showPageSticky" position="bottom-right" :offset="[20, 20]">
          <q-btn
            round
            icon="arrow_upward"
            @click="scrollToTop"
          ></q-btn>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.q-page-container :target {
  scroll-margin-top: ($toolbar-min-height + 16px); // 76px
}
.q-layout-padding{
  :deep() {
    > *:first-child{
      margin-top: 0;
    }
    > *:last-child{
      margin-bottom: 0;
    }
    ol,ul{
      padding-left: 1rem;
    }
    li {
      &:not(:last-child) {
        margin-bottom: 0.2rem;
      }

      p {
        margin-bottom: 0;
      }
    }
  }
}
:deep() {
  > .q-scrollarea__container >.q-scrollarea__content{
    width: 100%;
  }
}
</style>
