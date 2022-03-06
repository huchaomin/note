---
date: '1642561731502'
title: input 输入错误显示 tooltip
description: input 输入错误显示 tooltip
tags: [vue]
---
### input 输入错误显示 tooltip
```vue
<template>
  <el-tooltip 
    v-model="show" 
    :manual="true" 
    :placement="placement" 
    popper-class="input-tooltip" 
    :content="tipContent">
    <el-input 
      v-bind="$attrs" 
      v-on="$listeners" 
      @blur="blur">
      <template v-slot:append>
        <slot name="append"></slot>
      </template>
      <template v-slot:suffix>
        <slot name="suffix"></slot>
      </template>
    </el-input>
  </el-tooltip>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    tipContent: {
      type: String,
      default: '输入有误'
    },
    required: { // 是否必填
      type: Boolean,
      default: false,
    },
    reg: { // 符合的正则表达式
      type: RegExp,
      default: function () {
        return /^\d+$/
      }
    },
  },
  data () {
    return {
      show: false,
    }
  },
  methods: {
    blur (e) {
      const val = e.target.value
      if (this.required) {
        this.show = val === '' || !this.reg.test(val)
      } else {
        this.show = !this.reg.test(val)
      }
      this.$emit('blur',e)
    },
  },
}
</script>
<style lang="scss">
.input-tooltip {
  background: $input-tipcolor !important;

  &[x-placement^='top'] {
    .popper__arrow[class] {
      border-top-color: $input-tipcolor;

      &:after {
        border-top-color: $input-tipcolor;
      }
    }
  }
}
</style>
```

