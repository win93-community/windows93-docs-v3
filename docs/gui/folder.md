
# folder

Displays a list of files and folders in a grid layout. Supports drag and drop, context menus, fuzzy search, and file operations.

:::caution
**This is a low-level component.**  
For a complete file explorer dialog, use the [`explorer`](/docs/gui/explorer) component instead.
:::

## Usage

Modular:
```js
import { folder } from "/42/ui/media/folder.js"

const myFolder = folder({
  value: "~/documents/",
})
```

Plan:
```js
{
  tag: "ui-folder",
  value: "~/documents/",
}
```

### Props

| Property     | Type   | Description                                                        |
|--------------|--------|--------------------------------------------------------------------|
| `value`      | String | The directory path to display.                                     |
| `glob`       | Boolean| Whether to use glob pattern matching for the path.                 |
| `filter`     | String | A glob pattern or extension to filter files (e.g. `"*.txt"`).     |
| `filterType` | String | Set to `"disable"` to disable filtered items instead of hiding them. |

### Properties

| Property          | Type    | Description                                                      |
|-------------------|---------|------------------------------------------------------------------|
| `value`           | String  | Get or set the current directory path.                           |
| `glob`            | Boolean | Get or set glob pattern matching.                                |
| `filter`          | String  | Get or set the file filter pattern.                              |
| `filterType`      | String  | Get or set the filter type.                                      |
| `showHiddenFiles` | Boolean | Get or set whether hidden files (starting with `.`) are shown. Default is `false`. |
| `multiselectable` | Boolean | Get or set whether multiple items can be selected.               |
| `selection`       | Array   | Get or set the currently selected file paths.                    |
| `virtualizable`   | Object  | The virtualizable instance managing list rendering.              |
| `matrixable`      | Object  | The matrixable instance managing grid layout and focus navigation. |
| `transferable`    | Object  | The transferable instance managing drag and drop.                |
| `fuzzySearch`     | Function| Fuzzy search function initialized with current file basenames.  |

### Methods

| Method                           | Description                                             |
|----------------------------------|---------------------------------------------------------|
| `refresh()`                      | Re-render the folder contents.                          |
| `createFolder(options)`          | Create a new folder and select it.                      |
| `createFile(options)`            | Create a new file and select it.                        |
| `createShortcut(options)`        | Create a shortcut and select it.                        |
| `importFile(options)`            | Import file(s) and select them.                         |
| `selectAddedIcon(filenames)`     | Select icons by their filenames after they are added.   |
| `displayContextMenu(e, addItems?)` | Show a context menu at the pointer position.         |

### Events

| Event                            | Description                                            |
|----------------------------------|--------------------------------------------------------|
| `ui:folder.export`               | Dispatched when items are dragged out. Cancelable.     |
| `ui:folder.import`               | Dispatched when items are dropped in. Cancelable.      |
| `ui:folder.inexistent`           | Dispatched when the path does not exist. Cancelable.   |
| `ui:folder.icon-added`           | Dispatched when new icons are added to the folder.     |
| `ui:folder.contextmenu-creation` | Dispatched during context menu file creation.          |
| `ui:folder.items`                | Hook event fired with the current items list.          |
| `ui.selection.change`            | Dispatched when the selection changes.                 |

### Context Menu

Right-clicking the folder background shows a context menu with options to create files, folders, shortcuts, paste from clipboard, and import files. Right-clicking an icon shows a file-specific context menu with open, cut, copy, rename, and delete options.

The `displayContextMenu` method accepts an optional `addItems` callback to inject custom menu items.
