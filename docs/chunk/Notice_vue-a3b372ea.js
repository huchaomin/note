import{n as A,o as s,p as c,w as i,a as p}from"./vendor-a2411ed8.js";const B={__name:"Notice_vue",setup(a){const t=[{id:"doc-title",title:"vue \u5F39\u7A97\u7EC4\u4EF6"}];return(n,d)=>{const e=A("doc-code"),o=A("doc-page");return s(),c(o,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue \u5F39\u7A97\u7EC4\u4EF6 -- Notice",toc:t},{default:i(()=>[p(e,{code:"%3Ctemplate%3E%0A%3Cdiv%20v-if%3D%22isShow%22%20class%3D%22box%22%3E%0A%20%20%3Ch3%3E%7B%7B%20title%20%7D%7D%3C/h3%3E%0A%20%20%3Cp%20class%3D%22box-content%22%3E%7B%7B%20message%20%7D%7D%3C/p%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20@click%3D%22hide%22%3E%u5173%u95ED%3C/button%3E%0A%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20props%3A%20%7B%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20type%3A%20String%2C%0A%20%20%20%20%20%20default%3A%20%27%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20message%3A%20%7B%0A%20%20%20%20%20%20type%3A%20String%2C%0A%20%20%20%20%20%20default%3A%20%27%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20data%20%28%29%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20isShow%3A%20true%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20hide%20%28%29%20%7B%0A%20%20%20%20%20%20this.isShow%20%3D%20false%0A%20%20%20%20%20%20this.remove%28%29%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A%3C/script%3E%0A%3Cstyle%20scoped%3E%0A.box%20%7B%0A%20%20position%3A%20fixed%3B%0A%20%20width%3A%20100%25%3B%0A%20%20top%3A%2016px%3B%0A%20%20left%3A%200%3B%0A%20%20text-align%3A%20center%3B%0A%20%20background-color%3A%20%23ffffff%3B%0A%20%20border%3A%20grey%203px%20solid%3B%0A%20%20box-sizing%3A%20border-box%3B%0A%7D%0A%0A.box-content%20%7B%0A%20%20width%3A%20200px%3B%0A%20%20font-size%3A%2014px%3B%0A%20%20padding%3A%208px%2016px%3B%0A%20%20background%3A%20%23ffffff%3B%0A%20%20border-radius%3A%203px%3B%0A%20%20margin%3A%2010px%20auto%208px%3B%0A%7D%0A%3C/style%3E%0A",lang:"vue"})]),_:1})}}};export{B as default};