---
title: 其他一些关于typescript的知识点
---
## 属性重命名

```ts
let { a: newName1, b: newName2 } = o;
```

这里的冒号不是指示类型的，应该这样写

```ts
let {a, b}: {a: string, b: number} = o;
```

## ReadonlyArray

与 `Array<T>` 相似，只是把所有可变方法去掉了

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

```ts
a = ro as number[];
```

## `undefined` 和 `null` 与 `void` 的区别

`undefined` 和 `null` 是所有类型的子类型。 就是说你可以把 `null` 和 `undefined` 赋值给 `number` 类型的变量。

```ts
// 这样不会报错
let num: number = undefined;
```

```ts
// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;
// Type 'void' is not assignable to type 'number'.
```

## 解决 `noImplicitThis`

```ts
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

## declare 定义的类型只会用于编译时的检查，编译结果中会被删除

## [类型推论](https://www.tslang.cn/docs/handbook/type-inference.html)

## [类型兼容性](https://www.tslang.cn/docs/handbook/type-compatibility.html)

## [可辨识联合](https://www.tslang.cn/docs/handbook/advanced-types.html)

## [模块的按需加载](https://www.tslang.cn/docs/handbook/modules.html)

## TODO [附加的模块解析标记](https://www.tslang.cn/docs/handbook/module-resolution.html)

## jsx 用法

## [装饰器](https://www.tslang.cn/docs/handbook/decorators.html)

## [mixins](https://www.tslang.cn/docs/handbook/mixins.html)

## [JavaScript文件类型检查](https://www.tslang.cn/docs/handbook/type-checking-javascript-files.html)

## [错误信息列表](https://www.tslang.cn/docs/handbook/error.html)

## package.json

### 指定主声明文件

```json
{
  "main": "./lib/main.js",
  "types": "./lib/main.d.ts"
}
```

- `"typings"` 与 `"types"` 具有相同的意义，也可以使用它
- 省略 `"types"`： 如果 `"main"` 指向一个 `.js` 文件，那么 TypeScript 将会尝试查找一个同名的 `.d.ts` 文件。 如果 `"main"` 指向一个 `.json` 文件，那么 TypeScript 将会尝试查找一个 `index.d.ts` 文件。 如果 `"main"` 指向一个目录，那么 TypeScript 将会尝试查找一个该目录下的 `index.d.ts` 文件。

### 指定依赖

```json
{
  "dependencies": {
    "browserify": "latest",
    "@types/browserify": "latest",
    "typescript": "next"
  }
}
```

这里，我们的包依赖于 `browserify` 和 `typescript`包。
`browserify` 没有把它的声明文件捆绑在它的npm包里，所以我们需要依赖于 `@types/browserify` 得到它的声明文件。
`typescript` 相反，它把声明文件放在了npm包里，因此我们不需要依赖额外的包

## 不要在声明文件里使用 `/// <reference path="..." />`, 应该使用 `/// <reference types="..." />` 代替

## 查找自己需要的包

大多数情况下，类型声明包的名字总是与它们在npm上的包的名字相同，但是有 `@types/` 前缀
但如果你需要的话，你可以在 [https://aka.ms/types](https://www.typescriptlang.org/dt/search) 这里查找你喜欢的库。
