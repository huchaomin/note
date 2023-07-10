import{n as l,o as i,p as a,w as d,a as t,i as e,f as o}from"./vendor-a2411ed8.js";const r=e("h2",{id:"1-babel",class:"doc-heading"},"Babel",-1),p=e("p",null,"\u7565",-1),m=e("h2",{id:"2-es6-module-transpiler",class:"doc-heading"},"ES6 module transpiler",-1),_=e("p",null,[o("\u662F square \u516C\u53F8\u5F00\u6E90\u7684\u4E00\u4E2A\u8F6C\u7801\u5668\uFF0C\u53EF\u4EE5\u5C06 ES6 \u6A21\u5757\u8F6C\u4E3A CommonJS \u6A21\u5757\u6216 AMD \u6A21\u5757\u7684\u5199\u6CD5\uFF0C\u4ECE\u800C\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u3002"),e("br"),o(" \u5B89\u88C5")],-1),u=e("p",null,"\u5C06 ES6 \u6A21\u5757\u6587\u4EF6\u8F6C\u7801",-1),h=e("h2",{id:"3-systemjs",class:"doc-heading"},"SystemJS",-1),A=e("p",null,[o("\u5B83\u662F\u4E00\u4E2A\u57AB\u7247\u5E93\uFF08polyfill\uFF09\uFF0C\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u5185\u52A0\u8F7D ES6 \u6A21\u5757\u3001AMD \u6A21\u5757\u548C CommonJS \u6A21\u5757\uFF0C\u5C06\u5176\u8F6C\u4E3A ES5 \u683C\u5F0F\u3002\u5B83\u5728\u540E\u53F0\u8C03\u7528\u7684\u662F Google \u7684 Traceur \u8F6C\u7801\u5668\u3002"),e("br"),o(" \u5148\u5728\u7F51\u9875\u5185\u8F7D\u5165system.js\u6587\u4EF6\u3002")],-1),E=e("p",null,"\u4F7F\u7528System.import\u65B9\u6CD5\u52A0\u8F7D\u6A21\u5757\u6587\u4EF6",-1),S=e("p",null,"System.import\u4F7F\u7528\u5F02\u6B65\u52A0\u8F7D\uFF0C\u8FD4\u56DE\u4E00\u4E2APromise\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u9488\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u7F16\u7A0B\u3002",-1),j={__name:"es6\u6A21\u5757\u7684\u8F6C\u7801",setup(g){const c=[{id:"doc-title",title:"es6\u6A21\u5757\u7684\u8F6C\u7801"},{id:"1-babel",title:"1. Babel"},{id:"2-es6-module-transpiler",title:"2. ES6 module transpiler"},{id:"3-systemjs",title:"3. SystemJS"}];return(f,y)=>{const s=l("doc-code"),n=l("doc-page");return i(),a(n,{desc:"",toc:c},{default:d(()=>[r,p,m,_,t(s,{code:"npm%20install%20-g%20es6-module-transpiler%0A",lang:"sh"}),u,t(s,{code:"compile-modules%20convert%20file1.js%20file2.js%0A",lang:"sh"}),h,A,t(s,{code:"%3Cscript%20src%3D%22system.js%22%3E%3C/script%3E%0A",lang:"html"}),E,t(s,{code:"%3Cscript%3E%0A%20%20System.import%28%27./app.js%27%29%20//%20%u53EF%u4EE5%u81EA%u52A8%u8F6C%u7801%0A%3C/script%3E%0A",lang:"html"}),S,t(s,{code:"//%20app/es6-file.js%3A%0Aexport%20class%20q%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.es6%20%3D%20%27hello%27%0A%20%20%7D%0A%7D%0A",lang:"javascript"}),t(s,{code:"%3Cscript%3E%0ASystem.import%28%27app/es6-file%27%29.then%28function%28m%29%20%7B%0A%20%20console.log%28new%20m.q%28%29.es6%29%20//%20hello%0A%7D%29%0A%3C/script%3E%0A",lang:"html"})]),_:1})}}};export{j as default};
