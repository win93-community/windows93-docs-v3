
# model

The model component renders GLTF and GLB models using Three.js.

## Usage

Modular:
```js
import { model } from "/42/ui/media/model.js"

const myModel = model({
  src: "/models/object.glb",
  interactive: true,
  visualization: "both",
})
```

Plan:
```js
{
  tag: "ui-model",
  src: "/models/object.glb",
  interactive: true,
  visualization: "both",
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | String | URL to the 3D model file |
| `interactive` | Boolean | If true, enables controls (orbit, pan, zoom) |
| `visualization` | "both" \| "solid" | Toggles wireframe |
