js
```
const e = React.createElement;

// 显示一个 "Like" <button>
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```
jsx
```
// 显示一个 "Like" <button>
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```
##### 直接使用JSX 
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    //your code
</script
```
##### 创建JSX --> JS实时编译环境
```
npm init
npm install babel-cli@6 babel-preset-react-app@3
//根目录创建src文件夹
npx babel --watch src --out-dir . --presets react-app/prod 
//转换过程将自动重新执行
```
## 在 JSX 中嵌入表达式
在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。
```
<h1>Hello, {name}</h1>
<h1>Hello, {1 + 1}</h1>
<h1>Hello, {user.firstName}</h1>
```
```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
## JSX 特定属性
通过使用引号，来将属性值指定为字符串字面量
```
const element = <div tabIndex="0"></div>
```
使用大括号，来在属性值中插入一个 JavaScript 表达式
```
const element = <img src={user.avatarUrl}></img>
//注意没有引号
```
> JSX 语法上更接近 JavaScript 而不是 HTML  
所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。  
class ---> className  
tabindex ---> tabIndex  
## JSX 防止注入攻击
你可以安全地在 JSX 当中插入用户输入内容  
React DOM 在渲染所有输入内容之前，默认会进行转义。  
所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
## JSX 表示对象
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
//等同与
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// 实际上（注意：这是简化过的结构）
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

