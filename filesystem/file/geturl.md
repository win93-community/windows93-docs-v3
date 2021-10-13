# getUrl

### About

`$file.getUrl` can be used to read the content of a file.

### Usage

`$file.getUrl(e, n, t)`

### Parameters

| Parameter | Type         | Description                 |
| --------- | ------------ | --------------------------- |
| e         | String       | Path for the file           |
| n         | Function     | Function with return output |
| t         | Undocumented | Undocumented                |

### Example

This example fetches the content of a file and embeds the blob into a window.

```javascript
$file.getUrl("/a/project/index.html",function(url){
    $window({
        url: url,
        title: "HTML Example",
        width: 200,
        height: 125
    })
})
```

### Return

```javascript
function(e, n, t) {
    t || (t = $fs.utils.getInfo(e)), 0 === (e + "").indexOf("/a/") ? p.open(e, "Blob", function(e) {
        var t = window.URL.createObjectURL(e);
        (n || $noop)(t)
    }, t.mime) : (0 === (e + "").indexOf("c/") && (e = "/" + e), (n || $noop)(e))
}
```
