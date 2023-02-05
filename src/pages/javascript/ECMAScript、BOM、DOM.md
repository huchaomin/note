---
title: ECMAScript、BOM、DOM
---

## javascript

### 组成

- ECMAScript，描述了该语言的语法和基本对象，如类型、运算、流程控制、面向对象、异常等。
- 文档对象模型（DOM），描述处理网页内容的方法和接口。
- 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口。

### 特点

- 解释型的脚本语言。JavaScript是一种解释型的脚本语言,C、C++等语言先编译后执行,而JavaScript是在程序的运行过程中逐行进行解释。
基于对象。JavaScript是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。
- 简单。JavaScript语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,是基于Java基本语句和控制的脚本语言,其设计简单紧凑。
- 动态性。JavaScript是一种采用事件驱动的脚本语言,它不需要经过Web服务器就可以对用户的输入做出响应。在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作JavaScript都可直接对这些事件给出相应的响应。
- 跨平台性。JavaScript脚本语言不依赖于操作系统,仅需要浏览器的支持。因此一个JavaScript脚本在编写后可以带到任意机器上使用,前提上机器上的浏览器支 持JavaScript脚本语言,目前JavaScript已被大多数的浏览器所支持。

## ECMAScript （JavaScript核心与语法）

### 定义

- ECMAScript是一个标准（欧洲计算机制造商协会），JavaScript只是它的一个实现，其他实现包括ActionScript（Flash脚本）
- ECMAScript可以为不同种类的宿主环境提供核心的脚本编程能力，即ECMAScript不与具体的宿主环境相绑定，如JavaScript的宿主环境是浏览器，AS的宿主境是Flash。
- ECMAScript描述了以下内容：语法、类型、语句、关键字、保留字、运算符、对象等

## BOM

![bom](bom.png)

### 定义

BOM(Browser Object Model) 即浏览器对象模型，主要是指一些浏览器内置对象如：window、location、navigator、screen、history等对象，用于完成一些操作浏览器的特定API。

- BOM提供了独立于内容而与浏览器窗口进行交互的对象
- BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C

### api一览

![bom-api](bom-api.png)

## DOM

DOM（文档对象模型）是针对HTML和XML文档的一个API，通过DOM可以去改变文档。
DOM模型将整个文档（XML文档和HTML文档）看成一个树形结构，并用document对象表示该文档。

![dom](dom-tree.gif)
