---
title: composition api
markmap: true
---

# composition api

## setup function

### reactive

#### 创建一个响应式对象

### shallowReactive

#### 创建一个浅响应式对象

### isReactive

#### 检查对象是否是由reactive创建的响应式对象

### readonly

#### 创建一个只读的响应式对象

### shallowReadonly

#### 创建一个浅只读的响应式对象,嵌套对象的属性可以被修改，但是是非响应式的

### isReadonly

#### 检查对象是否是由readonly创建的只读响应式对象

### isProxy

#### 检查对象是否是由reactive或者readonly创建的proxy

### ref

#### 返回一个包含.value属性的深代理对象，.value属性是响应式的

### shallowRef

#### 返回一个包含.value属性的浅代理对象，.value属性是响应式的

#### 对于入参是一个简单类型时，其最终效果如同ref

### isRef

#### 检查对象是否是由ref创建的ref对象

### unref

#### 如果对象是由ref创建的ref对象，则返回.value属性，否则返回对象本身

### triggerRef

#### 手动触发与shallowRef关联的任何作用

#### 关联生命周期函数 onRenderTriggered 和 onRenderTracked

### customRef

#### 创建一个自定义的ref对象，自己创建依赖，自己控制更新

#### 关联生命周期函数 onRenderTriggered 和 onRenderTracked

### toRef

#### 可以用来为响应式对象上的property创建一个ref, 从而保持对其源property的响应式引用

### toRefs

#### 将响应式对象转换为普通对象，其中结果对象的每个属性都是指向源对象相应属性的ref

### toRaw

#### 返回一个对象的原始版本，如果对象不是响应式的，则返回对象本身

#### 对于ref对象，任然保留包装过的对象（有value值）

### markRaw

#### 标记一个对象为“原始”对象，这意味着它永远不会被转换为响应式代理

### watch

#### 可监听的类型

##### ref对象，不管原代理对象是响应式的还是非响应式的，浅监听，只有替换value值才会触发

##### reactive对象(包括数组)，深监听，只要对象内部的属性发生变化，就会触发

##### getter 函数

```js
// 注意 一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
watch(
  () => state.someObject,
  () => {
    //注意 仅当 state.someObject 被替换时触发
  }
)
```

```js
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* state.someObject 被整个替换了
  },
  { deep: true }
)
```

##### 数组，监听多个数据源

#### 返回值是一个函数，调用该函数可以停止监听

### watchEffect

#### 自动跟踪回调的响应式依赖

##### 不需要指定 `immediate: true` 和 `deep: true` 选项

##### 如果你需要侦听一个嵌套数据结构中的几个属性， `watchEffect()` 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性

##### watchEffect 仅会在其同步执行期间，才追踪依赖。在使用异步回调时，只有在第一个 await 正常工作前访问到的属性才会被追踪

### watchPostEffect

```js
// 等同于
watchEffect(callback, {
  flush: 'post'
})
```

### watchSyncEffect

```js
// 等同于
watchEffect(callback, {
  flush: 'sync'
})
```

## setup script

### defineProps

### defineEmits

### defineExpose

### useSlots

### useAttrs

### 与普通的 `<script>` 一起使用

#### inheritAttrs

#### name

#### customOptions

### 顶层 await
