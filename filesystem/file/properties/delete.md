# delete

### About

Deletes a file.

{% hint style="warning" %}
This is an irreversible action.
{% endhint %}

### Usage

`$file.delete(path, callback)`

### Subfunctions, etc.

| Parameter           | Type     | Description                                                             |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| path                | String   | The path of the file that should be deleted.                            |
| callback (optional) | Function | Called with the deleted path after the file has finished being deleted. |
