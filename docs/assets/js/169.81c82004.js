(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{678:function(e,n,r){"use strict";r.r(n);var t=r(7),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("主要用来获取直接dom或组件实例")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//创建一个可以接收ref的组件\nconst FancyButton = React.forwardRef((props, ref) => (\n  <button ref={ref} className="FancyButton">\n    {props.children}\n  </button>\n))\n\n//创建一个直接获取 DOM button 的 ref\nconst ref = React.createRef()   //此时{current:null}\n\n//使用组件时将ref传进去\n<FancyButton ref={ref}>Click me!</FancyButton>\n\n//mounted之后打印\ncomponentDidMount() {\n\tconsole.log(ref.current)    //<button class="FancyButton">Click me!</button>\n}\n')])])]),r("h2",{attrs:{id:"注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意")]),e._v(" "),r("ol",[r("li",[e._v("第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。")]),e._v(" "),r("li",[e._v("Ref 引用不仅限于 DOM 元素，你也可以转发 class 组件实例")])]),e._v(" "),r("h2",{attrs:{id:"在高阶组件中转发-refs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在高阶组件中转发-refs"}},[e._v("#")]),e._v(" 在高阶组件中转发 refs")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function logProps(Component) {\n  class LogProps extends React.Component {\n    render() {\n      const {forwardedRef, ...rest} = this.props;\n\n      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref\n      return <Component ref={forwardedRef} {...rest} />;\n    }\n  }\n\n  // 注意 React.forwardRef 回调的第二个参数 “ref”。\n  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”\n  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。\n  return React.forwardRef((props, ref) => (<LogProps {...props} forwardedRef={ref} />));\n}\n")])])]),r("p",[e._v("使用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//将一个可以接收ref的组件(同上)传进去\nconst LogProps = logProps(FancyButton)\n\n//创建一个直接获取 DOM button 的 ref\nconst ref = React.createRef()   //此时{current:null}\n\n//使用组件时将ref传进去\n<LogProps ref={ref}>Click me!</LogProps>\n\n//mounted之后打印\ncomponentDidMount() {\n\tconsole.log(ref.current)    //<button class="FancyButton">Click me!</button>\n}\n')])])]),r("h2",{attrs:{id:"在-devtools-中显示自定义名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-devtools-中显示自定义名称"}},[e._v("#")]),e._v(" 在 DevTools 中显示自定义名称")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const WrappedComponent = React.forwardRef((props, ref) => {\n  return <LogProps {...props} forwardedRef={ref} />;\n});\n//在 DevTools 中显示为 “ForwardRef”\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const WrappedComponent = React.forwardRef(\n  function myFunction(props, ref) {\n    return <LogProps {...props} forwardedRef={ref} />;\n  }\n);\n//在 DevTools 中显示为 “ForwardRef(myFunction)”\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function logProps(Component) {\n  class LogProps extends React.Component {\n    // ...\n  }\n\n  function forwardRef(props, ref) {\n    return <LogProps {...props} forwardedRef={ref} />;\n  }\n\n  // 在 DevTools 中为该组件提供一个更有用的显示名。\n  // 例如 “ForwardRef(logProps(MyComponent))”\n  const name = Component.displayName || Component.name;\n  forwardRef.displayName = `logProps(${name})`;\n\n  return React.forwardRef(forwardRef);\n}\n//在 DevTools 中显示为 “ForwardRef(logProps([Component的displayName ||name]))”\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);