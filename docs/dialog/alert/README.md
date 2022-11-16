# $alert

### Examples

![](assets/alert.png ':ignore')

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
| [error](#error)       | Displays an error to the user                                            |
| [progress](#progress) | Displays a loading bar, which may be filled using a function on a loop   |
| [info](#info)         | Displays a pop-up window that contains some info                         |

#### help
##### About
Shows an alert window against a white background that the user can close. Should
##### Examples

![](assets/alertHelp.png)

##### Usage

`$alert.help(options, callback)`

##### Parameters
| Parameter | Type                | Description                                                                                                                             |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| options   | String or WinObject | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported in string. |
| callback  | Function            | The callback for the function. Called with true if user presses OK                                                                      |


#### Error
##### About
Displays an error. Can contain quite a bit of text to let the user know exactly what went wrong.

##### Examples

TODO

##### Usage

`$alert.error(options, callback)`

##### Parameters
| Parameter | Type                | Description                                                                                                                             |
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| options   | String or Winobject | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported in string. |
| callback  | Function            | The callback for the function. Called with true if the user presses OK                                                                  |


#### Progress
##### About
TODO
#### info
##### About
TODO