import{r as s,o as l,c as i,f as r,g as t,a8 as e,v as o}from"./vendor.js";const f=e("h2",{id:"1-v-for\u4E2D\u4F7F\u7528method",class:"doc-heading"},"v-for\u4E2D\u4F7F\u7528method",-1),a=e("h2",{id:"2-v-if\u4E0Ev-for-\u4F18\u5148\u7EA7\u7684\u6539\u53D8",class:"doc-heading"},"v-if\u4E0Ev-for \u4F18\u5148\u7EA7\u7684\u6539\u53D8",-1),u=e("h3",{id:"3-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),_=e("p",null,[o("2.x \u7248\u672C\u4E2D\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\u540C\u65F6\u4F7F\u7528 "),e("code",{class:"doc-token"},"v-if"),o(" \u548C "),e("code",{class:"doc-token"},"v-for"),o(" \u65F6\uFF0C"),e("code",{class:"doc-token"},"v-for"),o(" \u4F1A\u4F18\u5148\u4F5C\u7528\u3002")],-1),m=e("h3",{id:"4-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),v=e("p",null,[o("3.x \u7248\u672C\u4E2D "),e("code",{class:"doc-token"},"v-if"),o(" \u603B\u662F\u4F18\u5148\u4E8E "),e("code",{class:"doc-token"},"v-for"),o(" \u751F\u6548\u3002")],-1),h=e("h2",{id:"5-v-for-\u4E2D\u7684-ref-\u6570\u7EC4",class:"doc-heading"},"v-for \u4E2D\u7684 Ref \u6570\u7EC4",-1),p=e("p",null,[o("\u5728 Vue 2 \u4E2D\uFF0C\u5728 "),e("code",{class:"doc-token"},"v-for"),o(" \u4E2D\u4F7F\u7528\u7684 "),e("code",{class:"doc-token"},"ref"),o(" attribute \u4F1A\u7528 ref \u6570\u7EC4\u586B\u5145\u76F8\u5E94\u7684 "),e("code",{class:"doc-token"},"$refs"),o(" property\u3002\u5F53\u5B58\u5728\u5D4C\u5957\u7684 "),e("code",{class:"doc-token"},"v-for"),o(" \u65F6\uFF0C\u8FD9\u79CD\u884C\u4E3A\u4F1A\u53D8\u5F97\u4E0D\u660E\u786E\u4E14\u6548\u7387\u4F4E\u4E0B\u3002")],-1),k=e("p",null,[o("\u5728 Vue 3 \u4E2D\uFF0C\u6B64\u7C7B\u7528\u6CD5\u5C06\u4E0D\u518D\u81EA\u52A8\u521B\u5EFA "),e("code",{class:"doc-token"},"$ref"),o(" \u6570\u7EC4\u3002\u8981\u4ECE\u5355\u4E2A\u7ED1\u5B9A\u83B7\u53D6\u591A\u4E2A ref\uFF0C\u8BF7\u5C06 "),e("code",{class:"doc-token"},"ref"),o(" \u7ED1\u5B9A\u5230\u4E00\u4E2A\u66F4\u7075\u6D3B\u7684\u51FD\u6570\u4E0A (\u8FD9\u662F\u4E00\u4E2A\u65B0\u7279\u6027)\uFF1A")],-1),g=e("p",null,"\u7ED3\u5408\u9009\u9879\u5F0F API:",-1),x=e("p",null,"\u7EC4\u5408\u5F0F API:",-1),R=e("p",null,"\u6CE8\u610F\uFF1A",-1),b=e("ul",null,[e("li",null,[e("p",null,[e("code",{class:"doc-token"},"itemRefs"),o(" \u4E0D\u5FC5\u662F\u6570\u7EC4\uFF1A\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176 ref \u53EF\u4EE5\u901A\u8FC7\u8FED\u4EE3\u7684 key \u88AB\u8BBE\u7F6E\u3002")])]),e("li",null,[e("p",null,[o("\u5982\u6709\u9700\u8981\uFF0C"),e("code",{class:"doc-token"},"itemRefs"),o(" \u4E5F\u53EF\u4EE5\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4E14\u53EF\u4EE5\u88AB\u4FA6\u542C\u3002")])])],-1),y={__name:"v-for",setup(I){const d=[{id:"doc-title",title:"v-for\u7684\u7528\u6CD5"},{id:"1-v-for\u4E2D\u4F7F\u7528method",title:"1. v-for\u4E2D\u4F7F\u7528method"},{id:"2-v-if\u4E0Ev-for-\u4F18\u5148\u7EA7\u7684\u6539\u53D8",title:"2. v-if\u4E0Ev-for \u4F18\u5148\u7EA7\u7684\u6539\u53D8"},{id:"3-2-x-\u8BED\u6CD5",title:"2.1. 2.x \u8BED\u6CD5",sub:!0},{id:"4-3-x-\u8BED\u6CD5",title:"2.2. 3.x \u8BED\u6CD5",sub:!0},{id:"5-v-for-\u4E2D\u7684-ref-\u6570\u7EC4",title:"3. v-for \u4E2D\u7684 Ref \u6570\u7EC4"}];return(B,U)=>{const n=s("doc-code"),c=s("doc-page");return l(),i(c,{desc:"",toc:d},{default:r(()=>[f,t(n,{code:`<ul v-for="numbers in sets">
  <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
</ul>
`,lang:"vue"}),t(n,{code:`data() {
  return {
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  }
},
methods: {
  even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  }
}
`,lang:"js"}),a,u,_,m,v,t(n,{code:`<!-- \u8FD9\u5C06\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A\u201Ctodo\u201D property \u6CA1\u6709\u5728\u5B9E\u4F8B\u4E0A\u5B9A\u4E49 -->

<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
`,lang:"vue"}),h,p,k,t(n,{code:`<div v-for="item in list" :ref="setItemRef"></div>
`,lang:"html"}),g,t(n,{code:`export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
`,lang:"js"}),x,t(n,{code:`import { onBeforeUpdate, onUpdated } from 'vue'

export default {
  setup() {
    let itemRefs = []
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })
    return {
      setItemRef
    }
  }
}
`,lang:"js"}),R,b]),_:1})}}};export{y as default};
