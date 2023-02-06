import{r as e,o,c as s,f as a,g as m}from"./vendor-5a734afa.js";const d={__name:"FormItem_vue",setup(i){const t=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(c,p)=>{const r=e("doc-code"),n=e("doc-page");return o(),s(n,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6 -- FormItem",toc:t},{default:a(()=>[m(r,{code:`<template>
<div>
  <label v-if="label">{{ label }}</label>
  <slot></slot>
  <p v-if="error">{{ error }}</p>
</div>
</template>
<script>
import emitter from './emitter.js'
import Schema from 'async-validator'

export default {
  inject: ['form'],
  mixins: [emitter],
  componentName: 'formItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      error: '',
    }
  },
  mounted () {
    this.$on('validate', () => { this.validate() })
    this.dispatch('formWrapper', 'form.addFormItem', [this])
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const descriptor = { [this.prop]: rules }
      const schema = new Schema(descriptor)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    },
  },
  beforeDestroy () {
    this.dispatch('formWrapper', 'form.removeFormItem', [this])
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{d as default};
