## 作用
- StrictMode 是一个用来突出显示应用程序中潜在问题的工具。
- 它为其后代元素触发额外的检查和警告。
- 严格模式检查仅在开发模式下运行；它们不会影响生产构建。
```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
//不会对 Header 和 Footer 组件运行严格模式检查。  
//但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查。
```
##### 识别不安全的生命周期
防止第三方库生命周期api过时
##### 关于使用过时字符串 ref API 的警告
React 提供了两种方法管理 refs 的方式
- 已过时的字符串 ref API 的形式 【弃用】
- 回调函数 API 的形式
- React.createRef()
##### 关于使用废弃的 findDOMNode 方法的警告
##### 检测意外的副作用
```
class TopLevelRoute extends React.Component {
  constructor(props) {
    super(props);

    SharedApplicationState.recordEvent('ExampleComponent');
    //多次实例化，多次调用SharedApplicationState.recordEvent非幂等函数会出问题 
  }
}
```
##### 检测过时的 context API
