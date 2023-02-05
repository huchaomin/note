<template>
  <q-btn
    round
    flat
    icon="content_copy"
    @click="copy"
  >
    <q-tooltip>{{ copied ? '已复制！' : '复制' }}</q-tooltip>
  </q-btn>
</template>

<script setup>
import { copyToClipboard } from 'quasar';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

let timer;
const copied = ref(false);
function copy() {
  copyToClipboard(props.text).then(() => {
    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
      timer = null;
    }, 2000);
  });
}
</script>
