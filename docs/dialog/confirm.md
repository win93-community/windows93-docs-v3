# $confirm

### About

`$confirm` is the perfect method for creating two-button dialogs. A use case for this is asking for program installation, so that users can select 'OK' to install, and 'Cancel' to cancel the operation.

### Parameters
| Parameter | Type               | Description                                                                                                   |
|-----------|--------------------|---------------------------------------------------------------------------------------------------------------|
| options   | string or WinObject| The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options     |
| callback  | Function           | The callback for the function. Called with true if user presses OK, and with false if the user pressed Cancel.|

### Examples

![](https://github.com/win93-community/windows93-docs/blob/testing-branch/docs/assets/confirm.png)
*This code...*

![](https://github.com/win93-community/windows93-docs/blob/testing-branch/docs/assets/result.png)
*... yields this*