<script setup>
import { useDialogPluginComponent } from 'quasar';

const props = defineProps(['srcArr', 'index']);

defineEmits([
  ...useDialogPluginComponent.emits,
]);

const { dialogRef } = useDialogPluginComponent();

const visible = ref(false);
const slide = ref(1);
watchEffect(() => {
  slide.value = props.index + 1;
});

const zoom = ref(80);
function onMousewheel(e) {
  const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
  if (delta > 0) {
    zoom.value += 10;
  } else {
    zoom.value -= 10;
  }
}
</script>
<template>
  <q-dialog
    ref="dialogRef"
    v-model="visible"
    class="c-dialog"
  >
    <q-carousel
      v-model="slide"
      animated
      :thumbnails="srcArr.length > 1"
      arrows
      control-text-color="dark"
      control-color="grey-3"
      control-type="regular"
    >
      <q-carousel-slide
        v-for="(src,i) in srcArr"
        :key="src"
        v-close-popup
        :name="i + 1"
        :img-src="src"
        :style="`background-size: auto ${zoom}%;`"
        @mousewheel="onMousewheel"
      ></q-carousel-slide>
    </q-carousel>
  </q-dialog>
</template>
<style lang="scss" scoped>
.q-carousel {
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none;

  :deep() {
    .q-carousel__prev-arrow--horizontal {
      left: 12vw;
    }

    .q-carousel__next-arrow--horizontal {
      right: 12vw;
    }

    .q-carousel__slide {
      padding: 0;
      background-repeat: no-repeat;
    }
  }
}

:deep() {
  .q-dialog__inner {
    padding: 0;
  }
}
</style>
