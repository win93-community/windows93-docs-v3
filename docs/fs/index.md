# Filesystem

## Usage

```js
import { fs } from "/42/api/fs.js"
// or
const { fs } = sys42
```

`fs` is an instance of `FileSystem`.

> [!CAUTION] Do not create new instances of `FileSystem`.

> [!TIP] View the [driver internals page](/internals/indexeddb) to learn more about mount configuration.

## Type notes

Signatures below use TypeScript-style notation for clarity.

```ts
type FsPath = string
type AnyArgs = unknown[]
```

Some methods forward extra arguments to the active driver, so exact parameter and return shapes can vary by backend.

## Check methods

### `access(path, ...args)`

```ts
access(path: FsPath, ...args: AnyArgs): Promise<unknown>
```

Checks whether a path can be accessed. Result shape is driver-specific.

### `getURL(path, ...args)`

```ts
getURL(path: FsPath | URL, ...args: AnyArgs): Promise<string | URL>
```

Resolves a usable URL for a filesystem path.

Behavior:

- accepts `string` or `URL`
- external origin/protocol is returned unchanged
- local URL/path is resolved through the active filesystem driver

### `isFile(path, ...args)`

```ts
isFile(path: FsPath, ...args: AnyArgs): Promise<boolean>
```

Returns whether `path` points to a file.

### `isDir(path, ...args)`

```ts
isDir(path: FsPath, ...args: AnyArgs): Promise<boolean>
```

Returns whether `path` points to a directory.

### `isLink(path, ...args)`

```ts
isLink(path: FsPath, ...args: AnyArgs): Promise<boolean>
```

Returns whether `path` points to a symbolic link.

### `link(path, ...args)`

```ts
link(path: FsPath, ...args: AnyArgs): Promise<void>
```

Creates or updates a link entry. Exact link semantics depend on the driver and args.

## File methods

### `open(path, ...args)`

```ts
open(path: FsPath, ...args: AnyArgs): Promise<unknown>
```

Opens a file handle/resource. Return type is backend-specific.

### `read(path, ...args)`

```ts
read(path: FsPath, ...args: AnyArgs): Promise<unknown>
```

Reads file content. Return type depends on the encoding/options passed.

### `write(path, ...args)`

```ts
write(path: FsPath, ...args: AnyArgs): Promise<void>
```

Writes content to a file. Concurrent writes to the same path are serialized.

### `append(path, ...args)`

```ts
append(path: FsPath, ...args: AnyArgs): Promise<void>
```

Appends content to a file. Concurrent appends/writes to the same path are serialized.

### `delete(path, ...args)`

```ts
delete(path: FsPath, ...args: AnyArgs): Promise<void>
```

Deletes a file.

## Directory methods

### `writeDir(path)`

```ts
writeDir(path: FsPath): Promise<void>
```

Creates a directory.

### `readDir(path, ...args)`

```ts
readDir(path: FsPath, ...args: AnyArgs): Promise<string[]>
```

Reads directory entries. Common option patterns include recursive listing.

### `deleteDir(path)`

```ts
deleteDir(path: FsPath): Promise<void>
```

Deletes a directory.

## Stream methods

### `sink(path, options)`

```ts
sink(
	path: FsPath,
	options?: { queuingStrategy?: QueuingStrategy<Uint8Array> } & Record<string, unknown>,
): WritableStream<Uint8Array>
```

Returns a writable stream that persists chunks to `path`.

### `source(path, options)`

```ts
source(
	path: FsPath,
	options?: { queuingStrategy?: QueuingStrategy<Uint8Array> } & Record<string, unknown>,
): ReadableStream<Uint8Array>
```

Returns a readable stream for file content.

Notes:

- source initialization is lazy (first `pull`)
- if the stream has no chunks, it emits a single empty `Uint8Array` before close

## Copy and move

### `copy(from, to, options)`

```ts
copy(
	from: FsPath,
	to: FsPath,
	options?: {
		delete?: boolean
		silent?: boolean
		progress?: () => TransformStream<Uint8Array, Uint8Array>
	} & Record<string, unknown>,
): Promise<void>
```

Copies a file or directory tree.

Behavior:

- file copy uses stream piping (`source` -> optional `progress` transform -> `sink`)
- directory copy walks recursively
- when `options.delete` is true, copy behaves as move
- emits `copy` or `move` unless `options.silent` is true

### `move(from, to, options)`

```ts
move(
	from: FsPath,
	to: FsPath,
	options?: {
		silent?: boolean
		progress?: () => TransformStream<Uint8Array, Uint8Array>
	} & Record<string, unknown>,
): Promise<void>
```

Moves a file or directory tree.

Guard:

- throws if destination is inside source directory

## Text and data helpers

### `writeText(path, value, encoding = "utf-8")`

```ts
writeText(path: FsPath, value: string, encoding?: string): Promise<void>
```

Writes text content.

### `readText(path, encoding = "utf-8")`

```ts
readText(path: FsPath, encoding?: string): Promise<string>
```

Reads text content.

### `writeJSON(path, value, replacer, space = 2)`

```ts
writeJSON(
	path: FsPath,
	value: unknown,
	replacer?: (this: unknown, key: string, value: unknown) => unknown,
	space?: number,
): Promise<void>
```

Serializes a value with `JSON.stringify` and writes UTF-8 text.

### `readJSON(path, options)`

```ts
readJSON(path: FsPath, options?: { strict?: boolean }): Promise<unknown>
```

Reads and parses JSON text.

- `strict: true` uses `JSON.parse`
- default mode uses `JSON5.parse`

### `readJSON5(path)`

```ts
readJSON5(path: FsPath): Promise<unknown>
```

Reads and parses JSON5 text.

### `writeJSON5(path, value, options)`

```ts
writeJSON5(path: FsPath, value: unknown, options?: Record<string, unknown>): Promise<void>
```

Writes JSON5 content.

Behavior:

- `value === undefined` writes an empty string
- attempts patch write against previous content when possible
- falls back to full `JSON5.stringify` output

### `writeCBOR(path, value)`

```ts
writeCBOR(path: FsPath, value: unknown): Promise<void>
```

Encodes value as CBOR and writes binary data.

### `readCBOR(path)`

```ts
readCBOR(path: FsPath): Promise<unknown>
```

Reads binary data and decodes CBOR.

## Events

The class emits at least:

- `copy` with `(from, to)`
- `move` with `(from, to)`

Emission can be suppressed in recursive/internal calls by passing `silent: true`.

> [!TIP] [View the events reference](/intro/events)

## Practical examples

### Basic file operations

```js
await fs.writeText("~/notes/todo.txt", "hello")
const text = await fs.readText("~/notes/todo.txt")
await fs.delete("~/notes/todo.txt")
```

### JSON and JSON5

```js
await fs.writeJSON("~/config/app.json")
const config = await fs.readJSON("~/config/app.json")

await fs.writeJSON5("~/config/dev.json5")
const dev = await fs.readJSON5("~/config/dev.json5")
```

### Directory copy and move

```js
await fs.copy("~/projects/demo", "~/backup/demo")
await fs.move("~/backup/demo", "~/archive/demo")
```