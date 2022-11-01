## About

This is the one function you can use to store files that automatically picks the right thing for you. This function is recommended for storing and reading files. Please note that all file paths should start with /a/.

# $file.open

Reads the content of a file.

`$file.open(path, type, callback)`

| Parameter           | Type     | Description                                                  |
| ------------------- | -------- | ------------------------------------------------------------ |
| path                | String   | The path of the file to be read.                             |
| type                | String   | The type of the output. This can be "String", "Object", or "Blob". |
| callback (optional) | Function | Called with the content of the file.                         |

**Example:** `$file.open("/a/README.txt", "String", (e) => console.log(e))`

# $file.copy

Copies a file or folder to another location.

`$file.open(fromPath, toPath, callback)`

| Parameter           | Type   | Description                                     |
| ------------------- | ------ | ----------------------------------------------- |
| fromPath            | String | The path that the file will be copied from.     |
| toPath              | String | The path of where the new copy should be saved. |
| callback (optional) | String | Called when the copying process is finished.    |

# $file.delete

Deletes a file.

`$file.delete(path, callback)`

| Parameter           | Type     | Description                                                  |
| ------------------- | -------- | ------------------------------------------------------------ |
| path                | String   | The path of the file that should be deleted.                 |
| callback (optional) | Function | Called with the deleted path after the file has finished being deleted. |

# $file.download

Downloads a file to your actual computer. This only works with files, not folders.

`$file.download(path,name)`

| Parameter       | Type   | Description                                           |
| --------------- | ------ | ----------------------------------------------------- |
| path            | String | The path of the file to be downloaded.                |
| name (optional) | String | The file name to be used when the file is downloaded. |

# $file.format

Removes all user data (reinstalls). Please don't use this. Please. This doesn't reload by itself so you have to add that to the callback.

**WARNING: Running this will delete everything saved on /a/**

`$file.format(cb)`

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| cb        | Function | Called after all user data has been deleted. You would usually want to add a reload here. |

**Example:** `$file.format(() => location.reload())`

# $file.move

Moves a file or folder to another location.

`$file.open(fromPath, toPath, callback)`

| Parameter           | Type   | Description                                 |
| ------------------- | ------ | ------------------------------------------- |
| fromPath            | String | The path of the file to be moved.           |
| toPath              | String | The path of where the file should be moved. |
| callback (optional) | String | Called when the moving process is finished. |

# $file.rename

Changes the name of a file or folder

`$file.open(path, newName, callback)`

| Parameter           | Type   | Description                                   |
| ------------------- | ------ | --------------------------------------------- |
| path                | String | The path of the file to be renamed            |
| newName             | String | The new name.                                 |
| callback (optional) | String | Called when the renaming process is finished. |

# $file.upload

Shows a browser file open dialog, then gives you a FileList.

`$file.open(callback, todo)`

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| callback  | Function | Called with the [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) of the files that the user has selected. |
| options   | Object   | Object with three properties. `accept`, the file types the user can select (* by default), `multiple`, whether multiple files can be selected by the user (false by default), and an onchange callback. |

