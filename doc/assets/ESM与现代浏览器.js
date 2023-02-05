import{r as i,o as r,c as a,f as n,g as s,a8 as e,v as o}from"./vendor.js";const p=e("h2",{id:"1-es-modules-are-now-available-in-browsers!-they\u2019re-in",class:"doc-heading"},"ES modules are now available in browsers! They\u2019re in",-1),u=e("ul",null,[e("li",null,"Safari 10.1."),e("li",null,"Chrome 61."),e("li",null,"Firefox 60."),e("li",null,"Edge 16.")],-1),h=e("h2",{id:"2-\u5FC5\u987B\u52A0\u4E0A-type=module",class:"doc-heading"},"\u5FC5\u987B\u52A0\u4E0A type=module",-1),m=e("h2",{id:"3-\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",class:"doc-heading"},"\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",-1),f=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"\u5176\u4ED6\u8BF4\u660E\u7B26\u4FDD\u7559\u4F9B\u5C06\u6765\u4F7F\u7528\uFF0C\u4F8B\u5982\u5BFC\u5165\u5185\u7F6E\u6A21\u5757")],-1),_=e("h2",{id:"4-\u4F7F\u7528-nomodule-\u5411\u540E\u517C\u5BB9",class:"doc-heading"},"\u4F7F\u7528 nomodule \u5411\u540E\u517C\u5BB9",-1),y=e("ul",null,[e("li",null,"Firefox doesn\u2019t support nomodule (issue). Fixed in Firefox nightly!"),e("li",null,"Edge doesn\u2019t support nomodule (issue). Fixed in Edge 16!"),e("li",null,"Safari 10.1 doesn\u2019t support nomodule. Fixed in Safari 11!")],-1),g={class:"doc-note doc-note--tip"},b=e("p",{class:"doc-note__title"},"TIP",-1),w=e("h2",{id:"5-defer-by-default",class:"doc-heading"},"Defer by default",-1),x=e("ul",null,[e("li",null,"The way scripts block the HTML parser during fetching is bad."),e("li",null,"With regular scripts you can use defer to prevent blocking, which also delays script execution until the document has finished parsing, and maintains execution order with other deferred scripts."),e("li",null,"Module scripts behave like defer by default \u2013 there\u2019s no way to make a module script block the HTML parser while it fetches"),e("li",null,"Module scripts use the same execution queue as regular scripts using defer")],-1),j=e("h2",{id:"6-inline-scripts-are-also-deferred",class:"doc-heading"},"Inline scripts are also deferred",-1),T=e("ul",null,[e("li",null,"inline module\u4F1A\u9ED8\u8BA4\u6DFB\u52A0defer\u5C5E\u6027"),e("li",null,"inline script\u4F1A\u5FFD\u89C6defer\u548Casync\u5C5E\u6027")],-1),k=e("h2",{id:"7-async",class:"doc-heading"},"async",-1),v=e("ul",null,[e("li",null,"Async works on external(\u5916\u90E8\u7684) & inline modules"),e("li",null,"\u5982\u679C\u540C\u65F6\u6307defer\u548Casync\uFF0Casync\u4F18\u5148\u4E8E\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u800C\u652F\u6301defer\u4F46\u4E0D\u652F\u6301async\u7684\u65E7\u7248\u6D4F\u89C8\u5668\u5C06\u56DE\u9000\u5230defer")],-1),S=e("h2",{id:"8-modules-only-execute-once",class:"doc-heading"},"Modules only execute once",-1),C=e("h2",{id:"9-always-cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB-",class:"doc-heading"},"Always CORS(\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB)",-1),B=e("p",null,[o("Unlike regular scripts, module scripts (and their imports) are fetched with CORS."),e("br"),o(" This means cross-origin module scripts must return valid CORS headers such as "),e("strong",null,"Access-Control-Allow-Origin: *")],-1),F=e("h2",{id:"10-\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",class:"doc-heading"},"\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",-1),M=e("p",null,[o("\u5982\u679C\u8BF7\u6C42\u6765\u81EA\u540C\u4E00\u6765\u6E90\uFF0C\u5219\u5927\u591A\u6570\u57FA\u4E8ECORS\u7684API\u90FD\u4F1A\u53D1\u9001\u51ED\u636E\uFF08Cookie\u7B49\uFF09\uFF0C\u4F46\u662Ffetch()\u548C\u6A21\u5757\u811A\u672C\u4F8B\u5916"),e("br"),o(" \u4F46\u662F\u968F\u7740\u6D4F\u89C8\u5668\u7684\u66F4\u65B0\uFF0C\u8FD9\u4E00\u5207\u90FD\u6539\u53D8\u4E86\uFF0C\u73B0\u5728fetch()\u548C\u6A21\u5757\u811A\u672C\u7684\u884C\u4E3A\u4E0E\u5176\u4ED6\u57FA\u4E8ECORS\u7684API\u76F8\u540C")],-1),I=e("h2",{id:"11-mime-\u7C7B\u578B-\u6709\u5F85\u9A8C\u8BC1-",class:"doc-heading"},"mime \u7C7B\u578B(\u6709\u5F85\u9A8C\u8BC1)",-1),O=e("p",null,[o("Unlike regular scripts, modules scripts must be served with one of the valid JavaScript MIME types else they won\u2019t"),e("br"),o(" execute."),e("br"),o(" The HTML Standard recommends "),e("strong",null,"text/javascript")],-1),R=e("h2",{id:"12-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),L={__name:"ESM\u4E0E\u73B0\u4EE3\u6D4F\u89C8\u5668",setup(E){const l=[{id:"doc-title",title:"ES modules"},{id:"1-es-modules-are-now-available-in-browsers!-they\u2019re-in",title:"1. ES modules are now available in browsers! They\u2019re in"},{id:"2-\u5FC5\u987B\u52A0\u4E0A-type=module",title:"2. \u5FC5\u987B\u52A0\u4E0A type=module"},{id:"3-\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",title:"3. \u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00"},{id:"4-\u4F7F\u7528-nomodule-\u5411\u540E\u517C\u5BB9",title:"4. \u4F7F\u7528 nomodule \u5411\u540E\u517C\u5BB9"},{id:"5-defer-by-default",title:"5. Defer by default"},{id:"6-inline-scripts-are-also-deferred",title:"6. Inline scripts are also deferred"},{id:"7-async",title:"7. async"},{id:"8-modules-only-execute-once",title:"8. Modules only execute once"},{id:"9-always-cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB-",title:"9. Always CORS(\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB)"},{id:"10-\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",title:"10. \u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1"},{id:"11-mime-\u7C7B\u578B-\u6709\u5F85\u9A8C\u8BC1-",title:"11. mime \u7C7B\u578B(\u6709\u5F85\u9A8C\u8BC1)"},{id:"12-\u53C2\u8003\u6587\u732E",title:"12. \u53C2\u8003\u6587\u732E"}];return(A,N)=>{const t=i("doc-code"),c=i("doc-link"),d=i("doc-page");return r(),a(d,{desc:"",toc:l},{default:n(()=>[p,u,h,s(t,{code:`// utils.mjs
export function addTextToBody(text) {
  const div = document.createElement('div')
  div.textContent = text
  document.body.appendChild(div)
}
`,lang:"javascript"}),s(t,{code:`<script type="module">
  import {addTextToBody} from './utils.mjs'
  addTextToBody('Modules are pretty cool.')
<\/script>
`,lang:"html"}),m,s(t,{code:`// Supported:
import {foo} from 'https://jakearchibald.com/utils/bar.mjs';
import {foo} from '/utils/bar.mjs';
import {foo} from './bar.mjs';
import {foo} from '../bar.mjs';

// Not supported:
import {foo} from 'bar.mjs';
import {foo} from 'utils/bar.mjs';
`,lang:"javascript"}),f,_,s(t,{code:`<script type="module" src="module.mjs"><\/script>  <!-- \u73B0\u4EE3\u6D4F\u89C8\u5668 -->
<script nomodule src="fallback.js"><\/script>  <!-- \u975E\u73B0\u4EE3\u4E14\u652F\u6301nomodule\u5C5E\u6027\u7684\u6D4F\u89C8\u5668 -->
`,lang:"html"}),y,e("div",g,[b,e("p",null,[o('\u8FD9\u91CC\u5C31\u6709\u5FC5\u8981\u8003\u8651\u652F\u6301type="module"\u4E0D\u652F\u6301nomodule\u7684\u6D4F\u89C8\u5668\uFF0C\u53C2\u7167'),s(c,{to:"https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc"},{default:n(()=>[o("https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc")]),_:1})])]),w,s(t,{code:`<script type="module" src="1.mjs"><\/script>
<script src="2.js"><\/script>
<script defer src="3.js"><\/script>
<!--\u6700\u7EC8\u987A\u5E8F 2 > 1 > 3-->
`,lang:"html"}),x,j,s(t,{code:`<script type="module">
  addTextToBody("Inline module executed");
<\/script>
<script src="1.js"><\/script>
<script defer>
  addTextToBody("Inline script executed");
<\/script>
<script defer src="2.js"><\/script>
<!--\u6700\u7EC8\u987A\u5E8F 1 > inline script > inline module > defer script-->
`,lang:"html"}),T,k,s(t,{code:`<script async type="module">
  import {addTextToBody} from './utils.mjs'
  addTextToBody('Inline module executed.')
<\/script>
<script async type="module" src="1.mjs"><\/script>
`,lang:"html"}),v,S,s(t,{code:`<!-- 1.mjs \u53EA\u6267\u884C\u4E00\u6B21 -->
<script type="module" src="1.mjs"><\/script>
<script type="module" src="1.mjs"><\/script>
<script type="module">
  import "./1.mjs";
<\/script>

<!-- 2.js \u6267\u884C\u4E24\u6B21 -->
<script src="2.js"><\/script>
<script src="2.js"><\/script>
`,lang:"html"}),C,B,s(t,{code:`<!-- This will not execute, as it fails a CORS check -->
<script type="module" src="https://\u2026.now.sh/no-cors"><\/script>

<!-- This will not execute, as one of its imports fails a CORS check -->
<script type="module">
  import 'https://\u2026.now.sh/no-cors';
  addTextToBody("This will not execute.");
<\/script>

<!-- This will execute as it passes CORS checks -->
<script type="module" src="https://\u2026.now.sh/cors"><\/script>
`,lang:"html"}),F,M,s(t,{code:`<!-- Fetched with credentials (cookies etc) -->
<script src="1.js"><\/script>

<!-- Fetched with credentials, except in old browsers that follow the old spec -->
<script type="module" src="1.mjs"><\/script>

<!-- Fetched with credentials, in browsers that follow the old & new spec -->
<script type="module" crossorigin src="1.mjs"><\/script>

<!-- Fetched without credentials -->
<script type="module" crossorigin src="https://other-origin/1.mjs"><\/script>

<!-- Fetched with credentials-->
<script type="module" crossorigin="use-credentials" src="https://other-origin/1.mjs"><\/script>
`,lang:"html"}),I,O,R,e("p",null,[s(c,{to:"[https://jakearchibald.com/2017/es-modules-in-browsers/]"},{default:n(()=>[o("https://jakearchibald.com/2017/es-modules-in-browsers/")]),_:1})])]),_:1})}}};export{L as default};
