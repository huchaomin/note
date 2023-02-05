## 定义
组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。
## 函数组件与 class 组件
函数组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
class 组件
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
上述两个组件在 React 里是等效的。
## 渲染组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
1. 我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
3. Welcome 组件将 \<h1\>Hello, Sara\<\/h1\> 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 \<h1\>Hello, Sara\<\/h1\>。
## Props 的只读性
纯函数(不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。)
```
function sum(a, b) {
  return a + b;
}
```
不是纯函数
```
function withdraw(account, amount) {
  account.total -= amount;
}
```
##### 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。