
# Actions

The actions module provides high-level file system operations like create, copy, move, rename, trash, import, and export.
Because they involve user interaction (dialogs, confirmations, file pickers), these actions are typically used by Explorer and context menus.

:::caution
**Are you sure `actions` is the right module for your use case?**

If you're looking to manipulate files programmatically **without** user interaction, you probably want the [`fs` module](/docs/api/fs) instead.  
If you're looking for a managed file explorer component, you probably want [`explorer`](/docs/gui/explorer) instead.
:::

## Usage

```js
import { actions } from "/42/api/os/actions.js"
// Or
const { actions } = sys42
```

## Creating

### `createFile(path, options?)`

Opens a name prompt and creates an empty file. Returns the created filename, or `undefined` if cancelled.

```js
const name = await actions.createFile("/desktop/")
```

| Meta | |
|------|--|
| Shortcut | `F9` |

### `createFolder(path, options?)`

Opens a name prompt and creates a new directory. Returns the created folder name, or `undefined` if cancelled.

```js
const name = await actions.createFolder("/desktop/")
```

| Meta | |
|------|--|
| Shortcut | `F10` |

### `createShortcut(path, options?)`

Opens an app picker and creates a `.desktop` shortcut for the selected application.

```js
await actions.createShortcut("/desktop/")
```

| Meta | |
|------|--|
| Shortcut | `F8` |

### `createPath(path, options?)`

Low-level helper used by `createFile` and `createFolder`. Handles name generation, collision avoidance, and the prompt dialog. You'll rarely need to call this directly.

## Deleting

### `deleteFile(selection)`

Permanently deletes files after showing a confirmation dialog.

```js
await actions.deleteFile("/temp/notes.txt")
await actions.deleteFile(["/temp/a.txt", "/temp/b.txt"])
```

| Meta | |
|------|--|
| Shortcut | `Shift+Del` |

### `deleteFolder(selection)`

Alias for `deleteFile`.

### `deletePaths(selection)`

Low-level helper that permanently deletes paths without a confirmation dialog. Used internally.

## Trash

### `moveFileToTrash(selection)`

Moves files to the trash. Unlike `deleteFile`, this is not permanent and can be undone.

```js
await actions.moveFileToTrash("/desktop/old-file.txt")
```

| Meta | |
|------|--|
| Shortcut | `Del` |

### `moveFolderToTrash(selection)`

Alias for `moveFileToTrash`.

## Moving & Copying

### `movePath(selection, dest, options?)`

Moves one or more files or folders to a destination directory. Returns an array of new paths.

```js
const moved = await actions.movePath("/docs/report.txt", "/backup/")
```

### `copyPath(selection, dest, options?)`

Copies one or more files or folders to a destination directory. Automatically increments filenames to avoid collisions when copying within the same directory. Returns an array of new paths.

```js
const copied = await actions.copyPath("/docs/report.txt", "/backup/")
```

### `cutFile(selection)`

Cuts files to the internal clipboard for a subsequent paste operation.

```js
await actions.cutFile(["/docs/a.txt", "/docs/b.txt"])
```

| Meta | |
|------|--|
| Shortcut | `Ctrl+X` |

### `copyFile(selection)`

Copies files to the internal clipboard for a subsequent paste operation.

```js
await actions.copyFile(["/docs/a.txt", "/docs/b.txt"])
```

| Meta | |
|------|--|
| Shortcut | `Ctrl+C` |

### `pasteTo(path, folderEl)`

Pastes the contents of the file clipboard into the given directory. Handles both cut and copy states, with collision avoidance for same-directory operations.

```js
await actions.pasteTo("/backup/", folderComponent)
```

| Meta | |
|------|--|
| Shortcut | `Ctrl+V` |

## Renaming

### `renameFile(selection)`

Opens a rename prompt for the first item in the selection. Uses `fileIndex.move()` to update the in-memory file tree.

```js
await actions.renameFile(["/docs/old-name.txt"])
```

| Meta | |
|------|--|
| Shortcut | `F2` |

### `renameFolder(selection)`

Alias for `renameFile`.

## Opening & Navigating

:::tip
You probably would rather use the `exec()` function if you need to open files or folders programmatically.
:::


### `launchFile(selection)`

Opens files with their associated application via `appsManager.open()`.

```js
await actions.launchFile("/docs/readme")
```

### `launchFolder(selection)`

Opens folders via `appsManager.open()`.

```js
await actions.launchFolder("/documents/")
```

### `openContainingFolder(selection)`

Opens the parent directory of each selected item in the file explorer.

```js
await actions.openContainingFolder(["/docs/report.txt"])
```

## Import & Export

### `importFile(path, options?)`

Opens a native file picker and writes selected files to the virtual filesystem. Returns an array of imported paths.

```js
const files = await actions.importFile("/desktop/", {
  multiple: true,
})
```

### `exportFile(selection, options?)`

Exports files to the user's real filesystem via a browser download/save dialog.

```js
await actions.exportFile(["/docs/report.txt"])
```

### `exportFolder(selection, options?)`

Exports folders as `.tar` archives. Shows a progress dialog with a cancel option.

```js
await actions.exportFolder(["/projects/my-app/"])
```

## Clipboard (Text)

### `copyLocation(selection, options?)`

Copies the path string(s) of the selected item(s) to the system clipboard. Shows a toast notification by default.

```js
await actions.copyLocation(["/docs/report.txt"])
```

| Meta | |
|------|--|
| Picto | `copy` |
