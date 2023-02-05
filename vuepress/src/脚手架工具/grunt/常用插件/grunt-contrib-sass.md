要求您安装Ruby和Sass
以“_”开头的文件即使与globbing模式匹配也会被忽略。 这样做是为了匹配Sass的部分行为。
## 安装
```
npm install grunt-contrib-sass --save-dev
```
## 加载
```
grunt.loadNpmTasks('grunt-contrib-sass');
```
## options配置
### 1、sourcemap

 - auto:可能的相对路径，其他地方的文件URI
 - file:始终是绝对文件URI
 - inline:在源图中包含源文本
 - none:没有源图
### 2、trace
显示错误的完整回溯。
### 3、check
只需检查Sass语法，不评估和写入输出。
### 4、style(nested)
输出风格。 可以嵌套（nested），紧凑（compact），压缩（compressed），扩展（expanded）。
### 5、quiet
编译期间的静音警告和状态消息。
### 6、compass
使Compass导入可用并加载项目配置（config.rb位于Gruntfile.js附近）。
### 7、lineNumbers
在生成的CSS中发出注释，指示相应的源代码行。
### 8、loadPath
添加（或多个）Sass导入路径
### 9、cacheLocation
放置缓存Sass文件的路径。
### 10、noCache
不要缓存到sassc文件。
### 11、update
仅编译已更改的文件。

