
# shader

The shader component renders WebGL shaders.

## Usage

Modular:
```js
import { shader } from "/42/ui/media/shader.js"

const myShader = shader({
  src: "/path/to/shader.glsl",
})
```

Plan:
```js
{
  tag: "ui-shader",
  src: "/path/to/shader.glsl",
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | String | URL to the shader source file |
| `srcdoc` | String | Inline shader source |
| `uniforms` | Object | Shader uniform values |

## Methods

- `setUniform(name, value)` - update a shader uniform at runtime
