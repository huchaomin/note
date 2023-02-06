import{r as t,o as a,c as p,f as s,g as o}from"./vendor-5a734afa.js";const _={__name:"x-template",setup(d){const n=[{id:"doc-title",title:"x-template"}];return(l,r)=>{const e=t("doc-code"),c=t("doc-page");return a(),p(c,{desc:"",toc:n},{default:s(()=>[o(e,{code:`<script type="text/x-template" id="yourId">
<template>
  <h1 v-show="showHeading">
    <slot></slot>
  </h1>
  // ...
</template>
<\/script>
`,lang:"html"}),o(e,{code:`Vue.component('h1-heading', {
  template: '#yourId',
  props: {
    showHeading: {
      type: Boolean,
      default: true
    }
  }
})
`,lang:"javascript"})]),_:1})}}};export{_ as default};
