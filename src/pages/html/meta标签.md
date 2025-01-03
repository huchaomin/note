---
title: 常用的html meta标签
---

## charset

设置网页字体编码

```html
<meta charset="utf-8">
```

## X-UA-Compatible(针对ie8及以上）

X-UA-Compatible是自从IE8新加的一个设置，对于IE8以下的浏览器是不识别的。
通过在meta中设置X-UA-Compatible的值，可以指定网页的兼容性模式设置。
在网页中指定的模式优先权高于服务器中(通过HTTP Header)所指定的模式。 (meta tag > http header)

```html
<meta http-equiv="X-UA-Compatible" content="IE=7">
//以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=8">
//以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=edge">
//以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
//指定页面默认首先使用GCF进行渲染，如果未安装GCF再使用最高版本IE进行渲染。
```

## name="renderer"（针对国产双核浏览器）

双核：基于Webkit内核用于常用网站的高速浏览。基于IE的内核用于兼容网银、旧版网站。

```html
<!--若页面需默认用极速核-->
<meta name="renderer" content="webkit">
<!--若页面需默认用ie兼容内核-->
<meta name="renderer" content="ie-comp">
<!--若页面需默认用ie标准内核-->
<meta name="renderer" content="ie-stand">
```

## viewport（针对移动端）

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

## format-detection （格式检测）

主要是有以下几个设置：

- content="telephone=no"
- content="email=no"
- content="address=no"

### telephone

telephone=no就禁止了把数字转化为拨号链接
telephone=yes就开启了把数字转化为拨号链接，要开启转化功能（默认）

### email

email=no禁止作为邮箱地址
email=yes就开启了把文字默认为邮箱地址（默认）

### address

address=no禁止跳转至地图！
address=yes就开启了点击地址直接跳转至地图的功能

## 综上所述,现在常用的

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<!-- 下面可选 -->
<meta name="format-detection" content="telephone=no,email=no,address=no">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="webkit">
```
