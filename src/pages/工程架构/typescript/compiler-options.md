---
title: 编译选项
---

## 常见的编译选项一览

选项 | 类型 | 默认值 | 描述
--- | --- | --- | ---
`allowJs` | `boolean` | `false` | 允许编译 js 文件
`checkJs` | `boolean` | `false` | 报告 js 文件中的错误
`allowSyntheticDefaultImports` | `boolean` | `false` | 允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。
`baseUrl` | `string` |  | [用于解析非相对模块名称的基目录](https://www.tslang.cn/docs/handbook/module-resolution.html#base-url)
`declaration` | `boolean` | `false` | 生成相应的 `.d.ts` 文件
`declarationDir` | `string` |  | 指定输出目录
`disableSizeLimit` | `boolean` | `false` | 禁用输出文件的大小限制
`importHelpers` | `boolean` | `false` | 从 tslib 导入辅助工具函数
`jsx` | `string` | `preserve` | [指定 jsx 代码生成的目标](https://www.tslang.cn/docs/handbook/jsx.html)
`jsxFactory` | `string` | `React.createElement` | 指定 jsx 代码生成的工厂函数, 写死的
`lib` | `string[]` |  | 指定要包含在编译中的库文件:<br>--target ES5：DOM，ES5，ScriptHost, <br>--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
`module` | `string` | `CommonJS` | 指定生成哪个模块系统代码
`moduleResolution` | `string` | `Classic` | 指定模块解析策略
`noEmit` | `boolean` | `false` | 不生成输出文件
`noEmitOnError` | `boolean` | `false` | 在发生错误时不生成输出文件
`noFallthroughCasesInSwitch` | `boolean` | `false` | 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
`noImplicitAny` | `boolean` | `false` | 在表达式和声明上有隐含的 any类型时报错
`noImplicitReturns` | `boolean` | `false` | 不是函数的所有返回路径都有返回值时报错
`noImplicitThis` | `boolean` | `false` | this 表达式的类型为 any 时报错
`noImplicitUseStrict` | `boolean` | `false` | 不要为每个源文件添加 'use strict'
`noLib` | `boolean` | `false` | 不要包含默认的库文件，如：lib.d.ts
`noResolve` | `boolean` | `false` | 不把 `/// <reference ...>`或模块导入的文件加到编译文件列表
`noUnusedParameters` | `boolean` | `false` | 声明了但是没有使用的参数时报错
`noUnusedLocals` | `boolean` | `false` | 若有未使用的局部变量则抛错
`noUnusedParameters` | `boolean` | `false` | 声明了但是没有使用的参数时报错
`outDir` | `string` |  | 指定输出目录
`outFile` | `string` |  | 将输出文件合并为一个文件
`paths` | `object` |  | [指定模块名到基于 baseUrl 的路径映射的列表](https://www.tslang.cn/docs/handbook/module-resolution.html#path-mapping)
`preserveConstEnums` | `boolean` | `false` | 保留 const enum 的声明
`project` | `string` |  | 编译指定目录下的项目。这个目录应该包含一个 tsconfig.json文件来管理编译
`reactNamespace` | `string` | `React` | 当目标为生成 "react" JSX时，指定 createElement和 __spread的调用对象
`removeComments` | `boolean` | `false` | 删除所有注释，除了以 /!*开头的版权信息
`rootDir` | `string` |  | 指定输入文件的根目录。只有在 --outDir 选项被使用时才有用
`rootDirs` | `string[]` |  | 指定输入文件的根目录列表。只有在 --outDir 选项被使用时才有用
`skipDefaultLibCheck` | `boolean` | `false` | 不对默认库文件进行类型检查
`skipLibCheck` | `boolean` | `false` | 忽略所有的声明文件（ *.d.ts）的类型检查
`sourceMap` | `boolean` | `false` | 生成相应的 `.map` 文件
`sourceRoot` | `string` |  | 指定TypeScript源文件的路径，以便调试器定位。<br>当TypeScript文件的位置是在运行时指定时使用此标记。路径信息会被加到 sourceMap里
`strict` | `boolean` | `false` | 启用所有严格类型检查选项,相当于启用 <br> --noImplicitAny, <br> --noImplicitThis, <br> --alwaysStrict，<br> --strictNullChecks <br> --strictFunctionTypes <br> --strictPropertyInitialization
`strictFunctionTypes` | `boolean` | `false` | 禁用函数参数双向协变检查
`strictPropertyInitialization` | `boolean` | `false` | 确保类的非undefined属性已经在构造函数里初始化。<br>若要令此选项生效，需要同时启用--strictNullChecks
`strictNullChecks` | `boolean` | `false` | 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，<br>只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）
`target` | `string` | `ES3` | 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'

## allowSyntheticDefaultImports

`export = foo` 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 `module.exports = foo`。

在 ts 中，如果要引入一个通过 `export = foo` 导出的模块，标准的语法是 `import foo = require('foo')`，(或者 `import * as foo from 'foo'`)(打个问号)。

但由于历史原因，我们已经习惯了使用 `import foo from 'foo'`。

这个选项就是为了解决这个问题。当它设置为 `true` 时，允许使用 `import foo from 'foo'` 来导入一个通过 `export = foo` 导出的模块。当它设置为 `false` 时，则不允许，会报错。

当然，我们一般不会在 ts 文件中使用 `export = foo` 来导出模块，而是在[写（符合 commonjs 规范的）第三方库的声明文件](../basics/declaration-files#export-1)时，才会用到 `export = foo` 来导出类型。

比如 React 的声明文件中，就是通过 `export = React` 来导出类型：

```ts
export = React;
export as namespace React;

declare namespace React {
  // 声明 React 的类型
}
```

此时若我们通过 `import React from 'react'` 来导入 react 则会报错

```ts
import React from 'react';
// Module '"typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types/react/index"' can only be default-imported using the 'esModuleInterop' flagts(1259)
```

解决办法就是将 `allowSyntheticDefaultImports` 设置为 `true`。
