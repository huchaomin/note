组件只有当 props.color 或者 state.count 的值改变才需要更新时
```
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```
浅检查时可代替
```
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```
如果count是一个引用类型的数据，并且里面的数据进行了更新，则不能使用React.PureComponent进行更新
##### 解决
```
//返回一个新的数组
this.setState(state => ({
    words: state.words.concat(['marklar'])
    // words: [...state.words, 'marklar']
}));

//返回一个新的对象
Object.assign({}, colormap, {right: 'blue'});
```