(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{473:function(t,s,a){t.exports=a.p+"assets/img/defer-async.dc5fe641.png"},499:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"立即执行的脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#立即执行的脚本"}},[t._v("#")]),t._v(" 立即执行的脚本")]),t._v(" "),n("p",[t._v("浏览器会立即加载并执行指定的脚本"),n("br"),t._v("\n“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"defer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defer"}},[t._v("#")]),t._v(" defer")]),t._v(" "),n("p",[t._v("告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。"),n("br"),t._v("\n脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("defer")]),t._v(" ----\x3e "),n("code",[t._v("DOMContentLoaded")]),t._v("(事件在文档完全加载和解析后触发，无需等待样式表、图像和子框架完成加载) ----\x3e "),n("code",[t._v("load")])]),t._v(" "),n("li",[n("code",[t._v("DOMContentLoaded")]),t._v(" 事件处理程序等待具有 "),n("code",[t._v("defer")]),t._v(" 特性的脚本执行完成。它仅在脚本下载且执行结束后才会被触发")]),t._v(" "),n("li",[n("strong",[t._v("具有"),n("code",[t._v("defer")]),t._v("特性的脚本会并行下载，并顺序执行")])]),t._v(" "),n("li",[n("code",[t._v("defer")]),t._v(" "),n("strong",[t._v("特性仅适用于外部脚本")]),t._v("（如果 "),n("code",[t._v("<script>")]),t._v(" 脚本没有 "),n("code",[t._v("src")]),t._v("，则会忽略 "),n("code",[t._v("defer")]),t._v(" 特性）")])]),t._v(" "),n("h3",{attrs:{id:"async"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async"}},[t._v("#")]),t._v(" async")]),t._v(" "),n("ul",[n("li",[t._v("浏览器不会因 "),n("code",[t._v("async")]),t._v(" 脚本而阻塞（与 "),n("code",[t._v("defer")]),t._v(" 类似）。")]),t._v(" "),n("li",[t._v("其他脚本不会等待 "),n("code",[t._v("async")]),t._v(" 脚本加载完成，同样，"),n("code",[t._v("async")]),t._v(" 脚本也不会等待其他脚本。")]),t._v(" "),n("li",[n("code",[t._v("DOMContentLoaded")]),t._v(" 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）")]),t._v(" "),n("li",[n("code",[t._v("DOMContentLoaded")]),t._v(" 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）")]),t._v(" "),n("li",[t._v("当我们将独立的第三方脚本集成到页面时，此时采用异步加载方式是非常棒的：计数器，广告等，因为它们不依赖于我们的脚本，我们的脚本也不应该等待它们")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(473),alt:"defer-async"}})]),t._v(" "),n("h3",{attrs:{id:"动态脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态脚本"}},[t._v("#")]),t._v(" 动态脚本")]),t._v(" "),n("ul",[n("li",[t._v("当脚本被附加到文档时，脚本就会立即开始加载")]),t._v(" "),n("li",[t._v("默认情况下，动态脚本的行为是“异步”的")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),n("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\r\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" script1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n  script1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test1.js'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('1')")]),t._v("\r\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script1.async = false")]),t._v("\r\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n\r\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" script2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n  script2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test2.js'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('2')")]),t._v("\r\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script2.async = false")]),t._v("\r\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n")])])]),n("p",[t._v("不设置"),n("code",[t._v("script1.async = false")]),t._v(",结果为3，1，2或者3，2，1(没有顺序)"),n("br"),t._v("\n设置"),n("code",[t._v("script1.async = false")]),t._v(",结果为3，1，2")])])}),[],!1,null,null,null);s.default=e.exports}}]);