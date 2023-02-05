import{r as l,o as e,c as d,f as n,a9 as t,g as a,v as i}from"./vendor.js";const r=t("h2",{id:"1-javascript",class:"doc-heading"},"javascript",-1),p=t("h3",{id:"2-\u7EC4\u6210",class:"doc-heading"},"\u7EC4\u6210",-1),_=t("ul",null,[t("li",null,"ECMAScript\uFF0C\u63CF\u8FF0\u4E86\u8BE5\u8BED\u8A00\u7684\u8BED\u6CD5\u548C\u57FA\u672C\u5BF9\u8C61\uFF0C\u5982\u7C7B\u578B\u3001\u8FD0\u7B97\u3001\u6D41\u7A0B\u63A7\u5236\u3001\u9762\u5411\u5BF9\u8C61\u3001\u5F02\u5E38\u7B49\u3002"),t("li",null,"\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF08DOM\uFF09\uFF0C\u63CF\u8FF0\u5904\u7406\u7F51\u9875\u5185\u5BB9\u7684\u65B9\u6CD5\u548C\u63A5\u53E3\u3002"),t("li",null,"\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\uFF08BOM\uFF09\uFF0C\u63CF\u8FF0\u4E0E\u6D4F\u89C8\u5668\u8FDB\u884C\u4EA4\u4E92\u7684\u65B9\u6CD5\u548C\u63A5\u53E3\u3002")],-1),u=t("h3",{id:"3-\u7279\u70B9",class:"doc-heading"},"\u7279\u70B9",-1),h=t("ul",null,[t("li",null,[i("\u89E3\u91CA\u578B\u7684\u811A\u672C\u8BED\u8A00\u3002JavaScript\u662F\u4E00\u79CD\u89E3\u91CA\u578B\u7684\u811A\u672C\u8BED\u8A00,C\u3001C++\u7B49\u8BED\u8A00\u5148\u7F16\u8BD1\u540E\u6267\u884C,\u800CJavaScript\u662F\u5728\u7A0B\u5E8F\u7684\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u9010\u884C\u8FDB\u884C\u89E3\u91CA\u3002"),t("br"),i(" \u57FA\u4E8E\u5BF9\u8C61\u3002JavaScript\u662F\u4E00\u79CD\u57FA\u4E8E\u5BF9\u8C61\u7684\u811A\u672C\u8BED\u8A00,\u5B83\u4E0D\u4EC5\u53EF\u4EE5\u521B\u5EFA\u5BF9\u8C61,\u4E5F\u80FD\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u3002")]),t("li",null,"\u7B80\u5355\u3002JavaScript\u8BED\u8A00\u4E2D\u91C7\u7528\u7684\u662F\u5F31\u7C7B\u578B\u7684\u53D8\u91CF\u7C7B\u578B,\u5BF9\u4F7F\u7528\u7684\u6570\u636E\u7C7B\u578B\u672A\u505A\u51FA\u4E25\u683C\u7684\u8981\u6C42,\u662F\u57FA\u4E8EJava\u57FA\u672C\u8BED\u53E5\u548C\u63A7\u5236\u7684\u811A\u672C\u8BED\u8A00,\u5176\u8BBE\u8BA1\u7B80\u5355\u7D27\u51D1\u3002"),t("li",null,"\u52A8\u6001\u6027\u3002JavaScript\u662F\u4E00\u79CD\u91C7\u7528\u4E8B\u4EF6\u9A71\u52A8\u7684\u811A\u672C\u8BED\u8A00,\u5B83\u4E0D\u9700\u8981\u7ECF\u8FC7Web\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u5BF9\u7528\u6237\u7684\u8F93\u5165\u505A\u51FA\u54CD\u5E94\u3002\u5728\u8BBF\u95EE\u4E00\u4E2A\u7F51\u9875\u65F6,\u9F20\u6807\u5728\u7F51\u9875\u4E2D\u8FDB\u884C\u9F20\u6807\u70B9\u51FB\u6216\u4E0A\u4E0B\u79FB\u3001\u7A97\u53E3\u79FB\u52A8\u7B49\u64CD\u4F5CJavaScript\u90FD\u53EF\u76F4\u63A5\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u7ED9\u51FA\u76F8\u5E94\u7684\u54CD\u5E94\u3002"),t("li",null,"\u8DE8\u5E73\u53F0\u6027\u3002JavaScript\u811A\u672C\u8BED\u8A00\u4E0D\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF,\u4EC5\u9700\u8981\u6D4F\u89C8\u5668\u7684\u652F\u6301\u3002\u56E0\u6B64\u4E00\u4E2AJavaScript\u811A\u672C\u5728\u7F16\u5199\u540E\u53EF\u4EE5\u5E26\u5230\u4EFB\u610F\u673A\u5668\u4E0A\u4F7F\u7528,\u524D\u63D0\u4E0A\u673A\u5668\u4E0A\u7684\u6D4F\u89C8\u5668\u652F \u6301JavaScript\u811A\u672C\u8BED\u8A00,\u76EE\u524DJavaScript\u5DF2\u88AB\u5927\u591A\u6570\u7684\u6D4F\u89C8\u5668\u6240\u652F\u6301\u3002")],-1),M=t("h2",{id:"4-ecmascript-\uFF08javascript\u6838\u5FC3\u4E0E\u8BED\u6CD5\uFF09",class:"doc-heading"},"ECMAScript \uFF08JavaScript\u6838\u5FC3\u4E0E\u8BED\u6CD5\uFF09",-1),S=t("h3",{id:"5-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),v=t("ul",null,[t("li",null,"ECMAScript\u662F\u4E00\u4E2A\u6807\u51C6\uFF08\u6B27\u6D32\u8BA1\u7B97\u673A\u5236\u9020\u5546\u534F\u4F1A\uFF09\uFF0CJavaScript\u53EA\u662F\u5B83\u7684\u4E00\u4E2A\u5B9E\u73B0\uFF0C\u5176\u4ED6\u5B9E\u73B0\u5305\u62ECActionScript\uFF08Flash\u811A\u672C\uFF09"),t("li",null,"ECMAScript\u53EF\u4EE5\u4E3A\u4E0D\u540C\u79CD\u7C7B\u7684\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u6838\u5FC3\u7684\u811A\u672C\u7F16\u7A0B\u80FD\u529B\uFF0C\u5373ECMAScript\u4E0D\u4E0E\u5177\u4F53\u7684\u5BBF\u4E3B\u73AF\u5883\u76F8\u7ED1\u5B9A\uFF0C\u5982JavaScript\u7684\u5BBF\u4E3B\u73AF\u5883\u662F\u6D4F\u89C8\u5668\uFF0CAS\u7684\u5BBF\u4E3B\u5883\u662FFlash\u3002"),t("li",null,"ECMAScript\u63CF\u8FF0\u4E86\u4EE5\u4E0B\u5185\u5BB9\uFF1A\u8BED\u6CD5\u3001\u7C7B\u578B\u3001\u8BED\u53E5\u3001\u5173\u952E\u5B57\u3001\u4FDD\u7559\u5B57\u3001\u8FD0\u7B97\u7B26\u3001\u5BF9\u8C61\u7B49")],-1),m=t("h2",{id:"6-bom",class:"doc-heading"},"BOM",-1),g=t("h3",{id:"7-\u5B9A\u4E49",class:"doc-heading"},"\u5B9A\u4E49",-1),O=t("p",null,"BOM(Browser Object Model) \u5373\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\uFF0C\u4E3B\u8981\u662F\u6307\u4E00\u4E9B\u6D4F\u89C8\u5668\u5185\u7F6E\u5BF9\u8C61\u5982\uFF1Awindow\u3001location\u3001navigator\u3001screen\u3001history\u7B49\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B8C\u6210\u4E00\u4E9B\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u7279\u5B9AAPI\u3002",-1),J=t("ul",null,[t("li",null,"BOM\u63D0\u4F9B\u4E86\u72EC\u7ACB\u4E8E\u5185\u5BB9\u800C\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u4EA4\u4E92\u7684\u5BF9\u8C61"),t("li",null,"BOM\u7F3A\u4E4F\u6807\u51C6\uFF0CJavaScript\u8BED\u6CD5\u7684\u6807\u51C6\u5316\u7EC4\u7EC7\u662FECMA\uFF0CDOM\u7684\u6807\u51C6\u5316\u7EC4\u7EC7\u662FW3C")],-1),b=t("h3",{id:"8-api\u4E00\u89C8",class:"doc-heading"},"api\u4E00\u89C8",-1),C=t("h2",{id:"9-dom",class:"doc-heading"},"DOM",-1),A=t("p",null,[i("DOM\uFF08\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF09\u662F\u9488\u5BF9HTML\u548CXML\u6587\u6863\u7684\u4E00\u4E2AAPI\uFF0C\u901A\u8FC7DOM\u53EF\u4EE5\u53BB\u6539\u53D8\u6587\u6863\u3002"),t("br"),i(" DOM\u6A21\u578B\u5C06\u6574\u4E2A\u6587\u6863\uFF08XML\u6587\u6863\u548CHTML\u6587\u6863\uFF09\u770B\u6210\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\uFF0C\u5E76\u7528document\u5BF9\u8C61\u8868\u793A\u8BE5\u6587\u6863\u3002")],-1),f={__name:"ECMAScript\u3001BOM\u3001DOM",setup(B){const o=[{id:"doc-title",title:"ECMAScript\u3001BOM\u3001DOM"},{id:"1-javascript",title:"1. javascript"},{id:"2-\u7EC4\u6210",title:"1.1. \u7EC4\u6210",sub:!0},{id:"3-\u7279\u70B9",title:"1.2. \u7279\u70B9",sub:!0},{id:"4-ecmascript-\uFF08javascript\u6838\u5FC3\u4E0E\u8BED\u6CD5\uFF09",title:"2. ECMAScript \uFF08JavaScript\u6838\u5FC3\u4E0E\u8BED\u6CD5\uFF09"},{id:"5-\u5B9A\u4E49",title:"2.1. \u5B9A\u4E49",sub:!0},{id:"6-bom",title:"3. BOM"},{id:"7-\u5B9A\u4E49",title:"3.1. \u5B9A\u4E49",sub:!0},{id:"8-api\u4E00\u89C8",title:"3.2. api\u4E00\u89C8",sub:!0},{id:"9-dom",title:"4. DOM"}];return(E,D)=>{const c=l("doc-img"),s=l("doc-page");return e(),d(s,{desc:"",toc:o},{default:n(()=>[r,p,_,u,h,M,S,v,m,t("p",null,[a(c,{src:"bom.png",alt:"bom"})]),g,O,J,b,t("p",null,[a(c,{src:"bom-api.png",alt:"bom-api"})]),C,A,t("p",null,[a(c,{src:"dom-tree.gif",alt:"dom"})])]),_:1})}}};export{f as default};
