import{r as t,o as a,c as r,f as i,g as n}from"./vendor-e1827163.js";const d={__name:"FormInput_vue",setup(c){const e=[{id:"doc-title",title:"vue form\u7EC4\u4EF6"}];return(p,s)=>{const o=t("doc-code"),A=t("doc-page");return a(),r(A,{desc:"\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 vue form\u7EC4\u4EF6 -- FormInput",toc:e},{default:i(()=>[n(o,{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%3Cinput%20%3Avalue%3D%22value%22%20v-bind%3D%22%24attrs%22%20@input%3D%22onInput%22%3E%0A%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aimport%20emitter%20from%20%27./emitter.js%27%0A%0Aexport%20default%20%7B%0A%20%20inheritAttrs%3A%20false%2C%0A%20%20mixins%3A%20%5Bemitter%5D%2C%0A%20%20props%3A%20%7B%0A%20%20%20%20value%3A%20%7B%0A%20%20%20%20%20%20type%3A%20String%2C%0A%20%20%20%20%20%20default%3A%20%27%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20onInput%20%28e%29%20%7B%0A%20%20%20%20%20%20this.%24emit%28%27input%27%2C%20e.target.value%29%0A%20%20%20%20%20%20//%20this.%24parent.%24emit%28%27validate%27%29%0A%20%20%20%20%20%20this.dispatch%28%27formItem%27%2C%20%27validate%27%29%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A%3C/script%3E%0A",lang:"vue"})]),_:1})}}};export{d as default};
