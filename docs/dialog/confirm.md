# $confirm

### About

`$confirm` is the perfect method for creating two-button dialogs. A use case for this is asking for program installation, so that users can select 'OK' to install, and 'Cancel' to cancel the operation.

### Parameters
| Parameter | Type               | Description                                                                                                   |
|-----------|--------------------|---------------------------------------------------------------------------------------------------------------|
| options   | string or WinObject| The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options     |
| callback  | Function           | The callback for the function. Called with true if user presses OK, and with false if the user pressed Cancel.|

### Examples

![](/assets/confirm.png)
*This code...*

![](/assets/result.png)
*... yields this*