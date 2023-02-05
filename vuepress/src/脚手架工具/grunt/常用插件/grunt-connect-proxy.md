为grunt-contrib-connect插件提供http代理作为中间件。
## 安装
```
npm install grunt-connect-proxy --save-dev
```
## options配置
### 1、context
匹配请求的上下文。 匹配请求将被代理。 应该以/开头。 不应该以/结束，多个上下文可以通过数组匹配相同的代理规则，例如：context：['/ api'，'otherapi']
### 2、host
代理的主机。 不应该以http / https协议开头。
### 3、port
要代理的端口。
### 4、https
是否使用https代理
### 5、xforward（用来表示 HTTP 请求端真实 IP）
是否将x-forward标头添加到代理请求中，例如“x-forwarded-for”：“127.0.0.1”，“x-forwarded-port”：50892，“x-forwarded-proto”：“http”
### 6、appendProxies
设置为false以从父级别隔离多任务配置代理选项，而不是附加它们。（也就是不继承的意思）
### 7、rewrite（重写请求uri）
代理时允许重写URL（包括上下文）。 对象的key用作替换操作中使用的正则表达式。 作为示例，以下代理配置将在代理时删除上下文：
```
proxies: [
    context: '/context',
    host: 'host',
    port: 8080,
    rewrite: {
        '^/removingcontext': '',
        '^/changingcontext': '/anothercontext'
    }
]
```
### 8、headers
要添加到代理请求的标头映射。
### 9、hideHeaders
要从代理请求标头映射中删除的。
### 10、ws
设置为true以代理websockets。