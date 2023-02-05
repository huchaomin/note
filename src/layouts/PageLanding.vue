<script setup>
import getMeta from 'utils/get-meta.js';

const docStore = useDocStore();
docStore.state.toc = [];
useMeta({
  title: process.env.DOC_NAME,
  meta: getMeta(
    process.env.DOC_NAME,
    process.env.DOC_SAYING,
  ),
});
</script>

<template>
  <div class="q-px-lg">
    首页
  </div>
</template>
