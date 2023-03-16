---
title: 本博客的一些功能展示和易忘记的 markdown 语法
---

## autolinker 和 line-numbers

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

## inline-color 和 previewers

```css
.a{
  color: red;
}
.example-angle {
  transform: rotate(10deg);
}
```

## treeview

```treeview
├── a first folder/
|   ├── holidays.mov
|   ├── javascript-file.js
|   └── some_picture.jpg
├── documents/
|   ├── spreadsheet.xls
|   ├── manual.pdf
|   ├── document.docx
|   └── presentation.ppt
└── etc.
```

## markdown-it-task-lists

- [ ] Mercury
- [x] Venus
- [x] Earth
- [x] Mars
- [ ] Jupiter
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## match-braces 和 rainbow-braces

```js
(defun factorial (n)
 (if (= n 0) 1
  (* n (factorial (- n 1)))))
```
