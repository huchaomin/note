import{r as t,o as m,c as r,f as s,g as c}from"./vendor-774b84b8.js";const u={__name:"FormWrapper_vue",setup(i){const e=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(a,p)=>{const n=t("doc-code"),o=t("doc-page");return m(),r(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6 -- FormWrapper",toc:e},{default:s(()=>[c(n,{code:`<template>
<form @submit.prevent="submit">
  <slot></slot>
  <button type="submit">\u786E\u5B9A</button>
</form>
</template>
<script>
export default {
  componentName: 'formWrapper',
  provide () {
    return {
      form: this, // \u5C06\u7EC4\u4EF6\u5B9E\u4F8B\u4F5C\u4E3A\u63D0\u4F9B\u8005\uFF0C\u2F26\u4EE3\u7EC4\u4EF6\u53EF\u2F45\u4FBF\u83B7\u53D6
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  data () {
    return {
      formItem: [],
    }
  },
  created () {
    this.$on('form.addFormItem', (item) => {
      if (item) {
        this.formItem.push(item)
      }
    })
    this.$on('form.removeFormItem', (item) => {
      if (item.prop) {
        this.formItem.splice(this.formItem.indexOf(item), 1)
      }
    })
  },
  methods: {
    validate (cb) {
      const tasks = this.formItem.map(item => item.validate())
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    },
    submit () {
      this.$emit('submit')
    },
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{u as default};
