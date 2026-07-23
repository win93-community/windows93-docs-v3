
# combobox

The combobox is a dropdown select control with fuzzy search support.

## Usage

Modular:
```js
import { combobox } from "/42/ui/control/combobox.js"

const myCombobox = combobox({
  value: "option1",
  options: [
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ],
  action(e, el) {
    console.log(el.value)
  },
})
```

Plan:
```js
{
  tag: "ui-combobox",
  value: "option1",
  options: [
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ],
  action(e, el) {
    console.log(el.value)
  },
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | String | Currently selected value |
| `options` | Array | Array of `{ value, text }` items |
| `placeholder` | String | Placeholder text |
