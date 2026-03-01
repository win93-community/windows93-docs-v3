# explorer

[View code source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/components/explorer.js)  
Similar to the [folder](components/folder.md) component. Creates a file explorer.  
Can go up a directory with the `Alt+Up` key combo.

## Component props

| Property         | Type    | Description                                                                 |
|------------------|---------|-----------------------------------------------------------------------------|
| `path`           | String  | Path explorer should open up to. Default is "/".                          |
| `view`           | String  | Either "grid" or "tree". Default is "grid".                                |
| `glob`           | Boolean | Unknown boolean                                                             |
| `isPicker`       | Boolean | Whether the user is supposed to pick a file in the explorer.               |
| `multiselectable`| Boolean | Whether more than one item can be selected.                                |
| `selection`      | Array   | Array of selected items.                                                   |
| `showHiddenFiles`| Boolean | Whether the explorer should show hidden files. Default is true. Can be changed with the `Ctrl+H` keyboard combo. |

## Function arguments

| Argument | Description |
|----------|-------------|
| `path`   |             |
| `options`|             |