---
title: escapeHTML和unescapeHTML
---

## 前言

![escapeHTML](escapeHTML.jpg)

## escapeHTML

将显示结果转成字符实体

### 例如

- 用户在页面中录入（比如输入框） `<script>alert(2);</script>`， js将该内容提交给后端保存
- 显示时，后端将字符串返回前端；js接收到之后：
  - 使用escapeHTML，将字符串转为 `&lt;script&gt;alert(2);&lt;/script&gt;`此时，浏览器将能正确解析，因为浏览器接收到实体字符后，转成对应的尖括号等。
  - 不使用escapeHTML，浏览器一看到<，便认为是html标签的开始，直接把刚才的字符串当脚本执行了，这就是xss漏洞。

## unescapeHTML

将字符实体转成显示结果

### 例如

- 后端将已经转义后的内容显示到页面；比如`&lt;script&gt;alert(2);&lt;/script&gt`;
- js 接到后
  - 使用unescapeHTML，将字符串转为`<script>alert(2);</script>`，挂载到页面，弹出alert
  - 不使用unescapeHTML，则原样输出`<script>alert(2);</script>`，但此时并没有执行

## escape-html

[npm](https://www.npmjs.com/package/html-escaper)

```javascript
import {escape, unescape} from 'html-escaper';

escape('string');
unescape('escaped string');
```
