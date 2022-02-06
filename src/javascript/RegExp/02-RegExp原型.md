---
date: '1644133285832'
title: RegExp 原型属性和方法
description: RegExp 原型属性和方法
tags: [RegExp]
---
### RegExp 原型属性和方法
#### 属性
::: table
属性        | 作用
global     | 是否全文搜索，默认 false，对应修饰符的 g，只读
ignoreCase | 是否大小写敏感，默认 false，对应修饰符 i，只读
multiline  | 是否多行搜索，默认 false，对应修饰符 m，只读
flags      | 返回修饰符，只读
lastIndex  | 当前表达式匹配内容的最后一个字符的下一个位置
source     | 正则表达式的文本字符串
dotAll     | 是否开启dotAll模式，默认 false，对应修饰符 s，只读
sticky     | 搜索是否具有粘性，默认 false，对应修饰符 y，只读
unicode    | 对应修饰符 u，只读
hasIndices | 对应修饰符 d，只读
:::

#### 方法
1. test()
- 测试字符串参数中是否存在匹配正则表达式的字符串
- 如果匹配失败，test() 方法返回 false，并将 lastIndex 重置为 0

::: alert
使用.test的时候如果修饰符有 `g/y`，那么会正则会记住`lastIndex`并在下一次执行的时候从`lastIndex`处开始检测  
即使再次查找的字符串不是原查找字符串时，`lastIndex` 也不会被重置，它依旧会从记录的 `lastIndex` 开始  
如果只是为了测试是否符合正则，可以不用 `g/y`或者每次都重新实例化正则表达式  
:::
```javascript
const reg = /\w/g
console.log(reg.lastIndex)	//	0
console.log(reg.test('aaaa'))	//	true
console.log(reg.test('aaaa'))	//	true
console.log(reg.lastIndex)	//	2

console.log(reg.test('a'))	//	false
console.log(reg.lastIndex)	//	0

console.log(reg.test('a'))	//	true
console.log(reg.lastIndex)	//	1
```

2. exec()
 - 在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
 - 如果匹配失败，exec() 方法返回 null，并将 lastIndex 重置为 0
 - 不设置g修饰符，对一个字符串每次调用exec()永远只返回第一个匹配项。
 - 如果设置了g修饰符，每次调用exec()会在字符串中继续查找新匹配项，所以如果要匹配一个字符串中的所有需要匹配的地方，那么可以设置g修饰符，然后通过循环不断调用exec方法。
 - `lastIndex`规则同上

```javascript
const re = /quick\s(brown).+?(jumps)/ig // 非贪婪模式
const result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog')
```
::: table
对象    | 属性/索引       | 描述                                      | 例子
result | [0]            | 匹配的全部字符串                            | 'Quick Brown Fox Jumps'
result | [1],...[n] | 括号中的分组捕获                            | [1] = Brown  [2] = Jumps
result | index          | 匹配到的字符位于原始字符串的基于0的索引值        | 4
result | input          | 原始字符串                                 | 'The Quick Brown Fox Jumps Over The Lazy Dog'
re     | lastIndex      | 下一次匹配开始的位置                         | 25(没有g的话，就一直是0)
re     | ignoreCase     | 是否使用了 "i" 标记使正则匹配忽略大小写         | true
re     | global         | 是否使用了 "g" 标记来进行全局的匹配.           | true
re     | multiline      | 是否使用了 "m" 标记使正则工作在多行模式         | false
re     | source         | 正则匹配的字符串                            | quick\s(brown).+?(jumps)
:::
例：
```javascript
const re = /a(b|c)/
for (let i = 0; i < 3; i++) {
  re.exec('abcacadaaab')
  console.log(RegExp.$1,RegExp.$2,RegExp.$3)
}
// 无g b,b,b
// 有g b,c,b
```

