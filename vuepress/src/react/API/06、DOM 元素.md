浏览器 DOM 实现的一些特殊情况
## 在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。
例
```
tabIndex ---> tabindex
onClick ---> onclick
```
##### checked
1. 当 input 组件的 type 类型为 checkbox 或 radio 时  
可以使用它来设置组件是否被选中
2. 非受控组件用defaultChecked
##### className
1. 用于所有常规 DOM 节点和 SVG 元素的class
2. Web Components 用class
##### dangerouslySetInnerHTML
1. 是 React 为浏览器 DOM 提供 innerHTML 的替换方案
2. 需要向其传递包含 key 为 __html 的对象，以此来警示你。
```
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```
##### htmlFor
由于 for 在 JavaScript 中是保留字，所以 React 元素中使用了 htmlFor 来代替
```
<label htmlFor="name"></label>
```
##### onChange
每当表单字段变化时，该事件都会被触发。类似于oninput
##### selected
option 组件支持 selected 属性。你可以使用该属性设置组件是否被选择。
##### style
1. 通常不推荐将 style 属性作为设置元素样式的主要方式。
2. style 在 React 应用中多用于在渲染过程中添加动态计算的样式
3. style 接受一个采用==小驼峰命名==属性的 JavaScript 对象
4. 这与 DOM 中 style 的 JavaScript 属性是一致的，同时会更高效的，且能预防跨站脚本（XSS）的安全漏洞。
```
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```
5. 样式不会自动补齐前缀。如需支持旧版浏览器，请手动补充对应的样式属性：
```
//除了ms其他前缀都要大写开头
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```
6. React 会自动添加 ”px” 后缀到内联样式为==数字==的属性后，请将此值设为数字与所需单位组成的==字符串==
```
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
//并非所有的属性值都转化为px字符串，如（zoom,order,flex）
```
##### value
1. input 和 textarea 组件支持 value 属性。你可以使用它为组件设置 value。
2. 非受控组件用defaultValue
## 非小驼峰命名
```
data-*
aria-*
单个单词（全小写）
自定义属性名（全小写）
```
