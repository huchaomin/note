import{r as n,o as a,c as i,f as p,g as t,ac as e}from"./vendor.js";const d=e("h2",{id:"1-\u7ED9\u6240\u6709\u63D2\u4EF6\u4F20\u9012options",class:"doc-heading"},"\u7ED9\u6240\u6709\u63D2\u4EF6\u4F20\u9012options",-1),l=e("h2",{id:"2-\u4FEE\u6539\u63D2\u4EF6\u9009\u9879",class:"doc-heading"},"\u4FEE\u6539\u63D2\u4EF6\u9009\u9879",-1),m={__name:"plugin",setup(r){const c=[{id:"doc-title",title:"vue.config.js plugin"},{id:"1-\u7ED9\u6240\u6709\u63D2\u4EF6\u4F20\u9012options",title:"1. \u7ED9\u6240\u6709\u63D2\u4EF6\u4F20\u9012options"},{id:"2-\u4FEE\u6539\u63D2\u4EF6\u9009\u9879",title:"2. \u4FEE\u6539\u63D2\u4EF6\u9009\u9879"}];return(g,_)=>{const o=n("doc-code"),s=n("doc-page");return a(),i(s,{desc:"vue.config.js plugin \u5904\u7406",toc:c},{default:p(()=>[d,t(o,{code:`pluginOptions: {
  foo: {
    // \u63D2\u4EF6\u53EF\u4EE5 \`options.pluginOptions.foo\` \u8BBF\u95EE\u8FD9\u4E9B\u9009\u9879\u3002
  }
}
`,lang:"javascript"}),l,t(o,{code:`chainWebpack: config => {
  config
    .plugin('html') //  \u66FF\u6362 html-webpack-plugin \u7684\u9ED8\u8BA4\u8DEF\u5F84
    .tap(args => {
      args[0].template = '/Users/username/proj/app/templates/index.html'
      return args
    })
}
`,lang:"javascript"})]),_:1})}}};export{m as default};
