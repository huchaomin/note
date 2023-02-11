# 我的笔记空间

## @quasar/fastclick

```javascript
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone) {
  import('@quasar/fastclick')
}
```

## todo

- iconSet 定义自己的图标，并嵌合到index.html中
- 搞明白index.html中各个标签的意思
- .stylintrc 这个文件干啥的
- eslint-plugin-quasar
- package.json 中的插件都有什么用
- 消除 todo
- SurveyCountdown.vue 倒计时组件
- iconSet: 'svg-mdi-v6' 看看能不能整合到 svg-symbols
- masterComponent: markRaw({}) ? markRaw 一个component
- import { withDirectives } from 'vue'; 这个为什么识别不出来
- Object(o): <https://segmentfault.com/q/1010000007902095>
- import { EventBus } from 'quasar'  // lts 里面不需要引入
- eslint-plugin-markdown
- markdown-it-task-lists
- 参考文献
- font-size
- 验证addressbarColor
