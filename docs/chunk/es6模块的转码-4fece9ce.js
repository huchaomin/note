import{r as n,o as i,c as a,f as d,g as t,a9 as e,v as o}from"./vendor-585b19a3.js";const r=e("h2",{id:"1-babel",class:"doc-heading"},"Babel",-1),p=e("p",null,"\u7565",-1),m=e("h2",{id:"2-es6-module-transpiler",class:"doc-heading"},"ES6 module transpiler",-1),_=e("p",null,[o("\u662F square \u516C\u53F8\u5F00\u6E90\u7684\u4E00\u4E2A\u8F6C\u7801\u5668\uFF0C\u53EF\u4EE5\u5C06 ES6 \u6A21\u5757\u8F6C\u4E3A CommonJS \u6A21\u5757\u6216 AMD \u6A21\u5757\u7684\u5199\u6CD5\uFF0C\u4ECE\u800C\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u3002"),e("br"),o(" \u5B89\u88C5")],-1),h=e("p",null,"\u5C06 ES6 \u6A21\u5757\u6587\u4EF6\u8F6C\u7801",-1),u=e("h2",{id:"3-systemjs",class:"doc-heading"},"SystemJS",-1),S=e("p",null,[o("\u5B83\u662F\u4E00\u4E2A\u57AB\u7247\u5E93\uFF08polyfill\uFF09\uFF0C\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u5185\u52A0\u8F7D ES6 \u6A21\u5757\u3001AMD \u6A21\u5757\u548C CommonJS \u6A21\u5757\uFF0C\u5C06\u5176\u8F6C\u4E3A ES5 \u683C\u5F0F\u3002\u5B83\u5728\u540E\u53F0\u8C03\u7528\u7684\u662F Google \u7684 Traceur \u8F6C\u7801\u5668\u3002"),e("br"),o(" \u5148\u5728\u7F51\u9875\u5185\u8F7D\u5165system.js\u6587\u4EF6\u3002")],-1),g=e("p",null,"\u4F7F\u7528System.import\u65B9\u6CD5\u52A0\u8F7D\u6A21\u5757\u6587\u4EF6",-1),f=e("p",null,"System.import\u4F7F\u7528\u5F02\u6B65\u52A0\u8F7D\uFF0C\u8FD4\u56DE\u4E00\u4E2APromise\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u9488\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u7F16\u7A0B\u3002",-1),x={__name:"es6\u6A21\u5757\u7684\u8F6C\u7801",setup(y){const l=[{id:"doc-title",title:"es6\u6A21\u5757\u7684\u8F6C\u7801"},{id:"1-babel",title:"1. Babel"},{id:"2-es6-module-transpiler",title:"2. ES6 module transpiler"},{id:"3-systemjs",title:"3. SystemJS"}];return(j,b)=>{const s=n("doc-code"),c=n("doc-page");return i(),a(c,{desc:"",toc:l},{default:d(()=>[r,p,m,_,t(s,{code:`npm install -g es6-module-transpiler
`,lang:"sh"}),h,t(s,{code:`compile-modules convert file1.js file2.js
`,lang:"sh"}),u,S,t(s,{code:`<script src="system.js"><\/script>
`,lang:"html"}),g,t(s,{code:`<script>
  System.import('./app.js') // \u53EF\u4EE5\u81EA\u52A8\u8F6C\u7801
<\/script>
`,lang:"html"}),f,t(s,{code:`// app/es6-file.js:
export class q {
  constructor() {
    this.es6 = 'hello'
  }
}
`,lang:"javascript"}),t(s,{code:`<script>
System.import('app/es6-file').then(function(m) {
  console.log(new m.q().es6) // hello
})
<\/script>
`,lang:"html"})]),_:1})}}};export{x as default};
