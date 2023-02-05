---
title: form
---

## Props

| name | type | default | description |
|------|------|---------|-------------|
| autofocus | Boolean | false | Focus first focusable element on initial component render |
| no-error-focus | Boolean | false | Do not try to focus on first component that has a validation error when submitting form |
| no-reset-focus | Boolean | false | Do not try to focus on first component when resetting form |
| greedy | Boolean | false | Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation) |

## Events

| name | description |
|------|-------------|
| @submit -> function(evt) | Emitted when all validations have passed when tethered to a submit button |
| @reset -> function() | Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler |
| @validation-success -> function() | Emitted after a validation was triggered and all inner Quasar components models are valid |
| @validation-error -> function(ref) | Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid |

## methods

| name | description |
|------|-------------|
| focus () => void 0 | Focuses the first focusable element in the form |
| validate ([shouldFocus]) => Promise\<boolean\> | Triggers a validation on all applicable inner Quasar components |
| resetValidation () => void 0 | Resets the validation on all applicable inner Quasar components |
| submit ([evt]) => void 0 | Manually trigger form validation and submit |
| reset ([evt]) => void 0 | Manually trigger form reset |
| getValidationComponents () => Array | Get array of children vue components that support validation |

## tips

- QForm hooks into QInput, QSelect or QField wrapped components
- QInput, QSelect or QField wrapped components must use the internal validation (NOT the external one).
- If you want to take advantage of the reset functionality, then be sure to also capture the @reset event on QForm and make its handler reset all of the wrapped components models
- [Turning off Autocompletion](https://quasar.dev/vue-components/form#turning-off-autocompletion)
- [native form submit](https://quasar.dev/vue-components/form#submitting-to-a-url-native-form-submit-)
- [useFormChild 自定义 form component](https://quasar.dev/vue-components/form#child-communication)
