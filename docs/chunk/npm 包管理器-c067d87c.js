import{r as a,o as c,c as p,f as i,g as s,a8 as n,v as t}from"./vendor-5a734afa.js";const l=n("h2",{id:"1-\u4E0B\u8F7D",class:"doc-heading"},"\u4E0B\u8F7D",-1),m=n("p",null,"\u5B89\u88C5\u6240\u6709\u4F9D\u8D56",-1),h=n("p",null,"\u5B89\u88C5\u5355\u4E2A\u8F6F\u4EF6\u5305",-1),_=n("ul",null,[n("li",null,"--save \u5B89\u88C5\u5E76\u6DFB\u52A0\u6761\u76EE\u5230 package.json \u6587\u4EF6\u7684 dependencies\u3002"),n("li",null,"--save-dev \u5B89\u88C5\u5E76\u6DFB\u52A0\u6761\u76EE\u5230 package.json \u6587\u4EF6\u7684 devDependencies\u3002"),n("li",null,"devDependencies \u901A\u5E38\u662F\u5F00\u53D1\u7684\u5DE5\u5177\uFF08\u4F8B\u5982\u6D4B\u8BD5\u7684\u5E93\uFF09"),n("li",null,"dependencies \u5219\u662F\u4E0E\u751F\u4EA7\u73AF\u5883\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F\u76F8\u5173")],-1),g=n("p",null,"\u66F4\u65B0\u8F6F\u4EF6\u5305",-1),u=n("h2",{id:"2-\u8FD0\u884C\u4EFB\u52A1",class:"doc-heading"},"\u8FD0\u884C\u4EFB\u52A1",-1),r=n("h2",{id:"3-\u5B89\u88C5npm\u5305",class:"doc-heading"},"\u5B89\u88C5npm\u5305",-1),v=n("h3",{id:"4-npm-\u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u54EA\u91CC",class:"doc-heading"},"npm \u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u54EA\u91CC",-1),k=n("h3",{id:"5-\u67E5\u770B-npm-\u5305\u5B89\u88C5\u7684\u7248\u672C",class:"doc-heading"},"\u67E5\u770B npm \u5305\u5B89\u88C5\u7684\u7248\u672C",-1),x=n("p",null,"\u6240\u6709\u4F9D\u8D56",-1),b=n("h3",{id:"6-\u67E5\u770B\u5305\u7684\u8FDC\u7A0B\u7248\u672C",class:"doc-heading"},"\u67E5\u770B\u5305\u7684\u8FDC\u7A0B\u7248\u672C",-1),j=n("h3",{id:"7-\u5B89\u88C5-npm-\u5305\u7684\u56FA\u5B9A\u7248\u672C",class:"doc-heading"},"\u5B89\u88C5 npm \u5305\u7684\u56FA\u5B9A\u7248\u672C",-1),f=n("p",null,"\u4F7F\u7528\u2019@'\u7B26\u53F7\u5B89\u88C5\u56FA\u5B9A\u7248\u672C",-1),w=n("h2",{id:"8-\u66F4\u65B0\u5305",class:"doc-heading"},"\u66F4\u65B0\u5305",-1),y=n("p",null,"\u5F3A\u5236\u5305\u6240\u6709\u7684\u5305\u66F4\u65B0\u5230\u6700\u65B0\uFF08\u5305\u62EC\u4E3B\u7248\u672C\uFF0C\u4E0D\u63A8\u8350\uFF09",-1),C=n("h2",{id:"9-\u5378\u8F7D\u5305",class:"doc-heading"},"\u5378\u8F7D\u5305",-1),D=n("h2",{id:"10-npx",class:"doc-heading"},"npx",-1),B=n("h3",{id:"11-\u4EA7\u751F\u7684\u539F\u56E0",class:"doc-heading"},"\u4EA7\u751F\u7684\u539F\u56E0",-1),N=n("p",null,"\u5305\u7684\u5F00\u53D1\u8005\u901A\u5E38\u559C\u6B22\u5C06\u547D\u4EE4\u5168\u5C40\u5B89\u88C5\uFF08\u4E3A\u4E86\u65B9\u4FBF\uFF09\uFF0C\u7136\u540E\u53C8\u4E0D\u6B62\u5F00\u53D1\u4E86\u4E00\u4E2A\u5305\uFF0C\u7136\u540E\u6BCF\u4E2A\u5305\u8FD0\u884C\u76F8\u540C\u547D\u4EE4\uFF0C\u547D\u4EE4\u7684\u7248\u672C\u4E0D\u4E00\u6837\uFF0C\u8FD9\u5C31\u5F88\u86CB\u75BC\u4E86",-1),R=n("h3",{id:"12-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),V=n("p",null,[t("\u8FD0\u884C "),n("code",{class:"doc-token"},"npx <command-name>"),t(" \u4F1A\u81EA\u52A8\u5730\u5728\u9879\u76EE\u7684 node_modules \u6587\u4EF6\u5939\u4E2D\u627E\u5230\u547D\u4EE4\u7684\u6B63\u786E\u5F15\u7528\uFF0C\u800C\u65E0\u9700\u77E5\u9053\u786E\u5207\u7684\u8DEF\u5F84\uFF0C\u4E5F\u4E0D\u9700\u8981\u5728\u5168\u5C40\u548C\u7528\u6237\u8DEF\u5F84\u4E2D\u5B89\u88C5\u8F6F\u4EF6\u5305\u3002")],-1),L=n("p",null,"\u4E0D\u9700\u8981\u5B89\u88C5\u4EFB\u4F55\u4E1C\u897F\u3002",-1),U=n("h3",{id:"13-\u573A\u666F",class:"doc-heading"},"\u573A\u666F",-1),z=n("p",null,"\u53EF\u4EE5\u4F7F\u7528 @version \u8BED\u6CD5\u8FD0\u884C\u540C\u4E00\u547D\u4EE4\u7684\u4E0D\u540C\u7248\u672C",-1),A=n("p",null,"\u76F4\u63A5\u4ECE URL \u8FD0\u884C\u4EFB\u610F\u4EE3\u7801\u7247\u6BB5",-1),F={__name:"npm \u5305\u7BA1\u7406\u5668",setup(I){const o=[{id:"doc-title",title:"npm \u5305\u7BA1\u7406\u5668"},{id:"1-\u4E0B\u8F7D",title:"1. \u4E0B\u8F7D"},{id:"2-\u8FD0\u884C\u4EFB\u52A1",title:"2. \u8FD0\u884C\u4EFB\u52A1"},{id:"3-\u5B89\u88C5npm\u5305",title:"3. \u5B89\u88C5npm\u5305"},{id:"4-npm-\u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u54EA\u91CC",title:"3.1. npm \u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u54EA\u91CC",sub:!0},{id:"5-\u67E5\u770B-npm-\u5305\u5B89\u88C5\u7684\u7248\u672C",title:"3.2. \u67E5\u770B npm \u5305\u5B89\u88C5\u7684\u7248\u672C",sub:!0},{id:"6-\u67E5\u770B\u5305\u7684\u8FDC\u7A0B\u7248\u672C",title:"3.3. \u67E5\u770B\u5305\u7684\u8FDC\u7A0B\u7248\u672C",sub:!0},{id:"7-\u5B89\u88C5-npm-\u5305\u7684\u56FA\u5B9A\u7248\u672C",title:"3.4. \u5B89\u88C5 npm \u5305\u7684\u56FA\u5B9A\u7248\u672C",sub:!0},{id:"8-\u66F4\u65B0\u5305",title:"4. \u66F4\u65B0\u5305"},{id:"9-\u5378\u8F7D\u5305",title:"5. \u5378\u8F7D\u5305"},{id:"10-npx",title:"6. npx"},{id:"11-\u4EA7\u751F\u7684\u539F\u56E0",title:"6.1. \u4EA7\u751F\u7684\u539F\u56E0",sub:!0},{id:"12-\u4F5C\u7528",title:"6.2. \u4F5C\u7528",sub:!0},{id:"13-\u573A\u666F",title:"6.3. \u573A\u666F",sub:!0}];return(T,q)=>{const e=a("doc-code"),d=a("doc-page");return c(),p(d,{desc:"",toc:o},{default:i(()=>[l,m,s(e,{code:`# \u5982\u679C\u9879\u76EE\u5177\u6709 package.json \u6587\u4EF6
npm install
npm install --production # \u53EA\u5B89\u88C5dependencies\u4E0B\u9762\u7684\u5305
`,lang:"sh"}),h,s(e,{code:`npm install <package-name>
`,lang:"sh"}),_,g,s(e,{code:`npm update
npm update <package-name>
`,lang:"sh"}),u,s(e,{code:`npm run <task-name> # start-dev or start

# package.json
# {
#   "scripts": {
#     "start-dev": "node lib/server-development",
#     "start": "node lib/server-production"
#   }
# }
`,lang:"sh"}),r,v,s(e,{code:`npm install lodash # \u5F53\u524Dnode_modules \u5B50\u6587\u4EF6\u5939\u4E0B\u3001dependencies\u4E2D
npm install -g lodash #\u5168\u5C40node_modules \u5B50\u6587\u4EF6\u5939\u4E0B
npm root -g # \u5168\u5C40\u7684\u4F4D\u7F6E(C:\\Users\\hwx927218\\AppData\\Roaming\\npm\\node_modules)
`,lang:"sh"}),k,x,s(e,{code:`npm list
npm list -g # \u5168\u5C40
npm list --depth=0 # \u4EC5\u67E5\u770B\u9876\u5C42\uFF08\u4E5F\u5C31\u662Fpackage.json\u91CC\u9762\u7684\uFF09
npm list -g --depth=0 # \u4EC5\u67E5\u770B\u5168\u5C40\u9876\u5C42
npm list <package-name> # \u7279\u5B9A\u5305\u7684\u7248\u672C(\u4E5F\u9002\u7528\u4E8E\u4F9D\u8D56\u5305)
`,lang:"sh"}),b,s(e,{code:`npm view [package_name] version # \u6700\u65B0\u7248
npm view [package_name] versions # \u6240\u6709\u5386\u53F2\u7248\u672C
`,lang:"sh"}),j,f,s(e,{code:`npm install <package-name>@<version>
npm install -g <package-name>@<version>
`,lang:"sh"}),w,s(e,{code:`npm update # package.json\u4E0D\u4F1A\u6539\u53D8\uFF0Cpackage-lock.json\u53EF\u80FD\u4F1A\u6539\u53D8
npm install # \u540C\u4E0A
npm outdated # \u67E5\u770B\u54EA\u4E9B\u9876\u5C42\u5305\u6709\u66F4\u65B0
`,lang:"sh"}),y,s(e,{code:`npm install -g npm-check-updates
ncu -u
npm update # \u66F4\u63A8\u8350 rimraf node_modules,\u7136\u540Enpm install
`,lang:"sh"}),C,s(e,{code:`npm uninstall <package-name> # \u5378\u8F7D\u5305\uFF0C\u4E0D\u6539\u53D8package.json
npm uninstall <package-name> --save # \u5378\u8F7D\u5305\uFF0C\u6539\u53D8package.json\u4E2D\u7684dependencies
npm uninstall <package-name> --save-dev # \u5378\u8F7D\u5305\uFF0C\u6539\u53D8package.json\u4E2D\u7684devDependencies
npm uninstall -g <package-name> # \u5378\u8F7D\u5168\u5C40\u7684\u5305
`,lang:"sh"}),D,B,N,R,V,L,s(e,{code:`#  \u6211\u7535\u8111\u6CA1\u6709\u5B89\u88C5npx\u548Ccowsay
npx cowsay "\u4F60\u597D"
#  \u81EA\u52A8\u5168\u5C40\u5B89\u88C5\u548Cnpm\u76F8\u540C\u7248\u672C\u7684npx
#  \u4E0B\u8F7Dcowsay
#  \u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4
#  \u5378\u8F7Dcowsay
`,lang:"sh"}),U,s(e,{code:`npx vue create my-vue-app # \u8FD0\u884C vue CLI \u5DE5\u5177\u4EE5\u521B\u5EFA\u65B0\u7684\u5E94\u7528\u7A0B\u5E8F\u5E76\u8FD0\u884C\u5B83\u4EEC
npx create-react-app my-react-app # \u4F7F\u7528 create-react-app \u521B\u5EFA\u65B0\u7684 React \u5E94\u7528
`,lang:"sh"}),z,s(e,{code:`npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1
`,lang:"sh"}),A,s(e,{code:`npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
`,lang:"sh"})]),_:1})}}};export{F as default};
