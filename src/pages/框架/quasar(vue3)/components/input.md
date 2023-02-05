---
title: input
---

仅展示和q-select不相同的点

| name | type | default | description |
|------|------|---------|-------------|
| type | String | text | 输入框类型: text/password/textarea/email/search/tel/file/number/url/time/date |
| mask （超级有用的格式化） | String |  | Custom mask or one of the predefined mask names |
| fill-mask | Boolean/String | | Fills string with specified characters (or underscore if value is not string) to fill mask's length |
| reverse-fill-mask | Boolean | false | Fills string from the right side of the mask |
| unmasked-value | Boolean | false | Model will be unmasked (won't contain tokens/separation characters) |
| shadow-text（类似于placeholder） | String | | Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file |
| autogrow | Boolean | false | Make field autogrow along with its content (uses a textarea) |

## tips

- `clearable` Won’t work with v-model managed input modifiers such as .trim because in that case Vue doesn’t handle null values.
- [Input types date 和 time 是什么情况](https://quasar.dev/vue-components/input#input-types)
- You’ll be using v-model.number (notice the number modifier) along with type="number" prop:

## mask

[官方文档](https://quasar.dev/vue-components/input#mask)
