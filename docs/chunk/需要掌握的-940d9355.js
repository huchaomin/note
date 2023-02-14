import{r as n,o as h,c as l,f as o,g as e,aa as t,v as s}from"./vendor-774b84b8.js";const g=t("h2",{id:"1-head",class:"doc-heading"},"HEAD",-1),r=t("p",null,[s("\u5728Git\u4E2D\uFF0C\u7528"),t("code",{class:"doc-token"},"HEAD"),s("\u8868\u793A\u5F53\u524D\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F"),t("code",{class:"doc-token"},"HEAD^"),s("\uFF0C\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F"),t("code",{class:"doc-token"},"HEAD^^"),s("\uFF0C\u5F53\u7136\u5F80\u4E0A100\u4E2A\u7248\u672C\u5199100\u4E2A"),t("code",{class:"doc-token"},"^"),s("\u6BD4\u8F83\u5BB9\u6613\u6570\u4E0D\u8FC7\u6765\uFF0C\u6240\u4EE5\u5199\u6210"),t("code",{class:"doc-token"},"HEAD~100")],-1),_=t("h2",{id:"2-\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",class:"doc-heading"},"\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",-1),u=t("h2",{id:"3-git-reset",class:"doc-heading"},"git reset",-1),m=t("p",null,"\u56DE\u9000\u7248\u672C",-1),b=t("h2",{id:"4-git-checkout",class:"doc-heading"},"git checkout",-1),p=t("p",null,[s("\u64A4\u56DE\u5E76\u8986\u76D6\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF08\u56DE\u5230\u6700\u8FD1\u4E00\u6B21"),t("code",{class:"doc-token"},"git commit"),s("\u6216"),t("code",{class:"doc-token"},"git add"),s("\u65F6\u7684\u72B6\u6001\uFF09")],-1),k=t("p",null,"\u5207\u6362\u5206\u652F\uFF08\u4E0D\u52A0\u2013\uFF09",-1),f=t("h2",{id:"5-\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4-\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4-",class:"doc-heading"},"\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4(\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4)",-1),v=t("h2",{id:"6-\u8FDC\u7A0B",class:"doc-heading"},"\u8FDC\u7A0B",-1),x=t("h3",{id:"7-\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",class:"doc-heading"},"\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",-1),y=t("h3",{id:"8-\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",-1),A=t("h3",{id:"9-\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",-1),D=t("h3",{id:"10-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",-1),E=t("h3",{id:"11-\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",-1),H=t("h3",{id:"12-\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",-1),w=t("h3",{id:"13-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",-1),B=t("h3",{id:"14-\u5220\u9664\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u5220\u9664\u8FDC\u7A0B\u5206\u652F",-1),j=t("h3",{id:"15-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",-1),N=t("h3",{id:"16-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",-1),U=t("h3",{id:"17-\u5173\u8054\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u5173\u8054\u8FDC\u7A0B\u5206\u652F",-1),V=t("p",null,[s("\u5173\u8054\u4E4B\u540E\uFF0C git branch -vv \uFF08\u5C55\u793A\u672C\u5730\u5206\u652F\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93\u7684\u60C5\u51B5\uFF09\u5C31\u53EF\u4EE5\u5C55\u793A\u5173\u8054\u7684\u8FDC\u7A0B\u5206\u652F\u540D\u4E86\uFF0C"),t("br"),s(" \u540C\u65F6\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u76F4\u63A5\uFF1A git push \uFF0C\u4E0D\u9700\u8981\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u4E86")],-1),C=t("h2",{id:"18-\u5207\u56DE\u5230\u67D0\u4E2A\u6807\u7B7E",class:"doc-heading"},"\u5207\u56DE\u5230\u67D0\u4E2A\u6807\u7B7E",-1),G=t("p",null,[s("\u4E00\u822C\u4E0A\u7EBF\u4E4B\u524D\u90FD\u4F1A\u6253 tag\uFF0C\u5C31\u662F\u4E3A\u4E86\u9632\u6B62\u4E0A\u7EBF\u540E\u51FA\u73B0\u95EE\u9898\uFF0C\u65B9\u4FBF\u5FEB\u901F\u56DE\u9000\u5230\u4E0A\u4E00\u7248\u672C\u3002"),t("br"),s(" \u4E0B\u9762\u7684\u547D\u4EE4\u662F\u56DE \u5230\u67D0\u4E00\u6807\u7B7E\u4E0B\u7684\u72B6\u6001\uFF1A")],-1),z=t("h2",{id:"19-git-revert",class:"doc-heading"},"git revert",-1),T=t("p",null,[s("\u4EE5\u65B0\u589E\u4E00\u4E2A commit \u7684\u65B9\u5F0F\u8FD8\u539F\u67D0\u4E00\u4E2A commit \u7684\u4FEE\u6539\uFF0C\u8FD8\u539F\u5230\u6682\u5B58\u533A"),t("br"),s(" \u4FEE\u6539\u4E4B\u524D\u5FC5\u987B\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u5E72\u51C0")],-1),Y=t("h2",{id:"20-git-restore",class:"doc-heading"},"git restore",-1),q=t("h2",{id:"21-cherry-pick",class:"doc-heading"},"cherry-pick",-1),F=t("p",null,"\u628A A \u5206\u652F\u7684\u67D0\u4E00\u4E2A commit\uFF0C\u653E\u5230 B \u5206\u652F\u4E0A",-1),I=t("h2",{id:"22-stash",class:"doc-heading"},"stash",-1),J=t("h2",{id:"23-git-rebase",class:"doc-heading"},"git rebase",-1),K=t("p",null,"\u53D8\u57FA\uFF0C\u4F7Fgit\u63D0\u4EA4\u7EAA\u5F55\u6210\u4E00\u6761\u76F4\u7EBF",-1),L=t("p",null,[s("\u6267\u884C git pull --rebase \u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0"),t("br"),s(" \u5373\uFF1A\u4E0D\u80FD\u5B58\u5728\u72B6\u6001\u4E3A modified \u7684\u6587\u4EF6\u3002\uFF08\u5B58\u5728Untracked files\u662F\u6CA1\u5173\u7CFB\u7684\uFF09")],-1),M=t("br",null,null,-1),O=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"\u53D8\u57FA vs. \u5408\u5E76"),t("p",null,"\u603B\u7684\u539F\u5219\u662F\uFF0C\u53EA\u5BF9\u5C1A\u672A\u63A8\u9001\u6216\u5206\u4EAB\u7ED9\u522B\u4EBA\u7684\u672C\u5730\u4FEE\u6539\u6267\u884C\u53D8\u57FA\u64CD\u4F5C\u6E05\u7406\u5386\u53F2\uFF0C \u4ECE\u4E0D\u5BF9\u5DF2\u63A8\u9001\u81F3\u522B\u5904\u7684\u63D0\u4EA4\u6267\u884C\u53D8\u57FA\u64CD\u4F5C\uFF0C\u8FD9\u6837\uFF0C\u4F60\u624D\u80FD\u4EAB\u53D7\u5230\u4E24\u79CD\u65B9\u5F0F\u5E26\u6765\u7684\u4FBF\u5229\u3002")],-1),P=t("h2",{id:"24-\u53D6\u6D88merge",class:"doc-heading"},"\u53D6\u6D88merge",-1),Q=t("h2",{id:"25-\u5F3A\u5236\u63A8\u9001",class:"doc-heading"},"\u5F3A\u5236\u63A8\u9001",-1),R=t("h2",{id:"26-\u65E5\u5FD7",class:"doc-heading"},"\u65E5\u5FD7",-1),$={__name:"\u9700\u8981\u638C\u63E1\u7684",setup(S){const d=[{id:"doc-title",title:"\u9700\u8981\u638C\u63E1\u7684\u7528\u6CD5"},{id:"1-head",title:"1. HEAD"},{id:"2-\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",title:"2. \u914D\u7F6E\u59D3\u540D\u90AE\u7BB1"},{id:"3-git-reset",title:"3. git reset"},{id:"4-git-checkout",title:"4. git checkout"},{id:"5-\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4-\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4-",title:"5. \u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4(\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4)"},{id:"6-\u8FDC\u7A0B",title:"6. \u8FDC\u7A0B"},{id:"7-\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",title:"6.1. \u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",sub:!0},{id:"8-\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",title:"6.2. \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"9-\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",title:"6.3. \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"10-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",title:"6.4. \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"11-\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",title:"6.5. \u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"12-\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",title:"6.6. \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"13-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",title:"6.7. \u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"14-\u5220\u9664\u8FDC\u7A0B\u5206\u652F",title:"6.8. \u5220\u9664\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"15-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",title:"6.9. \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"16-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",title:"6.10. \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",sub:!0},{id:"17-\u5173\u8054\u8FDC\u7A0B\u5206\u652F",title:"6.11. \u5173\u8054\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"18-\u5207\u56DE\u5230\u67D0\u4E2A\u6807\u7B7E",title:"7. \u5207\u56DE\u5230\u67D0\u4E2A\u6807\u7B7E"},{id:"19-git-revert",title:"8. git revert"},{id:"20-git-restore",title:"9. git restore"},{id:"21-cherry-pick",title:"10. cherry-pick"},{id:"22-stash",title:"11. stash"},{id:"23-git-rebase",title:"12. git rebase"},{id:"24-\u53D6\u6D88merge",title:"13. \u53D6\u6D88merge"},{id:"25-\u5F3A\u5236\u63A8\u9001",title:"14. \u5F3A\u5236\u63A8\u9001"},{id:"26-\u65E5\u5FD7",title:"15. \u65E5\u5FD7"}];return(W,X)=>{const i=n("doc-code"),c=n("doc-link"),a=n("doc-page");return h(),l(a,{desc:"",toc:d},{default:o(()=>[g,r,_,e(i,{code:`git config user.name "\u4F60\u7684\u59D3\u540D"
git config user.email "\u4F60\u7684\u90AE\u7BB1"
// \u5168\u5C40
git config --global user.name "\u4F60\u7684\u59D3\u540D"
git config --global user.email "\u4F60\u7684\u90AE\u7BB1"
`,lang:"sh"}),u,m,e(i,{code:`#\u9ED8\u8BA4\u5C31\u662F-mixed\u53C2\u6570\u3002
git reset <commit-id>

#\u56DE\u9000\u81F3\u4E0A\u4E2A\u7248\u672C\uFF0C\u8868\u793A\u5C06\u672C\u5730\u7248\u672C\u5E93\u7684\u5934\u6307\u9488\u5168\u90E8\u91CD\u7F6E\u5230\u4E0A\u4E2A\u7248\u672C\uFF0C
#\u4E14\u5C06\u8FD9\u6B21\u63D0\u4EA4\u4E4B\u540E\u7684\u6240\u6709\u53D8\u66F4\u90FD\u79FB\u52A8\u5230\u5DE5\u4F5C\u533A(\u4E4B\u524D\u6682\u5B58\u533A\u4E22\u5931\u548C\u5DE5\u4F5C\u533A\u8FD8\u7EE7\u7EED\u5B58\u5728)
#\u5DE5\u4F5C\u533A\u5DF2\u7ECF\u6709\u51B2\u7A81\u7684\u6587\u4EF6\uFF0C\u5219\u4EE5\u5DE5\u4F5C\u533A\u7684\u4E3A\u51C6\uFF0C\u53D8\u66F4\u7684\u5C06\u4E22\u5931
git reset --mixed HEAD^

#\u56DE\u9000\u81F3\u4E09\u4E2A\u7248\u672C\u4E4B\u524D\uFF0C\u8868\u793A\u5C06\u672C\u5730\u7248\u672C\u5E93\u7684\u5934\u6307\u9488\u5168\u90E8\u91CD\u7F6E\u5230\u4E09\u4E2A\u7248\u672C\u4E4B\u524D\uFF0C
#\u4E14\u5C06\u8FD9\u6B21\u63D0\u4EA4\u4E4B\u540E\u7684\u6240\u6709\u53D8\u66F4\u90FD\u79FB\u52A8\u5230\u6682\u5B58\u533A(\u4E4B\u524D\u6682\u5B58\u548C\u5DE5\u4F5C\u533A\u8FD8\u7EE7\u7EED\u5B58\u5728)
#\u6682\u5B58\u533A\u5DF2\u7ECF\u6709\u51B2\u7A81\u7684\u6587\u4EF6\uFF0C\u5219\u4EE5\u6682\u5B58\u7684\u4E3A\u51C6\uFF0C\u53D8\u66F4\u7684\u5C06\u4E22\u5931
git reset --soft HEAD~3

#\u5F7B\u5E95\u56DE\u9000\u5230\u6307\u5B9Acommit-id\u7684\u72B6\u6001\uFF0C\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E5F\u4F1A\u53D8\u4E3A\u6307\u5B9Acommit-id\u7248\u672C\u7684\u5185\u5BB9,Untracked files\u8FD8\u7EE7\u7EED\u5B58\u5728
#\u5982\u679Creset\u5230\u5DF2\u7ECFpush\u7684\u7248\u672C\uFF0C\u6B64\u65F6\u5982\u679Cpull,\u4F1A\u5C06\u672C\u5730\u4ED3\u5E93\u540C\u6B65\u540C\u6B65\u6210\u8FDC\u7A0B\uFF0C
#       \u6B64\u65F6\u5982\u679Cpush -f,\u4F1A\u5C06\u8FDC\u7A0B\u540C\u6B65\u6210\u672C\u5730
#       \u6B64\u65F6\u5982\u679Cpush 'Updates were rejected ... current branch is behind'
git reset --hard <commit-id>
`,lang:"sh"}),b,p,e(i,{code:`# \u4ECE(\u672C/\u8FDC)\u4ED3\u5E93\u53D6\u51FAtest.txt\u66FF\u6362\u5230\u5DE5\u4F5C\u533A\uFF0C\u5E76\u5220\u9664\u6682\u5B58\u533A\u7684test.txt
git checkout <commit-id> -- test.txt
# \u4ECE\u6682\u5B58\u533A\u53D6\u51FAtest.txt\u66FF\u6362\u5230\u5DE5\u4F5C\u533A\uFF08\u5982\u679C\u6682\u5B58\u533A\u6CA1\u6709\u5C31\u4ECE(\u672C/\u8FDC)\u4ED3\u5E93\u53D6\uFF0C\u5C31\u540C\u4E0A\uFF09
git checkout \u2013- test.txt
`,lang:"sh"}),k,e(i,{code:`git checkout <branch-name>
`,lang:"sh"}),f,e(i,{code:`git commit --amend --allow-empty -m \u63D0\u4EA4\u8BED\u53E5
`,lang:"markup"}),v,x,e(i,{code:`git remote set-url origin <url>
`,lang:"sh"}),y,e(i,{code:`git remote add origin <url>
`,lang:"sh"}),A,e(i,{code:`git remote -v
`,lang:"sh"}),D,e(i,{code:`git remote rm origin
`,lang:"sh"}),E,e(i,{code:`git remote rename origin <new-name>
`,lang:"sh"}),H,e(i,{code:`git pull origin <branch-name>
`,lang:"sh"}),w,e(i,{code:`git push origin <branch-name>
`,lang:"sh"}),B,e(i,{code:`git push origin --delete <branch-name>
`,lang:"sh"}),j,e(i,{code:`git checkout -b <branch-name> origin/<branch-name>
`,lang:"sh"}),N,e(i,{code:`git checkout -b <branch-name> origin/<branch-name>
git branch -u origin/<branch-name>
`,lang:"sh"}),U,e(i,{code:`git branch -u origin/mybranch
// \u6216
git push origin/mybranch -u
`,lang:"sh"}),V,C,G,e(i,{code:`git checkout -b branch_name tag_name
`,lang:"sh"}),z,T,e(i,{code:`git revert <commit-id>
git revert --abort // \u53D6\u6D88revert
`,lang:"sh"}),Y,e(i,{code:`#\u4ECE\u672C\u5730\u4ED3\u5E93\u53D6\u51FA\u6587\u4EF6\u8986\u76D6\u5DE5\u4F5C\u533A
git restore 3.txt
#\u4ECE\u6682\u5B58\u533A\u53D6\u51FA\u6587\u4EF6\u4E0D\u8986\u76D6\u5DE5\u4F5C\u533A
git restore --staged 3.txt
`,lang:"sh"}),q,F,e(i,{code:`git checkout <branchB-name> && git cherry-pick <commit-id-from-B>
`,lang:"sh"}),I,e(i,{code:`git stash // \u5B58\u50A8\u6240\u6709\u7684\u6587\u4EF6
git stash -u //  \u5B58\u50A8\u6240\u6709\u7684\u6587\u4EF6\u5305\u62EC\u672A\u8DDF\u8E2A\u7684
git stash list // \u5C55\u793A\u6240\u6709\u7684stashes
git stash apply <stash@{n}> // \u56DE\u5230\u67D0\u4E2A stash \u7684\u72B6\u6001
git stash clear // \u5220\u9664\u6240\u6709\u7684stash
`,lang:"sh"}),J,K,e(i,{code:`git pull --rebase
# \u5982\u679C\u6709\u51B2\u7A81\u5148\u89E3\u51B3\u51B2\u7A81\uFF08\u53EF\u80FD\u8981\u89E3\u51B3\u591A\u6B21\uFF09\uFF0C\u7136\u540Egit add\u63D0\u4EA4\uFF0C\u4E0D\u7528commit
# \u7B49\u4EF7\u4E8E git fetch --all && git rebase branch
git rebase --continue
# \u5982\u679C\u4E0D\u60F3\u89E3\u51B3\u51B2\u7A81\u7684\u65F6\u5019\u4E0D\u60F3\u7EE7\u7EEDrebase
git rebase --abort
`,lang:"sh"}),L,e(i,{code:`git pull --rebase

# \u7ED3\u679C\u5982\u4E0B
error: cannot pull with rebase: You have unstaged changes.
error: please commit or stash them.
`,lang:"sh"}),t("p",null,[e(c,{to:"https://juejin.cn/post/6844903895160881166"},{default:o(()=>[s("\u53C2\u8003\u6587\u732E")]),_:1}),M,e(c,{to:"https://git-scm.com/book/zh/v2/Git-\u5206\u652F-\u53D8\u57FA"},{default:o(()=>[s("\u53C2\u8003\u6587\u732E")]),_:1})]),O,P,e(i,{code:`git merge --abort
`,lang:"sh"}),Q,e(i,{code:`git push -f <remote-name> <branch-name>
`,lang:"sh"}),R,e(i,{code:`git log --pretty=oneline // \u7B80\u77ED\u7248\u672C\u7684\u65E5\u5FD7
git reflog // \u5305\u62EC\u66F4\u6539\u4E86HEAD\u7684\u65E5\u5FD7
`,lang:"sh"})]),_:1})}}};export{$ as default};
