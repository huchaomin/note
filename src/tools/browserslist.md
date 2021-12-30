---
date: '1640826497826'
title: browserslist
description: browserslist 的作用及详细配置
tags: [browserslist]
---

### 配置方法
1. package.json(推荐写法)
```json
{
  "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ]
}
```
2. browserslistrc 或 browserslist
```yaml
last 1 version
> 1%
maintained node versions
not dead
```

### 使用
上面所说的配置好以后，脚手架工具会自动读取这些配置来转译的 JavaScript 特性和添加需要的 CSS 浏览器前缀  
使用配置的工具有很多
- Autoprefixer
- Babel
- postcss-preset-env
- eslint-plugin-compat
- stylelint-no-unsupported-browser-features
- postcss-normalize
- 等等

### 多配置的应用顺序
- 工具 options，例如 Autoprefixer 工具配置中的 browsers 属性
- BROWSERSLIST 环境变量
- 当前目录或者上级目录的browserslist配置文件
- 当前目录或者上级目录的browserslistrc配置文件
- 当前目录或者上级目录的package.json配置文件里面的browserslist配置项
- 如果上述的配置文件缺失或者其他因素导致未能生成有效的配置，browserslist 将使用默认配置

### 默认值
```yaml
> 0.5%
last 2 versions
Firefox ESR
not dead
```

### vue-cli 自动生成的配置
```yaml
> 1%
last 2 versions
not dead
```
### 配置语义
- `> 5%__` :基于全球使用率统计而选择的浏览器版本范围。>=,<,<=同样适用
- `Firefox ESR` :最新的火狐 ESR（长期支持版） 版本的浏览器
- `dead` :通过last 2 versions筛选的浏览器版本中，全球使用率低于0.5%并且官方声明不在维护或者事实上已经两年没有再更新的版本。目前符合条件的有 IE10,IE_Mob 10,BlackBerry 10,BlackBerry7,OperaMobile 12.1
- `last 2 versions` :每个浏览器最近的两个大版本
- `last 2 Chrome versions` :chrome 浏览器最近的两个版本
- `last 2 major versions` :最近的两个发行版，包括所有的次版本号和补丁版本号变更的浏览器版本
- `not ie <= 8` : 浏览器范围的取反
::: tip
Browserslist 的数据都是来自[Can I Use](https://caniuse.com/)的  
如果你想知道配置语句的查询结果可以使用npx browserslist
:::
```yaml
# npx browserslist
and_chr 96
and_ff 94
and_qq 10.4
and_uc 12.12
android 96
baidu 7.12
chrome 96
chrome 95
opera 81
opera 80
safari 15.1
safari 15
safari 14.1
safari 13.1
samsung 15.0
samsung 14.0
```

#### 参考链接
[https://juejin.cn/post/6844903669524086797](https://juejin.cn/post/6844903669524086797)
