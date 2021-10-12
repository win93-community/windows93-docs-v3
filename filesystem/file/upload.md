# upload

### About

Shows a browser file open dialog, then gives you a FileList.

### Usage

`$file.upload(callback, todo)`

### Parameters

| Parameter | Type     | Description                                                                                                                                                                                              |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callback  | Function | Called with the [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) of the files that the user has selected.                                                                           |
| options   | Object   | Object with three properties. `accept`, the file types the user can select (\* by default), `multiple`, whether multiple files can be selected by the user (false by default), and an onchange callback. |
