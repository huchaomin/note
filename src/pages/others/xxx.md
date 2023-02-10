---
title: 其他小知识
---

## 换行符'\n'和回车符'\r'的区别

- 在控制台程序里，回车的本意是将光标移动到屏幕最左边（此时光标的横坐标没有变）
- 换行就是将光标移动到下一行（此时光标的纵坐标没有变），两者结合起来就实现了回车（省略说法）效果。

## autolinker

```javascript
// [Text you want to see](http://url-goes-here.com)

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 * Reach Lea at fake@email.com (no, not really)
 * And this is a Markdown link. Sweet, huh?
 */
var foo = 5;
// And a single line comment http://google.com
```

`inline code`
