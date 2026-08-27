
# dock

The dock is the taskbar component that lists every open window. It listens for [dialogs](/docs/gui/dialog) being opened and gives each one a button, letting the user activate, minimize, maximize, and close windows.

The dock component is in charge of more than just the dock. It adds context menus to window title bars, etc.

:::info
The dock is a system component: the desktop creates one instance inside the taskbar (`footer#taskbar`), you never need to create it yourself.
:::

## Usage

Modular:
```js
import { dock } from "/42/ui/desktop/dock.js"
```

Plan:
```js
{
  tag: "ui-dock", // on the desktop, it has 'grow' class so it stretches across the taskbar:
}
```

## How it works

The dock listens for the `ui:dialog.open` event globally. A dialog appears in the dock only if it has `dockable: true`.

If the dialog is also `minimizable`, the dock injects a minimize button into its title bar (before the maximize/close buttons) and extends [dialog](../../gui/dialog.md) with `minimize()`/`unminimize()`.

Each program gets a button showing the dialog's [picto](/docs/gui/picto) and title. If the dialog belongs to an app, the `" - AppName"` suffix is stripped from the label. The button stays in sync automatically:

| Event                   | Dock response                                   |
|-------------------------|-------------------------------------------------|
| `ui:dialog.title-change`| Updates the button label                        |
| `ui:dialog.picto-change`| Updates the button icon                         |
| `ui:dialog.activate`    | Presses (highlights) the corresponding button   |
| `ui:dialog.close` / `ui:dialog.destroy` | Removes the button              |

The dock doesn't dispatch events itself.

Clicking a dock button has the following effects. If the window is minimized, it unminimizes it. If the window is already active, it minimizes it. Otherwise, the dock activates the window.

## Methods

| Method              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `activate(id)`      | Presses the button of the given dialog id and unpresses all others.         |
| `minimize(id, cb?)` | Animates the window into its dock button, then hides it. Calls `cb(true)` on success or `cb(false)` if aborted/not possible. |
| `unminimize(id, cb?)` | The reverse of `minimize`: animates from the dock button back to the window's last position. |

Minimizing works by moving an invisible ghost element (`ui-dock__ghost`, a semi-transparent dotted rectangle appended to `<html>`) over the dialog, then animating it to the button's rect. While a window is minimized, the topmost remaining dialog gets activated.

When the animation finishes, the dialog dispatches `ui:dialog.minimize` or `ui:dialog.unminimize`. Both animations can be interrupted by calling `minimize`/`unminimize` again (the previous animation is cancelled).

## Context menu

Right-clicking a **dock entry**, a dialog's **title bar**, or its **picto** opens a context menu containing:

- **Maximize** / **Restore**
- **Minimize** / **Unminimize**
- Items for the opened files (if the app manifest has `decode`)
- Items from `os.config.dock.contextMenu`
  - This is where effects, move to, reset size, reset size, organize windows, and stick on back, and open program folder come from.
  - These are added in `/desktop.js`
- **Close Others** (only when right-clicking the dock button itself, not title bar or picto)
- **Close**

The `os.config.dock.contextMenu` entries can be plain menu items or functions receiving the dialog element and returning menu items.