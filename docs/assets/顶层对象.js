import{r as t,o as s,c,f as r,g as l,a9 as n,v as e}from"./vendor.js";const a=n("h2",{id:"1-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),u=n("ol",null,[n("li",null,"\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u6307\u7684\u662Fwindow\u5BF9\u8C61\uFF0C\u5728 Node \u6307\u7684\u662Fglobal\u5BF9\u8C61, Web Worker \u91CC\u9762\u6307\u7684\u662Fself\u5BF9\u8C61\u3002"),n("li",null,"ES5 \u4E4B\u4E2D\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u5168\u5C40\u53D8\u91CF\u662F\u7B49\u4EF7\u7684\u3002"),n("li",null,"\u56E0\u6B64\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u8D4B\u503C\u4E0E\u5168\u5C40\u53D8\u91CF\u7684\u8D4B\u503C\uFF0C\u662F\u540C\u4E00\u4EF6\u4E8B")],-1),f=n("p",null,"\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u5168\u5C40\u53D8\u91CF\u6302\u94A9\uFF0C\u88AB\u8BA4\u4E3A\u662F JavaScript \u8BED\u8A00\u6700\u5927\u7684\u8BBE\u8BA1\u8D25\u7B14\u4E4B\u4E00:",-1),_=n("ul",null,[n("li",null,"\u8FD9\u6837\u7684\u8BBE\u8BA1\u5E26\u6765\u4E86\u51E0\u4E2A\u5F88\u5927\u7684\u95EE\u9898\uFF0C\u9996\u5148\u662F\u6CA1\u6CD5\u5728\u7F16\u8BD1\u65F6\u5C31\u62A5\u51FA\u53D8\u91CF\u672A\u58F0\u660E\u7684\u9519\u8BEF\uFF0C\u53EA\u6709\u8FD0\u884C\u65F6\u624D\u80FD\u77E5\u9053\uFF08\u56E0\u4E3A\u5168\u5C40\u53D8\u91CF\u53EF\u80FD\u662F\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u521B\u9020\u7684\uFF0C\u800C\u5C5E\u6027\u7684\u521B\u9020\u662F\u52A8\u6001\u7684\uFF09\uFF1B"),n("li",null,"\u5176\u6B21\uFF0C\u7A0B\u5E8F\u5458\u5F88\u5BB9\u6613\u4E0D\u77E5\u4E0D\u89C9\u5730\u5C31\u521B\u5EFA\u4E86\u5168\u5C40\u53D8\u91CF\uFF08\u6BD4\u5982\u6253\u5B57\u51FA\u9519\uFF09\uFF1B"),n("li",null,"\u6700\u540E\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5230\u5904\u53EF\u4EE5\u8BFB\u5199\u7684\uFF0C\u8FD9\u975E\u5E38\u4E0D\u5229\u4E8E\u6A21\u5757\u5316\u7F16\u7A0B\u3002"),n("li",null,"\u53E6\u4E00\u65B9\u9762\uFF0Cwindow\u5BF9\u8C61\u6709\u5B9E\u4F53\u542B\u4E49\uFF0C\u6307\u7684\u662F\u6D4F\u89C8\u5668\u7684\u7A97\u53E3\u5BF9\u8C61\uFF0C\u9876\u5C42\u5BF9\u8C61\u662F\u4E00\u4E2A\u6709\u5B9E\u4F53\u542B\u4E49\u7684\u5BF9\u8C61\uFF0C\u4E5F\u662F\u4E0D\u5408\u9002\u7684\u3002")],-1),b=n("p",null,[e("ES6 \u4E3A\u4E86\u6539\u53D8\u8FD9\u4E00\u70B9\uFF0C\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0C\u4E3A\u4E86\u4FDD\u6301\u517C\u5BB9\u6027\uFF0Cvar\u547D\u4EE4\u548Cfunction\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4F9D\u65E7\u662F\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1B"),n("br"),e(" \u53E6\u4E00\u65B9\u9762\u89C4\u5B9A\uFF0Clet\u547D\u4EE4\u3001const\u547D\u4EE4\u3001class\u547D\u4EE4\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u4E0D\u5C5E\u4E8E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u3002"),n("br"),e(" \u4E5F\u5C31\u662F\u8BF4\uFF0C"),n("strong",null,"\u4ECE ES6 \u5F00\u59CB\uFF0C\u5168\u5C40\u53D8\u91CF\u5C06\u9010\u6B65\u4E0E\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u8131\u94A9"),e("\u3002")],-1),p=n("h2",{id:"2-\u83B7\u53D6\u9876\u5C42\u5BF9\u8C61",class:"doc-heading"},"\u83B7\u53D6\u9876\u5C42\u5BF9\u8C61",-1),w=n("p",null,[e("ES5 \u7684\u9876\u5C42\u5BF9\u8C61\uFF0C\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u95EE\u9898\uFF0C\u56E0\u4E3A\u5B83\u5728\u5404\u79CD\u5B9E\u73B0\u91CC\u9762\u662F\u4E0D\u7EDF\u4E00\u7684"),n("br"),e(" \u6D4F\u89C8\u5668\u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662Fwindow\uFF0C\u4F46 Node \u548C Web Worker \u6CA1\u6709window"),n("br"),e(" \u6D4F\u89C8\u5668\u548C Web Worker \u91CC\u9762\uFF0Cself\u4E5F\u6307\u5411\u9876\u5C42\u5BF9\u8C61\uFF0C\u4F46\u662F Node \u6CA1\u6709self"),n("br"),e(" Node \u91CC\u9762\uFF0C\u9876\u5C42\u5BF9\u8C61\u662Fglobal\uFF0C\u4F46\u5176\u4ED6\u73AF\u5883\u90FD\u4E0D\u652F\u6301"),n("br"),e(" \u540C\u4E00\u6BB5\u4EE3\u7801\u4E3A\u4E86\u80FD\u591F\u5728\u5404\u79CD\u73AF\u5883\uFF0C\u90FD\u80FD\u53D6\u5230\u9876\u5C42\u5BF9\u8C61\uFF0C\u73B0\u5728\u4E00\u822C\u662F\u4F7F\u7528this\u53D8\u91CF\uFF0C\u4F46\u662F\u6709\u5C40\u9650\u6027\u3002"),n("br"),e(" \u5168\u5C40\u73AF\u5883\u4E2D\uFF0Cthis\u4F1A\u8FD4\u56DE\u9876\u5C42\u5BF9\u8C61\u3002\u4F46\u662F\uFF0CNode \u6A21\u5757\u548C ES6 \u6A21\u5757\u4E2D\uFF0Cthis\u8FD4\u56DE\u7684\u662F\u5F53\u524D\u6A21\u5757\u3002"),n("br"),e(" \u51FD\u6570\u91CC\u9762\u7684this\uFF0C\u5982\u679C\u51FD\u6570\u4E0D\u662F\u4F5C\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u8FD0\u884C\uFF0C\u800C\u662F\u5355\u7EAF\u4F5C\u4E3A\u51FD\u6570\u8FD0\u884C\uFF0Cthis\u4F1A\u6307\u5411\u9876\u5C42\u5BF9\u8C61\u3002\u4F46\u662F\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u65F6this\u4F1A\u8FD4\u56DEundefined\u3002"),n("br"),e(" \u4E0D\u7BA1\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u8FD8\u662F\u666E\u901A\u6A21\u5F0F\uFF0Cnew Function(\u2018return this\u2019)()\uFF0C\u603B\u662F\u4F1A\u8FD4\u56DE\u5168\u5C40\u5BF9\u8C61\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u7528\u4E86 CSP\uFF08Content Security Policy\uFF0C\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF09\uFF0C\u90A3\u4E48eval\u3001new Function\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u3002"),n("br"),e(" \u7EFC\u4E0A\u6240\u8FF0\uFF0C\u5F88\u96BE\u627E\u5230\u4E00\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u6240\u6709\u60C5\u51B5\u4E0B\uFF0C\u90FD\u53D6\u5230\u9876\u5C42\u5BF9\u8C61\u3002\u4E0B\u9762\u662F\u4E24\u79CD\u52C9\u5F3A\u53EF\u4EE5\u4F7F\u7528\u7684\u65B9\u6CD5\u3002")],-1),N={__name:"\u9876\u5C42\u5BF9\u8C61",setup(h){const i=[{id:"doc-title",title:"\u9876\u5C42\u5BF9\u8C61"},{id:"1-\u5B9A\u4E49",title:"1. \u5B9A\u4E49"},{id:"2-\u83B7\u53D6\u9876\u5C42\u5BF9\u8C61",title:"2. \u83B7\u53D6\u9876\u5C42\u5BF9\u8C61"}];return(g,v)=>{const o=t("doc-code"),d=t("doc-page");return s(),c(d,{desc:"",toc:i},{default:r(()=>[a,u,f,_,b,l(o,{code:`var a = 1
// \u6216\u8005\u91C7\u7528\u901A\u7528\u65B9\u6CD5\uFF0C\u5199\u6210 this.a
window.a // 1

let b = 1
window.b // undefined
`,lang:"javascript"}),p,w,l(o,{code:`// \u65B9\u6CD5\u4E00
(typeof window !== 'undefined'
  ? window
  : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
    ? global
    : this)

// \u65B9\u6CD5\u4E8C
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self }
  if (typeof window !== 'undefined') { return window }
  if (typeof global !== 'undefined') { return global }
  throw new Error('unable to locate global object')
}
`,lang:"javascript"})]),_:1})}}};export{N as default};
