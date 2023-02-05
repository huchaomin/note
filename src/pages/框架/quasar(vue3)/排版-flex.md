---
title: flex
---

[参考链接](https://quasar.dev/layout/grid/introduction-to-flexbox)

## Managing Parent

| Class Name | Description |
| --- | --- |
| `row` | Flex row |
| `row inline` | Inline Flex row |
| `column` | Flex column |
| `column inline` | Inline Flex column |
| `row reverse` | Flex row with `flex-direction` set to `row-reverse` |
| `column reverse` | Flex column with `flex-direction` set to `column-reverse` |
| `wrap` | Wrap if necessary ("on" by default, no need to specify it) |
| `no-wrap` | Do NOT wrap even if necessary |
| `reverse-wrap` | Wrap backwards if necessary |
| `justify-start` | / |
| `justify-end` | / |
| `justify-center` | / |
| `justify-between` | / |
| `justify-around` | / |
| `justify-evenly` | / |
| `items-start` | / |
| `items-end` | / |
| `items-center` | / |
| `items-stretch` | / |
| `items-baseline` | / |
| `flex-center` | items-center + justify-center |
| `content-start` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |
| `content-end` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |
| `content-center` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |
| `content-stretch` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |
| `content-between` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |
| `content-around` | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 |

## managing-children

Quasar uses a 12 point column system for distributing the size of row children.

| Class Name | Description |
| --- | --- |
| `col-2` | width: 16.6667%; |
| `offset-4` | margin-left: 33.3333%; |
| `col-grow` | flex-grow: 1; flex-shrink: 0; flex-basis: auto; |
| `col-shrink` | flex-grow: 0; flex-shrink: 1; flex-basis: auto; |
| `col-auto` | flex-grow: 0; flex-shrink: 0; flex-basis: auto; |
| `col` | flex-grow: 10000; flex-shrink: 1; flex-basis: 0%; |

### self-alignment

| Class Name | Description |
| --- | --- |
| `self-start` | / |
| `self-center` | / |
| `self-baseline` | / |
| `self-end` | / |
| `self-stretch` | / |

### order

| Class Name | Description |
| --- | --- |
| `order-first` |  order: -10000; |
| `order-last` | order: 10000; |

### Flex row / column break

[官方链接](https://quasar.dev/layout/grid/flexbox-patterns#flex-row-column-break)

```sass
.flex-break
  flex: 1 0 100% !important
.row
  .flex-break
    height: 0 !important
.column
  .flex-break
    width: 0 !important
```

1. Take care not to use no-wrap when defining the flex container, and insert a div with class flex-break where you need.
2. You can use q-py-## on row breaking elements or q-px-## on column breaking elements to increase the space.
3. When using column type flex you must define a height for the container. The height must be large enough to hold the longest column.

## flex-addons

需设置  cssAddon: true

```none
.flex-<bp>-(block|inline)
.(row|column|flex)-<bp>(|-inline-<bp>)
.reverse-<bp>
.(wrap|no-wrap|reverse-wrap)-<bp>
.order-<bp>-(first|last|none)
.justify-<bp>-(start|end|center|between|around|evenly)
.items-<bp>-(start|end|center|baseline|stretch)
.content-<bp>-(start|end|center|between|around)
.self-<bp>-(start|end|center|baseline|stretch)
.flex-<bp>-center
.q-gutter-<bp>(|-x|-y)-(xs|sm|md|lg|xl)
.(col|offset)-<bp>-(|0..12)
```
