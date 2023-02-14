import{r as t,o as i,c,f as r,g as n,aa as e}from"./vendor-774b84b8.js";const d=e("h2",{id:"1-autolinker-\u548C-line-numbers",class:"doc-heading"},"autolinker \u548C line-numbers",-1),u=e("h2",{id:"2-inline-color-\u548C-previewers",class:"doc-heading"},"inline-color \u548C previewers",-1),m=e("h2",{id:"3-treeview",class:"doc-heading"},"treeview",-1),h=e("h2",{id:"4-markdown-it-task-lists",class:"doc-heading"},"markdown-it-task-lists",-1),p={class:"contains-task-list"},_=e("h2",{id:"5-match-braces-\u548C-rainbow-braces",class:"doc-heading"},"match-braces \u548C rainbow-braces",-1),k={__name:"markdown",setup(b){const o=[{id:"doc-title",title:"\u672C\u535A\u5BA2\u7684\u4E00\u4E9B\u529F\u80FD\u5C55\u793A\u548C\u6613\u5FD8\u8BB0\u7684 markdown \u8BED\u6CD5"},{id:"1-autolinker-\u548C-line-numbers",title:"1. autolinker \u548C line-numbers"},{id:"2-inline-color-\u548C-previewers",title:"2. inline-color \u548C previewers"},{id:"3-treeview",title:"3. treeview"},{id:"4-markdown-it-task-lists",title:"4. markdown-it-task-lists"},{id:"5-match-braces-\u548C-rainbow-braces",title:"5. match-braces \u548C rainbow-braces"}];return(w,g)=>{const a=t("doc-code"),l=t("q-checkbox"),s=t("doc-page");return i(),c(s,{desc:"",toc:o},{default:r(()=>[d,n(a,{code:`// [Text you want to see](http://url-goes-here.com)

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 * Reach Lea at fake@email.com (no, not really)
 * And this is a Markdown link. Sweet, huh?
 */
var foo = 5;
// And a single line comment http://google.com
`,lang:"javascript"}),u,n(a,{code:`.a{
  color: red;
}
.example-angle {
  transform: rotate(10deg);
}
`,lang:"css"}),m,n(a,{code:`\u251C\u2500\u2500 a first folder/
|   \u251C\u2500\u2500 holidays.mov
|   \u251C\u2500\u2500 javascript-file.js
|   \u2514\u2500\u2500 some_picture.jpg
\u251C\u2500\u2500 documents/
|   \u251C\u2500\u2500 spreadsheet.xls
|   \u251C\u2500\u2500 manual.pdf
|   \u251C\u2500\u2500 document.docx
|   \u2514\u2500\u2500 presentation.ppt
\u2514\u2500\u2500 etc.
`,lang:"treeview"}),h,e("ul",p,[e("li",null,[n(l,{"model-value":!1,label:" Mercury"})]),e("li",null,[n(l,{"model-value":!0,label:" Venus"})]),e("li",null,[n(l,{"model-value":!0,label:" Earth"})]),e("li",null,[n(l,{"model-value":!0,label:" Mars"})]),e("li",null,[n(l,{"model-value":!1,label:" Jupiter"})]),e("li",null,[n(l,{"model-value":!1,label:" Uranus"})]),e("li",null,[n(l,{"model-value":!1,label:" Neptune"})]),e("li",null,[n(l,{"model-value":!1,label:" Comet Haley"})])]),_,n(a,{code:`(defun factorial (n)
 (if (= n 0) 1
  (* n (factorial (- n 1)))))
`,lang:"js"})]),_:1})}}};export{k as default};
