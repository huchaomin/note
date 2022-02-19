(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{791:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"es6与node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6与node"}},[s._v("#")]),s._v(" es6与node")]),s._v(" "),a("h4",{attrs:{id:"node加载es6模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node加载es6模块"}},[s._v("#")]),s._v(" node加载es6模块")]),s._v(" "),a("p",[s._v("Node 对 ES6 模块的处理比较麻烦，因为它有自己的 CommonJS 模块格式，与 ES6 模块格式是不兼容的。\n目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案。")]),s._v(" "),a("h4",{attrs:{id:"努力使es6应用在浏览器端和nodejs里面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#努力使es6应用在浏览器端和nodejs里面"}},[s._v("#")]),s._v(" 努力使es6应用在浏览器端和nodejs里面")]),s._v(" "),a("p",[s._v("ES6 模块应该是通用的，同一个模块不用修改，就可以用在浏览器环境和服务器环境。"),a("br"),s._v("\n为了达到这个目标，Node 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量。")]),s._v(" "),a("ol",[a("li",[s._v("首先，就是this关键字。")])]),s._v(" "),a("p",[s._v("ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("其次，以下这些"),a("strong",[s._v("顶层变量")]),s._v("在 ES6 模块之中都是不存在的。")])]),s._v(" "),a("ul",[a("li",[s._v("arguments")]),s._v(" "),a("li",[s._v("require")]),s._v(" "),a("li",[s._v("module")]),s._v(" "),a("li",[s._v("exports")]),s._v(" "),a("li",[s._v("__filename")]),s._v(" "),a("li",[s._v("__dirname")])]),s._v(" "),a("h4",{attrs:{id:"es6-模块加载-commonjs-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块加载-commonjs-模块"}},[s._v("#")]),s._v(" ES6 模块加载 CommonJS 模块")]),s._v(" "),a("p",[s._v("CommonJS 模块的输出都定义在module.exports这个属性上面。Node 的import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default xxx。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"commonjs-模块加载-es6-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块加载-es6-模块"}},[s._v("#")]),s._v(" CommonJS 模块加载 ES6 模块")]),s._v(" "),a("p",[s._v("CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。ES6 模块的所有输出接口，会成为输入对象的属性。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es.mjs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-default'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" foo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cjs.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" es_namespace "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./es.mjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es_namespace = {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   get default() {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("es_namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { bar:'my-default' }")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);