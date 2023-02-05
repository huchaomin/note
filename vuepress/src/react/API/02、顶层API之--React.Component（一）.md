## 概览
```
class Welcome extends React.Component {
  render() {        //只有此方法必须
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
## 组件的生命周期
##### 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()  

##### 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
##### 当组件从 DOM 中移除时会调用如下方法：
- componentWillUnmount()
##### 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
- static getDerivedStateFromError()
- componentDidCatch()
## 其他 APIs
- setState()
- forceUpdate()
## class 属性
- defaultProps
- displayName
## 实例属性
- props
- state
