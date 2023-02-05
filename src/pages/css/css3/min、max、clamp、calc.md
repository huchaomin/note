---
title: min、max、clamp、calc
---


## min()

函数返回一组值中的最小值。

```css
div{
  width:80vw;
  max-width:200px;
}
// 等同于
div{
  width:min(80vw, 200px);
}
```

## max()

函数返回一组值中的最大值。

```css
div{
  width:80vw;
  min-width:200px;
}
// 等同于
div{
  width:max(80vw, 200px);
}
```

## clamp()

返回限定数值

```css
div{
  width: 100%;
  min-width:200px;
  max-width:300px;
}
// 等同于
div{
  clamp(200px, 100%, 300px);
}
```

等同于

```css
max(最小值, min(val, 最大值));
```

## calc()

计算值

```css
:root{
  --w:min(200px, 80vw);
}
div {
  height: 50px;
  width:calc(var(--w) - 50px);
}
```
