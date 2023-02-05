---
title: minmax()函数
desc: css3 display:grid minmax()函数基本用法
---
## 兼容性

![row-column40.png](row-column40.png)
[can-i-use-minmax()](https://caniuse.com/?search=minmax)

## 定义

[CSS minmax()函数简介](https://www.zhangxinxu.com/wordpress/2019/11/css-grid-minmax/)
[mozilla](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax)

## 语法

```css
minmax(min, max)
minmax( [ <length> | <percentage> | <flex> | min-content | max-content | auto ] ,
        [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )
```

- `auto` 出现出现在min的参数位置，则作用等同于 `min-content`，如果出现在max参数位置，作用等同于 `max-content`
- `minmax(min, max)` 中，如果min的计算值比max还要大，则max的值会被忽略
- `<flex>` 数据类型不能作为min参数使用
- `minmax` 函数只能用在下面4个CSS属性中: `grid-template-columns`、`grid-template-rows`、`grid-auto-columns`、`grid-auto-rows`
