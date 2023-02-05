---
title: 1px
---

为了适配各种屏幕，我们写代码时一般使用设备独立像素来对页面进行布局。
而在设备像素比大于 1的屏幕上，我们写的 1px实际上是被多个物理像素渲染，这就会出现 1px在有些屏幕上看起来很粗的现象

## border-image

```css
  border: 1px solid transparent;
  border-image: url('./1px.jpg') 2 repeat;
```

缺点：border颜色变了就得重新制作图片；圆角会比较模糊。

## background-image

```css
  background-image: url('./1px.jpg') repeat-x left bottom;
  background-size: 100% 1px;
```

## box-shadow

```css
box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
            1px  0  1px -1px #e5e5e5,   //右边线
            0  1px  1px -1px #e5e5e5,   //下边线
            -1px 0  1px -1px #e5e5e5;   //左边线
```

缺点：会失去边框的宽度

## 使用伪元素

1 条border

```css
.onePx{
  position: relative;
  &::after{
    position: absolute;
    content: '';
    background-color: #e5e5e5;
    display: block;
    width: 100%;
    height: 1px;
    transform: scale(1, 0.5);
    top: 0;
    left: 0;
  }
}
```

4 条border

```css
.onePx{
  position: relative;
    &:after{
      content:" ";
      position:absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: left top;
      box-sizing: border-box;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
    }
  }
}
```

缺点：

- 暂用了after 伪元素，可能影响清除浮动。
- 有些空元素不支持伪元素，比如 input、textarea、select等。

## 设置viewport

通过设置缩放，让 CSS像素等于真正的物理像素。

例如：当设备像素比为 3时，我们将页面缩放 1/3倍，这时 1px等于一个真正的屏幕像素。

```javascript
const scale = 1 / window.devicePixelRatio;
const viewport = document.querySelector('meta[name="viewport"]');
if(!viewport){
  viewport = document.createElement('meta');
  viewport.setAttribute('name', 'viewport');
  document.head.appendChild(viewport);
}
viewport.setAttribute('content', `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`);
```

实际上，上面这种方案是早先 flexible采用的方案。

当然，这样做是要付出代价的，这意味着你页面上所有的布局都要按照物理像素来写。
这显然是不现实的，这时，我们可以借助 flexible或 vw、vh来帮助我们进行适配。
