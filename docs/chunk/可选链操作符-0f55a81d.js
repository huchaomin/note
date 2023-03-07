import{r as a,o as d,c as s,f as i,g as e,aa as o}from"./vendor-774b84b8.js";const l=o("p",null,"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\uFF08Optional Chaining\uFF09\u901A\u5E38\u5728\u6211\u4EEC\u7F16\u5199\u9879\u76EE\u65F6\uFF0C\u5982\u679C\u8981\u901A\u8FC7 ajax \u52A8\u6001\u83B7\u53D6\u6570\u636E\uFF0C\u4F46\u662F\u5E76\u4E0D\u77E5\u9053\u540E\u7AEF\u8FD4\u56DE\u6765\u7684\u6570\u636E\u662F\u5426\u662F\u7A7A\u503C\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u8FDB\u884C\u5F88\u591A\u5224\u65AD\u3002",-1),r=o("p",null,"\u5047\u8BBE data \u662F\u901A\u8FC7 ajax \u83B7\u53D6\u7684\u6570\u636E\uFF0Cdata.friend.name \u5B58\u5728\uFF0C\u5219\u53EF\u4EE5\u6B63\u5E38\u8F93\u51FA\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF1A",-1),_=o("p",null,"\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5E73\u65F6\u5C31\u8981\u505A\u5F88\u591A\u5224\u65AD",-1),f=o("p",null,"\u6709\u4E86\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\uFF08?.\uFF09\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7B80\u5199\u6210",-1),p=o("h3",{id:"1-function",class:"doc-heading"},"function",-1),j={__name:"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26",setup(g){const t=[{id:"doc-title",title:"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26"},{id:"1-function",title:"0.1. function",sub:!0}];return(u,m)=>{const n=a("doc-code"),c=a("doc-page");return d(),s(c,{desc:"",toc:t},{default:i(()=>[l,e(n,{code:`const data = {
  name: '\u5F20\u4E09',
  age: 18,
  sex: '\u7537',
  friend: {
    name: '\u674E\u56DB',
  },
};

console.log(data.friend.name);
`,lang:"js"}),r,e(n,{code:`console.log(data.friend.name); // \u62A5\u9519\uFF1AUncaught TypeError: Cannot read property 'name' of undefined
`,lang:"js"}),_,e(n,{code:`console.log(data && data.friend && data.friend.name); // undefined
`,lang:"js"}),f,e(n,{code:`console.log(data?.friend?.name);
`,lang:"js"}),p,e(n,{code:`fn?.(arg1, arg2);
`,lang:"js"})]),_:1})}}};export{j as default};
