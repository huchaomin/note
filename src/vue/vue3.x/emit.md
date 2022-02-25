### emit
#### @eventName 不一定要有子组件emit
```javascript
app.component('date-picker', {
  template: `
    <select>
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
  `
})
// 当一个具有 change 事件的 HTML 元素作为 date-picker 的根元素时
```
```vue
<date-picker @change="showChange"></date-picker>
// ...
methods: {
 showChange(event) {
   console.log(event.target.value) // 将打印所选选项的值
 }
}
```
::: alert
当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器。
:::

#### 验证抛出的事件

与 prop 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以对它进行验证。

要添加验证，请为事件分配一个函数，该函数接收传递给 `$emit` 调用的参数，并返回一个布尔值以指示事件是否有效。

```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证 submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
})
```
