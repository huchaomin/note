## React.memo
为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。
```
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```
## createElement()
## cloneElement()
## React.isValidElement(object)
验证对象是否为 React 元素，返回值为 true 或 false。
## React.Children
提供了用于处理 this.props.children 不透明数据结构的实用方法。
```
React.Children.map(children, function[(thisArg)])
React.Children.forEach(children, function[(thisArg)])
React.Children.count(children)
React.Children.only(children)
React.Children.toArray(children)
```

