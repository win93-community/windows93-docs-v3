# dialog

The dialog component allows developers to create dialog windows.

## Usage
```js
import dialog from "../../sys/ui/components/dialog.js"
// dialog({your_dialog_opts})
var somedialog = await dialog({width: 300, height: 200, picto: "warning", label: "Test dialog", content: "Hello world!"})
```

### Dialog Options

| Property       | Type                    | Description 
|----------------|-------------------------|-------------
| `x`            | Int                     | The x coordinate of where your dialog will pop up
| `y`            | Int                     | The y coordinate of where your dialog will pop up
| `width`        | Int                     | The width of your dialog
| `height`       | Int                     | The height of your dialog
| `modal`        | Boolean                 | Whether to force the user to interact with the popup
| `stealFocus`   | Boolean                 | Whether the popup should automatically be focussed
| `clear`        | Boolean                 | Whether to render the window stuff
| `inset`        | Boolean                 | Whether to add inset (which is a kind of pushed in effect)
| `label`        | String                  | The title of the popup
| `picto`        | String                  | The icon of the dialog (in the top left)
| `footer`       | String                  | The footertext (does not get insetted)
| `content`      | String/plan/HTMLElement | The body of your dialog
| `resizable`    | Boolean                 | Whether your dialog is resizable
| `maximizable`  | Boolean                 | Whether your dialog can be maximized
| `minimizable`  | Boolean                 | Whether your dialog can be minimized (duh)
| `dockable`     | Boolean                 | Whether your dialog appears in the taskbar
| `workspace`    | Workspace               | In which workspace it appears*
| `pivot`        | String                  | Flexible way to specify in which area it pops up (see /42/ui/desktop/workspaces.js to see all available options)
| `pivotKind`    | String                  | Unknown
| `geometryKind` | Unknown                 | Unknown
*\* = Workspaces do not seem to be finished yet, for now just ignore this*

### Methods


#### close(bool ok)
Closes the dialog, ok doesn't *really* affect anything. The ok value won't be visible on the desktop.


### resize(int width, int height, json options)
Resizes the dialog.

Available JSON options:

| Name      | Type        | Description
|-----------|-------------|-------------
| `width`   | Int         | The width
| `height`  | Int         | The height
| `center`  | Boolean     | Move dialog to center
| `animate` | Boolean/Int | If boolean, it specifies whether to animate the resize. If number, it specifies the duration of this animation
| `save`    | Boolean     | Whether to save the geometry (meaning size and position).
*\* = (speculation) I think this is so that if the dialog gets reopened it retains its position


### moveToCenter(json options)
> [!CAUTION] [This method seems to be buggy]
Centers the dialog.

Available JSON options:

| Name         | Type    | Description
| `animate`    | Boolean | Whether to animate or not (seems to be broken)
| `fixOverlap` | Boolean | Whether to call fixOverlap (whatever that means)


