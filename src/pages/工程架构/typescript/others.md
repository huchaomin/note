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

与Array<T>相似，只是把所有可变方法去掉了

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
