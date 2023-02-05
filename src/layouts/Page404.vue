<template>
  <div class="column flex-center">
    <div class="flex items-center no-wrap q-gutter-sm err-404">
      <div>4</div>
      <q-img src="~assets/img/me.svg"></q-img>
      <div>4</div>
    </div>
    <div class="letter-spacing-225 q-mb-xl">
      You're not intentionally heading to a black hole, are you?
    </div>
    <q-btn to="/" label="Take me home"></q-btn>
  </div>
</template>

<script setup>
useMeta({ title: 'Page not found' });
const docStore = useDocStore();
docStore.state.toc = [];
</script>

<style lang="scss" scoped>
.err-404 {
  font-size: 10rem;
}
.q-img {
  width: 1em;
  height: 1em;
  animation: logo-rotate 80s linear infinite;
}
@keyframes logo-rotate {
  100% {
    transform: rotate(-360deg);
  }
};
</style>
