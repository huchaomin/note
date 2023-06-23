import{r as i,o as u,c as a,f as c,aa as e,g as t,v as s}from"./vendor-e1827163.js";const p=e("h2",{id:"1-\u517C\u5BB9\u6027",class:"doc-heading"},"\u517C\u5BB9\u6027",-1),m=e("h3",{id:"2-\u9759\u6001\u5BFC\u5165",class:"doc-heading"},"\u9759\u6001\u5BFC\u5165",-1),h=e("h3",{id:"3-\u52A8\u6001\u5BFC\u5165",class:"doc-heading"},"\u52A8\u6001\u5BFC\u5165",-1),A=e("h2",{id:"4-\u5173\u4E8E\u6587\u4EF6\u540E\u7F00",class:"doc-heading"},"\u5173\u4E8E\u6587\u4EF6\u540E\u7F00",-1),E=e("ul",null,[e("li",null,"\u6A21\u5757JS\u6587\u4EF6\uFF0C\u4E1A\u754C\u6216\u8005\u5B98\u65B9\u7EA6\u5B9A\u4FD7\u6210\u547D\u540D\u4E3A.mjs\u6587\u4EF6\u683C\u5F0F\uFF0C\u4E00\u6765\u53EF\u4EE5\u548C\u666E\u901AJavaScript\u6587\u4EF6\uFF08.js\u540E\u7F00\uFF09\u8FDB\u884C\u533A\u5206\uFF0C\u4E00\u770B\u5C31\u77E5\u9053\u662F\u6A21\u5757\u6587\u4EF6"),e("li",null,"\u4E8C\u6765Node.js\u4E2DES6\u7684\u6A21\u5757\u5316\u7279\u6027\u53EA\u652F\u6301.mjs\u540E\u7F00\u7684\u811A\u672C\uFF0C\u53EF\u4EE5\u548CNode.js\u4FDD\u6301\u4E00\u81F4"),e("li",null,"\u5F53\u7136\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528.js\u4F5C\u4E3A\u6A21\u5757JS\u6587\u4EF6\u7684\u540E\u7F00\u4E5F\u662F\u53EF\u4EE5\u7684")],-1),C=e("h2",{id:"5-\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",class:"doc-heading"},"\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",-1),_=e("h2",{id:"6-\u9759\u6001\u5BFC\u5165",class:"doc-heading"},"\u9759\u6001\u5BFC\u5165",-1),f=e("h3",{id:"7-\u5FC5\u987B\u52A0\u4E0A-type=module",class:"doc-heading"},"\u5FC5\u987B\u52A0\u4E0A type=module",-1),y=e("h3",{id:"8-\u4F7F\u7528-nomodule-\u5411\u540E\u517C\u5BB9",class:"doc-heading"},"\u4F7F\u7528 nomodule \u5411\u540E\u517C\u5BB9",-1),D=e("ul",null,[e("li",null,"Firefox doesn\u2019t support nomodule (issue). Fixed in Firefox nightly!"),e("li",null,"Edge doesn\u2019t support nomodule (issue). Fixed in Edge 16!"),e("li",null,"Safari 10.1 doesn\u2019t support nomodule. Fixed in Safari 11!")],-1),g={class:"doc-note doc-note--tip"},b=e("p",{class:"doc-note__title"},"TIP",-1),B=e("h3",{id:"9-defer-by-default",class:"doc-heading"},"Defer by default",-1),j=e("ul",null,[e("li",null,"The way scripts block the HTML parser during fetching is bad."),e("li",null,"With regular scripts you can use defer to prevent blocking, which also delays script execution until the document has finished parsing, and maintains execution order with other deferred scripts."),e("li",null,"Module scripts behave like defer by default \u2013 there\u2019s no way to make a module script block the HTML parser while it fetches"),e("li",null,"Module scripts use the same execution queue as regular scripts using defer")],-1),x=e("h3",{id:"10-inline-scripts-are-also-deferred",class:"doc-heading"},"Inline scripts are also deferred",-1),w=e("ul",null,[e("li",null,"inline module\u4F1A\u9ED8\u8BA4\u6DFB\u52A0defer\u5C5E\u6027"),e("li",null,"inline script\u4F1A\u5FFD\u89C6defer\u548Casync\u5C5E\u6027")],-1),T=e("h3",{id:"11-async",class:"doc-heading"},"async",-1),F=e("ul",null,[e("li",null,"Async works on external(\u5916\u90E8\u7684) & inline modules"),e("li",null,"\u5982\u679C\u540C\u65F6\u6307defer\u548Casync\uFF0Casync\u4F18\u5148\u4E8E\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u800C\u652F\u6301defer\u4F46\u4E0D\u652F\u6301async\u7684\u65E7\u7248\u6D4F\u89C8\u5668\u5C06\u56DE\u9000\u5230defer")],-1),k=e("h3",{id:"12-modules-only-execute-once",class:"doc-heading"},"Modules only execute once",-1),S=e("h3",{id:"13-always-cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB-",class:"doc-heading"},"Always CORS(\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB)",-1),v=e("p",null,[s("Unlike regular scripts, module scripts (and their imports) are fetched with CORS."),e("br"),s(" This means cross-origin module scripts must return valid CORS headers such as "),e("strong",null,"Access-Control-Allow-Origin: *")],-1),M=e("h3",{id:"14-\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",class:"doc-heading"},"\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",-1),I=e("p",null,[s("\u5982\u679C\u8BF7\u6C42\u6765\u81EA\u540C\u4E00\u6765\u6E90\uFF0C\u5219\u5927\u591A\u6570\u57FA\u4E8ECORS\u7684API\u90FD\u4F1A\u53D1\u9001\u51ED\u636E\uFF08Cookie\u7B49\uFF09\uFF0C\u4F46\u662Ffetch()\u548C\u6A21\u5757\u811A\u672C\u4F8B\u5916"),e("br"),s(" \u4F46\u662F\u968F\u7740\u6D4F\u89C8\u5668\u7684\u66F4\u65B0\uFF0C\u8FD9\u4E00\u5207\u90FD\u6539\u53D8\u4E86\uFF0C\u73B0\u5728fetch()\u548C\u6A21\u5757\u811A\u672C\u7684\u884C\u4E3A\u4E0E\u5176\u4ED6\u57FA\u4E8ECORS\u7684API\u76F8\u540C")],-1),O=e("h2",{id:"15-\u52A8\u6001\u5BFC\u5165",class:"doc-heading"},"\u52A8\u6001\u5BFC\u5165",-1),R=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[s("\u5177\u4F53\u662F\u4F7F\u7528\u4E00\u4E2A\u957F\u5F97\u50CF\u51FD\u6570\u7684import()\uFF0C\u6CE8\u610F\uFF0C\u53EA\u662F\u957F\u5F97\u50CF\u51FD\u6570\u3002"),e("br"),s(" import()\u5B9E\u9645\u4E0A\u5C31\u662F\u4E2A\u5355\u7EAF\u7684\u8BED\u6CD5\uFF0C\u7C7B\u4F3C\u4E8Esuper()\u3002\u8FD9\u5C31\u610F\u5473\u7740import()\u4E0D\u4F1A\u4ECEFunction.prototype\u83B7\u5F97\u7EE7\u627F\uFF0C\u56E0\u6B64\u60A8\u65E0\u6CD5call\u6216apply\u5B83\uFF0C\u5E76\u4E14const importAlias = import\u4E4B\u7C7B\u7684\u4E1C\u897F\u4E0D\u8D77\u4F5C\u7528\uFF0C\u751A\u81F3import()\u90FD\u4E0D\u662F\u5BF9\u8C61")])],-1),N=e("h3",{id:"16-\u4F8B\u5B50",class:"doc-heading"},"\u4F8B\u5B50",-1),J=e("h2",{id:"17-mime-\u7C7B\u578B",class:"doc-heading"},"mime \u7C7B\u578B",-1),q=e("p",null,[s("\u5728\u6D4F\u89C8\u5668\u4FA7\u8FDB\u884Cimport\u6A21\u5757\u5F15\u5165\uFF0C\u5176\u5BF9\u6A21\u5757JS\u6587\u4EF6\u7684mime type\u8981\u6C42\u975E\u5E38\u4E25\u683C\uFF0C\u52A1\u5FC5\u548CJS\u6587\u4EF6\u4E00\u81F4\u3002"),e("br"),s(" \u8FD9\u5C31\u5BFC\u81F4\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528.mjs\u6587\u4EF6\u683C\u5F0F\uFF0C\u5219\u9700\u8981\u5728\u670D\u52A1\u5668\u914D\u7F6Emime type\u7C7B\u578B\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\uFF1A")],-1),K=e("p",null,[s("Nginx\u5BF9\u4E8E\u4E0D\u8BC6\u522B\u540E\u7F00\u9ED8\u8BA4\u4F1A\u7ED9\u4E00\u4E2A "),e("code",{class:"doc-token"},"application/octet-stream"),s(" \u7684MIME type\uFF0C\u65B9\u4FBF\u4E0B\u8F7D\u7B49\u5904\u7406\u3002"),e("br"),s(" \u4F46\u662F\uFF0C\u4E0D\u597D\u610F\u601D\uFF0C\u5728\u6A21\u5757\u5316\u5F15\u5165\u8FD9\u91CC\uFF0C\u8FD9\u4E2AMIME type\u65E0\u6548\uFF0C\u9700\u8981\u8DB3\u591F\u7CBE\u51C6\u624D\u884C\uFF0C\u4E3A "),e("code",{class:"doc-token"},"application/javascript")],-1),P=e("h2",{id:"18-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),V=e("br",null,null,-1),G={__name:"ESM\u4E0E\u73B0\u4EE3\u6D4F\u89C8\u5668",setup(H){const r=[{id:"doc-title",title:"ES modules"},{id:"1-\u517C\u5BB9\u6027",title:"1. \u517C\u5BB9\u6027"},{id:"2-\u9759\u6001\u5BFC\u5165",title:"1.1. \u9759\u6001\u5BFC\u5165",sub:!0},{id:"3-\u52A8\u6001\u5BFC\u5165",title:"1.2. \u52A8\u6001\u5BFC\u5165",sub:!0},{id:"4-\u5173\u4E8E\u6587\u4EF6\u540E\u7F00",title:"2. \u5173\u4E8E\u6587\u4EF6\u540E\u7F00"},{id:"5-\u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00",title:"3. \u5FC5\u987B\u4F7F\u7528\u76F8\u5BF9\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u5E26\u4E0A\u540E\u7F00"},{id:"6-\u9759\u6001\u5BFC\u5165",title:"4. \u9759\u6001\u5BFC\u5165"},{id:"7-\u5FC5\u987B\u52A0\u4E0A-type=module",title:"4.1. \u5FC5\u987B\u52A0\u4E0A type=module",sub:!0},{id:"8-\u4F7F\u7528-nomodule-\u5411\u540E\u517C\u5BB9",title:"4.2. \u4F7F\u7528 nomodule \u5411\u540E\u517C\u5BB9",sub:!0},{id:"9-defer-by-default",title:"4.3. Defer by default",sub:!0},{id:"10-inline-scripts-are-also-deferred",title:"4.4. Inline scripts are also deferred",sub:!0},{id:"11-async",title:"4.5. async",sub:!0},{id:"12-modules-only-execute-once",title:"4.6. Modules only execute once",sub:!0},{id:"13-always-cors-\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB-",title:"4.7. Always CORS(\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB)",sub:!0},{id:"14-\u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",title:"4.8. \u8DE8\u57DF\u8BF7\u6C42\u7684\u51ED\u8BC1",sub:!0},{id:"15-\u52A8\u6001\u5BFC\u5165",title:"5. \u52A8\u6001\u5BFC\u5165"},{id:"16-\u4F8B\u5B50",title:"5.1. \u4F8B\u5B50",sub:!0},{id:"17-mime-\u7C7B\u578B",title:"6. mime \u7C7B\u578B"},{id:"18-\u53C2\u8003\u6587\u732E",title:"7. \u53C2\u8003\u6587\u732E"}];return(L,W)=>{const l=i("doc-img"),o=i("doc-code"),d=i("doc-link"),n=i("doc-page");return u(),a(n,{desc:"",toc:r},{default:c(()=>[p,m,e("p",null,[t(l,{src:"static-import.png",alt:"static-import"})]),h,e("p",null,[t(l,{src:"dynamic-import.png",alt:"dynamic-import"})]),A,E,C,t(o,{code:"//%20Supported%3A%0Aimport%20%7Bfoo%7D%20from%20%27https%3A//jakearchibald.com/utils/bar.mjs%27%3B%0Aimport%20%7Bfoo%7D%20from%20%27/utils/bar.mjs%27%3B%0Aimport%20%7Bfoo%7D%20from%20%27./bar.mjs%27%3B%0Aimport%20%7Bfoo%7D%20from%20%27../bar.mjs%27%3B%0A%0A//%20Not%20supported%3A%0Aimport%20%7Bfoo%7D%20from%20%27bar.mjs%27%3B%0Aimport%20%7Bfoo%7D%20from%20%27utils/bar.mjs%27%3B%0A",lang:"javascript"}),_,f,t(o,{code:"//%20utils.mjs%0Aexport%20function%20addTextToBody%28text%29%20%7B%0A%20%20const%20div%20%3D%20document.createElement%28%27div%27%29%0A%20%20div.textContent%20%3D%20text%0A%20%20document.body.appendChild%28div%29%0A%7D%0A",lang:"javascript"}),t(o,{code:"%3Cscript%20type%3D%22module%22%3E%0A%20%20import%20%7BaddTextToBody%7D%20from%20%27./utils.mjs%27%0A%20%20addTextToBody%28%27Modules%20are%20pretty%20cool.%27%29%0A%3C/script%3E%0A",lang:"html"}),y,t(o,{code:"%3Cscript%20type%3D%22module%22%20src%3D%22module.mjs%22%3E%3C/script%3E%20%20%3C%21--%20%u73B0%u4EE3%u6D4F%u89C8%u5668%20--%3E%0A%3Cscript%20nomodule%20src%3D%22fallback.js%22%3E%3C/script%3E%20%20%3C%21--%20%u975E%u73B0%u4EE3%u4E14%u652F%u6301nomodule%u5C5E%u6027%u7684%u6D4F%u89C8%u5668%20--%3E%0A",lang:"html"}),D,e("div",g,[b,e("p",null,[s('\u8FD9\u91CC\u5C31\u6709\u5FC5\u8981\u8003\u8651\u652F\u6301type="module"\u4E0D\u652F\u6301nomodule\u7684\u6D4F\u89C8\u5668\uFF0C\u53C2\u7167'),t(d,{to:"https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc"},{default:c(()=>[s("https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc")]),_:1})])]),B,t(o,{code:"%3Cscript%20type%3D%22module%22%20src%3D%221.mjs%22%3E%3C/script%3E%0A%3Cscript%20src%3D%222.js%22%3E%3C/script%3E%0A%3Cscript%20defer%20src%3D%223.js%22%3E%3C/script%3E%0A%3C%21--%u6700%u7EC8%u987A%u5E8F%202%20%3E%201%20%3E%203--%3E%0A",lang:"html"}),j,x,t(o,{code:"%3Cscript%20type%3D%22module%22%3E%0A%20%20addTextToBody%28%22Inline%20module%20executed%22%29%3B%0A%3C/script%3E%0A%3Cscript%20src%3D%221.js%22%3E%3C/script%3E%0A%3Cscript%20defer%3E%0A%20%20addTextToBody%28%22Inline%20script%20executed%22%29%3B%0A%3C/script%3E%0A%3Cscript%20defer%20src%3D%222.js%22%3E%3C/script%3E%0A%3C%21--%u6700%u7EC8%u987A%u5E8F%201%20%3E%20inline%20script%20%3E%20inline%20module%20%3E%20defer%20script--%3E%0A",lang:"html"}),w,T,t(o,{code:"%3Cscript%20async%20type%3D%22module%22%3E%0A%20%20import%20%7BaddTextToBody%7D%20from%20%27./utils.mjs%27%0A%20%20addTextToBody%28%27Inline%20module%20executed.%27%29%0A%3C/script%3E%0A%3Cscript%20async%20type%3D%22module%22%20src%3D%221.mjs%22%3E%3C/script%3E%0A",lang:"html"}),F,k,t(o,{code:"%3C%21--%201.mjs%20%u53EA%u6267%u884C%u4E00%u6B21%20--%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%221.mjs%22%3E%3C/script%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%221.mjs%22%3E%3C/script%3E%0A%3Cscript%20type%3D%22module%22%3E%0A%20%20import%20%22./1.mjs%22%3B%0A%3C/script%3E%0A%0A%3C%21--%202.js%20%u6267%u884C%u4E24%u6B21%20--%3E%0A%3Cscript%20src%3D%222.js%22%3E%3C/script%3E%0A%3Cscript%20src%3D%222.js%22%3E%3C/script%3E%0A",lang:"html"}),S,v,t(o,{code:"%3C%21--%20This%20will%20not%20execute%2C%20as%20it%20fails%20a%20CORS%20check%20--%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%22https%3A//%u2026.now.sh/no-cors%22%3E%3C/script%3E%0A%0A%3C%21--%20This%20will%20not%20execute%2C%20as%20one%20of%20its%20imports%20fails%20a%20CORS%20check%20--%3E%0A%3Cscript%20type%3D%22module%22%3E%0A%20%20import%20%27https%3A//%u2026.now.sh/no-cors%27%3B%0A%20%20addTextToBody%28%22This%20will%20not%20execute.%22%29%3B%0A%3C/script%3E%0A%0A%3C%21--%20This%20will%20execute%20as%20it%20passes%20CORS%20checks%20--%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%22https%3A//%u2026.now.sh/cors%22%3E%3C/script%3E%0A",lang:"html"}),M,I,t(o,{code:"%3C%21--%20Fetched%20with%20credentials%20%28cookies%20etc%29%20--%3E%0A%3Cscript%20src%3D%221.js%22%3E%3C/script%3E%0A%0A%3C%21--%20Fetched%20with%20credentials%2C%20except%20in%20old%20browsers%20that%20follow%20the%20old%20spec%20--%3E%0A%3Cscript%20type%3D%22module%22%20src%3D%221.mjs%22%3E%3C/script%3E%0A%0A%3C%21--%20Fetched%20with%20credentials%2C%20in%20browsers%20that%20follow%20the%20old%20%26%20new%20spec%20--%3E%0A%3Cscript%20type%3D%22module%22%20crossorigin%20src%3D%221.mjs%22%3E%3C/script%3E%0A%0A%3C%21--%20Fetched%20without%20credentials%20--%3E%0A%3Cscript%20type%3D%22module%22%20crossorigin%20src%3D%22https%3A//other-origin/1.mjs%22%3E%3C/script%3E%0A%0A%3C%21--%20Fetched%20with%20credentials--%3E%0A%3Cscript%20type%3D%22module%22%20crossorigin%3D%22use-credentials%22%20src%3D%22https%3A//other-origin/1.mjs%22%3E%3C/script%3E%0A",lang:"html"}),O,R,N,t(o,{code:"//%20doubleKill.mjs%0A//%20const%20%u548C%20default%u529F%u80FD%u6F14%u793A%0Aexport%20default%20%28%29%20%3D%3E%20%7B%0A%20%20const%20p%20%3D%20document.querySelector%28%27p%27%29%3B%0A%20%20p.style.transform%20%3D%20%27scaleY%28-1%29%27%3B%0A%7D%3B%0Aexport%20const%20pColor%20%3D%20%28color%29%20%3D%3E%20%7B%0A%20%20const%20p%20%3D%20document.querySelector%28%27p%27%29%3B%0A%20%20p.style.color%20%3D%20color%3B%0A%7D%0A",lang:"js"}),t(o,{code:"%3Cscript%20type%3D%22module%22%3E%0A%20%20//%20%u5BFC%u5165doubleKill%u6A21%u5757%2C%u8FD4%u56DE%u7684%u662F%u4E00%u4E2Apromise%u5BF9%u8C61%0A%20%20import%28%27./doubleKill.mjs%27%29.then%28%28module%29%20%3D%3E%20%7B%0A%20%20%20%20//%20%u6267%u884C%u9ED8%u8BA4%u65B9%u6CD5%0A%20%20%20%20module.default%28%29%3B%0A%20%20%20%20//%20%u8BBE%u7F6E%u989C%u8272%u4E3A%u7EA2%u8272%0A%20%20%20%20module.pColor%28%27red%27%29%3B%0A%20%20%7D%29%3B%0A%3C/script%3E%0A",lang:"html"}),J,q,e("p",null,[t(l,{src:"mime-error.png",alt:"mime"})]),K,P,e("p",null,[t(d,{to:"https://jakearchibald.com/2017/es-modules-in-browsers/"},{default:c(()=>[s("https://jakearchibald.com/2017/es-modules-in-browsers/")]),_:1}),V,t(d,{to:"https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/"},{default:c(()=>[s("\u5F20\u946B\u65ED")]),_:1})])]),_:1})}}};export{G as default};
