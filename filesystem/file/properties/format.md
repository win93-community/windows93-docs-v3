# format

### About

Removes all user data (reinstalls). Please don't use this. Please. This doesn't reload by itself so you have to add that to the callback.

{% hint style="danger" %}
**Running this will delete everything saved on /a/ - THIS IS INCREDIBLY DANGEROUS**
{% endhint %}

### Usage

`$file.format(cb)`

### Parameters

| Parameter | Type     | Description                                                                               |
| --------- | -------- | ----------------------------------------------------------------------------------------- |
| cb        | Function | Called after all user data has been deleted. You would usually want to add a reload here. |

### Example

`$file.format(() => location.reload())`
