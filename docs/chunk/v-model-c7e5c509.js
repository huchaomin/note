import{r as A,o as d,c as s,f as n,g as o,aa as e,v as a}from"./vendor-e1827163.js";const c=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[e("code",{class:"doc-token"},"v-bind.sync"),a(" \u8BED\u6CD5\u5DF2\u7ECF\u88AB\u79FB\u9664")])],-1),p=e("h2",{id:"1-\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",class:"doc-heading"},"\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",-1),m=e("p",null,"\u7B49\u4EF7\u4E8E",-1),u=e("h2",{id:"2-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",class:"doc-heading"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",-1),r=e("h2",{id:"3-getter-\u548C-setter",class:"doc-heading"},"getter \u548C setter",-1),D=e("h2",{id:"4-\u53C2\u6570",class:"doc-heading"},"\u53C2\u6570",-1),v=e("h2",{id:"5-\u591A\u4E2A-v-model-\u7ED1\u5B9A",class:"doc-heading"},[a("\u591A\u4E2A "),e("code",{class:"doc-token"},"v-model"),a(" \u7ED1\u5B9A")],-1),C=e("h2",{id:"6-v-model-\u4FEE\u9970\u7B26",class:"doc-heading"},[e("code",{class:"doc-token"},"v-model"),a(" \u4FEE\u9970\u7B26")],-1),g=e("h2",{id:"7-\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",class:"doc-heading"},"\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",-1),h=e("h2",{id:"8-\u76F4\u63A5\u4FEE\u6539reactive-\u6216-ref-\u7684\u503C",class:"doc-heading"},"\u76F4\u63A5\u4FEE\u6539reactive \u6216 ref \u7684\u503C",-1),y={__name:"v-model",setup(_){const l=[{id:"doc-title",title:"v-model"},{id:"1-\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",title:"1. \u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6"},{id:"2-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",title:"2. \u81EA\u5B9A\u4E49\u7EC4\u4EF6"},{id:"3-getter-\u548C-setter",title:"3. getter \u548C setter"},{id:"4-\u53C2\u6570",title:"4. \u53C2\u6570"},{id:"5-\u591A\u4E2A-v-model-\u7ED1\u5B9A",title:"5. \u591A\u4E2A v-model \u7ED1\u5B9A"},{id:"6-v-model-\u4FEE\u9970\u7B26",title:"6. v-model \u4FEE\u9970\u7B26"},{id:"7-\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",title:"7. \u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26"},{id:"8-\u76F4\u63A5\u4FEE\u6539reactive-\u6216-ref-\u7684\u503C",title:"8. \u76F4\u63A5\u4FEE\u6539reactive \u6216 ref \u7684\u503C"}];return(B,f)=>{const t=A("doc-code"),i=A("doc-page");return d(),s(i,{desc:"",toc:l},{default:n(()=>[c,p,o(t,{code:"%3Cinput%20v-model%3D%22searchText%22%20/%3E%0A",lang:"vue"}),m,o(t,{code:"%3Cinput%20%3Avalue%3D%22searchText%22%20@input%3D%22searchText%20%3D%20%24event.target.value%22%20/%3E%0A",lang:"vue"}),u,o(t,{code:"%3Ccustom-input%20v-model%3D%22searchText%22%3E%3C/custom-input%3E%0A",lang:"vue"}),o(t,{code:"app.component%28%27custom-input%27%2C%20%7B%0A%20%20props%3A%20%5B%27modelValue%27%5D%2C%0A%20%20emits%3A%20%5B%27update%3AmodelValue%27%5D%2C%0A%20%20template%3A%20%60%0A%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%3Avalue%3D%22modelValue%22%0A%20%20%20%20%20%20@input%3D%22%24emit%28%27update%3AmodelValue%27%2C%20%24event.target.value%29%22%0A%20%20%20%20%3E%0A%20%20%60%0A%7D%29%0A",lang:"js"}),r,o(t,{code:"app.component%28%27custom-input%27%2C%20%7B%0A%20%20props%3A%20%5B%27modelValue%27%5D%2C%0A%20%20emits%3A%20%5B%27update%3AmodelValue%27%5D%2C%0A%20%20template%3A%20%60%0A%20%20%20%20%3Cinput%20v-model%3D%22value%22%3E%0A%20%20%60%2C%0A%20%20computed%3A%20%7B%0A%20%20%20%20value%3A%20%7B%0A%20%20%20%20%20%20get%28%29%20%7B%0A%20%20%20%20%20%20%20%20return%20this.modelValue%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20set%28value%29%20%7B%0A%20%20%20%20%20%20%20%20this.%24emit%28%27update%3AmodelValue%27%2C%20value%29%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%29%0A",lang:"js"}),D,o(t,{code:"%3Cmy-component%20v-model%3Atitle%3D%22bookTitle%22%3E%3C/my-component%3E%0A",lang:"vue"}),o(t,{code:"app.component%28%27my-component%27%2C%20%7B%0A%20%20props%3A%20%7B%0A%20%20%20%20title%3A%20String%0A%20%20%7D%2C%0A%20%20emits%3A%20%5B%27update%3Atitle%27%5D%2C%0A%20%20template%3A%20%60%0A%20%20%20%20%3Cinput%0A%20%20%20%20%20%20type%3D%22text%22%0A%20%20%20%20%20%20%3Avalue%3D%22title%22%0A%20%20%20%20%20%20@input%3D%22%24emit%28%27update%3Atitle%27%2C%20%24event.target.value%29%22%3E%0A%20%20%60%0A%7D%29%0A",lang:"js"}),v,o(t,{code:"%3Cuser-name%0A%20%20v-model%3Afirst-name%3D%22firstName%22%0A%20%20v-model%3Alast-name%3D%22lastName%22%0A%3E%3C/user-name%3E%0A",lang:"vue"}),o(t,{code:"app.component%28%27user-name%27%2C%20%7B%0A%20%20props%3A%20%7B%0A%20%20%20%20firstName%3A%20String%2C%0A%20%20%20%20lastName%3A%20String%0A%20%20%7D%2C%0A%20%20emits%3A%20%5B%27update%3AfirstName%27%2C%20%27update%3AlastName%27%5D%2C%0A%20%20template%3A%20%60%0A%20%20%20%20%3Cinput%0A%20%20%20%20%20%20type%3D%22text%22%0A%20%20%20%20%20%20%3Avalue%3D%22firstName%22%0A%20%20%20%20%20%20@input%3D%22%24emit%28%27update%3AfirstName%27%2C%20%24event.target.value%29%22%3E%0A%0A%20%20%20%20%3Cinput%0A%20%20%20%20%20%20type%3D%22text%22%0A%20%20%20%20%20%20%3Avalue%3D%22lastName%22%0A%20%20%20%20%20%20@input%3D%22%24emit%28%27update%3AlastName%27%2C%20%24event.target.value%29%22%3E%0A%20%20%60%0A%7D%29%0A",lang:"js"}),C,o(t,{code:"%3Cmy-component%20v-model.capitalize%3D%22myText%22%3E%3C/my-component%3E%0A",lang:"vue"}),o(t,{code:"app.component%28%27my-component%27%2C%20%7B%0A%20%20props%3A%20%7B%0A%20%20%20%20modelValue%3A%20String%2C%0A%20%20%20%20modelModifiers%3A%20%7B%0A%20%20%20%20%20%20default%3A%20%28%29%20%3D%3E%20%28%7B%7D%29%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20emits%3A%20%5B%27update%3AmodelValue%27%5D%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20emitValue%28e%29%20%7B%0A%20%20%20%20%20%20let%20value%20%3D%20e.target.value%0A%20%20%20%20%20%20console.log%28this.modelModifiers%29%20//%20%7B%20capitalize%3A%20true%20%7D%0A%20%20%20%20%20%20if%20%28this.modelModifiers.capitalize%29%20%7B%0A%20%20%20%20%20%20%20%20value%20%3D%20value.charAt%280%29.toUpperCase%28%29%20+%20value.slice%281%29%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20this.%24emit%28%27update%3AmodelValue%27%2C%20value%29%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20template%3A%20%60%3Cinput%0A%20%20%20%20type%3D%22text%22%0A%20%20%20%20%3Avalue%3D%22modelValue%22%0A%20%20%20%20@input%3D%22emitValue%22%3E%60%0A%7D%29%0A",lang:"js"}),g,o(t,{code:"%3Cmy-component%20v-model%3Adescription.capitalize%3D%22myText%22%3E%3C/my-component%3E%0A",lang:"vue"}),o(t,{code:"app.component%28%27my-component%27%2C%20%7B%0A%20%20props%3A%20%5B%27description%27%2C%20%27descriptionModifiers%27%5D%2C%0A%20%20emits%3A%20%5B%27update%3Adescription%27%5D%2C%0A%20%20template%3A%20%60%0A%20%20%20%20%3Cinput%20type%3D%22text%22%0A%20%20%20%20%20%20%3Avalue%3D%22description%22%0A%20%20%20%20%20%20@input%3D%22%24emit%28%27update%3Adescription%27%2C%20%24event.target.value%29%22%3E%0A%20%20%60%2C%0A%20%20created%28%29%20%7B%0A%20%20%20%20console.log%28this.descriptionModifiers%29%20//%20%7B%20capitalize%3A%20true%20%7D%0A%20%20%7D%0A%7D%29%0A",lang:"js"}),h,o(t,{code:"const%20%7B%20locale%20%7D%20%3D%20useI18n%28%7B%20useScope%3A%20%27global%27%20%7D%29%0A%0A//%20template%0Av-model%3D%22locale%22%0A",lang:"vue"})]),_:1})}}};export{y as default};