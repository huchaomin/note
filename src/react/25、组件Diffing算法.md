## 根节点
##### 不同
当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。
- 当拆卸一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 componentWillUnmount() 方法。
- 当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 componentWillMount() 方法，紧接着 componentDidMount() 方法。所有跟之前的树所关联的 state 也会被销毁。
```
//React 会销毁 Counter 组件并且重新装载一个新的组件。
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```
##### 相同的dom元素
React 会保留 DOM 节点，仅比对及更新有改变的属性。比如：
```
//改变className
<div className="before" title="stuff" />
<div className="after" title="stuff" />

//改变color
<div style={{color: 'red', fontWeight: 'bold'}} />
<div style={{color: 'green', fontWeight: 'bold'}} />
```
在处理完当前节点之后，React 继续对子节点进行递归。
##### 相同的组件元素
1. 当一个组件更新时，组件实例保持不变，这样 state 在跨越不同的渲染时保持一致。
2. React 将更新该组件实例的 props 以跟最新的元素保持一致，并且调用该实例的 componentWillReceiveProps() 和 componentWillUpdate() 方法。
3. 调用 render() 方法，diff 算法将在之前的结果以及新的结果中进行递归。
## 对子节点进行递归
在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。
##### 在子元素列表末尾新增元素时，更变开销比较小
```
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```
##### 在列表头部插入会很影响性能，那么更变开销会比较大。
```
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
React 会针对每个子元素 mutate 而不是保持相同的 \<li>Duke\</li> 和 \<li>Villanova\</li> 子树完成。这种情况下的低效可能会带来性能问题。
##### key
为了解决以上问题,React 支持 key 属性
```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
现在 React 知道只有带着 '2014' key 的元素是新元素，带着 '2015' 以及 '2016' key 的元素仅仅移动了。
>  key 不需要全局唯一，但在列表中需要保持唯一  
谨慎使用元素在数组中的下标作为 key

