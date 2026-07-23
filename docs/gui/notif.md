
# notif

The notif component displays positioned notification balloons (tooltips) anchored to an element.

:::info
A `notif` is a tooltip-like notification that is anchored to a specific element.  
A [`toast`](/docs/gui/toast) is a notification that appears on the top right of the desktop.
:::

## Usage

Modular:
```js
import { notif } from "/42/ui/layout/notif.js"
// Or
const { notif } = sys42

const myNotif = await notif(targetElement, "File saved!", {
  picto: "check",
  timeout: 3000,
})
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `el` | String/HTMLElement | Element to anchor the notification to |
| `message` | String/Plan | Content to display |
| `options` | Object | Configuration (see below) |

## Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `picto` | String | | Icon identifier |
| `timeout` | Number | | Auto-close delay in ms |
| `positionable` | Boolean | `true` | Whether to auto-position |

:::tip
For simple temporary messages, consider using [toast](toast) instead.
:::
