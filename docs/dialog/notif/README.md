---
description: Displays a notification
---

# $notif

### About

`$notif` is used for displaying notifications. Notifications appear naturally when deleting files or modifying them at the bottom right corner.

### Example

{% tabs %}
{% tab title="Screenshot" %}
![](../../assets/notif.png)
{% endtab %}

{% tab title="Code" %}
```javascript
$notif('An example notification', 'Test')
```

OR

```javascript
$notif({
    title: "Test",
    text: "An example notification"
})
```
{% endtab %}
{% endtabs %}

### Usage

`$notif(text, title)`

### [Arguments](args/)

<table><thead><tr><th>Name</th><th data-type="select" data-multiple>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="args/opt/">opt</a></td><td></td><td>Object with known properties or text/HTML to be displayed</td></tr><tr><td><a href="args/el/">el</a></td><td></td><td>Element object (where the notif will be displayed) OR the title of the notification (only if opt is a string/HTML)</td></tr></tbody></table>
