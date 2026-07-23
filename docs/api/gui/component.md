
# Component

The Component class is the base class for all custom UI elements in Windows 93.

## Usage

```js
import { Component } from "/42/api/gui/Component.js"
```

## Creating a component

```js
class MyComponent extends Component {
  static plan = {
    tag: "ui-my-component",
    props: {
      label: true,
    },
    content: "Hello!",
  }
}

Component.define(MyComponent)
```

## Static properties

| Property | Type | Description |
|----------|------|-------------|
| `plan` | Plan | Default plan for the component |
| `observedAttributes` | String[] | Attributes to watch for changes |

## Instance methods

- [`render(plan)`](/docs/api/gui/render) - re-render the component with a new plan
- `connectedCallback()` - called when added to the DOM
- `disconnectedCallback()` - called when removed from the DOM
- `attributeChangedCallback(name, oldVal, newVal)` - called when an observed attribute changes

## Registration

Use `Component.define(MyComponent)` to register a custom element.  
**The tag name is auto-generated from the class name (e.g. `MyComponent` becomes `ui-my-component`).**
