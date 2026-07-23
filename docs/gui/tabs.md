
# tabs

The tabs component provides a tabbed interface for switching between content panels.

:::caution
Unlike the [V3 beta](https://wiki.win93.xyz/93.php?Windows93%20v3%20beta), the overhauled tabs component no longer allows tabs to be dragged or reordered.
:::

## Usage

Modular:
```js
import { tabs } from "/42/ui/layout/tabs.js"

const myTabs = tabs({
  content: [
    { tag: "button", text: "Tab 1" },
    { tag: "button", text: "Tab 2" },
  ],
})
```

Plan:
```js
{
  tag: "ui-tabs",
  content: [
    { tag: "button", text: "Tab 1" },
    { tag: "button", text: "Tab 2" },
  ],
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `closable` | Boolean | Whether tabs can be closed |
| `displayPicto` | Boolean | Whether to show tab icons |

## Events

- `ui:tabs.change` - fired when the active tab changes
