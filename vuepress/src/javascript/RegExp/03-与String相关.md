---
date: '1644140860995'
title: String 里 RegExp 实例的应用 
description: String 里 RegExp 实例的应用
tags: [RegExp]
---
### String 里 RegExp 实例的应用
#### [`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)

- 返回第一个匹配项的在字符串中的位置索引。否则将返回-1
- 不执行全局匹配，它将忽略修饰符g，并且总是从字符串的开始进行检索

```javascript
'abc'.search(/a/)	// 0
/a/[Symbol.search]('abc')	// 0
```

#### [`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- 方法切割 String 对象为一个其子字符串的数组

```javascript
'a-b-c'.split(/-/)	//	["a", "b", "c"]
/-/[Symbol.split]('a-b-c')	//	["a", "b", "c"]
```

#### [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- 返回整个匹配结果(有g)，和通过捕获组匹配到的结果组成的数组(没有g)，如果没有匹配到则返回null

```javascript
'abc'.match(/a/g)	//	["a"]【有g】

/a/[Symbol.match]('abc') // 【无g】
// 0: "a"
// groups: undefined
// index: 0
// input: "abc"
// length: 1
// __proto__: Array(0)
```

#### [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

- 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
- 必须是设置了全局模式 g 的形式,否则会抛出异常 TypeError

```javascript
'abca'.matchAll(/a/g)	//	RegExpStringIterator {}
/a/[Symbol.matchAll]('abc')	//	RegExpStringIterator {}
```

#### [`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- 返回用替换器替换相应匹配项后的新字符串

```javascript
'abca'.replace(/a/g, 'A')	//	'AbcA'
/a/[Symbol.replace]('abc', 'A')	//	'Abc'
```

```javascript
function validateMobile (str) {
  return /^[1][0-9]{10}$/.test(str) && str.replace(/(\d{3})(\d{4})(\d{4})/, function (rs, $1, $2, $3) {
    console.log(arguments)
    return `${ $1 }****${ $3 }`
  })
  // return /^[1][0-9]{10}$/.test(str) && str.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$2')	// 这里自带字符窜替换
}
console.log(validateMobile('13590199192'))
// [Arguments] {
//   '0': '13590199192',
//   '1': '135',
//   '2': '9019',
//   '3': '9192',
//   '4': 0,	//	index
//   '5': '13590199192'	//	input
// }
// 135****9192
```
