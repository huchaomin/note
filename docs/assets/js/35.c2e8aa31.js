(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{501:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"eslint-默认-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-默认-parser"}},[t._v("#")]),t._v(" eslint 默认 parser")]),t._v(" "),a("p",[t._v("只转换 js，默认支持 ES5 的语法，可以通过制定 parserOptions 给 Espree 传递如下选项"),a("br"),t._v("\nESLint 官方文档中的 parserOptions 只适用 Espree 解析器")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaFeatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("v-alert",{attrs:{type:"warning",text:"",icon:"mdi-alert-outline"}},[t._v("警告\n"),a("p",[t._v("ecmaVersion 可以开启更高 ES 版本的校验（已加入ES标准的语法，不包括实验性的语法）"),a("br"),t._v("\n但需要注意的是一些新标准中的语法对 ESLint 的版本也有要求，如果发现ESLint 不支持校验，可能需要升级 ESLint 版本")])]),t._v(" "),a("h3",{attrs:{id:"babel-eslint-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-eslint-parser"}},[t._v("#")]),t._v(" @babel/eslint-parser")]),t._v(" "),a("v-alert",{attrs:{color:"primary",text:"",icon:"mdi-lightbulb-multiple"}},[t._v("提示\n"),a("p",[t._v("ESLint的默认解析器和核心规则仅支持最新的最终 ECMAScript 标准，"),a("br"),t._v("\n不支持 Babel 提供的实验性（例如新功能）和非标准（例如Flow或TypeScript类型）语法。"),a("br"),t._v("\n@babel/eslint-parser 是允许 ESLint 在由 Babel 转换的源代码上运行的解析器")])]),t._v(" "),a("ul",[a("li",[t._v("该 parser 允许你使用 ESLint 校验所有 babel code")]),t._v(" "),a("li",[t._v("如果你使用该解析器，还要使用 babel")]),t._v(" "),a("li",[t._v("当你使用 babel 时，babel 的解析器会把你的 code 转换为 AST，该解析器会将其转换为 ESLint 能懂的 ESTree")]),t._v(" "),a("li",[t._v("该 praser 的 parserOptions 默认配置如下")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/eslint-parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    requireConfigFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否需要 babel 配置文件")]),t._v("\n    sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script 或者 module")]),t._v("\n    allowImportExportEverywhere"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部")]),t._v("\n    ecmaFeatures"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      globalReturn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置为 true，当 sourceType 为 script 时，允许全局 return")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    babelOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      configFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/config.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel 的配置文件，可以不传")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);