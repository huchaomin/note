## 注意
- WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。
- WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。
- WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的API。
- WXS 函数不能作为组件的事件回调。
- 由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异。
## 绑定事件
 - 从基础库版本2.4.4开始，支持使用WXS函数绑定事件
 - WXS函数接受2个参数，第一个是event，在原有的event的基础上加了event.instance对象
 - 第二个参数是ownerInstance，和event.instance一样是一个ComponentDescriptor对象。
wxml
```
<wxs module="wxs" src="./test.wxs"></wxs>
<view id="tapTest" data-hi="WeChat" bindtap="{{wxs.tapName}}"> Click me! </view>
//注：绑定的WXS函数必须用{{}}括起来
```
test.wxs
```
function tapName(event, ownerInstance) {
  console.log('tap wechat', JSON.stringify(event))
}
module.exports = {
  tapName: tapName
}
```
## 响应事件
- 只能响应内置组件的事件，不支持自定义组件事件
- 目前还不支持原生组件的事件、input和textarea组件的 bindinput 事件
- 1.02.1901170及以后版本的开发者工具上支持交互动画，最低版本基础库是2.4.4
- 目前在WXS函数里面仅支持console.log方式打日志定位问题，注意连续的重复日志会被过滤掉。