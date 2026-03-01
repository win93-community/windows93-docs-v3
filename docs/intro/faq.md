# Frequently Asked Questions

## What is a .desktop file?
The new version of the `lnk42` shortcut: a way to click-to-run your app. This filetype and usage is taken from [FreeDesktop](https://specifications.freedesktop.org/desktop-entry/latest/).  

Desktop apps must be prefixed with `[Desktop Entry]`, and can have three properties separated by newlines: `Name` and `Exec`. Name will determine the name of the file in the explorer/desktop, while Exec determines the application launched by the shortcut.  
If the shortcut lacks a name, the filename (without .desktop) will be used instead.

The system will scan for programs in `/c/programs` that have `Exec` matching the [`command` property in the manifest](intro/making-app.md).  
Additionally, the file icon will be determined by the icon in the `Exec` program directory if no icon is provided.