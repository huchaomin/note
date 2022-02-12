## render()
##### 语法
```
ReactDOM.render(element, container[, callback])
```
1. 当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新。
## createPortal()
##### 语法
```
ReactDOM.createPortal(child, container)
```
将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。