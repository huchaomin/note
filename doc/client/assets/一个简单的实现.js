import{r as o,o as i,c as r,f as c,g as n,aa as e}from"./vendor.js";const p=e("p",null,"plugins/store/index.js",-1),u=e("p",null,"store/index.js",-1),m=e("p",null,"main.js",-1),y={__name:"\u4E00\u4E2A\u7B80\u5355\u7684\u5B9E\u73B0",setup(d){const s=[{id:"doc-title",title:"\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A Store"}];return(l,_)=>{const t=o("doc-code"),a=o("doc-page");return i(),r(a,{desc:"",toc:s},{default:c(()=>[p,n(t,{code:`let Vue

class Store {
  constructor (options = {}) {
    // this.vm = new Vue({
    //   data: {
    //     $state: options.state,  // \u4EE5$\u5F00\u5934\u7684\u5C5E\u6027\u4E0D\u4F1A\u88ABvm\u76F4\u63A5\u8BBF\u95EE\u5230\uFF08vm.$state === undefined\uFF09
    //   },
    // })
    this._state = options.state || {}
    this._getters = options.getters || {}
    this._mutations = options.mutations || {}
    this._actions = options.actions || {}
    this.getters = {}
    const store = this
    Object.keys(this._getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get () {
          return store._getters[key](store.state, store.getters)
        },
        enumerable: true,
      })
    })
    // \u7ED1\u5B9Acommit\u4E0A\u4E0B\u2F42\u5426\u5219action\u4E2D\u8C03\u2F64commit\u65F6\u53EF\u80FD\u51FA\u95EE\u9898!!
    // \u540C\u65F6\u4E5F\u628Aaction\u7ED1\u4E86\uFF0C\u56E0\u4E3Aaction\u53EF\u4EE5\u4E92\u8C03
    const { commit, dispatch } = store
    this.commit = function (...arg) {
      commit.apply(store, arg)
    }
    this.dispatch = function (...arg) {
      dispatch.apply(store, arg)
    }
  }

  get state () {
    // return this.vm._data.$state  // (vm._data \u7B49\u540C\u4E8E vm.$data)
    return Vue.observable(this._state)
  }

  set state (v) {
    console.error('please use replaceState to reset state')
  }

  commit (type, payload) {
    const mutationType = this._mutations[type]
    if (!mutationType) {
      console.error(\`unknown mutation type \${type}\`)
      return
    }
    mutationType(this.state, payload)
  }

  dispatch (type, payload) {
    const actionType = this._actions[type]
    if (!actionType) {
      console.error(\`unknown action type \${type}\`)
    }
    actionType({
      state: this.state,
      commit: this.commit,
    }, payload)
  }
}

function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default {
  Store,
  install,
}
`,lang:"javascript"}),u,n(t,{code:`import Vue from 'vue'
import Vuex from '@/plugins/store/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    doubleCounter (state) {
      return state.count * 2
    },
  },
  mutations: {
    addCount (state, payload) {
      state.count += payload
    },
  },
  actions: {
    addCountAsync ({ state, commit }, payload) {
      setTimeout(() => {
        commit('addCount', state.count + payload)
      }, 3000)
    },
  },
})
`,lang:"javascript"}),m,n(t,{code:`import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
`,lang:"javascript"})]),_:1})}}};export{y as default};
