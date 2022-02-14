---
date: '1644743773989'
title: js new 操作符
description: js new 操作符的简单理解
tags: [Object]
---
### new 操作符
#### 作用
1. 创建一个空对象
2. 然后让这个空对象的__proto__指向函数的原型prototype
3. 执行构造函数中的代码，构造函数中的this指向该对象
4. 如果构造函数有返回值，则以该对象作为返回值。若没有return或return了基本类型，则将新对象作为返回值
