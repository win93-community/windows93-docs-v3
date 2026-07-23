
# Persist

The persist module provides a simple key-value storage backed by the filesystem. Think of it like a registry for your application, where you can store configuration and state data.

:::danger
**This is a low-level API.**

The `keep.js` module is a higher-level API built on top of `persist`.

The `ConfigFile` Class is an even higher-level API extended to create and manage advanced system configuration files, specifically the [Managers](../internals/managers/).
:::

## Usage

```js
import { persist } from "/42/api/persist.js"
```

## Read

```js
const config = await persist.read("/config/app.json")
```

## Write

```js
await persist.write("/config/app.json", { theme: "dark", fontSize: 14 })
```

## Supported formats

Data files must use one of these extensions:

- `.json`
- `.json5`
- `.cbor`

## Events

The persist module emits events when data changes:

```js
persist.on("change", (path) => {
  console.log(`Config changed: ${path}`)
})
```
