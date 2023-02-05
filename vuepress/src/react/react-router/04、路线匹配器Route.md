渲染一些内容有以下三种方式
- Route component
- Route render
- Route children
三种渲染方式都将提供相同的三个路由属性：
- match
- location
- history
## Route component
```
const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}

<Route path="/user/:username" component={User} />
```
> 当你使用 component（而不是 render 或 children）时，Router 将根据指定的组件，使用 React.createElement 创建一个新的 React 元素。这意味着，如果你向 component 提供一个内联函数，那么每次渲染都会创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅仅更新现有组件。当使用内联函数进行内联渲染时，请使用 render 或 children（见下文）。
## Route render
```
// 方便的内联渲染
<Route path="/home" render={() => <div>Home</div>} />

// 包装
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props} />
    </FadeIn>
  )} />
)

<FadingRoute path="/cool" component={Something} />
```
> 警告：Route component 优先于 Route render，因此不要在同一个 Route 中同时使用两者。
## Route children
有时候不论 path 是否匹配位置，你都想渲染一些内容。在这种情况下，你可以使用 children 属性。
```
const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest} />
    </li>
  )} />
)

<ul>
  <ListItemLink to="/somewhere" />
  <ListItemLink to="/somewhere-else" />
</ul>
```
> 警告：Route component 和 Route render 优先于 Route children，因此不要在同一个 Route 中同时使用多个。


---
##### path: string
```
<Route path="/users/:id" component={User} />
```
没有定义 path 的 Route 总是会被匹配。
##### exact: bool
##### strict: bool
有尾部斜杠的 path 仅与具有尾部斜杠的 location.pathname 匹配。当 location.pathname 中有附加的 URL 片段时，strict 就没有效果了。
##### location: object
```
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
<TransitionGroup>
  {/*
    This is no different than other usage of
    <CSSTransition>, just make sure to pass
    `location` to `Switch` so it can match
    the old location as it animates out.
  */}
  <CSSTransition
    key={location.key}
    classNames="fade"
    timeout={300}
  >
    <Switch location={location}>
      <Route path="/hsl/:h/:s/:l" component={HSL} />
      <Route path="/rgb/:r/:g/:b" component={RGB} />
    </Switch>
  </CSSTransition>
</TransitionGroup>
```
##### sensitive: bool
如果为 true，进行匹配时将区分大小写。
