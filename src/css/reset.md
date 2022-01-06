---
date: '1641475372027'
title: css 常用的css reset
description: 总结的 css reset
tags: [css reset]
---

### 常用的几个标签的样式reset
```css
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}
/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: .8em;
}
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
```

### 以下可选
```css
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  background-repeat: no-repeat; /* 2 */
}

img,video{
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ul{
  list-style: none;
}
```

#### 参考文献
[https://ageek.dev/css-resets](https://ageek.dev/css-resets)
