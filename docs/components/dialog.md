# dialog

> [!CAUTION] [This is outdated, feel free to contribute to the docs and update this page. Otherwise it'll get updated in a few weeks.](https://github.com/win93-community/windows93-docs-v3)

[View code source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/components/dialog.js)  
The dialog component allows developers to create a simple alert dialog.

## Usage
```js
import dialog from "../../sys/ui/components/dialog.js"
```

### Arguments

| Property   | Type   | Description                     |
|------------|--------|---------------------------------|
| `label`    | String | Label for the dialog window.    |
| `content`  | String | Content inside the dialog window|
| `picto`    | ?      | Unknown                         |
| `footer`   | String | Dialog window footer.           |
| `plugins`  | Array  | Array of plugin ids             |