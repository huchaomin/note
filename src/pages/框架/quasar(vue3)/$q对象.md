---
title: $q 对象
---
## 使用

### Composition API

```javascript
const $q = useQuasar()
console.log($q.platform.is.ios)
```

### Outside of a vue file

```javascript
import { Quasar } from 'quasar'
console.log(Quasar.platform.is.ios)
```

## $q.version

Quasar version.

## $q.platform

[官方文档](https://quasar.dev/options/platform-detection)

## $q.screen

[链接](https://quasar.dev/options/screen-plugin#usage)

### Body classes

enable body classes(对首屏渲染有影响)

```javascript
framework: {
  config: {
    screen: {
      bodyClasses: true // <<< add this
    }
  }
}
```

```sass
.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
```

### 设置

```javascript
// Change window breakpoints; does NOT also changes CSS breakpoints
$q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
// Change the default 100ms debounce to some other value.
$q.screen.setDebounce(500)
```

## $q.lang

### 查看所有的 isoName

```javascript
import languages from 'quasar/lang/index.json'
```

- $q.lang.isoName
- $q.lang.set(lang) 设置的是 $q.lang.isoName 不是 getLocale
- $q.lang.getLocale(): will always return the users locale (based on browser settings)
- $q.lang.label.close: 获取'close'的国际化label (zh-CN:'关闭')
[https://quasar.dev/options/app-internationalization#detecting-locale](https://quasar.dev/options/app-internationalization#detecting-locale)

## $q.iconSet

## $q.cordova

## $q.capacitor
