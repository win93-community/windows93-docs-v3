# Confirm

## Usage

```js
import { confirm, alert } from "/42/ui/layout/dialog.js"

// await confirm(message, opts) -> boolean

let res = await confirm("Am I a duck?", {agree: "yes", decline: "no"})
if (res) {
    await alert("Quack!")
} else {
    await alert("Ok...")
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

