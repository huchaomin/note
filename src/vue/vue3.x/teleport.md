---
date: '1649469769826'
title: vue3 teleport
description: vue3 teleport 组件的基本用法
tags: [vue]
---
### teleport 组件
#### 作用
将子组件挂载到其他地方
#### 参数
##### to
string类型，必填。必须是有效的查询选择器或 `HTMLElement` (如果在浏览器环境中使用)。  
指定将在其中移动 `<teleport>` 内容的目标元素
```html
<!-- 正确 -->
<teleport to="body" /> <!-- 放到body里面的最后面 -->
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />

<!-- 错误 -->
<teleport to="h1" />
<teleport to="some-string" />
```
##### disabled
boolean 类型，可选。用于禁用 `<teleport>` 的功能  
如果为true,这意味着其插槽内容将不会移动到任何位置
#### 注意
 - 移动实际的 `DOM` 节点，而不是被销毁和重新创建，并且它还将保持任何组件实例的活动状态。
 - `teleport` 父子组件的关系，和 `keep-alive`、 `transtion` 等相同
 - 多个 `teleport` to到同一个元素上面，后解析后挂载
