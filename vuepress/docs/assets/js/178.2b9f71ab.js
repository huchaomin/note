(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{742:function(e,n,t){"use strict";t.r(n);var s=t(7),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[e._v("#")]),e._v(" 定义")]),e._v(" "),t("p",[e._v("一个渲染函数的prop"),t("br"),e._v("\n是指一种在 React 组件之间使用一个 =="),t("strong",[e._v("值为函数")]),e._v("== 的 prop 共享代码的简单技术")]),e._v(" "),t("h2",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),t("p",[e._v("具有 render prop 的==组件==接受一个函数，该函数返回一个 ==React 元素并调用它==而不是实现自己的渲染逻辑。")]),e._v(" "),t("h2",{attrs:{id:"使用-render-props-来解决横切关注点-cross-cutting-concerns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-render-props-来解决横切关注点-cross-cutting-concerns"}},[e._v("#")]),e._v(" 使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Cat extends React.Component {\n  render() {\n    const mouse = this.props.mouse;\n    return (\n      <img src=\"/cat.jpg\" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />\n    );\n  }\n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class MouseWithCat extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleMouseMove.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleMouseMove(event) {\n    this.setState({\n      x: event.clientX,\n      y: event.clientY\n    });\n  }\n\n  render() {\n    return (\n      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n\n        {/*\n          我们可以在这里换掉 <p> 的 <Cat>   ......\n          但是接着我们需要创建一个单独的 <MouseWithSomethingElse>\n          每次我们需要使用它时，<MouseWithCat> 是不是真的可以重复使用.\n        */}\n        <Cat mouse={this.state} />\n      </div>\n    );\n  }\n}\n\nclass MouseTracker extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>移动鼠标!</h1>\n        <MouseWithCat />\n      </div>\n    );\n  }\n}\n//下次有个MouseWithDog就不能复用了\n")])])]),t("p",[e._v("改")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Mouse extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleMouseMove.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleMouseMove(event) {\n    this.setState({\n      x: event.clientX,\n      y: event.clientY\n    });\n  }\n\n  render() {\n    return (\n      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n\n        {/*\n          Instead of providing a static representation of what <Mouse> renders,\n          use the `render` prop to dynamically determine what to render.\n        */}\n        {this.props.render(this.state)}     //抛出行为\n      </div>\n    );\n  }\n}\n\nclass MouseTracker extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>移动鼠标!</h1>\n        <Mouse render={mouse => (       //接收行为\n          <Cat mouse={mouse} />\n        )}/>\n      </div>\n    );\n  }\n}\n")])])]),t("p",[e._v("或")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function mouseWidth(Component) {\n    return class extends React.Component {\n        constructor(props){\n            super(props)\n            this.handleMouseMove = this.handleMouseMove.bind(this);\n            this.state = { x: 0, y: 0 };\n        }\n        handleMouseMove(event) {\n            this.setState({\n                x: event.clientX,\n                y: event.clientY\n            });\n        }\n        render() {\n            return (\n                <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>\n                    <Component {...this.props} mouse={this.state}/>\n                </div>\n            );\n        }\n    }\n}\nconst MouseWidthCat = mouseWidth(Cat)\n<MouseWidthCat />\n")])])]),t("p",[e._v("或")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function mouseWidth(Component) {\n  return class extends React.Component {\n    render() {\n      return (\n        <Mouse render={mouse => (\n          <Component {...this.props} mouse={mouse} />\n        )}/>\n      );\n    }\n  }\n}\n")])])]),t("h2",{attrs:{id:"不一定要用-render-这个词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不一定要用-render-这个词"}},[e._v("#")]),e._v(" 不一定要用‘render’这个词")]),e._v(" "),t("p",[e._v("比如用children")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<Mouse children={mouse => (\n  <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>\n)}/>\n//等价于\n<Mouse>\n  {mouse => (\n    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>\n  )}\n</Mouse>\n")])])]),t("p",[e._v("抛出行为")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{this.props.children(this.state)}     \n")])])]),t("h2",{attrs:{id:"将-render-props-与-react-purecomponent-一起使用时要小心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-render-props-与-react-purecomponent-一起使用时要小心"}},[e._v("#")]),e._v(" 将 Render Props 与 React.PureComponent 一起使用时要小心")]),e._v(" "),t("p",[e._v("如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 React.PureComponent 带来的优势。"),t("br"),e._v("\n因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 render 对于 render prop 将会生成一个新的值。"),t("br"),e._v("\n解决")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class MouseTracker extends React.Component {\n  // 定义为实例方法，`this.renderTheCat`始终\n  // 当我们在渲染中使用它时，它指的是相同的函数\n  renderTheCat(mouse) {\n    return <Cat mouse={mouse} />;\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Move the mouse around!</h1>\n        <Mouse render={this.renderTheCat} />        //每次对比的都是相同的函数，而不是新建的函数\n      </div>\n    );\n  }\n}\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);