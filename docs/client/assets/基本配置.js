import{r as e,o as s,c as a,f as c,g as r,ac as p}from"./vendor.js";const l=p("h2",{id:"1-vue-config-js-\u57FA\u672C\u914D\u7F6E",class:"doc-heading"},"vue.config.js \u57FA\u672C\u914D\u7F6E",-1),g={__name:"\u57FA\u672C\u914D\u7F6E",setup(i){const n=[{id:"doc-title",title:"vue.config.js \u57FA\u672C\u914D\u7F6E"},{id:"1-vue-config-js-\u57FA\u672C\u914D\u7F6E",title:"1. vue.config.js \u57FA\u672C\u914D\u7F6E"}];return(u,d)=>{const o=e("doc-code"),t=e("doc-page");return s(),a(t,{desc:"vue-cli vue.config.js \u57FA\u672C\u914D\u7F6E",toc:n},{default:c(()=>[l,r(o,{code:`module.exports = {
  // \u9879\u76EE\u90E8\u7F72\u7684\u57FA\u7840\u8DEF\u5F84
  // \u6211\u4EEC\u9ED8\u8BA4\u5047\u8BBE\u4F60\u7684\u5E94\u7528\u5C06\u4F1A\u90E8\u7F72\u5728\u57DF\u540D\u7684\u6839\u90E8\uFF0C
  // \u6BD4\u5982 https://www.my-app.com/
  // \u5982\u679C\u4F60\u7684\u5E94\u7528\u65F6\u90E8\u7F72\u5728\u4E00\u4E2A\u5B50\u8DEF\u5F84\u4E0B\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5728\u8FD9\u91CC
  // \u6307\u5B9A\u5B50\u8DEF\u5F84\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u4F60\u7684\u5E94\u7528\u90E8\u7F72\u5728
  // https://www.foobar.com/my-app/
  // \u90A3\u4E48\u5C06\u8FD9\u4E2A\u503C\u6539\u4E3A \`/my-app/\`
  // Vue CLI 3.3 \u8D77\u5DF2\u5F03\u7528baseUrl\uFF0C\u8BF7\u4F7F\u7528publicPath
  baseUrl: '/',
  // \u751F\u4EA7\u73AF\u5883\u662F\u5426\u8981\u751F\u6210 sourceMap
  productionSourceMap: false
  // \u662F\u5426\u9700\u8981\u81EA\u5DF1\u7F16\u8BD1template\u8BED\u6CD5
  runtimeCompiler: false,
  // \u90E8\u7F72\u5E94\u7528\u5305\u65F6\u7684\u57FA\u672C URL,\u7528\u6CD5\u548C webpack \u672C\u8EAB\u7684 output.publicPath \u4E00\u81F4
  publicPath: './',
  // build \u65F6\u8F93\u51FA\u7684\u6587\u4EF6\u76EE\u5F55
  outputDir: 'dist',
  // \u653E\u7F6E\u9759\u6001\u6587\u4EF6\u5939\u76EE\u5F55
  assetsDir: 'assets',
  // \u662F\u5426\u5728\u4FDD\u5B58\u7684\u65F6\u5019\u4F7F\u7528 \`eslint-loader\` \u8FDB\u884C\u68C0\u67E5\u3002
  // \u6709\u6548\u7684\u503C\uFF1A\`ture\` | \`false\` | \`"error"\`
  // \u5F53\u8BBE\u7F6E\u4E3A \`"error"\` \u65F6\uFF0C\u68C0\u67E5\u51FA\u7684\u9519\u8BEF\u4F1A\u89E6\u53D1\u7F16\u8BD1\u5931\u8D25\u3002
  lintOnSave: true,
  // babel-loader \u9ED8\u8BA4\u4F1A\u8DF3\u8FC7 node_modules \u4F9D\u8D56\u3002
  // \u901A\u8FC7\u8FD9\u4E2A\u9009\u9879\u53EF\u4EE5\u663E\u5F0F\u8F6C\u8BD1\u4E00\u4E2A\u4F9D\u8D56\u3002
  transpileDependencies: [/* string or regex */],
  css: {
    // \u5C06\u7EC4\u4EF6\u5185\u7684 CSS \u63D0\u53D6\u5230\u4E00\u4E2A\u5355\u72EC\u7684 CSS \u6587\u4EF6 (\u53EA\u7528\u5728\u751F\u4EA7\u73AF\u5883\u4E2D)
    // \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u4F20\u9012\u7ED9 \`extract-text-webpack-plugin\` \u7684\u9009\u9879\u5BF9\u8C61
    extract: true,
    // \u5F00\u542F CSS source maps? @vue/cli\u9ED8\u8BA4\u4E3Afalse
    sourceMap: false,
    // \u4E3A\u9884\u5904\u7406\u5668\u7684 loader \u4F20\u9012\u81EA\u5B9A\u4E49\u9009\u9879\u3002\u6BD4\u5982\u4F20\u9012\u7ED9
    // sass-loader \u65F6\uFF0C\u4F7F\u7528 \`{ sass: { ... } }\`\u3002
    loaderOptions: {},
    // \u4E3A\u6240\u6709\u7684 CSS \u53CA\u5176\u9884\u5904\u7406\u6587\u4EF6\u5F00\u542F CSS Modules\u3002
    // \u8FD9\u4E2A\u9009\u9879\u4E0D\u4F1A\u5F71\u54CD \`*.vue\` \u6587\u4EF6\u3002
    modules: false,
  },
  devServer: {
    host: 'localhost.hihonor.com',
    port: '8888',
    proxy: {
      '/hus': {
        target: 'http://uat.digital.hihonor.com',
        changeOrigin: true,
      },
    },
    overlay: {  // \u5728\u9875\u9762\u663E\u793A\u9519\u8BEF\u4FE1\u606F
      warnings: true,
      errors: true,
    },
  },
  chainWebpack: config => {
   // \u79FB\u9664 prefetch \u63D2\u4EF6(prefetch)\u4F1A\u9020\u6210\u4E24\u6B21\u52A0\u8F7D
    config.plugins.delete('prefetch')
  },
  // \u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4E3A Babel \u548C TypeScript \u4F7F\u7528 \`thread-loader\`
  // \u5728\u591A\u6838\u673A\u5668\u4E0B\u4F1A\u9ED8\u8BA4\u5F00\u542F\u3002
  parallel: require('os').cpus().length > 1,
  // PWA \u63D2\u4EF6\u7684\u9009\u9879\u3002
  // \u67E5\u9605 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},
   // \u4E09\u65B9\u63D2\u4EF6\u7684\u9009\u9879
  pluginOptions: {
    // ...
  }
}
`,lang:"javascript"})]),_:1})}}};export{g as default};
