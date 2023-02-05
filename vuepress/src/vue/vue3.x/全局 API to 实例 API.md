---
date: '1649479772845'
title: vue3 实例API
description: vue3 新增实例API
tags: [vue]
---
### 实例API
#### 一览
::: table
2.x 全局 API                | 3.x 实例 API
Vue.config                 | app.config
Vue.config.productionTip   | 移除
Vue.config.ignoredElements | app.config.compilerOptions.isCustomElement
Vue.component              | app.component
Vue.directive              | app.directive
Vue.mixin                  | app.mixin
Vue.use                    | app.use
Vue.prototype              | app.config.globalProperties
Vue.extend                 | 移除
:::
#### `config.ignoredElements` 替换为 `config.isCustomElement`
```js
// 之前
Vue.config.ignoredElements = ['my-el', /^ion-/]

// 之后
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
```

:::tip 重要

在 Vue 3 中，元素是否是组件的检查已转移到模板编译阶段，因此只有在使用运行时编译器时此配置选项才会生效。如果你使用的是仅运行时构建版本，则 `isCustomElement` 必须在构建步骤中传递给 `@vue/compiler-dom` ——比如，通过 [vue-loader 中的 `compilerOptions` 选项](https://vue-loader.vuejs.org/options.html#compileroptions)。

- 当使用仅运行时构建版本时，如果配置了 `config.compilerOptions.isCustomElement` 选项，将发出警告，以指示用户该选项应该在构建步骤中传递；
- 这将是 Vue CLI 配置中新的顶层选项。
:::

#### `Vue.prototype` 替换为 `config.globalProperties`

在 Vue 2 中， `Vue.prototype` 通常用于添加所有组件都能访问的 property。

在 Vue 3 中与之对应的是 [`config.globalProperties`](https://v3.cn.vuejs.org/api/application-config.html#globalproperties)。这些 property 将被复制到应用中，作为实例化组件的一部分。

```js
// 之前 - Vue 2
Vue.prototype.$http = () => {}
```

```js
// 之后 - Vue 3
const app = createApp({})
app.config.globalProperties.$http = () => {}
```

#### `Vue.extend` 移除

在 Vue 2.x 中，`Vue.extend` 曾经被用于创建一个基于 Vue 构造函数的“子类”，其参数应为一个包含组件选项的对象。在 Vue 3.x 中，我们已经没有组件构造器的概念了。应该始终使用 `createApp` 这个全局 API 来挂载组件：

```js
// 之前 - Vue 2

// 创建构造器
const Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建一个 Profile 的实例，并将它挂载到一个元素上
new Profile().$mount('#mount-point')
```

```js
// 之后 - Vue 3
const Profile = {
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
}
Vue.createApp(Profile).mount('#mount-point')
```
[删除propsData](https://v3.cn.vuejs.org/guide/migration/props-data.html#_2-x-%E8%AF%AD%E6%B3%95)
##### 类型推断

在 Vue 2 中，`Vue.extend` 也被用来为组件选项提供 TypeScript 类型推断。在 Vue 3 中，为了达到相同的目的，`defineComponent` 全局 API 可以用来作为 `Vue.extend` 的替代方案。

需要注意的是，虽然 `defineComponent` 的返回类型是一个类似构造器的类型，但是它的目的仅仅是为了 TSX 的推断。在运行时 `defineComponent` 里基本没有什么操作，只会原样返回该选项对象。

##### 组件继承

在 Vue 3 中，我们强烈建议使用 **组合式API** 来替代继承与 mixin。如果因为某种原因仍然需要使用组件继承，你可以使用 [`extends` 选项](https://v3.cn.vuejs.org/api/options-composition.html#extends) 来代替 `Vue.extend`。

#### 插件开发者须知

在 UMD 构建中，插件开发者使用 `Vue.use` 来自动安装插件是一个通用的做法。例如，官方的 `vue-router` 插件是这样在浏览器环境中自行安装的：

```js
var inBrowser = typeof window !== 'undefined'
/* … */
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}
```

由于 `use` 全局 API 在 Vue 3 中已无法使用，因此此方法将无法正常工作，并且调用 `Vue.use()` 现在将触发一个警告。取而代之的是，开发者必须在应用实例上显式指定使用此插件：

```js
const app = createApp(MyApp)
app.use(VueRouter)
```

#### Provide / Inject

与在 2.x 根实例中使用 `provide` 选项类似，Vue 3 应用实例也提供了可被应用内任意组件注入的依赖项：

```js
// 在入口中
app.provide('guide', 'Vue 3 Guide')

// 在子组件中
export default {
  inject: {
    book: {
      from: 'guide'
    }
  },
  template: `<div>{{ book }}</div>`
}
```

在编写插件时使用 `provide` 将尤其有用，可以替代 `globalProperties`。

#### 在应用之间共享配置

在应用之间共享配置 (如组件或指令) 的一种方法是创建工厂函数，如下所示：

```js
import { createApp } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const createMyApp = options => {
  const app = createApp(options)
  app.directive('focus' /* ... */)

  return app
}

createMyApp(Foo).mount('#foo')
createMyApp(Bar).mount('#bar')
```

现在，`Foo` 和 `Bar` 实例及其后代中都可以使用 `focus` 指令。
