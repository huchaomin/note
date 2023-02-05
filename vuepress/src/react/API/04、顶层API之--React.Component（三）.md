可以在组件中调用的方法
## setState(updater[, callback])
1. 对组件 state 的更改排入队列,并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件
2. 为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。
3. setState() 并不总是立即更新组件。它会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患。
4. 使用 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)），这两种方式都可以保证在应用更新后触发。
5. 第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行。通常，我们建议使用 componentDidUpdate() 来代替此方式。
```
this.setState((state, props) => {
  return {counter: state.counter + props.step};     //浅合并到state中
});
```
## forceUpdate(callback)
1. 调用 forceUpdate() 将致使组件调用 render() 方法
2. 此操作会跳过该组件的 shouldComponentUpdate()
3. 但其子组件会触发正常的生命周期方法，包括 shouldComponentUpdate() 方法
4. 应该避免使用 forceUpdate()，尽量在 render() 中使用 this.props 和 this.state。
---
Class 属性
## defaultProps
为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。
```
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```
如果设置为static defaultProps,需要ES7转码格式
## displayName
displayName 字符串多用于调试消息