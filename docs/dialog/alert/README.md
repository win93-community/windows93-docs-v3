# $alert

### Examples

![](assets/alert.png ':ignore')

Shows an alert window that the user can close

### Usage

`$alert(options, callback)`

### Parameters

| Parameter                      | Type                                                                                                                 | Remarks                                                                                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [options](broken-reference)    | String or [WinObject](https://github.com/its-pablo/windows93-docs/blob/main/dialog/alert/broken-reference/README) | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported inside the string. |
| [callback](params/callback) | Function                                                                                                             | The callback for the function. Called with true if user presses OK.                                                                             |

### Methods

| Name     | Description                                                              |
|----------|--------------------------------------------------------------------------|
| help     | Shows an alert window against a white background that the user can close |
| error    | TODO                                                                     |
| progress | TODO                                                                     |
| info     | TODO                                                                     |

