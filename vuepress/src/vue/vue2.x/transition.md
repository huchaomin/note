---
date: '1643617280344'
title: Vue 进入/离开 & 列表过渡
description: Vue 进入/离开 & 列表过渡的基本用法
tags: [vue]
---
### Vue 进入/离开 & 列表过渡的基本用法
[官方文档](https://cn.vuejs.org/v2/guide/transitions.html)
#### 1. css过度
![vue-transition](~@assets/image/vue-transition.png)
 - `v-enter`:进入过渡开始  
在元素被插入之前生效，在元素被插入之后的下一帧移除。
 - `v-enter-active`:进入过渡中  
在元素被插入之前生效，在过渡/动画完成之后移除(定义进入过渡的过程时间，延迟和曲线函数)
 - `v-enter-to` :进入过渡的结束  
在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除
 - `v-leave` :离开过渡开始  
在离开过渡被触发时立刻生效，下一帧被移除
 - `v-leave-active` :离开过渡中  
在离开过渡被触发时立刻生效，在过渡/动画完成之后移除(定义离开过渡的过程时间，延迟和曲线函数)
 - `v-leave-to` :离开过渡结束  
在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除
```vue
<transition name="slide-fade">
 <p v-if="show">hello</p>
</transition>
// ...
.slide-fade-enter-active {
 transition: all .3s ease;
}
.slide-fade-leave-active {
 transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
 transform: translateX(10px);
 opacity: 0;
}
```

#### 2. css动画
CSS 动画用法同 CSS 过渡，区别是在动画中 `v-enter` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除。
```vue
<transition name="bounce">
  <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque
    habitant morbi tristique senectus et netus.</p>
</transition>
...
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

#### 3. 使用velocity-animate
```vue
<template>
  <transition v-on:enter="enter"
              v-on:leave="leave"
              v-bind:css="false"
              appear>
    <slot></slot>
  </transition>
</template>

<script>
//  appear一进入页面就开始动画
import Velocity from 'velocity-animate'

export default {
  methods: {
    enter: function (el, done) {
      Velocity(el, 'slideDown', { duration: 1500 }, [250, 15], { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, 'slideUp', { duration: 1500 }, { complete: done })
    },
  },
}
</script>
```

