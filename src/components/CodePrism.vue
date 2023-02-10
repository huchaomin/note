<script setup>
import Prism from 'prismjs';

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
const la = computed(() => getLangCodeFromExtension(props.lang.toLowerCase()));
const html = computed(() => Prism.highlight(props.code, Prism.languages[la.value] || Prism.languages.markup, la.value));
const qPageHeight = inject('qPageHeight');

</script>
<template>
  <c-scroll-area :fit-content-height="!fullScreen">
    <!-- eslint-disable vue/no-v-html -->
    <pre
      class="doc-code"
      :class="`language-${la}`"
      :style="`${fullScreen ? `min-height: ${qPageHeight}px; border-radius: 0` : ''}`"
      v-html="html"
    ></pre>
  </c-scroll-area>
</template>
