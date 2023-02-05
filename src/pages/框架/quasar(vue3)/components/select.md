---
title: select
---

## props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| label | String | | Label to display |
| stack-label | Boolean | false | Stack label on top of field |
| label-slot | Boolean | false | Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set |
| name | String |       | 原生name属性，takes the value of 'for' prop, if it exists |
| for | String |       | 添加表单元素的id和label的for属性 |
| autocomplete | String |       | 原生autocomplete属性 |
| tabindex | Number/String | 0 | 原生tabindex属性 |
| model-value | Any |       | Model of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive |
| options | Array |       | Available options that the user can select from |
| disable | Boolean | false | Disable the component |
| readonly | Boolean | false | Make the component readonly |
| display-value | String/Number |  | 怎么展示value, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop |
| display-value-html | Boolean | false | Display 'display-value' as HTML |
| option-value | Function/String | 'value' | Function or property name to use for value of an option; If using a function, it will receive the option object as first parameter |
| option-label | Function/String | 'label' | Function or property name to use for label of an option; If using a function, it will receive the option object as first parameter |
| option-disable | Function/String | 'disable' | Function or property name to use for disabling an option; If using a function, it will receive the option object as first parameter, If return true, the current option will be disabled |
| multiple | Boolean | false | Allow multiple values to be selected |
| max-values | Number/String |       | Maximum number of values that can be selected |
| error | Boolean | false | Does field have validation errors? |
| error-message | String |       | Validation error message(gets displayed only if 'error' is set to 'true') |
| no-error-icon | Boolean | false | Hide error icon |
| rules | Array |       | Validation rules |
| reactive-rules | Boolean | false | the rules change will trigger a validation |
| lazy-rules | Boolean/String | false | true: field loses focus for first time. |
|            |                |       | 'ondemand': component's validate() method is manually called or when the wrapper QForm submits itself |
| loading | Boolean | false | Show a loading indicator |
| clearable | Boolean | false | Show a clear button, When clicked, model 变为 null |
| clear-icon | String |       | Override default clear icon |
| autofocus | Boolean | false | Focus the field on initial render |
| dropdown-icon | String |       | Override default dropdown icon |
| hide-dropdown-icon | Boolean | false | Hide the dropdown icon |
| use-chips | Boolean | false | Use chips instead of a text field |
| new-value-mode | String | | 添加新值的模式 add/add-unique/toggle |
| transition-show | String | | Transition to use when showing the dropdown |
| transition-hide | String | | Transition to use when hiding the dropdown |
| transition-duration | Number/String | | Transition duration in milliseconds, without unit |
| behavior | String | 'menu' | 'menu' or 'dialog' |
| hint | String | | Hint text |
| hide-hint | Boolean | false | Enables bottom slots ('error', 'hint', 'counter') |
| prefix | String | | Prefix |
| suffix | String | | Suffix |
| bottom-slots | Boolean | false | Display the slots at the bottom of the field |
| counter | Boolean | false | Show an automatic counter on bottom right |
| use-input | Boolean | false | Use an input tag where users can type |
| input-debounce | Number/String | 500 | Debounce delay in milliseconds |
| emit-value | Boolean | false | true时，options为对象集合的话，抛出value，否则抛出 obj,此时展示的是value,不是option里面的label,需配合map-options 使用 |
| map-options | Boolean | false | map labels of model from 'options' Array |
| options-dense | Boolean | false | Dense mode for options list |
| options-dark | Boolean | false | Dark mode for options list |
| options-selected-class | String | | Class to apply to selected option |
| options-html | Boolean | false | Treat option label as HTML code |
| options-cover | Boolean | false | Cover the input field with the options list(will not work along with 'use-input' prop for obvious reasons) |
| menu-shrink | Boolean | false | (only in menu mode) |
| menu-anchor | String | | (only in menu mode) |
| menu-self | String | | (only in menu mode) |
| menu-offset | Array | | (only in menu mode) |
| color | String | | Color name for component from the Quasar Color Palette |
| label-color | String | | Color name for component label |
| bg-color | String | | Color name for component background |
| dark | Boolean | false | Use dark theme |
| standout | Boolean/String | false | Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones) |
| filled | Boolean | false | Use 'filled' design for the field |
| outlined | Boolean | false | Use 'outlined' design for the field |
| borderless | Boolean | false | Use 'borderless' design for the field |
| hide-bottom-space | Boolean | false | Remove bottom padding |
| rounded | Boolean | false | Use 'rounded' design for the field |
| square | Boolean | false | Use 'square' design for the field |
| dense | Boolean | false | Use 'dense' design for the field |
| item-aligned | Boolean | false | Match inner content alignment to that of QItem |
| popup-content-class | String | | Class(es) to pass to the popup content |
| popup-content-style | String/Array/Object | | Style to pass to the popup content |
| input-class |  String/Array/Object | | Class(es) to pass to the input element |
| input-style | String/Array/Object | | Style to pass to the input element |
| virtual-scroll-horizontal | Boolean | false | Make virtual list work in horizontal mode  |
| virtual-scroll-slice-size | Number/String | 30 | Minimum number of items to render in the virtual list |
| virtual-scroll-slice-ratio-before | Number/String | 1 | Ratio of number of items in visible zone to render before it |
| virtual-scroll-slice-ratio-after | Number/String | 1 | Ratio of number of items in visible zone to render after it |
| virtual-scroll-item-size | Number/String | 24 | Height of each item in the virtual list |
| virtual-scroll-sticky-size-start | Number/String | 0 |  |
| virtual-scroll-sticky-size-end | Number/String | 0 |  |
| hide-selected | Boolean | false |  Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects |
| fill-input | Boolean | false | Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection |
| table-colspan | Number/String | | The number of columns in the table (you need this if you use table-layout: fixed) |

## events

| Name | Description |
| --- | --- |
| @clear -> function(value) | Emitted when the clear button is clicked |
| @update:model-value -> function(value) | Emitted when the model changes |
| @input-value -> function(value) | Emitted when the value in the text input changes |
| @remove -> function(details) | Emitted when an option is removed from selection |
| @add -> function(details) | Emitted when an option is added to selection |
| @new-value -> function(inputValue, doneFn) | Enables creation of new values; Emitted when a new value has been created; You can override 'new-value-mode' property with it |
| @filter -> function(inputValue, doneFn, abortFn) | Emitted when user wants to filter a value |
| @filter-abort -> function() | Emitted when a filtering was aborted; Probably a new one was requested? |
| @popup-show -> function(evt) | Emitted when the popup is shown |
| @popup-hide -> function(evt) | Emitted when the popup is hidden |
| @virtual-scroll -> function(details) |  |

## methods

| Name | Description |
| --- | --- |
| scrollTo (index[, edge]) => void 0 | Scroll to the given index |
| reset () => void 0 | Resets the virtual scroll computations; Needed for custom edge-cases |
| refresh ([index]) => void 0 | Refreshes the virtual scroll list; Use it after appending items |
| resetValidation () => void 0 | Resets the validation state |
| validate ([value]) => Boolean,Promise\<boolean\> | Validates the component's value |
| focus () => void 0 | Focuses the component |
| blur () => void 0 | Blurs the component |
| showPopup () => void 0 | Shows the popup |
| hidePopup () => void 0 | Hides the popup |
| removeAtIndex (index) => void 0 | Removes the option at the given index |
| add (opt[, unique]) => void 0 | Adds option to model |
| toggleOption (opt[, keepOpen]) => void 0 | Add/remove option from model |
| getOptionIndex () => Number | Gets current focused option index from menu; It's -1 if no option is focused |
| setOptionIndex (index) => void 0 | Sets current focused option index from menu |
| moveOptionSelection ([offset, skipInputValue]) => void 0 | Move selected option from menu by index offset |
| filter (value) => void 0 | Filter options |
| updateMenuPosition () => void 0 | Updates the position of the menu |
| updateInputValue (value[, noFilter]) => void 0 | If 'use-input' is specified, this updates the value that it holds |
| getEmittingOptionValue (opt) => Any |  |
| getOptionValue (opt) => Any |  |
| getOptionLabel (opt) => Any |  |
| isOptionSelected (opt) => Boolean | Returns true if the option is selected |
| isOptionDisabled (opt) => Boolean | Returns true if the option is disabled |

## computedProps

| Name | Type | Description |
| --- | --- | --- |
| hasError | Boolean | Whether the component is in error state |

## tips

- clear 时 model 为 null
- All “click” events in slots are not propagated to their parent elements.
- Please note that transitions do not work when using options-cover  prop.
- The model for single selection can be anything (String, Object, …) while the model for multiple selection must be an Array.
- The list of options is rendered using virtual scroll, so if you render more than one element for an option you must set a q-virtual-scroll--with-prev class on all elements except the first one.
- [lazy-loading](https://quasar.dev/vue-components/select#lazy-loading)
- [render-performance](https://quasar.dev/vue-components/select#render-performance)
unless map-options is used on a large set
do not wrap the array that you are passing in the options prop with ref()/computed()/reactive()/etc
- [native-form-submit](https://quasar.dev/vue-components/select#native-form-submit)
