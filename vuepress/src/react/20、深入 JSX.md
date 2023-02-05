==实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。==
## 如果没有子节点，你还可以使用自闭合的标签形式
```
<div className="sidebar" />
```
## 大写字母开头的 JSX 标签意味着它们是 React 组件
```
<CustomButton color="red" />
```
## 使用点语法
```
import React from 'react';
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```
## 在运行时选择类型
```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。
  return <components[props.storyType] story={props.story} />;
  
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```
## 字符串字面量
```
<MyComponent message="hello world" />
//等价的
<MyComponent message={'hello world'} />

<MyComponent message="&lt;3" />
//等价的，未转义的
<MyComponent message={'<3'} />
```
## Props 默认值为 “True”
```
<MyTextBox autocomplete />      //推荐
//等价的
<MyTextBox autocomplete={true} />
```
## ...属性展开
```
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
//等价的
function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```
选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去。
```
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```
## JSX 中的子元素(props.children)
SX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格。因此以下的几种方式都是等价的：
```
<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>
```
子元素可由字符串、dom元素、子组件组成、JavaScript 表达式、函数
##### JavaScript 表达式
```
<ul>
    {todos.map((todo) => <Item key={todo.id} todo={todo} />)}
</ul>

//代替模板字符串
<div>Hello {props.addressee}!</div>
```
##### 函数
```
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```
##### 布尔类型、Null 以及 Undefined 将会忽略
//以下的 JSX 表达式渲染结果相同：
```
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```
应用
```
<div>
  {showHeader && <Header />}
  <Content />
</div>
```
值得注意的是有一些 “falsy” 值，如数字 0，仍然会被 React 渲染。例如，以下代码并不会像你预期那样工作，因为当 props.messages 是空数组时，0 仍然会被渲染：
```
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
```
改
```
<div>
  {props.messages.length > 0 &&     //确定是布尔值
    <MessageList messages={props.messages} />
  }
</div>
```