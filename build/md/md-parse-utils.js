const matter = require('gray-matter');
const toml = require('toml');

function getComponentsImport(componentsList) {
  return componentsList.map((c) => {
    const parts = c.split('/');
    return `import ${parts[parts.length - 1]} from '${c}.vue'\n`;
  }).join('');
}

function parseToc(toc) {
  let wasHeader = true;
  let headerIndex = -1;
  let subheaderIndex;

  const list = toc.map((entry) => {
    if (entry.sub === true) {
      if (wasHeader === true) {
        subheaderIndex = 1;
      } else {
        subheaderIndex++;
      }
      wasHeader = false;
    } else {
      wasHeader = true;
      headerIndex++;
    }

    return {
      ...entry,
      title: entry.sub === true
        ? `${headerIndex}.${subheaderIndex}. ${entry.title}`
        : headerIndex === 0 ? `${entry.title}` : `${headerIndex}. ${entry.title}`,
    };
  });

  return JSON.stringify(list);
}

module.exports = {
  getVueComponent: (data, mdPageContent) => `
    <script setup>
    ${data.examples !== void 0 ? `
      import { provide } from 'vue'
      provide('_q_ex', process.env.CLIENT
        ? { name: '${data.examples}', list: import('examples:${data.examples}') }
        : { name: '${data.examples}' })
      ` : ''}
    ${data.components.size !== 0 ? getComponentsImport(Array.from(data.components)) : ''}
      const toc = ${parseToc(data.toc)}
    </script>
    <template>
      <doc-page
        desc="${data.desc || ''}"
        :toc="toc"
      >
        ${mdPageContent}
      </doc-page>
    </template>
  `,

  getMarkMapComponent: (frontMatterData, rawContent) => `
    <script setup>
      const content = "${escape(rawContent)}"
      const data = ${JSON.stringify(frontMatterData)}
    </script>
    <template>
      <doc-mark-map
        :content="content"
        :data="data"
      >
      </doc-mark-map>
    </template>
  `,

  parseFrontMatter: (content) => matter(content, {
    // excerpt_separator: '<!-- more -->', // 摘要的分隔符
    engines: {
      toml: toml.parse.bind(toml),
      excerpt: false,
    },
  }),
};
