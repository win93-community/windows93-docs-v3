---
sidebar_position: 5
---

# File Picker Open

:::caution
This is outdated, feel free to contribute to the docs and update this page. Otherwise it'll get updated in a few weeks.
:::

[View code source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/invocables/filePickerOpen.js)
filePickerOpen can be used to display the open file picker dialog.

## Usage
```ts
import { filePickerOpen } from "42/ui/invocables/filePickerOpen.js"
const result = await filePickerOpen(path: string, options: object)
```

## Arguments

| Argument | Type   | Description                              |
|----------|--------|------------------------------------------|
| path     | String | Path for the dialog to initially open up to |

### Options
| Property | Type   | Description                              |
|----------|--------|------------------------------------------|
| agree    | String | Text for the agree button                |
| decline  | String | Text for the decline button              |

The options object can also include the properties in the [Explorer function options object](explorer.md#options).
