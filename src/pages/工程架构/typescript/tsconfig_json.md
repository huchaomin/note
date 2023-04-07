---
title: tsconfig.json
---

在命令行上指定的编译选项会覆盖在tsconfig.json文件里的相应选项

## `files` `include` `exclude`

- `files` 指定一个包含相对或绝对文件路径的列表
- `include` 和 `exclude` 属性指定一个文件glob匹配模式列表。 支持的glob通配符有：
  - `*` 匹配0或多个字符（不包括目录分隔符）
  - `?` 匹配一个任意字符（不包括目录分隔符）
  - `**/` 递归匹配任意子目录
- `outDir` 指定的目录下的文件永远会被编译器排除，除非你明确地使用 `files` 将其包含进来(不知道 `include` 行不行)
- `files` 和 `include` 都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件
- `exclude` 默认情况下会排除 `node_modules`，`bower_components`，`jspm_packages`和`<outDir>`目录
- `exclude` 会覆盖 `include` 的设置
- `exclude` 不会覆盖 `files` 的设置
- 需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了index.ts，那么index.d.ts和index.js会被排除在外。 通常来讲，**不推荐只有扩展名的不同来区分同目录下的文件**

::: tip 提示
后缀默认为`.ts`，`.tsx`，和`.d.ts`，可以通过`"allowJs": true`和`"allowSyntheticDefaultImports": true`来支持`.js`和`.jsx`文件
:::

## `@types` `typeRoots` `types`

1. 默认所有可见的 `@types` 包会在编译过程中被包含进来: `./node_modules/@types/`，`../node_modules/@types/` 和 `../../node_modules/@types/` 等等
2. 如果指定了 `typeRoots`，只有 `typeRoots` 下面的包才会被包含进来

   ```json
   {
     "compilerOptions": {
       "typeRoots": ["./typings"] // 只会包含所有./typings下面的包
     }
   }
   ```

3. 如果指定了types，只有被列出来的包才会被包含进来

   ```json
   {
     "compilerOptions": {
       "types": ["node", "lodash", "express"] // 只会包含./node_modules/@types/node，./node_modules/@types/lodash和./node_modules/@types/express
     }
   }
   ```

4. `"types": []` 来禁用自动引入 `@types` 包

## `extends`

- `extends` 的值是一个字符串，包含指向另一个要继承文件的路径
- 配置文件里的相对路径在解析时相对于它所在的文件
- `files`，`include` 和 `exclude` 覆盖源配置文件的属性
- `compilerOptions`，`typeAcquisition`，`extends` 和 `references` 属性会被合并(后面3个打个问号)
