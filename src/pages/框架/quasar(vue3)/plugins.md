---
title: plugins
---

## 引入

```javascript
framework: {
  plugins: [ 'Notify', 'BottomSheet' ]
}
```

## 使用

### Composition API

```javascript
const $q = useQuasar()

function showNotification () {
  $q.notify('Some other message')
}
```

### outside of a Vue file

```javascript
import { Notify } from 'quasar'
// ...
Notify.create('My message')
```

## 插件列表

- AddressbarColor 获取或者设置地址栏颜色
- AppFullscreen 全屏
- AppVisibility 应用可见性（是否在后台运行）
- BottomSheet 底部弹出框
- Cookies
- 暗黑模式 （自动安装）
- Dialog 定制化的弹窗，可以快捷的创建一个简单的弹窗，复杂的请使用q-dialog
- LoadingBar 加载进度条, 与 q-ajax-bar 类似
- LocalStorage
- SessionStorage
- Meta 设置页面的meta、html、body、style、script、noscript信息
