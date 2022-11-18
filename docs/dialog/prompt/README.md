# $prompt

### About

`$prompt` is a quick way for users to input data into a dialog. Similar to the `$confirm` method, `$prompt` contains two buttons. However, it also contains a small input box.

### Usage

### Parameters
| Parameter    | Type                | Description                                                                                                             |
|--------------|---------------------|-------------------------------------------------------------------------------------------------------------------------|
| text         | String or WinObject | The question shown in the prompt. Can also be a WinObject with a msg (and icon) property, to set more specific options. |
| questiontext | String              | The text pre-entered in the input box. Required, use an empty string if not needed                                      |
| callback     | Function            | The callback. Called with two arguments, whether the user has pressed OK and the text they entered.                     |