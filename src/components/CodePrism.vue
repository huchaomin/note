<script setup>
import prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

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

const HTML_ESCAPE_TEST_RE = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: 'js',
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
});

const html = ref('');
watch(() => props.lang, (val) => {
  const rawLa = val.toLowerCase();
  const la = getLangCodeFromExtension(rawLa);
  if (!prism.languages[la]) {
    try {
      loadLanguages([la]);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(`Syntax highlight for language "${la}" is not supported.`);
      }
    }
  }
  if (prism.languages[la]) {
    html.value = prism.highlight(props.code, prism.languages[la], la);
  } else {
    html.value = escapeHtml(props.code);
  }
}, {
  immediate: true,
});

const qPageHeight = inject('qPageHeight');

</script>
<template>
  <c-scroll-area :fit-content-height="!fullScreen">
    <!-- eslint-disable vue/no-v-html -->
    <pre
      class="doc-code"
      :class="`language-${lang}`"
      :style="`${fullScreen ? `min-height: ${qPageHeight}px; border-radius: 0` : ''}`"
      v-html="html"
    ></pre>
  </c-scroll-area>
</template>
