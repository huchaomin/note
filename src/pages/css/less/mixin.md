---
title: mixin
---

## 命名空间 和 mixin

```less
#bundle() { // 命名空间,不一定#开头，也可以是.开头
  .button { // mixin
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... } // mixin
  .citation { ... } // mixin
}
```

使用

```less
#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
```

另一种写法

```less
#bundle { // 命名空间,不一定#开头，也可以是.开头
  .button() { // mixin
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... } // mixin 会被编译出来，其他两个不会？
  .citation() { ... } // mixin
}
```

[Guarded Namespaces](https://less.bootcss.com/features/#mixins-guarded-namespaces)

## 映射 和 mixin

```less
#colors() { // 映射，不一定#开头，也可以是.开头
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## 选择器 和 mixin

```less
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}
button {
  .my-hover-mixin();
}

// 编译为
button:hover {
  border: 1px solid red;
}
```

## 带括号的不会被编译到最终的结果文件中

```less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}
```

编译为

```css
.my-mixin {
  color: black;
}
.class {
  color: black;
  background: white;
}
```

## `!important` 关键字

```less
.foo (@bg: #f5f5f5; @color: #900) {
  background: @bg;
  color: @color;
}
.unimportant {
  .foo();
}
.important {
  .foo() !important;
}
```

编译为

```css
.unimportant {
  background: #f5f5f5;
  color: #900;
}
.important {
  background: #f5f5f5 !important;
  color: #900 !important;
}
```

## mixin 传参

::: tip
参书逗号或者分号分隔
:::

```less
.border-radius(@radius: 5px) { // 传递参数并给了默认参数
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}
```

## [Overloading mixins](https://less.bootcss.com/features/#mixins-parametric-mixins)

## 命名参数

```less
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
.class2 {
  .mixin(#efca44; @padding: 40px);
}
```

编译为

```css
.class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
}
.class2 {
  color: #efca44;
  margin: 10px;
  padding: 40px;
}
```

## `@arguments`

```less
.box-shadow(@x: 0, @y: 0, @blur: 1px, @color: #000) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px, 5px);
}
```

## Aliasing Mixins

```less
#theme.dark.navbar {
  .colors(light) { // 注意和参数的区别
    primary: purple;
  }
  .colors(dark) {
    primary: black;
    secondary: grey;
  }
}

.navbar {
  @colors: #theme.dark.navbar.colors(dark);
  background: @colors[primary];
  border: 1px solid @colors[secondary];
}
```
