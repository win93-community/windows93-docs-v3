# Apps Manager

```js
import { appsManager } from "/42/api/os/managers/appsManager.js"
// Or
const appsManager = sys42.apps
```

The apps manager keeps the list of installed apps and launches them.

:::tip
Understanding the apps manager is fundamental to building a process manager, or any app that interacts with other apps.  
If you're trying to make your app single-instance, just add `solo: true` to the manifest.
:::

Its config file is the user's `config/apps.json5`. It is a map of `command` → app manifest.
It's also available globally, at `sys42.apps`.

## Manifests

The manifests stored in the apps manager is different from the one in app.manifest.json5.  
The program directory is determined by the directory app.manifest.json5 is in.

<details open>
<summary>Manifest normalization logic</summary>

The manifest normalizer is in charge of more than just normalization.

### Icons
* It looks for icons in the program's directory and adds them to the manifest's icons property.
  * It recursively looks in the `icons/` directory, as well as any files that start with `icon` in the program directory (not recursive)
* It registers 16x16, 32x32, and 160x160 icons.
  * 160x160 is an unused size that was present in the v3 beta.
* *jpg*, *gif*, *svg*, and *png* are the only file extensions supported. Note that *jpeg* is not included.
* If an icon's name (not incl. file extension) is simply *icon*, it is registered as a 32x32 icon.
* It expands the *icon* property into *icons*, and registers it as the 32x32 size.

### Encode/Decode

### Command
The command is made lowercase, truncated at the first period (if any), and stripped of any non-alphabetical characters.  
If there is no command it takes the name of the program and does the process above.  

When the manifest normalizer runs, it adds an property, *updated*, to the manifest with `Date.now()`.
</details>

`setup()` watches the file index for new or deleted manifests and installs or removes them accordingly. It also compares the remote `/apps.cbor` `Last-Modified` header to the local `version` and updates when the remote is newer.

## Installing

Installing an app (`add()` / `updateAll()`):

- normalizes the manifest and stores it under `value[command]`.
- registers `decode` types with the mimetypes and icons managers.
- writes a `.desktop` shortcut next to the manifest.
- creates a tray icon when the manifest has a `tray` entry.
- emits an `"add"` event.

A manifest whose `command` is already taken is rejected with an error toast, unless `update: true`.

## Launching

- `launch(appName, options)` - launches an app by command or name. Apps with audio input are routed to `AudioApp`.
- `open(paths, options)` - opens files. Directories open in the explorer, other paths are grouped by default app and launched.
- `lookup(path)` - returns the manifests that can open a path.

`launched` is a `WatchMap` of instance id → running `App`. It emits `add` and `delete` events.  

> This means you can easily get the App instance of an app by running `appsManager.launched.get(id)`

## Helpers

- `getManifest(appName)` - resolves a manifest by command or name.
- `getAppIcon(appName, size)` - icon for an app, falling back to the generic app icon.
- `createDesktopIcon()` / `writeDesktopIcon()` - build and write `.desktop` shortcuts.
- `initTrays()` - recreates tray icons for all apps with a `tray` entry.
- `listenIframeActions()` / `addIframeLiveReload()` - wire running iframe apps to actions and live reload.
