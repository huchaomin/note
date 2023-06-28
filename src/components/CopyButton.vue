<template>
  <q-btn
    round
    flat
    icon="content_copy"
    @click="copy"
  >
    <q-tooltip :hide-delay="copied ? 1500 : 0">
      {{ copied ? '已复制！' : '复制' }}
    </q-tooltip>
  </q-btn>
</template>

<script setup>
import { copyToClipboard } from 'quasar';

const props = defineProps({
  text: {
    type: String,
    default: undefined,
  },
});

let timer;
const copied = ref(false);
const instance = getCurrentInstance();
function copy() {
  let { text } = props;
  if (text === undefined) {
    debugger;
    const parentEl = instance.parent.proxy.$el;
    text = parentEl.querySelector('.doc-code code')?.textContent;
  }
  if (!text) return;
  copyToClipboard(text).then(() => {
    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
      timer = null;
    }, 2000);
  });
}
</script>
