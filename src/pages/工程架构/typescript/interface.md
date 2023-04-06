---
title: interface
---

## 基础

```ts
interface SquareConfig {
  color?: string; // 可选属性
  readonly width: number; // 只读属性 只能在创建的时候被赋值
  [propName: string]: any; // 任意数量的其它属性 一个接口中只能定义一个任意属性
}
```

需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};
```

上例中，任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了。

## 函数类型

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) { // 这里参数和函数返回值可以不指定类型，会自动推断
  let result = src.search(sub);
  return result > -1;
}
```

## 可索引的类型

- 共支持两种索引签名：字符串和数字
- 数字索引的返回值必须是字符串索引返回值类型的子类型(这是因为当使用number来索引时，JavaScript会将它转换成string然后再去索引对象)

```ts
interface Animal {
  [x: number]: Dog; // Dog是Animal的子类型
  [x: string]: Animal;
}
```

只读

```ts
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

## 类类型

```ts
interface ClockInterface {
  currentTime: Date; // currentTime 为Date类型
  setTime(d: Date): void; // 也可以添加一个描述一个方法
}

class Clock implements ClockInterface {
  currentTime: Date; // 实例属性
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

### 类静态属性与实例属性

```ts
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
//error Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'
```

上面报错是因为 `Clock` 实例属性没有 `constructor`, `constructor` 存在于类的静态属性上

```ts
interface ClockConstructor { // 定义类的静态属性 constructor
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface { // 定义类的实例属性
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

## 继承接口

```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 混合类型

有时你会希望一个对象可以同时具有上面提到的多种类型

```ts
interface Counter {
  (start: number): string; // 单独看这一个可当作函数类型
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start) {}; // 函数类型
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## 接口继承类

```ts
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {}

// Error: Property 'state' is missing in type 'ImageBox' but required in type 'SelectableControl'
class ImageBox implements SelectableControl {
  select() {}
}
// 只有 Control 的子类才能实现 SelectableControl 接口
```
