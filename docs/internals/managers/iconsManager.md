# Icons Manager

```js
import { iconsManager } from "/42/api/os/managers/iconsManager.js"
// Or
const iconsManager = sys42.icons
```

The ConfigFile at *~/config/icons.json5* is an ordered list of icon theme directories. Later entries take priority over earlier ones. It's relatively simple.

It resolves the generic app icon fallbacks (`16x16` and `32x32`) and stores them in `fallbackAppIcon`.

## Resolving icons

Icons are looked up inside a theme directory. It matches on:

- a specific icon path or freedesktop icon name (e.g. `apps/generic`).
- file extension, mimetype, or basename (via `subtype`, `ext`, `type` folders).
- the `Icon` property of a `.directory` file for folders.
- a CSS variable (`--icon--...`).

Resolution falls back to the folder icon (`places/foler`) for directories, or the generic file icon (`subtype/octet-stream`).

## Methods

- `getIconPath(infos, size, options)` - returns a URL for an icon, or `""` when nothing matches.
- `getIconFromPath(path, size, options)` - returns full infos (name, description, image) for a path. `.desktop` shortcuts are resolved through their `Exec` and `Icon` entries.
- `getDefaultIconsDir()` - the default icons directory (*/42/assets/icons/*). The apps manager links new app icons into it.
