
# Control

The Control class extends Component to provide form-associated custom elements.

## Usage

```js
import { Control } from "/42/api/gui/Control.js"
```

## Creating a control

```js
class MySlider extends Control {
  static plan = {
    tag: "ui-my-slider",
    options: {
      valueType: "number",
    },
  }
}

Control.define(MySlider)
```

## Differences from Component

- Implements [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) for native form integration
- Has `name`, `value`, `form`, `labels`, and `validity` properties
- Supports `required` validation
- Automatically derives `type` from the tag name

## Form integration

Controls participate in form submission natively:

```js
{
  tag: "form",
  content: [
    { tag: "ui-my-slider", name: "volume", value: 0.8 },
    { tag: "button", type: "submit", text: "Submit" },
  ],
  action(e) {
    const data = new FormData(e.target)
    console.log(data.get("volume")) // 0.8
  },
}
```
