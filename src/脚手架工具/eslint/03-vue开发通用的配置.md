---
date: "1641550004147"
title: eslint vue开发
description: eslint vue开发通用的配置
tags: [eslint]
---

### vue 如何配置 ESLint

vue 官方提供了一个 ESLint 插件 [eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#installation)，
它提供了 parser 和 rules。parser 为 [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser#readme)，
rules 为 [https://eslint.vuejs.org/rules/](https://eslint.vuejs.org/rules/)。

> 如果想为 vue 单文件组件中的 script 部分使用单独的 parser 可以将 parserOptions.parser 指定为想使用的 parser 即可

### vue 开发通用的配置

```javascript
module.exports = {
	root: true, // 指定当前配置为根配置
	extends: ["plugin:vue/essential", "@vue/standard"],
	parserOptions: {
		parser: "@babel/eslint-parser", // ？不知道vue-cli默认生成的配置是不是用这个解析器
		ecmaVersion: 6, // 对于 ES6 语法
		sourceType: "module", // 设置为 ”script” (默认) 或 ”module”（如果你的代码是 ECMAScript 模块)
		ecmaFeatures: {
			globalReturn: false, // 允许在全局作用域下使用 return 语句
			impliedStrict: true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
			jsx: true, //  启用 JSX
		},
		allowImportExportEverywhere: false, // 仅允许 import export 语句出现在模块的顶层
		requireConfigFile: false, // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
	},
	env: {
		// 一组预定义的全局变量
		browser: true, // 浏览器环境中的全局变量
		node: true, // Node.js 全局变量和 Node.js 作用域
		commonjs: true,
		es6: true, // 新的 ES6 全局变量
	},
	rules: {
		// 缩进
		"indent": ["warn", 2, { SwitchCase: 1 }],
		// 双引号
		"quotes": ["error", "double"],
		// 末尾分号
		"semi": ["error", "always"],
		// 使用一致的换行风格
		"linebreak-style": "off",
		// 要求或禁止文件末尾存在空行
		"eol-last": ["warn", "always"],
		// 强制在逗号前后使用一致的空格
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		// 使用拖尾逗号
		"comma-dangle": ["warn", "always-multiline"],
		// 冒号之前有，之后没有
		"key-spacing": [
			"error",
			{
				beforeColon: false,
				afterColon: true,
				mode: "strict",
			},
		],
		// 强制在代码块中开括号前和闭括号后有空格
		"block-spacing": ["error", "always"],
		// 强制在代码块中使用一致的大括号风格
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		// 对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错
		"array-bracket-newline": ["error", "consistent"],
		// 强制数组方括号中使用一致的空格
		"array-bracket-spacing": ["error", "never"],
		// 强制数组元素间出现换行
		"array-element-newline": ["off", { multiline: true, minItems: 3 }],
		// 判断相等时使用 === 和 !== ，而不是 == 和 !=
		"eqeqeq": "warn",
		// 禁用 console
		"no-console": "warn",
		// 超长代码需要被换行，每行代码应该少于160个字符（以此为准）
		"max-len": ["warn", { code: 160 }],
		// 方法的参数尽量在一行显示
		"function-paren-newline": ["warn", "multiline"],
		// 强制将对象的属性放在不同的行上
		"object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
		// 链式调用对象方法时，一行最多调用4次，否则需要换行
		"newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
		// 控制文件的长度，最好不要超过2000行
		"max-lines": ["error", 800],
		// 方法设计应遵循单一职责原则（SRP），一个方法仅完成一个功能，最多50行
		"max-lines-per-function": ["error", 50],
		// 要求对象字面量属性名称使用引号
		"quote-props": ["error", "consistent-as-needed"],
		// 圈复杂度不超过20，软件学院统一要求是：10
		"complexity": ["warn", 10],
		// 块语句的最大可嵌套深度不要超过4层
		"max-depth": ["warn", 4],
		// 回调函数嵌套的层数不超过4层
		"max-nested-callbacks": ["error", 4],
		// 禁止连续赋值
		"no-multi-assign": "error",
		// 变量不需要用undefined初始化
		"no-undef-init": "warn",
		// 块内变量不能与函数内的其他变量同名，块内函数应该使用函数表达式声明
		"no-shadow": "error",
		// 方法的参数个数不宜超过5个
		"max-params": ["warn", 5],
		// 不要把方法的入参当作工作变量/临时变量
		"no-param-reassign": "error",
		// 不要使用 arguments，可以选择 rest 语法替代
		"prefer-rest-params": "error",
		// function 声明或表达式的一致性
		"func-style": ["warn", "declaration", { allowArrowFunctions: true }],
		// 用到匿名函数时优先使用箭头函数（或 Function#bind），别保存 this 的引用
		"prefer-arrow-callback": "error",
		// 箭头函数的简写
		"arrow-body-style": ["warn", "as-needed"],
		// 要求使用一致的 return 语句
		"consistent-return": "error",
		// 在构造函数中禁止在调用super()之前使用this或super
		"no-this-before-super": "error",
		// 使用模板字符串（`）实现字符串拼接
		"prefer-template": "error",
		// 不要使用字符串的行连续符号
		"no-multi-str": "warn",
		// 推荐在对象字面量中使用属性简写
		"object-shorthand": "warn",
		// 使用点号来访问对象的属性，只有属性是动态的时候使用 []
		"dot-notation": "error",
		// getter和setter应该成对出现在对象中
		"accessor-pairs": "error",
		// 禁止在对象实例上直接使用 Object.prototypes 的内置属性
		"no-prototype-builtins": "error",
		// 需要约束 for-in
		"guard-for-in": "error",
		// 不要使用否定表达式
		"no-negated-condition": "warn",
		// 每个switch语句都包含一个default语句，即使它不包含任何代码
		"default-case": "error",
		// 禁止使用eval()
		"no-eval": "error",
		// 禁止使用较短的符号实现类型转换
		"no-implicit-coercion": ["error", { allow: ["!!"] }],
		// 可以使用空的Promise.reject()
		"prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
	},
	globals: {
		$: "readonly", // jquery 全局变量
	},
};
```
