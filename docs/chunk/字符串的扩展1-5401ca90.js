import{r as c,o as d,c as s,f as a,g as e,aa as t}from"./vendor-e1827163.js";const r=t("h2",{id:"1-\u5B57\u7B26\u7684-unicode-\u8868\u793A\u6CD5",class:"doc-heading"},"\u5B57\u7B26\u7684 Unicode \u8868\u793A\u6CD5",-1),u=t("p",null,"\u7528{}\u62EC\u4E0A\u8D85\u8FC70xFFFF\u7684\u6570\u503C\uFF0C\u5C31\u80FD\u6B63\u786E\u89E3\u8BFB\u8BE5\u5B57\u7B26\u3002",-1),A=t("p",null,"\u6709\u4E86\u8FD9\u79CD\u8868\u793A\u6CD5\u4E4B\u540E\uFF0CJavaScript \u5171\u6709 6 \u79CD\u65B9\u6CD5\u53EF\u4EE5\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u3002",-1),l=t("h2",{id:"2-codepointat-",class:"doc-heading"},"codePointAt()",-1),_=t("p",null,"\u80FD\u591F\u6B63\u786E\u5904\u7406 4 \u4E2A\u5B57\u8282\u50A8\u5B58\u7684\u5B57\u7B26\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u7684\u7801\u70B9\u7684\u5341\u8FDB\u5236\u503C\u3002",-1),D=t("p",null,"\u5982\u679C\u60F3\u8981\u5341\u516D\u8FDB\u5236\u7684\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528toString\u65B9\u6CD5\u8F6C\u6362\u4E00\u4E0B\u3002",-1),p=t("p",null,"codePointAt\u65B9\u6CD5\u662F\u6D4B\u8BD5\u4E00\u4E2A\u5B57\u7B26\u7531\u4E24\u4E2A\u5B57\u8282\u8FD8\u662F\u7531\u56DB\u4E2A\u5B57\u8282\u7EC4\u6210\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u3002",-1),B=t("h2",{id:"3-string-fromcodepoint-",class:"doc-heading"},"String.fromCodePoint()",-1),g=t("p",null,"ES5 \u63D0\u4F9BString.fromCharCode\u65B9\u6CD5\uFF0C\u7528\u4E8E\u4ECE\u7801\u70B9\u8FD4\u56DE\u5BF9\u5E94\u5B57\u7B26\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u80FD\u8BC6\u522B 32 \u4F4D\u7684 UTF-16 \u5B57\u7B26\uFF08Unicode \u7F16\u53F7\u5927\u4E8E0xFFFF\uFF09",-1),m={__name:"\u5B57\u7B26\u4E32\u7684\u6269\u5C551",setup(h){const i=[{id:"doc-title",title:"\u5B57\u7B26\u4E32\u7684\u6269\u5C55"},{id:"1-\u5B57\u7B26\u7684-unicode-\u8868\u793A\u6CD5",title:"1. \u5B57\u7B26\u7684 Unicode \u8868\u793A\u6CD5"},{id:"2-codepointat-",title:"2. codePointAt()"},{id:"3-string-fromcodepoint-",title:"3. String.fromCodePoint()"}];return(F,C)=>{const o=c("doc-code"),n=c("doc-page");return d(),s(n,{desc:"",toc:i},{default:a(()=>[r,u,e(o,{code:"%22%5Cu20BB7%22%0A//%20%27%u20BB7%27%0A//JavaScript%20%u4F1A%u7406%u89E3%u6210%5Cu20BB+7%0A%22%5Cu%7B20BB7%7D%22%0A//%20%22%uD842%uDFB7%22%0A",lang:"javascript"}),A,e(o,{code:"%27%5Cz%27%20%3D%3D%3D%20%27z%27%20%20//%20true%0A%27%5C172%27%20%3D%3D%3D%20%27z%27%20//%20true%0A%27%5Cx7A%27%20%3D%3D%3D%20%27z%27%20//%20true%0A%27%5Cu007A%27%20%3D%3D%3D%20%27z%27%20//%20true%0A%27%5Cu%7B7A%7D%27%20%3D%3D%3D%20%27z%27%20//%20true%0A",lang:"javascript"}),l,_,e(o,{code:"let%20s%20%3D%20%27%uD842%uDFB7a%27%0As.codePointAt%280%29%20//%20134071%0As.codePointAt%281%29%20//%2057271%0As.codePointAt%282%29%20//%2097%0A",lang:"javascript"}),D,e(o,{code:"let%20s%20%3D%20%27%uD842%uDFB7a%27%0As.codePointAt%280%29.toString%2816%29%20//%20%2220bb7%22%0As.codePointAt%282%29.toString%2816%29%20//%20%2261%22%0A",lang:"javascript"}),p,e(o,{code:"function%20is32Bit%28c%29%20%7B%0A%20%20return%20c.codePointAt%280%29%20%3E%200xFFFF%0A%7D%0Ais32Bit%28%22%uD842%uDFB7%22%29%20//%20true%0Ais32Bit%28%22a%22%29%20//%20false%0A",lang:"javascript"}),B,g,e(o,{code:"String.fromCharCode%280x20BB7%29%0A//%20%22%u0BB7%22%0AString.fromCodePoint%280x20BB7%29%0A//%20%22%uD842%uDFB7%22%0A",lang:"javascript"})]),_:1})}}};export{m as default};
