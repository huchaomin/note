(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{914:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"api-treeshaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-treeshaking"}},[t._v("#")]),t._v(" API Treeshaking")]),t._v(" "),a("h4",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("如果你曾经在 Vue2.x 中手动操作过 DOM，你可能会用过这种方式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些和 DOM 有关的东西")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Vue.nextTick()")]),t._v(" 是一个直接暴露在单个 Vue 对象上的全局 API。实际上，实例方法 "),a("code",[t._v("$nextTick()")]),t._v(" 只是一个方便的 "),a("code",[t._v("Vue.nextTick()")]),t._v(" 包裹器，将其回调的 "),a("code",[t._v("this")]),t._v(" 上下文自动绑定到当前实例上，以方便使用。")]),t._v(" "),a("p",[t._v("但是，如果你从来都没有过手动操作 DOM 的必要，也没有在你的应用中使用或测试过异步组件，那该怎么办？或者，不管出于什么原因，你更喜欢使用老式的 "),a("code",[t._v("window.setTimeout()")]),t._v(" 来代替它？在这种情况下，"),a("code",[t._v("nextTick()")]),t._v(" 的代码就会变成死代码——也就是说，代码写了，但从未使用过。而死代码很难成为一个好的东西，尤其是在我们的客户端上下文中，每一个字节都很重要。")]),t._v(" "),a("p",[t._v("如 "),a("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),a("OutboundLink")],1),t._v(" 这样的模块打包工具支持 "),a("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tree-shaking"),a("OutboundLink")],1),t._v("，这是表达“消除死代码”的一个花哨术语。遗憾的是，由于之前的 Vue 版本中的代码编写方式，如 "),a("code",[t._v("Vue.nextTick()")]),t._v(" 这样的全局 API 是不支持 tree-shake 的，不管它们实际上是否被使用了，都会被包含在最终的打包产物中。")]),t._v(" "),a("p",[t._v("在 Vue 3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，对于 ES 模块构建版本来说，全局 API 现在通过具名导出进行访问。例如，我们之前的代码片段现在应该如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些和 DOM 有关的东西")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过这一更改，如果模块打包工具支持 tree-shaking，则 Vue 应用中未使用的全局 API 将从最终的打包产物中排除，从而获得最佳的文件大小。")]),t._v(" "),a("h4",{attrs:{id:"受影响的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受影响的-api"}},[t._v("#")]),t._v(" 受影响的 API")]),t._v(" "),a("p",[t._v("Vue 2.x 中的这些全局 API 受此更改的影响：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue.nextTick")])]),t._v(" "),a("li",[a("code",[t._v("Vue.observable")]),t._v(" (用 "),a("code",[t._v("Vue.reactive")]),t._v(" 替换)")]),t._v(" "),a("li",[a("code",[t._v("Vue.version")])]),t._v(" "),a("li",[a("code",[t._v("Vue.compile")]),t._v(" (仅完整构建版本)")]),t._v(" "),a("li",[a("code",[t._v("Vue.set")]),t._v(" (仅兼容构建版本)")]),t._v(" "),a("li",[a("code",[t._v("Vue.delete")]),t._v(" (仅兼容构建版本)")])]),t._v(" "),a("h4",{attrs:{id:"内部帮助器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部帮助器"}},[t._v("#")]),t._v(" 内部帮助器")]),t._v(" "),a("p",[t._v("除了公共 API，许多内部组件/帮助器现在也以具名的方式导出。这允许编译器只在代码被使用到时才引入并输出它。例如以下模板：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("将编译为类似于以下的内容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withDirectives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vShow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDirectives")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vShow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这实际上意味着只有在应用实际使用了 "),a("code",[t._v("Transition")]),t._v(" 组件它才会被导入。换句话说，如果应用没有使用任何 "),a("code",[t._v("Transition")]),t._v(" 组件，那么用于支持此功能的代码将不会出现在最终的打包产物中。")]),t._v(" "),a("p",[t._v("有了全局 tree-shaking 后，用户只需为他们实际使用到的功能“买单”。更棒的是，因为可选特性不会增加未使用它们的应用的打包产物大小，以后在追加核心功能时，即使对框架大小有所顾虑，它也将不再那么重要了。")]),t._v(" "),a("v-alert",{attrs:{type:"warning",text:"",icon:"mdi-alert-outline"}},[t._v("重要\n"),a("p",[t._v("以上仅适用于 "),a("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/installation.html#%E4%BD%BF%E7%94%A8-cdn-%E6%88%96%E6%B2%A1%E6%9C%89%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES 模块构建版本"),a("OutboundLink")],1),t._v("，用于支持 tree-shaking 的打包工具——UMD 构建仍然包括所有特性，并暴露 Vue 全局变量上的所有内容 (编译器将生成适当的输出以从该全局变量上使用 API，而不是导入)。")])]),t._v(" "),a("h2",{attrs:{id:"插件中的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件中的用法"}},[t._v("#")]),t._v(" 插件中的用法")]),t._v(" "),a("p",[t._v("如果你的插件依赖到了受影响的 Vue 2.x 全局 API，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 Vue 3 中，必须显式导入：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果使用了 webpack 这样的模块打包工具，这可能会导致 Vue 的源代码输出打包到插件中，而通常情况下，这并不是你所期望的。为了防止发生这种情况，一种常见做法是配置模块打包工具以将 Vue 从最终的打包产物中排除。对于 webpack 来说，你可以使用 "),a("a",{attrs:{href:"https://webpack.js.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("externals")]),a("OutboundLink")],1),t._v(" 配置选项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v("\n  externals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这将告诉 webpack 将 Vue 模块视为一个外部库，而不将它打包进来。")]),t._v(" "),a("p",[t._v("如果你选择的模块打包工具恰好是 "),a("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rollup"),a("OutboundLink")],1),t._v("，你基本上可以直接获得相同的效果。因为默认情况下，Rollup 会将绝对模块 id (在我们的例子中为 "),a("code",[t._v("'vue'")]),t._v(") 作为外部依赖项，而不会将它们包含在最终的打包产物中。但是在输出打包期间，它可能会抛出一个"),a("a",{attrs:{href:"https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency",target:"_blank",rel:"noopener noreferrer"}},[t._v("“将 vue 作为外部依赖”"),a("OutboundLink")],1),t._v("的警告，可使用 "),a("code",[t._v("external")]),t._v(" 选项阻止该警告：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rollup.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v("\n  external"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);