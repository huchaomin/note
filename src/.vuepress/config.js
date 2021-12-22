const resolve = dir => require('path').join(__dirname, dir)
const sideNav = require('./util/sideNav.js')
const issueConfig = {
  repo: 'note',
  clientId: 'de01e27a69cdede2a898',
  clientSecret: 'b18db1776d565a67dc3010040770acc02635442f',
}
const baiduAnalytics = require('./plugins/baiduAnalytics')
module.exports = {
  dest: resolve('../../docs'),
  title: '木林子的笔记空间',
  description: 'My note space build with vuepress',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { content: 'IE=edge', ['http-equiv']: 'X-UA-Compatible' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: 'RGBA(255, 255, 255, 0.9)' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  markdown: {
    lineNumbers: false, // 是否显示行号，默认为false
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': resolve('../../src'),
      },
    },
  },
  themeConfig: {
    sideNav,
    enablePrevAndNext: true,
  },
  plugins: [
    'vuepress-plugin-element-tabs',
    '@vuepress/last-updated',
    'vuepress-plugin-nprogress',
    [
      'demo-code',
      {
        showText: '显示代码',
        hideText: '隐藏代码',
        minHeight: 0,
        onlineBtns: {
          codepen: true,
          jsfiddle: false,
          codesandbox: false,
        },
        demoCodeMark: 'demo',
        copyOptions: false, // 复制样式太丑了
      },
    ],
    [
      '@xiaopanda/vuepress-plugin-code-copy',
      {
        buttonStaticIcon: true,
        buttonIconTitle: '复制代码',
        buttonAlign: 'bottom',
        buttonColor: '#3eaf7c',
      },
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      // huchaomin/note 必须为公开库
      {
        platform: 'github',
        owner: 'huchaomin',
        repo: issueConfig.repo,
        prefix: '[comment]',
        clientId: issueConfig.clientId,
        clientSecret: issueConfig.clientSecret,
        autoCreateIssue: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-96097921-2',
      },
    ],
    baiduAnalytics,
    [
      '@vuepress/pwa',
      {
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
          message: '作者又有了新的笔记哟，点击刷新查看',
          buttonText: '刷新',
        },
      },
    ],
  ],
}
