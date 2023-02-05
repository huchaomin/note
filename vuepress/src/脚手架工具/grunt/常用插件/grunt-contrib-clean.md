## 安装
```
npm install grunt-contrib-clean --save-dev
```
## 加载任务
```
grunt.loadNpmTasks('grunt-contrib-clean');
```
## Options配置
### 1、force
Type: Boolean
Default: false
这将阻止此任务阻止删除当前工作目录（CWD）之外的文件夹。 谨慎使用。
```
clean: {
  folder: ['path/to/dir/'],     //删除dir
  folder_v2: ['path/to/dir/**'],    //删除dir
  contents: ['path/to/dir/*'],  //保留dir，但是清空其内容
  subfolders: ['path/to/dir/*/'],   //将文件保留在目录/文件夹中，但删除所有子文件夹
  css: ['path/to/dir/*.css'],   //删除dir /文件夹中的所有* .css文件，不包括子文件夹
  all_css: ['path/to/dir/**/*.css'] //删除dir /文件夹及其子文件夹中的所有* .css文件
}
```
