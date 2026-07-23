
# scope

The scope component renders a SharedArrayBuffer-based oscilloscope/spectrum visualizer for audio signals.

## Usage

Modular:
```js
import { scope } from "/42/ui/media/scope.js"

const myScope = scope({
  fill: true,
  mode: "auto",
})
```

Plan:
```js
{
  tag: "ui-scope",
  fill: true,
  mode: "auto",
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `fill` | Boolean | Whether to fill the container |
| `mode` | String | Visualization mode (`"auto"`, `"oscilloscope"`, `"spectrum"`) |
