
# terminal

The terminal component displays a terminal emulator using xterm.js.

## Usage

Modular:
```js
import { createTerminal } from "/42/ui/interface/terminal.js"

const term = await createTerminal({
  fontSize: 14,
  fontFamily: "monospace",
  cols: 80,
  rows: 24,
})
```

## Options

| Property | Type | Description |
|----------|------|-------------|
| `fontSize` | Number | Font size in pixels |
| `fontFamily` | String | Font family |
| `cols` | Number | Number of columns |
| `rows` | Number | Number of rows |
