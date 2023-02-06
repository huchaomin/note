import{r as n,o as c,c as s,f as i,g as p}from"./vendor.js";const l={__name:"Notice_vue",setup(a){const t=[{id:"doc-title",title:"vue \u5F39\u7A97\u7EC4\u4EF6"}];return(d,r)=>{const e=n("doc-code"),o=n("doc-page");return c(),s(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u5F39\u7A97\u7EC4\u4EF6 -- Notice",toc:t},{default:i(()=>[p(e,{code:`<template>
<div v-if="isShow" class="box">
  <h3>{{ title }}</h3>
  <p class="box-content">{{ message }}</p>
  <button type="button" @click="hide">\u5173\u95ED</button>
</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isShow: true,
    }
  },
  methods: {
    hide () {
      this.isShow = false
      this.remove()
    },
  },
}
<\/script>
<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  background-color: #ffffff;
  border: grey 3px solid;
  box-sizing: border-box;
}

.box-content {
  width: 200px;
  font-size: 14px;
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 3px;
  margin: 10px auto 8px;
}
</style>
`,lang:"vue"})]),_:1})}}};export{l as default};
