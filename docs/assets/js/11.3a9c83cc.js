(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{473:function(s,a,t){"use strict";t.r(a);var r=t(5),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"配置方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置方法"}},[s._v("#")]),s._v(" 配置方法")]),s._v(" "),t("p",[s._v("(1)package.json(推荐写法)")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserslist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 1 version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"maintained node versions"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not dead"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("(2).browserslistrc 或 browserslist")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("last 1 version\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" 1%\nmaintained node versions\nnot dead\n")])])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("上面所说的配置好以后，脚手架工具会自动读取这些配置来转译的 JavaScript 特性和添加需要的 CSS 浏览器前缀"),t("br"),s._v("\n使用配置的工具有很多")]),s._v(" "),t("ul",[t("li",[s._v("Autoprefixer")]),s._v(" "),t("li",[s._v("Babel")]),s._v(" "),t("li",[s._v("postcss-preset-env")]),s._v(" "),t("li",[s._v("eslint-plugin-compat")]),s._v(" "),t("li",[s._v("stylelint-no-unsupported-browser-features")]),s._v(" "),t("li",[s._v("postcss-normalize")]),s._v(" "),t("li",[s._v("等等")])]),s._v(" "),t("h3",{attrs:{id:"多配置的应用顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多配置的应用顺序"}},[s._v("#")]),s._v(" 多配置的应用顺序")]),s._v(" "),t("ul",[t("li",[s._v("工具 options，例如 Autoprefixer 工具配置中的 browsers 属性")]),s._v(" "),t("li",[s._v("BROWSERSLIST 环境变量")]),s._v(" "),t("li",[s._v("当前目录或者上级目录的browserslist配置文件")]),s._v(" "),t("li",[s._v("当前目录或者上级目录的browserslistrc配置文件")]),s._v(" "),t("li",[s._v("当前目录或者上级目录的package.json配置文件里面的browserslist配置项")]),s._v(" "),t("li",[s._v("如果上述的配置文件缺失或者其他因素导致未能生成有效的配置，browserslist 将使用默认配置")])]),s._v(" "),t("h3",{attrs:{id:"默认值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[s._v("#")]),s._v(" 默认值")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" 0.5%\nlast 2 versions\nFirefox ESR\nnot dead\n")])])]),t("h3",{attrs:{id:"vue-cli-自动生成的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-自动生成的配置"}},[s._v("#")]),s._v(" vue-cli 自动生成的配置")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" 1%\nlast 2 versions\nnot dead\n")])])]),t("h3",{attrs:{id:"配置语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置语义"}},[s._v("#")]),s._v(" 配置语义")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("> 5%__")]),s._v(" :基于全球使用率统计而选择的浏览器版本范围。>=,<,<=同样适用")]),s._v(" "),t("li",[t("code",[s._v("Firefox ESR")]),s._v(" :最新的火狐 ESR（长期支持版） 版本的浏览器")]),s._v(" "),t("li",[t("code",[s._v("dead")]),s._v(" :通过last 2 versions筛选的浏览器版本中，全球使用率低于0.5%并且官方声明不在维护或者事实上已经两年没有再更新的版本。目前符合条件的有 IE10,IE_Mob 10,BlackBerry 10,BlackBerry7,OperaMobile 12.1")]),s._v(" "),t("li",[t("code",[s._v("last 2 versions")]),s._v(" :每个浏览器最近的两个大版本")]),s._v(" "),t("li",[t("code",[s._v("last 2 Chrome versions")]),s._v(" :chrome 浏览器最近的两个版本")]),s._v(" "),t("li",[t("code",[s._v("last 2 major versions")]),s._v(" :最近的两个发行版，包括所有的次版本号和补丁版本号变更的浏览器版本")]),s._v(" "),t("li",[t("code",[s._v("not ie <= 8")]),s._v(" : 浏览器范围的取反")])]),s._v(" "),t("v-alert",{attrs:{color:"primary",icon:"mdi-lightbulb-multiple"}},[s._v("提示\n"),t("p",[s._v("Browserslist 的数据都是来自"),t("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Can I Use"),t("OutboundLink")],1),s._v("的"),t("br"),s._v("\n如果你想知道配置语句的查询结果可以使用npx browserslist")])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npx browserslist")]),s._v("\nand_chr 96\nand_ff 94\nand_qq 10.4\nand_uc 12.12\nandroid 96\nbaidu 7.12\nchrome 96\nchrome 95\nopera 81\nopera 80\nsafari 15.1\nsafari 15\nsafari 14.1\nsafari 13.1\nsamsung 15.0\nsamsung 14.0\n")])])]),t("h4",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903669524086797",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.cn/post/6844903669524086797"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=e.exports}}]);