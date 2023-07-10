import{n as s,o as n,p as h,w as o,a as t,i as u,f as i}from"./vendor-a2411ed8.js";const E=u("h2",{id:"1-head",class:"doc-heading"},"HEAD",-1),g=u("p",null,[i("\u5728Git\u4E2D\uFF0C\u7528"),u("code",{class:"doc-token"},"HEAD"),i("\u8868\u793A\u5F53\u524D\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F"),u("code",{class:"doc-token"},"HEAD^"),i("\uFF0C\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F"),u("code",{class:"doc-token"},"HEAD^^"),i("\uFF0C\u5F53\u7136\u5F80\u4E0A100\u4E2A\u7248\u672C\u5199100\u4E2A"),u("code",{class:"doc-token"},"^"),i("\u6BD4\u8F83\u5BB9\u6613\u6570\u4E0D\u8FC7\u6765\uFF0C\u6240\u4EE5\u5199\u6210"),u("code",{class:"doc-token"},"HEAD~100")],-1),A=u("h2",{id:"2-\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",class:"doc-heading"},"\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",-1),l=u("h2",{id:"3-git-reset",class:"doc-heading"},"git reset",-1),r=u("p",null,"\u56DE\u9000\u7248\u672C",-1),F=u("h2",{id:"4-git-checkout",class:"doc-heading"},"git checkout",-1),C=u("p",null,[i("\u64A4\u56DE\u5E76\u8986\u76D6\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF08\u56DE\u5230\u6700\u8FD1\u4E00\u6B21"),u("code",{class:"doc-token"},"git commit"),i("\u6216"),u("code",{class:"doc-token"},"git add"),i("\u65F6\u7684\u72B6\u6001\uFF09")],-1),_=u("p",null,"\u5207\u6362\u5206\u652F\uFF08\u4E0D\u52A0\u2013\uFF09",-1),D=u("h2",{id:"5-\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4-\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4-",class:"doc-heading"},"\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4(\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4)",-1),m=u("h2",{id:"6-\u8FDC\u7A0B",class:"doc-heading"},"\u8FDC\u7A0B",-1),B=u("h3",{id:"7-\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",class:"doc-heading"},"\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",-1),b=u("h3",{id:"8-\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",-1),p=u("h3",{id:"9-\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",-1),k=u("h3",{id:"10-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",-1),f=u("h3",{id:"11-\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",-1),v=u("h3",{id:"12-\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",-1),x=u("h3",{id:"13-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",class:"doc-heading"},"\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",-1),y=u("h3",{id:"14-\u5220\u9664\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u5220\u9664\u8FDC\u7A0B\u5206\u652F",-1),H=u("h3",{id:"15-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",-1),w=u("h3",{id:"16-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",class:"doc-heading"},"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",-1),j=u("h3",{id:"17-\u5173\u8054\u8FDC\u7A0B\u5206\u652F",class:"doc-heading"},"\u5173\u8054\u8FDC\u7A0B\u5206\u652F",-1),N=u("p",null,[i("\u5173\u8054\u4E4B\u540E\uFF0C git branch -vv \uFF08\u5C55\u793A\u672C\u5730\u5206\u652F\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93\u7684\u60C5\u51B5\uFF09\u5C31\u53EF\u4EE5\u5C55\u793A\u5173\u8054\u7684\u8FDC\u7A0B\u5206\u652F\u540D\u4E86\uFF0C"),u("br"),i(" \u540C\u65F6\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u76F4\u63A5\uFF1A git push \uFF0C\u4E0D\u9700\u8981\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u4E86")],-1),U=u("h3",{id:"18-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F-\u4FEE\u526A\u8FDC\u7A0B\u5206\u652F-",class:"doc-heading"},"\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F(\u4FEE\u526A\u8FDC\u7A0B\u5206\u652F)",-1),V=u("h2",{id:"19-git-revert",class:"doc-heading"},"git revert",-1),G=u("p",null,[i("\u4EE5\u65B0\u589E\u4E00\u4E2A commit \u7684\u65B9\u5F0F\u8FD8\u539F\u67D0\u4E00\u4E2A commit \u7684\u4FEE\u6539\uFF0C\u8FD8\u539F\u5230\u6682\u5B58\u533A"),u("br"),i(" \u4FEE\u6539\u4E4B\u524D\u5FC5\u987B\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u5E72\u51C0")],-1),z=u("h2",{id:"20-git-restore",class:"doc-heading"},"git restore",-1),T=u("h2",{id:"21-cherry-pick",class:"doc-heading"},"cherry-pick",-1),Y=u("p",null,"\u628A A \u5206\u652F\u7684\u67D0\u4E00\u4E2A commit\uFF0C\u653E\u5230 B \u5206\u652F\u4E0A",-1),q=u("h2",{id:"22-stash",class:"doc-heading"},"stash",-1),I=u("h2",{id:"23-git-rebase",class:"doc-heading"},"git rebase",-1),J=u("p",null,"\u53D8\u57FA\uFF0C\u4F7Fgit\u63D0\u4EA4\u7EAA\u5F55\u6210\u4E00\u6761\u76F4\u7EBF",-1),K=u("p",null,[i("\u6267\u884C git pull --rebase \u7684\u65F6\u5019\u5FC5\u987B\u4FDD\u6301\u672C\u5730\u76EE\u5F55\u5E72\u51C0"),u("br"),i(" \u5373\uFF1A\u4E0D\u80FD\u5B58\u5728\u72B6\u6001\u4E3A modified \u7684\u6587\u4EF6\u3002\uFF08\u5B58\u5728Untracked files\u662F\u6CA1\u5173\u7CFB\u7684\uFF09")],-1),L=u("br",null,null,-1),M=u("div",{class:"doc-note doc-note--warning"},[u("p",{class:"doc-note__title"},"\u53D8\u57FA vs. \u5408\u5E76"),u("p",null,"\u603B\u7684\u539F\u5219\u662F\uFF0C\u53EA\u5BF9\u5C1A\u672A\u63A8\u9001\u6216\u5206\u4EAB\u7ED9\u522B\u4EBA\u7684\u672C\u5730\u4FEE\u6539\u6267\u884C\u53D8\u57FA\u64CD\u4F5C\u6E05\u7406\u5386\u53F2\uFF0C \u4ECE\u4E0D\u5BF9\u5DF2\u63A8\u9001\u81F3\u522B\u5904\u7684\u63D0\u4EA4\u6267\u884C\u53D8\u57FA\u64CD\u4F5C\uFF0C\u8FD9\u6837\uFF0C\u4F60\u624D\u80FD\u4EAB\u53D7\u5230\u4E24\u79CD\u65B9\u5F0F\u5E26\u6765\u7684\u4FBF\u5229\u3002")],-1),O=u("h2",{id:"24-\u53D6\u6D88merge",class:"doc-heading"},"\u53D6\u6D88merge",-1),P=u("h2",{id:"25-\u5F3A\u5236\u63A8\u9001",class:"doc-heading"},"\u5F3A\u5236\u63A8\u9001",-1),Q=u("h2",{id:"26-\u65E5\u5FD7",class:"doc-heading"},"\u65E5\u5FD7",-1),R=u("h2",{id:"27-tag",class:"doc-heading"},"tag",-1),$={__name:"\u9700\u8981\u638C\u63E1\u7684",setup(S){const d=[{id:"doc-title",title:"\u9700\u8981\u638C\u63E1\u7684\u7528\u6CD5"},{id:"1-head",title:"1. HEAD"},{id:"2-\u914D\u7F6E\u59D3\u540D\u90AE\u7BB1",title:"2. \u914D\u7F6E\u59D3\u540D\u90AE\u7BB1"},{id:"3-git-reset",title:"3. git reset"},{id:"4-git-checkout",title:"4. git checkout"},{id:"5-\u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4-\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4-",title:"5. \u66FF\u6362\u4E0A\u4E00\u6B21\u63D0\u4EA4(\u4E0D\u7BA1\u662F\u5426\u63D0\u4EA4)"},{id:"6-\u8FDC\u7A0B",title:"6. \u8FDC\u7A0B"},{id:"7-\u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",title:"6.1. \u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",sub:!0},{id:"8-\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",title:"6.2. \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"9-\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",title:"6.3. \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"10-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",title:"6.4. \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"11-\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",title:"6.5. \u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"12-\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",title:"6.6. \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"13-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",title:"6.7. \u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93",sub:!0},{id:"14-\u5220\u9664\u8FDC\u7A0B\u5206\u652F",title:"6.8. \u5220\u9664\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"15-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",title:"6.9. \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"16-\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",title:"6.10. \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5173\u8054",sub:!0},{id:"17-\u5173\u8054\u8FDC\u7A0B\u5206\u652F",title:"6.11. \u5173\u8054\u8FDC\u7A0B\u5206\u652F",sub:!0},{id:"18-\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F-\u4FEE\u526A\u8FDC\u7A0B\u5206\u652F-",title:"6.12. \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F(\u4FEE\u526A\u8FDC\u7A0B\u5206\u652F)",sub:!0},{id:"19-git-revert",title:"7. git revert"},{id:"20-git-restore",title:"8. git restore"},{id:"21-cherry-pick",title:"9. cherry-pick"},{id:"22-stash",title:"10. stash"},{id:"23-git-rebase",title:"11. git rebase"},{id:"24-\u53D6\u6D88merge",title:"12. \u53D6\u6D88merge"},{id:"25-\u5F3A\u5236\u63A8\u9001",title:"13. \u5F3A\u5236\u63A8\u9001"},{id:"26-\u65E5\u5FD7",title:"14. \u65E5\u5FD7"},{id:"27-tag",title:"15. tag"}];return(W,X)=>{const e=s("doc-code"),c=s("doc-link"),a=s("doc-page");return n(),h(a,{desc:"",toc:d},{default:o(()=>[E,g,A,t(e,{code:"git%20config%20user.name%20%22%u4F60%u7684%u59D3%u540D%22%0Agit%20config%20user.email%20%22%u4F60%u7684%u90AE%u7BB1%22%0A//%20%u5168%u5C40%0Agit%20config%20--global%20user.name%20%22%u4F60%u7684%u59D3%u540D%22%0Agit%20config%20--global%20user.email%20%22%u4F60%u7684%u90AE%u7BB1%22%0A",lang:"sh"}),l,r,t(e,{code:"%23%u9ED8%u8BA4%u5C31%u662F-mixed%u53C2%u6570%u3002%0Agit%20reset%20%3Ccommit-id%3E%0A%0A%23%u56DE%u9000%u81F3%u4E0A%u4E2A%u7248%u672C%uFF0C%u8868%u793A%u5C06%u672C%u5730%u7248%u672C%u5E93%u7684%u5934%u6307%u9488%u5168%u90E8%u91CD%u7F6E%u5230%u4E0A%u4E2A%u7248%u672C%uFF0C%0A%23%u4E14%u5C06%u8FD9%u6B21%u63D0%u4EA4%u4E4B%u540E%u7684%u6240%u6709%u53D8%u66F4%u90FD%u79FB%u52A8%u5230%u5DE5%u4F5C%u533A%28%u4E4B%u524D%u6682%u5B58%u533A%u4E22%u5931%u548C%u5DE5%u4F5C%u533A%u8FD8%u7EE7%u7EED%u5B58%u5728%29%0A%23%u5DE5%u4F5C%u533A%u5DF2%u7ECF%u6709%u51B2%u7A81%u7684%u6587%u4EF6%uFF0C%u5219%u4EE5%u5DE5%u4F5C%u533A%u7684%u4E3A%u51C6%uFF0C%u53D8%u66F4%u7684%u5C06%u4E22%u5931%0Agit%20reset%20--mixed%20HEAD%5E%0A%0A%23%u56DE%u9000%u81F3%u4E09%u4E2A%u7248%u672C%u4E4B%u524D%uFF0C%u8868%u793A%u5C06%u672C%u5730%u7248%u672C%u5E93%u7684%u5934%u6307%u9488%u5168%u90E8%u91CD%u7F6E%u5230%u4E09%u4E2A%u7248%u672C%u4E4B%u524D%uFF0C%0A%23%u4E14%u5C06%u8FD9%u6B21%u63D0%u4EA4%u4E4B%u540E%u7684%u6240%u6709%u53D8%u66F4%u90FD%u79FB%u52A8%u5230%u6682%u5B58%u533A%28%u4E4B%u524D%u6682%u5B58%u548C%u5DE5%u4F5C%u533A%u8FD8%u7EE7%u7EED%u5B58%u5728%29%0A%23%u6682%u5B58%u533A%u5DF2%u7ECF%u6709%u51B2%u7A81%u7684%u6587%u4EF6%uFF0C%u5219%u4EE5%u6682%u5B58%u7684%u4E3A%u51C6%uFF0C%u53D8%u66F4%u7684%u5C06%u4E22%u5931%0Agit%20reset%20--soft%20HEAD%7E3%0A%0A%23%u5F7B%u5E95%u56DE%u9000%u5230%u6307%u5B9Acommit-id%u7684%u72B6%u6001%uFF0C%u6682%u5B58%u533A%u548C%u5DE5%u4F5C%u533A%u4E5F%u4F1A%u53D8%u4E3A%u6307%u5B9Acommit-id%u7248%u672C%u7684%u5185%u5BB9%2CUntracked%20files%u8FD8%u7EE7%u7EED%u5B58%u5728%0A%23%u5982%u679Creset%u5230%u5DF2%u7ECFpush%u7684%u7248%u672C%uFF0C%u6B64%u65F6%u5982%u679Cpull%2C%u4F1A%u5C06%u672C%u5730%u4ED3%u5E93%u540C%u6B65%u540C%u6B65%u6210%u8FDC%u7A0B%uFF0C%0A%23%20%20%20%20%20%20%20%u6B64%u65F6%u5982%u679Cpush%20-f%2C%u4F1A%u5C06%u8FDC%u7A0B%u540C%u6B65%u6210%u672C%u5730%0A%23%20%20%20%20%20%20%20%u6B64%u65F6%u5982%u679Cpush%20%27Updates%20were%20rejected%20...%20current%20branch%20is%20behind%27%0Agit%20reset%20--hard%20%3Ccommit-id%3E%0A",lang:"sh"}),F,C,t(e,{code:"%23%20%u4ECE%28%u672C/%u8FDC%29%u4ED3%u5E93%u53D6%u51FAtest.txt%u66FF%u6362%u5230%u5DE5%u4F5C%u533A%uFF0C%u5E76%u5220%u9664%u6682%u5B58%u533A%u7684test.txt%0Agit%20checkout%20%3Ccommit-id%3E%20--%20test.txt%0A%23%20%u4ECE%u6682%u5B58%u533A%u53D6%u51FAtest.txt%u66FF%u6362%u5230%u5DE5%u4F5C%u533A%uFF08%u5982%u679C%u6682%u5B58%u533A%u6CA1%u6709%u5C31%u4ECE%28%u672C/%u8FDC%29%u4ED3%u5E93%u53D6%uFF0C%u5C31%u540C%u4E0A%uFF09%0Agit%20checkout%20%u2013-%20test.txt%0A",lang:"sh"}),_,t(e,{code:"git%20checkout%20%3Cbranch-name%3E%0A",lang:"sh"}),D,t(e,{code:"git%20commit%20--amend%20--allow-empty%20-m%20%u63D0%u4EA4%u8BED%u53E5%0A",lang:"markup"}),m,B,t(e,{code:"git%20remote%20set-url%20origin%20%3Curl%3E%0A",lang:"sh"}),b,t(e,{code:"git%20remote%20add%20origin%20%3Curl%3E%0A",lang:"sh"}),p,t(e,{code:"git%20remote%20-v%0A",lang:"sh"}),k,t(e,{code:"git%20remote%20rm%20origin%0A",lang:"sh"}),f,t(e,{code:"git%20remote%20rename%20origin%20%3Cnew-name%3E%0A",lang:"sh"}),v,t(e,{code:"git%20pull%20origin%20%3Cbranch-name%3E%0A",lang:"sh"}),x,t(e,{code:"git%20push%20origin%20%3Cbranch-name%3E%0A",lang:"sh"}),y,t(e,{code:"git%20push%20origin%20--delete%20%3Cbranch-name%3E%0A",lang:"sh"}),H,t(e,{code:"git%20checkout%20-b%20%3Cbranch-name%3E%20origin/%3Cbranch-name%3E%0A",lang:"sh"}),w,t(e,{code:"git%20checkout%20-b%20%3Cbranch-name%3E%20origin/%3Cbranch-name%3E%0Agit%20branch%20-u%20origin/%3Cbranch-name%3E%0A",lang:"sh"}),j,t(e,{code:"git%20branch%20-u%20origin/mybranch%0A//%20%u6216%0Agit%20push%20origin/mybranch%20-u%0A",lang:"sh"}),N,U,t(e,{code:"git%20remote%20prune%20origin%0A",lang:"sh"}),t(e,{code:"%0A%23%23%20%u5207%u56DE%u5230%u67D0%u4E2A%u6807%u7B7E%0A%0A%u4E00%u822C%u4E0A%u7EBF%u4E4B%u524D%u90FD%u4F1A%u6253%20tag%uFF0C%u5C31%u662F%u4E3A%u4E86%u9632%u6B62%u4E0A%u7EBF%u540E%u51FA%u73B0%u95EE%u9898%uFF0C%u65B9%u4FBF%u5FEB%u901F%u56DE%u9000%u5230%u4E0A%u4E00%u7248%u672C%u3002%0A%u4E0B%u9762%u7684%u547D%u4EE4%u662F%u56DE%20%u5230%u67D0%u4E00%u6807%u7B7E%u4E0B%u7684%u72B6%u6001%uFF1A%0A%0A%60%60%60sh%0Agit%20checkout%20-b%20branch_name%20tag_name%0A",lang:"markup"}),V,G,t(e,{code:"git%20revert%20%3Ccommit-id%3E%0Agit%20revert%20--abort%20//%20%u53D6%u6D88revert%0A",lang:"sh"}),z,t(e,{code:"%23%u4ECE%u672C%u5730%u4ED3%u5E93%u53D6%u51FA%u6587%u4EF6%u8986%u76D6%u5DE5%u4F5C%u533A%0Agit%20restore%203.txt%0A%23%u4ECE%u6682%u5B58%u533A%u53D6%u51FA%u6587%u4EF6%u4E0D%u8986%u76D6%u5DE5%u4F5C%u533A%0Agit%20restore%20--staged%203.txt%0A",lang:"sh"}),T,Y,t(e,{code:"git%20checkout%20%3CbranchB-name%3E%20%26%26%20git%20cherry-pick%20%3Ccommit-id-from-B%3E%0A",lang:"sh"}),q,t(e,{code:"git%20stash%20//%20%u5B58%u50A8%u6240%u6709%u7684%u6587%u4EF6%0Agit%20stash%20-u%20//%20%20%u5B58%u50A8%u6240%u6709%u7684%u6587%u4EF6%u5305%u62EC%u672A%u8DDF%u8E2A%u7684%0Agit%20stash%20list%20//%20%u5C55%u793A%u6240%u6709%u7684stashes%0Agit%20stash%20apply%20%3Cstash@%7Bn%7D%3E%20//%20%u56DE%u5230%u67D0%u4E2A%20stash%20%u7684%u72B6%u6001%0Agit%20stash%20clear%20//%20%u5220%u9664%u6240%u6709%u7684stash%0A",lang:"sh"}),I,J,t(e,{code:"git%20pull%20--rebase%0A%23%20%u5982%u679C%u6709%u51B2%u7A81%u5148%u89E3%u51B3%u51B2%u7A81%uFF08%u53EF%u80FD%u8981%u89E3%u51B3%u591A%u6B21%uFF09%uFF0C%u7136%u540Egit%20add%u63D0%u4EA4%uFF0C%u4E0D%u7528commit%0A%23%20%u7B49%u4EF7%u4E8E%20git%20fetch%20--all%20%26%26%20git%20rebase%20branch%0Agit%20rebase%20--continue%0A%23%20%u5982%u679C%u4E0D%u60F3%u89E3%u51B3%u51B2%u7A81%u7684%u65F6%u5019%u4E0D%u60F3%u7EE7%u7EEDrebase%0Agit%20rebase%20--abort%0A",lang:"sh"}),K,t(e,{code:"git%20pull%20--rebase%0A%0A%23%20%u7ED3%u679C%u5982%u4E0B%0Aerror%3A%20cannot%20pull%20with%20rebase%3A%20You%20have%20unstaged%20changes.%0Aerror%3A%20please%20commit%20or%20stash%20them.%0A",lang:"sh"}),u("p",null,[t(c,{to:"https://juejin.cn/post/6844903895160881166"},{default:o(()=>[i("\u53C2\u8003\u6587\u732E")]),_:1}),L,t(c,{to:"https://git-scm.com/book/zh/v2/Git-\u5206\u652F-\u53D8\u57FA"},{default:o(()=>[i("\u53C2\u8003\u6587\u732E")]),_:1})]),M,O,t(e,{code:"git%20merge%20--abort%0A",lang:"sh"}),P,t(e,{code:"git%20push%20-f%20%3Cremote-name%3E%20%3Cbranch-name%3E%0A",lang:"sh"}),Q,t(e,{code:"git%20log%20--pretty%3Doneline%20//%20%u7B80%u77ED%u7248%u672C%u7684%u65E5%u5FD7%0Agit%20reflog%20//%20%u5305%u62EC%u66F4%u6539%u4E86HEAD%u7684%u65E5%u5FD7%0A",lang:"sh"}),R,t(e,{code:"git%20fetch%20--tags%20-f%20//%20%u5F3A%u5236%u62C9%u53D6%u8FDC%u7A0Btag%0A",lang:"sh"})]),_:1})}}};export{$ as default};
