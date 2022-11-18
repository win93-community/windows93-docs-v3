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
Shows an alert window against a white background that the user can close. Should be used for well, displaying help.
##### Examples

![](/docs/assets/alertHelp.png ':ignore')

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

![](/docs/assets/alertError.jpg ':ignore')

##### Usage

`$alert.error(options, callback)`

##### Parameters
| Parameter | Type                | Description                                                                                                                             |
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| options   | String or Winobject | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported in string. |
| callback  | Function            | The callback for the function. Called with true if the user presses OK                                                                  |


#### Progress
##### About
Displays a loading bar to the user. We don't really know much about this, so don't panic, we're trying to find out how this thingy works. We assume you use a loop or a function to increase the bar...



#### info
##### About
Displays a pop-up that contains info to the user. Used for when you want to provide some sort of tutorial or whatever.
##### Examples

![](/docs/assets/alertInfo.png ':ignore')

##### Usage

`$alert.info(options, callback)`

##### Parameters
| Parameter | Type     | Description                                                            |
|-----------|----------|------------------------------------------------------------------------|
| options   | String   | The text to display. THIS DOES NOT SUPPORT A WinObject!                |
| callback  | Function | The callback for the function. Called with true if the user presses OK |