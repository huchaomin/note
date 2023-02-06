(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{755:function(t,e,n){"use strict";n.r(e);var a=n(7),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("渲染一些内容有以下三种方式")]),t._v(" "),n("ul",[n("li",[t._v("Route component")]),t._v(" "),n("li",[t._v("Route render")]),t._v(" "),n("li",[t._v("Route children\n三种渲染方式都将提供相同的三个路由属性：")]),t._v(" "),n("li",[t._v("match")]),t._v(" "),n("li",[t._v("location")]),t._v(" "),n("li",[t._v("history")])]),t._v(" "),n("h2",{attrs:{id:"route-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#route-component"}},[t._v("#")]),t._v(" Route component")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('const User = ({ match }) => {\n  return <h1>Hello {match.params.username}!</h1>\n}\n\n<Route path="/user/:username" component={User} />\n')])])]),n("blockquote",[n("p",[t._v("当你使用 component（而不是 render 或 children）时，Router 将根据指定的组件，使用 React.createElement 创建一个新的 React 元素。这意味着，如果你向 component 提供一个内联函数，那么每次渲染都会创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅仅更新现有组件。当使用内联函数进行内联渲染时，请使用 render 或 children（见下文）。")])]),t._v(" "),n("h2",{attrs:{id:"route-render"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#route-render"}},[t._v("#")]),t._v(" Route render")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 方便的内联渲染\n<Route path="/home" render={() => <div>Home</div>} />\n\n// 包装\nconst FadingRoute = ({ component: Component, ...rest }) => (\n  <Route {...rest} render={props => (\n    <FadeIn>\n      <Component {...props} />\n    </FadeIn>\n  )} />\n)\n\n<FadingRoute path="/cool" component={Something} />\n')])])]),n("blockquote",[n("p",[t._v("警告：Route component 优先于 Route render，因此不要在同一个 Route 中同时使用两者。")])]),t._v(" "),n("h2",{attrs:{id:"route-children"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#route-children"}},[t._v("#")]),t._v(" Route children")]),t._v(" "),n("p",[t._v("有时候不论 path 是否匹配位置，你都想渲染一些内容。在这种情况下，你可以使用 children 属性。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const ListItemLink = ({ to, ...rest }) => (\n  <Route path={to} children={({ match }) => (\n    <li className={match ? 'active' : ''}>\n      <Link to={to} {...rest} />\n    </li>\n  )} />\n)\n\n<ul>\n  <ListItemLink to=\"/somewhere\" />\n  <ListItemLink to=\"/somewhere-else\" />\n</ul>\n")])])]),n("blockquote",[n("p",[t._v("警告：Route component 和 Route render 优先于 Route children，因此不要在同一个 Route 中同时使用多个。")])]),t._v(" "),n("hr"),t._v(" "),n("h5",{attrs:{id:"path-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path-string"}},[t._v("#")]),t._v(" path: string")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<Route path="/users/:id" component={User} />\n')])])]),n("p",[t._v("没有定义 path 的 Route 总是会被匹配。")]),t._v(" "),n("h5",{attrs:{id:"exact-bool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exact-bool"}},[t._v("#")]),t._v(" exact: bool")]),t._v(" "),n("h5",{attrs:{id:"strict-bool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#strict-bool"}},[t._v("#")]),t._v(" strict: bool")]),t._v(" "),n("p",[t._v("有尾部斜杠的 path 仅与具有尾部斜杠的 location.pathname 匹配。当 location.pathname 中有附加的 URL 片段时，strict 就没有效果了。")]),t._v(" "),n("h5",{attrs:{id:"location-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#location-object"}},[t._v("#")]),t._v(" location: object")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import {\n  TransitionGroup,\n  CSSTransition\n} from "react-transition-group";\n<TransitionGroup>\n  {/*\n    This is no different than other usage of\n    <CSSTransition>, just make sure to pass\n    `location` to `Switch` so it can match\n    the old location as it animates out.\n  */}\n  <CSSTransition\n    key={location.key}\n    classNames="fade"\n    timeout={300}\n  >\n    <Switch location={location}>\n      <Route path="/hsl/:h/:s/:l" component={HSL} />\n      <Route path="/rgb/:r/:g/:b" component={RGB} />\n    </Switch>\n  </CSSTransition>\n</TransitionGroup>\n')])])]),n("h5",{attrs:{id:"sensitive-bool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sensitive-bool"}},[t._v("#")]),t._v(" sensitive: bool")]),t._v(" "),n("p",[t._v("如果为 true，进行匹配时将区分大小写。")])])}),[],!1,null,null,null);e.default=o.exports}}]);