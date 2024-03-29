---
title: 查看vue.config.js最终的webpack配置
desc: 查看vue.config.js最终的webpack配置
---

## 查看webpack完整配置

```sh
vue inspect > webpack_config.json
```

## 查看rules

```sh
vue inspect --rules
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
```

## 查看某一个rule

```sh
vue inspect --rule vue
# /* config.module.rule('vue') */
# {
#   test: /\.vue$/,
#     use: [
#       /* config.module.rule('vue').use('cache-loader') */
#       {
#         loader: 'D:\\code\\vue2.x-template\\node_modules\\cache-loader\\dist\\cjs.js',
#         options: {
#           cacheDirectory: 'D:\\code\\vue2.x-template\\node_modules\\.cache\\vue-loader',
#           cacheIdentifier: '71fc4326'
#         }
#       },
#       /* config.module.rule('vue').use('vue-loader') */
#       {
#         loader: 'D:\\code\\vue2.x-template\\node_modules\\vue-loader\\lib\\index.js',
#         options: {
#           compilerOptions: {
#             whitespace: 'condense'
#           },
#           cacheDirectory: 'D:\\code\\vue2.x-template\\node_modules\\.cache\\vue-loader',
#           cacheIdentifier: '71fc4326'
#         }
#       }
#     ]
# }
```

## 查看plugins

```sh
vue inspect --plugins
# [
#   'vue-loader',
#   'define',
#   'case-sensitive-paths',
#   'friendly-errors',
#   'html',
#   'preload',
#   'copy'
# ]
```

## 查看某一个plugin

```sh
vue inspect --plugin vue-loader
# /* config.plugin('vue-loader') */
# new VueLoaderPlugin()
```

::: tip
也可以通过`vue ui`命令打开可视化工具查看webpack完整配置
:::
