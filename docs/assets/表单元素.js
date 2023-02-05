import{r as c,o as s,c as i,f as p,g as t,a8 as e,v as n}from"./vendor.js";const l=e("h2",{id:"1-input",class:"doc-heading"},"input",-1),u=e("h3",{id:"2-number\u4FEE\u9970\u7B26",class:"doc-heading"},"number\u4FEE\u9970\u7B26",-1),r=e("h3",{id:"3-lazy\u4FEE\u9970\u7B26",class:"doc-heading"},"lazy\u4FEE\u9970\u7B26",-1),_=e("h3",{id:'4-type="checkbox"',class:"doc-heading"},[e("code",{class:"doc-token"},'type="checkbox"')],-1),h=e("h3",{id:'5-type="radio"',class:"doc-heading"},[e("code",{class:"doc-token"},'type="radio"')],-1),g=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[n("\u5BF9\u4E8E\u9700\u8981\u4F7F\u7528\u8F93\u5165\u6CD5(\u5982\u4E2D\u6587\u3001\u65E5\u6587\u3001\u97E9\u6587\u7B49) \u7684\u8BED\u8A00\uFF0C\u4F60\u4F1A\u53D1\u73B0 "),e("code",{class:"doc-token"},"v-model"),n(" \u4E0D\u4F1A\u5728\u8F93\u5165\u6CD5\u7EC4\u5408\u6587\u5B57\u8FC7\u7A0B\u4E2D\u5F97\u5230\u66F4\u65B0\u3002\u5982\u679C\u4F60\u4E5F\u60F3\u5904\u7406\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u8BF7\u4F7F\u7528 "),e("code",{class:"doc-token"},"input"),n(" \u4E8B\u4EF6\u3002")])],-1),k={__name:"\u8868\u5355\u5143\u7D20",setup(m){const a=[{id:"doc-title",title:"\u8868\u5355\u5143\u7D20\u76F8\u5173"},{id:"1-input",title:"1. input"},{id:"2-number\u4FEE\u9970\u7B26",title:"1.1. number\u4FEE\u9970\u7B26",sub:!0},{id:"3-lazy\u4FEE\u9970\u7B26",title:"1.2. lazy\u4FEE\u9970\u7B26",sub:!0},{id:'4-type="checkbox"',title:'1.3. type="checkbox"',sub:!0},{id:'5-type="radio"',title:'1.4. type="radio"',sub:!0}];return(v,y)=>{const o=c("doc-code"),d=c("doc-page");return s(),i(d,{desc:"",toc:a},{default:p(()=>[l,u,t(o,{code:`<p>
  <input v-model="age">
  <span>{{ age + 1 }}</span>
</p>
// \u5B57\u7B26\u4E32\u62FC\u63A5
`,lang:"vue"}),t(o,{code:`<p>
  <input v-model.number="age">
  <span>{{ age + 1 }}</span>
</p>
// \u6570\u5B57\u76F8\u52A0\uFF08\u524D\u63D0\u662F\u8F93\u5165\u7684\u503C\u80FD\u88ABparseFloat()\uFF0C\u5426\u5219\u4E5F\u662F\u8FD4\u56DE\u5B57\u7B26\u4E32\u62FC\u63A5\uFF09
`,lang:"vue"}),r,t(o,{code:`// \u5728\u201Cchange\u201D\u65F6\u800C\u975E\u201Cinput\u201D\u65F6\u66F4\u65B0
<input v-model.lazy="msg">
`,lang:"vue"}),_,t(o,{code:`<p>
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
  <span>{{ toggle }}</span>
</p>
`,lang:"vue"}),h,t(o,{code:`<p>
  <input type="radio" v-model="radio" value="radio-checked1">
  <input type="radio" v-model="radio" value="radio-checked2">
  <span>{{ radio }}</span>
</p>
`,lang:"vue"}),g]),_:1})}}};export{k as default};
