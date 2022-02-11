## 安装
```
npm install grunt-contrib-connect --save-dev
```
## options配置
### 1、port(8000)
### 2、protocol（http）
### 3、hostname（0.0.0.0）
### 4、base
string：将从中提供文件的基本（或根）目录。 默认为项目Gruntfile的目录。
array:用于服务多个目录的String（或Object）数组。 给出的最后一个基础是[directory] []成为可浏览的。
Object:包含路径和选项键的映射。 选项传递给serve-static模块。
### 5、directory
设置为您希望可浏览的目录。 用于覆盖基本选项可浏览目录。
### 6、keepalive
让服务器无限期地存活。 请注意，如果启用此选项，则此任务后指定的任何任务将永远不会运行。 默认情况下，一旦grunt的任务完成，Web服务器就会停止。 此选项可更改该行为。
### 7、livereload
设置为true或端口号，以使用connect-livereload将实时重新加载脚本标记注入页面。
这不会执行实时重新加载。 它旨在与grunt-contrib-watch或其他任务一起使用，这些任务将在文件更改时触发实时重新加载服务器。
### 8、open
在默认浏览器中打开提供的页面。
### 9、useAvailablePort
如果为true，则任务将在set port选项后查找下一个可用端口。
### 10、onCreateServer
创建服务器对象后要调用的函数，以允许集成需要访问connect的服务器对象的库。 一个Socket.IO示例：
```
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 8000,
        hostname: '*',
        onCreateServer: function(server, connect, options) {
          var io = require('socket.io').listen(server);
          io.sockets.on('connection', function(socket) {
            // do something with socket
          });
        }
      }
    }
  }
});
```
### 11、middleware（数组或者方法）
一组连接中间件，使用options.base进行静态文件和目录浏览
