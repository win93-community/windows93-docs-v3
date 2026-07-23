
# Clipboard

The clipboard module provides convenient wrappers around the web Clipboard API.

:::danger
This module should not be used for copying files, folders, or advanced data. Alternatively, use the [`fs`](/docs/api/fs) module.
:::

## Usage

```js
import { clipboard } from "/42/api/io/clipboard.js"
```

## Copy

```js
await clipboard.copy("Hello, world!")
```

With a notification toast:

```js
await clipboard.copy("Hello, world!", {
  notif: true,
})
```

## Paste

```js
const text = await clipboard.paste()
```

## Parameters

### `copy(text, options)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | String | Text to copy |
| `options.notif` | Boolean/String/Function | Show a toast notification after copying |

### `paste()`

Returns a `Promise<string>` with the clipboard content.
