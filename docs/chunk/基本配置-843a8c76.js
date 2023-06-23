import{r as u,o as E,c as o,f as t,g as s,aa as a}from"./vendor-e1827163.js";const r=a("h2",{id:"1-vue-config-js-\u57FA\u672C\u914D\u7F6E",class:"doc-heading"},"vue.config.js \u57FA\u672C\u914D\u7F6E",-1),l={__name:"\u57FA\u672C\u914D\u7F6E",setup(c){const A=[{id:"doc-title",title:"vue.config.js \u57FA\u672C\u914D\u7F6E"},{id:"1-vue-config-js-\u57FA\u672C\u914D\u7F6E",title:"1. vue.config.js \u57FA\u672C\u914D\u7F6E"}];return(C,D)=>{const e=u("doc-code"),F=u("doc-page");return E(),o(F,{desc:"vue-cli vue.config.js \u57FA\u672C\u914D\u7F6E",toc:A},{default:t(()=>[r,s(e,{code:"module.exports%20%3D%20%7B%0A%20%20//%20%u9879%u76EE%u90E8%u7F72%u7684%u57FA%u7840%u8DEF%u5F84%0A%20%20//%20%u6211%u4EEC%u9ED8%u8BA4%u5047%u8BBE%u4F60%u7684%u5E94%u7528%u5C06%u4F1A%u90E8%u7F72%u5728%u57DF%u540D%u7684%u6839%u90E8%uFF0C%0A%20%20//%20%u6BD4%u5982%20https%3A//www.my-app.com/%0A%20%20//%20%u5982%u679C%u4F60%u7684%u5E94%u7528%u65F6%u90E8%u7F72%u5728%u4E00%u4E2A%u5B50%u8DEF%u5F84%u4E0B%uFF0C%u90A3%u4E48%u4F60%u9700%u8981%u5728%u8FD9%u91CC%0A%20%20//%20%u6307%u5B9A%u5B50%u8DEF%u5F84%u3002%u6BD4%u5982%uFF0C%u5982%u679C%u4F60%u7684%u5E94%u7528%u90E8%u7F72%u5728%0A%20%20//%20https%3A//www.foobar.com/my-app/%0A%20%20//%20%u90A3%u4E48%u5C06%u8FD9%u4E2A%u503C%u6539%u4E3A%20%60/my-app/%60%0A%20%20//%20Vue%20CLI%203.3%20%u8D77%u5DF2%u5F03%u7528baseUrl%uFF0C%u8BF7%u4F7F%u7528publicPath%0A%20%20baseUrl%3A%20%27/%27%2C%0A%20%20//%20%u751F%u4EA7%u73AF%u5883%u662F%u5426%u8981%u751F%u6210%20sourceMap%0A%20%20productionSourceMap%3A%20false%0A%20%20//%20%u662F%u5426%u9700%u8981%u81EA%u5DF1%u7F16%u8BD1template%u8BED%u6CD5%0A%20%20runtimeCompiler%3A%20false%2C%0A%20%20//%20%u90E8%u7F72%u5E94%u7528%u5305%u65F6%u7684%u57FA%u672C%20URL%2C%u7528%u6CD5%u548C%20webpack%20%u672C%u8EAB%u7684%20output.publicPath%20%u4E00%u81F4%0A%20%20publicPath%3A%20%27./%27%2C%0A%20%20//%20build%20%u65F6%u8F93%u51FA%u7684%u6587%u4EF6%u76EE%u5F55%0A%20%20outputDir%3A%20%27dist%27%2C%0A%20%20//%20%u653E%u7F6E%u9759%u6001%u6587%u4EF6%u5939%u76EE%u5F55%0A%20%20assetsDir%3A%20%27assets%27%2C%0A%20%20//%20%u662F%u5426%u5728%u4FDD%u5B58%u7684%u65F6%u5019%u4F7F%u7528%20%60eslint-loader%60%20%u8FDB%u884C%u68C0%u67E5%u3002%0A%20%20//%20%u6709%u6548%u7684%u503C%uFF1A%60ture%60%20%7C%20%60false%60%20%7C%20%60%22error%22%60%0A%20%20//%20%u5F53%u8BBE%u7F6E%u4E3A%20%60%22error%22%60%20%u65F6%uFF0C%u68C0%u67E5%u51FA%u7684%u9519%u8BEF%u4F1A%u89E6%u53D1%u7F16%u8BD1%u5931%u8D25%u3002%0A%20%20lintOnSave%3A%20true%2C%0A%20%20//%20babel-loader%20%u9ED8%u8BA4%u4F1A%u8DF3%u8FC7%20node_modules%20%u4F9D%u8D56%u3002%0A%20%20//%20%u901A%u8FC7%u8FD9%u4E2A%u9009%u9879%u53EF%u4EE5%u663E%u5F0F%u8F6C%u8BD1%u4E00%u4E2A%u4F9D%u8D56%u3002%0A%20%20transpileDependencies%3A%20%5B/*%20string%20or%20regex%20*/%5D%2C%0A%20%20css%3A%20%7B%0A%20%20%20%20//%20%u5C06%u7EC4%u4EF6%u5185%u7684%20CSS%20%u63D0%u53D6%u5230%u4E00%u4E2A%u5355%u72EC%u7684%20CSS%20%u6587%u4EF6%20%28%u53EA%u7528%u5728%u751F%u4EA7%u73AF%u5883%u4E2D%29%0A%20%20%20%20//%20%u4E5F%u53EF%u4EE5%u662F%u4E00%u4E2A%u4F20%u9012%u7ED9%20%60extract-text-webpack-plugin%60%20%u7684%u9009%u9879%u5BF9%u8C61%0A%20%20%20%20extract%3A%20true%2C%0A%20%20%20%20//%20%u5F00%u542F%20CSS%20source%20maps%3F%20@vue/cli%u9ED8%u8BA4%u4E3Afalse%0A%20%20%20%20sourceMap%3A%20false%2C%0A%20%20%20%20//%20%u4E3A%u9884%u5904%u7406%u5668%u7684%20loader%20%u4F20%u9012%u81EA%u5B9A%u4E49%u9009%u9879%u3002%u6BD4%u5982%u4F20%u9012%u7ED9%0A%20%20%20%20//%20sass-loader%20%u65F6%uFF0C%u4F7F%u7528%20%60%7B%20sass%3A%20%7B%20...%20%7D%20%7D%60%u3002%0A%20%20%20%20loaderOptions%3A%20%7B%7D%2C%0A%20%20%20%20//%20%u4E3A%u6240%u6709%u7684%20CSS%20%u53CA%u5176%u9884%u5904%u7406%u6587%u4EF6%u5F00%u542F%20CSS%20Modules%u3002%0A%20%20%20%20//%20%u8FD9%u4E2A%u9009%u9879%u4E0D%u4F1A%u5F71%u54CD%20%60*.vue%60%20%u6587%u4EF6%u3002%0A%20%20%20%20modules%3A%20false%2C%0A%20%20%7D%2C%0A%20%20devServer%3A%20%7B%0A%20%20%20%20host%3A%20%27localhost.hihonor.com%27%2C%0A%20%20%20%20port%3A%20%278888%27%2C%0A%20%20%20%20proxy%3A%20%7B%0A%20%20%20%20%20%20%27/hus%27%3A%20%7B%0A%20%20%20%20%20%20%20%20target%3A%20%27http%3A//uat.digital.hihonor.com%27%2C%0A%20%20%20%20%20%20%20%20changeOrigin%3A%20true%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20overlay%3A%20%7B%20%20//%20%u5728%u9875%u9762%u663E%u793A%u9519%u8BEF%u4FE1%u606F%0A%20%20%20%20%20%20warnings%3A%20true%2C%0A%20%20%20%20%20%20errors%3A%20true%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20chainWebpack%3A%20config%20%3D%3E%20%7B%0A%20%20%20//%20%u79FB%u9664%20prefetch%20%u63D2%u4EF6%28prefetch%29%u4F1A%u9020%u6210%u4E24%u6B21%u52A0%u8F7D%0A%20%20%20%20config.plugins.delete%28%27prefetch%27%29%0A%20%20%7D%2C%0A%20%20//%20%u5728%u751F%u4EA7%u73AF%u5883%u4E0B%u4E3A%20Babel%20%u548C%20TypeScript%20%u4F7F%u7528%20%60thread-loader%60%0A%20%20//%20%u5728%u591A%u6838%u673A%u5668%u4E0B%u4F1A%u9ED8%u8BA4%u5F00%u542F%u3002%0A%20%20parallel%3A%20require%28%27os%27%29.cpus%28%29.length%20%3E%201%2C%0A%20%20//%20PWA%20%u63D2%u4EF6%u7684%u9009%u9879%u3002%0A%20%20//%20%u67E5%u9605%20https%3A//github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md%0A%20%20pwa%3A%20%7B%7D%2C%0A%20%20%20//%20%u4E09%u65B9%u63D2%u4EF6%u7684%u9009%u9879%0A%20%20pluginOptions%3A%20%7B%0A%20%20%20%20//%20...%0A%20%20%7D%0A%7D%0A",lang:"javascript"})]),_:1})}}};export{l as default};
