 - Vue.createApp({}).mount('#app')
 - 生命周期
 - v-if v-for template
 - 多事件处理器
```vue
<button @click="one($event), two($event)">
  Submit
</button>
```
 - 多个复选框，绑定到同一个数组：
```vue
<div id="v-model-multiple-checkboxes">
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <br />
  <span>Checked names: {{ checkedNames }}</span>
</div>
```
 - 我们可以在组件的 emits 选项中列出已抛出的事件：
```javascript
app.component('blog-post', {
  props: ['title'],
  emits: ['enlargeText']
})
```
 - 组件的全局注册
```javascript
Vue.createApp({...}).component('my-component-name', {
  // ... 选项 ...
})
```
 - 传入一个对象的所有 property
```vue
<blog-post v-bind="post"></blog-post>
```


