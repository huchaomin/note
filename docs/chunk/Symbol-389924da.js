import{n as s,o as a,p as b,w as c,a as t,i as o,f as e}from"./vendor-a2411ed8.js";const n=o("h2",{id:"1-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),r=o("p",null,"\u5B83\u662F JavaScript \u8BED\u8A00\u7684\u7B2C\u4E03\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u8868\u793A\u72EC\u4E00\u65E0\u4E8C",-1),i=o("p",null,"\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5BF9 Symbol \u5B9E\u4F8B\u7684\u63CF\u8FF0\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5728\u63A7\u5236\u53F0\u663E\u793A\uFF0C\u6216\u8005\u8F6C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u6BD4\u8F83\u5BB9\u6613\u533A\u5206\u3002",-1),d=o("p",null,"\u56E0\u4E3A\u72EC\u4E00\u65E0\u4E8C\uFF0C\u6240\u4EE5\u4E0D\u76F8\u7B49",-1),S=o("p",null,"\u4E0D\u80FD\u4E0E\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u8FD0\u7B97",-1),A=o("p",null,"\u53EF\u4EE5\u663E\u5F0F\u8F6C\u4E3A\u5B57\u7B26\u4E32",-1),u=o("p",null,"\u4E5F\u53EF\u4EE5\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u4F46\u662F\u4E0D\u80FD\u8F6C\u4E3A\u6570\u503C",-1),D=o("h2",{id:"2-symbol-prototype-description",class:"doc-heading"},"Symbol.prototype.description",-1),p=o("p",null,"\u8FD4\u56DESymbol\u503C\u5F97\u63CF\u8FF0",-1),_=o("h2",{id:"3-\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684-symbol",class:"doc-heading"},"\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684 Symbol",-1),f=o("p",null,"Symbol \u503C\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u65F6\uFF0C\u4E0D\u80FD\u7528\u70B9\u8FD0\u7B97\u7B26,\u56E0\u4E3A\u70B9\u8FD0\u7B97\u7B26\u540E\u9762\u603B\u662F\u5B57\u7B26\u4E32",-1),g=o("p",null,"\u540C\u7406\uFF0C\u5728\u5BF9\u8C61\u7684\u5185\u90E8\uFF0C\u4F7F\u7528 Symbol \u503C\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0CSymbol \u503C\u5FC5\u987B\u653E\u5728\u65B9\u62EC\u53F7\u4E4B\u4E2D\u3002",-1),h=o("h2",{id:"4-object-getownpropertysymbols-",class:"doc-heading"},"Object.getOwnPropertySymbols()",-1),j=o("p",null,[e("\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u5F53\u524D\u5BF9\u8C61\u7684\u6240\u6709\u7528\u4F5C\u5C5E\u6027\u540D\u7684 Symbol \u503C\u3002"),o("br"),e(" Symbol \u4F5C\u4E3A\u5C5E\u6027\u540D\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u4F1A\u51FA\u73B0\u5728for\u2026in\u3001for\u2026of\u5FAA\u73AF\u4E2D\uFF0C\u4E5F\u4E0D\u4F1A\u88ABObject.keys()\u3001Object.getOwnPropertyNames()\u3001JSON.stringify()\u8FD4\u56DE\u3002\u4F46\u662F\uFF0C\u5B83\u4E5F\u4E0D\u662F\u79C1\u6709\u5C5E\u6027")],-1),B=o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,"\u7531\u4E8E\u4EE5 Symbol \u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF0C\u4E0D\u4F1A\u88AB\u5E38\u89C4\u65B9\u6CD5\u904D\u5386\u5F97\u5230\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u4E3A\u5BF9\u8C61\u5B9A\u4E49\u4E00\u4E9B\u975E\u79C1\u6709\u7684\u3001\u4F46\u53C8\u5E0C\u671B\u53EA\u7528\u4E8E\u5185\u90E8\u7684\u65B9\u6CD5\u3002")],-1),C=o("h2",{id:"5-symbol-for-",class:"doc-heading"},"Symbol.for()",-1),v=o("p",null,[e("Symbol.for()\u4E0ESymbol()\u8FD9\u4E24\u79CD\u5199\u6CD5\uFF0C\u90FD\u4F1A\u751F\u6210\u65B0\u7684 Symbol"),o("br"),e(" \u5B83\u4EEC\u7684\u533A\u522B\u662F\uFF0C\u524D\u8005\u4F1A\u88AB\u767B\u8BB0\u5728\u5168\u5C40\u73AF\u5883\u4E2D\u4F9B\u641C\u7D22\uFF0C\u540E\u8005\u4E0D\u4F1A\u3002"),o("br"),e(" Symbol.for()\u4E0D\u4F1A\u6BCF\u6B21\u8C03\u7528\u5C31\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Symbol \u7C7B\u578B\u7684\u503C\uFF0C\u800C\u662F\u4F1A\u5148\u68C0\u67E5\u7ED9\u5B9A\u7684key\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u624D\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u503C\u3002")],-1),E=o("p",null,"\u6BD4\u5982\uFF0C\u5982\u679C\u4F60\u8C03\u7528Symbol.for(\u201Ccat\u201D)30 \u6B21\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u8FD4\u56DE\u540C\u4E00\u4E2A Symbol \u503C\uFF0C\u4F46\u662F\u8C03\u7528Symbol(\u201Ccat\u201D)30 \u6B21\uFF0C\u4F1A\u8FD4\u56DE 30 \u4E2A\u4E0D\u540C\u7684 Symbol \u503C\u3002",-1),k=o("h2",{id:"6-symbol-keyfor-",class:"doc-heading"},"Symbol.keyFor()",-1),w=o("p",null,"\u8FD4\u56DE\u4E00\u4E2A\u5DF2\u767B\u8BB0\u7684 Symbol \u7C7B\u578B\u503C\u7684key",-1),F=o("p",null,"Symbol.for\u4E3A Symbol \u503C\u767B\u8BB0\u7684\u540D\u5B57\uFF0C\u662F\u5168\u5C40\u73AF\u5883\u7684\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684 iframe \u6216 service worker \u4E2D\u53D6\u5230\u540C\u4E00\u4E2A\u503C\u3002",-1),M={__name:"Symbol",setup(O){const y=[{id:"doc-title",title:"Symbol"},{id:"1-\u4F5C\u7528",title:"1. \u4F5C\u7528"},{id:"2-symbol-prototype-description",title:"2. Symbol.prototype.description"},{id:"3-\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684-symbol",title:"3. \u4F5C\u4E3A\u5C5E\u6027\u540D\u7684 Symbol"},{id:"4-object-getownpropertysymbols-",title:"4. Object.getOwnPropertySymbols()"},{id:"5-symbol-for-",title:"5. Symbol.for()"},{id:"6-symbol-keyfor-",title:"6. Symbol.keyFor()"}];return(H,N)=>{const l=s("doc-code"),m=s("doc-page");return a(),b(m,{desc:"",toc:y},{default:c(()=>[n,r,t(l,{code:"let%20s%20%3D%20Symbol%28%29%0Atypeof%20s%0A//%20%22symbol%22%0A",lang:"javascript"}),i,t(l,{code:"let%20s1%20%3D%20Symbol%28%27foo%27%29%0Alet%20s2%20%3D%20Symbol%28%27bar%27%29%0As1%20//%20Symbol%28foo%29%0As2%20//%20Symbol%28bar%29%0As1.toString%28%29%20//%20%22Symbol%28foo%29%22%0As2.toString%28%29%20//%20%22Symbol%28bar%29%22%0A",lang:"javascript"}),d,t(l,{code:"//%20%u6CA1%u6709%u53C2%u6570%u7684%u60C5%u51B5%0Alet%20s1%20%3D%20Symbol%28%29%0Alet%20s2%20%3D%20Symbol%28%29%0As1%20%3D%3D%3D%20s2%20//%20false%0A%0A//%20%u6709%u53C2%u6570%u7684%u60C5%u51B5%0Alet%20s1%20%3D%20Symbol%28%27foo%27%29%0Alet%20s2%20%3D%20Symbol%28%27foo%27%29%0As1%20%3D%3D%3D%20s2%20//%20false%0A",lang:"javascript"}),S,t(l,{code:"let%20sym%20%3D%20Symbol%28%27My%20symbol%27%29%0A%22your%20symbol%20is%20%22%20+%20sym%0A//VM514%3A1%20Uncaught%20TypeError%3A%20Cannot%20convert%20a%20Symbol%20value%20to%20a%20string%0A",lang:"javascript"}),A,t(l,{code:"let%20sym%20%3D%20Symbol%28%27My%20symbol%27%29%0AString%28sym%29%20//%20%27Symbol%28My%20symbol%29%27%0Asym.toString%28%29%20//%20%27Symbol%28My%20symbol%29%27%0A",lang:"javascript"}),u,t(l,{code:"let%20sym%20%3D%20Symbol%28%29%0ABoolean%28sym%29%20//%20true%0A%21sym%20%20//%20false%0Aif%20%28sym%29%20%7B%0A%20%20//%20...%0A%7D%0ANumber%28sym%29%20//%20TypeError%0Asym%20+%202%20//%20TypeError%0A",lang:"javascript"}),D,p,t(l,{code:"const%20sym%20%3D%20Symbol%28%27foo%27%29%0Asym.description%20//%20%22foo%22%0A",lang:"javascript"}),t(l,{code:"//%u5F53%u7136%u8FD9%u79CD%u65B9%u5F0F%u4E5F%u53EF%u4EE5%0Aconst%20sym%20%3D%20Symbol%28%27foo%27%29%0Asym.toString%28%29%20//%20%22Symbol%28foo%29%22%0A",lang:"javascript"}),_,t(l,{code:"let%20mySymbol%20%3D%20Symbol%28%29%0A//%20%u7B2C%u4E00%u79CD%u5199%u6CD5%0Alet%20a%20%3D%20%7B%7D%0Aa%5BmySymbol%5D%20%3D%20%27Hello%21%27%0A//%20%u7B2C%u4E8C%u79CD%u5199%u6CD5%0Alet%20a%20%3D%20%7B%0A%20%20%5BmySymbol%5D%3A%20%27Hello%21%27%0A%7D%0A//%20%u7B2C%u4E09%u79CD%u5199%u6CD5%0Alet%20a%20%3D%20%7B%7D%0AObject.defineProperty%28a%2C%20mySymbol%2C%20%7B%20value%3A%20%27Hello%21%27%20%7D%29%0A//%20%u4EE5%u4E0A%u5199%u6CD5%u90FD%u5F97%u5230%u540C%u6837%u7ED3%u679C%0Aa%5BmySymbol%5D%20//%20%22Hello%21%22%0A",lang:"javascript"}),f,t(l,{code:"const%20mySymbol%20%3D%20Symbol%28%29%0Aconst%20a%20%3D%20%7B%7D%0Aa.mySymbol%20%3D%20%27Hello%21%27%0Aa%5BmySymbol%5D%20//%20undefined%0Aa%5B%27mySymbol%27%5D%20//%20%22Hello%21%22%0A",lang:"javascript"}),g,t(l,{code:"let%20obj%20%3D%20%7B%0A%20%20%5Bs%5D%28arg%29%20%7B%20...%20%7D%0A%7D%0A",lang:"javascript"}),h,j,t(l,{code:"const%20obj%20%3D%20%7B%7D%0Alet%20a%20%3D%20Symbol%28%27a%27%29%0Alet%20b%20%3D%20Symbol%28%27b%27%29%0Aobj%5Ba%5D%20%3D%20%27Hello%27%0Aobj%5Bb%5D%20%3D%20%27World%27%0Aconst%20objectSymbols%20%3D%20Object.getOwnPropertySymbols%28obj%29%0AobjectSymbols%0A//%20%5BSymbol%28a%29%2C%20Symbol%28b%29%5D%0A",lang:"javascript"}),B,C,v,E,t(l,{code:"Symbol.for%28%22bar%22%29%20%3D%3D%3D%20Symbol.for%28%22bar%22%29%0A//%20true%0ASymbol%28%22bar%22%29%20%3D%3D%3D%20Symbol%28%22bar%22%29%0A//%20false%0A",lang:"javascript"}),k,w,t(l,{code:"let%20s1%20%3D%20Symbol.for%28%22foo%22%29%0ASymbol.keyFor%28s1%29%20//%20%22foo%22%0Alet%20s2%20%3D%20Symbol%28%22foo%22%29%0ASymbol.keyFor%28s2%29%20//%20undefined%0A",lang:"javascript"}),F,t(l,{code:"iframe%20%3D%20document.createElement%28%27iframe%27%29%0Aiframe.src%20%3D%20String%28window.location%29%0Adocument.body.appendChild%28iframe%29%0Aiframe.contentWindow.Symbol.for%28%27foo%27%29%20%3D%3D%3D%20Symbol.for%28%27foo%27%29%0A",lang:"javascript"})]),_:1})}}};export{M as default};
