import{r as c,o as i,c as d,f as u,aa as o,g as t,v as e}from"./vendor-e1827163.js";const r=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,[e("FIFO: First in, First out\uFF0C\u5148\u8FDB\u5148\u51FA"),o("br"),e(" LIFO: Last in, First out\uFF0C\u540E\u8FDB\u5148\u51FA")])],-1),E=o("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),A=o("p",null,"\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u8D4B\u4E88\u8C03\u7528\u5806\u6808\u4F18\u5148\u7EA7\uFF0C\u5B83\u9996\u5148\u5904\u7406\u5728\u8C03\u7528\u5806\u6808\u4E2D\u627E\u5230\u7684\u6240\u6709\u4E1C\u897F\uFF0C\u4E00\u65E6\u5176\u4E2D\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\uFF0C\u4FBF\u5F00\u59CB\u5904\u7406\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4E1C\u897F\u3002",-1),_=o("h2",{id:"2-es6-\u4F5C\u4E1A\u961F\u5217-\u5FAE\u4EFB\u52A1-",class:"doc-heading"},"ES6 \u4F5C\u4E1A\u961F\u5217(\u5FAE\u4EFB\u52A1)",-1),p=o("p",null,[e("ECMAScript 2015 \u5F15\u5165\u4E86\u4F5C\u4E1A\u961F\u5217\u7684\u6982\u5FF5\uFF0CPromise \u4F7F\u7528\u4E86\u8BE5\u961F\u5217\uFF08\u4E5F\u5728 ES6/ES2015 \u4E2D\u5F15\u5165\uFF09"),o("br"),e(" \u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5C3D\u5FEB\u5730\u6267\u884C\u5F02\u6B65\u51FD\u6570\u7684\u7ED3\u679C(\u653E\u5728\u8C03\u7528\u5806\u6808\u7684\u524D\u9762)\uFF0C\u800C\u4E0D\u662F\u653E\u5728\u8C03\u7528\u5806\u6808\u7684\u672B\u5C3E\u3002")],-1),D=o("h2",{id:"3-process-nexttick-",class:"doc-heading"},"process.nextTick()",-1),b=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"\u6BCF\u5F53\u4E8B\u4EF6\u5FAA\u73AF\u8FDB\u884C\u4E00\u6B21\u5B8C\u6574\u7684\u884C\u7A0B\u65F6\uFF0C\u6211\u4EEC\u90FD\u5C06\u5176\u79F0\u4E3A\u4E00\u4E2A\u6EF4\u7B54")],-1),B=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,[o("code",{class:"doc-token"},"process.nextTick()"),e("\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5F02\u6B65API\uFF0C\u4ED6\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7684Event Loop\u9636\u6BB5\u3002"),o("br"),e(" \u4E8B\u5B9E\u4E0ANode\u5728\u9047\u5230\u8FD9\u4E2AAPI\u65F6\uFF0CEvent Loop\u6839\u672C\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u8FDB\u884C\uFF0C\u4F1A\u9A6C\u4E0A\u505C\u4E0B\u6765\u6267\u884C"),o("code",{class:"doc-token"},"process.nextTick()"),o("br"),e(" \u8FD9\u4E2A\u6267\u884C\u5B8C\u540E\u624D\u4F1A\u7EE7\u7EEDEvent Loop")])],-1),m=o("h2",{id:"4-setimmediate",class:"doc-heading"},"setImmediate",-1),h=o("br",null,null,-1),k={__name:"\u4E8B\u4EF6\u5FAA\u73AF",setup(F){const a=[{id:"doc-title",title:"\u4E8B\u4EF6\u5FAA\u73AF"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-es6-\u4F5C\u4E1A\u961F\u5217-\u5FAE\u4EFB\u52A1-",title:"2. ES6 \u4F5C\u4E1A\u961F\u5217(\u5FAE\u4EFB\u52A1)"},{id:"3-process-nexttick-",title:"3. process.nextTick()"},{id:"4-setimmediate",title:"4. setImmediate"}];return(g,v)=>{const n=c("doc-link"),s=c("doc-code"),l=c("doc-page");return i(),d(l,{desc:"",toc:a},{default:u(()=>[o("p",null,[t(n,{to:"http://nodejs.cn/learn/the-nodejs-event-loop"},{default:u(()=>[e("\u5B98\u65B9\u6587\u6863")]),_:1})]),r,E,A,_,p,t(s,{code:"const%20bar%20%3D%20%28%29%20%3D%3E%20console.log%28%27bar%27%29%0Aconst%20baz%20%3D%20%28%29%20%3D%3E%20console.log%28%27baz%27%29%0Aconst%20boo%20%3D%20%28%29%20%3D%3E%20console.log%28%27boo%27%29%0Aconst%20foo%20%3D%20%28%29%20%3D%3E%20%7B%0A%20%20console.log%28%27foo%27%29%0A%20%20setTimeout%28bar%2C%200%29%0A%20%20new%20Promise%28%28resolve%2C%20reject%29%20%3D%3E%0A%20%20%20%20resolve%28%27%u5E94%u8BE5%u5728%20baz%20%u4E4B%u540E%u3001bar%20%u4E4B%u524D%27%29%0A%20%20%29.then%28res%20%3D%3E%20console.log%28res%29%29%0A%20%20baz%28%29%0A%7D%0Afoo%28%29%0Aboo%28%29%0A%0A//%20%20foo%0A//%20%20baz%0A//%20%20boo%0A//%20%20%u5E94%u8BE5%u5728%20baz%20%u4E4B%u540E%u3001bar%20%u4E4B%u524D%0A//%20%20bar%0A",lang:"javascript"}),D,b,t(s,{code:"process.nextTick%28%28%29%20%3D%3E%20%7B%0A%20%20//%20%u6307%u793A%u5F15%u64CE%u5728%u5F53%u524D%u64CD%u4F5C%u7ED3%u675F%uFF08%u5728%u4E0B%u4E00%u4E2A%u4E8B%u4EF6%u5FAA%u73AF%u6EF4%u7B54%u5F00%u59CB%u4E4B%u524D%uFF09%u65F6%u8C03%u7528%u6B64%u51FD%u6570%0A%7D%29%0A",lang:"javascript"}),t(s,{code:"const%20bar%20%3D%20%28%29%20%3D%3E%20console.log%28%27bar%27%29%0Aconst%20baz%20%3D%20%28%29%20%3D%3E%20console.log%28%27baz%27%29%0Aconst%20boo%20%3D%20%28%29%20%3D%3E%20console.log%28%27boo%27%29%0Aconst%20foo%20%3D%20%28%29%20%3D%3E%20%7B%0A%20%20console.log%28%27foo%27%29%0A%20%20setTimeout%28bar%2C%200%29%0A%20%20process.nextTick%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20boo%28%29%0A%20%20%7D%29%0A%20%20new%20Promise%28%28resolve%2C%20reject%29%20%3D%3E%0A%20%20%20%20resolve%28%27%u5E94%u8BE5%u5728%20baz%20%u4E4B%u540E%u3001bar%20%u4E4B%u524D%27%29%0A%20%20%29.then%28resolve%20%3D%3E%20console.log%28resolve%29%29%0A%20%20baz%28%29%0A%7D%0Afoo%28%29%0A%0A//%20%20foo%0A//%20%20baz%0A//%20%20boo%0A//%20%20%u5E94%u8BE5%u5728%20baz%20%u4E4B%u540E%u3001bar%20%u4E4B%u524D%0A//%20%20bar%0A",lang:"javascript"}),B,m,t(s,{code:"setImmediate%28%28%29%20%3D%3E%20%7B%0A%20%20//%20%u5728%u4E8B%u4EF6%u5FAA%u73AF%u7684%u4E0B%u4E00%u4E2A%u6EF4%u7B54%u4E2D%u6267%u884C%u7684%u56DE%u8C03%0A%7D%29%0A",lang:"markup"}),o("p",null,[e("setTimeout() \u56DE\u8C03\u4E0E setImmediate() \u975E\u5E38\u76F8\u4F3C\u3002"),h,t(n,{to:"https://juejin.cn/post/6844904100195205133"},{default:u(()=>[e("\u6267\u884C\u987A\u5E8F\u53D6\u51B3\u4E8E\u5404\u79CD\u56E0\u7D20")]),_:1})])]),_:1})}}};export{k as default};
