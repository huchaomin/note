---
title: 关于函数类型的书写规范
---

## 回调函数

### 返回值类型

不要为返回值被忽略的回调函数设置一个any类型的返回值类型：

```ts
// bad
function foo(callback: (value: string) => any) {
  // ...
}
```

```ts
// good
function foo(callback: (value: string) => void) {
  // ...
}
```

为什么：使用void相对安全，因为它防止了你不小心使用x的返回值：

```ts
function fn(x: () => void) {
  var k = x(); // oops! meant to do something else
  k.doSomething(); // error, but would be OK if the return type had been 'any'
}
```

### 可选参数

```ts
// bad
interface Fetcher {
  getObject(done: (data: any, elapsedTime?: number) => void): void;
}
```

```ts
// good 因为总是允许接收较少参数的回调函数。
interface Fetcher {
  getObject(done: (data: any, elapsedTime: number) => void): void;
}
```

### 重载与回调函数

```ts
// bad
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

```ts
// good
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

## 函数重载

### 不要把一般的重载放在精确的重载前面

```ts
// bad
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?
```

```ts
// good
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```

::: tip
TypeScript会选择第一个匹配到的重载当解析函数调用的时候。 当前面的重载比后面的“普通”，那么后面的被隐藏了不会被调用。
:::

### 使用可选参数

```ts
// bad
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
```

```ts
/* OK */
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}
```

### 使用联合类型

```ts
// bad
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}
```

```ts
// good
interface Moment {
  utcOffset(): number;
  utcOffset(b: number|string): Moment;
}
```

::: warning
我们没有让b成为可选的，因为签名的返回值类型不同
:::
