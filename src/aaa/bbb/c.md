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
pageClass: custom-page-class
layout: SpecialLayout
---
```
### themeConfig 可自定义
```js
module.exports = {
  themeConfig: {
    enablePrevAndNext: true,
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
#### 导入代码片段
<<< src/.vuepress/config.js{2}

### 使用外部组件
<v-alert
  type="success"
>v-alert</v-alert>


