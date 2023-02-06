import{r as t,o as a,c as p,f as d,g as l,ac as e,v as o}from"./vendor.js";const r=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[o("\u751F\u6210 prop \u9ED8\u8BA4\u503C\u7684\u5DE5\u5382\u51FD\u6570\u4E0D\u518D\u80FD\u8BBF\u95EE "),e("code",{class:"doc-token"},"this"),o("\u3002")])],-1),_=e("ul",null,[e("li",null,"\u7EC4\u4EF6\u63A5\u6536\u5230\u7684\u539F\u59CB prop \u5C06\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u9ED8\u8BA4\u51FD\u6570\uFF1B"),e("li",null,[e("code",{class:"doc-token"},"inject"),o(" API \u53EF\u4EE5\u5728\u9ED8\u8BA4\u51FD\u6570\u4E2D\u4F7F\u7528\u3002")])],-1),h={__name:"props-default",setup(i){const n=[{id:"doc-title",title:"props \u7684 default \u51FD\u6570"}];return(u,m)=>{const c=t("doc-code"),s=t("doc-page");return a(),p(s,{desc:"",toc:n},{default:d(()=>[r,_,l(c,{code:`import { inject } from 'vue'

export default {
  props: {
    theme: {
      default (props) {
        // \`props\` \u662F\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\u3001
        // \u5728\u4EFB\u4F55\u7C7B\u578B/\u9ED8\u8BA4\u5F3A\u5236\u8F6C\u6362\u4E4B\u524D\u7684\u539F\u59CB\u503C\uFF0C
        // \u4E5F\u53EF\u4EE5\u4F7F\u7528 \`inject\` \u6765\u8BBF\u95EE\u6CE8\u5165\u7684 property
        return inject('theme', 'default-theme')
      }
    }
  }
}
`,lang:"js"})]),_:1})}}};export{h as default};
