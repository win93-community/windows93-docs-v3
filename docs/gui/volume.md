
# volume

The volume control is a vertical fader with a level meter.

## Usage

Modular:
```js
import { volume } from "/42/ui/control/volume.js"

const myVolume = volume({
  value: 0.8,
  min: 0,
  max: 1,
  action(e, el) {
    console.log(el.value)
  },
})
```

Plan:
```js
{
  tag: "ui-volume",
  value: 0.8,
  min: 0,
  max: 1,
  action(e, el) {
    console.log(el.value)
  },
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | Number | Current volume level |
| `min` | Number | Minimum value |
| `max` | Number | Maximum value |
| `scale` | String | Display scale (default: `"dB"`) |

The control displays a real-time level meter when connected to an audio node via `bind`.
