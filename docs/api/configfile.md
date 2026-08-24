
# ConfigFile

> 42/api/os/ConfigFile.js

ConfigFile is the base class for system config files. Each [manager](./) extends it to own one persistent settings file.

It provides a standard lifecycle: load or reset the file, run setup hooks, and expose a `ready` promise.

## Backing files

A ConfigFile reads and writes a single data file through [persist](/docs/api/persist). Files must end in `.json`, `.json5` or `.cbor`.

Paths are normalized. Relative filenames belong to the current user and are stored under `$HOME`. Absolute paths are global. For example, `"config/apps.json5"` maps to the user's `config/apps.json5`, while `"/users.json5"` is shared by everyone.

## Instance state

- `path` - the resolved file path.
- `isUserConfig` - true when the filename is relative (belongs to the current user).
- `defaults` - fallback value merged in when the file is reset.
- `value` - the loaded config data.
- `version` - the file's last-modified timestamp, or `-1` when missing. Managers use it to detect remote updates.
- `ready` - a promise that resolves once init completes. Await it before using a manager.

## Lifecycle

Managers override the hooks, then call `init()`:

1. `load()` or `reset()` - in the desktop realm, `reset()` runs when the file does not exist yet, `load()` otherwise. Other realms always load.
2. `setup(...)` - post-load setup, used to register event listeners and kick off async work.
3. `ready.resolve()` - signals that the manager is usable.

Overridable hooks:

- `setup(...)` - runs after the value is loaded.
- `postload()` - runs after `value` is set (from both load and reset).
- `populate()` - returns the initial value used by `reset()`.

## Methods

- `init(...args)` - runs the lifecycle. Resolves `ready` on success.
- `load()` - reads the file into `value`, then runs `postload()`. Corrupt files are reported and reset instead.
- `reset()` - rebuilds `value` from `configure(defaults, populate())`, runs `postload()`, saves.
- `save()` - writes `value` to disk. Skips user configs when no user is logged in.
- `update(value)` - merges an object into `value`, or runs a function over it, then saves.
