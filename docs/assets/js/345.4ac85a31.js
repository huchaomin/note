(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{915:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"可选的props声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选的props声明"}},[t._v("#")]),t._v(" 可选的props声明")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/rfcs/pull/25/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方英文markdowm文件"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("When a component has no "),a("code",[t._v("props")]),t._v(" declarations, all attributes passed by the parent are exposed in "),a("code",[t._v("this.$props")]),t._v(". Unlike declared props, they will NOT be exposed directly on "),a("code",[t._v("this")]),t._v(". In addition, in this case "),a("code",[t._v("this.$attrs")]),t._v(" and "),a("code",[t._v("this.$props")]),t._v(" will be pointing to the same object.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $props.foo }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n// If the component has no other options, the entire `"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("` block can be dropped"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so the following would be a valid "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SFC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"函数式组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式组件"}},[t._v("#")]),t._v(" 函数式组件")]),t._v(" "),a("p",[t._v("Similar to stateful components, when props are declared, the "),a("code",[t._v("props")]),t._v(" arguments will only contain the declared props - attributes received but not declared as props will be in the argument ("),a("code",[t._v("attrs")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("FunctionalComp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attrs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const FunctionalComp = (props, { slots, attrs }) => { 难道不是这样吗")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `attrs` contains all received attributes except declared `foo`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nFunctionalComp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);