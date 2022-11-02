---
description: Shows an alert window against a white background that the user can close
---

# help

### Examples

![](<../../../assets/alert help.png>)

### Usage

`$alert.help(options, callback)`

| Parameter | Type                | Remarks                                                                                                                                |
| --------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| options   | String or WinObject | he text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported in string. |
| callback  | Function            | The callback for the function. Called with true if user presses OK                                                                     |
