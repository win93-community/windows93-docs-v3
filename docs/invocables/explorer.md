# Explorer

## Usage

```js
import { explorer, filePickerSave, filePickerOpen, folderPicker } from "/42/ui/desktop/explorer.js"
```

## Function Signature

```js
await explorer(path: string, options: Plan): ExplorerComponent
```

### Parameters

| Parameter | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| `path`    | string | The initial directory path to open. Defaults to `/`. |
| `options` | Plan   |                                                      |

## Options

The `options` parameter accepts the following properties:

| Property          | Type        | Description                                               |
|-------------------|-------------|-----------------------------------------------------------|
| `picto`           | string      | Icon to display in the dialog. Defaults to `transparent`. |
| `isPicker`        | boolean     | If `true`, enables file picker mode.                      |
| `filter`          | string      | Filter for displayed files (e.g., `*.txt`).               |
| `filterType`      | string      | Type of filter applied. Defaults to `disable`.            |
| `multiselectable` | boolean     | Allows selecting multiple files. Defaults to `false`.     |
| `dialog`          | Plan        |                                                           |
| `signal`          | AbortSignal | Optional signal to abort the operation.                   |

## Notes
- You can navigate to parent directories using `Alt+Up` or `Backspace`, as long as no file is selected and you're not focusing a button.

## Example Usage

### Basic Explorer

```js
await explorer("/", {
  picto: "folder",
  multiselectable: true,
})
```

### File Picker

```js
await explorer("~/documents", {
  isPicker: true,
  filter: "*.txt",
  dialog: {
    class: "custom-dialog",
  },
})
```

### Save File Dialog

```js
await filePickerSave("~/downloads", {
  suggestedName: "newfile.txt",
})
```

## File Picker Open

### Function Signature

```js
await filePickerOpen(path: string, options: Plan): { ok: boolean, directory: string, selection: string[] }
```

### Parameters

| Parameter | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| `path`    | string | The initial directory path to open. Defaults to `/`. |
| `options` | Plan   |                                                      |

### Options

| Property      | Type    | Description                                                            |
|---------------|---------|------------------------------------------------------------------------|
| `multiple`    | boolean | Allows selecting multiple files. Defaults to `false`.                  |
| `returnFiles` | boolean | If `true`, returns file objects instead of paths. Defaults to `false`. |
| `dialog`      | Plan    |                                                                        |

### Example Usage

```js
await filePickerOpen("~/documents", {
  multiple: true,
  returnFiles: true,
})
```

---

## File Picker Save

### Function Signature

```js
await filePickerSave(path: string, options: Plan): { ok: boolean, directory: string, selection: string[] }
```

### Parameters

| Parameter | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| `path`    | string | The initial directory path to open. Defaults to `/`. |
| `options` | Plan   |                                                      |

### Options

| Property        | Type   | Description                                          |
|-----------------|--------|------------------------------------------------------|
| `suggestedName` | string | Default name for the file to save.                   |
| `dialog`        | object | Dialog-specific options like `class`, `footer`, etc. |

### Example Usage

```js
await filePickerSave("~/downloads", {
  suggestedName: "newfile.txt",
})
```

---

## Folder Picker

### Function Signature

```js
await folderPicker(path: string, options: Plan): {ok: boolean, directory: string, paths: string[]}: { ok: boolean, directory: string, paths: string[] }
```

### Parameters

| Parameter | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| `path`    | string | The initial directory path to open. Defaults to `/`. |
| `options` | Plan   |                                                      |

### Options

| Property      | Type    | Description                                          |
|---------------|---------|------------------------------------------------------|
| `returnPaths` | boolean | If `true`, returns all paths in the selected folder. |
| `dialog`      | Plan    |                                                      |

### Example Usage

```js
await folderPicker("~/projects", {
  returnPaths: true,
})
```