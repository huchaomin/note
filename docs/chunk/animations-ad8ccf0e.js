import{r as t,o as c,c as s,f as l,g as n,aa as e}from"./vendor-e1827163.js";const d=e("p",null,"The animation effects are borrowed from Animate.css",-1),r=e("h2",{id:"1-\u5B89\u88C5",class:"doc-heading"},"\u5B89\u88C5",-1),p=e("h2",{id:"2-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),A=e("p",null,"appear: makes the entering animation kick in right after component(s) have been rendered. This property is optional.",-1),h={__name:"animations",setup(m){const o=[{id:"doc-title",title:"animations"},{id:"1-\u5B89\u88C5",title:"1. \u5B89\u88C5"},{id:"2-\u4F7F\u7528",title:"2. \u4F7F\u7528"}];return(_,g)=>{const a=t("doc-code"),i=t("doc-page");return c(),s(i,{desc:"",toc:o},{default:l(()=>[d,r,n(a,{code:"//%20embedding%20all%20animations%0Aanimations%3A%20%27all%27%0A%0A//%20or%20embedding%20only%20specific%20animations%0Aanimations%3A%20%5B%0A%20%20%27bounceInLeft%27%2C%0A%20%20%27bounceOutRight%27%0A%5D%0A",lang:"javascript"}),p,A,n(a,{code:"%3C%21--%20Example%20with%20wrapping%20only%20one%20DOM%20element%20/%20component%20--%3E%0A%3Ctransition%0A%20%20appear%0A%20%20enter-active-class%3D%22animated%20fadeIn%22%0A%20%20leave-active-class%3D%22animated%20fadeOut%22%0A%3E%0A%20%20%3C%21--%20Wrapping%20only%20one%20DOM%20element%2C%20defined%20by%20QBtn%20--%3E%0A%20%20%3Cq-btn%0A%20%20%20%20color%3D%22secondary%22%0A%20%20%20%20icon%3D%22mail%22%0A%20%20%20%20label%3D%22Email%22%0A%20%20/%3E%0A%3C/transition%3E%0A",lang:"vue"}),n(a,{code:"%3C%21--%20Example%20with%20wrapping%20multiple%20DOM%20elements%20/%20components%20--%3E%0A%3Ctransition-group%0A%20%20appear%0A%20%20enter-active-class%3D%22animated%20fadeIn%22%0A%20%20leave-active-class%3D%22animated%20fadeOut%22%0A%3E%0A%20%20%3C%21--%20We%20wrap%20a%20%22p%22%20tag%20and%20a%20QBtn%20--%3E%0A%20%20%3Cp%20key%3D%22text%22%3E%0A%20%20%20%20%20Lorem%20Ipsum%0A%20%20%3C/p%3E%0A%20%20%3Cq-btn%0A%20%20%20%20key%3D%22email-button%22%0A%20%20%20%20color%3D%22secondary%22%0A%20%20%20%20icon%3D%22mail%22%0A%20%20%20%20label%3D%22Email%22%0A%20%20/%3E%0A%3C/transition-group%3E%0A",lang:"vue"})]),_:1})}}};export{h as default};
