import{r as a,o as c,c as d,f as l,g as t,aa as e,v as s}from"./vendor.js";const i=e("h2",{id:"1-translate-\u65B9\u6CD5",class:"doc-heading"},"translate() \u65B9\u6CD5",-1),m=e("p",null,"\u628A\u5143\u7D20\u5411\u5DE6\u4FA7\u79FB\u52A8 50 \u50CF\u7D20\uFF0C\u5411\u4E0B\u79FB\u52A8 100 \u50CF\u7D20\u3002",-1),_=e("h2",{id:"2-rotate-\u65B9\u6CD5",class:"doc-heading"},"rotate() \u65B9\u6CD5",-1),f=e("p",null,"\u628A\u5143\u7D20\u987A\u65F6\u9488\u65CB\u8F6C 30 \u5EA6\u3002",-1),g=e("h2",{id:"3-scale-\u65B9\u6CD5",class:"doc-heading"},"scale() \u65B9\u6CD5",-1),p=e("p",null,"\u628A\u5BBD\u5EA6\u8F6C\u6362\u4E3A\u539F\u59CB\u5C3A\u5BF8\u7684 2 \u500D\uFF0C\u628A\u9AD8\u5EA6\u8F6C\u6362\u4E3A\u539F\u59CB\u9AD8\u5EA6\u7684 4 \u500D\u3002",-1),k=e("h2",{id:"4-skew-\u65B9\u6CD5",class:"doc-heading"},"skew() \u65B9\u6CD5",-1),h=e("p",null,"y\u8F74\u9006\u65F6\u9488\u8F6C30\u5EA6\uFF0Cx\u8F74\u987A\u65F6\u9488\u8F6C20\u5EA6",-1),x=e("h2",{id:"5-\u5176\u4ED6\u5199\u6CD5",class:"doc-heading"},"\u5176\u4ED6\u5199\u6CD5",-1),w=e("p",null,[e("code",{class:"doc-token"},"translate(x,y)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 X \u548C Y \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"translateX(n)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 X \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"translateY(n)"),s(" \u5B9A\u4E49 2D \u8F6C\u6362\uFF0C\u6CBF\u7740 Y \u8F74\u79FB\u52A8\u5143\u7D20\u3002"),e("br"),e("code",{class:"doc-token"},"scale(x,y)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"scaleX(n)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u5BBD\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"scaleY(n)"),s(" \u5B9A\u4E49 2D \u7F29\u653E\u8F6C\u6362\uFF0C\u6539\u53D8\u5143\u7D20\u7684\u9AD8\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"rotate(angle)"),s(" \u5B9A\u4E49 2D \u65CB\u8F6C\uFF0C\u5728\u53C2\u6570\u4E2D\u89C4\u5B9A\u89D2\u5EA6\u3002"),e("br"),e("code",{class:"doc-token"},"skew(x-angle,y-angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 X \u548C Y \u8F74\u3002"),e("br"),e("code",{class:"doc-token"},"skewX(angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 X \u8F74\u3002"),e("br"),e("code",{class:"doc-token"},"skewY(angle)"),s(" \u5B9A\u4E49 2D \u503E\u659C\u8F6C\u6362\uFF0C\u6CBF\u7740 Y \u8F74\u3002")],-1),Y={__name:"2D\u8F6C\u6362",setup(b){const n=[{id:"doc-title",title:"css3 2D \u8F6C\u6362"},{id:"1-translate-\u65B9\u6CD5",title:"1. translate() \u65B9\u6CD5"},{id:"2-rotate-\u65B9\u6CD5",title:"2. rotate() \u65B9\u6CD5"},{id:"3-scale-\u65B9\u6CD5",title:"3. scale() \u65B9\u6CD5"},{id:"4-skew-\u65B9\u6CD5",title:"4. skew() \u65B9\u6CD5"},{id:"5-\u5176\u4ED6\u5199\u6CD5",title:"5. \u5176\u4ED6\u5199\u6CD5"}];return(D,u)=>{const o=a("doc-code"),r=a("doc-page");return c(),d(r,{desc:"css3 2D \u8F6C\u6362\u901A\u7528\u5199\u6CD5",toc:n},{default:l(()=>[i,m,t(o,{code:`div{
  transform: translate(50px,100px);
  -ms-transform: translate(50px,100px);  /* IE 9 */
  -webkit-transform: translate(50px,100px); /* Safari and Chrome */
  -o-transform: translate(50px,100px);  /* Opera */
  -moz-transform: translate(50px,100px);  /* Firefox */
}
`,lang:"css"}),_,f,t(o,{code:`div{
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);  /* IE 9 */
  -webkit-transform: rotate(30deg); /* Safari and Chrome */
  -o-transform: rotate(30deg);  /* Opera */
  -moz-transform: rotate(30deg);  /* Firefox */
}
`,lang:"css"}),g,p,t(o,{code:`div{
  transform: scale(2,4);
  -ms-transform: scale(2,4); /* IE 9 */
  -webkit-transform: scale(2,4); /* Safari \u548C Chrome */
  -o-transform: scale(2,4); /* Opera */
  -moz-transform: scale(2,4); /* Firefox */
}
`,lang:"css"}),k,h,t(o,{code:`div{
  transform: skew(30deg,20deg);
  -ms-transform: skew(30deg,20deg); /* IE 9 */
  -webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
  -o-transform: skew(30deg,20deg); /* Opera */
  -moz-transform: skew(30deg,20deg); /* Firefox */
}
`,lang:"css"}),x,w]),_:1})}}};export{Y as default};
