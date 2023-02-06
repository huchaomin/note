import{r as t,o as a,c as r,f as i,g as c}from"./vendor-5a734afa.js";const u={__name:"FormInput_vue",setup(p){const e=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(s,m)=>{const n=t("doc-code"),o=t("doc-page");return a(),r(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6 -- FormInput",toc:e},{default:i(()=>[c(n,{code:`<template>
<div>
  <input :value="value" v-bind="$attrs" @input="onInput">
</div>
</template>
<script>
import emitter from './emitter.js'

export default {
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      // this.$parent.$emit('validate')
      this.dispatch('formItem', 'validate')
    },
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{u as default};
