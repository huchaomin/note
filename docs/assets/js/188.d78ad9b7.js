(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{695:function(t,a,e){"use strict";e.r(a);var s=e(7),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("浏览器 DOM 实现的一些特殊情况")]),t._v(" "),e("h2",{attrs:{id:"在-react-中-所有的-dom-特性和属性-包括事件处理-都应该是小驼峰命名的方式。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-react-中-所有的-dom-特性和属性-包括事件处理-都应该是小驼峰命名的方式。"}},[t._v("#")]),t._v(" 在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。")]),t._v(" "),e("p",[t._v("例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("tabIndex ---\x3e tabindex\nonClick ---\x3e onclick\n")])])]),e("h5",{attrs:{id:"checked"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checked"}},[t._v("#")]),t._v(" checked")]),t._v(" "),e("ol",[e("li",[t._v("当 input 组件的 type 类型为 checkbox 或 radio 时"),e("br"),t._v("\n可以使用它来设置组件是否被选中")]),t._v(" "),e("li",[t._v("非受控组件用defaultChecked")])]),t._v(" "),e("h5",{attrs:{id:"classname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classname"}},[t._v("#")]),t._v(" className")]),t._v(" "),e("ol",[e("li",[t._v("用于所有常规 DOM 节点和 SVG 元素的class")]),t._v(" "),e("li",[t._v("Web Components 用class")])]),t._v(" "),e("h5",{attrs:{id:"dangerouslysetinnerhtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslysetinnerhtml"}},[t._v("#")]),t._v(" dangerouslySetInnerHTML")]),t._v(" "),e("ol",[e("li",[t._v("是 React 为浏览器 DOM 提供 innerHTML 的替换方案")]),t._v(" "),e("li",[t._v("需要向其传递包含 key 为 __html 的对象，以此来警示你。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n")])])]),e("h5",{attrs:{id:"htmlfor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlfor"}},[t._v("#")]),t._v(" htmlFor")]),t._v(" "),e("p",[t._v("由于 for 在 JavaScript 中是保留字，所以 React 元素中使用了 htmlFor 来代替")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<label htmlFor="name"></label>\n')])])]),e("h5",{attrs:{id:"onchange"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onchange"}},[t._v("#")]),t._v(" onChange")]),t._v(" "),e("p",[t._v("每当表单字段变化时，该事件都会被触发。类似于oninput")]),t._v(" "),e("h5",{attrs:{id:"selected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selected"}},[t._v("#")]),t._v(" selected")]),t._v(" "),e("p",[t._v("option 组件支持 selected 属性。你可以使用该属性设置组件是否被选择。")]),t._v(" "),e("h5",{attrs:{id:"style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[t._v("#")]),t._v(" style")]),t._v(" "),e("ol",[e("li",[t._v("通常不推荐将 style 属性作为设置元素样式的主要方式。")]),t._v(" "),e("li",[t._v("style 在 React 应用中多用于在渲染过程中添加动态计算的样式")]),t._v(" "),e("li",[t._v("style 接受一个采用==小驼峰命名==属性的 JavaScript 对象")]),t._v(" "),e("li",[t._v("这与 DOM 中 style 的 JavaScript 属性是一致的，同时会更高效的，且能预防跨站脚本（XSS）的安全漏洞。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const divStyle = {\n  color: 'blue',\n  backgroundImage: 'url(' + imgUrl + ')',\n};\n\nfunction HelloWorldComponent() {\n  return <div style={divStyle}>Hello World!</div>;\n}\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("样式不会自动补齐前缀。如需支持旧版浏览器，请手动补充对应的样式属性：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//除了ms其他前缀都要大写开头\nconst divStyle = {\n  WebkitTransition: 'all', // note the capital 'W' here\n  msTransition: 'all' // 'ms' is the only lowercase vendor prefix\n};\n\nfunction ComponentWithTransition() {\n  return <div style={divStyle}>This should work cross-browser</div>;\n}\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("React 会自动添加 ”px” 后缀到内联样式为==数字==的属性后，请将此值设为数字与所需单位组成的==字符串==")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Result style: '10px'\n<div style={{ height: 10 }}>\n  Hello World!\n</div>\n\n// Result style: '10%'\n<div style={{ height: '10%' }}>\n  Hello World!\n</div>\n//并非所有的属性值都转化为px字符串，如（zoom,order,flex）\n")])])]),e("h5",{attrs:{id:"value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[t._v("#")]),t._v(" value")]),t._v(" "),e("ol",[e("li",[t._v("input 和 textarea 组件支持 value 属性。你可以使用它为组件设置 value。")]),t._v(" "),e("li",[t._v("非受控组件用defaultValue")])]),t._v(" "),e("h2",{attrs:{id:"非小驼峰命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非小驼峰命名"}},[t._v("#")]),t._v(" 非小驼峰命名")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("data-*\naria-*\n单个单词（全小写）\n自定义属性名（全小写）\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);