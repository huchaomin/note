---
date: '1642823810087'
title: html特性与dom属性
description: html特性(attribute)与dom属性(property)祥解
tags: [html dom]
---

### HTML attribute(特性) 和 DOM property(属性)

当我们书写一段代码的时候
```html
<input id="name" value="qwerty" />
```
我们写了一个 input 标签，并给他定义了 2 个特性 (id 和 value)  
当浏览器解析这段代码的时候，会把 html 源码解析为 DOM 对象，确切的说是解析为 `HTMLInputElement` 对象。`HTMLInputElement` 的继承关系是：
```
HTMLInputElement
  ↓
HTMLElement
  ↓
Element
  ↓
Node
  ↓
EventTarget
  ↓
Object
```
 - 当浏览器解析网页时，将 HTML 特性映射为了 DOM 属性
 - 而 Element 类还有一个 attributes 属性，里面包含了所有的特性
 - HTML attribute 和 DOM property 并不总是一对一的关系

#### DOM 属性
DOM 是一个继承自 Object 的常规 JavaScript 对象，因此我们可以像操作任何 JS 对象那样来操作 DOM 对象
```javascript
const el = document.getElementById('name')
el.foo = 'bar'
el.user = { name: 'jjc', age: '18'}
```
#### DOM 属性
和 DOM 属性类似，除了那些规范里定义的标准特性外，HTML 也可以添加非标准的属性
```html
<input id="name" value="qwerty" foo="bar"/>
```
当 HTML 特性映射为 DOM 属性时，只映射标准属性，**访问非标准属性将得到 undefined**
```javascript
const el = document.getElementById('name')
el.foo === undefined
```
#### HTML 特性与DOM 属性之间的联系
1. DOM 对象也提供了操作HTML 特性的 API(定义在 Element 上):
   - `elem.hasAttribute(name)` : 判断某个特性是否存在
   - `elem.getAttribute(name)` : 获取指定特性的值
   - `elem.setAttribute(name, value)` : 设置指定特性的值
   - `elem.removeAttribute(name)` : 移除指定特性
   ::: alert 根据 HTML 规范，标签以及特性名是不区分大小写的，因此以下代码是一样的
   el.getAttribute('id')  
   el.getAttribute('ID')  
   :::
2. 特性永远都是字符串或 null
   ```javascript
   el.getAttribute('checked') === '' // 特性是字符串
   el.checked === false              // 属性是 boolean 类型的值
        
   el.getAttribute('style') === 'color:blue' // 特性是字符串
   typeof el.style === 'object'              // 属性是 CSSStyleDeclaration 对象
   ```
3. 即使都是字符串，属性和特性也可能不同，例如
   ```javascript
   el.getAttribute('href') === '#tag' // 特性原样返回 html 设置的值
   el.href === 'http://jjc.fun#tag'   // 属性返回解析后的完整 uri
   ```
4. 当**标准的**特性(包括data-)更新时，对应的属性也会更新；反之亦然
   ```javascript
   document.body.setAttribute('id', 'aa')
   document.body.id // 'aa'
   document.body.id = 'bb'
   document.body.getAttribute('id') // 'bb'
   ```
   但是 input.value 的同步是单向的，只是 attribute --> property(textarea没测试)
   ```javascript
   el.setAttribute('value', 'jjc')   // 修改特性  
   el.value === 'jjc'                // 属性也更新了    
   
   el.value = 'newValue'              // 修改属性   
   el.getAttribute('value') === 'jjc' // 特性没有更新  
   ```
5. 非标准 HTML 特性并不会自动映射为 DOM 属性
   ```javascript
   <div age="18">justjavac</div>
   div.age = undefined
   ```
6. 当我们使用 data- 开头的特性时，会映射到 DOM 的 dataset 属性。中划线格式会变成驼峰格式：
   ```javascript
   el.setAttribute('data-my-name', 'hcm')
   el.dataset.myName === 'hcm' // true
   ```
