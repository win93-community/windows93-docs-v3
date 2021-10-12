# open

### About:

Reads the content of a file.

{% hint style="warning" %}
This does not open the file with the first program listed, it simply reads the content of the file
{% endhint %}

### Usage:

`$file.open(path, type, callback)`

### Subfunctions, etc.

| Parameter           | Type     | Description                                                        |
| ------------------- | -------- | ------------------------------------------------------------------ |
| path                | String   | The path of the file to be read.                                   |
| type                | String   | The type of the output. This can be "String", "Object", or "Blob". |
| callback (optional) | Function | Called with the content of the file.                               |

### Example: 

`$file.open("/a/README.txt", "String", (e) => console.log(e))`
