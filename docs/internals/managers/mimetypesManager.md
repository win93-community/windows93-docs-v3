# Mime Types Manager

```js
import { mimetypesManager } from "/42/api/os/managers/mimetypesManager.js"
// Or
const mimetypesManager = sys42.mimetypes
```

The mimetypes manager maps file extensions and basenames to mimetypes, and to the apps that can open them.

The base mappings are populated from `/42/lib/constant/FILE_TYPES.js`.

## Data model

`{ type: { subtype: { mimetype, extnames, basenames, apps, openers } } }`.

After loading, the manager builds two lookup maps:

- `extnames` - extension → mimetype entry.
- `basenames` - basename → mimetype entry (for files with no extension).

Wildcards are supported. A `type/*` or `*/*` entry applies to all matching files.

## Methods

- `normalize(mimetypes, options)` - expands short entries (e.g. `"json": ".json"`) into full `type/subtype` entries. Sync.
- `add(mimetypes, appName, options)` - registers extnames and basenames, plus an app association. **New extensions are recorded in `openers` as per-extension app openers. The first item will become the default opener.**
- `setDefaultApp(mimetype, appName)` - makes an app the default for a mimetype. Applies to wildcard subtypes too.
- `list(mimetype, options)` - lists matching mimetype entries, optionally only those that have apps.
- `lookup(path)` - returns the mimetype entry for a path plus the ordered list of apps that can open it. Per-extension `openers` defaults are moved to the front.
- `getExtnames(mimetype, options)` - all extensions registered for a mimetype.
- `parse(mimetype)` - parses a mimetype string into `{ type, subtype, suffix }`.
