import{r as o,o as d,c as i,f as a,g as c,ac as e,v as s}from"./vendor.js";const u=e("h2",{id:"1-\u67E5\u770Bwebpack\u5B8C\u6574\u914D\u7F6E",class:"doc-heading"},"\u67E5\u770Bwebpack\u5B8C\u6574\u914D\u7F6E",-1),p=e("h2",{id:"2-\u67E5\u770Brules",class:"doc-heading"},"\u67E5\u770Brules",-1),r=e("h2",{id:"3-\u67E5\u770B\u67D0\u4E00\u4E2Arule",class:"doc-heading"},"\u67E5\u770B\u67D0\u4E00\u4E2Arule",-1),g=e("h2",{id:"4-\u67E5\u770Bplugins",class:"doc-heading"},"\u67E5\u770Bplugins",-1),h=e("h2",{id:"5-\u67E5\u770B\u67D0\u4E00\u4E2Aplugin",class:"doc-heading"},"\u67E5\u770B\u67D0\u4E00\u4E2Aplugin",-1),_=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[s("\u4E5F\u53EF\u4EE5\u901A\u8FC7"),e("code",{class:"doc-token"},"vue ui"),s("\u547D\u4EE4\u6253\u5F00\u53EF\u89C6\u5316\u5DE5\u5177\u67E5\u770Bwebpack\u5B8C\u6574\u914D\u7F6E")])],-1),w={__name:"\u67E5\u770Bwebpack\u914D\u7F6E",setup(v){const l=[{id:"doc-title",title:"\u67E5\u770Bvue.config.js\u6700\u7EC8\u7684webpack\u914D\u7F6E"},{id:"1-\u67E5\u770Bwebpack\u5B8C\u6574\u914D\u7F6E",title:"1. \u67E5\u770Bwebpack\u5B8C\u6574\u914D\u7F6E"},{id:"2-\u67E5\u770Brules",title:"2. \u67E5\u770Brules"},{id:"3-\u67E5\u770B\u67D0\u4E00\u4E2Arule",title:"3. \u67E5\u770B\u67D0\u4E00\u4E2Arule"},{id:"4-\u67E5\u770Bplugins",title:"4. \u67E5\u770Bplugins"},{id:"5-\u67E5\u770B\u67D0\u4E00\u4E2Aplugin",title:"5. \u67E5\u770B\u67D0\u4E00\u4E2Aplugin"}];return(m,f)=>{const n=o("doc-code"),t=o("doc-page");return d(),i(t,{desc:"\u67E5\u770Bvue.config.js\u6700\u7EC8\u7684webpack\u914D\u7F6E",toc:l},{default:a(()=>[u,c(n,{code:`vue inspect > webpack_config.json
`,lang:"shell"}),p,c(n,{code:`vue inspect --rules
# [
#   'vue',
#   'images',
#   'svg',
#   'media',
#   'fonts',
#   'pug',
#   'css',
#   'postcss',
#   'scss',
#   'sass',
#   'less',
#   'stylus',
#   'js',
#   'eslint'
# ]
`,lang:"shell"}),r,c(n,{code:`vue inspect --rule vue
# /* config.module.rule('vue') */
# {
#   test: /\\.vue$/,
#     use: [
#       /* config.module.rule('vue').use('cache-loader') */
#       {
#         loader: 'D:\\\\code\\\\vue2.x-template\\\\node_modules\\\\cache-loader\\\\dist\\\\cjs.js',
#         options: {
#           cacheDirectory: 'D:\\\\code\\\\vue2.x-template\\\\node_modules\\\\.cache\\\\vue-loader',
#           cacheIdentifier: '71fc4326'
#         }
#       },
#       /* config.module.rule('vue').use('vue-loader') */
#       {
#         loader: 'D:\\\\code\\\\vue2.x-template\\\\node_modules\\\\vue-loader\\\\lib\\\\index.js',
#         options: {
#           compilerOptions: {
#             whitespace: 'condense'
#           },
#           cacheDirectory: 'D:\\\\code\\\\vue2.x-template\\\\node_modules\\\\.cache\\\\vue-loader',
#           cacheIdentifier: '71fc4326'
#         }
#       }
#     ]
# }
`,lang:"shell"}),g,c(n,{code:`vue inspect --plugins
# [
#   'vue-loader',
#   'define',
#   'case-sensitive-paths',
#   'friendly-errors',
#   'html',
#   'preload',
#   'copy'
# ]
`,lang:"shell"}),h,c(n,{code:`vue inspect --plugin vue-loader
# /* config.plugin('vue-loader') */
# new VueLoaderPlugin()
`,lang:"shell"}),_]),_:1})}}};export{w as default};
