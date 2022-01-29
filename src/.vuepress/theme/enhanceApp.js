import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'
import simpleTable from './global-components/simpleTable.js'

function padStart (value, pad, bit = 2) {
  return String(value).padStart(bit, pad)
}

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.prototype.$bus = new Vue()
  Vue.filter('toDateLocaleString', value => {
    const dateObj = new Date(value)
    if (!value || dateObj.toString() === 'Invalid Date') {
      return ''
    } else {
      const padStartZero = v => padStart(v, 0)
      return `${dateObj.getFullYear()}年${padStartZero(dateObj.getMonth() + 1)}月${padStartZero(dateObj.getDate())}日`
    }
  })
  Vue.filter('toDateLocaleStringWithTime', value => {
    const dateObj = new Date(value)
    if (!value || dateObj.toString() === 'Invalid Date') {
      return ''
    } else {
      const padStartZero = v => padStart(v, 0)
      return `${dateObj.getFullYear()}年${padStartZero(dateObj.getMonth() + 1)}月${padStartZero(dateObj.getDate())}日
    ${padStartZero(dateObj.getHours())}:${padStartZero(dateObj.getMinutes())}:${padStartZero(dateObj.getSeconds())}`
    }
  })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    theme: { // 自定义主题色
      themes: {
        light: {
          primary: '#02a95e',
          warning: '#a15f0b',
        },
      },
    },
    icons: {
      iconfont: 'mdi',
    },
    breakpoint: {
      scrollBarWidth: 6,
      mobileBreakpoint: 'xs',
    },
  })
  Vue.component('simple-table', simpleTable)
}
