# $editor

### About

The `$editor` api creates a text editor. The `textarea` app uses the `$editor` api, so they both look fiarly similar.

### Example

<!-- tabs:start -->
#### Screenshot
![](assets/editorApi.png ':ignore')

#### Code
```javascript
textarea: {
      categories: "Development;TextEditor",
      name: "Textarea",
      type: "Editors",
      icon: "ext/nfo.png",
      accept: ".txt",
      exec: function(url, opt) {
        var cfg = $extend({}, opt);
        if (cfg.url) delete cfg.url;

        $editor.call(this, {
          type: "String",
          filePath: url,
          create: function(el) {
            var txtarea = document.createElement("textarea");
            txtarea.className = "app_textarea fullscreen";
            el.appendChild(txtarea);
            setTimeout(function() {
              txtarea.focus();
            }, 0);
            return {
              readFile: function(val) {
                txtarea.value = val;
              },
              setValue: function(val) {
                txtarea.value = val;
              },
              getValue: function(cb) {
                cb(txtarea.value);
              },
            };
          },
          window: $extend(
            {
              height: 345,
              width: 435,
            },
            cfg
          ),
        });
      },
    },
```
<!-- tabs:end -->

### [Arguments](args/)

<table><thead><tr><th>Name</th><th data-type="select" data-multiple>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="args/opt">opt</a></td><td></td><td>Options object</td></tr><tr><td><a href="args/arg2">arg2</a></td><td></td><td>Unknown</td></tr></tbody></table>

