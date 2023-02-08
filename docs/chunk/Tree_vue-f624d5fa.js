import{r as e,o as r,c,f as a,g as d}from"./vendor-585b19a3.js";const m={__name:"Tree_vue",setup(s){const t=[{id:"doc-title",title:"vue \u7EC4\u4EF6\u7684\u9012\u5F52"}];return(p,i)=>{const n=e("doc-code"),o=e("doc-page");return r(),c(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u9012\u5F52\u7EC4\u4EF6 -- Tree",toc:t},{default:a(()=>[d(n,{code:`<template>
<div class="tree">
  <TreeNode
    v-for="item in data"
    :key="item.title"
    :model="item">
  </TreeNode>
</div>
</template>
<script>
import TreeNode from './TreeNode.vue'

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeNode,
  },
}
<\/script>
<style scoped>
.tree {
  text-align: left;
}
</style>
`,lang:"vue"})]),_:1})}}};export{m as default};
