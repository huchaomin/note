每当添加，更改或删除监视文件模式时，运行预定义任务
## 安装
```
npm install grunt-contrib-watch --save-dev
```
## 配置
### 1、files
定义了此任务将要监视的文件。 它可以是字符串或数组。
### 2、tasks
在监视文件事件发生时要运行的任务。
### 3、options.spawn
是否在子进程中生成任务运行。 将此选项设置为false可加快watch的反应时间（对于大多数人来说通常快500毫秒），并允许后续任务运行共享相同的上下文。 不产生任务运行会使watch更容易失败，所以请根据需要使用。
### 4、options.interrupt
在修改文件时，此监视任务将在子进程中生成任务。 默认行为只会在上一个进程完成后为每个目标生成一个新的子进程。 将interrupt选项设置为true以终止上一个进程，并在以后的更改时生成一个新进程。
### 5、options.debounceDelay
在为相同的文件路径和状态连续发出事件之前要等待多长时间。 例如，如果您的Gruntfile.js文件已更改，则更改的事件将仅在给定的毫秒后再次触发。
### 6、options.event
指定触发指定任务的监视事件的类型。 此选项可以是以下一项或多项：“all”，“changed”，“added”和“deleted”。
### 7、options.reload
默认情况下，如果正在监视Gruntfile.js，则对其进行更改将触发监视任务重新启动，并重新加载Gruntfile.js更改。 当reload设置为true时，对任何监视文件的更改将触发监视任务重新启动。 如果您的Gruntfile.js依赖于其他文件，这将特别有用。
### 8、options.forever
这只是一个任务级别选项，无法为每个目标配置。 默认情况下，监视任务将使用grunt.fatal和grunt.warn来尝试阻止它们退出监视进程。 如果您不希望重写grunt.fatal和grunt.warn，请将forever选项设置为false。
### 9、options.atBegin
此选项将在观察程序启动时触发每个指定任务的运行。
### 10、options.livereload（实时刷新）
如果启用，将使用每个目标的监视任务启动实时重新加载服务器。 然后，在指示的任务运行后，将使用修改的文件触发实时重新加载服务器。
### 11、options.cwd（设置监视目录）
能够设置当前工作目录。 默认为process.cwd（）。 可以是一个字符串来设置cwd以匹配文件和生成任务，或者一个对象来设置每个独立的。
