---
description: Shows an alert window that the user can close
---

# $alert

### Examples

![](<../../.gitbook/assets/image (1).png>)

Shows an alert window that the user can close

### Usage

`$alert(options, callback)`

| Parameter | Type                | Remarks                                                                                                                                         |
| --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| options   | String or WinObject | The text to display. Can also be a WinObject with a msg (and icon) property, to set more specific options. HTML is supported inside the string. |
| callback  | Function            | The callback for the function. Called with true if user presses OK.                                                                             |

### Sub

<table><thead><tr><th>Name</th><th data-type="select">Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="help.md">help</a></td><td></td><td>Shows an alert window against a white background that the user can close</td></tr><tr><td><a href="error.md">error</a></td><td></td><td>TODO</td></tr><tr><td><a href="progress.md">progress</a></td><td></td><td>TODO</td></tr><tr><td><a href="info.md">info</a></td><td></td><td>TODO</td></tr></tbody></table>
