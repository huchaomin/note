(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{676:function(r,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[r._v("#")]),r._v(" 原因")]),r._v(" "),e("p",[r._v("过去，组件内的 JavaScript 错误会导致 React 的内部状态被破坏，并且在下一次渲染时 产生 可能无法追踪的 错误。这些错误基本上是由较早的其他代码（非 React 组件代码）错误引起的，但 React 并没有提供一种在组件中优雅处理这些错误的方式，也无法从错误中恢复。"),e("br"),r._v(" "),e("strong",[r._v("自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载")])]),r._v(" "),e("h2",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[r._v("#")]),r._v(" 定义")]),r._v(" "),e("ol",[e("li",[r._v("错误边界是一种 React 组件")]),r._v(" "),e("li",[r._v("可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。")]),r._v(" "),e("li",[r._v("错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。")])]),r._v(" "),e("h2",{attrs:{id:"无法捕获的错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无法捕获的错误"}},[r._v("#")]),r._v(" 无法捕获的错误")]),r._v(" "),e("ol",[e("li",[r._v("事件处理")]),r._v(" "),e("li",[r._v("异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）")]),r._v(" "),e("li",[r._v("服务端渲染")]),r._v(" "),e("li",[r._v("它自身抛出来的错误（并非它的子组件）")])]),r._v(" "),e("h2",{attrs:{id:"例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[r._v("#")]),r._v(" 例")]),r._v(" "),e("p",[r._v("如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就==变成一个错误边界组件==。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { error: null, errorInfo: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    // 更新 state 使下一次渲染能够显示降级后的 UI\n    // return { error: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    this.setState({\n      error: error,\n      errorInfo: errorInfo\n    })\n  }\n\n  render() {\n    if (this.state.errorInfo) {\n      // 你可以自定义降级后的 UI 并渲染\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children; \n  }\n}\n")])])]),e("p",[r._v("然后你可以将它作为一个常规组件去使用：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("<ErrorBoundary>\n  <MyWidget />\n</ErrorBoundary>\n")])])]),e("blockquote",[e("p",[r._v("错误边界的工作方式类似于 JavaScript 的 catch {}"),e("br"),r._v("\n不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。"),e("br"),r._v("\n大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。"),e("br"),r._v("\n错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。"),e("br"),r._v("\n如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界")])]),r._v(" "),e("h2",{attrs:{id:"错误边界应该放置在哪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误边界应该放置在哪"}},[r._v("#")]),r._v(" 错误边界应该放置在哪")])])}),[],!1,null,null,null);t.default=n.exports}}]);