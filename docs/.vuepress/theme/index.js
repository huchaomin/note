const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  // extend: '@vuepress/theme-default',
  globalLayout: resolve('./layouts/GlobalLayout.vue'),
}

