# App

## Getting an App object

In **document-based** apps - `window.parent.os.apps.launched.get(APP_INIT.id)`  
In **module-based** apps - the `App` object is passed through [module exports](../guide/making-app.md#module-exports).  
In circumstances where you want another app's App object, this will require using the [Apps Manager](../internals/managers/appsManager.md).

:::tip
Do not create new instances of `App`. Use the [`exec`](../internals/exec.md) API to spawn apps, or alternatively use the [apps manager](../internals/managers/appsManager.md).
:::

## Methods

- `setTitle(title: string, suffix: string = this.name)` - sets the app title. Includes a suffix for the app index
- `async restart(options)` - strange property... Restarts the parent app if there is one, and if there isn't, it reloads the iframe and resets the window. If the app is module-based, it just reloads windows93.
- `destroy()` - Emits the *destroy* event, restores intensive tasks, removes event listeners, and deletes itself from the Apps Manager.
- `getIcon(size)` - Returns the path to the an icon.
- `async resize(width, height, options)` - Resizes the window. If called without parameters, the window will be resized to its original dimensions.
- `isFullscreen` - returns true if the app's window is fullscreened, false if it is not, or returns the element that is fullscreened if unknown.
- `async toggleFullscreen(el: HTMLElement, force: boolean)` - **Non-null `el` elements will make this function enter an infinite loop. Do not include an *el* property ever.** Toggles fullscreen and emits *fullscreenChange* with the `isFullscreen` result.
- `resolveURL(url)` - turns a relative path into an absolute URL.
- `async getAudioTrack()`
- `async about()` - launches the About window.
- `async getSavePath()` - launches a filePickerSave and returns the path selected, or *false* if none.
- `loadFile(path, options)`
- `async saveFile(options)`
- `async saveFileAs(options)`
- `async importFile()`
- `async openFile(dirName)` - launches a filePickerOpen, decodes the file selected, and returns *void*. Returns *false* if none selected.
- `async initState(path, state) | async initState(state)`
- `async updateState(state)`
- `async deleteState()`
- `toJSON()` - returns config

## Properties

- `title`
- `file`
- `encode`
- `decode`
- `picto` - returns the path for the 16x16 app icon.
- `liveReload`
- `config`