import{r as e,o as l,c as d,f as c,g as i}from"./vendor-90615676.js";const m={__name:"TreeNode_vue",setup(s){const n=[{id:"doc-title",title:"vue \u7EC4\u4EF6\u7684\u9012\u5F52"}];return(r,a)=>{const o=e("doc-code"),t=e("doc-page");return l(),d(t,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u9012\u5F52\u7EC4\u4EF6 -- TreeNode",toc:n},{default:c(()=>[i(o,{code:`<template>
  <div>
    <div
      :style="{paddingLeft: (level-1)+'em'}"
      @click="toggle"
    >
      <label>{{ model.title }}</label>
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <div
      v-if="isFolder"
      v-show="open"
    >
      <tree-node
        v-for="model in model.children"
        :key="model.title"
        :level="level + 1"
        :model="model"
        class="item"
      >
      </tree-node>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tree-node',
  props: {
    model: Object,
    level: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      open: false,
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{m as default};
