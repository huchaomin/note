import{r as e,o as c,c as d,f as i,g as t,a8 as n,v as l}from"./vendor.js";const h=n("h2",{id:"1-\u5E38\u7528",class:"doc-heading"},"\u5E38\u7528",-1),m=n("h2",{id:"2-\u4EE5\u4E0B\u53EF\u9009",class:"doc-heading"},"\u4EE5\u4E0B\u53EF\u9009",-1),f=n("h2",{id:"3-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),_={__name:"reset",setup(p){const a=[{id:"doc-title",title:"css \u5E38\u7528\u7684css reset"},{id:"1-\u5E38\u7528",title:"1. \u5E38\u7528"},{id:"2-\u4EE5\u4E0B\u53EF\u9009",title:"2. \u4EE5\u4E0B\u53EF\u9009"},{id:"3-\u53C2\u8003\u6587\u732E",title:"3. \u53C2\u8003\u6587\u732E"}];return(b,g)=>{const o=e("doc-code"),r=e("doc-link"),s=e("doc-page");return c(),d(s,{desc:"\u603B\u7ED3\u7684 css reset",toc:a},{default:i(()=>[h,t(o,{code:`/**
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
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
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
`,lang:"css"}),m,t(o,{code:`*,
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
`,lang:"css"}),f,n("p",null,[t(r,{to:"https://ageek.dev/css-resets"},{default:i(()=>[l("https://ageek.dev/css-resets")]),_:1})])]),_:1})}}};export{_ as default};
