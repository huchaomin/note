<script setup>
import imgList from 'assets/img/listing.js';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
});
const route = useRoute();

const imgSrc = ref('');
watch(() => props.src, (val) => {
  const imgPath = decodeURIComponent(route.path)
    .split('/')
    .slice(1, -1)
    .map((p) => p.slice(0, -1))
    .join('/');
  imgList[`./${imgPath}/${val}`]().then((res) => {
    imgSrc.value = res.default;
  });
}, {
  immediate: true,
});

function popImg() {
  $vImg([imgSrc.value]);
}

const instance = ref(null);
const width = ref(0);
function imgLoad() {
  const img = instance.value.$el.querySelector('img');
  width.value = img.naturalWidth;
}
</script>
<template>
  <q-no-ssr>
    <q-img
      ref="instance"
      loading="lazy"
      :src="imgSrc"
      fit="contain"
      :alt="alt"
      :width="`${width}px`"
      class="rounded-borders"
      @click.stop="popImg"
      @load="imgLoad"
    >
    </q-img>
  </q-no-ssr>
</template>
<style lang="scss" scoped>
.q-img{
  display: block;
  max-width: 100%;
  cursor: pointer;
}
</style>
