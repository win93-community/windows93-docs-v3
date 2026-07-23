
# menu

The menu component creates context menus and dropdown menus.

## Usage

Modular:
```js
import { menu } from "/42/ui/layout/menu.js"

const myMenu = await menu({
  items: [
    { text: "Open", picto: "folder-open", action: () => {} },
    { text: "Save", picto: "save", action: () => {} },
    "-",
    { text: "Delete", picto: "trash", action: () => {} },
  ],
})
```

Plan:
```js
{
  tag: "ui-menu",
  items: [
    { text: "Open", picto: "folder-open", action: () => {} },
    { text: "Save", picto: "save", action: () => {} },
    "-",
    { text: "Delete", picto: "trash", action: () => {} },
  ],
}
```

## Basic menu

```js
const result = await menu({
  items: [
    { text: "Open", picto: "folder-open", action: () => {} },
    { text: "Save", picto: "save", action: () => {} },
    "-",
    { text: "Delete", picto: "trash", action: () => {} },
  ],
})
```

## Menu items

| Property | Type | Description |
|----------|------|-------------|
| `text` | String | Label text |
| `picto` | String | Icon identifier |
| `action` | Function | Called when item is clicked |
| `disabled` | Boolean | Whether item is greyed out |
| `separator` | Boolean | Renders a divider line |
| `children` | Array | Submenu items |

## Positioning

Menus automatically position themselves near the cursor or triggering element. Use `position` to override:

```js
menu({ items: [...], position: { my: "left top", at: "left bottom" } })
```

## Events

- `ui:menu.open` - fired when menu opens
- `ui:menu.close` - fired when menu closes
