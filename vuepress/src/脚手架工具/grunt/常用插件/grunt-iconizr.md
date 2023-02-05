## 依赖于iconizr和svg-sprite Node.js模块。
## 需要安装Python和Phantom
## 安装
```
npm install grunt-iconizr --save-dev
```
## 加载任务
```
grunt.loadNpmTasks('grunt-iconizr');
```
## 概览
```
grunt.initConfig({
  iconizr: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
        src       : 'path/to/svg/dir',
        dest      : 'path/to/css/dir',
        // Target specific options  
        options   : {
            dims    : true,
            keep    : true,
            preview : 'preview'
        }
    },
  },
});
```