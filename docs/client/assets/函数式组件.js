import{r as c,o as p,c as u,f as l,ac as t,g as o,v as n}from"./vendor.js";const r=t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u4E0D\u9700\u8981\u72B6\u6001\uFF0C\u90A3\u4E48\u5C06\u5176\u8F6C\u6362\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u53EF\u4EE5\u5C06\u6027\u80FD\u63D0\u9AD870%")],-1),_=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("p",null,[n("\u6CE8\u610F\uFF1A\u5728 2.3.0 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u60F3\u8981\u63A5\u6536 prop\uFF0C\u5219 props \u9009\u9879\u662F\u5FC5\u987B\u7684\u3002"),t("br"),n(" \u5728 2.3.0 \u6216\u4EE5\u4E0A\u7684\u7248\u672C\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7701\u7565 props \u9009\u9879\uFF0C\u6240\u6709\u7EC4\u4EF6\u4E0A\u7684 attribute \u90FD\u4F1A\u88AB\u81EA\u52A8\u9690\u5F0F\u89E3\u6790\u4E3A prop\u3002"),t("br"),n(" \u5F53\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6\u65F6\uFF0C\u8BE5\u5F15\u7528\u5C06\u4F1A\u662F HTMLElement\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F\u65E0\u72B6\u6001\u7684\u4E5F\u662F\u65E0\u5B9E\u4F8B\u7684\u3002")])],-1),h=t("h2",{id:"1-\u4EC0\u4E48\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6",class:"doc-heading"},"\u4EC0\u4E48\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6",-1),m=t("ul",null,[t("li",null,"Stateless(\u65E0\u72B6\u6001)\uFF1A\u7EC4\u4EF6\u81EA\u8EAB\u662F\u6CA1\u6709\u72B6\u6001\u7684(\u4E0D\u7EF4\u62A4\u54CD\u5E94\u6570\u636E)"),t("li",null,"Instanceless(\u65E0\u5B9E\u4F8B)\uFF1A\u7EC4\u4EF6\u81EA\u8EAB\u6CA1\u6709\u5B9E\u4F8B\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709this(\u6CA1\u6709\u751F\u547D\u5468\u671F)")],-1),x=t("p",null,"Vue\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u53D8\u4E3A\u65E0\u72B6\u6001\u3001\u65E0\u5B9E\u4F8B\u7684\u51FD\u6570\u5316\u7EC4\u4EF6\u3002",-1),g=t("p",null,"\u4ECE\u539F\u7406\u4E0A\u8BF4\uFF0C\u4E00\u822C\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u7ECF\u8FC7\u5B9E\u4F8B\u5316\u7684\u8FC7\u7A0B\uFF0C\u800C\u5355\u7EAF\u7684\u51FD\u6570\u7EC4\u4EF6\u5E76\u6CA1\u6709\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5B83\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u4E00\u4E2A\u4E2D\u95F4\u5C42\uFF0C\u53EA\u5904\u7406\u6570\u636E\uFF0C\u4E0D\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u4E5F\u662F\u7531\u4E8E\u8FD9\u4E2A\u884C\u4E3A\uFF0C\u5B83\u7684\u6E32\u67D3\u5F00\u9500\u4F1A\u4F4E\u5F88\u591A\u3002",-1),v=t("p",null,"\u5B9E\u9645\u7684\u5E94\u7528\u573A\u666F\u662F\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5728\u591A\u4E2A\u7EC4\u4EF6\u4E2D\u9009\u62E9\u4E00\u4E2A\u6765\u4EE3\u4E3A\u6E32\u67D3\uFF0C\u6216\u8005\u5728\u5C06children,props,data\u7B49\u6570\u636E\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u524D\u8FDB\u884C\u6570\u636E\u5904\u7406\u65F6\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6\u6765\u5B8C\u6210\uFF0C\u5B83\u672C\u8D28\u4E0A\u4E5F\u662F\u5BF9\u7EC4\u4EF6\u7684\u4E00\u4E2A\u5916\u90E8\u5305\u88C5\u3002",-1),f=t("h2",{id:"2-\u5199\u6CD5",class:"doc-heading"},"\u5199\u6CD5",-1),k=t("h3",{id:"3-\u5199\u5728options\u91CC\u9762",class:"doc-heading"},"\u5199\u5728options\u91CC\u9762",-1),b=t("h3",{id:"4-\u5355\u6587\u4EF6\u5B9A\u4E49\u51FD\u6570\u5F0F\u7EC4\u4EF6",class:"doc-heading"},"\u5355\u6587\u4EF6\u5B9A\u4E49\u51FD\u6570\u5F0F\u7EC4\u4EF6",-1),V=t("h2",{id:"5-context",class:"doc-heading"},"context",-1),j=t("p",null,"\u5B83\u662F\u4E00\u4E2A\u5305\u62EC\u5982\u4E0B\u5B57\u6BB5\u7684\u5BF9\u8C61\uFF1A",-1),E=t("ul",null,[t("li",null,[t("code",{class:"doc-token"},"props"),n("\uFF1A\u63D0\u4F9B\u6240\u6709 prop \u7684\u5BF9\u8C61")]),t("li",null,[t("code",{class:"doc-token"},"children"),n("\uFF1AVNode \u5B50\u8282\u70B9\u7684\u6570\u7EC4")]),t("li",null,[t("code",{class:"doc-token"},"slots"),n("\uFF1A\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E86\u5305\u542B\u6240\u6709\u63D2\u69FD\u7684\u5BF9\u8C61")]),t("li",null,[t("code",{class:"doc-token"},"scopedSlots"),n("\uFF1A\u4E00\u4E2A\u66B4\u9732\u4F20\u5165\u7684\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u5BF9\u8C61\u3002\u4E5F\u4EE5\u51FD\u6570\u5F62\u5F0F\u66B4\u9732\u666E\u901A\u63D2\u69FD\u3002")]),t("li",null,[t("code",{class:"doc-token"},"data"),n("\uFF1A\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\u6574\u4E2A\u6570\u636E\u5BF9\u8C61\uFF0C\u4F5C\u4E3A createElement \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\u7EC4\u4EF6")]),t("li",null,[t("code",{class:"doc-token"},"parent"),n("\uFF1A\u5BF9\u7236\u7EC4\u4EF6\u7684\u5F15\u7528")]),t("li",null,[t("code",{class:"doc-token"},"listeners"),n("\uFF1A\u4E00\u4E2A\u5305\u542B\u4E86\u6240\u6709\u7236\u7EC4\u4EF6\u4E3A\u5F53\u524D\u7EC4\u4EF6\u6CE8\u518C\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u5BF9\u8C61\u3002\u8FD9\u662F data.on \u7684\u4E00\u4E2A\u522B\u540D\u3002")]),t("li",null,[t("code",{class:"doc-token"},"injections"),n("\uFF1A\u5982\u679C\u4F7F\u7528\u4E86 inject \u9009\u9879\uFF0C\u5219\u8BE5\u5BF9\u8C61\u5305\u542B\u4E86\u5E94\u5F53\u88AB\u6CE8\u5165\u7684 property\u3002")])],-1),N=t("h3",{id:"6-\u4F8B",class:"doc-heading"},"\u4F8B",-1),I=t("br",null,null,-1),T=t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,[n("\u7531\u4E0A\u56FE\u53EF\u77E5"),t("code",{class:"doc-token"},'count="1"'),n("\u8FD9\u4E2Ahtml\u7279\u6027\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684,\u6211\u4EEC\u53EA\u9700\u5C06"),t("code",{class:"doc-token"},"context.data"),n("\u6539\u6210\u91CC\u9762\u7684"),t("code",{class:"doc-token"},"attrs"),n("\u5C5E\u6027\u53BB\u6389\u5C31\u884C:"),t("br"),t("code",{class:"doc-token"},"delete context.data.attrs")])],-1),C={__name:"\u51FD\u6570\u5F0F\u7EC4\u4EF6",setup(B){const d=[{id:"doc-title",title:"\u51FD\u6570\u5F0F\u7EC4\u4EF6"},{id:"1-\u4EC0\u4E48\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6",title:"1. \u4EC0\u4E48\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6"},{id:"2-\u5199\u6CD5",title:"2. \u5199\u6CD5"},{id:"3-\u5199\u5728options\u91CC\u9762",title:"2.1. \u5199\u5728options\u91CC\u9762",sub:!0},{id:"4-\u5355\u6587\u4EF6\u5B9A\u4E49\u51FD\u6570\u5F0F\u7EC4\u4EF6",title:"2.2. \u5355\u6587\u4EF6\u5B9A\u4E49\u51FD\u6570\u5F0F\u7EC4\u4EF6",sub:!0},{id:"5-context",title:"3. context"},{id:"6-\u4F8B",title:"3.1. \u4F8B",sub:!0}];return(S,w)=>{const a=c("doc-link"),e=c("doc-code"),s=c("doc-img"),i=c("doc-page");return p(),u(i,{desc:"Vue \u51FD\u6570\u5F0F\u7EC4\u4EF6\u7684\u5B9A\u4E49\u548C\u7528\u6CD5",toc:d},{default:l(()=>[t("p",null,[o(a,{to:"https://cn.vuejs.org/v2/guide/render-function.html#\u51FD\u6570\u5F0F\u7EC4\u4EF6"},{default:l(()=>[n("\u5B98\u65B9\u6587\u6863")]),_:1})]),r,_,h,m,x,g,v,f,k,o(e,{code:`Vue.component('my-component', {
  functional: true,
  props: {}, // \u53EF\u5199\u53EF\u4E0D\u5199
  // \u4E3A\u4E86\u5F25\u8865\u7F3A\u5C11\u7684\u5B9E\u4F8B,\u63D0\u4F9B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F5C\u4E3A\u4E0A\u4E0B\u6587
  render: function (createElement, context) {}
})
`,lang:"javascript"}),b,o(e,{code:`<template functional></template>
`,lang:"vue"}),V,j,E,N,o(e,{code:`Vue.component('functional', {
  functional: true,
  render: function (createElement, context) {
    console.log(context)
    return createElement('div', context.data, [
      createElement('span', context.props.count),
      context.slots().default, // \u6CE8\u610F\u8FD9\u91CCslots\u662F\u4E2A\u51FD\u6570\uFF0C\u4E0Evue\u6E32\u67D3\u51FD\u6570\u4E0D\u4E00\u6837
      context.scopedSlots.default(),
    ])
  },
})
`,lang:"javascript"}),o(e,{code:`<template>
<div>
  <functional
    :count="count"
    @click="count += 1"
    @click.native="count += 1">
    <span>2</span><span>3</span>
  </functional>
</div>
</template>
<script>
import './functional.js'

export default {
  data () {
    return {
      count: 1,
    }
  },
}
<\/script>
`,lang:"vue"}),t("p",null,[o(s,{src:"vue-context.png",alt:"vue-context"}),I,o(s,{src:"vue-context2.png",alt:"vue-context2"})]),T]),_:1})}}};export{C as default};
