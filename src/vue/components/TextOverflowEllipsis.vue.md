---
date: '1642504001532'
title: 文字超长显示tooltip
description: 文字超长显示tooltip，不超长不显示
tags: [vue]
---
### 文字超长显示tooltip，不超长不显示
```vue
<template>
  <el-tooltip 
    effect="light" 
    :enterable="enterable" 
    :placement="placement" 
    :disabled="disabled"
    :content="content">
    <slot></slot>
  </el-tooltip>
</template>
<script>
import observeResize from '@/plugins/domResizeSensor'
export default {
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    observe: { // 是否实时监听元素大小的变化
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      content: '',
      disabled: true,
    }
  },
  mounted () {
    this.p = this.$slots.default[0].elm
    this.p.style.whiteSpace = 'nowrap'
    this.p.style.overflow = 'hidden'
    this.p.style.textOverflow = 'ellipsis'
    this.span = this.p.querySelector('span')
    this.recalculateTextEllipsis()
    if (this.observe) {
      observeResize(this.p, this.recalculateTextEllipsis)
      observeResize(this.span, this.recalculateTextEllipsis)
    }
  },
  updated () {
    if (!this.observe) {
      this.recalculateTextEllipsis()
    }
  },
  methods: {
    recalculateTextEllipsis () {
      this.$nextTick(() => {
        let computedStyle = window.getComputedStyle(this.p)
        let paddingLeft = parseFloat(computedStyle.paddingLeft)
        let paddingRight = parseFloat(computedStyle.paddingRight)
        let borderLeftWidth = parseFloat(computedStyle.borderLeftWidth)
        let borderRightWidth = parseFloat(computedStyle.borderRightWidth)
        if (this.span.getBoundingClientRect().width > this.p.getBoundingClientRect().width - paddingLeft - paddingRight - borderLeftWidth - borderRightWidth) {  // 使用offsetWidth会有精度问题
          this.content = this.span.textContent
          this.disabled = false
        } else {
          this.disabled = true
        }
      })
    },
  },
}
</script>
```
::: alert
传进来的元素必须只有一个元素且包裹一个span标签

element-ui的tooltip不支持router-link 【来自官方的警告】，但是以slot的方式好像没问题
:::
