
# knob

The knob is a dial control commonly used for audio parameters.

## Usage

Modular:
```js
import { knob } from "/42/ui/control/knob.js"

const myKnob = knob({
  value: 0.5,
  min: 0,
  max: 1,
  step: 0.01,
  action(e, el) {
    console.log(el.value)
  },
})
```

Plan:
```js
{
  tag: "ui-knob",
  value: 0.5,
  min: 0,
  max: 1,
  step: 0.01,
  action(e, el) {
    console.log(el.value)
  },
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | Number | Current value |
| `min` | Number | Minimum value |
| `max` | Number | Maximum value |
| `step` | Number | Step increment |
| `valueType` | String | `"number"` (default) |

Drag vertically to change the value. Hold `Shift` for fine control.
