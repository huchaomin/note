## 安装
```
npm install grunt-svgstore --save-dev
```
## 加载任务
```
grunt.loadNpmTasks('grunt-svgstore');
```
## 配置
```
grunt.initConfig({
  svgstore: {
    options: {
      prefix : 'icon-',
      svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
        viewBox : '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```
## options
### 1、options.prefix
一个字符串值，用于为每个文件名添加前缀以生成id。
Type: String
Default value: ''
### 2、options.svg
用于为生成的svg文件生成属性的对象。
```
{
  viewBox: '0 0 100 100'
}

//will result in:
<svg viewBox="0 0 100 100">
```
### 3、options.symbol
就像options.svg一样，但会为每个生成的symbol添加属性。
Type: Object
Default value: {}
### 4、options.includedemo
生成例子
Type: boolean|string|function
Default value: false
### 5、options.cleanup 
清除所有自带的行内样式
### 6、options.cleanupdefs 
设置为false时，不对defs元素执行清理。
### 7、options.inheritviewbox
viewbox继承
```
//inheritviewbox: true
<svg width="256" height="128">
//will result in:
<symbol viewBox="0 0 256 128" ...>
```
### 8、options.convertNameToId 
重新赋值id

