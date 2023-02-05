## 作用
附加脚本和样式，删除调试部件，附加html部分，模板选项
## 安装
```
npm install grunt-html-build --save-dev
```
## 加载任务
```
grunt.loadNpmTasks('grunt-html-build');
```
## 例
```
grunt.initConfig({
    fixturesPath: "fixtures",
 
    htmlbuild: {
        dist: {
            src: 'index.html',
            dest: 'samples/',
            options: {
                beautify: true,
                prefix: '//some-cdn',
                relative: true,
                basePath: false,
                scripts: {
                    bundle: [
                        '<%= fixturesPath %>/scripts/*.js',
                        '!**/main.js',
                    ],
                    main: '<%= fixturesPath %>/scripts/main.js'
                },
                styles: {
                    bundle: [
                        '<%= fixturesPath %>/css/libs.css',
                        '<%= fixturesPath %>/css/dev.css'
                    ],
                    test: '<%= fixturesPath %>/css/inline.css'
                },
                sections: {
                    views: '<%= fixturesPath %>/views/**/*.html',
                    templates: '<%= fixturesPath %>/templates/**/*.html',
                    layout: {
                        header: '<%= fixturesPath %>/layout/header.html',
                        footer: '<%= fixturesPath %>/layout/footer.html'
                    }
                },
                data: {
                    // Data to pass to templates
                    version: "0.1.0",
                    title: "test",
                },
            }
        }
    }
});
```
编译成
```
<html>
    <head>
        <title>grunt-html-build - Test Page</title>
        <link type="text/css" rel="stylesheet" href="../fixtures/css/libs.css" />
        <link type="text/css" rel="stylesheet" href="../fixtures/css/dev.css" />
        <style>
            .this-is-inline {
                font-weight: bold;
            }
        </style> 
    </head>
    <body id="landing-page">
        <header>...</header>
        <div id="view1">...</div>
        <div id="view2">...</div>
        <div id="view3">...</div>
        <footer>...</footer>
        <script type="text/javascript" src="/path/analytics.js"></script> 
        <script type="text/javascript" src="../fixtures/scripts/app.js"></script> 
        <script type="text/javascript" src="../fixtures/scripts/libs.js"></script> 
        <script type="text/javascript">
            var version = "0.1.0",
                title = "test";
        </script> 
 
        <script type="text/javascript">
            var version = "0.1.0";
            productionMain();
        </script> 
        <script type="text/javascript">
            var version = "<%= version %>";
            productionMain();
        </script> 
    </body>
</html>
```
