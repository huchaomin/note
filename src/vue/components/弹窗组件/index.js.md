---
date: '1646545870306'
title: vue 弹窗组件
description: 实现一个简单的 vue 弹窗组件
tags: [vue]
---
### 实现一个简单的 vue 弹窗组件
/index.js
```javascript
import Vue from 'vue'
import Notice from './Notice.vue'

// function create (Component, props) {
//   // 创建⼀个Vue新实例
//   const vm = new Vue({
//     render (h) {
//       // render函数将传⼊组件配置对象转换为虚拟dom
//       return h(Component, { props })
//     },
//   }).$mount() //执⾏挂载函数，但未指定挂载⽬标，表示只执⾏初始化⼯作
//
//   // 将⽣成dom元素追加⾄body
//   document.body.appendChild(vm.$el)
//   // 给组件实例添加销毁⽅法
//   const comp = vm.$children[0]
//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
// }

function create (Component, props) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    propsData: props,
  })
  vm.$mount()
  // 将⽣成dom元素追加⾄body
  document.body.appendChild(vm.$el)
  // 给组件实例添加销毁⽅法
  vm.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
}

export default {
  install (Vue) {
    Vue.prototype.$notice = function (props) {
      create(Notice, props)
    }
  },
}
```
