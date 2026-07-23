
# code

The code control provides a code editor powered by CodeMirror.

## Usage

Modular:
```js
import { code } from "/42/ui/control/code.js"

const myCode = code({
  lang: "javascript",
  theme: "monokai",
  src: "/path/to/file.js",
  action(e, el) {
    console.log(el.value)
  },
})
```

Plan:
```js
{
  tag: "ui-code",
  lang: "javascript",
  theme: "monokai",
  src: "/path/to/file.js",
  action(e, el) {
    console.log(el.value)
  },
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `lang` | String | Language |
| `theme` | String | Editor theme |
| `src` | String | File path to load |
| `srcdoc` | String | Inline content to load |
| `singleLine` | Boolean | Single-line mode |
| `mode` | String | Editor mode |

## Methods

- `getValue()` - returns the current editor content
- `setValue(text)` - sets the editor content
