import{r as n,o as c,c as r,f as a,g as l}from"./vendor-5a734afa.js";const _={__name:"Index_vue",setup(i){const e=[{id:"doc-title",title:"vue \u7EC4\u4EF6\u7684\u9012\u5F52"}];return(d,p)=>{const t=n("doc-code"),o=n("doc-page");return c(),r(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u9012\u5F52\u7EC4\u4EF6",toc:e},{default:a(()=>[l(t,{code:`<template>
  <Tree :data="treeData"></Tree>
</template>
<script>
import Tree from '../Tree.vue'

export default {
  data () {
    return {
      treeData: [
        {
          title: 'Web',
          children: [
            {
              title: 'Java',
            },
            {
              title: 'JS\u9AD8\u7EA7',
              children: [
                {
                  title: 'ES6',
                },
                {
                  title: '\u52A8\u6548',
                },
              ],
            },
            {
              title: 'Web\u524D\u7AEF',
              children: [
                {
                  title: 'Vue',
                  expand: true,
                  children: [
                    {
                      title: '\u7EC4\u4EF6\u5316',
                    },
                    {
                      title: '\u6E90\u7801',
                    },
                    {
                      title: 'docker\u90E8\u7F72',
                    },
                  ],
                },
                {
                  title: 'React',
                  children: [
                    {
                      title: 'JSX',
                    },
                    {
                      title: '\u865A\u62DFDOM',
                    },
                  ],
                },
                {
                  title: 'Node',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  components: {
    Tree,
  },
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{_ as default};
