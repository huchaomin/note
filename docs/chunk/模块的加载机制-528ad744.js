import{r as n,o as c,c as i,f as s,g as r,aa as u,v as e}from"./vendor-e1827163.js";const d=u("h2",{id:"1-\u673A\u5236",class:"doc-heading"},"\u673A\u5236",-1),a=u("p",null,[e("CommonJS\u6A21\u5757\u7684\u52A0\u8F7D\u673A\u5236\u662F:\u8F93\u5165\u7684\u662F\u88AB\u8F93\u51FA\u7684\u503C\u7684"),u("strong",null,"\u6D45\u62F7\u8D1D"),e("\u3002"),u("br"),e(" \u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6\u8F93\u51FA\u4E00\u4E2A\u503C\uFF0C\u6A21\u5757\u5185\u90E8\u7684\u53D8\u5316\u5C31\u5F71\u54CD\u4E0D\u5230\u8FD9\u4E2A\u503C")],-1),A=u("h2",{id:"2-require\u7684\u5185\u90E8\u5904\u7406\u6D41\u7A0B",class:"doc-heading"},"require\u7684\u5185\u90E8\u5904\u7406\u6D41\u7A0B",-1),F=u("p",null,[e("CommonJS\u89C4\u8303\u4E4B\u4E2D\u7684require\u547D\u4EE4,\u7528\u6765\u52A0\u8F7D\u5176\u4ED6\u6A21\u5757\u7684\u547D\u4EE4\u3002"),u("br"),e(" \u5B83\u5176\u5B9E\u4E0D\u662F\u4E00\u4E2A\u5168\u5C40\u547D\u4EE4\uFF0C\u800C\u662F\u6307\u5411\u5F53\u524D\u6A21\u5757\u7684module.require\u547D\u4EE4\uFF0C\u800C\u540E\u8005\u53C8\u8C03\u7528Node\u7684\u5185\u90E8\u547D\u4EE4Module._load\u3002")],-1),_=u("p",null,"module.compile()\u6267\u884C\u903B\u8F91\u5982\u4E0B",-1),C=u("p",null,"require\u51FD\u6570\u53CA\u5176\u8F85\u52A9\u65B9\u6CD5\u4E3B\u8981\u5982\u4E0B",-1),E=u("ul",null,[u("li",null,"require(): \u52A0\u8F7D\u5916\u90E8\u6A21\u5757"),u("li",null,"require.resolve()\uFF1A\u5C06\u6A21\u5757\u540D\u89E3\u6790\u5230\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84"),u("li",null,"require.main\uFF1A\u6307\u5411\u4E3B\u6A21\u5757"),u("li",null,"require.cache\uFF1A\u6307\u5411\u6240\u6709\u7F13\u5B58\u7684\u6A21\u5757"),u("li",null,"require.extensions\uFF1A\u6839\u636E\u6587\u4EF6\u7684\u540E\u7F00\u540D\uFF0C\u8C03\u7528\u4E0D\u540C\u7684\u6267\u884C\u51FD\u6570")],-1),B=u("p",null,[e("\u4E00\u65E6require\u51FD\u6570\u51C6\u5907\u5B8C\u6BD5\uFF0C\u6574\u4E2A\u6240\u8981\u52A0\u8F7D\u7684\u811A\u672C\u5185\u5BB9\uFF0C\u5C31\u88AB\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u4E4B\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u6C61\u67D3\u5168\u5C40\u73AF\u5883\u3002"),u("br"),e(" \u8BE5\u51FD\u6570\u7684\u53C2\u6570\u5305\u62ECrequire\u3001module\u3001exports\uFF0C\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u53C2\u6570\u3002")],-1),p=u("p",null,"Module._compile\u65B9\u6CD5\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u6240\u4EE5Module._load\u8981\u7B49\u5B83\u6267\u884C\u5B8C\u6210\uFF0C\u624D\u4F1A\u5411\u7528\u6237\u8FD4\u56DEmodule.exports\u7684\u503C\u3002",-1),g={__name:"\u6A21\u5757\u7684\u52A0\u8F7D\u673A\u5236",setup(m){const t=[{id:"doc-title",title:"commonJS\u4E4B\u6A21\u5757\u7684\u52A0\u8F7D\u673A\u5236"},{id:"1-\u673A\u5236",title:"1. \u673A\u5236"},{id:"2-require\u7684\u5185\u90E8\u5904\u7406\u6D41\u7A0B",title:"2. require\u7684\u5185\u90E8\u5904\u7406\u6D41\u7A0B"}];return(D,q)=>{const o=n("doc-code"),l=n("doc-page");return c(),i(l,{desc:"",toc:t},{default:s(()=>[d,a,r(o,{code:"//%20lib.js%0Avar%20counter%20%3D%203%0Afunction%20incCounter%28%29%20%7B%0A%20%20counter++%0A%7D%0Amodule.exports%20%3D%20%7B%0A%20%20counter%3A%20counter%2C%0A%20%20incCounter%3A%20incCounter%2C%0A%7D%0A",lang:"javascript"}),r(o,{code:"//%20main.js%0Avar%20counter%20%3D%20require%28%27./lib%27%29.counter%0Avar%20incCounter%20%3D%20require%28%27./lib%27%29.incCounter%0Aconsole.log%28counter%29%20%20//%203%0AincCounter%28%29%0Aconsole.log%28counter%29%20//%203%0A",lang:"javascript"}),A,F,r(o,{code:"Module._load%20%3D%20function%28request%2C%20parent%2C%20isMain%29%20%7B%0A%20%20//%201.%20%u68C0%u67E5%20Module._cache%uFF0C%u662F%u5426%u7F13%u5B58%u4E4B%u4E2D%u6709%u6307%u5B9A%u6A21%u5757%0A%20%20//%202.%20%u5982%u679C%u7F13%u5B58%u4E4B%u4E2D%u6CA1%u6709%uFF0C%u5C31%u521B%u5EFA%u4E00%u4E2A%u65B0%u7684Module%u5B9E%u4F8B%0A%20%20//%203.%20%u5C06%u5B83%u4FDD%u5B58%u5230%u7F13%u5B58%0A%20%20//%204.%20%u4F7F%u7528%20module.load%28%29%20%u52A0%u8F7D%u6307%u5B9A%u7684%u6A21%u5757%u6587%u4EF6%uFF0C%0A%20%20//%20%20%20%20%u8BFB%u53D6%u6587%u4EF6%u5185%u5BB9%u4E4B%u540E%uFF0C%u4F7F%u7528%20module.compile%28%29%20%u6267%u884C%u6587%u4EF6%u4EE3%u7801%0A%20%20//%205.%20%u5982%u679C%u52A0%u8F7D/%u89E3%u6790%u8FC7%u7A0B%u62A5%u9519%uFF0C%u5C31%u4ECE%u7F13%u5B58%u5220%u9664%u8BE5%u6A21%u5757%0A%20%20//%206.%20%u8FD4%u56DE%u8BE5%u6A21%u5757%u7684%20module.exports%0A%7D%0A",lang:"javascript"}),_,r(o,{code:"Module.prototype._compile%20%3D%20function%28content%2C%20filename%29%20%7B%0A%20%20//%201.%20%u751F%u6210%u4E00%u4E2Arequire%u51FD%u6570%uFF0C%u6307%u5411module.require%0A%20%20//%202.%20%u52A0%u8F7D%u5176%u4ED6%u8F85%u52A9%u65B9%u6CD5%u5230require%0A%20%20//%203.%20%u5C06%u6587%u4EF6%u5185%u5BB9%u653E%u5230%u4E00%u4E2A%u51FD%u6570%u4E4B%u4E2D%uFF0C%u8BE5%u51FD%u6570%u53EF%u8C03%u7528%20require%0A%20%20//%204.%20%u6267%u884C%u8BE5%u51FD%u6570%0A%7D%0A",lang:"javascript"}),C,E,B,r(o,{code:"%28function%20%28exports%2C%20require%2C%20module%2C%20__filename%2C%20__dirname%29%20%7B%0A%20%20//%20YOUR%20CODE%20INJECTED%20HERE%21%0A%7D%29%0A",lang:"javascript"}),p]),_:1})}}};export{g as default};
