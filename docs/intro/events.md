# Event listeners

> [!TIP] You can dispatch events very easily. Use `EventTarget.dispatchEvent(eventName)`.  
> For example, to reboot the system, use `window.dispatchEvent(new CustomEvent("ui:desktop.reboot"))`

Use `on` as a reactive object property inside a `plan` layout node.

```js
{
	tag: "button",
	text: "save",
	on: {
		click(e, el) {
			// ...
		},
	},
}
```

`on` supports normal DOM events and adds shortcut parsing, delegation, and cleanup options.

## Basic shape

```js
{
	on: {
		click(e, el) {},
		keydown(e, el) {},
	},
}
```

Handler arguments:

- `e`: event object
- `el`: current element bound by this layout node
- delegated handlers also receive `target` (matched child), see delegation section

If a handler returns `false`, default behavior is prevented and propagation is fully stopped.

## Multiple events in one key

Use `||` to bind the same handler to multiple event names:

```js
{
	on: {
		"focus || blur"(e, el) {
			// runs for both events
		},
	},
}
```

`||` is parsed with optional spaces, so `"a||b"` and `"a || b"` are equivalent.

## Item options

Inside a listener item you can use:

- `selector`: delegate to descendants matching selector
- `repeatable`: allow repeated keyboard events (`keydown` auto-repeat)
- `disrupt`: shorthand for prevent + stop + stopImmediate
- `stop`: shorthand for stop + stopImmediate
- `prevent`: shorthand for preventDefault
- `preventDefault`, `stopPropagation`, `stopImmediatePropagation`
- standard listener options: `capture`, `once`, `passive`, `signal`

`disrupt`, `stop`, and `prevent` are normalized to the explicit DOM cleanup flags.

## Delegation with `selector`

```js
{
	on: {
		selector: ".item",
		click(e, target, el) {
			// target: closest ".item"
			// el: node owning this on-map
		},
	},
}
```

If `selector` contains `:scope`, it is normalized against the owner element.

## Shortcut syntax

Any `on` key can be a keyboard shortcut expression.

```js
{
	on: {
		"Ctrl+S"(e) {},
		"Ctrl+K Ctrl+C"(e) {},
		"Ctrl+S || Meta+S"(e) {},
	},
}
```

The parser supports three concepts:

1. aliases: human-friendly key names converted to canonical key names
2. sequences: ordered steps separated by spaces
3. combinations (chords): keys/events that must match together at one step

## Aliases (full list)

These names are remapped automatically:

- `Ctrl` -> `Control`
- `Down` -> `ArrowDown`
- `Left` -> `ArrowLeft`
- `Right` -> `ArrowRight`
- `Up` -> `ArrowUp`
- `AltGr` -> `AltGraph`
- `Del` -> `Delete`
- `Esc` -> `Escape`

So `"Ctrl+S"` and `"Control+S"` are equivalent.

## Sequences

A sequence is a chain of steps separated by spaces.

```js
{
	on: {
		"Ctrl+K Ctrl+C"(e) {
			// step 1 then step 2 in order
		},
	},
}
```

Sequence behavior:

- each step must match in order
- mismatch resets sequence progress

## Combinations (chords)

A combination is built with `+` inside a step.

```js
{
	on: {
		"Control+Shift+KeyP"(e) {},
	},
}
```

Chord behavior:

- keys are checked against `e.key` (lowercased) or `e.code`
- code-style tokens like `KeyA`, `Digit1`, `Numpad0`, `ShiftLeft` target `e.code`
- if any part fails, chord state resets

Built-in code tokens (always compared to `e.code`):

- `ShiftLeft`
- `ShiftRight`
- `ControlLeft`
- `ControlRight`
- `AltLeft`
- `AltRight`
- `MetaLeft`
- `MetaRight`
- `Space`
- `Semicolon`
- `Equal`
- `Comma`
- `Minus`
- `Period`
- `Slash`
- `Backquote`
- `BracketLeft`
- `Backslash`
- `BracketRight`
- `Quote`

## Alternatives with `||`

Use `||` for OR branches:

```js
{
	on: {
		"Ctrl+S || Meta+S"(e) {
			// either branch triggers
		},
	},
}
```

Each side is parsed as its own full sequence/chord path.

## Event token vs key token

A token is treated as a raw event name (not key) when:

- length is greater than 1, and
- it is fully lowercase, or exactly `DOMContentLoaded`

Examples:

- `"click"` -> event listener for `click`
- `"DOMContentLoaded"` -> event listener for `DOMContentLoaded`
- `"Enter"` -> key token (`key: "enter"`)
- `"Return"` -> special case for Enter (`key: "enter"`, `code: "Enter"`)

`+` parsing note:

- `"Ctrl++"` means `Control` + `+` key
- `++` is interpreted as a literal plus token

## Repeat behavior

Keyboard handlers ignore auto-repeat by default (`e.repeat` is filtered).
Set `repeatable: true` to allow repeated keydown firing.

## Focus behavior for keyboard shortcuts

Keyboard shortcuts ensure the owner element is focusable when needed.
Internally this may apply `tabIndex: -1` so keyboard capture can work reliably.

## Practical examples

### click + delegated click

```js
{
	tag: "ul",
	on: {
		selector: "li",
		"click || keydown"(e, target, el) {
			// click/keydown on list items
		},
	},
}
```

### save shortcut with alternatives

```js
{
	on: {
		prevent: true,
		"Ctrl+S || Meta+S"(e) {
			// save action
		},
	},
}
```

### sequence shortcut

```js
{
	on: {
		disrupt: true,
		"Ctrl+K Ctrl+D"(e) {
			// run command palette action chain
		},
	},
}
```

## Notes

- keep shortcut tokens explicit when possible (`Control` over `Ctrl`) for readability
- use `prevent` or `disrupt` for browser-reserved shortcuts like save/find


# Event reference
Events can be listened to through plan's `on` or through `EventTarget.addEventListener`.

## `ui:desktop.reboot`
Reboots the system

## `ui:menu.items`
Fires when a menu is opened (typically a context menu).
This is useful for extending explorer and adding entries to the context menu.
The "opener" is in `e.target.openerEl`

## `ui:explorer.navigate`
Fires when explorer changes the active directory

## `ui:folder.nonexistant`
Most likely indicates fileindex corruption