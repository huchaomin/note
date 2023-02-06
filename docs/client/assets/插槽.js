import{r as o,o as l,c as p,f as d,g as n,ac as t,v as c}from"./vendor.js";const i=t("h2",{id:"1-\u63D2\u69FD\u540E\u5907\u5185\u5BB9",class:"doc-heading"},"\u63D2\u69FD\u540E\u5907\u5185\u5BB9",-1),r=t("p",null,"SubmitButton.vue",-1),u=t("p",null,"\u4F7F\u7528\u65F6",-1),m=t("h2",{id:"2-\u5177\u540D\u63D2\u69FD",class:"doc-heading"},"\u5177\u540D\u63D2\u69FD",-1),h=t("p",null,"Layout.vue",-1),_=t("p",null,"\u4F7F\u7528",-1),f=t("p",null,"\u5411\u4F7F\u7528\u8005\u4F20\u53C2",-1),v=t("h2",{id:"3-\u4F7F\u7528\u8005\u4E0D\u60F3\u4F7F\u7528template\u6807\u7B7E",class:"doc-heading"},"\u4F7F\u7528\u8005\u4E0D\u60F3\u4F7F\u7528template\u6807\u7B7E",-1),g=t("p",null,[c("\u6761\u4EF6\uFF1A "),t("strong",null,"\u53EA\u6709\u4E00\u4E2A\u9ED8\u8BA4\u63D2\u69FD")],-1),b=t("h2",{id:"4-\u4F7F\u7528\u8005\u60F3\u7B80\u5199",class:"doc-heading"},"\u4F7F\u7528\u8005\u60F3\u7B80\u5199",-1),A=t("p",null,[t("strong",null,"default \u4E0D\u80FD\u7B80\u5199")],-1),B={__name:"\u63D2\u69FD",setup(N){const a=[{id:"doc-title",title:"\u63D2\u69FD"},{id:"1-\u63D2\u69FD\u540E\u5907\u5185\u5BB9",title:"1. \u63D2\u69FD\u540E\u5907\u5185\u5BB9"},{id:"2-\u5177\u540D\u63D2\u69FD",title:"2. \u5177\u540D\u63D2\u69FD"},{id:"3-\u4F7F\u7528\u8005\u4E0D\u60F3\u4F7F\u7528template\u6807\u7B7E",title:"3. \u4F7F\u7528\u8005\u4E0D\u60F3\u4F7F\u7528template\u6807\u7B7E"},{id:"4-\u4F7F\u7528\u8005\u60F3\u7B80\u5199",title:"4. \u4F7F\u7528\u8005\u60F3\u7B80\u5199"}];return(S,x)=>{const e=o("doc-code"),s=o("doc-page");return l(),p(s,{desc:"",toc:a},{default:d(()=>[i,r,n(e,{code:`<button type="submit">
  <slot>Submit</slot>
</button>
`,lang:"html"}),u,n(e,{code:`<submit-button></submit-button> // Submit
<submit-button>Save</submit-button> // Save
`,lang:"html"}),m,h,n(e,{code:`<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
    <!--<slot name="default"></slot>-->
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
`,lang:"vue"}),_,n(e,{code:`<layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <!--  <template v-slot:default>-->
  <!--    <p>A paragraph for the main content.</p>-->
  <!--    <p>And another one.</p>-->
  <!--  </template>-->
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</layout>
`,lang:"vue"}),f,n(e,{code:`<footer>
  <slot name="footer" v-bind:user="userInData"></slot>
</footer>

// \u4F7F\u7528\u8005
<template v-slot:footer="aaa">
  <p>{{ aaa.user.firstName }}</p>
</template>
// \u89E3\u6784\u5199\u6CD5 const { user } = aaa
<template v-slot:footer="{ user }">
  <p>{{ user.firstName }}</p>
</template>
// \u6DFB\u52A0\u7ED3\u6784\u9ED8\u8BA4\u53C2\u6570
<template v-slot:footer="{ user = { firstName: 'Guest' } }">
  <p>{{ user.firstName }}</p>
</template>
`,lang:"vue"}),v,g,n(e,{code:`<div v-slot:default="abcd">
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
</div>
// \u6216\u7701\u7565default
<div v-slot="abcd">
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
</div>
`,lang:"vue"}),b,A,n(e,{code:`<template #footer>
  <p>Here's some contact info</p>
</template>
`,lang:"vue"})]),_:1})}}};export{B as default};
