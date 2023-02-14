import{r as c,o as g,c as l,f as a,aa as t,v as o,g as n}from"./vendor-774b84b8.js";const h=t("h2",{id:"1-git-\u6587\u4EF6\u72B6\u6001",class:"doc-heading"},"git \u6587\u4EF6\u72B6\u6001",-1),_=t("li",null,"\u5DF2\u4FEE\u6539\uFF08modified\uFF09",-1),r=t("li",null,"\u5DF2\u6682\u5B58\uFF08staged\uFF09",-1),u=t("li",null,"\u5DF2\u63D0\u4EA4\uFF08committed\uFF09",-1),m=t("br",null,null,-1),f=t("h2",{id:"2-git-\u5DE5\u4F5C\u533A-\u672C\u5730-",class:"doc-heading"},"git \u5DE5\u4F5C\u533A(\u672C\u5730)",-1),p=t("li",null,"\u5DE5\u4F5C\u76EE\u5F55",-1),b=t("li",null,"\u6682\u5B58\u533A\u57DF",-1),w=t("br",null,null,-1),k=t("h2",{id:"3-\u67E5\u770B\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u72B6\u6001",class:"doc-heading"},"\u67E5\u770B\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u72B6\u6001",-1),x=t("h2",{id:"4-\u4E71\u7801",class:"doc-heading"},"\u4E71\u7801",-1),B=t("h3",{id:"5-git-status-\u663E\u793A\u4E71\u7801",class:"doc-heading"},"git status \u663E\u793A\u4E71\u7801",-1),I=t("h3",{id:"6-\u7EC8\u7AEF\u4E71\u7801",class:"doc-heading"},"\u7EC8\u7AEF\u4E71\u7801",-1),v=t("p",null,[o("\u83DC\u5355 -> \u8BBE\u7F6E -> \u6587\u672C -> \u672C\u5730 / \u7F16\u7801"),t("br"),o(" \u6216\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 .git/config")],-1),N=t("h2",{id:"7-\u5220\u9664\u6587\u4EF6",class:"doc-heading"},"\u5220\u9664\u6587\u4EF6",-1),V=t("h2",{id:"8-\u6BD4\u8F83",class:"doc-heading"},"\u6BD4\u8F83",-1),q=t("h2",{id:"9-\u5206\u652F\u5408\u5E76",class:"doc-heading"},"\u5206\u652F\u5408\u5E76",-1),y=t("h2",{id:"10-\u5220\u9664\u5206\u652F",class:"doc-heading"},"\u5220\u9664\u5206\u652F",-1),A=t("h2",{id:"11-git-\u8FDC\u7A0B",class:"doc-heading"},"git \u8FDC\u7A0B",-1),C=t("p",null,"\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",-1),D=t("p",null,"\u5176\u4ED6\u64CD\u4F5C",-1),G=t("h2",{id:"12-git-work-flow",class:"doc-heading"},"git work flow",-1),E={__name:"\u57FA\u7840",setup(T){const s=[{id:"doc-title",title:"\u57FA\u672C\u6982\u5FF5"},{id:"1-git-\u6587\u4EF6\u72B6\u6001",title:"1. git \u6587\u4EF6\u72B6\u6001"},{id:"2-git-\u5DE5\u4F5C\u533A-\u672C\u5730-",title:"2. git \u5DE5\u4F5C\u533A(\u672C\u5730)"},{id:"3-\u67E5\u770B\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u72B6\u6001",title:"3. \u67E5\u770B\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u72B6\u6001"},{id:"4-\u4E71\u7801",title:"4. \u4E71\u7801"},{id:"5-git-status-\u663E\u793A\u4E71\u7801",title:"4.1. git status \u663E\u793A\u4E71\u7801",sub:!0},{id:"6-\u7EC8\u7AEF\u4E71\u7801",title:"4.2. \u7EC8\u7AEF\u4E71\u7801",sub:!0},{id:"7-\u5220\u9664\u6587\u4EF6",title:"5. \u5220\u9664\u6587\u4EF6"},{id:"8-\u6BD4\u8F83",title:"6. \u6BD4\u8F83"},{id:"9-\u5206\u652F\u5408\u5E76",title:"7. \u5206\u652F\u5408\u5E76"},{id:"10-\u5220\u9664\u5206\u652F",title:"8. \u5220\u9664\u5206\u652F"},{id:"11-git-\u8FDC\u7A0B",title:"9. git \u8FDC\u7A0B"},{id:"12-git-work-flow",title:"10. git work flow"}];return(U,j)=>{const e=c("doc-img"),i=c("doc-code"),d=c("doc-page");return g(),l(d,{desc:"",toc:s},{default:a(()=>[h,t("ul",null,[_,r,u,t("li",null,[o("\u672A\u8FFD\u8E2A\uFF08Untracked\uFF09"),m,n(e,{src:"git-lifecycle.png",alt:"git-lifecycle"})])]),f,t("ul",null,[p,b,t("li",null,[o("Git \u4ED3\u5E93"),w,n(e,{src:"git-areas.png",alt:"git-areas"})])]),k,n(i,{code:`git status
`,lang:"sh"}),x,B,n(i,{code:`git config --global core.quotepath false
`,lang:"sh"}),I,v,n(i,{code:`[gui]
    encoding = utf-8
    # \u4EE3\u7801\u5E93\u7EDF\u4E00\u4F7F\u7528utf-8
[i18n]
    commitencoding = utf-8
    # log\u7F16\u7801
[svn]
    pathnameencoding = utf-8
    # \u652F\u6301\u4E2D\u6587\u8DEF\u5F84
[core]
    quotepath = false
    # status\u5F15\u7528\u8DEF\u5F84\u4E0D\u518D\u662F\u516B\u8FDB\u5236\uFF08\u53CD\u8FC7\u6765\u8BF4\u5C31\u662F\u5141\u8BB8\u663E\u793A\u4E2D\u6587\u4E86\uFF09
`,lang:"config"}),N,n(i,{code:`# \u4ECE git \u4ED3\u5E93\u4E0E\u5DE5\u4F5C\u533A\u4E2D\u5220\u9664\u6307\u5B9A\u6587\u4EF6
git rm \u6587\u4EF6

# \u53EA\u5220\u9664 git \u4ED3\u5E93\u4E2D\u7684\u6587\u4EF6
git rm --cached \u6587\u4EF6

# rm \u4EE5\u540E\uFF0C\u9700\u8981 commit \u8FD9\u6B21\u64CD\u4F5C\uFF0C\u5426\u5219 rm \u5C06\u4FDD\u7559\u5728\u6682\u5B58\u533A
git commit -m \u4FEE\u6B63
`,lang:"sh"}),V,n(i,{code:`# \u6BD4\u8F83 \u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A
git diff \u6587\u4EF6
# \u6BD4\u8F83 \u6682\u5B58\u533A\u548C\u4ED3\u5E93
git diff --cached [commitId] \u6587\u4EF6
# \u6BD4\u8F83 \u5DE5\u4F5C\u533A\u548C\u4ED3\u5E93
git diff commitId filename
# \u6BD4\u8F83 \u4ED3\u5E93\u4E0D\u540C\u7248\u672C
git diff commitId1 commitId2
`,lang:"sh"}),q,n(i,{code:`# B \u5408\u5E76\u5230 A\uFF0C\u9700\u8981\u5207\u6362\u5230 A \u5206\u652F
git merge \u88AB\u5408\u5E76\u5206\u652F

# \u67E5\u770B\u5DF2\u7ECF\u5408\u5E76\u7684\u5206\u652F
git branch --merged
# \u67E5\u770B\u672A\u5408\u5E76\u7684\u5206\u652F
git branch --no-merged
`,lang:"sh"}),y,n(i,{code:`# \u5982\u679C\u5206\u652F\u4E3A\u672A\u5408\u5E76\u72B6\u6001\uFF0C\u5219\u4E0D\u5141\u8BB8\u5220\u9664
git branch -d \u5206\u652F\u540D\u79F0
# \u5F3A\u5236\u5220\u9664
git branch -D \u5206\u652F\u540D\u79F0
`,lang:"sh"}),A,C,n(i,{code:`git remote add origin git@github.com:***.git
`,lang:"sh"}),D,n(i,{code:`# \u63D0\u4EA4\u5230\u8FDC\u7A0B\uFF08\u5206\u652F\uFF09
git push origin [\u672C\u5730\u5206\u652F\u540D\u79F0]:[\u8FDC\u7A0B\u5206\u652F\u540D\u79F0]

# \u8FDC\u7A0B\u5148\u521B\u5EFA\u597D\u5206\u652F\u7136\u540E\u62C9\u53D6\u5230\u672C\u5730
git checkout -b [\u672C\u5730\u5206\u652F\u540D\u79F0] origin/[\u8FDC\u7A0B\u5206\u652F\u540D\u79F0]

# \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730
git pull origin [\u8FDC\u7A0B\u5206\u652F\u540D\u79F0]:[\u672C\u5730\u5206\u652F\u540D\u79F0]

# \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93
git remote show origin

# \u67E5\u770B\u672C\u5730\u5206\u652F
git branch

# \u67E5\u770B\u8FDC\u7A0B\u5206\u652F
git branch -r

# \u67E5\u770B\u6240\u6709\u5206\u652F
git branch -a

# \u5220\u9664\u672C\u5730\u5206\u652F
git branch -d [\u672C\u5730\u5206\u652F\u540D\u79F0]

# \u5220\u9664\u8FDC\u7A0B\u5206\u652F
git push origin --delete [\u8FDC\u7A0B\u5206\u652F\u540D\u79F0]
# or
git push origin :[\u8FDC\u7A0B\u5206\u652F\u540D\u79F0]

# \u8BBE\u7F6E\u9ED8\u8BA4\u63D0\u4EA4\u5206\u652F
git branch --set-upstream-to=origin/[\u8FDC\u7A0B\u5206\u652F\u540D\u79F0] [\u672C\u5730\u5206\u652F\u540D\u79F0]
`,lang:"sh"}),G,t("p",null,[n(e,{src:"git-flow.png",alt:"git-flow"})])]),_:1})}}};export{E as default};
