import{r as t,o as c,c as d,f as r,g as s,a9 as n}from"./vendor.js";const p=n("h2",{id:"1-\u901A\u7528\u5199\u6CD5",class:"doc-heading"},"\u901A\u7528\u5199\u6CD5",-1),i=n("h2",{id:"2-getter-setter",class:"doc-heading"},"getter setter",-1),_={__name:"\u8868\u5355\u5904\u7406",setup(m){const a=[{id:"doc-title",title:"vuex \u8868\u5355\u5904\u7406"},{id:"1-\u901A\u7528\u5199\u6CD5",title:"1. \u901A\u7528\u5199\u6CD5"},{id:"2-getter-setter",title:"2. getter setter"}];return(l,u)=>{const e=t("doc-code"),o=t("doc-page");return c(),d(o,{desc:"vuex \u4F7F\u7528v-model\u76F4\u63A5\u7ED1\u5B9Astate\u7684\u53D8\u901A\u65B9\u6CD5",toc:a},{default:r(()=>[p,s(e,{code:`<template>
  <input :value="message" @input="updateMessage">
</template>

<script>
// ...
export default {
  computed: {
    ...mapState({
      message: state => state.obj.message
    })
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
  }
}
<\/script>
`,lang:"vue"}),i,s(e,{code:`<template>
  <input v-model="message">
</template>

<script>
export default {
  computed: {
    message: {
      get () {
        return this.$store.state.obj.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{_ as default};
