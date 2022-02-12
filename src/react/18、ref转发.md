主要用来获取直接dom或组件实例

```
//创建一个可以接收ref的组件
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

//创建一个直接获取 DOM button 的 ref
const ref = React.createRef()   //此时{current:null}

//使用组件时将ref传进去
<FancyButton ref={ref}>Click me!</FancyButton>

//mounted之后打印
componentDidMount() {
	console.log(ref.current)    //<button class="FancyButton">Click me!</button>
}
```
## 注意
1. 第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
2. Ref 引用不仅限于 DOM 元素，你也可以转发 class 组件实例
## 在高阶组件中转发 refs
```
function logProps(Component) {
  class LogProps extends React.Component {
    render() {
      const {forwardedRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => (<LogProps {...props} forwardedRef={ref} />));
}
```
使用
```
//将一个可以接收ref的组件(同上)传进去
const LogProps = logProps(FancyButton)

//创建一个直接获取 DOM button 的 ref
const ref = React.createRef()   //此时{current:null}

//使用组件时将ref传进去
<LogProps ref={ref}>Click me!</LogProps>

//mounted之后打印
componentDidMount() {
	console.log(ref.current)    //<button class="FancyButton">Click me!</button>
}
```
## 在 DevTools 中显示自定义名称
```
const WrappedComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});
//在 DevTools 中显示为 “ForwardRef”
```
```
const WrappedComponent = React.forwardRef(
  function myFunction(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
);
//在 DevTools 中显示为 “ForwardRef(myFunction)”
```
```
function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
//在 DevTools 中显示为 “ForwardRef(logProps([Component的displayName ||name]))”
```