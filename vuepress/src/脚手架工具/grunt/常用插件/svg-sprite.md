## 依赖phantomjs
## 定义
是一个Node.js模块，它读取SVG图像的文件夹，优化它们并创建一个SVG精灵以及合适的样式表资源（例如CSS，Sass，LESS或Stylus）。 通过提供适当的Mustache模板，可以轻松添加其他格式。
## 安装
```
npm install svg-sprite --save-dev
```
## options配置
### 1、render
您可以提供一个配置对象，该对象控制生成哪些输出文件和格式以及使用哪些Mustache呈现模板进行生成。 它默认为{css：true}，这意味着将生成具有默认名称的CSS文件到默认位置。 此选项自v0.1.0起可用; 在此之前，现在已弃用的选项css，sass，sassout，less和lessout用于控制渲染行为。 有关所有渲染选项的说明，请参见下文。
### 2、variables
使用此选项将其他自定义变量传递给Mustache
### 3、spritedir
创建SVG精灵的主输出目录的目录。 默认为'svg'。 从版本v0.1.0开始，您还可以提供空字符串或。 完全避免创建子目录。
### 4、sprite
SVG精灵的文件名（在.svg扩展名之前）。 默认为'sprite'。
### 5、prefix
所有CSS规则的前缀（所有输出格式）。 默认为'svg'（结果为.svg- * CSS选择器）
### 6、common
如果给定而不是空，它将用于创建一个CSS规则，该规则通常为所有精灵图像定义背景图像和背景重复属性（从而通过不必为每个精灵图像重复这些属性来节省一些字节）
### 7、maxwidth
单个SVG图像的最大宽度。 如有必要，将缩小规模。 默认为1000。
### 8、maxheight
单个SVG图像的最大高度。 如有必要，将缩小规模。 默认为1000。
### 9、padding
在精灵中单个SVG图像的padding。 默认为0。
### 10、layout
在精灵中排列单个SVG图像的方法。 可以是“垂直”，“水平”或“对角线”，默认为垂直。
### 11、pseudo（伪类）
用于分隔文件名中的CSS伪类的字符。默认为〜。
### 12、dims
如果存在且等于true，则将呈现其他CSS规则（所有输出格式），用于设置单个精灵图像的尺寸。 您可以使用这些CSS规则来适当调整元素大小。 通常，后缀-dims将与图像的常规CSS选择器一起使用，但请查看生成的CSS文件以及有关CSS伪类的一些特殊规则的iconizr文档。
### 13、keep
如果存在且等于true，则用于创建精灵的单个优化的中间SVG图像将不会被丢弃，而是保留在spritedir中。（保留处理过程中的文件）
### 14、recursive（递归查找）
如果存在且等于true，则将递归扫描输入目录以查找子目录中的SVG文件。 目录名称将用于构造精灵图像CSS类名称，由连字符连接。
### 15、verbose
将此值设置为> 0以获得一些输出。 默认为0。
### 16、cleanwith
选择用于优化单个SVG图像的模块。 目前，支持Node.js模块svg-cleaner（松散地基于Scour）和SVGO，因此使用scour或svgo作为此选项。 将其设置为FALSE或NULL以完全跳过SVG优化。 默认为svgo（从版本v0.1.1开始）。 注意：目前不支持Scour（直到有更新版本可用）
### 17、cleanconfig
您可以提供传递给SVG优化器的配置对象（目前，只有SVGO支持此功能）。 它默认为{plugins：[{moveGroupAttrsToElems：false}]}。 在命令行上使用时，请在此处提供有效的JSON编码字符串。
## 例
```
var SVGSprite = require('svg-sprite');
var options = {
    render: {
        css: false,
        scss: 'sass/output/directory/',
        less: {
            template: 'path/to/less/mustache/template.less',
            dest: '/absolute/path/to/dest/file'
        }
    }
    /* Further configuration options, see below ... */
};
    callback = function (err, results) { /*
	If no error occurs, `results` will be a JSON object like this one:
	
	{
	   success			: true,		// Overall success
	   length			: 3,		// Total number of files written
	   files			: {			// Files along with their file size in bytes
	      '/path/to/your/cwd/css/output/directory/svg/sprite.svg'	: 436823,
	      '/path/to/your/cwd/css/output/directory/sprite.css'		: 1821,
	      '/path/to/your/cwd/sass/output/directory/_sprite.scss'	: 2197
	   }
	}
	
*/
    };
SVGSprite.createSprite('path/with/svg/images', 'css/output/directory', options, callback);
```
