---
date: '1641092974237'
title: vue-cli svg
description: vue-cli使用svgo svgo-loader svg-sprite-loader处理svg文件，生成svg雪碧图
tags: [svg-sprite-loader svgo svgo-loader]
---

### 安装
```shell
yarn add svg-sprite-loader svgo svgo-loader --dev
```
### 配置
```javascript
chainWebpack: config => {
  // 删除整个rule(会影响到其他svg文件的处理)
  // config.module.rules.delete("svg"); 

  // 或者新增一个rule,这样就不会影响其他的svg文件了
  // const iconPath = path.resolve(__dirname, 'src/components/common/svg-icon/svg')
  // config.module.rule('svg').exclude.add(iconPath)
  // const icon = config.module.rule('svg-icon').test(/\.svg$/)
  // icon.include.add(iconPath)
  // icon.use('svg-sprite-loader')
  // ...

  const svgRule = config.module.rule('svg')
  svgRule.uses.clear() // 作用同上delete
  svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({symbolId: 'icon-[name]'})
    .end()
    .use('svgo-loader') // 主要是简化svg文件，当然你也可以引入svg文件时手动处理
    .loader('svgo-loader')
    .options({
      plugins: [
        {
          name: 'removeAttrs',
          params: { attrs: '(fill|stroke)' },	// 配置参考svgo
        },
      ],
  	})
    .end()
},
```

### 引入svg文件
将svg文件放置在这里`@/assets/svg/`

### 编写组件

`@/components/common/svg-icon/index.js`
```javascript
import Vue from 'vue'
import Icon from './icon'

const requireContext = require.context('@/assets/svg', true, /\.svg$/)
// function importAll (r) {
//   r.keys().forEach(r)
// }
// importAll(requireContext)
requireContext.keys().map(requireContext);
Vue.component('icon', Icon)
```
`@/components/common/svg-icon/icon.vue`
```vue
<template functional>
  <svg :class="`icon-${props.type}`" :style="{transform: `rotate(${props.rotate}deg)`}">
    <use :xlink:href="'#icon-' + props.type"></use>
  </svg>
</template>
<script>
export default {
  // props: { // props可选
  //   type: {
  //     type: String,
  //     required: true,
  //   },
  //   rotate: {
  //     default: '0',
  //   },
  // },
}
</script>
<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  stroke: currentColor;
}
</style>
```

### 引入
`main.js`
```javascript
import '@/components/common/svg-icon/index.js'
```

### 使用
`*.vue`
```vue
<template>
 <icon type="check"></icon>
</template>
```
:::tip
如果svg文件较多，想使用懒加载的话 可以尝试使用 https://mmf-fe.github.io/svgicon/
:::

