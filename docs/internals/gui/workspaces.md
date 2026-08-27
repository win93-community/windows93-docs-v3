
# workspaces

Workspaces hold the open windows. A `ui-workspaces` container holds one or more `ui-workspace` elements, and each [dialog](/docs/gui/dialog) lives inside the active workspace.

:::info
The desktop creates a single `ui-workspaces` containing one `ui-workspace`, exposed as `os.workspaces`. The active workspace is available as `os.workspaces.current`.
:::

## Usage

Modular:
```js
import { workspaces } from "/42/ui/desktop/workspaces.js"
```

Plan:
```js
{
  tag: "ui-workspaces",
}
```

A `ui-workspaces` with no children renders one default `ui-workspace`.


Non-modal dialogs append themselves to a workspace when opened. If no active workspace exists, one is created and appended to `<body>`.

The dialog options `workspace`, `pivot`, and `pivotKind` interact with this component; see the [dialog documentation](/docs/gui/dialog).

Pivots are the screen regions where dialogs get placed (center, top-left, top-right, bottom-right, bottom-left).

When a dialog opens without an explicit [`pivot`](/docs/gui/dialog#dialog-options), `findAvailablePivot()` picks one: center if free, otherwise the least occupied pivot in round-robin order. Oversized dialogs fall back to the center.

> Oversized dialogs are considered dialogs that are **more than half the workspace in either x/y dimension**.

Moving or resizing a window re-detects its pivot from its position (`detectPivot()` on the dialog).

## Properties

| Property        | Type               | Description                                                        |
|-----------------|--------------------|--------------------------------------------------------------------|
| `current`       | WorkspaceComponent | Get the active workspace (`ui-workspace[active]`). Only on `ui-workspaces`. |
| `dock`          | DockComponent      | The [dock](/docs/internals/gui/dock), lazily resolved via `document.querySelector("ui-dock")`. Only on `ui-workspace`. |
| `tracker`       | Array              | The dialogs living in this workspace. Only on `ui-workspace`.      |

## Methods

Only `ui-workspace` has methods.

- `findAvailablePivot()` - Returns the pivot for the next dialog (see above).

- `getPivotCounts()` - Returns a `Map` of pivot -> number of tracked dialogs using it.

- `cycleDialogUp()` / `cycleDialogDown()` - Activates the next/previous program in the dock, wrapping around. Bound to <kbd>Alt</kbd>+<kbd>Tab</kbd> (only up). Does nothing if the dock is empty.

- `autoOrganize()` - Arranges all visible, non-maximized windows so they tile without overlapping. Afterwards, windows are re-stacked by z-index sorted top-to-bottom. [This is the same as **Organize Windows** in the desktop context menu.](../../internals/gui/dock.md#context-menu)