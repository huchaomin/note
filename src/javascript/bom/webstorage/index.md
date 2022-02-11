---
date: '1644554076470'
title: sessionStorage、localStorage、cookie
description: sessionStorage、localStorage、cookie区别
tags: [webstorage]
---

### sessionStorage与localStorage
#### sessionStorage与localStorage相同点
 - 存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信
 - 不同浏览器无法共享localStorage或sessionStorage中的信息
 - 只能存储字符串类型
 - 内嵌iframe可以共享存储
##### sessionStorage
 - 如果用户在A页面下存储了test，通过js或者a标签跳转到同源的B页面时，A页面下的sessionStorage会被拷贝到B页面下，AB页面的sessionStorage虽然相同，但**二者相互独立**
 - 如果用户在A页面打开的情况下，手动打开了一个新标签页，访问A页面，此时会重开一个新回话，二者sessionStorage是不共享的
##### localStorage
 - 相同浏览器同源页面，即使你新建一个窗口，也可以共享
##### 常用方法

 - setItem (key, value) —— 保存数据，以键值对的方式储存信息。
 - getItem (key) —— 获取数据，将键值传入，即可获取到对应的value值。
 - removeItem (key) —— 删除单个数据，根据键值移除对应的信息。
 - clear () —— 删除所有的数据

### cookie
 - 大小一般为4KB
 - 随着HTTP header发送到服务器端
 - 通过name = value(需经过encodeURIComponent编码)的形式存储
 - 只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
 - 在所有同源窗口中都是共享的（与localStorage一样）
 - cookie数据还有路径的概念，可以限制cookie只属于某个路径下
