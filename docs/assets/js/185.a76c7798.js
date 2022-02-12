(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{694:function(t,e,r){"use strict";r.r(e);var o=r(7),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor()")]),t._v(" "),r("ol",[r("li",[t._v("如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。")])]),t._v(" "),r("h2",{attrs:{id:"render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render()")]),t._v(" "),r("ol",[r("li",[t._v("是 class 组件中唯一必须实现的方法。")]),t._v(" "),r("li",[t._v("如果 shouldComponentUpdate() 返回 false，则不会调用 render()。")])]),t._v(" "),r("h2",{attrs:{id:"componentdidmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount()")]),t._v(" "),r("ol",[r("li",[t._v("会在组件挂载后（插入 DOM 树中）立即调用。")]),t._v(" "),r("li",[t._v("如需通过网络请求获取数据，此处是实例化请求的好地方。"),r("br"),t._v("\n比较适合添加订阅的地方")]),t._v(" "),r("li",[t._v("可以在 componentDidMount() 里直接调用 setState()【依赖于dom的操作】。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。（渲染两遍，用户看不到）")])]),t._v(" "),r("h2",{attrs:{id:"componentdidupdate-prevprops-prevstate-snapshot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-prevprops-prevstate-snapshot"}},[t._v("#")]),t._v(" componentDidUpdate(prevProps, prevState, snapshot)")]),t._v(" "),r("ol",[r("li",[t._v("会在更新后会被立即调用。首次渲染不会执行此方法。")]),t._v(" "),r("li",[t._v("可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。(会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。)")]),t._v(" "),r("li",[t._v("组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。")]),t._v(" "),r("li",[t._v("如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("componentDidUpdate(prevProps) {\n  // 典型用法（不要忘记比较 props）：\n  if (this.props.userID !== prevProps.userID) {\n    this.fetchData(this.props.userID);\n  }\n}\n")])])]),r("h2",{attrs:{id:"componentwillunmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount()")]),t._v(" "),r("ol",[r("li",[t._v("会在组件卸载及销毁之前直接调用")]),t._v(" "),r("li",[t._v("执行必要的清理操作(清除timer、取消网络请求、取消订阅)")])]),t._v(" "),r("h2",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),r("ol",[r("li",[t._v("根据返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。")]),t._v(" "),r("li",[t._v("默认行为是 state 或 props  每次发生变化组件都会重新渲染")]),t._v(" "),r("li",[t._v("当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。")]),t._v(" "),r("li",[t._v("首次渲染或使用 forceUpdate() 时不会调用该方法。")]),t._v(" "),r("li",[t._v("返回 false 并不会阻止子组件在 state 更改时重新渲染。")])]),t._v(" "),r("h2",{attrs:{id:"static-getderivedstatefromprops-props-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops-props-state"}},[t._v("#")]),t._v(" static getDerivedStateFromProps(props, state)")]),t._v(" "),r("p",[t._v("Derived ---\x3e派生的")]),t._v(" "),r("ol",[r("li",[t._v("state 的值在任何时候都取决于 props")]),t._v(" "),r("li",[t._v("返回一个对象来更新 state，如果返回 null 则不更新任何内容")]),t._v(" "),r("li",[t._v("有点类似vue的计算属性（memoization代替）")]),t._v(" "),r("li",[t._v("此方法无权访问组件实例")])]),t._v(" "),r("h2",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),r("p",[t._v("Snapshot ---\x3e 快照")]),t._v(" "),r("ol",[r("li",[t._v("在最近一次渲染输出（提交到 DOM 节点）之前调用（内部状态已经改变，但是dom的更新还没执行）")]),t._v(" "),r("li",[t._v("在render()和componentDidUpdate(prevProps, prevState, snapshot)之间调用")]),t._v(" "),r("li",[t._v("返回值作为第三个参数snapshot")]),t._v(" "),r("li",[t._v("一般获取上一次的dom状态（滚动位置等等）")])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Error boundaries")]),t._v(" "),r("h2",{attrs:{id:"static-getderivedstatefromerror-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromerror-error"}},[t._v("#")]),t._v(" static getDerivedStateFromError(error)")]),t._v(" "),r("ol",[r("li",[t._v("会在后代组件抛出错误后被调用")]),t._v(" "),r("li",[t._v("渲染之前")])]),t._v(" "),r("h2",{attrs:{id:"componentdidcatch-error-info"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidcatch-error-info"}},[t._v("#")]),t._v(" componentDidCatch(error, info)")]),t._v(" "),r("ol",[r("li",[t._v("在后代组件抛出错误后被调用")]),t._v(" "),r("li",[t._v("它接收两个参数：")])]),t._v(" "),r("ul",[r("li",[t._v("error —— 抛出的错误。")]),t._v(" "),r("li",[t._v("info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("渲染之后，提交之前")])]),t._v(" "),r("hr"),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("过时的生命周期方法")]),t._v(" "),r("h2",{attrs:{id:"unsafe-componentwillmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillmount"}},[t._v("#")]),t._v(" UNSAFE_componentWillMount()")]),t._v(" "),r("ol",[r("li",[t._v("在挂载之前被调用。它在 render() 之前调用，因此在此方法中同步调用 setState() 不会触发额外渲染。")]),t._v(" "),r("li",[t._v("此方法是服务端渲染唯一会调用的生命周期函数。")])]),t._v(" "),r("h2",{attrs:{id:"unsafe-componentwillreceiveprops-nextprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillreceiveprops-nextprops"}},[t._v("#")]),t._v(" UNSAFE_componentWillReceiveProps(nextProps)")]),t._v(" "),r("ol",[r("li",[t._v("在已挂载的组件接收新的 props 之前被调用")]),t._v(" "),r("li",[t._v("如果父组件导致组件重新渲染，即使 props没有更改，也会调用此方法。")]),t._v(" "),r("li",[t._v("初始渲染不会调用此方法。")])]),t._v(" "),r("h2",{attrs:{id:"unsafe-componentwillupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-componentwillupdate"}},[t._v("#")]),t._v(" UNSAFE_componentWillUpdate()")]),t._v(" "),r("ol",[r("li",[t._v("当组件收到新的 props 或 state 时，会在渲染之前调用")]),t._v(" "),r("li",[t._v("初始渲染不会调用此方法。")])]),t._v(" "),r("hr")])}),[],!1,null,null,null);e.default=a.exports}}]);