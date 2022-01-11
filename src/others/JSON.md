---
date: '1641700105025'
title: JSON
description: JSON 是啥
tags: [JSON]
---

### 什么是 JSON
JSON 是一种轻量级的数据格式，他基于 javascript 语法的子集，即数组和对象表示。   
因此JSON 定义可以包含在javascript 文件中，对其的访问无需通过基于 XML 的语言来额外解析。

###  数组字面量
数组字面量，是用一对方括号括起一组用逗号隔开的 javascript 值
```javascript
const aNames = ["hello", 12, true , null]
```

### 对象字面量
对象字面量，是通过两个花括号来定义的。在花括号内可以放置任意数量的“名称-值”对，定义格式字符串值。  
除了最后一行外，每个“名称-值”对后必须有一个逗号
```javascript
const oCar = {
  "color": "red",       
  "doors" : 4,
  "paidFor" : true
}
```

### 混合字面量
我们可以混用对象和数组字面量，来创建一个对象数组，或一个包含数组的对象。
```javascript
const oCars = [
  {
    "color": "red",       
    "doors" : 4,
    "paidFor" : true,
  },
  {
    "color": "green",       
    "doors" : 4,
    "paidFor" : false,
  }
]
```

### JSON 语法
在Ajax应用中，就是服务器直接生成javascript语句，客户端获取后直接用eval方法来获得这个对象，这样就可以省去解析XML的性能损失。
#### json格式的key必须为双引号
`'{"a":"b"}'`为json字符窜  
`"{'a':'b'}"`不为json字符窜
```javascript
var str = '[{"color":"red","doors":4,"paidFor":true},{"color":"green","doors":4,"paidFor":false}]'
var obj = JSON.parse(str)
// var obj = eval("(" + str + ")")（有安全隐患）
var JSONStr = JSON.stringify(obj)
console.log(JSONStr === str) // true
```

#### 为什么eval要添加括号呢？
1. 由于json是以{}的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。
2. 加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式(expression)转化为对象，而不是作为语句(statement)来执行。

举一个例子，例如对象字面量{}，如若不加外层的括号，那么eval会将大括号识别为JavaScript代码块的开始和结束标记，那么{}将会被认为是执行了一句空语句。

```javascript
console.log(eval("{}") // undefined 
console.log(eval("({})") // object[Object]
```
3. 如果清楚最外层时数组的话就可以不用加括号
```javascript
console.log(eval("[]")) // []
```

