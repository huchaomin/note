(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{911:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"实例api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例api"}},[t._v("#")]),t._v(" 实例API")]),t._v(" "),a("h4",{attrs:{id:"一览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一览"}},[t._v("#")]),t._v(" 一览")]),t._v(" "),a("simple-table",[a("p",[t._v("2.x 全局 API                | 3.x 实例 API\nVue.config                 | app.config\nVue.config.productionTip   | 移除\nVue.config.ignoredElements | app.config.compilerOptions.isCustomElement\nVue.component              | app.component\nVue.directive              | app.directive\nVue.mixin                  | app.mixin\nVue.use                    | app.use\nVue.prototype              | app.config.globalProperties\nVue.extend                 | 移除")])]),t._v(" "),a("h4",{attrs:{id:"config-ignoredelements-替换为-config-iscustomelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-ignoredelements-替换为-config-iscustomelement"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.ignoredElements")]),t._v(" 替换为 "),a("code",[t._v("config.isCustomElement")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ignoredElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-el'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^ion-")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compilerOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isCustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ion-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("v-alert",{attrs:{color:"primary",text:"",icon:"mdi-lightbulb-multiple"}},[t._v("重要\n"),a("p",[t._v("在 Vue 3 中，元素是否是组件的检查已转移到模板编译阶段，因此只有在使用运行时编译器时此配置选项才会生效。如果你使用的是仅运行时构建版本，则 "),a("code",[t._v("isCustomElement")]),t._v(" 必须在构建步骤中传递给 "),a("code",[t._v("@vue/compiler-dom")]),t._v(" ——比如，通过 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/options.html#compileroptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-loader 中的 "),a("code",[t._v("compilerOptions")]),t._v(" 选项"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("当使用仅运行时构建版本时，如果配置了 "),a("code",[t._v("config.compilerOptions.isCustomElement")]),t._v(" 选项，将发出警告，以指示用户该选项应该在构建步骤中传递；")]),t._v(" "),a("li",[t._v("这将是 Vue CLI 配置中新的顶层选项。")])])]),t._v(" "),a("h4",{attrs:{id:"vue-prototype-替换为-config-globalproperties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-prototype-替换为-config-globalproperties"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.prototype")]),t._v(" 替换为 "),a("code",[t._v("config.globalProperties")])]),t._v(" "),a("p",[t._v("在 Vue 2 中， "),a("code",[t._v("Vue.prototype")]),t._v(" 通常用于添加所有组件都能访问的 property。")]),t._v(" "),a("p",[t._v("在 Vue 3 中与之对应的是 "),a("a",{attrs:{href:"https://v3.cn.vuejs.org/api/application-config.html#globalproperties",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("config.globalProperties")]),a("OutboundLink")],1),t._v("。这些 property 将被复制到应用中，作为实例化组件的一部分。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前 - Vue 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$http")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后 - Vue 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$http")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"vue-extend-移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-extend-移除"}},[t._v("#")]),t._v(" "),a("code",[t._v("Vue.extend")]),t._v(" 移除")]),t._v(" "),a("p",[t._v("在 Vue 2.x 中，"),a("code",[t._v("Vue.extend")]),t._v(" 曾经被用于创建一个基于 Vue 构造函数的“子类”，其参数应为一个包含组件选项的对象。在 Vue 3.x 中，我们已经没有组件构造器的概念了。应该始终使用 "),a("code",[t._v("createApp")]),t._v(" 这个全局 API 来挂载组件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前 - Vue 2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建构造器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>{{firstName}} {{lastName}} aka {{alias}}</p>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      firstName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Walter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lastName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'White'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Heisenberg'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个 Profile 的实例，并将它挂载到一个元素上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Profile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mount-point'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后 - Vue 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>{{firstName}} {{lastName}} aka {{alias}}</p>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      firstName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Walter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lastName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'White'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Heisenberg'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mount-point'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/migration/props-data.html#_2-x-%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("删除propsData"),a("OutboundLink")],1)]),t._v(" "),a("h5",{attrs:{id:"类型推断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[t._v("#")]),t._v(" 类型推断")]),t._v(" "),a("p",[t._v("在 Vue 2 中，"),a("code",[t._v("Vue.extend")]),t._v(" 也被用来为组件选项提供 TypeScript 类型推断。在 Vue 3 中，为了达到相同的目的，"),a("code",[t._v("defineComponent")]),t._v(" 全局 API 可以用来作为 "),a("code",[t._v("Vue.extend")]),t._v(" 的替代方案。")]),t._v(" "),a("p",[t._v("需要注意的是，虽然 "),a("code",[t._v("defineComponent")]),t._v(" 的返回类型是一个类似构造器的类型，但是它的目的仅仅是为了 TSX 的推断。在运行时 "),a("code",[t._v("defineComponent")]),t._v(" 里基本没有什么操作，只会原样返回该选项对象。")]),t._v(" "),a("h5",{attrs:{id:"组件继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件继承"}},[t._v("#")]),t._v(" 组件继承")]),t._v(" "),a("p",[t._v("在 Vue 3 中，我们强烈建议使用 "),a("strong",[t._v("组合式API")]),t._v(" 来替代继承与 mixin。如果因为某种原因仍然需要使用组件继承，你可以使用 "),a("a",{attrs:{href:"https://v3.cn.vuejs.org/api/options-composition.html#extends",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("extends")]),t._v(" 选项"),a("OutboundLink")],1),t._v(" 来代替 "),a("code",[t._v("Vue.extend")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"插件开发者须知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件开发者须知"}},[t._v("#")]),t._v(" 插件开发者须知")]),t._v(" "),a("p",[t._v("在 UMD 构建中，插件开发者使用 "),a("code",[t._v("Vue.use")]),t._v(" 来自动安装插件是一个通用的做法。例如，官方的 "),a("code",[t._v("vue-router")]),t._v(" 插件是这样在浏览器环境中自行安装的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inBrowser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* … */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inBrowser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("由于 "),a("code",[t._v("use")]),t._v(" 全局 API 在 Vue 3 中已无法使用，因此此方法将无法正常工作，并且调用 "),a("code",[t._v("Vue.use()")]),t._v(" 现在将触发一个警告。取而代之的是，开发者必须在应用实例上显式指定使用此插件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject"}},[t._v("#")]),t._v(" Provide / Inject")]),t._v(" "),a("p",[t._v("与在 2.x 根实例中使用 "),a("code",[t._v("provide")]),t._v(" 选项类似，Vue 3 应用实例也提供了可被应用内任意组件注入的依赖项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在入口中")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue 3 Guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在子组件中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    book"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'guide'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>{{ book }}</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在编写插件时使用 "),a("code",[t._v("provide")]),t._v(" 将尤其有用，可以替代 "),a("code",[t._v("globalProperties")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"在应用之间共享配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在应用之间共享配置"}},[t._v("#")]),t._v(" 在应用之间共享配置")]),t._v(" "),a("p",[t._v("在应用之间共享配置 (如组件或指令) 的一种方法是创建工厂函数，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Bar.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createMyApp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMyApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMyApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在，"),a("code",[t._v("Foo")]),t._v(" 和 "),a("code",[t._v("Bar")]),t._v(" 实例及其后代中都可以使用 "),a("code",[t._v("focus")]),t._v(" 指令。")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);