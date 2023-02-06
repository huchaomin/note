import{r as c,o as l,c as d,f as r,g as o,a8 as t,v as s}from"./vendor-5a734afa.js";const a=t("h2",{id:"1-inheritattrs",class:"doc-heading"},"inheritAttrs",-1),h=t("ul",null,[t("li",null,[t("code",{class:"doc-token"},"inheritAttrs\uFF1Atrue"),s(" \u7EE7\u627F\u9664props\u4E4B\u5916\u7684\u6240\u6709\u5C5E\u6027")]),t("li",null,[t("code",{class:"doc-token"},"inheritAttrs\uFF1Afalse"),s(" \u53EA\u7EE7\u627Fclass\u3001style\u5C5E\u6027")])],-1),u=t("h2",{id:"2-$attrs",class:"doc-heading"},"$attrs",-1),_=t("p",null,[s("\u5305\u542B\u4E86\u7236\u4F5C\u7528\u57DF\u4E2D\u4E0D\u88AB\u8BA4\u4E3A (\u4E14\u4E0D\u9884\u671F\u4E3A) props \u7684\u7279\u6027\u7ED1\u5B9A (class \u548C style \u9664\u5916)\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 v-bind=\u201D$attrs\u201D \u4F20\u5165\u5185\u90E8\u7EC4\u4EF6\u3002"),t("br"),s(" \u5F53\u4E00\u4E2A\u7EC4\u4EF6\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55 props \u65F6\uFF0C\u5B83\u5305\u542B\u6240\u6709\u7236\u4F5C\u7528\u57DF\u7684\u7ED1\u5B9A (class \u548C style \u9664\u5916)")],-1),p=t("h2",{id:"3-$listeners",class:"doc-heading"},"$listeners",-1),m=t("p",null,[s("\u5305\u542B\u4E86\u7236\u4F5C\u7528\u57DF\u4E2D\u7684 (\u4E0D\u542B .native \u4FEE\u9970\u7B26) v-on \u4E8B\u4EF6\u76D1\u542C\u5668\u3002\u5B83\u53EF\u4EE5\u901A\u8FC7 v-on=\u201D$listeners\u201D \u4F20\u5165\u5185\u90E8\u7EC4\u4EF6"),t("br"),s(" \u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u76F8\u5F53\u4E8E\u5B50\u7EC4\u4EF6\u7EE7\u627F\u4E86\u7236\u7EC4\u4EF6\u7684\u4E8B\u4EF6")],-1),$=t("h2",{id:"4-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),k=t("p",null,"grand.vue",-1),v=t("p",null,"parent.vue",-1),g=t("p",null,"child.vue",-1),f=t("h3",{id:"5-\u7EFC\u4E0A",class:"doc-heading"},"\u7EFC\u4E0A",-1),C=t("ol",null,[t("li",null,[t("code",{class:"doc-token"},"$listeners"),s(" \u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u76D1\u542C\u5668,\u4F46\u662F\u4E0D\u5305\u542B "),t("code",{class:"doc-token"},".native"),s(" \u7684\u76D1\u542C\u5668")]),t("li",null,[t("code",{class:"doc-token"},"$attrs"),s(" \u548C "),t("code",{class:"doc-token"},"$listeners"),s(" \u53EF\u4EE5\u65E0\u9650\u5411\u4E0B\u900F\u4F20,\u6BCF\u5C42\u4F20\u9012\u90FD\u53EF\u4EE5\u6DFB\u52A0\u9009\u9879")]),t("li",null,[t("code",{class:"doc-token"},"$attrs"),s(" \u5982\u679C\u9047\u5230\u540C\u540D "),t("code",{class:"doc-token"},"props"),s(" \u4F1A\u51CF\u5C11")])],-1),P={__name:"$attrs\u4E0E$listeners",setup(b){const n=[{id:"doc-title",title:"$attr \u4E0E $listeners"},{id:"1-inheritattrs",title:"1. inheritAttrs"},{id:"2-$attrs",title:"2. $attrs"},{id:"3-$listeners",title:"3. $listeners"},{id:"4-\u4F7F\u7528",title:"4. \u4F7F\u7528"},{id:"5-\u7EFC\u4E0A",title:"4.1. \u7EFC\u4E0A",sub:!0}];return(x,A)=>{const e=c("doc-code"),i=c("doc-page");return l(),d(i,{desc:"",toc:n},{default:r(()=>[a,h,u,_,p,m,$,k,o(e,{code:`<div>
  <parent :customProp="..." @click="customClick" @click.native="nativeClick"></parent>
</div>
// emit customClick from parent
// emit customClick from child
`,lang:"vue"}),v,o(e,{code:`<div>
  <child v-bind="$attrs" v-on="$listeners"></child>
</div>
...
inheritAttrs: false,
created () {
  this.$emit('click', 'emit customClick from parent')
  console.log(this.$attrs) // {customProp: ...}
  console.log(this.$listeners) // {click: customClick}
},
`,lang:"vue"}),g,o(e,{code:`<div>
  <input type="text" :value="customProp">
</div>
...
props: ['customProp'],
created () {
  this.$emit('click', 'emit customClick from child')
  console.log(this.$attrs) // {}
  console.log(this.$listeners) // {click: customClick}
},
`,lang:"vue"}),f,C]),_:1})}}};export{P as default};
