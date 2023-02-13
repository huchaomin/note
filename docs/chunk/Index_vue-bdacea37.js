import{r as e,o as t,c as m,f as s,g as p}from"./vendor-90615676.js";const l={__name:"Index_vue",setup(a){const n=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(i,d)=>{const o=e("doc-code"),r=e("doc-page");return t(),m(r,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6",toc:n},{default:s(()=>[p(o,{code:`<template>
<div>
  <h3>Form\u8868\u5355</h3>
  <form-wrapper ref="loginForm" :model="model" :rules="rules" @submit="submitForm">
    <form-item label="\u2F64\u6237\u540D" prop="username">
      <form-input v-model="model.username"></form-input>
    </form-item>
    <form-item label="\u786E\u8BA4\u5BC6\u7801" prop="password">
      <form-input v-model="model.password" type="password"></form-input>
    </form-item>
  </form-wrapper>
</div>
</template>
<script>
import FormInput from './FormInput.vue'
import FormItem from './FormItem.vue'
import FormWrapper from './FormWrapper.vue'

export default {
  components: {
    FormWrapper,
    FormItem,
    FormInput,
  },
  data () {
    return {
      model: { username: 'tom', password: '' },
      rules: {
        username: [{ required: true, message: '\u8BF7\u8F93\u2F0A\u2F64\u6237\u540D' }],
        password: [{ required: true, message: '\u8BF7\u8F93\u2F0A\u5BC6\u7801' }],
      },
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$notice({
            title: '\u80E1\u54E5\uFF0C\u6821\u9A8C\u6210\u529F\u4E86',
            message: '\u4F60\u5FEB\u70B9\u6765\u642C\u7816',
          })
        } else {
          this.$notice({
            title: '\u80E1\u54E5\uFF0C\u6821\u9A8C\u5931\u8D25\u4E86',
            message: '\u4F60\u5FEB\u70B9\u5220\u5E93\u8DD1\u8DEF',
          })
        }
      })
    },
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{l as default};
