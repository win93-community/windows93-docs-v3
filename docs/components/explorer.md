# explorer

[View Source](https://v3.windows93.net/c/sys/ui/components/explorer.js)  
Similar to the [folder](components/folder.md) component. Creates a file explorer.  
Can go up a directory with the `Alt+Up` key combo.

## Component props
### path
Path explorer should open up to. Default is "/".
### view
Either "grid" or "tree". Default is "grid".
### glob
Unknown boolean
### isPicker
Whether the user is supposed to pick a file in the explorer. Boolean.
### multiselectable
Whether more than one item can be selected
### selection
Array of selected items.
### showHiddenFiles
Boolean. Whether the explorer should show hidden files. Default is true.  
Can be changed with the `Ctrl+H` keyboard combo.

## Function arguments
### path
### options