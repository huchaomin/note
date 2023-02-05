## 创建 Refs
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
## 访问
```
const node = this.myRef.current;
```
## 注意
 - 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
 - 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
 - 你不能在函数组件上使用 ref 属性，因为他们没有实例。
## 为 DOM 元素添加 ref
```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```
> React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。  
ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。
## 为 class 组件添加 Ref
```
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.parentTextInput = React.createRef();
  }

  componentDidMount() {
    this.parentTextInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.parentTextInput} />
    );
  }
}
//这仅在 CustomTextInput 声明为 class 时才有效
```
## Refs 与函数组件
```
//你不能在函数组件上使用 ref 属性，因为它们没有实例：
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
```
## 回调 Refs
它能助你更精细地控制何时 refs 被设置和解除。
```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {     //接受 React 组件实例或 HTML DOM 元素作为参数
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```
## 组件间传递回调形式的 refs
```
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
//this.inputElement ---> input
```