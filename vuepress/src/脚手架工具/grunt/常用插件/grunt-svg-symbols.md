## 安装
```
npm install grunt-svg-symbols --save-dev
```
## 加载任务
```
grunt.loadNpmTasks('grunt-svg-symbols');
```
## 配置
```
grunt.initConfig({
  svg_symbols: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```
## Options
### 1、options.precision
指定优化时使用的浮点精度。
Type: Number
Default value: 1
### 2、options.currentColor
将所有fill和stroke属性的值设置为currentColor。
Type: Boolean
Default value: false
### 3、options.className
指定你的display: none;
Type: String
Default value: u-hidden
### 4、options.removeAttrs
通过提供正则表达式模式来删除属性。
Type: String
Default value: null
### 5、options.width
为所有符号定义视框的宽度（仅在检测失败时才需要）。
Type: Number
Default value: null
### 6、options.height
定义所有符号的视框的高度（仅在检测失败时才需要）。
Type: Number
Default value: null
### 7、options.preserveViewBox
使用SVG上定义的viewBox并忽略width和height选项。
Type: Boolean
Default value: false
## Examples
```
grunt.initConfig({
  svg_symbols: {
    options: {
      precision: 3
    },
    your_target: {
      files: {
        'icons.svg': ['**/*.svg'],
      },
    },
  },
});
```
```
<svg class="u-hidden">
  <symbol id="mail" viewBox="0 0 80 80">
    <path d="M77.766 17.152l-25.115 21.1 25.09 23.665c.17-.462.266-.94.266..."/>
  </symbol>
  <symbol id="lock" viewBox="0 0 80 80">
      <path d="M61.05 35.833V23.82C61.05 13.01 52.04 4 41.23 4h-.6-.602c-1..."/>
  </symbol>
</svg>
```
```
<svg>
    <use xlink:href="#mail"></use>
</svg>
```