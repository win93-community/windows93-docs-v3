# Confirm

## Usage

```js
import { prompt, alert } from "/42/ui/layout/dialog.js"

// await confirm(message, opts) -> string/undefined (undefined if cancelled)

let name = await prompt("What is your name?", {label: "hey kid", agree: "my name is..", decline: "stranger danger!!"})
if (name) {
    await alert(`Nice to meet you, ${name}.`)
} else {
    await alert("Good call")
}
```

### Options
*This is an extension of the dialog options*

| Name          | Type | Description
| agree         | String | text for the "Ok" button
| decline       | String | text for the "Cancel" button
| beforeAgree   | String/Plan/HTMLElement | Content to be rendered to the left of the "Ok" button
| afterAgree    | String/Plan/HTMLElement | Content to be rendered to the right of the "Ok button
| beforeDecline | String/Plan/HTMLElement | Content to be rendered to the left of the "Cancel" button
| afterDecline  | String/Plan/HTMLElement | Content to be rendered to the right of the "Cancel" button

