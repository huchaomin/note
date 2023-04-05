---
title: JSX
---

## 介绍

[JSX](https://facebook.github.io/jsx/)是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的

TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。

## 基本用法

ts中想要使用JSX必须做两件事：

1. 开启 `jsx` 选项
2. 给文件一个 `.tsx` 扩展名

TypeScript具有三种JSX模式：`preserve` ，`react` 和 `react-native`。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。

`preserve` 模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。 另外，输出文件会带有 `.jsx` 扩展名。

`react` 模式会生成 `React.createElement`，在使用前不需要再进行转换操作了，输出文件的扩展名为 `.js`。

`react-native` 相当于 `preserve`，它也保留了所有的JSX，但是输出文件的扩展名是 `.js`

| 模式 | 输入 | 输出 | 输出文件扩展名 |
| --- | --- | --- | --- |
| preserve | `<div />` | `<div />` | `.jsx` |
| react | `<div />` | `React.createElement("div")` | `.js` |
| react-native | `<div />` | `<div />` | `.js` |

::: warning 注意
React标识符是写死的硬编码，所以你必须保证React（大写的R）是可用的。
:::

## 类型断言

当你在TypeScript中使用JSX时，只有 `as` 语法断言是被允许的。

```ts
const foo = <foo>bar;
```

因为TypeScript也使用尖括号来表示类型断言，在结合JSX的语法后将带来解析上的困难。因此，TypeScript在.tsx文件里禁用了使用尖括号的类型断言

## 类型检查

假设有这样一个JSX表达式 `<expr />`，`expr` 可能引用环境自带的某些东西（比如，在DOM环境里的div或span）或者是你自定义的组件。

对于React

- 固有元素会生成字符串（React.createElement("div")），然而由你自定义的组件却不会生成（React.createElement(MyComponent)）。
- 传入JSX元素里的属性类型的查找方式不同。 固有元素属性本身就支持，然而自定义的组件会自己去指定它们具有哪个属性。

TypeScript使用与React相同的规范 来区别它们。 固有元素总是以一个小写字母开头，基于值的元素总是以一个大写字母开头。

### 固有元素

固有元素使用特殊的接口 `JSX.IntrinsicElements` 来查找。
默认地，如果这个接口没有指定，会全部通过，不对固有元素进行类型检查。
然而，如果这个接口存在，那么固有元素的名字需要在 `JSX.IntrinsicElements` 接口的属性里查找

```ts
declare namespace JSX {
  interface IntrinsicElements {
    foo: any
  }
}

<foo />; // 正确
<bar />; // 错误
```

你也可以捕获所有字符串索引

```ts
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
```

### 基于值的元素

基于值的元素会简单的在它所在的作用域里按标识符查找

```ts
import MyComponent from "./myComponent";

<MyComponent />; // 正确
<SomeOtherComponent />; // 错误
```

有两种方式可以定义基于值的元素：

1. 无状态函数组件 (SFC)
2. 类组件

由于这两种基于值的元素在JSX表达式里无法区分，因此TypeScript首先会尝试将表达式做为无状态函数组件进行解析。
如果解析成功，那么TypeScript就完成了表达式到其声明的解析操作。
如果按照无状态函数组件解析失败，那么TypeScript会继续尝试以类组件的形式进行解析。
如果依旧失败，那么将输出一个错误

#### 无状态函数组件

无状态函数组件是指一个函数，它接收一个 `props` 对象并返回一个 `JSX(JSX.Element)` 元素。

```tsx
const Button = (prop: {value: string}, context: { color: string }) => <button>
```

还可以利用函数重载

```tsx
interface ClickableProps {
  children: JSX.Element[] | JSX.Element
}

interface HomeProps extends ClickableProps {
  home: JSX.Element;
}

interface SideProps extends ClickableProps {
  side: JSX.Element | string;
}

function MainButton(prop: HomeProps): JSX.Element;
function MainButton(prop: SideProps): JSX.Element {
  // ...
}
```

#### 类组件

##### 元素类的类型和元素实例的类型

元素类的类型是指在JSX表达式里使用的类型，而元素实例的类型是指在运行时实际使用的类型。

```tsx
class MyComponent {
  render() {}
}
// 使用构造签名
var myComponent = new MyComponent();
// 元素类的类型 => MyComponent
// 元素实例的类型 => { render: () => void }

function MyFactoryFunction() {
  return {
    render: () => {
    }
  }
}
// 使用调用签名
var myComponent = MyFactoryFunction();
// 元素类的类型 => FactoryFunction
// 元素实例的类型 => { render: () => void }
```

元素的实例类型很有趣，因为它必须赋值给 `JSX.ElementClass` 或抛出一个错误。
默认的 `JSX.ElementClass` 为{}，但是它可以被扩展用来限制JSX的类型以符合相应的接口。

```tsx
declare namespace JSX {
  interface ElementClass {
    render: any;
  }
}
class MyComponent {
  render() {}
}
function MyFactoryFunction() {
  return { render: () => {} }
}
<MyComponent />; // 正确
<MyFactoryFunction />; // 正确

class NotAValidComponent {}
function NotAValidFactoryFunction() {
  return {};
}

<NotAValidComponent />; // 错误
<NotAValidFactoryFunction />; // 错误
```

### 属性类型检查

#### 固有元素

```tsx
declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean }
  }
}

// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;
```

#### 基于值的元素

类型取决于先前确定的在元素实例类型上的某个属性的类型
至于该使用哪个属性来确定类型取决于 `JSX.ElementAttributesProperty`
TypeScript 2.8，如果未指定 `JSX.ElementAttributesProperty`，那么将使用类元素构造函数或SFC调用的第一个参数的类型。

```tsx
declare namespace JSX {
  interface ElementAttributesProperty {
    props; // 指定用来使用的属性名
  }
}

class MyComponent {
  // 在元素实例类型上指定属性
  props: {
    foo?: string;
  }
}

// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar" />
```

支持可选属性和必须属性

```tsx
// 固有元素的例子
declare namespace JSX {
  interface IntrinsicElements {
    foo: { requiredProp: string; optionalProp?: number }
  }
}

<foo requiredProp="bar" />; // 正确
<foo requiredProp="bar" optionalProp={0} />; // 正确
<foo />; // 错误, 缺少 requiredProp
<foo requiredProp={0} />; // 错误, requiredProp 应该是字符串
<foo requiredProp="bar" unknownProp />; // 错误, unknownProp 不存在
<foo requiredProp="bar" some-unknown-prop />; // 正确, `some-unknown-prop`不是个合法的标识符
```

::: warning 注意
如果一个属性名不是个合法的JS标识符（像data-*属性），并且它没出现在元素属性类型里时不会当做一个错误。
:::

> 另外，JSX还会使用 `JSX.IntrinsicAttributes` 接口来指定额外的属性，这些额外的属性通常不会被组件的props或arguments使用 - 比如React里的key。还有，`JSX.IntrinsicClassAttributes<T>` 泛型类型也可以用来做同样的事情。这里的泛型参数表示类实例类型。在React里，它用来允许 `Ref<T>` 类型上的ref属性。通常来讲，这些接口上的所有属性都是可选的，除非你想要用户在每个JSX标签上都提供一些属性。

延展操作符也可以使用

```tsx
var props = { requiredProp: 'bar' };
<foo {...props} />; // 正确

var badProps = {};
<foo {...badProps} />; // 错误
```

### 子孙类型检查

从TypeScript 2.3开始，我们引入了children类型检查。children是元素属性类型的一个特殊属性
我们可以利用 `JSX.ElementChildrenAttribute` 来决定children名。 `JSX.ElementChildrenAttribute` 应该被声明在单一的属性(property)里

```tsx
declare namespace JSX {
  interface ElementChildrenAttribute {
    children: {};  // specify children name to use
  }
}
```

```tsx
interface PropsType {
  children: JSX.Element
  name: string
}

class Component extends React.Component<PropsType, {}> {
  render() {
    return (
      <h2>
        {this.props.children}
      </h2>
    )
  }
}

// OK
<Component>
  <h1>Hello World</h1>
</Component>

// Error: children is of type JSX.Element not array of JSX.Element
<Component>
  <h1>Hello World</h1>
  <h2>Hello World</h2>
</Component>

// Error: children is of type JSX.Element not array of JSX.Element or string.
<Component>
  <h1>Hello</h1>
  World
</Component>
```

## 嵌入的表达式

JSX允许你使用{ }标签来内嵌表达式。

```tsx
var a = <div>
  {['foo', 'bar'].map(i => <span>{i / 2}</span>)}
</div>

// 产生一个错误，因为你不能用数字来除以一个字符串
```

React整合

要想一起使用JSX和React，你应该使用[React类型定义](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)。 这些类型声明定义了JSX合适命名空间来使用React。

```tsx
/// <reference path="react.d.ts" />

interface Props {
  foo: string;
}
class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}
<MyComponent foo="bar" />; // 正确
<MyComponent foo={0} />; // 错误
```

## 工厂函数

jsx: react编译选项使用的工厂函数是可以配置的。可以使用 `jsxFactory` 命令行选项，或内联的 `@jsx` 注释指令在每个文件上设置。
比如，给 `createElement` 设置 `jsxFactory` ，`<div />` 会使用 `createElement("div")` 来生成，而不是 `React.createElement("div")`。

注释指令可以像下面这样使用（在TypeScript 2.8里）：

```tsx
import preact = require("preact");
/* @jsx preact.h */
const x = <div />;
```

生成

```js
const preact = require("preact");
const x = preact.h("div", null);
```

工厂函数的选择同样会影响 `JSX` 命名空间的查找（类型检查）。
如果工厂函数使用 `React.createElement` 定义（默认），编译器会先检查 `React.JSX`，之后才检查全局的 `JSX`。如果工厂函数定义为 `h`，那么在检查全局的 `JSX` 之前先检查 `h.JSX`
