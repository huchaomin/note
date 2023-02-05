import{r as t,o as c,c as s,f as l,g as a,a8 as n}from"./vendor.js";const d=n("p",null,"The animation effects are borrowed from Animate.css",-1),r=n("h2",{id:"1-\u5B89\u88C5",class:"doc-heading"},"\u5B89\u88C5",-1),p=n("h2",{id:"2-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),m=n("p",null,"appear: makes the entering animation kick in right after component(s) have been rendered. This property is optional.",-1),f={__name:"animations",setup(_){const o=[{id:"doc-title",title:"animations"},{id:"1-\u5B89\u88C5",title:"1. \u5B89\u88C5"},{id:"2-\u4F7F\u7528",title:"2. \u4F7F\u7528"}];return(g,u)=>{const e=t("doc-code"),i=t("doc-page");return c(),s(i,{desc:"",toc:o},{default:l(()=>[d,r,a(e,{code:`// embedding all animations
animations: 'all'

// or embedding only specific animations
animations: [
  'bounceInLeft',
  'bounceOutRight'
]
`,lang:"javascript"}),p,m,a(e,{code:`<!-- Example with wrapping only one DOM element / component -->
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- Wrapping only one DOM element, defined by QBtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
`,lang:"vue"}),a(e,{code:`<!-- Example with wrapping multiple DOM elements / components -->
<transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- We wrap a "p" tag and a QBtn -->
  <p key="text">
     Lorem Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition-group>
`,lang:"vue"})]),_:1})}}};export{f as default};
