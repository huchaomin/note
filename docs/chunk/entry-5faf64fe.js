import{r as a,o as c,c as d,f as p,g as n,aa as t}from"./vendor-90615676.js";const r=t("h2",{id:"1-\u5B57\u7B26\u4E32",class:"doc-heading"},"\u5B57\u7B26\u4E32",-1),i=t("h2",{id:"2-\u6570\u7EC4",class:"doc-heading"},"\u6570\u7EC4",-1),m=t("p",null,"\u4E00\u6B21\u6CE8\u5165\u591A\u4E2A\u4F9D\u8D56\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u5B83\u4EEC\u7684\u4F9D\u8D56\u5173\u7CFB\u7ED8\u5236\u5728\u4E00\u4E2A \u201Cchunk\u201D \u4E2D",-1),l=t("h2",{id:"3-\u5BF9\u8C61",class:"doc-heading"},"\u5BF9\u8C61",-1),_=t("h2",{id:"4-\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F-\u4E09\u4E2A\u72EC\u7ACB\u5206\u79BB\u7684\u4F9D\u8D56\u56FE",class:"doc-heading"},"\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F:\u4E09\u4E2A\u72EC\u7ACB\u5206\u79BB\u7684\u4F9D\u8D56\u56FE",-1),h=t("h2",{id:"5-\u4E3A\u7279\u5B9A\u7684\u5165\u53E3\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8F93\u51FA\u6587\u4EF6\u540D",class:"doc-heading"},"\u4E3A\u7279\u5B9A\u7684\u5165\u53E3\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8F93\u51FA\u6587\u4EF6\u540D",-1),g=t("h2",{id:"6-dependon",class:"doc-heading"},"dependOn",-1),f={__name:"entry",setup(j){const o=[{id:"doc-title",title:"webpack entry"},{id:"1-\u5B57\u7B26\u4E32",title:"1. \u5B57\u7B26\u4E32"},{id:"2-\u6570\u7EC4",title:"2. \u6570\u7EC4"},{id:"3-\u5BF9\u8C61",title:"3. \u5BF9\u8C61"},{id:"4-\u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F-\u4E09\u4E2A\u72EC\u7ACB\u5206\u79BB\u7684\u4F9D\u8D56\u56FE",title:"4. \u591A\u9875\u9762\u5E94\u7528\u7A0B\u5E8F:\u4E09\u4E2A\u72EC\u7ACB\u5206\u79BB\u7684\u4F9D\u8D56\u56FE"},{id:"5-\u4E3A\u7279\u5B9A\u7684\u5165\u53E3\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8F93\u51FA\u6587\u4EF6\u540D",title:"5. \u4E3A\u7279\u5B9A\u7684\u5165\u53E3\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8F93\u51FA\u6587\u4EF6\u540D"},{id:"6-dependon",title:"6. dependOn"}];return(u,y)=>{const e=a("doc-code"),s=a("doc-page");return c(),d(s,{desc:"",toc:o},{default:p(()=>[r,n(e,{code:`entry: './path/to/my/entry/file.js'
// \u6B64\u65F6output\u7684name\u4E3Amain
`,lang:"javascript"}),i,m,n(e,{code:`entry: [
  './src/file_1.js',
  './src/file_2.js'
]
`,lang:"javascript"}),l,n(e,{code:`entry: {
  main: './path/to/my/entry/file.js'
}
// \u6B64\u65F6output\u7684name\u4E3Amain
`,lang:"javascript"}),n(e,{code:`entry: {
  app: './src/app.js',
  adminApp: './src/adminApp.js'
}
// \u4E24\u4E2Achunk
`,lang:"javascript"}),_,n(e,{code:`entry: {
  pageOne: './src/pageOne/index.js',
  pageTwo: './src/pageTwo/index.js',
  pageThree: './src/pageThree/index.js'
}
`,lang:"javascript"}),h,n(e,{code:`entry: {
  app: {
    import: './index.js',
    filename: 'pages/[name][ext]'
  }
  // \u6700\u7EC8dist/pages/app.js
},
`,lang:"javascript"}),g,n(e,{code:`entry: {
  // dependOn \u9009\u9879\u4F60\u53EF\u4EE5\u4E0E\u53E6\u4E00\u4E2A\u5165\u53E3 chunk \u5171\u4EAB\u6A21\u5757
  // app \u8FD9\u4E2A chunk \u5C31\u4E0D\u4F1A\u5305\u542B react-vendors \u62E5\u6709\u7684\u6A21\u5757\u4E86
  app: { import: './index.js', dependOn: 'react-vendors' },
  'react-vendors': ['react', 'react-dom', 'prop-types']
},
entry: {
  moment: { import: 'moment-mini', runtime: 'runtime' },
  reactvendors: { import: ['react', 'react-dom'], runtime: 'runtime' },
  testapp: {
    import: './wwwroot/component/TestApp.tsx',
    dependOn: ['reactvendors', 'moment'],
  },
},
 entry: {
  app: { import: ['./app.js', './app2.js'], dependOn: 'react-vendors' },
  'react-vendors': ['react', 'react-dom', 'prop-types']
}
`,lang:"javascript"})]),_:1})}}};export{f as default};
