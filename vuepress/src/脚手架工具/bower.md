---
date: '1644565352736'
title: bower 的简单使用
description: bower 的简单使用
tags: [bower]
---
### bower 的简单使用
```
npm install -g bower
 
bower init(生成bower.json)
 
bower install <package> --save(-dev)(安装自己需要的包)
 
rm -rf bower_components(删除整包)
 
bower list [<options>]（包列表还有可能的更新）  
-p, --paths: Generates a simple JSON source mapping  
-r, --relative: Make paths relative to the directory config property, which defaults to bower_components
 
bower lookup <name>（通过包的名字找包的url）
 
bower search (<name>)（查找包）
 
bower update <name> [<name> ..] [<options>]（更新包）  
-F, --force-latest: Force latest version on conflict  
-p, --production: Do not install project devDependencies  
-S, --save: Update dependencies in bower.json  
-D, --save-dev: Update devDependencies in bower.json
 
bower uninstall <name> [<name> ..] [<options>]（卸载包）  
-S, --save: Remove uninstalled packages from the project’s bower.json dependencies  
-D, --save-dev: Remove uninstalled packages from the project’s bower.json devDependencies
```
