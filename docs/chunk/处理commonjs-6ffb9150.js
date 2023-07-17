import{r as c,o as d,c as r,f as n,g as o,aa as t}from"./vendor-e1827163.js";const s=t("h2",{id:"1-\u51C6\u5907",class:"doc-heading"},"\u51C6\u5907",-1),A=t("p",null,"webpack\u914D\u7F6E\u5982\u4E0B",-1),u=t("h2",{id:"2-\u7ED3\u679C",class:"doc-heading"},"\u7ED3\u679C",-1),D={__name:"\u5904\u7406commonjs",setup(i){const a=[{id:"doc-title",title:"webpack \u6253\u5305commonjs"},{id:"1-\u51C6\u5907",title:"1. \u51C6\u5907"},{id:"2-\u7ED3\u679C",title:"2. \u7ED3\u679C"}];return(p,l)=>{const e=c("doc-code"),_=c("doc-page");return d(),r(_,{desc:"webpack \u6253\u5305commonjs\u6587\u4EF6\u5206\u6790",toc:a},{default:n(()=>[s,o(e,{code:"//index.js%0A%27use%20strict%27%3B%0Aconst%20bar%20%3D%20require%28%27./bar%27%29%0Afunction%20foo%28%29%20%7B%0A%20%20return%20bar.bar%28%29%0A%7D%0A",lang:"javascript"}),o(e,{code:"//bar.js%0A%27use%20strict%27%0Aexports.bar%20%3D%20function%20%28%29%20%7B%0A%20%20return%201%0A%7D%0A",lang:"javascript"}),A,o(e,{code:"const%20path%20%3D%20require%28%22path%22%29%0Amodule.exports%20%3D%20%7B%0A%20%20mode%3A%20%27development%27%2C%0A%20%20entry%3A%20path.join%28__dirname%2C%20%27index.js%27%29%2C%0A%20%20output%3A%20%7B%0A%20%20%20%20path%3A%20path.join%28__dirname%2C%20%27outs%27%29%2C%0A%20%20%20%20filename%3A%20%27index.js%27%2C%0A%20%20%7D%2C%0A%20%20devtool%3A%20false%0A%7D%0A",lang:"javascript"}),u,o(e,{code:"%28%28%29%20%3D%3E%20%7B%20//%20webpackBootstrap%0A%20%20%22use%20strict%22%0A%20%20var%20__webpack_modules__%20%3D%20%28%7B%0A%20%20%20%20%22./bar.js%22%3A%20%28%28__unused_webpack_module%2C%20exports%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20exports.bar%20%3D%20function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20return%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%0A%20%20%7D%29%0A%20%20//%20The%20module%20cache%0A%20%20var%20__webpack_module_cache__%20%3D%20%7B%7D%0A%20%20//%20The%20require%20function%0A%20%20function%20__webpack_require__%20%28moduleId%29%20%7B%0A%20%20%20%20//%20Check%20if%20module%20is%20in%20cache%0A%20%20%20%20if%20%28__webpack_module_cache__%5BmoduleId%5D%29%20%7B%0A%20%20%20%20%20%20return%20__webpack_module_cache__%5BmoduleId%5D.exports%0A%20%20%20%20%7D%0A%20%20%20%20//%20Create%20a%20new%20module%20%28and%20put%20it%20into%20the%20cache%29%0A%20%20%20%20var%20module%20%3D%20__webpack_module_cache__%5BmoduleId%5D%20%3D%20%7B%0A%20%20%20%20%20%20//%20no%20module.id%20needed%0A%20%20%20%20%20%20//%20no%20module.loaded%20needed%0A%20%20%20%20%20%20exports%3A%20%7B%7D%0A%20%20%20%20%7D%0A%20%20%20%20//%20Execute%20the%20module%20function%0A%20%20%20%20__webpack_modules__%5BmoduleId%5D%28module%2C%20module.exports%2C%20__webpack_require__%29%0A%20%20%20%20//%20Return%20the%20exports%20of%20the%20module%0A%20%20%20%20return%20module.exports%0A%20%20%7D%0A%20%20%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20//index.js%0A%20%20%20%20const%20bar%20%3D%20__webpack_require__%28%22./bar.js%22%29%0A%20%20%20%20function%20foo%20%28%29%20%7B%0A%20%20%20%20%20%20return%20bar.bar%28%29%0A%20%20%20%20%7D%0A%20%20%7D%29%28%29%0A%7D%29%28%29%0A",lang:"javascript"})]),_:1})}}};export{D as default};
