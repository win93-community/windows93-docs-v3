# App Manifests

This page gives you a reference for all the supported `app.manifest.json5` properties.

:::tip
JSON5 doesn't support schemas, but you can use [this schema](/assets/manifest-schema.json) with JSONC or with JSON
:::

A manifest file can define a single app, or an array of app definitions. The `name` property is required for each app.

> A lot of this logic is further explained in the internal apps manager's [manifest normalization](../internals/managers/appsManager.md#manifests) documentation.

## General

| Property                  | Type                 | Description                                                                                                                                                             |
|---------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**                  | String (required)    | Friendly name of your app. Can include spaces, capital letters, etc.                                                                                                    |
| **displayName**           | String               | The title of the app's desktop icon. Defaults to the app's name.                                                                                                        |
| **slug**                  | String               | Unique identifier of your app. Should be lowercase and not include spaces, etc. If not present, it will take the name, apply kebab case, and assign it as the app slug. |
| **command**               | String               | The command used in the terminal to open this app. If omitted, a command name is auto-generated based on the app's name.                                                |
| **categories**            | Array\<String\>      | A list of categories the app belongs to. Currently unused.                                                                                                               |
| **picto**                 | Picto                | A [picto](/docs/gui/picto) to be shown as the dialog's icon.                                                                                                            |
| **catalogable**           | Boolean              | Whether the app appears in the start menu. Default is `true`.                                                                                                           |
| **installable**           | Boolean              | Holdover from the Windows93 v3 beta where apps could be installed. Currently has no effect.                                                                             |
| **terminal**              | Boolean              | Puts the app in a "commands" section of the terminal's help command. Default is `false`.                                                                                |
| **solo**                  | Boolean              | Whether the app can only have one instance. Default is `false`.                                                                                                         |
| **multifile**             | Boolean              | Accepts multiple files to be opened at once. Currently no apps use this and it is untested. Default is `false`.                                                |
| **multiple**              | Boolean              | Allows multiple command line parameters. If not `true`, each command line parameter gets launched as a separate app. Default is `false`.                                 |
| **suspendIntensiveTasks** | Boolean              | Use a low-power mode while the app is open. Default is `false`.                                                                                                         |
| **zoom**                  | Enum: `1`, `2`       | On emulator apps, set whether to start the zoom at 100% or 200%. Default is `1`.                                                                                        |
| **animation**             | Boolean              | Whether the window has enter and exit animations. Default is `false`.                                                                                                   |
| **options**               | Object               | Passes default command arguments into the app.                                                                                                                          |

## Entry points

| Property   | Type   | Description                                                            |
|------------|--------|------------------------------------------------------------------------|
| **module** | Path   | A relative path to a `.js` module from the manifest's folder.          |
| **document**| Path  | A relative path to an `.html` document from the manifest's folder which will be iframed. |

## Icons

| Property   | Type              | Description                                                                                                                                                |
|------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **icons**  | Array             | A list of app icons distinguished by size. By default icons are automatically searched in the root directory, where `[ext]` is png, gif, svg, or jpg: `icon-32.[ext]`, `icon-16.[ext]`, `icons/32x32/icon.[ext]`, `icons/16x16/icon.[ext]`. Each item can be a string (interpreted as a 32x32 icon) or an object with `src` and `sizes`. |
| **icon**   | Path              | Shorthand for a single 32x32 icon in `manifest.icons`. A relative path to a 32x32 icon.                                                                    |

Icon list item:

| Property | Type                | Description                                  |
|----------|---------------------|----------------------------------------------|
| `src`    | Path (required)     | A relative path to an icon.                  |
| `sizes`  | Enum: `16x16`, `32x32` | The resolution of the icon. Default is `32x32`. |

## About / Help

`about`, `description`, `license`, and `authors` each cause a `?` button to be shown, which opens a help dialog.

| Property    | Type          | Description                                                                                          |
|-------------|---------------|------------------------------------------------------------------------------------------------------|
| **about**   | Path          | A relative path to an `.md` document that displays when a user clicks the `?` icon.                  |
| **description**           | Markdown             | Text describing the app. Will show in the help dialog.                       |
| **license** | String        | License of the app. Will show in the help dialog.                                                     |
| **authors** | Array         | A list of authors for the app. Each item has `name`, `web`, and `description` (description is currently unused and bugged). |

## Files (decode/encode)

Apps which can open files use `decode`; apps which can save files use `encode`. By default, `encode` uses the app's `decode` options.

| Property   | Type   | Description                                                                                 |
|------------|--------|---------------------------------------------------------------------------------------------|
| **decode** | Object | Options for what types of files the app can open.                                          |
| **encode** | Object | Options for what types of files the app can save.                                          |

Both accept:

| Property                 | Type          | Description                                                                                       |
|--------------------------|---------------|---------------------------------------------------------------------------------------------------|
| `startIn`                | Path          | A path relative to the user's home directory of where to start when opening the file explorer.    |
| `excludeAcceptAllOption` | Boolean       | Whether to have the "All Files" filter option. By default shown on `decode` and hidden on `encode`. |
| `types` (required)       | Array         | The types of files the app can open.                                                              |

Each `types` item:

| Property      | Type                | Description                                                                                                    |
|---------------|---------------------|----------------------------------------------------------------------------------------------------------------|
| `accept`      | Object/String/Array | Either a map from mimetypes to their extensions, a lone mimetype, or a list of mimetypes.                      |
| `description` | String              | A title for the filename shown in the dialog picker.                                                            |
| `icons`       | Array               | A list of icon sizes for the file type. Each icon has `sizes` (`16x16`/`32x32`) and `src` (in the `.../[size]/[type]/[name].[ext]` format, as `/42/assets/icons/` symlinks to it). |

## System tray

| Property | Type    | Description                                                                                        |
|----------|---------|----------------------------------------------------------------------------------------------------|
| **tray** | Boolean | Marks the app as a tray app, calling the module's `renderTray` function at startup to put it in the system tray. Default is `false`. |

## Audio

| Property            | Type    | Description                                                                                                 |
|---------------------|---------|-------------------------------------------------------------------------------------------------------------|
| **hasAudioInput**   | Boolean | Marks an app as an audio app (apps which take in audio input). Default is `false`.                          |
| **hasAudioOutput**  | Boolean | Set to `false` to prevent audio apps from being added to the mixer. No effect on apps without audio input. Default is `true`. |
| **hideBypassButton**| Boolean | Hides the bypass button on audio apps. Default is `false`.                                                 |
| **hideAudioIOButton**| Boolean | Hides the audio IO button on audio apps. Default is `false`.                                              |

## Window

These options get passed into the app's [dialog](/docs/gui/dialog) window.

| Property      | Type                    | Description                                                                                                      |
|---------------|-------------------------|------------------------------------------------------------------------------------------------------------------|
| **dialog**    | Object                  | Options to be passed into the dialog window. See the [dialog documentation](/docs/gui/dialog).                   |
| **x**         | Number                  | The default X position of the window in pixels.                                                                  |
| **y**         | Number                  | The default Y position of the window in pixels.                                                                  |
| **width**     | Number                  | The default width of the window in pixels.                                                                       |
| **height**    | Number                  | The default height of the window in pixels.                                                                      |
| **modal**     | Boolean                 | If `true`, the window is rendered on top of the whole OS and darkens the background. Default is `false`.          |
| **stealFocus**| Boolean                 | If `false`, the window will not be automatically focused when opening. Default is `true`.                         |
| **clear**     | Boolean                 | If `true`, the window will not have a border. Default is `false`.                                                |
| **inset**     | Boolean                 | If `true`, the window will have an inset border around the content. Default is `false`.                           |
| **header**    | Plan                    | A [Plan](/docs/guide/plan) rendered above the window's content.                                                   |
| **footer**    | Plan                    | A [Plan](/docs/guide/plan) rendered below the window's content.                                                   |
| **resizable** | Boolean                 | If `false`, the window cannot be resized via the edges (still maximizable). Default is `true`.                    |
| **maximizable**| Boolean                | If `false`, the window will not have the maximize button. Default is `true`.                                      |
| **minimizable**| Boolean                | If `false`, the window will not have the minimize button. Default is `true`.                                      |
| **maximized** | Boolean/`"{{pointer.isTouch}}"` | Whether the window will be maximized. If omitted it will be unmaximized but will save when the app is closed and reopened. The special `"{{pointer.isTouch}}"` value maximizes the window on touchscreen devices. Default is `false`. |
| **dockable**  | Boolean                 | If `false`, the window will not [appear in the taskbar](../internals/gui/dock.md#how-it-works). Default is `true`.                                         |
| **skipSave**  | Array\<String\>/Boolean | A list of dialog properties to not save on disk (e.g. `x`, `y`, `width`, `height`). If `true`, no properties get saved. |

## Dialog buttons

| Property        | Type                     | Description                                                                                                     |
|-----------------|--------------------------|-----------------------------------------------------------------------------------------------------------------|
| **agree**       | Boolean/String           | The message for the agree button. If `true`, it becomes `"Ok"`. Default is `false`.                             |
| **beforeAgree** | Plan                     | A [Plan](/docs/guide/plan) rendered before the agree button.                                                    |
| **afterAgree**  | Plan                     | A [Plan](/docs/guide/plan) rendered after the agree button.                                                     |
| **decline**     | Boolean/String           | The message for the decline button. If `true`, it becomes `"Cancel"`. Default is `false`.                       |
| **beforeDecline**| Plan                    | A [Plan](/docs/guide/plan) rendered before the decline button.                                                  |
| **afterDecline**| Plan                     | A [Plan](/docs/guide/plan) rendered after the decline button.                                                   |
