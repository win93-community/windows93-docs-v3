# Explorer internals

## Hidden files
`Ctrl H` can be used to toggle hidden file visibility. Hidden files are files that start with dots.  
This only affects the *focused context*. You can have hidden files visible on the desktop, hidden in one explorer window, and visible in another explorer window all at the same time. This is likely a bug(?). Toggling hidden files does not persist throughout sessions.  
Additionally, on some browsers, the Windows93 HTML document gets unfocused after toggling, meaning striking `Ctrl H` again right after will bring up the browser history page.  

Toggling hidden files on the desktop also seems to reset the icon arrangement. Icons will be sorted into columns (in semi-alphabetical order) immediately on use of this keyboard shortcut.

## .directory files
`.directory files` are present in special system directories to dictate behavior. They use the same INI-based format as [.desktop files](intro/faq), requiring a `[Desktop Entry]` header.  
However, unlike `.desktop`, `.directory` files are not associated with TextEdit, and instead open in base64 viewer.  
Directory files only support an Icon property, which must be a [valid picto](components/picto.md) (otherwise, it will default to "folder"). Properties such as name, exec, etc are not supported.