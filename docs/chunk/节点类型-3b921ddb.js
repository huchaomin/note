import{r as e,o as i,c as r,f as o,g as n,a8 as t,v as l}from"./vendor-5a734afa.js";const _=t("h2",{id:"1-\u4E00\u89C8",class:"doc-heading"},"\u4E00\u89C8",-1),m=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"\u7C7B\u578B"),t("th",{class:"text-left"},"\u503C"),t("th",{class:"text-left"},"\u63CF\u8FF0")])],-1),p=t("tbody",null,[t("tr",null,[t("td",null,"Element"),t("td",null,"1"),t("td",null,[l("\u5143\u7D20\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"<p>"),l(" \u548C "),t("code",{class:"doc-token"},"<div>")])]),t("tr",null,[t("td",null,"Attr"),t("td",null,"2"),t("td",null,[l("\u5C5E\u6027\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"class"),l(" \u548C "),t("code",{class:"doc-token"},"href")])]),t("tr",null,[t("td",null,"Text"),t("td",null,"3"),t("td",null,[l("\u6587\u672C\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"Hello World")])]),t("tr",null,[t("td",null,"Comment"),t("td",null,"8"),t("td",null,[l("\u6CE8\u91CA\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"<!-- \u6CE8\u91CA -->")])]),t("tr",null,[t("td",null,"Document"),t("td",null,"9"),t("td",null,[l("\u6587\u6863\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"<html>")])]),t("tr",null,[t("td",null,"DocumentType"),t("td",null,"10"),t("td",null,[l("\u6587\u6863\u7C7B\u578B\u8282\u70B9\uFF0C\u5982 "),t("code",{class:"doc-token"},"<!DOCTYPE html>")])]),t("tr",null,[t("td",null,"DocumentFragment"),t("td",null,"11"),t("td",null,"\u6587\u6863\u7247\u6BB5\u8282\u70B9")])],-1),h=t("h2",{id:"2-\u4F8B",class:"doc-heading"},"\u4F8B",-1),x={__name:"\u8282\u70B9\u7C7B\u578B",setup(g){const d=[{id:"doc-title",title:"\u8282\u70B9\u7C7B\u578B"},{id:"1-\u4E00\u89C8",title:"1. \u4E00\u89C8"},{id:"2-\u4F8B",title:"2. \u4F8B"}];return(f,v)=>{const c=e("q-markup-table"),s=e("c-scroll-area"),a=e("doc-code"),u=e("doc-page");return i(),r(u,{desc:"",toc:d},{default:o(()=>[_,n(s,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:o(()=>[n(c,{flat:"",bordered:"",dense:""},{default:o(()=>[m,p]),_:1})]),_:1}),h,n(a,{code:`<div id="div1"></div>
<script type="text/javascript">
  const div1 = document.getElementById("div1");
  console.log(div1.nodeType); // 1
  console.log(div1.nodeName); // DIV

  const id = div1.getAttributeNode("id"); //\u83B7\u5F97div1\u7684\u5C5E\u6027\u7ED3\u70B9id
  console.log(id.nodeType); // 2
  console.log(id.nodeName); // id
<\/script>
`,lang:"html"})]),_:1})}}};export{x as default};
