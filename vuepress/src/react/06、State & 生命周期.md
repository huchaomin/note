State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
## 向类组件中添加局部的状态
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
//此时还不会自动更新
```
## 添加生命周期
```
//相当于vue的mounted
componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
//移除dom元素
componentWillUnmount() {
    clearInterval(this.timerID);
}

tick() {
    this.setState({
        date: new Date()
    });
}
```
## 正确使用State
##### 不要直接修改状态
构造函数是唯一可以给this.state赋值的地方
```
//其他地方
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
```
##### 状态的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。  
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
## 数据是向下流动的
组件可以选择把它的 state 作为 props 向下传递到它的子组件中：
```
<FormattedDate date={this.state.date} />
```