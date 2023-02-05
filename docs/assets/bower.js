import{r as e,o as s,c as a,f as r,g as c,a8 as p}from"./vendor.js";const d=p("h2",{id:"1-bower-\u7684\u7B80\u5355\u4F7F\u7528",class:"doc-heading"},"bower \u7684\u7B80\u5355\u4F7F\u7528",-1),b={__name:"bower",setup(i){const o=[{id:"doc-title",title:"bower \u7684\u7B80\u5355\u4F7F\u7528"},{id:"1-bower-\u7684\u7B80\u5355\u4F7F\u7528",title:"1. bower \u7684\u7B80\u5355\u4F7F\u7528"}];return(l,w)=>{const n=e("doc-code"),t=e("doc-page");return s(),a(t,{desc:"bower \u7684\u7B80\u5355\u4F7F\u7528",toc:o},{default:r(()=>[d,c(n,{code:`npm install -g bower

bower init(\u751F\u6210bower.json)

bower install <package> --save(-dev)(\u5B89\u88C5\u81EA\u5DF1\u9700\u8981\u7684\u5305)

rm -rf bower_components(\u5220\u9664\u6574\u5305)

bower list [<options>]\uFF08\u5305\u5217\u8868\u8FD8\u6709\u53EF\u80FD\u7684\u66F4\u65B0\uFF09
-p, --paths: Generates a simple JSON source mapping
-r, --relative: Make paths relative to the directory config property, which defaults to bower_components

bower lookup <name>\uFF08\u901A\u8FC7\u5305\u7684\u540D\u5B57\u627E\u5305\u7684url\uFF09

bower search (<name>)\uFF08\u67E5\u627E\u5305\uFF09

bower update <name> [<name> ..] [<options>]\uFF08\u66F4\u65B0\u5305\uFF09
-F, --force-latest: Force latest version on conflict
-p, --production: Do not install project devDependencies
-S, --save: Update dependencies in bower.json
-D, --save-dev: Update devDependencies in bower.json

bower uninstall <name> [<name> ..] [<options>]\uFF08\u5378\u8F7D\u5305\uFF09
-S, --save: Remove uninstalled packages from the project\u2019s bower.json dependencies
-D, --save-dev: Remove uninstalled packages from the project\u2019s bower.json devDependencies
`,lang:""})]),_:1})}}};export{b as default};
