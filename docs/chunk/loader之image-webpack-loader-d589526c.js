import{r as e,o as n,c as t,f as d,g as s,a8 as i}from"./vendor-5a734afa.js";const r=i("h2",{id:"1-\u538B\u7F29\u56FE\u7247",class:"doc-heading"},"\u538B\u7F29\u56FE\u7247",-1),m={__name:"loader\u4E4Bimage-webpack-loader",setup(p){const o=[{id:"doc-title",title:"image-webpack-loader"},{id:"1-\u538B\u7F29\u56FE\u7247",title:"1. \u538B\u7F29\u56FE\u7247"}];return(l,_)=>{const a=e("doc-code"),c=e("doc-page");return n(),t(c,{desc:"image-webpack-loader \u538B\u7F29\u56FE\u7247",toc:o},{default:d(()=>[r,s(a,{code:`chainWebpack: config => {
  config.module
    .rule("image-webpack-loader")
    .test(/\\.(gif|png|jpe?g|svg)$/i)
    .use("file-loader")
    .loader("image-webpack-loader")
    .tap(() => ({
      disable: process\\.env\\.NODE_ENV !== "production"
    }))
    .end()
}
`,lang:"javascript"})]),_:1})}}};export{m as default};
