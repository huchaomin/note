---
date: '1644673550775'
title: css 选择器
description: css 常用的选择器
tags: [css]
---
### css 常用的选择器
#### div+p
选择所有紧接着`div`元素之后的`p`元素
#### [target]
选择所有带有target属性元素
#### [target=_blank]
选择所有使用target="_blank"的元素
#### [title~=flower]
选择标题属性包含单词"flower"的所有元素  
flower1不行，flower 1可以
#### p:first-letter
选择每一个`p`元素的第一个字母
#### p:first-line
选择每一个`P`元素的第一行
#### p~ul
选择p元素之后的每一个ul元素(必须是同级元素)
#### a[src^="https"]
选择每一个src属性的值以"https"开头的元素
#### a[src$=".pdf"]
选择每一个src属性的值以".pdf"结尾的元素
#### a[src*="44lan"]
选择每一个src属性的值包含子字符串"44lan"的元素
#### p:only-of-type
选择是其父级的唯一p元素
#### p:only-child
选择是其父级的唯一子元素p
#### input:enabled
选择每一个已启用的输入元素
#### input:disabled
选择每一个禁用的输入元素
#### input:checked
选择每个选中的输入元素
#### :read-only
用于匹配设置 "readonly"（只读） 属性的元素
#### :required
用于匹配设置了 "required" 属性的元素
