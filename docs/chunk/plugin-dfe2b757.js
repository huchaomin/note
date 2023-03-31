import{r as u,o as t,c as s,f as p,g as c,aa as e,v as a}from"./vendor-c85df83a.js";const l=e("h2",{id:"1-\u672C\u8D28",class:"doc-heading"},"\u672C\u8D28",-1),r=e("p",null,[a("\u662F\u4E00\u4E2A\u5177\u6709 apply \u65B9\u6CD5\u7684 JavaScript \u5BF9\u8C61"),e("br"),a(" apply \u65B9\u6CD5\u4F1A\u88AB webpack compiler \u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8BBF\u95EE compiler \u5BF9\u8C61")],-1),d=e("h2",{id:"2-\u7528\u6CD5",class:"doc-heading"},"\u7528\u6CD5",-1),A=e("h2",{id:"3-\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",class:"doc-heading"},"\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",-1),g=e("h2",{id:"4-node-api-\u65B9\u5F0F",class:"doc-heading"},"Node API \u65B9\u5F0F",-1),_=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"\u5982\u679C\u63D2\u4EF6\u4E2D\u4F7F\u7528\u4E86 webpack-sources \u7684 package\uFF0C\u8BF7\u4F7F\u7528 require(\u2018webpack\u2019).sources \u66FF\u4EE3 require(\u2018webpack-sources\u2019)\uFF0C\u4EE5\u907F\u514D\u6301\u4E45\u7F13\u5B58\u7684\u7248\u672C\u51B2\u7A81")],-1),D={__name:"plugin",setup(k){const i=[{id:"doc-title",title:"webpack plugin"},{id:"1-\u672C\u8D28",title:"1. \u672C\u8D28"},{id:"2-\u7528\u6CD5",title:"2. \u7528\u6CD5"},{id:"3-\u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6",title:"3. \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6"},{id:"4-node-api-\u65B9\u5F0F",title:"4. Node API \u65B9\u5F0F"}];return(B,m)=>{const o=u("doc-code"),n=u("doc-page");return t(),s(n,{desc:"webpack plugin \u8BE6\u89E3",toc:i},{default:p(()=>[l,r,c(o,{code:"const%20pluginName%20%3D%20%27ConsoleLogOnBuildWebpackPlugin%27%3B%0Aclass%20ConsoleLogOnBuildWebpackPlugin%20%7B%0A%20%20apply%28compiler%29%20%7B%0A%20%20%20%20compiler.hooks.run.tap%28pluginName%2C%20compilation%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log%28%27webpack%20%u6784%u5EFA%u8FC7%u7A0B%u5F00%u59CB%27%29%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%0A%7D%0Amodule.exports%20%3D%20ConsoleLogOnBuildWebpackPlugin%0A//%20compiler%20hook%20%u7684%20tap%20%u65B9%u6CD5%u7684%u7B2C%u4E00%u4E2A%u53C2%u6570%uFF0C%u5E94%u8BE5%u662F%u9A7C%u5CF0%u5F0F%u547D%u540D%u7684%u63D2%u4EF6%u540D%u79F0%u3002%0A//%20%u5EFA%u8BAE%u4E3A%u6B64%u4F7F%u7528%u4E00%u4E2A%u5E38%u91CF%uFF0C%u4EE5%u4FBF%u5B83%u53EF%u4EE5%u5728%u6240%u6709%20hook%20%u4E2D%u91CD%u590D%u4F7F%u7528%0A",lang:"javascript"}),d,c(o,{code:"const%20HtmlWebpackPlugin%20%3D%20require%28%27html-webpack-plugin%27%29%0A//%20%20...%0Aplugins%3A%20%5B%0A%20%20new%20HtmlWebpackPlugin%28%7Btemplate%3A%20%27./src/index.html%27%7D%29%0A%5D%0A",lang:"javascript"}),A,c(o,{code:"const%20webpack%20%3D%20require%28%27webpack%27%29%0A//%20...%0Aplugins%3A%20%5B%0A%20%20new%20webpack.ProgressPlugin%28%29%0A%5D%0A",lang:"javascript"}),g,c(o,{code:"const%20webpack%20%3D%20require%28%27webpack%27%29%20//%20%u8BBF%u95EE%20webpack%20%u8FD0%u884C%u65F6%28runtime%29%0Aconst%20configuration%20%3D%20require%28%27./webpack.config.js%27%29%0A%0Alet%20compiler%20%3D%20webpack%28configuration%29%0Anew%20webpack.ProgressPlugin%28%29.apply%28compiler%29%0Acompiler.run%28function%28err%2C%20stats%29%20%7B%0A%20%20//%20...%0A%7D%29%0A",lang:"javascript"}),_]),_:1})}}};export{D as default};