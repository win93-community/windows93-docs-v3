# alert

[View Source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/invocables/filePickerOpen.js)  
filePickerOpen can be used to display the open file picker dialog.

## Usage
```ts
import { filePickerOpen } from "42/ui/invocables/filePickerOpen.js"
const result = await filePickerOpen(path: string, options: object)
```

## Arguments
### path
String. Path for the dialog to initially open up to.

### options
The options object can contain the properties `agree` and `decline` (both strings) that contain the text for both buttons, as well as the properties in the [Explorer function options object](components/explorer.md#options)