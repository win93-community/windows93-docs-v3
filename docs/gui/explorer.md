
# explorer

Creates a file explorer dialog. Wraps the [folder](/docs/gui/folder) component with a navigation bar, context menu, and dialog integration.

## Usage

Modular:
```js
import { explorer, filePickerOpen, filePickerSave, folderPicker } from "/42/ui/desktop/explorer.js"
//Or
const { explorer } = sys42

const el = await explorer("~/documents")
const { ok, directory, selection } = await filePickerOpen("~/documents")
const { ok, directory, selection } = await filePickerSave("~/documents")
const { ok, directory } = await folderPicker("~/documents")
```

### Props

| Property          | Type    | Description                                                      |
|-------------------|---------|------------------------------------------------------------------|
| `value`           | String  | The path to display. Default is `"/"`. If a file path is given, it navigates to the parent directory and selects the file. |
| `glob`            | Boolean | Whether to use glob pattern matching for filtering.              |
| `multiselectable` | Boolean | Whether more than one item can be selected. Default is `true`.   |

### Properties

| Property                  | Type    | Description                                                      |
|---------------------------|---------|------------------------------------------------------------------|
| `value`                   | String  | Get or set the current directory path. Setting a file path navigates to its parent and selects it. |
| `glob`                    | Boolean | Get or set glob pattern matching on the folder.                  |
| `filter`                  | String  | Get or set the file filter (e.g. `"*.txt"`).                    |
| `filterType`              | String  | Get or set the filter type (e.g. `"disable"` to show disabled files). |
| `multiselectable`         | Boolean | Get or set whether multiple items can be selected.               |
| `selection`               | Array   | Get or set the currently selected items.                         |
| `isPicker`                | Boolean | Whether the explorer is in file-picker mode.                     |
| `showDisabledFilesOption` | Boolean | Whether to show the "Show Disabled Files" option in the context menu. |
| `titlePrefix`             | String  | Prefix for the dialog title (e.g. `"Open File — "`).            |
| `title`                   | String  | Override the dialog title entirely.                              |
| `picto`                   | String  | Override the dialog pictogram icon.                              |

### Methods

| Method       | Description                                                      |
|--------------|------------------------------------------------------------------|
| `selectAll()`| Select all items in the folder.                                  |
| `folderUp()` | Navigate to the parent directory.                                |
| `go(path)`   | Navigate to a path. If already at that path, refreshes the folder. |
| `close(ok)`  | Close the parent dialog. Pass `true` to confirm, `false` to cancel. |

### Events

| Event                 | Description                              |
|-----------------------|------------------------------------------|
| `ui:explorer.navigate`| Dispatched when the folder renders a new directory. |

## `explorer(path?, options?)`

Opens an explorer dialog.

| Parameter | Type   | Description                                         |
|-----------|--------|-----------------------------------------------------|
| `path`    | String | The directory to open. Default is `"/"`.            |
| `options` | Object | Additional options (see below).                     |

### Options

| Property  | Type    | Description                                         |
|-----------|---------|-----------------------------------------------------|
| `signal`  | AbortSignal | Signal to abort the dialog.                    |
| `picto`   | String  | Dialog pictogram icon.                              |
| `isPicker`| Boolean | Whether the explorer is in file-picker mode.        |

Returns a `Promise<ExplorerComponent>`.

## `filePickerOpen(path?, options?)`

Opens a file-picker dialog for opening files.

```js
const { ok, directory, selection, files } = await filePickerOpen("~/documents", {
  types: [{ accept: { "text/plain": [".txt"] }, description: "Text Files" }],
  multiple: true,
})
```

| Parameter | Type   | Description                                         |
|-----------|--------|-----------------------------------------------------|
| `path`    | String | The directory to start in. Default is the home directory. |
| `options` | Object | Additional options (see below).                     |

### Options

| Property                 | Type    | Description                                         |
|--------------------------|---------|-----------------------------------------------------|
| `types`                  | Array   | Array of file type filters with `accept` and `description`. |
| `accept`                 | String  | Comma-separated MIME types or extensions (converted to `types` internally). |
| `multiple`               | Boolean | Allow selecting multiple files. Default is `false`. |
| `returnFiles`            | Boolean | Return `File` objects in the result. Default is `false`. |
| `showDisabledFiles`      | Boolean | Show the "Show Disabled Files" toggle. Default is `false`. |
| `excludeAcceptAllOption` | Boolean | Exclude the "All Files" option from the filter dropdown. |
| `agree`                  | String/Object | Label or config for the confirm button. Default is `"Open"`. |
| `decline`                | String/Object | Label or config for the cancel button. Default is `"Cancel"`. |
| `signal`                 | AbortSignal | Signal to abort the dialog.                    |

Returns a `Promise<{ ok, directory, selection, files? }>`.

| Property    | Description                                             |
|-------------|---------------------------------------------------------|
| `ok`        | Whether the dialog was confirmed.                       |
| `directory` | The directory the dialog was in when confirmed.         |
| `selection` | Array of selected file paths.                           |
| `files`     | Array of `File` objects (only if `returnFiles` is `true`). |

## `filePickerSave(path?, options?)`

Opens a file-picker dialog for saving files.

```js
const { ok, directory, selection } = await filePickerSave("~/documents", {
  suggestedName: "document.txt",
})
```

| Parameter | Type   | Description                                         |
|-----------|--------|-----------------------------------------------------|
| `path`    | String | The directory to start in. Default is the home directory. |
| `options` | Object | Additional options (see below).                     |

### Options

| Property              | Type    | Description                                         |
|-----------------------|---------|-----------------------------------------------------|
| `suggestedName`       | String  | Pre-filled filename. Default is a timestamp-based name. |
| `suggestedNamePrefix` | String  | Prefix for the suggested name (e.g. `"document"` becomes `"document_2026-07-22_123456"`). |
| `agree`               | String/Object | Label or config for the confirm button. Default is `"Save"`. |
| `decline`             | String/Object | Label or config for the cancel button. Default is `"Cancel"`. |
| `signal`              | AbortSignal | Signal to abort the dialog.                    |

Returns a `Promise<{ ok, directory, selection }>`.

If the selected file already exists, a confirmation dialog appears asking to overwrite or rename.

| Property    | Description                                             |
|-------------|---------------------------------------------------------|
| `ok`        | Whether the dialog was confirmed.                       |
| `directory` | The directory the dialog was in when confirmed.         |
| `selection` | Array with the chosen file path.                        |

## `folderPicker(path?, options?)`

Opens a folder-picker dialog.

```js
const { ok, directory } = await folderPicker("~/documents")
```

| Parameter | Type   | Description                                         |
|-----------|--------|-----------------------------------------------------|
| `path`    | String | The directory to start in. Default is the home directory. |
| `options` | Object | Additional options (see below).                     |

### Options

| Property     | Type    | Description                                         |
|--------------|---------|-----------------------------------------------------|
| `agree`      | String/Object | Label or config for the confirm button. Default is `"Choose"`. |
| `decline`    | String/Object | Label or config for the cancel button. Default is `"Cancel"`. |
| `returnPaths`| Boolean/Object | If set, includes all file paths in the selected directory (recursive). |
| `signal`     | AbortSignal | Signal to abort the dialog.                    |

Returns a `Promise<{ ok, directory, paths? }>`.

| Property    | Description                                             |
|-------------|---------------------------------------------------------|
| `ok`        | Whether the dialog was confirmed.                       |
| `directory` | The selected directory path (including the chosen name if typed). |
| `paths`     | Array of file paths (only if `returnPaths` is set).     |
