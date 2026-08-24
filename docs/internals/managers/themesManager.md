# Themes Manager

```js
import { themesManager } from "/42/api/os/managers/themesManager.js"
// Or
const themesManager = sys42.themes
```

The themes manager loads, previews and saves the current theme.

:::tip
The [Appearance](https://github.com/win93-community/programs/tree/main/system/Appearance) app is the GUI interface for the themes manager. Look through the [`Appearance.js`](https://github.com/win93-community/programs/blob/main/system/Appearance/Appearance.js) code to further understand the themes manager.
:::

Its config file is in `~/config/themes.json5`. Here's the data structure:

- `current` - path of the applied theme.
- `options` - per-theme config.
- `overrides` - which theme slots are disabled (wallpaper, colors, cursors, sounds).
- `slotValues` - user values kept for disabled slots.

**Slots** are design components that can be kept independent from themes.  
There are four slots: wallpaper, colors, cursors, sounds. Sounds is unimplemented.

## Theme

A `Theme` wraps a theme stylesheet plus an optional JS module (a `.js` file next to the `.css`). The module may export:

- `configureTheme(theme)` - returns the CSS properties to apply.
- `refreshTheme(theme)` - re-applies properties after a change.
- `getThemePlans(theme)` - theme-specific plans.

The theme stylesheet is injected into the document. The manager's `prefix` and `suffix` keep the surrounding system CSS intact.

<details open>
<summary>Theme listing</summary>

Note that the themes manager isn't in charge of listing/fetching the available themes. Rather, this is done by the Appearance app.  
Themes are registered from any file that ends with '.theme.css'.
</details>
## Applying

- `preview(path, options)` - loads a theme without saving it.
- `apply(path, options)` - Saves the config and writes the generated CSS to the user's `config/style.css`, symlinked to `/style.css`.
- `revert()` - goes back to the saved theme. (Undos preview)
- `setOverrides(overrides)` - toggles theme slots. Disabled slots keep the user's current values (stored in `slotValues`).
- `updateCurrentProperty(property, value)` - edits a single CSS variable of the current theme.

Appearance sessions bundle changes that can be applied or cancelled together (`beginAppearanceSession`, `applyAppearanceSession`, `cancelAppearanceSession`).
