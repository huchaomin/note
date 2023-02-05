Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
```
const ThemeContext = React.createContext('light');      //需要传的值,‘light’为默认值
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    return (
      <ThemeContext.Provider value="dark">      //实际的值‘dark’
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

//中间件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 ThemeContext.Provider，然后使用它的值。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
## 使用 Context 之前的考虑
1. 请谨慎使用，因为这会使得组件的复用性变差。
2. 只有底层的组件，需要用到顶层组件的数据，可以考虑组件组合（component composition）
```
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;        //将底层组件自身传递下去
}

// 现在，我们有这样的组件：
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout userLink={...} />
// ... 渲染出 ...
<NavigationBar userLink={...} />
// ... 渲染出 ...
{props.userLink}
```
## API
##### eact.createContext
1. 创建一个 Context 对象。
2. 当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身 ==**最近的**== 那个匹配的 Provider 中读取到当前的 context 值。
3. 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
4. 将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
```
const MyContext = React.createContext(defaultValue);
```
##### Context.Provider
1. 每个 Context 对象都会返回一个 Provider React 组件，它允许消费(子)组件订阅 context 的变化。
2. 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
3. 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
```
<MyContext.Provider value={/* 某个值 */}>
```
##### Class.contextType
1. 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。  
2. 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
```
class MyClass extends React.Component {
    //static contextType = MyContext;(public class fields 语法)[推荐]
    componentDidMount() {
        let value = this.context;
    }
    componentWillUnmount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
    }
}
MyClass.contextType = MyContext;
```
##### Context.Consumer
消费MyContext组件的组件是一个函数式组件时使用
```
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
//转换
function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {value => (
                <Button theme={value} />
            )}
        </ThemeContext.Consumer>
    )
}
```
##### Context.displayName
1. 类型为字符串
2. React DevTools 使用该字符串来确定 context 要显示的内容。
```
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```