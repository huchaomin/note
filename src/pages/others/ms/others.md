---
title: 其他
---

## async、await 的使用场景是什么？

进阶一：假如有A、B、C三个异步请求，异步请求C依赖于异步请求A和B的结果（即A和B完成后再发起C），那么你会如何实现它？

Promise.all()；
设置状态分别标记A和B，A、B完成后会去修改自己的完成标记，然后检查所有的状态标记，假如都是完成状态，然后去执行异步请求C。

## 数字计算：请问在js中，输入表达式 0.1 + 0.2 的结果是什么？

0.30000000000000004（能回答出来不是0.3，而是0.3后有若干个0和一个数字即可）
解决方案：math.js

## 移动端开发的时候，一般怎么实现自适应？

rem
vw和vh
媒体查询（bootstrap）

## px、em、rem区别介绍

## <keep-alive></keep-alive>的作用是什么

<keep-alive></keep-alive>包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染。 大白话: 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用<keep-alive></keep-alive>进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染

## Vue子组件调用父组件的方法

第一种方法是直接在子组件中通过this.$parent.event来调用父组件的方法

第二种方法是在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了。

## localstorage和sessionstorage是什么?区别是什么?

localstorage和sessionstorage一样都是用来存储客户端临时信息的对象，他们均只能存储字符串类型对象

localstorage生命周期是永久的，这意味着除非用户在浏览器提供的UI上清除localstorage信息，否则这些信息将永远存在。

sessionstorage生命周期为当前窗口或标签，一旦窗口或标签被永久关闭了，那么所有通过sessionstorage存储的数据也将被清空。

不同浏览器无法共享localstorage或sessionstorage中的信息。相同浏览器的不同页面可以共享相同的localstorage（页面属于相同的域名和端口），但是不同页面或标签间无法共享sessionstorage。这里需要注意的是，页面及标签仅指顶级窗口，如果一个标签页包含多个iframe标签他们属于同源页面，那么他们之间是可以共享sessionstorage的。

## 什么是unicode

## v-show指令，v-if的区别

条件渲染指令，与v-if不同的是，无论v-show的值为true或false，元素都会存在于HTML代码中；而只有当v-if的值为true，元素才会存在于HTML代码中。v-show指令只是设置了元素CSS的style值

## 为什么避免v-if和v-for用在一起？

当vue处理指令时，v-for比v-if具有更高的优先级，通过v-if移动到容器的元素，不会在重复遍历列表中的每个值，取而代之的是，我们只检查它一次，且不会v-if为否的时候运算v-for

## vue中有没有使用css预编译语言

## Vue的路由实现：hash模式 和 history模式

hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 <http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回> 404 错误。

history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 <http://www.xxx.com/items/id。后端如果缺少对> /items/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”

## 用flex布局实现一个父元素，里面三个子元素，子元素高度占100%,子元素加起来宽度要把父元素撑满，但每个不一定相等

## transform: translate(50px,100px)
