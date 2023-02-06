import{r as n,o as d,c as i,f as p,g as c,ac as e}from"./vendor.js";const s=e("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),l=e("p",null,"\u9ED8\u8BA4emit \u2018input\u2019 event\uFF0C receive \u2018value\u2019 prop",-1),r=e("h2",{id:"2-\u81EA\u5B9A\u4E49v-model",class:"doc-heading"},"\u81EA\u5B9A\u4E49v-model",-1),v=e("h3",{id:"3-\u9ED8\u8BA4",class:"doc-heading"},"\u9ED8\u8BA4",-1),u=e("h3",{id:"4-emit-\u2018change\u2019-event\uFF0C-receive-\u2018checked\u2019-prop",class:"doc-heading"},"emit \u2018change\u2019 event\uFF0C receive \u2018checked\u2019 prop",-1),k={__name:"v-model",setup(h){const o=[{id:"doc-title",title:"v-model"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-\u81EA\u5B9A\u4E49v-model",title:"2. \u81EA\u5B9A\u4E49v-model"},{id:"3-\u9ED8\u8BA4",title:"2.1. \u9ED8\u8BA4",sub:!0},{id:"4-emit-\u2018change\u2019-event\uFF0C-receive-\u2018checked\u2019-prop",title:"2.2. emit \u2018change\u2019 event\uFF0C receive \u2018checked\u2019 prop",sub:!0}];return(m,_)=>{const t=n("doc-code"),a=n("doc-page");return d(),i(a,{desc:"",toc:o},{default:p(()=>[s,l,r,v,c(t,{code:`<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input',$event.target.value)">
    <textarea
      cols="30" rows="10"
      :value="value"
      @change="$emit('input',$event.target.value)">
    </textarea>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
<\/script>
`,lang:"vue"}),u,c(t,{code:`<template>
  <div>
    <input
      type="text"
      :value="checked"
      @input="$emit('change',$event.target.value)">
    <span>{{ checked }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: ['checked'],
}
<\/script>
`,lang:"vue"})]),_:1})}}};export{k as default};
