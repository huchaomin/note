---
title: animations
---

The animation effects are borrowed from Animate.css

## 安装

```javascript
// embedding all animations
animations: 'all'

// or embedding only specific animations
animations: [
  'bounceInLeft',
  'bounceOutRight'
]
```

## 使用

appear: makes the entering animation kick in right after component(s) have been rendered. This property is optional.

```vue
<!-- Example with wrapping only one DOM element / component -->
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- Wrapping only one DOM element, defined by QBtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
```

```vue
<!-- Example with wrapping multiple DOM elements / components -->
<transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- We wrap a "p" tag and a QBtn -->
  <p key="text">
     Lorem Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition-group>
```
