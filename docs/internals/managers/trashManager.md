# Trash Manager

```js
import { trashManager } from "/42/api/os/managers/trashManager.js"
// Or
const trashManager = sys42.trash
```

The trash manager moves deleted files to `/trash/` and restores them.

Its config file is the `~/config/trash.json5`. It's a map of trash name → `{ path, deleted }`, recording the original location and deletion time.

## Methods

- `add(path)` - moves a file to `/trash/`. Names that already exist get an incremented suffix.
- `restore(nameOrPath, options)` - moves an item back to its original path. Refuses and shows a [toast](../../gui/toast.md) when a file already exists there.
- `restoreAll(options)` - restores every item.
- `empty(options)` - permanently deletes everything in the trash. Optionally asks for confirmation.
- `isEmpty()` - true when the trash has no items.

## Explorer integration

- It listens to `fs.on("move || copy")` events to keep it in sync with manual moves.
- It adds "Restore all" and "Empty Trash" buttons to the explorer navbar when inside `/trash/`. ([See how](docs/internals/explorer#extending-explorer))
- It rewrites context menus for trash items and the trash icon (Restore, Empty Trash, Restore all, Open Trash).