
# Render

The render module is the core of the Plan system. It takes plan objects and produces DOM elements.  
[Learn more](/docs/guide/plan) about plan.

## Usage

```js
import { render } from "/42/api/gui/render.js"
```

## Basic rendering

```js
const el = render({
  tag: "button",
  text: "Click me",
  class: "primary",
  on: {
    click() {
      console.log("clicked")
    },
  },
})
```

## Helpers

### `toPlanObject(value)`

Converts a value to a plan object if possible.

### `isPlanObject(value)`

Checks if a value is a plan object.
