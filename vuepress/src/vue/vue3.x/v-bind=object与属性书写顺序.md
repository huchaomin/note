---
date: '1649494044738'
title: vue3 v-bind="object" 排序敏感
description: v-bind='object'与属性书写顺序会影响属性的最终绑定
tags: [vue]
---
### v-bind="object" 排序敏感

#### 介绍

在一个元素上动态绑定 attribute 时，同时使用 `v-bind="object"` 语法和独立 attribute 是常见的场景。然而，这就引出了关于合并的优先级的问题。

#### 2.x 语法

在 2.x 中，如果一个元素同时定义了 `v-bind="object"` 和一个相同的独立 attribute，那么这个独立 attribute 总是会覆盖 `object` 中的绑定。

```html
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="red"></div>
```

#### 3.x 语法

在 3.x 中，如果一个元素同时定义了 `v-bind="object"` 和一个相同的独立 attribute，那么绑定的声明顺序将决定它们如何被合并。换句话说，相对于假设开发者总是希望独立 attribute 覆盖 `object` 中定义的内容，现在开发者能够对自己所希望的合并行为做更好的控制。

```html
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="blue"></div>

<!-- 模板 -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- 结果 -->
<div id="red"></div>
```
::: alert
你的 IDE 格式化插件会自动排序标签内的属性顺序，所以尽量不要依赖此特性
:::
