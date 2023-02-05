## constructor()
1. 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
## render()
1. 是 class 组件中唯一必须实现的方法。  
2. 如果 shouldComponentUpdate() 返回 false，则不会调用 render()。
## componentDidMount()
1. 会在组件挂载后（插入 DOM 树中）立即调用。  
2. 如需通过网络请求获取数据，此处是实例化请求的好地方。   
比较适合添加订阅的地方  
3. 可以在 componentDidMount() 里直接调用 setState()【依赖于dom的操作】。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。（渲染两遍，用户看不到）
## componentDidUpdate(prevProps, prevState, snapshot)
1. 会在更新后会被立即调用。首次渲染不会执行此方法。 
2. 可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。(会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。)
3. 组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。
4. 如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。
```
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
## componentWillUnmount()
1. 会在组件卸载及销毁之前直接调用
2. 执行必要的清理操作(清除timer、取消网络请求、取消订阅)

## shouldComponentUpdate(nextProps, nextState)
1. 根据返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
2. 默认行为是 state 或 props  每次发生变化组件都会重新渲染
3. 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。
4. 首次渲染或使用 forceUpdate() 时不会调用该方法。
5. 返回 false 并不会阻止子组件在 state 更改时重新渲染。
## static getDerivedStateFromProps(props, state)
Derived --->派生的
1. state 的值在任何时候都取决于 props
2. 返回一个对象来更新 state，如果返回 null 则不更新任何内容
3. 有点类似vue的计算属性（memoization代替）
4. 此方法无权访问组件实例
## getSnapshotBeforeUpdate(prevProps, prevState)
Snapshot ---> 快照
1. 在最近一次渲染输出（提交到 DOM 节点）之前调用（内部状态已经改变，但是dom的更新还没执行）
2. 在render()和componentDidUpdate(prevProps, prevState, snapshot)之间调用
3. 返回值作为第三个参数snapshot
4. 一般获取上一次的dom状态（滚动位置等等）
---
Error boundaries
## static getDerivedStateFromError(error)
1. 会在后代组件抛出错误后被调用
2. 渲染之前
## componentDidCatch(error, info)
1. 在后代组件抛出错误后被调用
2. 它接收两个参数：
 - error —— 抛出的错误。
 - info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。
3. 渲染之后，提交之前
---

---
过时的生命周期方法
## UNSAFE_componentWillMount()
1. 在挂载之前被调用。它在 render() 之前调用，因此在此方法中同步调用 setState() 不会触发额外渲染。
2. 此方法是服务端渲染唯一会调用的生命周期函数。
## UNSAFE_componentWillReceiveProps(nextProps)
1. 在已挂载的组件接收新的 props 之前被调用
2. 如果父组件导致组件重新渲染，即使 props没有更改，也会调用此方法。
3. 初始渲染不会调用此方法。
## UNSAFE_componentWillUpdate()
1. 当组件收到新的 props 或 state 时，会在渲染之前调用 
2. 初始渲染不会调用此方法。

---
