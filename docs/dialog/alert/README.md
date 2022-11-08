# $alert

### Examples

![](/assets/alert.png ':ignore')

Shows an alert window that the user can close

### Usage

`$alert(options, callback)`

### Parameters

| Parameter                      | Type                                                                                                                 | Remarks                                                                                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [options](#)    | String or [WinObject](https://github.com/its-pablo/windows93-docs/blob/main/dialog/alert/broken-reference/README) | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported inside the string. |
| [callback](params/callback) | Function                                                                                                             | The callback for the function. Called with true if user presses OK.                                                                             |

### Methods

| Name                  | Description                                                              |
|-----------------------|--------------------------------------------------------------------------|
| [help](#help)         | Shows an alert window against a white background that the user can close |
| [error](#error)       | TODO                                                                     |
| [progress](#progress) | TODO                                                                     |
| [info](#info)         | TODO                                                                     |

#### help
##### About
Shows an alert window against a white background that the user can close
##### Examples

![](/assets/alertHelp.png ':ignore')

##### Usage

`$alert.help(options, callback)`

##### Parameters
| Parameter | Type                | Description                                                                                                                             |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| options   | String or WinObject | the text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported in string. |
| callback  | Function            | The callback for the function. Called with true if user presses OK                                                                      |
#### error
##### About
TODO
#### progress
##### About
TODO
#### info
##### About
TODO