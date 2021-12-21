- 谷歌分析
- 404
- 最后更新时间
- Algolia 搜索
- seo
- faicon
- 关于我
- 部署
- 字体优化
- pwa
- 上一篇，下一篇
- 排序
- 双击事件
### yaml 可自定义
```yaml
---
pageClass: custom-page-class // 给页面添加特殊class
layout: SpecialLayout // 自定义页面布局
---
```
### themeConfig 可自定义
```js
module.exports = {
  themeConfig: {
    enablePrevAndNext: true, // 是否开启上一篇，下一篇
  }
}
```

``` js {4,5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
#### 导入代码片段（无法使用路径别名）【也可以导入代码当中一部分】
<<< src/.vuepress/config.js{2}

### 使用外部组件
<v-alert
  type="success"
>v-alert</v-alert>


