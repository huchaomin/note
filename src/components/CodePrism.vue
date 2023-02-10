<script setup>
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

Prism.manual = true; // 手动渲染，不需要自动全局通过class去查找渲染

// https://prismjs.com/docs/Prism.html#.highlight
// autolinker 注册的是 before-highlight 事件
// 而只有 highlightElement 才会触发 before-highlight 事件 坑爹啊
function getLangCodeFromExtension(extension) {
  const extensionMap = {
    vue: 'markup',
    html: 'markup',
    md: 'markdown',
    rb: 'ruby',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    yml: 'yaml',
    styl: 'stylus',
    kt: 'kotlin',
    rs: 'rust',
  };
  return extensionMap[extension] || extension;
}

// const HTML_ESCAPE_TEST_RE = /[&<>"]/;
// const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
// const HTML_REPLACEMENTS = {
//   '&': '&amp;',
//   '<': '&lt;',
//   '>': '&gt;',
//   '"': '&quot;',
// };

// function replaceUnsafeChar(ch) {
//   return HTML_REPLACEMENTS[ch];
// }

// function escapeHtml(str) {
//   if (HTML_ESCAPE_TEST_RE.test(str)) {
//     return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
//   }
//   return str;
// }

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
});
const la = computed(() => {
  const l = getLangCodeFromExtension(props.lang.toLowerCase());
  if (Prism.languages[l]) {
    return l;
  }
  return 'markup';
});
// const html = computed(() => Prism.highlight(props.code, Prism.languages[la.value], la.value));
const qPageHeight = inject('qPageHeight');
const highlightEle = ref(null);
onMounted(() => {
  Prism.highlightElement(highlightEle.value);
});
</script>
<template>
  <c-scroll-area :fit-content-height="!fullScreen">
    <!-- eslint-disable vue/no-v-html -->
    <pre
      class="doc-code line-numbers"
      :class="`language-${la}`"
      :style="`${fullScreen ? `min-height: ${qPageHeight}px; border-radius: 0` : ''}`"
    ><code ref="highlightEle">{{ code }}</code></pre> <!-- 这里不能换行 -->
  </c-scroll-area>
</template>
