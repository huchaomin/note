import{n as a,o as n,p as d,w as l,a as t,i as e,f as s}from"./vendor-a2411ed8.js";const i=e("h2",{id:"1-translate-\u65B9\u6CD5",class:"doc-heading"},"translate() \u65B9\u6CD5",-1),A=e("p",null,"\u628A\u5143\u7D20\u5411\u5DE6\u4FA7\u79FB\u52A8 50 \u50CF\u7D20\uFF0C\u5411\u4E0B\u79FB\u52A8 100 \u50CF\u7D20\u3002",-1),m=e("h2",{id:"2-rotate-\u65B9\u6CD5",class:"doc-heading"},"rotate() \u65B9\u6CD5",-1),_=e("p",null,"\u628A\u5143\u7D20\u987A\u65F6\u9488\u65CB\u8F6C 30 \u5EA6\u3002",-1),f=e("h2",{id:"3-scale-\u65B9\u6CD5",class:"doc-heading"},"scale() \u65B9\u6CD5",-1),g=e("p",null,"\u628A\u5BBD\u5EA6\u8F6C\u6362\u4E3A\u539F\u59CB\u5C3A\u5BF8\u7684 2 \u500D\uFF0C\u628A\u9AD8\u5EA6\u8F6C\u6362\u4E3A\u539F\u59CB\u9AD8\u5EA6\u7684 4 \u500D\u3002",-1),p=e("h2",{id:"4-skew-\u65B9\u6CD5",class:"doc-heading"},"skew() \u65B9\u6CD5",-1),k=e("p",null,"y\u8F74\u9006\u65F6\u9488\u8F6C30\u5EA6\uFF0Cx\u8F74\u987A\u65F6\u9488\u8F6C20\u5EA6",-1),B=e("h2",{id:"5-\u5176\u4ED6\u5199\u6CD5",class:"doc-heading"},"\u5176\u4ED6\u5199\u6CD5",-1),h=e("p",null,[e("code",{class:"doc-token"},"translate(x,y)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 X \u548C Y \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"translateX(n)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 X \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"translateY(n)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 Y \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"scale(x,y)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"scaleX(n)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u5BBD\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"scaleY(n)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u9AD8\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"rotate(angle)"),s(" \u5B9A\u4E49 2D \u65CB\u8F6C\uFF0C\u5728\u53C2\u6570\u4E2D\u89C4\u5B9A\u89D2\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"skew(x-angle,y-angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 X \u548C Y \u8F74\u3002"),e("br"),e("code",{class:"doc-token"},"skewX(angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 X \u8F74\u3002"),e("br"),e("code",{class:"doc-token"},"skewY(angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 Y \u8F74\u3002")],-1),b={__name:"2D\u8F6C\u6362",setup(x){const r=[{id:"doc-title",title:"css3 2D \u8F6C\u6362"},{id:"1-translate-\u65B9\u6CD5",title:"1. translate() \u65B9\u6CD5"},{id:"2-rotate-\u65B9\u6CD5",title:"2. rotate() \u65B9\u6CD5"},{id:"3-scale-\u65B9\u6CD5",title:"3. scale() \u65B9\u6CD5"},{id:"4-skew-\u65B9\u6CD5",title:"4. skew() \u65B9\u6CD5"},{id:"5-\u5176\u4ED6\u5199\u6CD5",title:"5. \u5176\u4ED6\u5199\u6CD5"}];return(C,w)=>{const o=a("doc-code"),c=a("doc-page");return n(),d(c,{desc:"css3 2D \u8F6C\u6362\u901A\u7528\u5199\u6CD5",toc:r},{default:l(()=>[i,A,t(o,{code:"div%7B%0A%20%20transform%3A%20translate%2850px%2C100px%29%3B%0A%20%20-ms-transform%3A%20translate%2850px%2C100px%29%3B%20%20/*%20IE%209%20*/%0A%20%20-webkit-transform%3A%20translate%2850px%2C100px%29%3B%20/*%20Safari%20and%20Chrome%20*/%0A%20%20-o-transform%3A%20translate%2850px%2C100px%29%3B%20%20/*%20Opera%20*/%0A%20%20-moz-transform%3A%20translate%2850px%2C100px%29%3B%20%20/*%20Firefox%20*/%0A%7D%0A",lang:"css"}),m,_,t(o,{code:"div%7B%0A%20%20transform%3A%20rotate%2830deg%29%3B%0A%20%20-ms-transform%3A%20rotate%2830deg%29%3B%20%20/*%20IE%209%20*/%0A%20%20-webkit-transform%3A%20rotate%2830deg%29%3B%20/*%20Safari%20and%20Chrome%20*/%0A%20%20-o-transform%3A%20rotate%2830deg%29%3B%20%20/*%20Opera%20*/%0A%20%20-moz-transform%3A%20rotate%2830deg%29%3B%20%20/*%20Firefox%20*/%0A%7D%0A",lang:"css"}),f,g,t(o,{code:"div%7B%0A%20%20transform%3A%20scale%282%2C4%29%3B%0A%20%20-ms-transform%3A%20scale%282%2C4%29%3B%20/*%20IE%209%20*/%0A%20%20-webkit-transform%3A%20scale%282%2C4%29%3B%20/*%20Safari%20%u548C%20Chrome%20*/%0A%20%20-o-transform%3A%20scale%282%2C4%29%3B%20/*%20Opera%20*/%0A%20%20-moz-transform%3A%20scale%282%2C4%29%3B%20/*%20Firefox%20*/%0A%7D%0A",lang:"css"}),p,k,t(o,{code:"div%7B%0A%20%20transform%3A%20skew%2830deg%2C20deg%29%3B%0A%20%20-ms-transform%3A%20skew%2830deg%2C20deg%29%3B%20/*%20IE%209%20*/%0A%20%20-webkit-transform%3A%20skew%2830deg%2C20deg%29%3B%20/*%20Safari%20and%20Chrome%20*/%0A%20%20-o-transform%3A%20skew%2830deg%2C20deg%29%3B%20/*%20Opera%20*/%0A%20%20-moz-transform%3A%20skew%2830deg%2C20deg%29%3B%20/*%20Firefox%20*/%0A%7D%0A",lang:"css"}),B,h]),_:1})}}};export{b as default};
