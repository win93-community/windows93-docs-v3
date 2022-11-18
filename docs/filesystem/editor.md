# $editor

### About

The `$editor` api creates a text editor. The `textarea` app uses the `$editor` api, so they both look fairly similar.

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

### Arguments

| Name          | Type    | Description    |
|---------------|---------|----------------|
| [opt](#opt)   | object  | Options object |
| [arg2](#arg2) | unknown | Unknown        |

#### opt

#### arg2